"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Compass, Zap, Target, Layers, Cpu, GitBranch, Sparkles, ShieldCheck, ArrowRight, Database, Check } from "lucide-react";
import Link from "next/link";
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

export default function RoadmapPage() {
  useMedievalFonts();

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: PARCHMENT, color: INK, fontFamily: FONT_HEADING }}
    >
      <Seo title="Roadmap Tecnológico — Fifteen Miles" description="O horizonte arquitetural e estratégico da Fifteen Miles. Evolução imutável de nossas plataformas corporativas." path="/roadmap" />

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

      {/* Hero */}
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
            <ChapterTag>Horizonte Estratégico MMXXVI</ChapterTag>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-7xl lg:text-[6.5rem] tracking-tight uppercase leading-[1.02]"
            style={{ fontFamily: FONT_HEADING }}
          >
            <motion.span variants={fadeUp} className="block">A evolução da</motion.span>
            <motion.span variants={fadeUp} className="block font-normal normal-case" style={{ fontFamily: FONT_DISPLAY, color: WINE, fontStyle: "italic" }}>infraestrutura corporativa.</motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-lg sm:text-2xl max-w-3xl leading-relaxed font-light"
            style={{ color: "rgba(28,23,16,0.7)" }}
          >
            Transparência imutável sobre a arquitetura que estamos construindo. Do núcleo operacional robusto à inteligência autônoma de ponta.
          </motion.p>
        </motion.div>
      </section>

      {/* Roadmap Eras */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F3EDE3" }}>
        <BlueprintGrid opacity={0.04} />
        <div className="max-w-[1400px] mx-auto space-y-32 relative z-10">
          
          {/* Phase 1 */}
          <RoadmapEra 
            tag="Fase I · Presente Executivo" 
            title="Consolidação do Núcleo" 
            description="Foco absoluto na resiliência, isolamento multi-tenant e refinamento técnico da infraestrutura principal do Atlas OS."
          >
            <div className="grid md:grid-cols-3 gap-8">
              <RoadmapCard icon={<Layers />} title="Atlas OS Core" desc="Refinamento da arquitetura multitenant, isolamento rigoroso de recursos e performance." status="Estável" />
              <RoadmapCard icon={<Cpu />} title="API Gateway Pro" desc="Redesenho completo da camada de comunicação externa para latência sub-10ms." status="Em Progresso" />
              <RoadmapCard icon={<ShieldCheck />} title="Compliance Suite" desc="Módulos de auditoria automatizada alinhados às exigências legais locais." status="Em Progresso" />
            </div>
          </RoadmapEra>

          {/* Phase 2 */}
          <RoadmapEra 
            tag="Fase II · Próximo Ciclo" 
            title="Protocolo Hermes" 
            description="Expansão profunda da capacidade de integração assíncrona e interoperabilidade avançada entre ecossistemas."
          >
            <div className="grid md:grid-cols-3 gap-8">
              <RoadmapCard icon={<GitBranch />} title="Hermes Messaging" desc="Protocolo proprietário de mensageria assíncrona para sistemas corporativos desacoplados." status="Planejado" />
              <RoadmapCard icon={<Database />} title="Marketplace SDK" desc="Ferramentas robustas para parceiros construírem módulos nativos no Atlas OS." status="Conceito" />
              <RoadmapCard icon={<Zap />} title="Governance Engine" desc="Interface unificada de controle granular para permissões RBAC e soberania." status="Pesquisa" />
            </div>
          </RoadmapEra>

          {/* Phase 3 */}
          <RoadmapEra 
            tag="Fase III · Visão de Longo Prazo" 
            title="Iniciativa Athena" 
            description="A integração estruturada de inteligência autônoma e orquestração cognitiva diretamente na camada central de operações."
          >
            <div className="grid md:grid-cols-2 gap-8">
              <RoadmapCard icon={<Sparkles />} title="Athena Intelligence" desc="Camada de IA autônoma para análise preditiva de dados corporativos e geração de insights." status="Roadmap" />
              <RoadmapCard icon={<Target />} title="Zero-Touch Ops" desc="Automação avançada de fluxos repetitivos via orquestração cognitiva contínua." status="Roadmap" />
            </div>
          </RoadmapEra>

        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-40 sm:py-52 px-6 sm:px-14 flex flex-col items-center justify-center text-center border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: WINE }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.25)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-white">
          <Seal size={96} spin />
          <div className="mt-8">
            <ChapterTag>Colaboração Executiva</ChapterTag>
          </div>

          <h2
            className="mt-8 text-4xl sm:text-6xl lg:text-[4.5rem] leading-[1.05]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600 }}
          >
            Deseja colaborar <br />
            <span className="italic" style={{ color: "#FDE68A" }}>com nossa visão tecnológica?</span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed text-white/80">
            Entre em contato com nossa equipe de engenharia para discutir parcerias estratégicas e implantações avançadas.
          </p>

          <div className="mt-14">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-md text-xs font-mono uppercase tracking-widest bg-white text-[#5C0000] font-bold transition-all hover:bg-white/90 shadow-2xl"
            >
              <span>Entrar em contato</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const RoadmapEra = ({ tag, title, description, children }: { tag: string, title: string, description: string, children: React.ReactNode }) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
    <motion.div variants={fadeUp} className="mb-12 border-l-2 pl-6" style={{ borderColor: WINE }}>
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] mb-2 block" style={{ color: WINE }}>{tag}</span>
      <h2 className="text-3xl sm:text-5xl font-medium mb-4" style={{ fontFamily: FONT_DISPLAY, color: INK }}>{title}</h2>
      <p className="text-base sm:text-lg font-light max-w-2xl" style={{ color: "rgba(28,23,16,0.7)" }}>{description}</p>
    </motion.div>
    {children}
  </motion.div>
);

const RoadmapCard = ({ icon, title, desc, status }: { icon: React.ReactNode, title: string, desc: string, status: string }) => (
  <motion.div
    variants={fadeUp}
    className="p-10 rounded-[16px] border bg-white shadow-sm flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl"
    style={{ borderColor: "rgba(92,0,0,0.18)" }}
  >
    <div>
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-full border flex items-center justify-center" style={{ borderColor: "rgba(92,0,0,0.25)", background: "rgba(92,0,0,0.04)" }}>
          <span className="text-[#5C0000] w-5 h-5 flex items-center justify-center">{icon}</span>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded border" style={{ borderColor: "rgba(92,0,0,0.2)", color: WINE, background: "rgba(92,0,0,0.03)" }}>
          {status}
        </span>
      </div>
      <h3 className="text-2xl font-medium mb-3" style={{ fontFamily: FONT_DISPLAY, color: INK }}>{title}</h3>
    </div>
    <p className="text-sm font-light leading-relaxed pt-4 border-t" style={{ borderColor: "rgba(92,0,0,0.1)", color: "rgba(28,23,16,0.7)" }}>
      {desc}
    </p>
  </motion.div>
);