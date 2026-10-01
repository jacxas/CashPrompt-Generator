export interface Prompt {
  id: number;
  title: string;
  content: string;
  tag: string;
  created_at: string;
}

const BASE = '/api/prompts';

export async function listPrompts(): Promise<Prompt[]> {
  const res = await fetch(BASE);
  if (!res.ok) throw new Error('No se pudieron cargar los prompts');
  return res.json();
}

export async function createPrompt(input: { title: string; content: string; tag: string }): Promise<Prompt> {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error('No se pudo guardar el prompt');
  return res.json();
}

export async function deletePrompt(id: number): Promise<void> {
  const res = await fetch(`${BASE}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('No se pudo eliminar el prompt');
}
