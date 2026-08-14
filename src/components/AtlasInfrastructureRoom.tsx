'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Layers, ArrowRight, Server, Lock, Compass } from "lucide-react";

const legend = [
  { symbol: "circle", label: "Governança Operacional", val: "Arquitetura Imutável" },
  { symbol: "square", label: "Modelo de Conhecimento", val: "Memória Institucional" },
  { symbol: "line", label: "Controle de Acesso", val: "Granularidade Estrita" },
] as const;

const LegendSymbol = ({ kind }: { kind: (typeof legend)[number]["symbol"] }) => {
  if (kind === "circle") return <span className="w-2 h-2 rounded-full border border-[#1D1D1F]" />;
  if (kind === "square") return <span className="w-2 h-2 border border-[#1D1D1F]" />;
  return <span className="w-3 h-px border-t border-dashed border-[#1D1D1F]" />;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

function useDisplayFonts() {
  useEffect(() => {
    if (document.getElementById("fm-type-system")) return;
    const link = document.createElement("link");
    link.id = "fm-type-system";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link );
  }, []);
}

export const AtlasInfrastructureRoom = () => {
  useDisplayFonts();

  return (
    <section className="relative py-32 sm:py-48 bg-white text-[#1D1D1F] border-t border-[#1D1D1F]/10 overflow-hidden font-[Inter] selection:bg-black/50">
      <div className="absolute inset-0 bg-[radial-gradient(#1D1D1F_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-4xl mb-24"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-[#1D1D1F]/10 text-[11px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-[#1D1D1F]/80 mb-8"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Capítulo IV · A Infraestrutura</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-[Inter] text-5xl sm:text-7xl lg:text-[5.5rem] tracking-[-0.03em] font-medium leading-[1.05] text-[#1D1D1F] mb-8"
          >
            Atlas OS.   

            <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">Uma plataforma. Toda a operação.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl text-[#86868B] font-light tracking-tight leading-relaxed max-w-2xl"
          >
            O Atlas não é um aplicativo. É a infraestrutura central projetada para servir
            como o Sistema Operacional Empresarial de organizações que pensam no longo prazo.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="relative grid lg:grid-cols-12 gap-8 mb-24"
        >
          <motion.div
            variants={fadeUp}
            className="relative lg:col-span-8 p-8 sm:p-14 border border-[#1D1D1F]/10 bg-[#F5F5F7] rounded-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B]">
                  Arquitetura Central
                </span>
                <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase text-[#86868B]">
                  Placa 04.A
                </span>
              </div>
              <h3 className="font-[Inter] text-3xl sm:text-4xl text-[#1D1D1F] font-medium tracking-tight mb-6">
                Fundação Unificada de Dados e Decisão
              </h3>
              <p className="text-[#86868B] font-[Inter] text-lg font-light leading-relaxed max-w-xl mb-12">
                A maioria dos softwares força as empresas a se adaptarem a ele. O Atlas faz
                o inverso: fornece um ambiente configurável e imutável onde a inteligência
                corporativa é preservada.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-5 pt-8 border-t border-[#1D1D1F]/10">
              {legend.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="mt-[7px] flex-shrink-0">
                    <LegendSymbol kind={item.symbol} />
                  </span>
                  <div>
                    <span className="font-[JetBrains_Mono] text-[#86868B] text-[10px] uppercase tracking-wider block mb-1">
                      {item.label}
                    </span>
                    <span className="text-[#1D1D1F] font-medium text-sm block">{item.val}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div
              variants={fadeUp}
              className="relative p-8 border border-[#1D1D1F]/10 bg-[#F5F5F7] rounded-md"
            >
              <div className="flex items-center justify-between mb-4">
                <Server className="w-6 h-6 text-[#1D1D1F]" />
                <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase text-[#86868B]">
                  Placa 04.B
                </span>
              </div>
              <h4 className="font-[Inter] text-xl font-medium text-[#1D1D1F] mb-2 tracking-tight">
                Sem Dependências Frágeis
              </h4>
              <p className="text-sm text-[#86868B] font-light leading-relaxed">
                Construído do zero sem depender de integrações instáveis de terceiros que
                falham com o tempo.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative p-8 border border-[#1D1D1F]/10 bg-[#F5F5F7] rounded-md"
            >
              <div className="flex items-center justify-between mb-4">
                <Lock className="w-6 h-6 text-[#1D1D1F]" />
                <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase text-[#86868B]">
                  Placa 04.C
                </span>
              </div>
              <h4 className="font-[Inter] text-xl font-medium text-[#1D1D1F] mb-2 tracking-tight">
                Soberania Institucional
              </h4>
              <p className="text-sm text-[#86868B] font-light leading-relaxed">
                Seus dados não residem em silos opacos. Sua empresa mantém o controle
                imutável de sua inteligência.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col items-center gap-10"
        >
          <div className="flex items-center gap-3 text-[#86868B]">
            <Compass className="w-4 h-4" strokeWidth={1.5} />
            <div className="flex items-end gap-[2px]">
              {Array.from({ length: 17 }).map((_, i) => (
                <span
                  key={i}
                  className="w-px bg-[#1D1D1F]/20"
                  style={{ height: i % 4 === 0 ? 8 : 4 }}
                />
              ))}
            </div>
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-[#86868B]">
              Escala 1:1 — ambiente real de produção
            </span>
          </div>

          <Link
            href="/atlas"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-md bg-[#1D1D1F] text-white font-medium text-xs tracking-[0.15em] uppercase hover:bg-black transition-all group shadow-lg"
          >
            <span>Especificações do Atlas OS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
