"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Terminal, Network, Shield, ArrowRight, Cpu, Activity, LayoutGrid } from "lucide-react";
import Link from "next/link";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
            <p className="text-white/50 leading-relaxed mb-6 font-light tracking-tight">
              O Atlas OS é um sistema operacional de produtividade projetado com rigor monocromático e foco total na execução eficiente. Desenvolvido pela Fifteen Miles, ele substitui a desordem por uma cartografia de trabalho inteligente.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="p-5 rounded-[12px] border border-white/[0.05] bg-white/[0.02]">
                <Activity className="w-5 h-5 text-white/70 mb-3" />
                <h4 className="text-white text-sm font-medium mb-2">Telemetria em Tempo Real</h4>
                <p className="text-white/40 text-xs leading-relaxed">Métricas de impacto e otimização de horas trabalhadas computadas dinamicamente.</p>
              </div>
              <div className="p-5 rounded-[12px] border border-white/[0.05] bg-white/[0.02]">
                <Cpu className="w-5 h-5 text-white/70 mb-3" />
                <h4 className="text-white text-sm font-medium mb-2">Motor Neural</h4>
                <p className="text-white/40 text-xs leading-relaxed">Automações desenhadas para acelerar equipes para o resultado final sem atrito.</p>
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

function MonochromeAurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div
        className="absolute -top-[20%] left-1/3 h-[800px] w-[1000px] -translate-x-1/2 rounded-full opacity-30"
        style={{
          background: "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 80%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}

function Grid3D() {
  return (
    <div className="absolute inset-0 pointer-events-none [perspective:1000px] overflow-hidden opacity-40">
      <div className="absolute inset-x-0 bottom-0 h-[100vh] origin-bottom"
        style={{
          transform: "rotateX(75deg) translateY(100px) scale(2)",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to top, black 10%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to top, black 10%, transparent 80%)"
        }}
      />
    </div>
  );
}

function Sidebar({ active, onSelect }: { active: { section: string; item: string }; onSelect: (s: string, i: string) => void; }) {
  return (
    <aside className="hidden lg:block w-72 shrink-0 sticky top-28 self-start max-h-[calc(100vh-120px)] overflow-y-auto pr-6">
      <div className="flex items-center gap-2 mb-8 font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.3em] text-white/30">
        <Terminal className="w-3.5 h-3.5" />
        Atlas OS Docs
      </div>
      <nav className="flex flex-col gap-6">
        {DOCS.map((section) => (
          <div key={section.id}>
            <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 mb-3">
              <span className="text-white/40">{section.icon}</span>
              {section.title}
            </div>
            <ul className="flex flex-col">
              {section.items.map((item) => {
                const isActive = active.section === section.id && active.item === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => onSelect(section.id, item.id)}
                      className={`w-full text-left py-2 pl-4 pr-2 text-[13px] tracking-tight transition-all duration-200 border-l ${
                        isActive
                          ? "border-l-2 border-white text-white font-medium bg-white/[0.02]"
                          : "border-white/[0.05] text-white/40 hover:text-white/80 hover:bg-white/[0.01]"
                      }`}
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
        <div className="flex items-center gap-2 font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
          {section?.title}
          <span className="text-white/20">/</span>
          <span className="text-white/60">{item?.title}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-semibold tracking-[-0.04em] leading-[1.1] text-white">
          {item?.title ?? "Documento"}
        </h1>

        <p className="mt-5 text-base sm:text-lg text-white/50 max-w-[42rem] leading-relaxed font-light tracking-tight">
          {item?.summary}
        </p>

        {item?.updated && (
          <div className="mt-6 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm font-[JetBrains_Mono] text-[9px] uppercase tracking-[0.2em] text-white/40 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full animate-ping opacity-40 bg-white" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-white/70" />
            </span>
            Atualizado: {item.updated}
          </div>
        )}

        <div className="mt-12 relative rounded-[18px] border border-white/[0.05] bg-[#050505]/80 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
          
          <div className="p-8 sm:p-12">
            <div className="flex items-center gap-2 font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.3em] text-white/30 mb-8">
              <div className="w-3 h-[1px] bg-white/30" />
              Corpo do Documento
            </div>

            {item?.content ? (
              item.content
            ) : (
              <>
                <p className="text-white/50 leading-relaxed font-light tracking-tight">
                  A documentação técnica para este módulo está em fase de homologação.
                  Os parâmetros de infraestrutura e endpoints associados serão disponibilizados
                  na próxima atualização do sistema operacional.
                </p>

                <ul className="mt-8 flex flex-col gap-3">
                  {["Estrutura de dados", "Parâmetros de resposta", "Logs de execução"].map((topic) => (
                    <li key={topic} className="flex items-center gap-3 text-sm text-white/40 font-medium">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/10 bg-white/[0.02]">
                        <ChevronRight className="w-3 h-3 text-white/50" />
                      </div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-white/[0.04] pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 font-medium"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Voltar ao Terminal
          </Link>
          <Link
            href="https://atlas.fifteenmiles.tech/register"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-black bg-white px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-[0.98] hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
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
  const [active, setActive] = useState({ section: "atlas", item: "visao-geral" });

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden font-[Inter] text-white bg-[#030303]"
    >
      <MonochromeAurora />
      <Grid3D />
      <div className="pointer-events-none absolute inset-4 sm:inset-6 border border-white/[0.03] rounded-[32px] z-20" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-12 pt-24 sm:pt-28 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <Sidebar active={active} onSelect={(section, item) => setActive({ section, item })} />
          <Content active={active} />
        </div>
      </div>
    </section>
  );
}