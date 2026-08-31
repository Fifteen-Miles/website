"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/link";
import Link from "next/link";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Compass, Shield, Code2, Layers, Cpu, Box, Terminal } from "lucide-react";
import Seo from "@/components/Seo";
import LazyImage from "@/components/LazyImage";

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

export default function Engineering() {
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
      <Seo title="Engenharia — Fifteen Miles" description="Arquitetura de sistemas e princípios técnicos projetados para durar décadas." path="/engineering" />

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
            <ChapterTag>Capítulo I · O Núcleo Técnico</ChapterTag>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-7xl lg:text-[6.5rem] tracking-tight uppercase leading-[1.02]"
            style={{ fontFamily: FONT_HEADING }}
          >
            <motion.span variants={fadeUp} className="block">A engenharia é</motion.span>
            <motion.span variants={fadeUp} className="block font-normal normal-case" style={{ fontFamily: FONT_DISPLAY, color: WINE, fontStyle: "italic" }}>o próprio produto.</motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-lg sm:text-2xl max-w-3xl leading-relaxed font-light"
            style={{ color: "rgba(28,23,16,0.7)" }}
          >
            Rejeitamos software descartável. Construímos infraestruturas modulares, tipadas e resilientes, desenhadas para permanecerem perenes ao longo de décadas.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/atlas"
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm transition-all duration-200 cursor-pointer"
              style={{ background: WINE, color: PARCHMENT, fontFamily: "Inter", boxShadow: "0 15px 35px -10px rgba(92,0,0,0.55)" }}
            >
              <span>Conhecer o Atlas OS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a
              href="#filosofia"
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm transition-all duration-200 cursor-pointer border border-[rgba(92,0,0,0.35)] hover:border-[rgba(38,0,0,0.6)]"
              style={{ color: WINE, fontFamily: "Inter" }}
            >
              Nossa filosofia
            </a>
          </motion.div>
        </motion.div>

        {/* HERO IMAGE CONTAINER */}
        <motion.div 
          style={{ y: parallaxY, opacity: parallaxOpacity }}
          className="w-full max-w-[1280px] mx-auto mt-20 h-[45vh] md:h-[65vh] rounded-[24px] overflow-hidden relative border border-[rgba(92,0,0,0.2)] shadow-2xl bg-white"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
          <LazyImage
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2500&auto=format&fit=crop"
            alt="Arquitetura de Circuitos e Engenharia de Software"
            className="w-full h-full object-cover grayscale contrast-125 opacity-75 scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pointer-events-none">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white px-3 py-1.5 rounded bg-black/60 backdrop-blur-md">
              Core Architecture & Systems
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/80 bg-black/60 px-3 py-1.5 rounded backdrop-blur-md">
              Fifteen Miles Lab
            </span>
          </div>
        </motion.div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section id="filosofia" className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F3EDE3" }}>
        <BlueprintGrid opacity={0.04} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ChapterTag>Capítulo II · A Filosofia</ChapterTag>
            <h2 className="mt-6 text-4xl sm:text-6xl leading-[1.1]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}>
              Antes de escrever código, <br />
              <span style={{ color: WINE, fontStyle: "italic" }}>tomamos decisões definitivas.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { tag: "Módulo 01.A", num: "I", title: "Clareza acima da complexidade.", desc: "Soluções brilhantes são simples de entender. Se a arquitetura exige um manual exaustivo para ser operada, ela falhou em seu propósito fundamental." },
              { tag: "Módulo 01.B", num: "II", title: "Escalabilidade desde a origem.", desc: "Não construímos para o tráfego de hoje. Erguemos fundações sólidas que suportam o peso do crescimento natural da operação sem reescritas dramáticas." },
              { tag: "Módulo 01.C", num: "III", title: "Software como patrimônio vital.", desc: "Linhas de código não são despesas descartáveis; são ativos corporativos de alto valor. Tratamos a base técnica com o rigor de um projeto de engenharia civil." },
              { tag: "Módulo 01.D", num: "IV", title: "Projetado para durar décadas.", desc: "Ignoramos modismos e metodologias efêmeras. Focamos em padrões arquiteturais comprovados pelo tempo que continuarão irrepreensíveis no futuro." }
            ].map((item, i) => (
              <div
                key={item.num}
                className="p-10 sm:p-12 rounded-[16px] border bg-white shadow-sm flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "rgba(92,0,0,0.18)" }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded border" style={{ borderColor: "rgba(92,0,0,0.25)", color: WINE, background: "rgba(92,0,0,0.03)" }}>
                      {item.tag}
                    </span>
                    <span className="font-mono text-xl font-bold" style={{ color: "rgba(92,0,0,0.3)" }}>
                      {item.num}
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

      {/* PIPELINE / STEPS */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: PARCHMENT }}>
        <div className="max-w-[1400px] mx-auto text-center">
          <ChapterTag>Ciclo de Vida</ChapterTag>
          <h2 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight mb-20" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
            Como concebemos cada sistema.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 w-full">
            {["Problema", "Arquitetura", "Produto", "Código", "Validação", "Evolução"].map((step, i) => (
              <div
                key={step}
                className="p-6 rounded-[12px] border bg-white flex flex-col justify-between text-center shadow-sm"
                style={{ borderColor: "rgba(92,0,0,0.18)" }}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest block mb-3 text-[#5C0000]/60">
                  0{i + 1}
                </span>
                <span className="text-sm sm:text-base font-medium uppercase tracking-wide" style={{ color: INK, fontFamily: FONT_MONO }}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESTRICTIONS SECTION */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F6F1EA" }}>
        <BlueprintGrid opacity={0.03} />
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-5">
            <ChapterTag>Restrições Estritas</ChapterTag>
            <h2 className="mt-6 text-4xl sm:text-5xl font-medium tracking-tight leading-[1.08] mb-6" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
              Boas decisões consistem <br />
              <span style={{ color: WINE, fontStyle: "italic" }}>em dizer não.</span>
            </h2>
            <p className="text-lg font-light leading-relaxed" style={{ color: "rgba(28,23,16,0.7)" }}>
              Manter a integridade arquitetural exige limites absolutos sobre o que recusamos admitir na base de código.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {[
              "Nunca criamos soluções específicas ou pontuais para um único cliente.",
              "Nunca duplicamos componentes nem reescrevemos lógica existente.",
              "Nunca espalhamos regras de negócio sem centralização clara.",
              "Nunca sacrificamos estabilidade arquitetural por velocidade efêmera.",
              "Nunca implementamos funcionalidades sem um propósito operacional cristalino."
            ].map((text, i) => (
              <div key={i} className="p-6 sm:p-7 rounded-[12px] border bg-white shadow-sm flex items-center gap-6" style={{ borderColor: "rgba(92,0,0,0.15)" }}>
                <span className="font-mono text-xs text-[#5C0000] tracking-widest font-bold">
                  0{i + 1}
                </span>
                <p className="text-sm sm:text-base font-light" style={{ color: INK }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEMIC PATTERNS */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: PARCHMENT }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ChapterTag>Padrões Sistêmicos</ChapterTag>
            <h2 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
              Princípios de Arquitetura
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Cpu, title: "Escalabilidade", desc: "A infraestrutura cresce de forma transparente, suportando novos cenários sem intervenção manual." },
              { icon: Layers, title: "Modularidade", desc: "Blocos isolados e independentes. Se uma peça for substituída, o sistema permanece intacto." },
              { icon: Code2, title: "Consistência", desc: "Um único padrão visual, lógico e estrutural permeia absolutamente toda a aplicação." },
              { icon: Terminal, title: "Legibilidade", desc: "Código escrito para ser lido por humanos primeiro, e processado por máquinas depois." },
              { icon: Shield, title: "Reutilização", desc: "Nenhum problema deve ser resolvido duas vezes. Centralizamos inteligência e design." },
              { icon: Compass, title: "Governança", desc: "Controle estrito sobre permissões, histórico e ciclo de vida de cada dado criado." }
            ].map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-10 rounded-[16px] border bg-white shadow-sm flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: "rgba(92,0,0,0.18)" }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-full border flex items-center justify-center mb-8" style={{ borderColor: "rgba(92,0,0,0.25)", background: "rgba(92,0,0,0.04)" }}>
                      <IconComp className="w-5 h-5 text-[#5C0000]" />
                    </div>
                    <h3 className="text-2xl font-medium mb-3" style={{ fontFamily: FONT_DISPLAY, color: INK }}>{item.title}</h3>
                  </div>
                  <p className="text-sm font-light leading-relaxed pt-4 border-t" style={{ borderColor: "rgba(92,0,0,0.1)", color: "rgba(28,23,16,0.7)" }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HORIZON & CULTURE */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F3EDE3" }}>
        <BlueprintGrid opacity={0.04} />
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 relative z-10">
          <div className="p-10 sm:p-14 rounded-[16px] border bg-white shadow-xl flex flex-col justify-between" style={{ borderColor: "rgba(92,0,0,0.2)" }}>
            <div>
              <ChapterTag>Visão de Horizonte</ChapterTag>
              <h2 className="mt-6 text-3xl sm:text-5xl font-medium tracking-tight leading-[1.1] mb-6" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                Construímos produtos. <br />
                <span style={{ color: WINE, fontStyle: "italic" }}>Não projetos efêmeros.</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg font-light leading-relaxed mt-8 pt-6 border-t" style={{ borderColor: "rgba(92,0,0,0.1)", color: "rgba(28,23,16,0.7)" }}>
              Enxergamos o horizonte. Toda escolha de abstração, arquitetura ou banco de dados considera um cenário de uso para daqui a 5, 10 ou 20 anos. O tempo é o verdadeiro juiz da boa engenharia.
            </p>
          </div>

          <div className="p-10 sm:p-14 rounded-[16px] border bg-white shadow-xl flex flex-col justify-between" style={{ borderColor: "rgba(92,0,0,0.2)" }}>
            <div>
              <ChapterTag>Cultura de Engenharia</ChapterTag>
              <h2 className="mt-6 text-3xl sm:text-5xl font-medium tracking-tight leading-[1.1] mb-6" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                A melhor ideia <br />
                <span style={{ color: WINE, fontStyle: "italic" }}>sempre vence.</span>
              </h2>
            </div>
            <div className="space-y-4 mt-8 pt-6 border-t" style={{ borderColor: "rgba(92,0,0,0.1)", color: "rgba(28,23,16,0.7)" }}>
              <p className="text-base sm:text-lg font-light leading-relaxed">
                Toda decisão arquitetural é debatida e revisada rigorosamente. O código é uma responsabilidade compartilhada por toda a equipe, sem donos de módulos e sem egos.
              </p>
              <p className="text-base sm:text-lg font-light leading-relaxed">
                A excelência coletiva supera qualquer genialidade isolada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL STATEMENT & CTA */}
      <section className="relative py-40 sm:py-52 px-6 sm:px-14 flex flex-col items-center justify-center text-center border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: WINE }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.25)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-white">
          <Seal size={96} spin />
          <div className="mt-8">
            <ChapterTag>Conclusão Técnica</ChapterTag>
          </div>

          <h2
            className="mt-8 text-4xl sm:text-6xl lg:text-[4.5rem] leading-[1.05]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600 }}
          >
            Nosso trabalho não termina <br />
            <span className="italic" style={{ color: "#FDE68A" }}>quando o software funciona.</span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed text-white/80">
            O verdadeiro objetivo da engenharia é construir plataformas que continuem operando de forma impecável, transparente e silenciosa conforme sua empresa escala.
          </p>

          <div className="mt-14">
            <Link
              href="/atlas"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-md text-xs font-mono uppercase tracking-widest bg-white text-[#5C0000] font-bold transition-all hover:bg-white/90 shadow-2xl"
            >
              <span>Ver a plataforma em ação</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER BADGE */}
      <section className="py-20 px-6 sm:px-14 flex flex-col items-center justify-center text-center bg-[#FAF7F0] border-t" style={{ borderColor: "rgba(92,0,0,0.12)" }}>
        <div className="flex flex-col items-center gap-4 w-full max-w-lg">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-black/50">
            Git · GitHub · NestJS · Next.js · React · TypeScript · PostgreSQL · Redis
          </span>
          <div className="flex flex-col items-center gap-1">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase font-bold text-black/90">
              Fifteen Miles
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-black/50">
              Engineering Architecture
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}