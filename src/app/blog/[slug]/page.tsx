import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Bookmark } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Seo from '@/components/Seo';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type Props = {
  params: Promise<{ slug: string }>;
};

async function getPost(slug: string) {
  const decodedSlug = decodeURIComponent(slug);
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', decodedSlug)
    .single();

  if (error || !data) {
    return null;
  }
  return data;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);

  if (!post) return {};

  const url = `https://www.fifteenmiles.tech/blog/${post.slug}`;

  return {
    title: `${post.title} — Fifteen Miles Gazette`,
    description: post.summary || post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title: `${post.title} — Fifteen Miles Gazette`,
      description: post.summary || post.description,
      images: [{ url: post.image || '/TopLogo.png' }],
      publishedTime: post.date,
      authors: [post.author || 'Nathanael Secundo Cardoso'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} — Fifteen Miles Gazette`,
      description: post.summary || post.description,
      images: [post.image || '/TopLogo.png'],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: [post.image || 'https://www.fifteenmiles.tech/TopLogo.png'],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Nathanael Secundo Cardoso',
      url: 'https://www.fifteenmiles.tech/company',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fifteen Miles',
    url: 'https://www.fifteenmiles.tech',
    logo: 'https://www.fifteenmiles.tech/favicon.svg',
  };

  return (
    <div className="min-h-screen bg-[#F4F0EA] text-[#1A1816] font-serif selection:bg-[#1A1816] selection:text-[#F4F0EA] pt-24 pb-32 relative overflow-hidden">
      <Seo 
        title={`${post.title} — Fifteen Miles Gazette`} 
        description={post.summary || post.description} 
        path={`/blog/${post.slug}`} 
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([blogPostingSchema, organizationSchema]) }}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Newspaper Header Info / Return */}
        <div className="mb-8 flex items-center justify-between border-b-2 border-[#1A1816] pb-3 text-xs uppercase tracking-widest font-mono">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            <span>Voltar ao Arquivo Editorial</span>
          </Link>
          <div className="hidden sm:flex items-center gap-6">
            <span>Edição Especial Digital</span>
            <span>·</span>
            <span>ISSN 2940-15X</span>
          </div>
        </div>

        {/* Newspaper Masthead */}
        <header className="text-center pb-8 mb-10 border-b-4 border-[#1A1816]">
          <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] mb-2 text-[#1A1816]/70">
            Gazeta Oficial de Engenharia & Arquitetura de Sistemas
          </div>
          <h1 className="font-serif text-5xl sm:text-8xl tracking-tighter uppercase font-bold text-[#1A1816] my-2 leading-none">
            Fifteen Miles
          </h1>
          <div className="flex items-center justify-between border-y border-[#1A1816] py-1.5 mt-4 text-[11px] font-mono uppercase tracking-widest px-2">
            <span className="hidden sm:inline">Fundada em MMXXIV</span>
            <span className="font-semibold">{post.displayDate || post.date}</span>
            <span>{post.readTime || '5 min de leitura'}</span>
            <span className="hidden sm:inline">Circulação Global</span>
          </div>
        </header>

        {/* Article Meta Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-8 border-b border-[#1A1816]/40 items-center">
          <div className="md:col-span-8">
            <div className="inline-block bg-[#1A1816] text-[#F4F0EA] text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 mb-4">
              {post.tag || 'Artigo de Opinião'}
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.15] text-[#1A1816]">
              {post.title}
            </h2>
          </div>
          <div className="md:col-span-4 border-l-0 md:border-l-2 border-[#1A1816]/20 md:pl-6 text-sm">
            <p className="font-bold uppercase tracking-wider mb-1 font-mono text-xs">Por {post.author || 'Nathanael Secundo Cardoso'}</p>
            <p className="text-[#1A1816]/70 italic text-xs font-serif">Diretoria de Engenharia & Arquitetura, Fifteen Miles Technologies.</p>
          </div>
        </div>

        {/* Main Cover Image */}
        {post.image && (
          <div className="mb-12 border-2 border-[#1A1816] p-2 bg-white shadow-sm">
            <div className="relative w-full h-[380px] sm:h-[500px] overflow-hidden bg-[#1A1816]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover grayscale contrast-125 sepia-[0.1]"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
            <div className="pt-2 pb-1 px-2 flex justify-between items-center text-[10px] font-mono uppercase text-[#1A1816]/70">
              <span>Registro fotográfico do acervo técnico</span>
              <span>Doc. Arquivo #15M</span>
            </div>
          </div>
        )}

        {/* Article Content Layout (Multi-column feel using CSS) */}
        <article className="max-w-none text-[#1A1816] leading-relaxed font-serif">
          <style dangerouslySetInnerHTML={{__html: `
            .newspaper-content,
            .newspaper-content * {
              white-space: normal !important;
              overflow-wrap: break-word !important;
              max-width: 100% !important;
              background-color: transparent !important;
              font-family: inherit !important;
              color: #1A1816 !important;
            }

            .newspaper-content {
              width: 100%;
              overflow-x: hidden;
            }

            .newspaper-content p,
            .newspaper-content li,
            .newspaper-content blockquote {
              line-height: 1.8 !important;
              font-size: 1.15rem !important;
              font-weight: 300 !important;
            }

            .newspaper-content p {
              margin-bottom: 2rem !important;
              text-align: justify;
              text-justify: inter-word;
            }

            .newspaper-content h1, .newspaper-content h2, .newspaper-content h3 {
              font-family: inherit !important;
              color: #1A1816 !important;
              text-align: left !important;
              font-weight: 700 !important;
              text-transform: uppercase;
              letter-spacing: -0.02em;
            }

            .newspaper-content h1 {
              font-size: 2.5rem !important;
              margin-top: 3.5rem !important;
              margin-bottom: 1.5rem !important;
              border-bottom: 2px solid #1A1816;
              padding-bottom: 0.75rem !important;
            }

            .newspaper-content h2 {
              font-size: 1.85rem !important;
              margin-top: 3rem !important;
              margin-bottom: 1.25rem !important;
              border-bottom: 1px solid rgba(26, 24, 22, 0.3);
              padding-bottom: 0.5rem !important;
            }

            .newspaper-content h3 {
              font-size: 1.35rem !important;
              margin-top: 2.25rem !important;
              margin-bottom: 1rem !important;
            }

            .newspaper-content ul, .newspaper-content ol {
              margin-bottom: 2rem !important;
              padding-left: 1.5rem !important;
            }

            .newspaper-content ul {
              list-style-type: square !important;
            }

            .newspaper-content ol {
              list-style-type: decimal !important;
            }

            .newspaper-content li {
              margin-bottom: 0.5rem !important;
              text-align: left !important;
            }

            .newspaper-content pre {
              white-space: pre-wrap !important;
              overflow-x: auto !important;
              background: #1A1816 !important;
              color: #F4F0EA !important;
              border: 1px solid #1A1816 !important;
              padding: 1.5rem !important;
              border-radius: 0px !important;
              font-family: 'JetBrains Mono', monospace !important;
              font-size: 0.85rem !important;
              margin: 2.5rem 0 !important;
            }
            
            .newspaper-content pre * {
              color: #F4F0EA !important;
            }

            .newspaper-content blockquote {
              border-top: 1px solid #1A1816 !important;
              border-bottom: 1px solid #1A1816 !important;
              padding: 2rem 0 !important;
              font-style: italic !important;
              margin: 3rem 0 !important;
              color: #1A1816 !important;
              font-size: 1.5rem !important;
              line-height: 1.4 !important;
              text-align: center;
              font-weight: 400;
            }

            .newspaper-content a {
              color: #1A1816 !important;
              text-decoration: underline !important;
              text-decoration-thickness: 1px !important;
              text-underline-offset: 3px !important;
            }

            .newspaper-content a:hover {
              background-color: #1A1816 !important;
              color: #F4F0EA !important;
            }

            .newspaper-content > p:first-of-type::first-letter {
              font-size: 5.5rem !important;
              float: left !important;
              line-height: 0.75 !important;
              margin-right: 1rem !important;
              margin-top: 0.1rem !important;
              font-weight: bold;
            }
          `}} />

          {/* Lead Summary Callout */}
          <div className="border-y-2 border-[#1A1816] py-4 my-8 font-serif italic text-xl sm:text-2xl text-[#1A1816]/90 leading-relaxed text-center">
            &ldquo;{post.summary || post.description}&rdquo;
          </div>

          <div
            lang="pt-BR"
            className="newspaper-content text-lg sm:text-xl font-light"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </article>

        {/* Newspaper Footer / Colophon */}
        <footer className="mt-32 pt-12 border-t-4 border-[#1A1816] text-center">
          <div className="font-mono text-xs uppercase tracking-[0.25em] mb-4 text-[#1A1816]/70">
            Publicação Oficial do Circuito de Imprensa · Fifteen Miles
          </div>
          <div className="font-serif text-2xl font-bold tracking-tight mb-2">
            FIM DA EDIÇÃO
          </div>
          <p className="text-xs text-[#1A1816]/60 max-w-md mx-auto font-mono">
            Todos os direitos reservados à Fifteen Miles Technologies © 2026. Proibida a reprodução sem atribuição formal de engenharia.
          </p>
        </footer>
      </main>
    </div>
  );
}