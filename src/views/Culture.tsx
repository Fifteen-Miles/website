'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Compass, Shield, Code2, Layers, Cpu, Terminal, Users, Sparkles } from "lucide-react";
import Seo from "@/components/Seo";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const FONT_BLACK = `'UnifrakturMaguntia', serif`;
const FONT_HEADING = `'Coolvetica', 'Helvetica Neue', sans-serif`;
const FONT_DISPLAY = `'Fraunces', serif`;
const FONT_EYEBROW = `'Cinzel', serif`;
const FONT_MONO = `'JetBrains Mono', monospace`;

const INK = "#1C1710";
const WINE = "#5C0000";
const PARCHMENT = "#FAF7F0";

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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function Seal({ size = 100, spin = false }: { size?: number; spin?: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      className="relative shrink-0 select-none pointer-events-none"
      style={{
        width: size,
        height: size,
        animation: spin ? "fm-seal-spin 120s linear infinite" : undefined,
      }}
    >
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

function ChapterTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border shadow-sm"
      style={{
        fontFamily: FONT_EYEBROW,
        color: WINE,
        borderColor: "rgba(92,0,0,0.22)",
        background: "rgba(92,0,0,0.03)",
        fontSize: "10px",
        letterSpacing: "0.28em",
        textTransform: "uppercase",
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
      {children}
    </span>
  );
}

function BlueprintGrid({ opacity = 0.04 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(92,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(92,0,0,1) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        opacity,
        maskImage: "radial-gradient(ellipse 80% 70% at 50% 15%, black 20%, transparent 90%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 15%, black 20%, transparent 90%)",
      }}
    />
  );
}

export default function CulturePage() {
  useMedievalFonts();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: PARCHMENT, color: INK, fontFamily: FONT_HEADING }}
    >
      <Seo title="Cultura — Fifteen Miles" description="Princípios humanos, rigor técnico e premissas operacionais que definem a cultura da Fifteen Miles." path="/culture" />

      <style dangerouslySetInnerHTML={{ __html: `
        @font-face {
          font-family: 'Coolvetica';
          src: url('https://cdn.jsdelivr.net/gh/luxonauta/coolvetica@master/woff2/CoolveticaRg.woff2') format('woff2');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @keyframes fm-seal-spin {
          to { transform: rotate(360deg); }
        }
        ::selection {
          background: rgba(92, 0, 0, 0.18);
          color: ${INK};
        }
      `}} />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative w-full pt-32 sm:pt-44 pb-20 px-6 sm:px-14">
        <BlueprintGrid />
        <div className="absolute top-10 right-14 hidden lg:block opacity-70">
          <Seal size={150} spin />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <ChapterTag>Fundação Humana</ChapterTag>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-7xl lg:text-[6.5rem] tracking-tight uppercase leading-[1.02]"
            style={{ fontFamily: FONT_HEADING }}
          >
            <motion.span variants={fadeUp} className="block">A disciplina por trás</motion.span>
            <motion.span variants={fadeUp} className="block font-normal normal-case" style={{ fontFamily: FONT_DISPLAY, color: WINE, fontStyle: "italic" }}>da infraestrutura.</motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-lg sm:text-2xl max-w-3xl leading-relaxed font-light"
            style={{ color: "rgba(28,23,16,0.7)" }}
          >
            Acreditamos que softwares perenes são reflexo direto de uma cultura baseada em rigor, clareza, responsabilidade compartilhada e foco no longo prazo.
          </motion.p>
        </motion.div>

        {/* HERO IMAGE CONTAINER */}
        <motion.div 
          style={{ y: parallaxY, opacity: parallaxOpacity }}
          className="w-full max-w-[1280px] mx-auto mt-20 h-[45vh] md:h-[65vh] rounded-[24px] overflow-hidden relative border border-[rgba(92,0,0,0.2)] shadow-2xl bg-white"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2500&auto=format&fit=crop"
            alt="Colaboração e Rigor Técnico na Fifteen Miles"
            width={2500}
            height={1406}
            priority
            className="w-full h-full object-cover grayscale contrast-125 opacity-75 scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pointer-events-none">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white px-3 py-1.5 rounded bg-black/60 backdrop-blur-md">
              Human Foundation & Culture
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/80 bg-black/60 px-3 py-1.5 rounded backdrop-blur-md">
              Fifteen Miles Team
            </span>
          </div>
        </motion.div>
      </section>

      {/* CORE CULTURE PILLARS */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F3EDE3" }}>
        <BlueprintGrid opacity={0.04} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ChapterTag>Premissas Operacionais</ChapterTag>
            <h2 className="mt-6 text-4xl sm:text-6xl leading-[1.1]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}>
              O que rege nossas decisões <br />
              <span style={{ color: WINE, fontStyle: "italic" }}>dentro e fora do código.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { tag: "Pilar 01", title: "Rigor Técnico & Disciplina", desc: "Não buscamos atalhos. Cada linha de código, padrão de arquitetura e elemento de interface é tratado como um investimento patrimonial de longo prazo para a operação corporativa." },
              { tag: "Pilar 02", title: "Pensamento em Décadas", desc: "Ignoramos o ruído das tendências passageiras e da urgência artificial. Planejamos o crescimento e a infraestrutura considerando horizontes temporais amplos." },
              { tag: "Pilar 03", title: "Clareza Absoluta", desc: "Eliminamos a complexidade acidental. A verdadeira engenharia transforma fluxos caóticos em sistemas simples, transparentes e legíveis por humanos." }
            ].map((item, i) => (
              <div
                key={item.tag}
                className="p-10 sm:p-12 rounded-[16px] border bg-white shadow-sm flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "rgba(92,0,0,0.18)" }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded border" style={{ borderColor: "rgba(92,0,0,0.25)", color: WINE, background: "rgba(92,0,0,0.03)" }}>
                      {item.tag}
                    </span>
                    <span className="font-mono text-xl font-bold" style={{ color: "rgba(92,0,0,0.3)" }}>
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium mb-3" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base font-light leading-relaxed mt-6 pt-6 border-t" style={{ borderColor: "rgba(92,0,0,0.1)", color: "rgba(28,23,16,0.7)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTONOMY & COLLABORATION */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: PARCHMENT }}>
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 relative z-10">
          <div className="p-10 sm:p-14 rounded-[16px] border bg-white shadow-xl flex flex-col justify-between" style={{ borderColor: "rgba(92,0,0,0.2)" }}>
            <div>
              <ChapterTag>Autonomia Responsável</ChapterTag>
              <h2 className="mt-6 text-3xl sm:text-5xl font-medium tracking-tight leading-[1.1] mb-6" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                Liberdade fundamentada <br />
                <span style={{ color: WINE, fontStyle: "italic" }}>em critérios claros.</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg font-light leading-relaxed mt-8 pt-6 border-t" style={{ borderColor: "rgba(92,0,0,0.1)", color: "rgba(28,23,16,0.7)" }}>
              Confiamos plenamente na capacidade de execução de nosso time. Na Fifteen Miles, a autonomia não é ausência de rumo, mas sim a liberdade de resolver problemas complexos com responsabilidade, transparência e alinhamento arquitetural estrito.
            </p>
          </div>

          <div className="p-10 sm:p-14 rounded-[16px] border bg-white shadow-xl flex flex-col justify-between" style={{ borderColor: "rgba(92,0,0,0.2)" }}>
            <div>
              <ChapterTag>Excelência Coletiva</ChapterTag>
              <h2 className="mt-6 text-3xl sm:text-5xl font-medium tracking-tight leading-[1.1] mb-6" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                A melhor ideia <br />
                <span style={{ color: WINE, fontStyle: "italic" }}>sempre vence.</span>
              </h2>
            </div>
            <div className="space-y-4 mt-8 pt-6 border-t" style={{ borderColor: "rgba(92,0,0,0.1)", color: "rgba(28,23,16,0.7)" }}>
              <p className="text-base sm:text-lg font-light leading-relaxed">
                Toda decisão de design e engenharia é debatida e revisada abertamente. O conhecimento é compartilhado sem silos; a responsabilidade técnica é de todos.
              </p>
              <p className="text-base sm:text-lg font-light leading-relaxed">
                Nenhum ego individual substitui a solidez de um consenso fundamentado por dados e testes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN US / CAREERS CTA */}
      <section className="relative py-40 sm:py-52 px-6 sm:px-14 flex flex-col items-center justify-center text-center border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: WINE }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.25)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-white">
          <h2
            className="mt-8 text-4xl sm:text-6xl lg:text-[4.5rem] leading-[1.05]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600 }}
          >
            Quer construir fundações <br />
            <span className="italic" style={{ color: "#FDE68A" }}>que duram décadas?</span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed text-white/80">
            Buscamos talentos comprometidos com o rigor técnico, a clareza sistêmica e a construção de infraestruturas que transformam mercados.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/careers"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-md text-xs font-mono uppercase tracking-widest bg-white text-[#5C0000] font-bold transition-all hover:bg-white/90 shadow-2xl cursor-pointer"
            >
              <span>Ver oportunidades abertas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/engineering"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-md text-xs font-mono uppercase tracking-widest text-white border border-white/30 hover:bg-white/10 transition-all cursor-pointer"
            >
              <span>Conhecer nossa Engenharia</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER BADGE */}
      <section className="py-20 px-6 sm:px-14 flex flex-col items-center justify-center text-center bg-[#FAF7F0] border-t" style={{ borderColor: "rgba(92,0,0,0.12)" }}>
        <div className="flex flex-col items-center gap-4 w-full max-w-lg">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-black/50">
            Rigor · Clareza · Autonomia · Longo Prazo
          </span>
          <div className="flex flex-col items-center gap-1">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase font-bold text-black/90">
              Fifteen Miles
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-black/50">
              Human Foundation & Culture
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}