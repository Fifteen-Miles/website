'use client';

import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Layers, ArrowRight, Server, Lock, Compass } from "lucide-react";

const legend = [
  { symbol: "circle", label: "Governança Operacional", val: "Arquitetura Imutável" },
  { symbol: "square", label: "Modelo de Conhecimento", val: "Memória Institucional" },
  { symbol: "line", label: "Controle de Acesso", val: "Granularidade Estrita" },
] as const;

const LegendSymbol = ({ kind }: { kind: (typeof legend)[number]["symbol"] }) => {
  if (kind === "circle") return <span className="w-2 h-2 rounded-full border border-white/60 bg-white/20" />;
  if (kind === "square") return <span className="w-2 h-2 border border-white/60 bg-white/20" />;
  return <span className="w-3 h-px border-t border-dashed border-white/40" />;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

function useDisplayFonts() {
  useEffect(() => {
    if (document.getElementById("fm-type-system")) return;
    const link = document.createElement("link");
    link.id = "fm-type-system";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
}

export const AtlasInfrastructureRoom = () => {
  useDisplayFonts();

  return (
    <section className="relative py-36 sm:py-48 bg-[#030303] text-white border-t border-white/[0.08] overflow-hidden font-[Inter] selection:bg-white/20">
      {/* Background Grid sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">

        {/* Header da Seção */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-4xl mb-24"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-[#050505] text-[10px] font-[JetBrains_Mono] tracking-[0.25em] uppercase text-white/70 mb-8 shadow-sm"
          >
            <Layers className="w-3.5 h-3.5 text-white/60" />
            <span>Capítulo IV · A Infraestrutura</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-5xl sm:text-7xl lg:text-[5.5rem] tracking-[-0.04em] font-medium leading-[1.05] text-white mb-8"
          >
            Atlas OS. <br />
            <span className="font-[Fraunces] italic font-light text-white/45">Uma plataforma. Toda a operação.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl text-white/50 font-light tracking-tight leading-relaxed max-w-2xl"
          >
            O Atlas não é um aplicativo. É a infraestrutura central projetada para servir
            como o Sistema Operacional Empresarial de organizações que pensam no longo prazo.
          </motion.p>
        </motion.div>

        {/* Grid de Arquitetura */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="relative grid lg:grid-cols-12 gap-8 mb-24"
        >
          {/* Card Principal / Arquitetura Central */}
          <motion.div
            variants={fadeUp}
            className="relative lg:col-span-8 p-8 sm:p-14 border border-white/[0.08] bg-[#050505] rounded-[32px] flex flex-col justify-between shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/40">
                  Arquitetura Central
                </span>
                <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/30 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">
                  Placa 04.A
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl text-white font-medium tracking-tight mb-6">
                Fundação Unificada de Dados e Decisão
              </h3>
              <p className="text-white/50 font-[Inter] text-base sm:text-lg font-light leading-relaxed max-w-xl mb-12">
                A maioria dos softwares força as empresas a se adaptarem a fluxos engessados. O Atlas faz
                o inverso: fornece um ambiente configurável e imutável onde a inteligência
                corporativa é preservada de ponta a ponta.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-x-10 gap-y-5 pt-8 border-t border-white/[0.06]">
              {legend.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="mt-[7px] flex-shrink-0">
                    <LegendSymbol kind={item.symbol} />
                  </span>
                  <div>
                    <span className="font-[JetBrains_Mono] text-white/40 text-[10px] uppercase tracking-wider block mb-1">
                      {item.label}
                    </span>
                    <span className="text-white font-medium text-sm block">{item.val}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cards Laterais */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div
              variants={fadeUp}
              className="relative p-8 border border-white/[0.08] bg-[#050505] rounded-[28px] shadow-xl hover:border-white/20 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center text-white">
                  <Server className="w-5 h-5" />
                </div>
                <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/30">
                  Placa 04.B
                </span>
              </div>
              <h4 className="text-xl font-medium text-white mb-2 tracking-tight">
                Sem Dependências Frágeis
              </h4>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                Construído do zero sem depender de integrações instáveis de terceiros que
                quebram com o tempo ou comprometem a estabilidade do sistema.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative p-8 border border-white/[0.08] bg-[#050505] rounded-[28px] shadow-xl hover:border-white/20 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center text-white">
                  <Lock className="w-5 h-5" />
                </div>
                <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/30">
                  Placa 04.C
                </span>
              </div>
              <h4 className="text-xl font-medium text-white mb-2 tracking-tight">
                Soberania Institucional
              </h4>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                Seus dados nunca residem em silos opacos de nuvens públicas descontroladas. Sua empresa mantém o controle absoluto e imutável de sua inteligência.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Rodapé da Seção com Régua de Precisão e CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col items-center gap-10 pt-12 border-t border-white/[0.06]"
        >
          <div className="flex items-center gap-3 text-white/40">
            <Compass className="w-4 h-4 text-white/60" strokeWidth={1.5} />
            <div className="flex items-end gap-[2px]">
              {Array.from({ length: 17 }).map((_, i) => (
                <span
                  key={i}
                  className="w-px bg-white/20"
                  style={{ height: i % 4 === 0 ? 8 : 4 }}
                />
              ))}
            </div>
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/40">
              Escala 1:1 — ambiente real de produção
            </span>
          </div>

          <Link
            href="/atlas"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-regular text-xs font-[JetBrains_Mono] hover:bg-white/90 transition-all group shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            <span>Especificações do Atlas OS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};