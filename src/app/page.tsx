"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Activity,
  Shield,
  Compass,
  Handshake,
  KeyRound,
  ScrollText,
  Castle,
  Landmark,
} from "lucide-react";
import Seo from "../components/Seo";

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
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function Seal({ size = 100, spin = false }: { size?: number; spin?: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      className="relative shrink-0"
      style={{
        width: size,
        height: size,
        animation: spin ? "fm-seal-spin 90s linear infinite" : undefined,
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

function BlueprintGrid({ opacity = 0.045 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
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

function SectionRule() {
  return (
    <div className="flex items-center justify-center gap-4 mb-10">
      <span className="h-px w-16" style={{ background: "rgba(92,0,0,0.3)" }} />
      <Seal size={26} />
      <span className="h-px w-16" style={{ background: "rgba(92,0,0,0.3)" }} />
    </div>
  );
}

const FEATURES = [
  "Fundação de planejamento unificada",
  "Motor de automação neural",
  "Telemetria em tempo real, sem véus",
];

type Pillar = {
  id: string;
  numeral: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
  icon: typeof Shield;
};

const pillars: Pillar[] = [
  {
    id: "engenharia",
    numeral: "I",
    tag: "Engenharia",
    title: "Código construído para durar décadas.",
    subtitle: "Rigor arquitetônico sobre velocidade.",
    description:
      "Tratamos software como infraestrutura crítica — a mesma exigência de uma catedral, não de uma barraca de feira. Não adotamos modismos; erguemos fundações capazes de sustentar operações por gerações de uso.",
    metrics: [
      { label: "Padrão", value: "Clean Architecture" },
      { label: "Manutenção", value: "Sustentável" },
      { label: "Foco", value: "Longo Prazo" },
    ],
    icon: Shield,
  },
  {
    id: "presenca",
    numeral: "II",
    tag: "Presença",
    title: "Software de excelência, forjado no Ceará.",
    subtitle: "Ofício local. Padrão global.",
    description:
      "Nascemos no Ceará com um objetivo simples: entregar às empresas brasileiras o mesmo nível de infraestrutura exigido nos grandes centros — adaptado à nossa moeda, à nossa realidade e ao nosso ritmo.",
    metrics: [
      { label: "Sede", value: "Ceará · BR" },
      { label: "Cobrança", value: "Em Reais (R$)" },
      { label: "Atendimento", value: "Local" },
    ],
    icon: Compass,
  },
  {
    id: "mercado",
    numeral: "III",
    tag: "Mercado",
    title: "Aliança estratégica, não apenas fornecimento.",
    subtitle: "Não somos apenas fornecedores.",
    description:
      "O sistema de uma empresa é o seu coração pulsante. Caminhamos ao lado de nossos parceiros, revisando o desenho de nossas soluções conforme os gargalos reais do dia a dia — não conforme tendências.",
    metrics: [
      { label: "Modelo", value: "SaaS B2B" },
      { label: "Foco", value: "PMEs" },
      { label: "Expansão", value: "Mútua" },
    ],
    icon: Handshake,
  },
  {
    id: "governanca",
    numeral: "IV",
    tag: "Governança",
    title: "Soberania sobre a memória da empresa.",
    subtitle: "Seus dados pertencem à sua organização.",
    description:
      "Construímos garantindo que o patrimônio de informação de cada empresa seja preservado em ambientes seguros, com políticas rígidas de acesso e transparência total — sem silos opacos, sem letras miúdas.",
    metrics: [
      { label: "Privacidade", value: "By Design" },
      { label: "Soberania", value: "Total" },
      { label: "Acesso", value: "Granular" },
    ],
    icon: KeyRound,
  },
];

const companyStats = [
  { label: "Origem", value: "Brasil" },
  { label: "Modelo", value: "B2B" },
  { label: "Estágio", value: "Evolutivo" },
  { label: "Infra", value: "Configurável" },
];

const atlasLegend = [
  { label: "Governança Operacional", value: "Arquitetura Imutável" },
  { label: "Modelo de Conhecimento", value: "Memória Institucional" },
  { label: "Controle de Acesso", value: "Granularidade Estrita" },
];

const philosophyPrinciples = [
  {
    numeral: "I",
    title: "Pensamento de Longo Prazo",
    desc: "Rejeitamos a cultura de lançamentos apressados. Planejamos software para ciclos de vida de décadas — não de trimestres.",
  },
  {
    numeral: "II",
    title: "Engenharia & Precisão",
    desc: "Cada contrato de API, modelo de dados e elemento de interface possui intenção clara e fundamentação formal.",
  },
  {
    numeral: "III",
    title: "Elegância & Calma",
    desc: "Interfaces limpas que transmitem tranquilidade operacional, eliminando ruído visual e modismos efêmeros.",
  },
  {
    numeral: "IV",
    title: "Execução Deliberada",
    desc: "Nunca velocidade cega. Nossos sistemas são erguidos com a disciplina das grandes obras de arquitetura.",
  },
];

const commands = [
  "arquitetura --first",
  "typecheck --strict",
  "git workflow --disciplined",
  "review --peer",
  "docs --living",
];

const horizons = [
  {
    year: "Horizonte 2030",
    title: "Consolidação de Infraestrutura",
    desc: "Adoção do Atlas OS pelas instituições que priorizam soberania de dados sobre conveniência passageira.",
  },
  {
    year: "Horizonte 2040",
    title: "Resiliência Operacional",
    desc: "Sistemas em execução contínua e imutável, preservando histórico institucional de vinte anos.",
  },
  {
    year: "Horizonte 2050",
    title: "Padrão de Legado",
    desc: "Plataformas que permanecem legíveis, seguras e funcionais — atravessando gerações de operadores.",
  },
];

export default function Home() {
  useMedievalFonts();
  const [activePillar, setActivePillar] = useState(pillars[0].id);
  const currentPillar = pillars.find((p) => p.id === activePillar) || pillars[0];
  const PillarIcon = currentPillar.icon;

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: PARCHMENT, color: INK, fontFamily: FONT_HEADING }}
    >
      <Seo
        title="Fifteen Miles | Tiramos a sua empresa da idade das trevas"
        description="A Fifteen Miles constrói plataformas corporativas configuráveis, projetadas para durar décadas — infraestrutura de precisão para empresas que recusam operar às escuras."
        path="/"
      />

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

      <section className="relative w-full pt-36 sm:pt-44 pb-28 sm:pb-36 px-6 sm:px-14">
        <BlueprintGrid />
        <div
          className="pointer-events-none absolute inset-6 sm:inset-10 rounded-[4px]"
          style={{ border: "1px solid rgba(92,0,0,0.18)" }}
        />
        <div className="absolute top-14 right-14 hidden lg:block opacity-70">
          <Seal size={150} spin />
        </div>

        <div className="relative z-10 max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 lg:gap-20 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              className="mt-8 text-[3rem] sm:text-6xl md:text-[4.2rem] lg:text-[4.8rem] leading-[1.08] tracking-tight uppercase"
              style={{ fontFamily: FONT_HEADING }}
            >
              É hora de iluminar{" "}
              <span
                style={{ fontFamily: FONT_BLACK, color: WINE, fontWeight: 400, textTransform: "none" }}
                className="inline-block text-[3.4rem] sm:text-7xl md:text-[5.2rem] lg:text-[5.8rem]"
              >
                os seus processos.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
              className="mt-6 text-xl sm:text-2xl"
              style={{ fontFamily: "Raleway", color: WINE, fontWeight: 400, textTransform:'uppercase' }}
            >
              Projetado <span style={{ fontWeight: 600 }}>para</span> <span style={{ fontWeight: 700 }}>durar</span> <span style={{ fontWeight: 900 }}>décadas.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              className="mt-6 text-base sm:text-lg max-w-[36rem] leading-relaxed"
              style={{ color: "rgba(28,23,16,0.7)", fontWeight: 500, fontFamily: "Raleway" }}
            >
              Infraestrutura corporativa forjada com o rigor de uma planta de engenharia e a solenidade de um códice antigo — para operações que não podem se dar ao luxo de desmoronar.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="mt-8 flex flex-col gap-3"
            >
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm font-medium tracking-wide" style={{ color: "rgba(28,23,16,0.8)" }}>
                  <span
                    className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                    style={{ border: `1px solid rgba(92,0,0,0.4)`, background: "rgba(92,0,0,0.05)" }}
                  >
                    <Check className="w-3 h-3" style={{ color: WINE }} />
                  </span>
                  {f}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="mt-9 flex items-center gap-2 w-fit rounded-md py-2 px-4"
              style={{ border: "1px solid rgba(92,0,0,0.18)", background: "rgba(92,0,0,0.04)" }}
            >
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full"
                style={{ background: WINE }}
              >
                <Activity className="w-4 h-4" style={{ color: PARCHMENT }} />
              </span>
              <div className="flex flex-col">
                <span
                  className="text-[10px] uppercase"
                  style={{ fontFamily: FONT_HEADING, letterSpacing: "0.2em", color: "rgba(28,23,16,0.5)" }}
                >
                  Métrica de Impacto
                </span>
                <span className="text-sm font-medium" style={{ color: INK }}>
                  <strong style={{ color: WINE, fontFamily:FONT_BLACK }}>+3.240</strong> <span style={{ color: WINE, fontFamily:FONT_HEADING }}>horas</span> resgatadas
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.58, ease: EASE }}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={() => (window.location.href = "https://atlas.fifteenmiles.tech/register")}
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm transition-all duration-200 cursor-pointer"
                style={{ background: WINE, color: PARCHMENT, fontFamily: "Inter", boxShadow: "0 15px 35px -10px rgba(92,0,0,0.55)" }}
              >
                <span>Comece já</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <Link
                href="/docs"
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm transition-all duration-200 cursor-pointer border border-[rgba(92,0,0,0.35)] transition-all duration-200 cursor-pointer hover:border-[rgba(38,0,0,0.6)]"
                style={{ color: WINE, fontFamily: "Inter" }}
              >
                <Image
                  src="/google-icon-logo-svgrepo-com.svg"
                  alt="Google"
                  width={12}
                  height={12}
                  priority
                  draggable={false}
                />
                Registre-se com o Google
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
            className="relative flex flex-col items-center justify-center pt-6 lg:pt-0"
          >
            <div className="relative w-full max-w-[850px] scale-150 mx-auto flex items-center justify-center">
              <div className="relative w-full z-10 filter drop-shadow-[0_25px_35px_rgba(28,23,16,0.25)]">
                <Image
                  src="/notebook.png"
                  alt="Atlas OS no Notebook"
                  width={1400}
                  height={900}
                  priority
                  className="w-full h-auto object-contain select-none hover:translate-x-16 transition-transform duration-500"
                  draggable={false}
                />
              </div>

              <div className="absolute -left-6 sm:-left-12 w-[32%] sm:w-[28%] z-20 filter drop-shadow-[0_20px_30px_rgba(28,23,16,0.35)]">
                <Image
                  src="/phone.png"
                  alt="Atlas OS no Celular"
                  width={500}
                  height={1000}
                  priority
                  className="w-full h-auto object-contain select-none transform hover:-translate-x-6 transition-transform duration-500"
                  draggable={false}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE }}
          className="relative z-10 max-w-[1500px] mx-auto mt-28 pt-12"
          style={{ borderTop: "1px solid rgba(92,0,0,0.14)" }}
        >
          <h3
            className="text-center mb-8 text-[10px] uppercase font-mono"
            style={{ letterSpacing: "0.3em", color: "rgba(28,23,16,0.45)" }}
          >
            Selo de confiança de
          </h3>
          <div className="w-full flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
            <span className="opacity-70 hover:opacity-100 transition-opacity duration-500">
              <Image src="/eletra.png" alt="Eletra" width={128} height={128} className="w-28 sm:w-32 h-auto" />
            </span>
          </div>
        </motion.div>
      </section>

      <section className="relative py-32 sm:py-40 px-6 sm:px-14" style={{ borderTop: "1px solid rgba(92,0,0,0.12)", background: "#F6F1EA" }}>
        <BlueprintGrid opacity={0.03} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative z-10 max-w-[1000px] mx-auto text-center"
        >
          <SectionRule />
          <span
            className="block mb-6 text-[10px] uppercase"
            style={{ fontFamily: FONT_EYEBROW, letterSpacing: "0.3em", color: WINE }}
          >
            Padrão Arquitetural
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-[3.8rem] leading-[0.9]"
            style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: INK }}
          >
            Uma nova era de{" "}
            <span style={{ color: WINE, fontFamily: FONT_BLACK, fontStyle: "italic" }}>infraestrutura empresarial.</span>
          </h2>
          <p className="mt-8 text-lg sm:text-xl leading-relaxed font-light" style={{ color: "rgba(28,23,16,0.7)" }}>
            Forjada para organizações que recusam operar em trevas fragmentadas, onde cada sistema é uma vela isolada. O Atlas acende uma única chama: governança, flexibilidade e precisão, erguidas desde a fundação.
          </p>
        </motion.div>
      </section>

      <section className="relative py-28 sm:py-36 px-6 sm:px-14" style={{ borderTop: "1px solid rgba(92,0,0,0.12)" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-7">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
                <h2
                  className="mt-7 text-4xl sm:text-5xl lg:text-[3.8rem] leading-[1.08]"
                  style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}
                >
                  Construindo o futuro do{" "}
                  <span style={{ color: WINE, fontStyle: "italic" }}>software corporativo.</span>
                </h2>
                <p className="mt-6 text-base sm:text-lg leading-relaxed max-w-xl font-light" style={{ color: "rgba(28,23,16,0.65)" }}>
                  Infraestrutura digital rigorosa para empresas que buscam estabilidade, segurança e crescimento estruturado a longo prazo.
                </p>
              </motion.div>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="grid grid-cols-2 gap-px w-full rounded-[6px] overflow-hidden"
                style={{ background: "rgba(92,0,0,0.18)" }}
              >
                {companyStats.map((stat) => (
                  <div key={stat.label} className="p-6 sm:p-7" style={{ background: "#fff" }}>
                    <div
                      className="text-[10px] uppercase mb-2 font-mono"
                      style={{ letterSpacing: "0.2em", color: "rgba(28,23,16,0.45)" }}
                    >
                      {stat.label}
                    </div>
                    <div className="text-xl font-medium tracking-tight" style={{ color: INK, fontFamily: FONT_DISPLAY }}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
          >
            {pillars.map((pillar) => {
              const isActive = pillar.id === activePillar;
              const Icon = pillar.icon;
              return (
                <motion.button
                  variants={fadeUp}
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className="relative text-left p-7 sm:p-8 rounded-[8px] transition-all duration-300"
                  style={{
                    border: `1px solid ${isActive ? WINE : "rgba(92,0,0,0.18)"}`,
                    background: isActive ? "rgba(92,0,0,0.04)" : "#fff",
                  }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <span
                      style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", color: isActive ? WINE : "rgba(28,23,16,0.3)" }}
                      className="text-3xl"
                    >
                      {pillar.numeral}
                    </span>
                    <Icon className="w-4 h-4" style={{ color: isActive ? WINE : "rgba(28,23,16,0.25)" }} />
                  </div>
                  <span
                    className="block text-base font-medium tracking-tight"
                    style={{ color: isActive ? INK : "rgba(28,23,16,0.5)" }}
                  >
                    {pillar.tag}
                  </span>
                  <span
                    className="absolute top-0 left-0 h-[3px] transition-all duration-300"
                    style={{ width: isActive ? "100%" : "0%", background: WINE }}
                  />
                </motion.button>
              );
            })}
          </motion.div>

          <div className="relative rounded-[10px] p-8 sm:p-14 lg:p-18 overflow-hidden" style={{ border: "1px solid rgba(92,0,0,0.2)", background: "#fff" }}>
            <CornerMarks inset={8} />
            <div className="absolute inset-x-0 top-0 h-px" style={{ background: "rgba(92,0,0,0.25)" }} />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPillar.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                <div className="lg:col-span-7">
                  <span
                    className="text-[10px] uppercase font-mono"
                    style={{ letterSpacing: "0.3em", color: "rgba(28,23,16,0.45)" }}
                  >
                    Pilar Operacional · Placa {currentPillar.numeral}
                  </span>
                  <h3
                    className="mt-4 text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.12]"
                    style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}
                  >
                    {currentPillar.title}
                  </h3>
                  <h4 className="mt-4 text-xl italic font-light" style={{ fontFamily: FONT_DISPLAY, color: WINE }}>
                    {currentPillar.subtitle}
                  </h4>
                  <p className="mt-6 text-base sm:text-lg leading-relaxed max-w-2xl font-light" style={{ color: "rgba(28,23,16,0.7)" }}>
                    {currentPillar.description}
                  </p>
                  <a
                    href="/company"
                    className="group mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-medium uppercase tracking-[0.15em] transition-all duration-200 hover:scale-[0.98]"
                    style={{ background: WINE, color: PARCHMENT, fontFamily: FONT_MONO }}
                  >
                    Conhecer a Engenharia
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
                <div className="lg:col-span-5">
                  <div className="rounded-[8px] p-7 sm:p-9" style={{ border: "1px solid rgba(92,0,0,0.18)", background: PARCHMENT }}>
                    <div className="flex items-center justify-between mb-8">
                      <span
                        className="text-[10px] uppercase font-mono"
                        style={{ letterSpacing: "0.25em", color: "rgba(28,23,16,0.45)" }}
                      >
                        Telemetria do Pilar
                      </span>
                      <PillarIcon className="w-5 h-5" style={{ color: WINE, opacity: 0.6 }} />
                    </div>
                    <div className="flex flex-col gap-6">
                      {currentPillar.metrics.map((m, i) => (
                        <div
                          key={m.label}
                          className="flex flex-col gap-1 pb-5"
                          style={{ borderBottom: i < currentPillar.metrics.length - 1 ? "1px solid rgba(92,0,0,0.08)" : "none" }}
                        >
                          <span
                            className="text-[10px] uppercase font-mono"
                            style={{ letterSpacing: "0.2em", color: "rgba(28,23,16,0.4)" }}
                          >
                            {m.label}
                          </span>
                          <span className="text-xl font-medium tracking-tight" style={{ color: INK, fontFamily: FONT_DISPLAY }}>
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="relative py-32 sm:py-40 px-6 sm:px-14" style={{ borderTop: "1px solid rgba(92,0,0,0.12)", background: "#F3EDE3" }}>
        <BlueprintGrid opacity={0.05} />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-3xl mb-16">
            <motion.h2
              variants={fadeUp}
              className="mt-7 text-5xl sm:text-6xl lg:text-[4.2rem] leading-[1.05]"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}
            >
              Atlas OS.
              <br />
              <span style={{ color: WINE, fontStyle: "italic" }}>Uma plataforma. Toda a operação.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl font-light" style={{ color: "rgba(28,23,16,0.7)" }}>
              O Atlas não é um aplicativo. É a infraestrutura central desenhada para servir como o sistema operacional de organizações que pensam no longo prazo.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid lg:grid-cols-12 gap-6 mb-20">
            <motion.div
              variants={fadeUp}
              className="relative lg:col-span-8 p-8 sm:p-14 rounded-[10px] flex flex-col justify-between overflow-hidden"
              style={{ border: "1px solid rgba(92,0,0,0.2)", background: "#fff" }}
            >
              <CornerMarks inset={8} />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase font-mono tracking-[0.25em]" style={{ color: "rgba(28,23,16,0.45)" }}>
                    Arquitetura Central
                  </span>
                  <span
                    className="text-[10px] uppercase px-3.5 py-1 rounded-full font-mono"
                    style={{ letterSpacing: "0.2em", color: WINE, border: "1px solid rgba(92,0,0,0.25)" }}
                  >
                    Placa III.A
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl mb-6" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}>
                  Fundação Unificada de Dados e Decisão
                </h3>
                <p className="text-base sm:text-lg leading-relaxed max-w-xl mb-12 font-light" style={{ color: "rgba(28,23,16,0.7)" }}>
                  A maioria dos softwares força as empresas a se adaptarem a fluxos engessados. O Atlas faz o inverso: fornece um ambiente configurável e imutável onde a inteligência corporativa é preservada de ponta a ponta.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-12 gap-y-6 pt-8" style={{ borderTop: "1px solid rgba(92,0,0,0.1)" }}>
                {atlasLegend.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-[7px] w-2 h-2 rounded-full shrink-0" style={{ border: `1px solid ${WINE}`, background: "rgba(92,0,0,0.15)" }} />
                    <div>
                      <span className="block mb-1 text-[10px] uppercase font-mono tracking-[0.15em]" style={{ color: "rgba(28,23,16,0.4)" }}>
                        {item.label}
                      </span>
                      <span className="block text-sm font-medium" style={{ color: INK }}>
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              <motion.div variants={fadeUp} className="relative p-8 rounded-[10px]" style={{ border: "1px solid rgba(92,0,0,0.2)", background: "#fff" }}>
                <div className="flex items-center justify-between mb-5">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full" style={{ background: "rgba(92,0,0,0.06)" }}>
                    <Castle className="w-5 h-5" style={{ color: WINE }} />
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-[0.2em]" style={{ color: "rgba(28,23,16,0.4)" }}>
                    Placa III.B
                  </span>
                </div>
                <h4 className="text-xl font-medium mb-2 tracking-tight" style={{ color: INK, fontFamily: FONT_DISPLAY }}>
                  Sem Dependências Frágeis
                </h4>
                <p className="text-sm leading-relaxed font-light" style={{ color: "rgba(28,23,16,0.65)" }}>
                  Construído do zero, sem depender de integrações instáveis de terceiros que quebram com o tempo ou comprometem a estabilidade do sistema.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="relative p-8 rounded-[10px]" style={{ border: "1px solid rgba(92,0,0,0.2)", background: "#fff" }}>
                <div className="flex items-center justify-between mb-5">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full" style={{ background: "rgba(92,0,0,0.06)" }}>
                    <KeyRound className="w-5 h-5" style={{ color: WINE }} />
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-[0.2em]" style={{ color: "rgba(28,23,16,0.4)" }}>
                    Placa III.C
                  </span>
                </div>
                <h4 className="text-xl font-medium mb-2 tracking-tight" style={{ color: INK, fontFamily: FONT_DISPLAY }}>
                  Soberania Institucional
                </h4>
                <p className="text-sm leading-relaxed font-light" style={{ color: "rgba(28,23,16,0.65)" }}>
                  Seus dados nunca residem em silos opacos de nuvens públicas descontroladas. Sua empresa mantém o controle absoluto e imutável de sua inteligência.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="flex flex-col items-center gap-10 pt-12" style={{ borderTop: "1px solid rgba(92,0,0,0.12)" }}>
            <div className="flex items-center gap-3" style={{ color: "rgba(28,23,16,0.45)" }}>
              <Compass className="w-4 h-4" style={{ color: WINE }} strokeWidth={1.5} />
              <div className="flex items-end gap-[2px]">
                {Array.from({ length: 17 }).map((_, i) => (
                  <span key={i} className="w-px" style={{ height: i % 4 === 0 ? 8 : 4, background: "rgba(92,0,0,0.3)" }} />
                ))}
              </div>
              <span className="text-[10px] uppercase font-mono tracking-[0.2em]">
                Escala 1:1 — ambiente real de produção
              </span>
            </div>
            <Link
              href="/atlas"
              className="group inline-flex items-center gap-3 px-9 py-4 rounded-full text-xs font-medium uppercase tracking-[0.15em] transition-all"
              style={{ background: WINE, color: PARCHMENT, fontFamily: FONT_MONO }}
            >
              <span>Especificações do Atlas OS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative py-32 sm:py-40 px-6 sm:px-14" style={{ borderTop: "1px solid rgba(92,0,0,0.12)" }}>
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-3xl mb-16">
            <motion.h2
              variants={fadeUp}
              className="mt-7 text-5xl sm:text-6xl lg:text-[4.2rem] leading-[1.05]"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}
            >
              A Filosofia da{" "}
              <span style={{ fontFamily: FONT_BLACK, color: WINE, fontWeight: 400 }}>Permanência.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg sm:text-xl leading-relaxed font-light" style={{ color: "rgba(28,23,16,0.7)" }}>
              A Fifteen Miles não foi criada para lançar um produto de passagem. Foi criada para edificar um legado na engenharia de software corporativo.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {philosophyPrinciples.map((item) => (
              <motion.div
                variants={fadeUp}
                key={item.numeral}
                className="relative p-8 rounded-[8px] flex flex-col justify-between"
                style={{ border: "1px solid rgba(92,0,0,0.18)", background: "#fff" }}
              >
                <div>
                  <span className="block mb-6 text-4xl italic" style={{ fontFamily: FONT_DISPLAY, color: WINE, opacity: 0.6 }}>
                    {item.numeral}
                  </span>
                  <h3 className="mb-3 text-xl font-medium tracking-tight" style={{ color: INK, fontFamily: FONT_DISPLAY }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-light" style={{ color: "rgba(28,23,16,0.65)" }}>
                    {item.desc}
                  </p>
                </div>
                <div
                  className="mt-8 pt-4 flex items-center justify-between text-[10px] uppercase font-mono"
                  style={{ borderTop: "1px solid rgba(92,0,0,0.1)", letterSpacing: "0.15em", color: "rgba(28,23,16,0.4)" }}
                >
                  <span>Princípio</span>
                  <span>Placa IV.{item.numeral}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative p-10 sm:p-16 rounded-[10px]"
            style={{ border: "1px solid rgba(92,0,0,0.2)", background: "#fff" }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 mb-4 text-[11px] uppercase font-mono" style={{ letterSpacing: "0.2em", color: WINE }}>
                  <ScrollText className="w-3.5 h-3.5" />
                  <span>A Engenharia</span>
                </div>
                <h3 className="text-3xl sm:text-4xl mb-4" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}>
                  Filosofia de Engenharia Monumental
                </h3>
                <p className="text-lg leading-relaxed mb-8 font-light" style={{ color: "rgba(28,23,16,0.7)" }}>
                  Arquitetura em primeiro lugar. Tudo o resto é consequência.
                </p>
                <Link
                  href="/engineering"
                  className="group inline-flex items-center gap-3 px-9 py-4 rounded-full text-xs font-medium tracking-[0.15em] uppercase transition-all"
                  style={{ background: WINE, color: PARCHMENT, fontFamily: FONT_MONO }}
                >
                  <span>Ver Manifesto de Engenharia</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="w-full lg:w-[26rem] shrink-0 rounded-[8px] overflow-hidden" style={{ border: "1px solid rgba(92,0,0,0.2)" }}>
                <div className="flex items-center gap-1.5 px-4 py-3.5" style={{ borderBottom: "1px solid rgba(92,0,0,0.15)", background: "rgba(92,0,0,0.04)" }}>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(92,0,0,0.3)" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(92,0,0,0.3)" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(92,0,0,0.3)" }} />
                  <span className="ml-3 text-[10px] uppercase font-mono tracking-[0.2em]" style={{ color: "rgba(28,23,16,0.45)" }}>
                    fifteenmiles.eng
                  </span>
                </div>
                <div className="p-6 text-xs leading-relaxed space-y-2 font-mono" style={{ background: PARCHMENT }}>
                  {commands.map((cmd) => (
                    <p key={cmd} style={{ color: "rgba(28,23,16,0.75)" }}>
                      <span style={{ color: WINE }}>$</span> {cmd}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-32 sm:py-40 px-6 sm:px-14" style={{ borderTop: "1px solid rgba(92,0,0,0.12)", background: "#F6F1EA" }}>
        <BlueprintGrid opacity={0.04} />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
              <motion.h2
                variants={fadeUp}
                className="mt-7 text-5xl sm:text-6xl lg:text-[4.2rem] leading-[1.05]"
                style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}
              >
                Um horizonte de <br />
                <span style={{ color: WINE, fontStyle: "italic" }}>três décadas.</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-7 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto italic font-light"
                style={{ fontFamily: FONT_DISPLAY, color: "rgba(28,23,16,0.7)" }}
              >
                &quot;Não fomos fundados para o próximo trimestre, nem para uma rodada efêmera. Fomos criados para erguer a infraestrutura digital dos próximos trinta anos.&quot;
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="relative mt-20 grid sm:grid-cols-3 gap-6 text-left">
              <div className="hidden sm:block absolute top-[52px] left-[16.5%] right-[16.5%] h-px" style={{ background: "rgba(92,0,0,0.25)" }} />
              {horizons.map((item, idx) => (
                <motion.div
                  variants={fadeUp}
                  key={item.year}
                  className="relative p-8 rounded-[8px] flex flex-col justify-between"
                  style={{ border: "1px solid rgba(92,0,0,0.18)", background: "#fff" }}
                >
                  <div>
                    <span className="block mb-4 text-[10px] uppercase font-mono tracking-[0.22em]" style={{ color: WINE }}>
                      {item.year}
                    </span>
                    <h3 className="mb-3 text-xl font-medium tracking-tight" style={{ color: INK, fontFamily: FONT_DISPLAY }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed font-light" style={{ color: "rgba(28,23,16,0.65)" }}>
                      {item.desc}
                    </p>
                  </div>
                  <div
                    className="mt-8 pt-4 flex items-center justify-between text-[10px] uppercase font-mono"
                    style={{ borderTop: "1px solid rgba(92,0,0,0.1)", letterSpacing: "0.15em", color: "rgba(28,23,16,0.4)" }}
                  >
                    <span>Fase 0{idx + 1}</span>
                    <span>Placa VI.{idx + 1}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative p-12 sm:p-24 rounded-[12px] text-center overflow-hidden"
            style={{ border: "1px solid rgba(92,0,0,0.25)", background: "#fff", boxShadow: "0 30px 60px -15px rgba(28,23,16,0.1)" }}
          >
            <CornerMarks inset={10} />
            <div className="relative z-10 flex flex-col items-center">
              <Seal size={84} />
              <div
                className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase font-mono"
                style={{ letterSpacing: "0.28em", color: WINE }}
              >
                <Landmark className="w-3.5 h-3.5" />
                <span>O Convite Institucional</span>
              </div>
              <h3
                className="mt-6 text-4xl sm:text-6xl leading-[1.1] max-w-3xl"
                style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}
              >
                Construa sua operação sobre fundações permanentes.
              </h3>
              <p className="mt-6 text-lg sm:text-xl max-w-xl leading-relaxed font-light" style={{ color: "rgba(28,23,16,0.68)" }}>
                Se sua empresa busca estabilidade operacional e visão de longo prazo, convidamos você a dialogar diretamente com nosso time de arquitetura e engenharia.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="group flex items-center font-[Raleway] justify-center gap-2 px-6 py-3 rounded-md text-sm transition-all duration-200 cursor-pointer"
                  style={{ background: WINE, color: PARCHMENT }}
                >
                  <span>Iniciar Diálogo Institucional</span>
                </Link>
                <Link
                  href="/atlas"
                  className="group flex items-center font-[Raleway] justify-center gap-2 px-6 py-3 rounded-md text-sm transition-all duration-200 cursor-pointer border border-[rgba(92,0,0,0.35)] transition-all duration-200 cursor-pointer hover:border-[rgba(38,0,0,0.6)]"
                  style={{ border: "1px solid rgba(92,0,0,0.35)", color: WINE }}
                >
                  <span>Explorar Atlas OS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
              <div
                className="mt-16 text-[10px] uppercase font-mono"
                style={{ letterSpacing: "0.25em", color: "rgba(28,23,16,0.4)" }}
              >
                Fifteen Miles Technologies · Projetado para durar décadas · MMXXVI
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}