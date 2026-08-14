import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
import { supabase } from '@/lib/supabase';

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
    title: `${post.title} — Fifteen Miles`,
    description: post.summary || post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title: `${post.title} — Fifteen Miles`,
      description: post.summary || post.description,
      images: [{ url: post.image || '/TopLogo.png' }],
      publishedTime: post.date,
      authors: [post.author || 'Nathanael Secundo Cardoso'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} — Fifteen Miles`,
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
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F0E0C] font-[Inter] pt-32 pb-24 relative overflow-hidden selection:bg-black/50 selection:text-[#FAF8F5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([blogPostingSchema, organizationSchema]) }}
      />

      <main className="max-w-4xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="mb-16">
          <Link href="/blog" className="inline-flex items-center gap-2 font-[Inter] text-xs uppercase tracking-widest text-[#706C64] hover:text-[#0F0E0C] transition-colors mb-12 border-b border-transparent hover:border-[#0F0E0C] pb-0.5">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retornar ao Índice</span>
          </Link>

          <div className="border-y-2 border-[#0F0E0C] py-4 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="font-[Inter] text-[10px] uppercase tracking-[0.25em] text-[#0F0E0C] font-medium">Edição Institucional</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C7355]" />
              <span className="font-[Inter] text-[10px] uppercase tracking-[0.25em] text-[#706C64]">{post.tag}</span>
            </div>
            <div className="flex items-center gap-6 text-[10px] font-[Inter] uppercase tracking-[0.2em] text-[#706C64]">
              <time dateTime={post.date}>{post.displayDate || post.date}</time>
              <span className="hidden md:block">|</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime || '5 min de leitura'}</span>
            </div>
          </div>

          <h1 className="font-[Fraunces] text-5xl sm:text-7xl lg:text-[6rem] font-normal tracking-tight leading-[0.95] text-[#0F0E0C] mb-12 text-center md:text-left">
            {post.title}
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-4 border-b border-[#0F0E0C]/10 pb-8 mb-16">
            <div className="w-12 h-12 rounded-full border border-[#0F0E0C] flex items-center justify-center font-[Fraunces] text-lg bg-[#0F0E0C] text-[#FAF8F5]">
              NS
            </div>
            <div className="text-center md:text-left">
              <span className="font-[Inter] text-sm font-medium text-[#0F0E0C] block uppercase tracking-wider">{post.author || 'Nathanael Secundo Cardoso'}</span>
              <span className="font-[Inter] text-xs text-[#706C64] italic">Diretoria de Engenharia & Arquitetura</span>
            </div>
          </div>

          {post.image && (
            <div className="relative w-full h-[400px] mb-16 rounded-2xl overflow-hidden border border-[#0F0E0C]/20 shadow-md">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
          )}
        </div>

        <article className="max-w-none text-[#0F0E0C]/90 font-light leading-relaxed font-[Inter]">
          <style dangerouslySetInnerHTML={{__html: `
            .blog-content,
            .blog-content * {
              white-space: normal !important;
              overflow-wrap: break-word !important;
              max-width: 100% !important;
              background-color: transparent !important;
              font-family: inherit !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
              text-indent: 0 !important;
              word-spacing: normal !important;
              letter-spacing: normal !important;
            }

            .blog-content {
              width: 100%;
              overflow-x: hidden;
              hyphens: auto;
              -webkit-hyphens: auto;
              -ms-hyphens: auto;
              word-break: normal;
            }

            .blog-content p,
            .blog-content li,
            .blog-content blockquote {
              hyphens: auto;
              -webkit-hyphens: auto;
              -ms-hyphens: auto;
              word-break: normal;
              overflow-wrap: break-word;
              text-align: justify !important;
              line-height: 1.8 !important;
            }

            .blog-content p {
              margin-bottom: 2rem !important;
            }

            .blog-content h1, .blog-content h2, .blog-content h3 {
              font-family: var(--font-fraunces), serif !important;
              color: #0F0E0C !important;
              text-align: left !important;
              font-weight: 400 !important;
              margin-left: 0 !important;
              padding-left: 0 !important;
            }

            h1 {
              font-size: 4rem !important;
              text-align: left;
              margin-top: 4rem !important;
              margin-bottom: 2rem !important;
              border-top: 1px solid rgba(15, 14, 12, 0.1);
              padding-top: 2rem !important;
            }

            .blog-content h2 {
              font-size: 2.25rem !important;
              margin-top: 4rem !important;
              margin-bottom: 2rem !important;
              border-top: 1px solid rgba(15, 14, 12, 0.1);
              padding-top: 2rem !important;
            }

            .blog-content h3 {
              font-size: 1.5rem !important;
              margin-top: 3rem !important;
              margin-bottom: 1.5rem !important;
            }

            .blog-content ul, .blog-content ol {
              margin-bottom: 2rem !important;
              padding-left: 1.5rem !important;
            }

            .blog-content ul {
              list-style-type: disc !important;
            }

            .blog-content ol {
              list-style-type: decimal !important;
            }

            .blog-content li {
              margin-bottom: 0.5rem !important;
              text-align: left !important;
            }

            .blog-content pre {
              white-space: pre-wrap !important;
              overflow-x: auto !important;
              background: #F5F2EB !important;
              padding: 1.25rem !important;
              border-radius: 0.5rem !important;
              font-family: 'JetBrains Mono', monospace !important;
              font-size: 0.85rem !important;
              margin: 2rem 0 !important;
            }

            .blog-content blockquote {
              border-left: 2px solid #8C7355 !important;
              padding-left: 1.5rem !important;
              font-style: italic !important;
              margin: 3rem 0 !important;
              color: #706C64 !important;
              font-family: var(--font-fraunces), serif !important;
              font-size: 1.5rem !important;
              text-align: left !important;
            }

            .blog-content a {
              text-decoration: underline !important;
              text-decoration-color: #8C7355 !important;
              text-underline-offset: 4px !important;
              transition: color 0.2s;
            }

            .blog-content a:hover {
              color: #8C7355 !important;
            }

            .blog-content > p:first-of-type::first-letter {
              font-family: var(--font-fraunces), serif !important;
              font-size: 7rem !important;
              float: left !important;
              line-height: 0.8 !important;
              margin-right: 1.5rem !important;
              margin-top: 0.5rem !important;
              color: #0F0E0C !important;
            }
          `}} />

          <p
            lang="pt-BR"
            style={{ hyphens: 'auto', WebkitHyphens: 'auto' } as React.CSSProperties}
            className="text-xl sm:text-2xl italic font-[Fraunces] text-[#0F0E0C] border-l-2 border-[#8C7355] pl-6 py-2 my-12"
          >
            {post.summary || post.description}
          </p>

          <div
            lang="pt-BR"
            className="blog-content text-lg sm:text-xl text-[#2A2824] tracking-tight"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </article>
      </main>
    </div>
  );
}