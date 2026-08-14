'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Lock, LogOut, PlusCircle, CheckCircle, AlertCircle, List } from 'lucide-react';
import PostList from '@/components/PostList';
import PostForm from '@/components/PostForm';
import type{ Post } from '@/lib/PostUtils';

export default function AdminPostsPage() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const [posts, setPosts] = useState<Post[]>([]);
  const [view, setView] = useState<'list' | 'form'>('list');
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (session) fetchPosts();
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchPosts();
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
    if (!error && data) setPosts(data as Post[]);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setAuthError(error.message);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleNew = () => {
    setEditingPost(null);
    setSuccessMsg('');
    setView('form');
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
    setSuccessMsg('');
    setView('form');
  };

  const handleSaved = () => {
    fetchPosts();
    setSuccessMsg(editingPost ? 'Postagem atualizada com sucesso.' : 'Postagem criada com sucesso.');
    setView('list');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const handleDeleted = () => {
    fetchPosts();
    setSuccessMsg('Postagem excluída com sucesso.');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center font-[Inter]">
        <p className="text-[#0F0E0C]/60 uppercase tracking-widest text-xs">Carregando painel...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] text-[#0F0E0C] font-[Inter] pt-40 pb-24 px-6 flex items-center justify-center">
        <div className="max-w-md w-full bg-white border border-[#0F0E0C]/20 p-8 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#0F0E0C] text-[#FAF8F5] rounded-lg">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-[Fraunces] text-2xl font-normal text-[#0F0E0C]">Acesso Administrativo</h1>
              <p className="text-xs text-[#706C64]">Autenticação restrita Supabase Auth</p>
            </div>
          </div>

          {authError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#706C64] mb-2 font-medium">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-[#0F0E0C]/20 bg-[#FAF8F5] text-sm focus:outline-none focus:border-[#0F0E0C]"
                placeholder="admin@fifteenmiles.tech"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#706C64] mb-2 font-medium">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-[#0F0E0C]/20 bg-[#FAF8F5] text-sm focus:outline-none focus:border-[#0F0E0C]"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[#0F0E0C] text-[#FAF8F5] rounded-lg font-medium text-xs tracking-[0.15em] uppercase hover:bg-[#2A2824] transition-colors"
            >
              Entrar no Sistema
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F0E0C] font-[Inter] pt-32 pb-24 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-[#0F0E0C] pb-6 mb-12 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#706C64]">Painel Restrito</span>
            <h1 className="font-[Fraunces] text-4xl sm:text-5xl font-normal text-[#0F0E0C] mt-1">Gerenciamento Editorial</h1>
          </div>
          <div className="flex items-center gap-3">
            {view === 'list' ? (
              <button
                onClick={handleNew}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F0E0C] text-[#FAF8F5] rounded-lg text-xs uppercase tracking-wider font-medium hover:bg-[#2A2824] transition-colors"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Nova Postagem</span>
              </button>
            ) : (
              <button
                onClick={() => setView('list')}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#0F0E0C] rounded-lg text-xs uppercase tracking-wider font-medium hover:bg-[#0F0E0C] hover:text-[#FAF8F5] transition-colors"
              >
                <List className="w-4 h-4" />
                <span>Ver Lista</span>
              </button>
            )}
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#0F0E0C]/30 rounded-lg text-xs uppercase tracking-wider hover:bg-red-50 hover:text-red-700 hover:border-red-300 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sair</span>
            </button>
          </div>
        </div>

        {successMsg && (
          <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {view === 'list' ? (
          <PostList posts={posts} onEdit={handleEdit} onDeleted={handleDeleted} onNew={handleNew} />
        ) : (
          <PostForm initialPost={editingPost} onCancel={() => setView('list')} onSaved={handleSaved} />
        )}
      </div>
    </div>
  );
}