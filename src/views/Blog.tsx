"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, BookOpen, ScrollText, Clock, Landmark } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const FONT_BLACK = `'UnifrakturMaguntia', serif`;
const FONT_HEADING = `'Coolvetica', 'Helvetica Neue', sans-serif`;
const FONT_DISPLAY = `'Fraunces', serif`;
const FONT_MONO = `'JetBrains Mono', monospace`;

const INK = "#1C1710";
const WINE = "#5C0000";
const PARCHMENT = "#FAF7F0";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE },
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

function useMedievalFonts() {
  useEffect(() => {
    if (document.getElementById("fm-medieval-fonts")) return;
    const link = document.createElement("link");
    link.id = "fm-medieval-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;1,9..144,400&family=UnifrakturMaguntia&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
}

function BlueprintGrid({ opacity = 0.045 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(92,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(92,0,0,1) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        opacity,
        maskImage: "radial-gradient(ellipse 75% 60% at 50% 10%, black 30%, transparent 85%)",
        WebkitMaskImage: "radial-gradient(ellipse 75% 60% at 50% 10%, black 30%, transparent 85%)",
      }}
    />
  );
}

function CornerMarks({ inset = 0 }: { inset?: number }) {
  const corners = [
    { cls: "top-0 left-0", d: "M1 10 L1 1 L10 1" },
    { cls: "top-0 right-0", d: "M10 1 L19 1 L19 10" },
    { cls: "bottom-0 right-0", d: "M19 10 L19 19 L10 19" },
    { cls: "bottom-0 left-0", d: "M10 19 L1 19 L1 10" },
  ];
  return (
    <>
      {corners.map((c, i) => (
        <svg
          key={i}
          className={`absolute w-5 h-5 pointer-events-none ${c.cls}`}
          style={{ margin: inset }}
          viewBox="0 0 20 20"
        >
          <path d={c.d} stroke={WINE} strokeWidth="1.25" opacity="0.4" fill="none" />
        </svg>
      ))}
    </>
  );
}

function Seal({ size = 100 }: { size?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <circle cx="50" cy="50" r="47" fill="none" stroke={WINE} strokeWidth="1" opacity="0.45" />
        <circle cx="50" cy="50" r="39" fill="none" stroke={WINE} strokeWidth="0.5" opacity="0.28" />
        {mounted &&
          Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * Math.PI * 2;
            const long = i % 6 === 0;
            const r1 = 47;
            const r2 = long ? 41 : 44.5;
            return (
              <line
                key={i}
                x1={50 + r1 * Math.cos(angle)}
                y1={50 + r1 * Math.sin(angle)}
                x2={50 + r2 * Math.cos(angle)}
                y2={50 + r2 * Math.sin(angle)}
                stroke={WINE}
                strokeWidth={long ? 1 : 0.5}
                opacity={long ? 0.55 : 0.28}
              />
            );
          })}
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center select-none"
        style={{ fontFamily: FONT_BLACK, color: WINE, fontSize: size * 0.32, lineHeight: 1 }}
      >
        XV
      </div>
    </div>
  );
}

