import type{ MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.fifteenmiles.tech';

  const staticRoutes = [
    '',
    '/company',
    '/products',
    '/engineering',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
    '/atlas',
    '/manifesto',
    '/philosophy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  let blogPosts: any[] = [];
  try {
    const { data } = await supabase.from('posts').select('slug, date');
    if (data) blogPosts = data;
  } catch {
    blogPosts = [
      { slug: 'construcao-de-software-como-catedrais', date: '2026-08-14' },
      { slug: 'o-fim-da-era-dos-aplicativos-fragmentados', date: '2026-08-14' },
      { slug: 'soberania-de-dados-e-memoria-institucional', date: '2026-08-14' },
    ];
  }

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || Date.now()),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
