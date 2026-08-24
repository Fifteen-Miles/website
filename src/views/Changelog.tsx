'use client';

import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { GitBranch, Sparkles, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import Seo from "@/components/Seo";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

function useDisplayFonts() {
  useEffect(() => {
    if (document.getElementById("fm-type-system")) return;
    const link = document.createElement("link");
    link.id = "fm-type-system";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
}

const changelogEntries = [
  {
    version: "v2.1.0",
    date: "15 de Agosto, 2026",
    title: "Atlas OS Core & Soberania de Dados",
    tag: "Estável",
    changes: [
      { type: "Novo", desc: "Camada de isolamento físico por instâncias segregadas para clientes enterprise." },
      { type: "Melhoria", desc: "Redução de 45% na latência de resposta do API Gateway principal." },
      { type: "Correção", desc: "Ajuste na sincronização assíncrona de logs de auditoria imutável." }
    ]
  },
  {
    version: "v2.0.4",
    date: "02 de Julho, 2026",
    title: "Atualizações de Interface e Conectividade",
    tag: "Patch",
    changes: [
      { type: "Novo", desc: "Implementação do menu megamenu com efeito parallax e stagger dinâmico." },
      { type: "Melhoria", desc: "Refinamento tipográfico global utilizando Fraunces e Inter de alta performance." },
      { type: "Melhoria", desc: "Otimização de rotas e carregamento inicial em dispositivos móveis." }
    ]
  },
  {
    version: "v2.0.0",
    date: "10 de Maio, 2026",
    title: "Lançamento Oficial — Atlas OS",
    tag: "Major",
    changes: [
      { type: "Novo", desc: "Estruturação inicial da plataforma unificada para operações corporativas." },
      { type: "Novo", desc: "Módulo integrado de governança e permissões granulares de usuários." },
      { type: "Novo", desc: "Documentação técnica de engenharia e padrões arquiteturais." }
    ]
  }
];

export default function ChangelogPage() {
  useDisplayFonts();

  return (
    <div className="relative min-h-screen bg-[#030303] text-white font-[Inter] selection:bg-white/20">
      <Seo title="Changelog — Fifteen Miles" description="Histórico de versões, atualizações de engenharia e melhorias do ecossistema Fifteen Miles." path="/changelog" />

      <section className="relative pt-44 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-[#050505] text-[10px] font-[JetBrains_Mono] tracking-[0.25em] uppercase text-white/70">
              <GitBranch className="w-3 h-3" /> Histórico de Versões
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-6xl sm:text-8xl font-medium tracking-[-0.04em] mb-10 leading-[0.9]">
            Changelog <br/>
            <span className="font-[Fraunces] italic font-light text-white/40">do Sistema.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/50 font-light max-w-xl">
            Acompanhe a evolução contínua da nossa infraestrutura, correções e novas capacidades implementadas.
          </motion.p>
        </motion.div>
      </section>

      <section className="pb-32 px-6 max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-16">
          {changelogEntries.map((entry, i) => (
            <motion.div key={i} variants={fadeUp} className="p-8 sm:p-12 rounded-[32px] bg-[#050505] border border-white/[0.08] shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.05]">
                  <div className="flex items-center gap-4">
                    <span className="font-[JetBrains_Mono] text-lg font-medium text-white">{entry.version}</span>
                    <span className="text-[10px] uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">{entry.tag}</span>
                  </div>
                  <span className="font-[JetBrains_Mono] text-xs text-white/40">{entry.date}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-8">{entry.title}</h2>

                <div className="space-y-4">
                  {entry.changes.map((change, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                      <span className={`font-[JetBrains_Mono] text-[9px] uppercase tracking-widest px-2.5 py-1 rounded mt-0.5 ${
                        change.type === 'Novo' ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' :
                        change.type === 'Melhoria' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                        'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                      }`}>
                        {change.type}
                      </span>
                      <p className="text-sm font-light text-white/70 leading-relaxed">{change.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-24 border-t border-white/[0.08] text-center px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-xl mx-auto">
          <h2 className="text-2xl font-medium mb-6">Precisa de especificações técnicas detalhadas?</h2>
          <p className="text-white/50 mb-10 text-base">Nossa equipe de engenharia mantém manuais completos para integração corporativa.</p>
          <Link href="/engineering" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all">
            Ver padrões de engenharia <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}