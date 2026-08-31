"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Terminal, Network, Shield, ArrowRight, Cpu, Activity, LayoutGrid } from "lucide-react";
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

type DocItem = { id: string; title: string; summary: string; updated?: string; content?: React.ReactNode };
type DocSection = { id: string; title: string; icon: React.ReactNode; items: DocItem[] };

const DOCS: DocSection[] = [
  {
    id: "atlas",
    title: "Atlas OS",
    icon: <Terminal className="w-4 h-4" />,
    items: [
      {
        id: "visao-geral",
        title: "Visão Geral",
        summary: "A infraestrutura definitiva desenvolvida pela Fifteen Miles para operações escaláveis.",
        updated: "17 ago 2026",
        content: (
          <>
            <p className="text-[#1C1710]/70 leading-relaxed mb-6 font-light tracking-tight">
              O Atlas OS é um sistema operacional de produtividade projetado com rigor absoluto e foco total na execução eficiente. Desenvolvido pela Fifteen Miles, ele substitui a desordem por uma cartografia de trabalho inteligente.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="p-5 rounded-[12px] border border-[rgba(92,0,0,0.15)] bg-white shadow-sm">
                <Activity className="w-5 h-5 text-[#5C0000] mb-3" />
                <h4 className="text-[#1C1710] text-sm font-medium mb-2" style={{ fontFamily: FONT_DISPLAY }}>Telemetria em Tempo Real</h4>
                <p className="text-[#1C1710]/60 text-xs leading-relaxed font-light">Métricas de impacto e otimização de horas trabalhadas computadas dinamicamente.</p>
              </div>
              <div className="p-5 rounded-[12px] border border-[rgba(92,0,0,0.15)] bg-white shadow-sm">
                <Cpu className="w-5 h-5 text-[#5C0000] mb-3" />
                <h4 className="text-[#1C1710] text-sm font-medium mb-2" style={{ fontFamily: FONT_DISPLAY }}>Motor Neural</h4>
                <p className="text-[#1C1710]/60 text-xs leading-relaxed font-light">Automações desenhadas para acelerar equipes para o resultado final sem atrito.</p>
              </div>
            </div>
          </>
        )
      },
      {
        id: "arquitetura",
        title: "Arquitetura",
        summary: "Princípios de design e estrutura de dados do sistema.",
        updated: "15 ago 2026"
      },
    ],
  },
  {
    id: "core",
    title: "Sistemas Core",
    icon: <LayoutGrid className="w-4 h-4" />,
    items: [
      { id: "cartografia", title: "Cartografia de Trabalho", summary: "Como o Atlas mapeia e gerencia dependências complexas." },
      { id: "automacao", title: "Automação", summary: "Pipelines de execução e gatilhos de inteligência." },
    ],
  },
  {
    id: "seguranca",
    title: "Governança",
    icon: <Shield className="w-4 h-4" />,
    items: [
      { id: "permissoes", title: "Controle de Acesso", summary: "Gestão de identidade, papéis e auditoria de infraestrutura." },
    ],
  },
  {
    id: "api",
    title: "Infraestrutura API",
    icon: <Network className="w-4 h-4" />,
    items: [
      { id: "endpoints", title: "Endpoints Rest", summary: "Documentação técnica para integração direta com a Fifteen Miles." },
    ],
  },
];

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

