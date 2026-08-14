'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { AlertCircle, PlusCircle, RefreshCcw } from 'lucide-react';
import RichTextEditor from './RichTextEditor';
import ImageUploader from './ImageUploader';
import { type Post, EMPTY_POST, TAGS, slugify, formatDisplayDate, calcReadTime, stripInlineStyles } from '@/lib/PostUtils';

interface PostFormProps {
  initialPost: Post | null;
  onCancel: () => void;
  onSaved: () => void;
}

export default function PostForm({ initialPost, onCancel, onSaved }: PostFormProps) {
  const [fields, setFields] = useState(() =>
    initialPost
      ? {
          title: initialPost.title || '',
          slug: initialPost.slug || '',
          summary: initialPost.summary || initialPost.description || '',
          content: initialPost.content || '',
          tag: initialPost.tag || 'Engenharia',
          image: initialPost.image || '',
          author: initialPost.author || 'Nathanael Secundo Cardoso',
          date: initialPost.date || new Date().toISOString().split('T')[0],
          displayDate: initialPost.displayDate || '',
          readTime: initialPost.readTime || '5 min de leitura',
        }
      : { ...EMPTY_POST }
  );

  const [slugTouched, setSlugTouched] = useState(!!initialPost);
  const [displayDateTouched, setDisplayDateTouched] = useState(!!initialPost);
  const [readTimeTouched, setReadTimeTouched] = useState(!!initialPost);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const set = <K extends keyof typeof fields>(key: K, value: (typeof fields)[K]) =>
    setFields((f) => ({ ...f, [key]: value }));

  const handleTitleChange = (title: string) => {
    set('title', title);
    if (!slugTouched) set('slug', slugify(title));
  };

  const handleDateChange = (date: string) => {
    set('date', date);
    if (!displayDateTouched) set('displayDate', formatDisplayDate(date));
  };

  const handleContentChange = (content: string) => {
    set('content', content);
    if (!readTimeTouched) set('readTime', calcReadTime(content));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fields.title.trim() || !fields.slug.trim() || !fields.summary.trim() || !fields.content.trim()) {
      setErrorMsg('Preencha título, slug, resumo e conteúdo antes de publicar.');
      return;
    }

    setSubmitting(true);

    const payload = {
      title: fields.title,
      slug: fields.slug,
      summary: fields.summary,
      description: fields.summary,
      content: stripInlineStyles(fields.content),
      tag: fields.tag,
      image: fields.image,
      author: fields.author,
      date: fields.date,
      displayDate: fields.displayDate || formatDisplayDate(fields.date),
      readTime: fields.readTime,
    };

    const { error } = initialPost
      ? await supabase.from('posts').update(payload).eq('id', initialPost.id)
      : await supabase.from('posts').insert([payload]);

    setSubmitting(false);

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    onSaved();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#0F0E0C]/20 p-8 sm:p-12 rounded-2xl shadow-xl space-y-8">
      <div className="flex items-center justify-between border-b border-[#0F0E0C]/10 pb-4">
        <h2 className="font-[Fraunces] text-2xl text-[#0F0E0C]">{initialPost ? 'Editar Postagem' : 'Nova Postagem'}</h2>
        <button type="button" onClick={onCancel} className="text-xs uppercase tracking-wider text-[#706C64] hover:text-[#0F0E0C]">
          Cancelar
        </button>
      </div>

      {errorMsg && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-[#706C64] mb-3 font-medium">Título do Ensaio</label>
          <input
            type="text"
            value={fields.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            required
            className="w-full px-4 py-3.5 rounded-xl border border-[#0F0E0C]/20 bg-[#FAF8F5] text-sm focus:outline-none focus:border-[#0F0E0C]"
            placeholder="Ex: A Construção de Software como Catedrais"
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-[10px] uppercase tracking-wider text-[#706C64] font-medium">Slug URL</label>
            {slugTouched && (
              <button
                type="button"
                onClick={() => { setSlugTouched(false); set('slug', slugify(fields.title)); }}
                className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#8C7355] hover:text-[#0F0E0C]"
              >
                <RefreshCcw className="w-3 h-3" /> Gerar do título
              </button>
            )}
          </div>
          <input
            type="text"
            value={fields.slug}
            onChange={(e) => { setSlugTouched(true); set('slug', slugify(e.target.value)); }}
            required
            className="w-full px-4 py-3.5 rounded-xl border border-[#0F0E0C]/20 bg-[#FAF8F5] text-sm font-mono focus:outline-none focus:border-[#0F0E0C]"
            placeholder="construcao-de-software-como-catedrais"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-[#706C64] mb-3 font-medium">Categoria</label>
          <select
            value={fields.tag}
            onChange={(e) => set('tag', e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl border border-[#0F0E0C]/20 bg-[#FAF8F5] text-sm focus:outline-none focus:border-[#0F0E0C]"
          >
            {TAGS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-[#706C64] mb-3 font-medium">Data de Publicação</label>
          <input
            type="date"
            value={fields.date}
            onChange={(e) => handleDateChange(e.target.value)}
            required
            className="w-full px-4 py-3.5 rounded-xl border border-[#0F0E0C]/20 bg-[#FAF8F5] text-sm focus:outline-none focus:border-[#0F0E0C]"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-[#706C64] mb-3 font-medium">Data de Exibição</label>
          <input
            type="text"
            value={fields.displayDate}
            onChange={(e) => { setDisplayDateTouched(true); set('displayDate', e.target.value); }}
            className="w-full px-4 py-3.5 rounded-xl border border-[#0F0E0C]/20 bg-[#FAF8F5] text-sm focus:outline-none focus:border-[#0F0E0C]"
            placeholder="14 de Agosto de 2026"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-[#706C64] mb-3 font-medium">Tempo de Leitura</label>
          <input
            type="text"
            value={fields.readTime}
            onChange={(e) => { setReadTimeTouched(true); set('readTime', e.target.value); }}
            className="w-full px-4 py-3.5 rounded-xl border border-[#0F0E0C]/20 bg-[#FAF8F5] text-sm focus:outline-none focus:border-[#0F0E0C]"
            placeholder="Calculado automaticamente"
          />
        </div>
      </div>

      <div>
        <label className="block text-[10px] uppercase tracking-wider text-[#706C64] mb-3 font-medium">Autor</label>
        <input
          type="text"
          value={fields.author}
          onChange={(e) => set('author', e.target.value)}
          className="w-full px-4 py-3.5 rounded-xl border border-[#0F0E0C]/20 bg-[#FAF8F5] text-sm focus:outline-none focus:border-[#0F0E0C]"
        />
      </div>

      <ImageUploader value={fields.image} onChange={(url) => set('image', url)} />

      <div>
        <label className="block text-[10px] uppercase tracking-wider text-[#706C64] mb-3 font-medium">Resumo / Descrição SEO</label>
        <textarea
          value={fields.summary}
          onChange={(e) => set('summary', e.target.value)}
          required
          rows={3}
          className="w-full p-4 rounded-xl border border-[#0F0E0C]/20 bg-[#FAF8F5] text-sm focus:outline-none focus:border-[#0F0E0C]"
          placeholder="Resumo executivo em uma ou duas frases..."
        />
      </div>

      <div>
        <label className="block text-[10px] uppercase tracking-wider text-[#706C64] mb-3 font-medium">Conteúdo do Ensaio</label>
        <RichTextEditor value={fields.content} onChange={handleContentChange} />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-5 bg-[#0F0E0C] text-[#FAF8F5] rounded-xl font-medium text-xs tracking-[0.15em] uppercase hover:bg-[#2A2824] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <PlusCircle className="w-4 h-4" />
        <span>{submitting ? 'Salvando no Supabase...' : initialPost ? 'Atualizar Postagem' : 'Publicar Postagem'}</span>
      </button>
    </form>
  );
}