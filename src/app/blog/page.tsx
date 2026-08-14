import type { Metadata } from 'next';
import Blog from '@/views/Blog';
import { supabase } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Blog — Fifteen Miles',
  description: 'Ensaios técnicos e reflexões sobre arquitetura, governança e plataformas empresariais.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/blog',
  },
};

export const revalidate = 60;

export default async function BlogPage() {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  const finalPosts = error || !posts ? [] : posts;

  return <Blog posts={finalPosts} />;
}
