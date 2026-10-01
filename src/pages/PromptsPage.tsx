import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Plus, Search, Copy, Check, Trash2, LibraryBig, Loader2,
} from 'lucide-react';
import { createPrompt, deletePrompt, listPrompts, Prompt } from '../lib/api';
import { cn } from '../lib/utils';

const inputClasses =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10';

const PromptsPage = () => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  useEffect(() => {
    listPrompts()
      .then(setPrompts)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const tags = Array.from(new Set(prompts.map((p) => p.tag).filter(Boolean)));

  const filtered = prompts.filter((p) => {
    const matchesTag = !activeTag || p.tag === activeTag;
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q);
    return matchesTag && matchesQuery;
  });

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setSaving(true);
    try {
      const created = await createPrompt({ title: title.trim(), content: content.trim(), tag: tag.trim() });
      setPrompts((prev) => [created, ...prev]);
      setTitle('');
      setTag('');
      setContent('');
    } catch (err) {
      setError(String((err as Error).message));
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deletePrompt(id);
      setPrompts((prev) => prev.filter((p) => p.id !== id));
      if (copiedId === id) setCopiedId(null);
    } catch (err) {
      setError(String((err as Error).message));
    }
  };

  const handleCopy = async (prompt: Prompt) => {
    try {
      await navigator.clipboard.writeText(prompt.content);
      setCopiedId(prompt.id);
      setTimeout(() => setCopiedId((current) => (current === prompt.id ? null : current)), 2000);
    } catch {
      /* portapapeles no disponible */
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-950 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-indigo-300 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Volver
          </a>
          <div className="mt-8 flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 shadow-xl shadow-indigo-500/30">
              <LibraryBig className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tighter text-white md:text-5xl">Mi Biblioteca</h1>
              <p className="mt-2 text-slate-400 md:text-lg">Guarda, organiza y reutiliza tus prompts favoritos.</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-6 py-12 md:py-16">
        {error && (
          <div className="mb-8 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</div>
        )}

        {/* Formulario para guardar */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSave}
          className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50 md:p-8"
        >
          <h2 className="mb-6 flex items-center gap-2 text-lg font-black tracking-tight text-slate-900">
            <Plus className="h-5 w-5 text-indigo-600" /> Nuevo prompt
          </h2>
          <div className="grid gap-4 md:grid-cols-[1fr_200px]">
            <input
              className={inputClasses}
              placeholder="Título del prompt"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              className={inputClasses}
              placeholder="Etiqueta (ej. Ventas)"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </div>
          <textarea
            className={cn(inputClasses, 'mt-4 min-h-[120px] resize-y')}
            placeholder="Escribe o pega tu prompt aquí…"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={saving}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-700 disabled:opacity-60"
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
            Guardar prompt
          </button>
        </motion.form>

        {/* Buscador y filtros */}
        <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              className={cn(inputClasses, 'pl-10')}
              placeholder="Buscar en tus prompts…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag('')}
              className={cn(
                'rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition',
                !activeTag ? 'bg-indigo-600 text-white' : 'bg-white text-slate-500 hover:text-indigo-600 border border-slate-200',
              )}
            >
              Todos
            </button>
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(activeTag === t ? '' : t)}
                className={cn(
                  'rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition',
                  activeTag === t ? 'bg-indigo-600 text-white' : 'bg-white text-slate-500 hover:text-indigo-600 border border-slate-200',
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de prompts */}
        {loading ? (
          <div className="mt-12 flex items-center justify-center gap-3 text-slate-500">
            <Loader2 className="h-5 w-5 animate-spin" /> Cargando…
          </div>
        ) : filtered.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white/60 py-20 text-center">
            <LibraryBig className="mx-auto mb-4 h-10 w-10 text-slate-300" />
            <p className="font-bold text-slate-500">
              {prompts.length === 0 ? 'Aún no tienes prompts guardados.' : 'Ningún prompt coincide con tu búsqueda.'}
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((prompt, idx) => (
              <motion.div
                key={prompt.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
                className="flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/40"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="font-black leading-snug tracking-tight text-slate-900">{prompt.title}</h3>
                  {prompt.tag && (
                    <span className="shrink-0 rounded-full bg-indigo-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-indigo-600">
                      {prompt.tag}
                    </span>
                  )}
                </div>
                <p className="flex-1 whitespace-pre-wrap text-sm leading-relaxed text-slate-500 line-clamp-5">{prompt.content}</p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {new Date(prompt.created_at.replace(' ', 'T') + 'Z').toLocaleDateString('es', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopy(prompt)}
                      title="Copiar prompt"
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold transition',
                        copiedId === prompt.id ? 'bg-emerald-50 text-emerald-600' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100',
                      )}
                    >
                      {copiedId === prompt.id ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      {copiedId === prompt.id ? 'Copiado' : 'Copiar'}
                    </button>
                    <button
                      onClick={() => handleDelete(prompt.id)}
                      title="Eliminar prompt"
                      className="rounded-lg bg-slate-50 px-3 py-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default PromptsPage;
