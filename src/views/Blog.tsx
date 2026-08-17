'use client';

import { motion, type Variants } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles, Clock } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import Seo from "../components/Seo";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fallbackPosts = [
  {
    slug: "construcao-de-software-como-catedrais",
    date: "MMXXVI · I",
    title: "A Construção de Software como Catedrais",
    summary: "Como a disciplina de engenharia e o planejamento de longo prazo evitam a ruína digital e estrutural de sistemas corporativos complexos.",
    tag: "Engenharia",
    readTime: "8 min de leitura"
  },
  {
    slug: "o-fim-da-era-dos-aplicativos-fragmentados",
    date: "MMXXVI · II",
    title: "O Fim da Era dos Aplicativos Fragmentados",
    summary: "Por que plataformas operacionais unificadas estão substituindo pilhas de ferramentas terceirizadas desconectadas.",
    tag: "Infraestrutura",
    readTime: "6 min de leitura"
  },
  {
    slug: "soberania-de-dados-e-memoria-institucional",
    date: "MMXXVI · III",
    title: "Soberania de Dados e Memória Institucional",
    summary: "Preservando o contexto histórico de decisões corporativas em ambientes de alta segurança e tipagem estrita.",
    tag: "Arquitetura",
    readTime: "10 min de leitura"
  },
  {
    slug: "arquitetura-perene-alem-dos-modismos",
    date: "MMXXVI · IV",
    title: "Arquitetura Perene Além dos Modismos",
    summary: "Uma análise profunda sobre a escolha de padrões tecnológicos que resistem ao teste do tempo nas organizações.",
    tag: "Filosofia",
    readTime: "7 min de leitura"
  },
  {
    slug: "governanca-e-autonomia-operacional",
    date: "MMXXVI · V",
    title: "Governança e Autonomia Operacional",
    summary: "Como estruturar permissões e fluxos de trabalho sem engessar a criatividade e a velocidade dos times.",
    tag: "Governança",
    readTime: "9 min de leitura"
  },
  {
    slug: "o-manifesto-do-longo-prazo",
    date: "MMXXVI · VI",
    title: "O Manifesto do Longo Prazo",
    summary: "Por que construir para durar décadas exige recusar atalhos e abraçar a disciplina diária na engenharia.",
    tag: "Institucional",
    readTime: "5 min de leitura"
  }
];

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

