import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
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

function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none [perspective:1000px] overflow-hidden opacity-15 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10" />
      <div 
        className="absolute inset-x-0 bottom-0 h-[100vh] origin-bottom"
        style={{
          transform: "rotateX(75deg) translateY(100px) scale(2)",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to top, black 10%, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to top, black 10%, transparent 85%)"
        }}
      />
    </div>
  );
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
    <div className="min-h-screen bg-[#030303] text-white font-[Inter] selection:bg-white/20 selection:text-white pt-36 pb-32 relative overflow-hidden">
      <Seo 
        title={`${post.title} — Fifteen Miles`} 
        description={post.summary || post.description} 
        path={`/blog/${post.slug}`} 
      />
      <GridBackground />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none z-0" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([blogPostingSchema, organizationSchema]) }}
      />

      <main className="max-w-4xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="mb-16">
          <div className="mb-12">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors border-b border-transparent hover:border-white/40 pb-1"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              <span>Retornar ao Acervo Editorial</span>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-y border-white/[0.08] py-4 mb-12">
            <div className="flex items-center gap-4">
              <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.25em] text-white/40">Edição Institucional</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.25em] text-white/80 px-3 py-1 bg-white/[0.03] rounded-full border border-white/10">{post.tag}</span>
            </div>
            <div className="flex items-center gap-6 font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.2em] text-white/40">
              <time dateTime={post.date}>{post.displayDate || post.date}</time>
              <span className="hidden sm:block">|</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime || '5 min de leitura'}</span>
            </div>
          </div>

          <h1 className="font-[Fraunces] text-4xl sm:text-6xl lg:text-[5rem] font-normal tracking-tight leading-[1.05] text-white mb-12">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 border-b border-white/[0.08] pb-10 mb-16">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-[Fraunces] text-base bg-white/[0.05] text-white shadow-inner">
              NS
            </div>
            <div>
              <span className="font-[Inter] text-sm font-medium text-white block uppercase tracking-wider">{post.author || 'Nathanael Secundo Cardoso'}</span>
              <span className="font-[JetBrains_Mono] text-[11px] text-white/40 italic">Diretoria de Engenharia & Arquitetura</span>
            </div>
          </div>

          {post.image && (
            <div className="relative w-full h-[400px] sm:h-[480px] mb-20 rounded-[28px] overflow-hidden border border-white/[0.08] bg-[#050505] shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover grayscale contrast-125 opacity-90"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
          )}
        </div>

        <article className="max-w-none text-white/80 font-light leading-relaxed font-[Inter]">
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
              color: rgba(255, 255, 255, 0.75) !important;
            }

            .blog-content {
              width: 100%;
              overflow-x: hidden;
              hyphens: auto;
              -webkit-hyphens: auto;
              -ms-hyphens: auto;
            }

            .blog-content p,
            .blog-content li,
            .blog-content blockquote {
              hyphens: auto;
              -webkit-hyphens: auto;
              -ms-hyphens: auto;
              word-break: normal;
              overflow-wrap: break-word;
              line-height: 1.85 !important;
              font-size: 1.125rem !important;
              font-weight: 300 !important;
            }

            .blog-content p {
              margin-bottom: 2.5rem !important;
            }

            .blog-content h1, .blog-content h2, .blog-content h3 {
              font-family: var(--font-fraunces), serif !important;
              color: #FFFFFF !important;
              text-align: left !important;
              font-weight: 400 !important;
              margin-left: 0 !important;
              padding-left: 0 !important;
            }

            .blog-content h1 {
              font-size: 3rem !important;
              margin-top: 4rem !important;
              margin-bottom: 2rem !important;
              border-top: 1px solid rgba(255, 255, 255, 0.08);
              padding-top: 2.5rem !important;
            }

            .blog-content h2 {
              font-size: 2.25rem !important;
              margin-top: 4rem !important;
              margin-bottom: 2rem !important;
              border-top: 1px solid rgba(255, 255, 255, 0.08);
              padding-top: 2.5rem !important;
            }

            .blog-content h3 {
              font-size: 1.5rem !important;
              margin-top: 3rem !important;
              margin-bottom: 1.5rem !important;
              color: rgba(255, 255, 255, 0.9) !important;
            }

            .blog-content ul, .blog-content ol {
              margin-bottom: 2.5rem !important;
              padding-left: 1.5rem !important;
            }

            .blog-content ul {
              list-style-type: disc !important;
            }

            .blog-content ol {
              list-style-type: decimal !important;
            }

            .blog-content li {
              margin-bottom: 0.75rem !important;
              text-align: left !important;
            }

            .blog-content pre {
              white-space: pre-wrap !important;
              overflow-x: auto !important;
              background: #050505 !important;
              border: 1px solid rgba(255, 255, 255, 0.1) !important;
              padding: 1.5rem !important;
              border-radius: 1rem !important;
              font-family: 'JetBrains Mono', monospace !important;
              font-size: 0.85rem !important;
              margin: 2.5rem 0 !important;
              color: #FFFFFF !important;
            }

            .blog-content blockquote {
              border-left: 2px solid rgba(255, 255, 255, 0.3) !important;
              padding-left: 2rem !important;
              font-style: italic !important;
              margin: 3.5rem 0 !important;
              color: rgba(255, 255, 255, 0.6) !important;
              font-family: var(--font-fraunces), serif !important;
              font-size: 1.65rem !important;
              line-height: 1.6 !important;
            }

            .blog-content a {
              color: #FFFFFF !important;
              text-decoration: underline !important;
              text-decoration-color: rgba(255, 255, 255, 0.4) !important;
              text-underline-offset: 4px !important;
              transition: color 0.2s, text-decoration-color 0.2s;
            }

            .blog-content a:hover {
              color: #FFFFFF !important;
              text-decoration-color: #FFFFFF !important;
            }

            .blog-content > p:first-of-type::first-letter {
              font-family: var(--font-fraunces), serif !important;
              font-size: 6.5rem !important;
              float: left !important;
              line-height: 0.8 !important;
              margin-right: 1.25rem !important;
              margin-top: 0.25rem !important;
              color: #FFFFFF !important;
            }
          `}} />

          <p
            lang="pt-BR"
            style={{ hyphens: 'auto', WebkitHyphens: 'auto' } as React.CSSProperties}
            className="text-xl sm:text-2xl italic font-[Fraunces] text-white/90 border-l-2 border-white/30 pl-8 py-3 my-14 leading-relaxed"
          >
            {post.summary || post.description}
          </p>

          <div
            lang="pt-BR"
            className="blog-content text-lg sm:text-xl font-light tracking-tight"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </article>

        <div className="mt-36 pt-16 border-t border-white/[0.08] flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-[Fraunces] text-lg bg-white/[0.03] text-white mb-4 shadow-md">
            FM
          </div>
          <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">
            Fifteen Miles · Imprensa Oficial Institucional
          </span>
        </div>
      </main>
    </div>
  );
}