function Sidebar({ active, onSelect }: { active: { section: string; item: string }; onSelect: (s: string, i: string) => void; }) {
  return (
    <aside className="hidden lg:block w-72 shrink-0 sticky top-28 self-start max-h-[calc(100vh-120px)] overflow-y-auto pr-6">
      <div className="flex items-center gap-2 mb-8 font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.3em]" style={{ color: WINE }}>
        <Terminal className="w-3.5 h-3.5" />
        Atlas OS Códice
      </div>
      <nav className="flex flex-col gap-6">
        {DOCS.map((section) => (
          <div key={section.id}>
            <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] mb-3" style={{ color: "rgba(28,23,16,0.6)", fontFamily: FONT_EYEBROW }}>
              <span style={{ color: WINE }}>{section.icon}</span>
              {section.title}
            </div>
            <ul className="flex flex-col space-y-1">
              {section.items.map((item) => {
                const isActive = active.section === section.id && active.item === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => onSelect(section.id, item.id)}
                      className={`w-full text-left py-2.5 pl-4 pr-2 text-[13px] tracking-tight transition-all duration-200 border-l rounded-r-md cursor-pointer ${
                        isActive
                          ? "border-l-2 text-[#5C0000] font-medium bg-white shadow-sm"
                          : "border-[rgba(92,0,0,0.1)] text-[#1C1710]/70 hover:text-[#1C1710] hover:bg-white/50"
                      }`}
                      style={{
                        borderColor: isActive ? WINE : "rgba(92,0,0,0.12)",
                        fontFamily: "Inter, sans-serif"
                      }}
                    >
                      {item.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

function Content({ active }: { active: { section: string; item: string } }) {
  const section = DOCS.find((s) => s.id === active.section);
  const item = section?.items.find((i) => i.id === active.item);

  return (
    <div className="flex-1 min-w-0">
      <motion.div
        key={`${active.section}-${active.item}`}
        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div className="flex items-center gap-2 font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.25em] mb-5" style={{ color: WINE }}>
          {section?.title}
          <span style={{ color: "rgba(28,23,16,0.3)" }}>/</span>
          <span style={{ color: "rgba(28,23,16,0.7)" }}>{item?.title}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-semibold tracking-[-0.04em] leading-[1.1]" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
          {item?.title ?? "Documento"}
        </h1>

        <p className="mt-5 text-base sm:text-lg max-w-[42rem] leading-relaxed font-light tracking-tight" style={{ color: "rgba(28,23,16,0.7)" }}>
          {item?.summary}
        </p>

        {item?.updated && (
          <div className="mt-6 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[rgba(92,0,0,0.2)] bg-white font-[JetBrains_Mono] text-[9px] uppercase tracking-[0.2em] shadow-sm" style={{ color: WINE }}>
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full animate-ping opacity-40 bg-[#5C0000]" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#5C0000]" />
            </span>
            Atualizado: {item.updated}
          </div>
        )}

        <div className="mt-12 relative rounded-[20px] border border-[rgba(92,0,0,0.2)] bg-white shadow-xl overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5C0000]/30 to-transparent" />
          
          <div className="p-8 sm:p-12">
            <div className="flex items-center gap-2 font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.3em] mb-8" style={{ color: WINE }}>
              <div className="w-3 h-[1px] bg-[#5C0000]" />
              Manuscrito Oficial
            </div>

            {item?.content ? (
              item.content
            ) : (
              <>
                <p className="leading-relaxed font-light tracking-tight" style={{ color: "rgba(28,23,16,0.7)" }}>
                  A documentação técnica para este módulo está em fase de homologação.
                  Os parâmetros de infraestrutura e endpoints associados serão disponibilizados
                  na próxima atualização do sistema operacional.
                </p>

                <ul className="mt-8 flex flex-col gap-3">
                  {["Estrutura de dados", "Parâmetros de resposta", "Logs de execução"].map((topic) => (
                    <li key={topic} className="flex items-center gap-3 text-sm font-medium" style={{ color: "rgba(28,23,16,0.8)" }}>
                      <div className="flex items-center justify-center w-5 h-5 rounded-full border border-[rgba(92,0,0,0.2)] bg-[#FAF7F0]">
                        <ChevronRight className="w-3 h-3 text-[#5C0000]" />
                      </div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-[rgba(92,0,0,0.12)] pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-200 font-medium"
            style={{ color: WINE }}
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Voltar ao Início
          </Link>
          <Link
            href="https://atlas.fifteenmiles.tech/register"
            className="inline-flex items-center gap-2 font-[Raleway] text-sm font-semibold tracking-tight text-white px-6 py-3 rounded-md transition-all duration-200 hover:opacity-90 shadow-md"
            style={{ background: WINE }}
          >
            Inicializar Instância
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function DocsPage() {
  useMedievalFonts();
  const [active, setActive] = useState({ section: "atlas", item: "visao-geral" });

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ background: PARCHMENT, color: INK, fontFamily: FONT_HEADING }}
    >
      <Seo title="Documentação Códice — Fifteen Miles" description="Manuais institucionais, arquitetura e especificações do Atlas OS." path="/docs" />
      <BlueprintGrid opacity={0.04} />

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

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-12 pt-28 sm:pt-36 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <Sidebar active={active} onSelect={(section, item) => setActive({ section, item })} />
          <Content active={active} />
        </div>
      </div>
    </section>
  );
}