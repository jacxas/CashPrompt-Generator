import { createServer } from 'node:http';
import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import fs from 'node:fs';

const DATA_DIR = process.env.DATA_DIR || '/data';
fs.mkdirSync(DATA_DIR, { recursive: true });

const db = new DatabaseSync(path.join(DATA_DIR, 'prompts.db'));
db.exec(`
  CREATE TABLE IF NOT EXISTS prompts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    tag TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`);

const sendJson = (res, status, data) => {
  const body = JSON.stringify(data);
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(body);
};

const readBody = (req) =>
  new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 1_000_000) { reject(new Error('payload too large')); req.destroy(); }
    });
    req.on('end', () => resolve(raw));
    req.on('error', reject);
  });

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');

    if (url.pathname === '/api/health') {
      return sendJson(res, 200, { ok: true });
    }

    if (url.pathname === '/api/prompts' && req.method === 'GET') {
      const rows = db.prepare('SELECT * FROM prompts ORDER BY id DESC').all();
      return sendJson(res, 200, rows);
    }

    if (url.pathname === '/api/prompts' && req.method === 'POST') {
      const { title, content, tag = '' } = JSON.parse(await readBody(req) || '{}');
      if (!title || !content) return sendJson(res, 400, { error: 'title y content son obligatorios' });
      const result = db.prepare('INSERT INTO prompts (title, content, tag) VALUES (?, ?, ?)')
        .run(String(title), String(content), String(tag));
      const row = db.prepare('SELECT * FROM prompts WHERE id = ?').get(result.lastInsertRowid);
      return sendJson(res, 201, row);
    }

    const deleteMatch = url.pathname.match(/^\/api\/prompts\/(\d+)$/);
    if (deleteMatch && req.method === 'DELETE') {
      const result = db.prepare('DELETE FROM prompts WHERE id = ?').run(Number(deleteMatch[1]));
      if (result.changes === 0) return sendJson(res, 404, { error: 'no encontrado' });
      return sendJson(res, 200, { ok: true });
    }

    return sendJson(res, 404, { error: 'ruta no encontrada' });
  } catch (err) {
    return sendJson(res, 500, { error: String(err.message || err) });
  }
});

server.listen(8000, '0.0.0.0', () => console.log('API escuchando en :8000'));
