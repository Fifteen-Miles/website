import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layers, ArrowRight, Server, Lock, Compass } from "lucide-react";

/** Four registration crop-marks in the corners of a plate — the print-room detail that ties every chamber of the exhibit together. */
const PlateMarks = () => (
  <>
    <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-[#8C7355]/50" />
    <span className="absolute -top-px -right-px w-3 h-3 border-t border-r border-[#8C7355]/50" />
    <span className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-[#8C7355]/50" />
    <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-[#8C7355]/50" />
  </>
);

const legend = [
  { symbol: "circle", label: "Governança Operacional", val: "Arquitetura Imutável" },
  { symbol: "square", label: "Modelo de Conhecimento", val: "Memória Institucional" },
  { symbol: "line", label: "Controle de Acesso", val: "Granularidade Estrita" },
] as const;

const LegendSymbol = ({ kind }: { kind: (typeof legend)[number]["symbol"] }) => {
  if (kind === "circle") return <span className="w-2 h-2 rounded-full border border-[#8C7355]" />;
  if (kind === "square") return <span className="w-2 h-2 border border-[#8C7355]" />;
  return <span className="w-3 h-px border-t border-dashed border-[#8C7355]" />;
};

const fadeUp = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export const AtlasInfrastructureRoom = () => {
  return (
    <section className="relative py-36 bg-[#FCFBF9] text-[#0F0E0C] border-t border-[#8C7355]/20 overflow-hidden">
      {/* Background Architectural Light Grid */}
      <div className="absolute inset-0 architectural-grid-light opacity-30 pointer-events-none" />

      {/* Slow-turning compass rose — the room's ambient instrument */}
      <motion.div
        aria-hidden
        className="hidden lg:block absolute -right-24 top-16 w-72 h-72 pointer-events-none opacity-[0.07]"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="48" fill="none" stroke="#0F0E0C" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="36" fill="none" stroke="#0F0E0C" strokeWidth="0.3" />
          {Array.from({ length: 36 }).map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="2"
              x2="50"
              y2={i % 9 === 0 ? "9" : "6"}
              stroke="#0F0E0C"
              strokeWidth={i % 9 === 0 ? 0.6 : 0.3}
              transform={`rotate(${i * 10} 50 50)`}
            />
          ))}
          <path d="M50 14 L56 50 L50 86 L44 50 Z" fill="#0F0E0C" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">

        {/* Header - Infrastructure Presentation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-4xl mb-24"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/30 bg-[#F5F2EB] text-[11px] font-sans tracking-[0.2em] uppercase text-[#8C7355] mb-6"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Capítulo IV · A Infraestrutura</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-[Fraunces] font-medium text-5xl sm:text-7xl lg:text-8xl text-[#0F0E0C] leading-tight font-normal"
          >
            Atlas OS. <br />
            <span className="text-[#706C64] font-light font-[Raleway] italic">Uma plataforma. Toda a operação.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-lg sm:text-xl text-[#706C64] font-sans font-light leading-relaxed max-w-2xl"
          >
            O Atlas não é um aplicativo. É a infraestrutura central projetada para servir
            como o Sistema Operacional Empresarial de organizações que pensam no longo prazo.
          </motion.p>
        </motion.div>

        {/* Spatial Architecture View — rendered as a system map, not a dashboard */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="relative grid lg:grid-cols-12 gap-8 mb-24"
        >
          {/* Route line between hub and pillars — visible only where the geometry actually lines up */}
          <div className="hidden lg:block absolute left-[calc(66.666%-1px)] top-24 bottom-24 w-px border-l border-dashed border-[#8C7355]/40" />

          {/* Main Core Infrastructure Block */}
          <motion.div
            variants={fadeUp}
            className="relative lg:col-span-8 p-10 sm:p-14 border border-[#8C7355]/30 bg-[#F5F2EB] engraved-border-light flex flex-col justify-between"
          >
            <PlateMarks />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#8C7355]">
                  Arquitetura Central
                </span>
                <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#8C7355]/60">
                  Placa 04.A
                </span>
              </div>
              <h3 className="font-serif text-4xl sm:text-5xl text-[#0F0E0C] font-normal mb-6">
                Fundação Unificada de Dados e Decisão
              </h3>
              <p className="text-[#706C64] font-sans text-base leading-relaxed max-w-xl font-light mb-12">
                A maioria dos softwares força as empresas a se adaptarem a ele. O Atlas faz
                o inverso: fornece um ambiente configurável e imutável onde a inteligência
                corporativa é preservada.
              </p>
            </div>

            {/* Legend — read like a map key, not a stat grid */}
            <div className="flex flex-wrap gap-x-10 gap-y-5 pt-8 border-t border-[#8C7355]/20 font-sans">
              {legend.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="mt-[7px] flex-shrink-0">
                    <LegendSymbol kind={item.symbol} />
                  </span>
                  <div>
                    <span className="text-[#8C7355] text-[10px] uppercase tracking-wider block mb-1">
                      {item.label}
                    </span>
                    <span className="text-[#0F0E0C] font-medium text-sm block">{item.val}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pillars */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div
              variants={fadeUp}
              className="relative p-8 border border-[#8C7355]/20 bg-[#FAF8F5] engraved-border-light"
            >
              <PlateMarks />
              <div className="flex items-center justify-between mb-4">
                <Server className="w-6 h-6 text-[#8C7355]" />
                <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#8C7355]/60">
                  Placa 04.B
                </span>
              </div>
              <h4 className="font-serif text-2xl text-[#0F0E0C] mb-2 font-normal">
                Sem Dependências Frágeis
              </h4>
              <p className="text-xs text-[#706C64] leading-relaxed font-light">
                Construído do zero sem depender de integrações instáveis de terceiros que
                falham com o tempo.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative p-8 border border-[#8C7355]/20 bg-[#FAF8F5] engraved-border-light"
            >
              <PlateMarks />
              <div className="flex items-center justify-between mb-4">
                <Lock className="w-6 h-6 text-[#8C7355]" />
                <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#8C7355]/60">
                  Placa 04.C
                </span>
              </div>
              <h4 className="font-serif text-2xl text-[#0F0E0C] mb-2 font-normal">
                Soberania Institucional
              </h4>
              <p className="text-xs text-[#706C64] leading-relaxed font-light">
                Seus dados não residem em silos opacos. Sua empresa mantém o controle
                imutável de sua inteligência.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Scale bar — callback to Capítulo I: "não para demonstrações" */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col items-center gap-10"
        >
          <div className="flex items-center gap-3 text-[#8C7355]">
            <Compass className="w-3.5 h-3.5" strokeWidth={1.5} />
            <div className="flex items-end gap-[2px]">
              {Array.from({ length: 17 }).map((_, i) => (
                <span
                  key={i}
                  className="w-px bg-[#8C7355]/50"
                  style={{ height: i % 4 === 0 ? 8 : 4 }}
                />
              ))}
            </div>
            <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#8C7355]/80">
              Escala 1:1 — ambiente real de produção
            </span>
          </div>

          {/* Action Link */}
          <Link
            to="/atlas"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#8C7355]/40 bg-[#0F0E0C] text-[#FAF8F5] font-sans font-medium text-xs tracking-[0.15em] uppercase hover:bg-[#1F1C18] transition-all group shadow-[0_10px_30px_rgba(15,14,12,0.1)]"
          >
            <span>Especificações do Atlas OS</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};