export default function Blog({ posts = [] }: { posts?: any[] }) {
  const displayPosts = posts.length > 0 ? posts : fallbackPosts;

  useEffect(() => {
    if (!document.getElementById("fm-type-system")) {
      const link = document.createElement("link");
      link.id = "fm-type-system";
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white font-[Inter] selection:bg-white/20 selection:text-white pt-36 pb-32 relative overflow-hidden">
      <Seo title="Acervo Editorial — Fifteen Miles" description="Discursos institucionais e reflexões técnicas sobre arquitetura de software, governança e filosofia operacional." path="/blog" />
      <GridBackground />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none z-0" />

      <main className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-24"
        >
          <div className="flex items-center justify-between mb-8">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md text-[10px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-white/80 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Acervo Editorial · Fifteen Miles</span>
            </span>
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase text-white/40">
              MMXXVI Edition
            </span>
          </div>

          <motion.h1
            variants={fadeUp}
            className="font-[Inter] text-5xl sm:text-7xl lg:text-[7.5rem] tracking-[-0.04em] font-medium leading-[1.02] text-white mb-8"
          >
            Discursos <br />
            <span className="font-[Fraunces] italic font-light text-white/40">Institucionais.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl text-white/50 font-light leading-relaxed max-w-3xl"
          >
            Reflexões técnicas profundas sobre arquitetura de software de grande escala, soberania de dados e a filosofia operacional que guia a Fifteen Miles rumo ao longo prazo.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mb-20 p-8 sm:p-12 lg:p-16 rounded-[32px] border border-white/[0.08] bg-[#050505] relative overflow-hidden shadow-2xl group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none group-hover:from-white/[0.05] transition-colors duration-700" />
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] font-[JetBrains_Mono] text-[10px] tracking-widest uppercase text-white/70">
                  Ensaio em Destaque
                </span>
                <span className="font-[JetBrains_Mono] text-[10px] tracking-widest text-white/40 uppercase">
                  MMXXVI · I
                </span>
              </div>
              <h2 className="font-[Fraunces] text-3xl sm:text-5xl font-normal text-white leading-[1.1] group-hover:text-white/90 transition-colors">
                A Construção de Software como Catedrais
              </h2>
              <p className="text-base sm:text-lg text-white/60 font-light leading-relaxed max-w-2xl">
                Como a disciplina de engenharia e o planejamento rigoroso de longo prazo evitam a ruína digital e estrutural de sistemas corporativos complexos.
              </p>
              <div className="pt-4 flex items-center gap-6">
                <Link
                  href="/blog/a-construcao-de-software-como-catedrais"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-tight hover:scale-[0.98] hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                >
                  <span>Ler Ensaio Completo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="font-[JetBrains_Mono] text-xs text-white/40 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" /> 8 min de leitura
                </span>
              </div>
            </div>
            <div className="lg:col-span-4 border-l border-white/[0.08] pl-0 lg:pl-10 space-y-4">
              <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/40 block">
                Tópicos Principais
              </span>
              <div className="space-y-2 text-sm font-light text-white/60">
                <div>• Engenharia perene vs. software descartável</div>
                <div>• Planejamento arquitetural de 20 anos</div>
                <div>• Manutenção da memória institucional</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayPosts.map((post) => (
            <motion.div
              key={post.slug}
              variants={fadeUp}
              className="flex flex-col group relative bg-[#050505] border border-white/[0.08] p-8 rounded-[32px] hover:border-white/20 transition-all duration-500 shadow-xl justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none rounded-[32px]" />
              <div className="relative z-10 flex-1">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                  <span className="font-[JetBrains_Mono] text-[10px] tracking-widest text-white/40 uppercase">{post.date}</span>
                  <span className="font-[JetBrains_Mono] text-[10px] tracking-widest text-white uppercase font-medium px-3 py-1 bg-white/[0.04] rounded-full border border-white/10">{post.tag}</span>
                </div>
                
                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="font-[Fraunces] text-2xl text-white mb-4 font-normal leading-[1.2] group-hover:text-white/80 transition-colors duration-500">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-sm text-white/50 font-light leading-relaxed mb-8">
                  {post.summary || post.description}
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/[0.08] flex items-center justify-between mt-auto">
                <span className="font-[JetBrains_Mono] text-[11px] text-white/40 flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> {post.readTime || "7 min"}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 font-[JetBrains_Mono] text-xs uppercase tracking-widest text-white hover:text-white/70 transition-colors"
                >
                  <span>Ler Ensaio</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-32 p-10 sm:p-16 rounded-[32px] border border-white/[0.08] bg-[#050505] text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/60">
              <Sparkles className="w-3.5 h-3.5" /> Dispatch Institucional
            </span>
            <h3 className="font-[Inter] text-3xl sm:text-4xl font-medium tracking-tight text-white">
              Receba nossos ensaios diretamente.
            </h3>
            <p className="text-white/50 font-light text-base leading-relaxed">
              Publicamos reflexões técnicas e notas arquiteturais de forma restrita e periódica para líderes de engenharia e fundadores.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <input
                type="email"
                placeholder="seu.email@empresa.com"
                className="w-full sm:w-80 px-6 py-4 rounded-full bg-white/[0.03] border border-white/[0.1] text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/30 transition-colors"
              />
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-tight hover:bg-white/90 transition-all shadow-md">
                Inscrever-se
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-28 pt-12 border-t border-white/[0.05] flex flex-col items-center justify-center"
        >
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-[Fraunces] text-lg bg-white/[0.03] text-white mb-4 shadow-md">
            FM
          </div>
          <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.3em] text-white/40 text-center font-medium">
            Fifteen Miles · Imprensa Oficial Institucional
          </span>
        </motion.div>
      </main>
    </div>
  );
}