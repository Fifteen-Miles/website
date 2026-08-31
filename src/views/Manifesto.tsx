"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import Link from "next/link";
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

export default function Manifesto() {
  useMedievalFonts();

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: PARCHMENT, color: INK, fontFamily: FONT_HEADING }}
    >
      <Seo title="Manifesto — Fifteen Miles" description="Manifesto oficial da Fifteen Miles: princípios, premissas imutáveis e visão sobre infraestruturas perenes." path="/manifesto" />

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

      {/* Hero Section */}
      <section className="relative w-full pt-32 sm:pt-44 pb-20 px-6 sm:px-14 text-center">
        <BlueprintGrid />
        <div className="absolute top-10 right-14 hidden lg:block opacity-70">
          <Seal size={150} spin />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <ChapterTag>Capítulo I · Documento Fundador</ChapterTag>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-7xl lg:text-[6.5rem] tracking-tight uppercase leading-[1.02]"
            style={{ fontFamily: FONT_HEADING }}
          >
            <motion.span variants={fadeUp} className="block">Não estamos construindo</motion.span>
            <motion.span variants={fadeUp} className="block font-normal normal-case" style={{ fontFamily: FONT_DISPLAY, color: WINE, fontStyle: "italic" }}>mais um software.</motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-lg sm:text-2xl max-w-3xl leading-relaxed font-light"
            style={{ color: "rgba(28,23,16,0.7)" }}
          >
            Estamos redefinindo a forma como corporações de alta escala operam, centralizam inteligência e constroem perenidade digital.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-12">
            <p className="text-3xl sm:text-5xl font-light tracking-tight" style={{ fontFamily: FONT_DISPLAY, color: WINE }}>
              Projetado para durar décadas.
            </p>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="w-full max-w-[1280px] mx-auto mt-20 h-[45vh] md:h-[65vh] rounded-[24px] overflow-hidden relative border border-[rgba(92,0,0,0.2)] shadow-2xl bg-white"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
          <LazyImage
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2500&auto=format&fit=crop"
            alt="Arquitetura Monumental"
            className="w-full h-full object-cover grayscale contrast-125 opacity-75 scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>
      </section>

      {/* Intro Quote */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-12 max-w-4xl mx-auto text-center border-t" style={{ borderColor: "rgba(92,0,0,0.12)" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8 text-xl sm:text-3xl font-light tracking-tight leading-relaxed"
          style={{ color: "rgba(28,23,16,0.8)" }}
        >
          <motion.p variants={fadeUp}>
            Toda empresa nasce acreditando que irá perdurar por gerações.
          </motion.p>
          <motion.p variants={fadeUp} style={{ color: "rgba(28,23,16,0.5)" }}>
            Mas poucas escolhem ferramentas estruturadas para acompanhar o peso dessa ambição.
          </motion.p>
          <motion.p variants={fadeUp} className="font-serif italic font-normal text-3xl sm:text-5xl" style={{ color: WINE }}>
            Nós acreditamos que isso precisa mudar absolutamente.
          </motion.p>
        </motion.div>
      </section>

      {/* The Diagnosis */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F3EDE3" }}>
        <BlueprintGrid opacity={0.04} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ChapterTag>Capítulo II · O Diagnóstico</ChapterTag>
            <h2 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
              Por que existimos.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-10 rounded-[16px] border bg-white shadow-sm" style={{ borderColor: "rgba(92,0,0,0.18)" }}>
              <p className="text-base sm:text-lg font-light leading-relaxed" style={{ color: "rgba(28,23,16,0.7)" }}>
                Existe um excesso alarmante de ferramentas no mercado corporativo. Há complexidade desnecessária acumulada e silos desconectados que prometem clareza operacional, mas entregam apenas ruído e fragmentação.
              </p>
            </div>
            <div className="p-10 rounded-[16px] border bg-white shadow-sm" style={{ borderColor: "rgba(92,0,0,0.18)" }}>
              <p className="text-base sm:text-lg font-light leading-relaxed" style={{ color: "rgba(28,23,16,0.7)" }}>
                As empresas perderam o controle de sua própria base de dados e fluxos vitais. Tornaram-se reféns de ecossistemas passageiros, assinaturas efêmeras e arquiteturas sem coesão.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "Mais sistemas.", "Mais logins.", "Mais integrações.", "Mais planilhas.",
              "Mais retrabalho.", "Mais ruído.", "Menos contexto.", "Menos clareza."
            ].map((phrase, i) => (
              <div key={i} className="p-6 rounded-[12px] border bg-white shadow-sm" style={{ borderColor: "rgba(92,0,0,0.15)" }}>
                <span className="text-sm sm:text-base font-medium" style={{ color: phrase.startsWith('Menos') ? WINE : "rgba(28,23,16,0.5)" }}>
                  {phrase}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immutable Beliefs */}
      <section className="relative py-32 sm:py-48 px-6 sm:px-12 max-w-5xl mx-auto space-y-24 text-center border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: PARCHMENT }}>
        <div>
          <ChapterTag>Capítulo III · Crenças Imutáveis</ChapterTag>
        </div>
        {[
          "Acreditamos que software é um patrimônio corporativo vital.",
          "Acreditamos que empresas merecem operar com elegância absoluta.",
          "Acreditamos que a verdadeira simplicidade exige alta engenharia.",
          "Acreditamos que velocidade sem direção arquitetural destrói o futuro."
        ].map((belief, i) => (
          <div key={i}>
            <p className="text-3xl sm:text-5xl font-light tracking-tight leading-snug" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
              {belief}
            </p>
          </div>
        ))}
      </section>

      {/* Posture */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F6F1EA" }}>
        <BlueprintGrid opacity={0.03} />
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <ChapterTag>Capítulo IV · Postura</ChapterTag>
            <h2 className="mt-6 text-3xl sm:text-5xl font-medium tracking-tight leading-tight" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
              O mercado mede quantidade. <br />
              <span style={{ color: WINE, fontStyle: "italic" }}>Nós medimos permanência.</span>
            </h2>
          </div>
          <div className="space-y-6 text-base sm:text-lg font-light leading-relaxed border-l-2 pl-8 md:pl-12" style={{ borderColor: WINE, color: "rgba(28,23,16,0.7)" }}>
            <p>O ecossistema digital passou a glorificar a velocidade vazia. Lançar dezenas de utilitários descartáveis por trimestre tornou-se o padrão da indústria.</p>
            <p>Nós escolhemos o caminho inverso. Construímos poucas plataformas, mas com um nível de rigor técnico que lhes permite operar impecavelmente ao longo de décadas.</p>
          </div>
        </div>
      </section>

      {/* What we refuse vs What we seek */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: PARCHMENT }}>
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* Refuse */}
          <div className="p-10 sm:p-14 rounded-[16px] border bg-white shadow-sm" style={{ borderColor: "rgba(92,0,0,0.2)" }}>
            <ChapterTag>Capítulo V</ChapterTag>
            <h3 className="mt-6 text-2xl sm:text-3xl font-medium mb-8" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
              O que recusamos
            </h3>
            <ul className="space-y-4 text-base font-light" style={{ color: "rgba(28,23,16,0.7)" }}>
              {[
                "Nunca seguimos modismos ou tendências passageiras.",
                "Nunca perseguimos o hype tecnológico do trimestre.",
                "Nunca criamos funcionalidades sem propósito operacional.",
                "Nunca sacrificamos a integridade arquitetural por atalhos.",
                "Nunca construímos software descartável."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5C0000]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Seek */}
          <div className="p-10 sm:p-14 rounded-[16px] border bg-white shadow-sm" style={{ borderColor: "rgba(92,0,0,0.2)" }}>
            <ChapterTag>Capítulo VI</ChapterTag>
            <h3 className="mt-6 text-2xl sm:text-3xl font-medium mb-8" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
              O que buscamos
            </h3>
            <ul className="space-y-4 text-base font-light" style={{ color: "rgba(28,23,16,0.7)" }}>
              {[
                "Construir com extrema paciência e rigor disciplinar.",
                "Pensar em décadas de operação, não em trimestres financeiros.",
                "Projetar sistemas de clareza conceitual absoluta.",
                "Eliminar toda complexidade acidental do fluxo diário.",
                "Erguer infraestrutura empresarial inabalável."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5C0000]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* First Foundation */}
      <section className="relative py-32 sm:py-48 px-6 sm:px-12 max-w-4xl mx-auto text-center border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F3EDE3" }}>
        <BlueprintGrid opacity={0.04} />
        <div className="relative z-10 space-y-6">
          <ChapterTag>Capítulo VII · O Marco Inicial</ChapterTag>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-tight" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
            O Atlas OS é apenas <br />
            <span style={{ color: WINE, fontStyle: "italic" }}>o primeiro alicerce.</span>
          </h2>
          <p className="text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto pt-4" style={{ color: "rgba(28,23,16,0.7)" }}>
            Não representa o objetivo final. É a primeira pedra de um ecossistema integrado inteiro que continuará expandindo as fronteiras da engenharia de software corporativa.
          </p>
        </div>
      </section>

      {/* Vision & Responsibility */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: PARCHMENT }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <ChapterTag>Capítulo VIII · Visão</ChapterTag>
            <h2 className="mt-6 text-3xl sm:text-4xl font-medium tracking-tight mb-4" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
              O horizonte tecnológico.
            </h2>
            <p className="text-base sm:text-lg font-light leading-relaxed" style={{ color: "rgba(28,23,16,0.7)" }}>
              Atlas, ecossistemas modulares, IA soberana e integração sem atritos. Uma visão unificada onde a complexidade da tecnologia desaparece e a empresa opera com perfeição silenciosa.
            </p>
          </div>
          <div>
            <ChapterTag>Capítulo IX · Compromisso</ChapterTag>
            <h2 className="mt-6 text-3xl sm:text-4xl font-medium tracking-tight mb-4" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
              A responsabilidade institucional.
            </h2>
            <p className="text-base sm:text-lg font-light leading-relaxed" style={{ color: "rgba(28,23,16,0.7)" }}>
              Empresas confiarão seus processos críticos, suas equipes, suas operações e seus dados históricos ao nosso software. Isso exige um nível inegociável de honra e precisão técnica.
            </p>
          </div>
        </div>
      </section>

      {/* Decades & Made in Brazil */}
      <section className="relative py-32 sm:py-48 px-6 sm:px-12 max-w-5xl mx-auto text-center space-y-20 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F6F1EA" }}>
        <div>
          <p className="text-5xl sm:text-7xl lg:text-8xl tracking-tight mb-6" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
            Não pensamos em cinco anos.
          </p>
          <p className="text-2xl sm:text-4xl font-medium tracking-tight" style={{ fontFamily: FONT_HEADING, color: WINE }}>
            Pensamos nas próximas décadas.
          </p>
        </div>

        <div className="max-w-3xl mx-auto p-10 rounded-[16px] border bg-white shadow-sm" style={{ borderColor: "rgba(92,0,0,0.18)" }}>
          <ChapterTag>Capítulo X · Origem</ChapterTag>
          <h3 className="mt-6 text-2xl sm:text-4xl font-medium tracking-tight mb-4" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
            Feito no Brasil. Para o mundo.
          </h3>
          <p className="text-base sm:text-lg font-light leading-relaxed" style={{ color: "rgba(28,23,16,0.7)" }}>
            Desenvolvido com profundo entendimento da realidade corporativa nacional, mas mantendo rigorosamente padrões arquiteturais de excelência global.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-40 sm:py-52 px-6 sm:px-14 flex flex-col items-center justify-center text-center border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: WINE }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.25)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-white">
          <div className="mt-8">
          </div>

          <div className="mt-8 space-y-3 font-light text-xl sm:text-2xl text-white/80">
            <p>O software muda.</p>
            <p>A engenharia evolui.</p>
            <p>As empresas crescem.</p>
          </div>

          <h2
            className="mt-6 text-4xl sm:text-6xl lg:text-[4rem] leading-[1.05]"
            style={{ fontFamily: FONT_BLACK, fontWeight: 600, fontStyle: "italic", color: "#FDE68A" }}
          >
            Os princípios permanecem imutáveis.
          </h2>

          <p className="mt-8 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed text-white/80">
            Algumas empresas constroem aplicativos efêmeros. Outras constroem sistemas. Nós escolhemos erguer fundações para que toda organização de alto nível opere à altura de sua ambição.
          </p>

          <div className="mt-14">
            <Link
              href="/atlas"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-md text-xs font-mono uppercase tracking-widest bg-white text-[#5C0000] font-bold transition-all hover:bg-white/90 shadow-2xl"
            >
              <span>Conhecer o Atlas OS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}