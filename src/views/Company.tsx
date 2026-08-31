"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Compass, ArrowRight, ImageIcon } from "lucide-react";
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

function TeamMemberCard({ name, role, desc }: { name: string; role: string; desc: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="p-8 rounded-[16px] border bg-white shadow-sm flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl"
      style={{ borderColor: "rgba(92,0,0,0.18)" }}
    >
      <div>
        <div className="aspect-[4/3] w-full rounded-[12px] border border-[rgba(92,0,0,0.15)] bg-[#FAF7F0] flex flex-col items-center justify-center relative overflow-hidden mb-6">
          <div className="w-12 h-12 rounded-full border border-[rgba(92,0,0,0.25)] bg-white flex items-center justify-center mb-3">
            <ImageIcon className="w-5 h-5 text-[#5C0000]/60" />
          </div>
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#5C0000]/60">
            Retrato Institucional
          </span>
        </div>

        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#5C0000] block mb-2">
          {role}
        </span>
        <h3 className="text-2xl font-medium mb-3" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
          {name}
        </h3>
      </div>
      <p className="text-xs font-light leading-relaxed pt-4 border-t" style={{ borderColor: "rgba(92,0,0,0.1)", color: "rgba(28,23,16,0.7)" }}>
        {desc}
      </p>
    </motion.div>
  );
}

