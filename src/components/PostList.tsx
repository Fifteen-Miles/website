'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Edit2, Trash2, PlusCircle, ImageOff } from 'lucide-react';
import type{ Post } from '@/lib/PostUtils';

interface PostListProps {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDeleted: () => void;
  onNew: () => void;
}

export default function PostList({ posts, onEdit, onDeleted, onNew }: PostListProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmId, setConfirmId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    const { error } = await supabase.from('posts').delete().eq('id', id);
    setDeletingId(null);
    setConfirmId(null);
    if (error) {
      alert('Erro ao excluir: ' + error.message);
      return;
    }
    onDeleted();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-[Fraunces] text-2xl text-[#0F0E0C]">Postagens Cadastradas ({posts.length})</h2>
      </div>

      {posts.length === 0 ? (
        <div className="bg-white border border-[#0F0E0C]/10 rounded-2xl p-16 text-center">
          <p className="text-sm text-[#706C64] mb-6">Nenhuma postagem encontrada no Supabase.</p>
          <button
            onClick={onNew}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F0E0C] text-[#FAF8F5] rounded-lg text-xs uppercase tracking-wider"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Criar Primeira Postagem</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {posts.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-[#0F0E0C]/15 p-5 rounded-xl flex flex-col md:flex-row md:items-center gap-6 shadow-sm hover:border-[#0F0E0C]/40 transition-all"
            >
              <div className="w-full md:w-32 h-32 shrink-0 rounded-lg overflow-hidden bg-[#FAF8F5] border border-[#0F0E0C]/10 flex items-center justify-center">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                ) : (
                  <ImageOff className="w-5 h-5 text-[#706C64]/40" />
                )}
              </div>

              <div className="space-y-2 flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#0F0E0C]/10 text-[#706C64]">
                    {p.tag || 'Ensaio'}
                  </span>
                  <span className="text-[10px] text-[#706C64]">{p.displayDate || p.date}</span>
                  <span className="text-[10px] text-[#706C64]">·</span>
                  <span className="text-[10px] text-[#706C64]">{p.readTime}</span>
                </div>
                <h3 className="font-[Fraunces] text-xl text-[#0F0E0C] truncate">{p.title}</h3>
                <p className="text-xs text-[#706C64] line-clamp-1">{p.summary || p.description}</p>
              </div>

              <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
                <button
                  onClick={() => onEdit(p)}
                  className="p-2.5 rounded-lg border border-[#0F0E0C]/20 hover:bg-[#0F0E0C] hover:text-[#FAF8F5] transition-colors"
                  title="Editar"
                >
                  <Edit2 className="w-4 h-4" />
                </button>

                {confirmId === p.id ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDelete(p.id)}
                      disabled={deletingId === p.id}
                      className="px-3 py-2.5 rounded-lg bg-red-600 text-white text-[11px] uppercase tracking-wider hover:bg-red-700 disabled:opacity-50"
                    >
                      {deletingId === p.id ? 'Excluindo...' : 'Confirmar'}
                    </button>
                    <button
                      onClick={() => setConfirmId(null)}
                      className="px-3 py-2.5 rounded-lg border border-[#0F0E0C]/20 text-[11px] uppercase tracking-wider hover:bg-[#FAF8F5]"
                    >
                      Cancelar
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmId(p.id)}
                    className="p-2.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                    title="Excluir"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}