export default function Blog({ posts = [] }: { posts?: any[] }) {
  useMedievalFonts();
  const displayPosts = posts.length > 0 ? posts : fallbackPosts;
  const featuredPost = displayPosts[0];
  const gridPosts = displayPosts.slice(1);

  return (
    <div
      className="min-h-screen overflow-x-hidden pt-36 pb-32 relative selection:bg-[#5C0000]/10 selection:text-[#1C1710]"
      style={{ background: PARCHMENT, color: INK, fontFamily: "Inter" }}
    >
      <Seo title="Acervo Editorial — Fifteen Miles" description="Discursos institucionais e reflexões técnicas sobre arquitetura de software, governança e filosofia operacional." path="/blog" />
      <BlueprintGrid opacity={0.05} />

      <style dangerouslySetInnerHTML={{ __html: `
        @font-face {
          font-family: 'Coolvetica';
          src: url('https://cdn.jsdelivr.net/gh/luxonauta/coolvetica@master/woff2/CoolveticaRg.woff2') format('woff2');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
      `}} />

      <main className="max-w-[1400px] mx-auto px-6 sm:px-14 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-24"
        >
          <div className="flex items-center justify-between mb-8">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] uppercase font-mono tracking-[0.2em]"
              style={{ color: WINE, border: "1px solid rgba(92,0,0,0.25)", background: "rgba(92,0,0,0.03)" }}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Acervo Editorial · Fifteen Miles</span>
            </span>
            <span className="text-[10px] uppercase font-mono tracking-[0.2em]" style={{ color: "rgba(28,23,16,0.45)" }}>
              MMXXVI Edition
            </span>
          </div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-7xl lg:text-[7.5rem] font-medium tracking-tight leading-[1.02] mb-8"
            style={{ fontFamily: FONT_HEADING }}
          >
            Discursos <br />
            <span style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 400, color: WINE }}>
              Institucionais.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl font-light leading-relaxed max-w-3xl"
            style={{ color: "rgba(28,23,16,0.7)" }}
          >
            Reflexões técnicas profundas sobre arquitetura de software de grande escala, soberania de dados e a filosofia operacional que guia a Fifteen Miles rumo ao longo prazo.
          </motion.p>
        </motion.div>

        {featuredPost && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="mb-20 p-8 sm:p-12 lg:p-16 rounded-[10px] relative overflow-hidden"
            style={{ border: "1px solid rgba(92,0,0,0.2)", background: "#fff", boxShadow: "0 30px 60px -15px rgba(28,23,16,0.05)" }}
          >
            <CornerMarks inset={10} />
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-4">
                  <span
                    className="px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-[0.2em]"
                    style={{ border: "1px solid rgba(92,0,0,0.25)", background: "rgba(92,0,0,0.04)", color: WINE }}
                  >
                    Ensaio em Destaque
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-[0.2em]" style={{ color: "rgba(28,23,16,0.45)" }}>
                    {featuredPost.date}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-medium leading-[1.1] tracking-tight" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                  {featuredPost.title}
                </h2>
                <p className="text-base sm:text-lg font-light leading-relaxed max-w-2xl" style={{ color: "rgba(28,23,16,0.65)" }}>
                  {featuredPost.summary}
                </p>
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-6">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="group flex items-center bg-white text-[#590C0D] font-[Raleway] uppercase border justify-center gap-2 px-8 py-3 rounded-md text-sm transition-all duration-200 cursor-pointer hover:bg-[#590C0D] hover:text-white w-fit"
                  >
                    <span>Ler Ensaio Completo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  <span className="text-xs font-mono flex items-center gap-2" style={{ color: "rgba(28,23,16,0.45)" }}>
                    <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                  </span>
                </div>
              </div>
              <div className="lg:col-span-4 pl-0 lg:pl-10 space-y-4 lg:border-l" style={{ borderColor: "rgba(92,0,0,0.12)" }}>
                <span className="text-[10px] uppercase font-mono tracking-[0.25em] block" style={{ color: "rgba(28,23,16,0.45)" }}>
                  Tópicos Principais
                </span>
                <div className="space-y-3 text-sm font-light" style={{ color: "rgba(28,23,16,0.7)" }}>
                  <div>• Engenharia perene vs. software descartável</div>
                  <div>• Planejamento arquitetural de 20 anos</div>
                  <div>• Manutenção da memória institucional</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {gridPosts.map((post) => (
            <motion.div
              key={post.slug}
              variants={fadeUp}
              className="flex flex-col relative p-8 rounded-[10px] justify-between group transition-all duration-500"
              style={{ border: "1px solid rgba(92,0,0,0.18)", background: "#fff" }}
            >
              <div className="relative z-10 flex-1">
                <div className="flex items-center justify-between pb-4 mb-6" style={{ borderBottom: "1px solid rgba(92,0,0,0.1)" }}>
                  <span className="text-[10px] uppercase font-mono tracking-[0.2em]" style={{ color: "rgba(28,23,16,0.45)" }}>
                    {post.date}
                  </span>
                  <span
                    className="text-[10px] uppercase font-mono tracking-[0.2em] px-3 py-1 rounded-full"
                    style={{ border: "1px solid rgba(92,0,0,0.15)", background: "rgba(92,0,0,0.03)", color: WINE }}
                  >
                    {post.tag}
                  </span>
                </div>
                
                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="text-2xl mb-4 font-medium leading-[1.2]" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                    {post.title}
                  </h3>
                </Link>

                <p className="text-sm font-light leading-relaxed mb-8" style={{ color: "rgba(28,23,16,0.65)" }}>
                  {post.summary}
                </p>
              </div>

              <div className="relative z-10 pt-6 flex items-center justify-between mt-auto" style={{ borderTop: "1px solid rgba(92,0,0,0.1)" }}>
                <span className="text-[10px] font-mono flex items-center gap-1.5" style={{ color: "rgba(28,23,16,0.45)" }}>
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-center gap-2 text-xs uppercase font-mono tracking-widest transition-colors"
                  style={{ color: WINE }}
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
          className="mt-32 p-10 sm:p-16 rounded-[12px] text-center relative overflow-hidden"
          style={{ border: "1px solid rgba(92,0,0,0.25)", background: "#fff", boxShadow: "0 30px 60px -15px rgba(28,23,16,0.05)" }}
        >
          <CornerMarks inset={10} />
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center space-y-6">
            <Seal size={64} />
            <span
              className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase font-mono tracking-[0.25em]"
              style={{ color: WINE }}
            >
              <ScrollText className="w-3.5 h-3.5" /> Dispatch Institucional
            </span>
            <h3 className="text-3xl sm:text-4xl font-medium tracking-tight" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
              Receba nossos ensaios diretamente.
            </h3>
            <p className="font-light text-base leading-relaxed" style={{ color: "rgba(28,23,16,0.65)" }}>
              Publicamos reflexões técnicas e notas arquiteturais de forma restrita e periódica para líderes de engenharia e fundadores.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <input
                type="email"
                placeholder="seu.email@empresa.com"
                className="w-full sm:w-80 px-5 py-3 rounded-[6px] text-sm focus:outline-none transition-all placeholder:text-[#1C1710]/30"
                style={{ border: "1px solid rgba(92,0,0,0.18)", background: PARCHMENT, color: INK }}
              />
              <button
                className="group w-full sm:w-auto flex items-center bg-white text-[#590C0D] font-[Raleway] uppercase border justify-center gap-2 px-8 py-3 rounded-md text-sm transition-all duration-200 cursor-pointer hover:bg-[#590C0D] hover:text-white"
              >
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
          className="mt-28 pt-12 flex flex-col items-center justify-center"
          style={{ borderTop: "1px solid rgba(92,0,0,0.12)" }}
        >
          <div
            className="mt-4 text-[10px] uppercase font-mono tracking-[0.25em] text-center"
            style={{ color: "rgba(28,23,16,0.4)" }}
          >
            Fifteen Miles · Imprensa Oficial Institucional
          </div>
        </motion.div>
      </main>
    </div>
  );
}