export default function Company() {
  useMedievalFonts();

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: PARCHMENT, color: INK, fontFamily: FONT_HEADING }}
    >
      <Seo title="Sobre a Fifteen Miles — Infraestrutura e Visão" description="Conheça a visão, origem e o propósito da Fifteen Miles — plataformas empresariais projetadas para durar décadas." path="/company" />

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
      <section className="relative w-full pt-32 sm:pt-44 pb-20 px-6 sm:px-14">
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
            <ChapterTag>Capítulo I · A Instituição</ChapterTag>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-7xl lg:text-[6.5rem] tracking-tight uppercase leading-[1.02]"
            style={{ fontFamily: FONT_HEADING }}
          >
            <motion.span variants={fadeUp} className="block">Ainda estamos construindo</motion.span>
            <motion.span variants={fadeUp} className="block font-normal normal-case" style={{ fontFamily: FONT_DISPLAY, color: WINE, fontStyle: "italic" }}>a Fifteen Miles.</motion.span>
            <span className="block text-2xl sm:text-4xl normal-case font-light mt-4" style={{ fontFamily: FONT_DISPLAY, color: INK }}>E isso é exatamente o que nos motiva.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-lg sm:text-2xl max-w-3xl leading-relaxed font-light"
            style={{ color: "rgba(28,23,16,0.7)" }}
          >
            Acreditamos que grandes empreendimentos não surgem de insights efêmeros, mas da disciplina inegociável de construir todos os dias com precisão cirúrgica.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="w-full max-w-[1280px] mx-auto mt-20 h-[45vh] md:h-[65vh] rounded-[24px] overflow-hidden relative border border-[rgba(92,0,0,0.2)] shadow-2xl bg-white"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
          <LazyImage
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2500&auto=format&fit=crop"
            alt="Arquitetura Institucional"
            className="w-full h-full object-cover grayscale contrast-125 opacity-75 scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>
      </section>

      {/* Global Vision */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F3EDE3" }}>
        <BlueprintGrid opacity={0.04} />
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-6">
            <ChapterTag>Capítulo II · Visão Global</ChapterTag>
            <h2 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight leading-[1.08]" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
              Uma empresa brasileira. <br />
              <span style={{ color: WINE, fontStyle: "italic" }}>Uma visão sem fronteiras.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 space-y-6 text-base sm:text-lg font-light leading-relaxed border-l-2 pl-8 md:pl-12" style={{ borderColor: WINE, color: "rgba(28,23,16,0.7)" }}>
            <p>
              A Fifteen Miles nasceu com a convicção absoluta de que podemos criar sistemas e arquiteturas capazes de competir no mais alto patamar global sem concessões.
            </p>
            <p>
              Não criamos softwares descartáveis para preencher modismos de mercado. Construímos infraestruturas perenes, desenhadas para elevar o padrão operacional corporativo por décadas.
            </p>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-12 border-t text-center" style={{ borderColor: "rgba(92,0,0,0.12)", background: PARCHMENT }}>
        <div className="max-w-4xl mx-auto">
          <ChapterTag>Capítulo III · A Origem Real</ChapterTag>
          <h2 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight leading-[1.1] mb-8" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
            O Atlas nasceu para resolver <br /> problemas reais de operação.
          </h2>
          <p className="text-lg sm:text-xl font-light leading-relaxed mb-10" style={{ color: "rgba(28,23,16,0.7)" }}>
            Concebido inicialmente no cotidiano operacional, percebemos rapidamente que o caos gerado pela fragmentação de ferramentas não era um desafio isolado — era o fardo invisível de milhares de empresas.
          </p>
          <p className="font-serif italic text-2xl sm:text-3xl font-light" style={{ color: WINE }}>
            Decidimos transformar aquela solução interna no sistema operacional definitivo.
          </p>
        </div>
      </section>

      {/* Premises */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F6F1EA" }}>
        <BlueprintGrid opacity={0.03} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ChapterTag>Capítulo IV · Premissas</ChapterTag>
            <h2 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
              O que recusamos acreditar
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Não acreditamos em software descartável.",
              "Não acreditamos em complexidade desnecessária.",
              "Não acreditamos em dezenas de sistemas desconectados.",
              "Acreditamos que empresas merecem operar com absoluta clareza."
            ].map((text, i) => (
              <div
                key={i}
                className="p-10 rounded-[16px] border bg-white shadow-sm flex items-center justify-center min-h-[220px] text-center"
                style={{ borderColor: "rgba(92,0,0,0.18)" }}
              >
                <p className="text-xl sm:text-2xl font-light tracking-tight leading-snug" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Identity */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-12 border-t text-center" style={{ borderColor: "rgba(92,0,0,0.12)", background: WINE, color: "#FFFFFF" }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.25)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl flex flex-col justify-center items-center mx-auto relative z-10">
          <div className="mt-8">
          </div>
          <h2 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600 }}>
            Por que Fifteen Miles?
          </h2>
          <p className="mt-8 text-lg sm:text-2xl font-light tracking-wide leading-relaxed text-white/80">
            O nome carrega a essência da jornada, da distância percorrida com perseverança e da ideia inegociável de progresso contínuo rumo ao longo prazo. Não buscamos a velocidade explosiva e efêmera; buscamos a constância inabalável na construção de relevância.
          </p>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: PARCHMENT }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ChapterTag>Capítulo VI · Ecossistema</ChapterTag>
            <h2 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
              O que estamos construindo
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Atlas OS", desc: "O sistema operacional empresarial unificado para centralizar processos, pessoas e dados." },
              { name: "Hephaestus", desc: "A camada física de infraestrutura e automações que interage diretamente com o mundo real." },
              { name: "Atlas Capture", desc: "O dispositivo físico de captura de tempo e hábitos operacionais na estação de trabalho." },
              { name: "Marketplace", desc: "Ecossistema aberto de extensões, integrações e módulos especializados." },
              { name: "Inteligência & IA", desc: "Camada cognitiva integrada aos dados estruturados da operação." },
              { name: "Governança", desc: "Soberania absoluta de dados, multi-tenancy e controle granular por RBAC." }
            ].map((item, i) => (
              <div
                key={item.name}
                className="p-10 rounded-[16px] border bg-white shadow-sm flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "rgba(92,0,0,0.18)" }}
              >
                <div>
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase block mb-6 text-[#5C0000]">Módulo 0{i+1}</span>
                  <h3 className="text-2xl font-medium mb-3" style={{ fontFamily: FONT_DISPLAY, color: INK }}>{item.name}</h3>
                </div>
                <p className="text-sm font-light leading-relaxed pt-4 border-t" style={{ borderColor: "rgba(92,0,0,0.1)", color: "rgba(28,23,16,0.7)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F3EDE3" }}>
        <BlueprintGrid opacity={0.04} />
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <ChapterTag>Capítulo VII · Cultura</ChapterTag>
            <h2 className="mt-6 text-4xl sm:text-5xl font-medium tracking-tight leading-[1.1] mb-6" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
              Empresas são feitas <br />
              <span style={{ color: WINE, fontStyle: "italic" }}>de pessoas íntegras.</span>
            </h2>
            <p className="text-base sm:text-lg font-light leading-relaxed" style={{ color: "rgba(28,23,16,0.7)" }}>
              Toda decisão importante é discutida coletivamente. A melhor ideia sempre vence, independentemente de quem a propôs. Não existe ego individual; existe a obsessão compartilhada por construir algo verdadeiramente extraordinário.
            </p>
          </div>

          <div className="p-10 sm:p-12 rounded-[16px] border bg-white shadow-sm" style={{ borderColor: "rgba(92,0,0,0.18)" }}>
            <h3 className="text-2xl font-medium mb-3" style={{ fontFamily: FONT_DISPLAY, color: INK }}>Como trabalhamos</h3>
            <p className="text-sm sm:text-base font-light leading-relaxed mb-8" style={{ color: "rgba(28,23,16,0.7)" }}>
              Da concepção à entrega, mantemos um fluxo rigoroso de validação conceitual e refinamento contínuo.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {["Problema", "Pesquisa", "Discussão", "Arquitetura", "Produto", "Validação", "Evolução"].map((step, idx) => (
                <span key={step} className="px-4 py-2 bg-[#FAF7F0] border rounded-full font-mono text-[10px] tracking-wider uppercase text-[#5C0000]" style={{ borderColor: "rgba(92,0,0,0.2)" }}>
                  0{idx+1}. {step}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Long-term pillars */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: PARCHMENT }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
              Projetado para durar décadas.
            </h2>
            <p className="mt-4 text-base sm:text-lg font-light" style={{ color: "rgba(28,23,16,0.7)" }}>
              Construímos com a paciência necessária para criar sistemas que permanecerão indispensáveis daqui a vinte anos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Pensamento de Longo Prazo", desc: "Decisões orientadas pelo impacto perene e pela sustentabilidade duradoura da arquitetura." },
              { title: "Excelência Antes da Velocidade", desc: "Preferimos fazer certo uma única vez a ter que reconstruir apressadamente no futuro." },
              { title: "Simplicidade Exige Engenharia", desc: "A verdadeira elegância oculta uma complexidade imensa nos bastidores para parecer simples ao usuário." },
              { title: "Software é Patrimônio", desc: "Tratamos cada linha de código e cada banco de dados como ativos vitais da instituição." },
              { title: "Empresas Antes da Tecnologia", desc: "A tecnologia serve exclusivamente para potencializar a clareza e a autonomia do negócio." }
            ].map((val, i) => (
              <div
                key={val.title}
                className="p-10 rounded-[16px] border bg-white shadow-sm flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: "rgba(92,0,0,0.18)" }}
              >
                <span className="font-mono text-xs text-[#5C0000] tracking-widest block mb-6 font-bold">0{i+1}</span>
                <div>
                  <h3 className="text-xl font-medium mb-3" style={{ fontFamily: FONT_DISPLAY, color: INK }}>{val.title}</h3>
                  <p className="text-sm font-light leading-relaxed pt-4 border-t" style={{ borderColor: "rgba(92,0,0,0.1)", color: "rgba(28,23,16,0.7)" }}>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Present & Future Timeline */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F3EDE3" }}>
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12">
          <div className="p-10 sm:p-14 rounded-[16px] border bg-white shadow-sm" style={{ borderColor: "rgba(92,0,0,0.2)" }}>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#5C0000] block mb-4">O Presente</span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-6" style={{ fontFamily: FONT_DISPLAY, color: INK }}>Hoje.</h2>
            <ul className="space-y-4 text-base sm:text-lg font-light" style={{ color: "rgba(28,23,16,0.7)" }}>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#5C0000] rounded-full" /> Empresa estabelecida com foco em excelência</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#5C0000] rounded-full" /> Atlas OS em desenvolvimento e validação contínua</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#5C0000] rounded-full" /> Primeiros clientes corporativos operando na plataforma</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#5C0000] rounded-full" /> Consolidação de fundamentos de engenharia e marca</li>
            </ul>
          </div>

          <div className="p-10 sm:p-14 rounded-[16px] border bg-white shadow-sm" style={{ borderColor: "rgba(92,0,0,0.2)" }}>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#5C0000] block mb-4">O Futuro</span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-6" style={{ fontFamily: FONT_DISPLAY, color: INK }}>Amanhã.</h2>
            <ul className="space-y-4 text-base sm:text-lg font-light" style={{ color: "rgba(28,23,16,0.7)" }}>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#5C0000]/60 rounded-full" /> Empresas inteiras operando nativamente sobre o Atlas</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#5C0000]/60 rounded-full" /> Lançamento oficial da linha Hephaestus e Atlas Capture</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#5C0000]/60 rounded-full" /> Inteligência operacional integrada aos processos</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#5C0000]/60 rounded-full" /> Expansão internacional estruturada de alta escala</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="relative py-32 sm:py-48 px-6 sm:px-12 max-w-5xl mx-auto text-center border-t" style={{ borderColor: "rgba(92,0,0,0.12)" }}>
        <div className="space-y-12">
          <ChapterTag>Nosso Manifesto</ChapterTag>
          <p className="text-3xl sm:text-5xl font-light tracking-tight leading-snug" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
            Não seguimos tendências efêmeras. Construímos infraestrutura.
          </p>
          <p className="text-3xl sm:text-5xl font-light tracking-tight leading-snug" style={{ fontFamily: FONT_DISPLAY, color: "rgba(92,0,0,0.8)" }}>
            Não perseguimos ruído. Perseguimos excelência estrutural.
          </p>
          <p className="text-3xl sm:text-5xl font-light tracking-tight leading-snug" style={{ fontFamily: FONT_DISPLAY, color: "rgba(28,23,16,0.5)" }}>
            Não queremos lançar dezenas de produtos. Queremos construir poucos produtos extraordinários.
          </p>
        </div>
      </section>

      {/* Team / Leadership */}
      <section className="relative py-32 sm:py-48 px-6 sm:px-12 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F3EDE3" }}>
        <BlueprintGrid opacity={0.04} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <ChapterTag>Liderança Executiva</ChapterTag>
            <h2 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
              Quem constrói.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMemberCard name="Nathanael" role="Founder & CEO" desc="Responsável por produto, arquitetura de sistemas e visão geral da empresa." />
            <TeamMemberCard name="Gabryel" role="CFO & CBO" desc="Estratégia financeira, operações corporativas e expansão de negócios." />
            <TeamMemberCard name="Arthur" role="Senior Software Engineer" desc="Engenharia de sistemas, performance avançada e robustez técnica." />
            <TeamMemberCard name="Vinicius" role="Senior Software Engineer" desc="Arquitetura de componentes de alta performance e interface." />
            <TeamMemberCard name="Jaciara" role="Chief Legal Officer" desc="Conformidade regulatória, governança corporativa e segurança jurídica." />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-40 sm:py-52 px-6 sm:px-14 flex flex-col items-center justify-center text-center border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: WINE }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.25)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-white">
          <Seal size={96} spin />
          <div className="mt-8">
            <ChapterTag>Conclusão Institucional</ChapterTag>
          </div>

          <h2
            className="mt-8 text-4xl sm:text-6xl lg:text-[4.5rem] leading-[1.05]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600 }}
          >
            Ainda estamos escrevendo <br />
            <span className="italic" style={{ color: "#FDE68A" }}>os primeiros capítulos.</span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed text-white/80">
            A Fifteen Miles é construída com calma, com rigor técnico e pensando sempre em décadas, não em meses. Se você acredita que o software empresarial pode ser melhor, vamos conversar.
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