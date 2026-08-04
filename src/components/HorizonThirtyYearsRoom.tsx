import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Compass, ArrowRight, Mail } from "lucide-react";

/** Four registration crop-marks — the same print-room detail used throughout the exhibit. */
const PlateMarks = () => (
  <>
    <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-[#8C7355]/50" />
    <span className="absolute -top-px -right-px w-3 h-3 border-t border-r border-[#8C7355]/50" />
    <span className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-[#8C7355]/50" />
    <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-[#8C7355]/50" />
  </>
);

const horizons = [
  {
    year: "Horizonte 2030",
    title: "Consolidação de Infraestrutura",
    desc: "Adoção do Atlas OS pelas principais instituições que priorizam soberania de dados.",
  },
  {
    year: "Horizonte 2040",
    title: "Resiliência Operacional",
    desc: "Sistemas em execução imutável contínua mantendo histórico institucional de 20 anos.",
  },
  {
    year: "Horizonte 2050",
    title: "Padrão de Legado",
    desc: "Plataformas operacionais que continuam legíveis, seguras e funcionais por gerações.",
  },
];

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

export const HorizonThirtyYearsRoom = () => {
  return (
    <section className="relative py-36 bg-[#FAF8F5] text-[#0F0E0C] border-t border-[#8C7355]/20 overflow-hidden">
      {/* Ambient horizon glow — a sunrise, not a spotlight */}
      <div className="pointer-events-none absolute left-1/2 top-28 -translate-x-1/2 w-[640px] h-[280px] bg-gradient-to-t from-[#C5A059]/10 to-transparent blur-[110px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">

        {/* Chapter VII: Our Vision */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/30 bg-[#F5F2EB] text-[11px] font-sans tracking-[0.2em] uppercase text-[#706C64] mb-6"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Capítulo VII · Nossa Visão</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-[Raleway] text-5xl sm:text-7xl lg:text-8xl text-[#0F0E0C] leading-tight font-normal mb-8"
            >
              Um horizonte de três décadas.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-xl sm:text-2xl text-[#706C64] font-serif font-light leading-relaxed max-w-3xl mx-auto italic"
            >
              "Não fomos fundados para o próximo trimestre, nem para uma rodada efêmera.
              Fomos criados para erguer a infraestrutura digital dos próximos 30 anos."
            </motion.p>
          </motion.div>

          {/* Horizon line — the timeline axis the three decades sit on */}
          <div className="hidden lg:block relative h-px mt-20 mb-[-1px] mx-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8C7355]/40 to-transparent" />
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#8C7355] bg-[#FAF8F5]"
                style={{ left: `${(i + 0.5) * (100 / 3)}%` }}
              />
            ))}
          </div>

          {/* Timeline Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mt-16 lg:mt-20 grid sm:grid-cols-3 gap-8 font-sans text-xs text-left"
          >
            {horizons.map((item, idx) => (
              <motion.div
                variants={fadeUp}
                key={item.year}
                className="relative p-8 border border-[#8C7355]/20 bg-[#F5F2EB] engraved-border-light flex flex-col justify-between"
              >
                <PlateMarks />
                <div>
                  <span className="text-[#8C7355] font-serif text-sm block mb-2 font-medium">
                    {item.year}
                  </span>
                  <h3 className="text-[#0F0E0C] font-serif text-xl font-normal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#706C64] font-light leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#8C7355]/15 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#706C64]">
                  <span>Fase Estrutural 0{idx + 1}</span>
                  <span>Placa VII.{idx + 1}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Chapter VIII: Architectural Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative p-12 sm:p-20 border border-[#8C7355]/30 bg-[#F5F2EB] engraved-border-light text-center overflow-hidden"
        >
          <PlateMarks />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#8C7355] to-transparent" />

          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#706C64]">
              Capítulo VIII · O Convite Institucional
            </span>
          </div>

          <h3 className="font-[Fraunces] text-4xl sm:text-6xl text-[#0F0E0C] font-normal leading-tight max-w-3xl mx-auto mb-6">
            Construa sua operação sobre fundações permanentes.
          </h3>

          <p className="text-base sm:text-lg text-[#706C64] font-sans font-light max-w-xl mx-auto mb-12 leading-relaxed">
            Se sua empresa busca estabilidade operacional e visão de longo prazo,
            convidamos você a dialogar diretamente com nosso time de arquitetura e
            engenharia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-[#0F0E0C] text-[#FAF8F5] font-sans font-medium text-xs tracking-[0.15em] uppercase hover:bg-[#1F1C18] transition-all shadow-[0_10px_30px_rgba(15,14,12,0.15)] group"
            >
              <span>Iniciar Diálogo Institucional</span>
            </Link>

            <Link
              to="/atlas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-[#8C7355]/40 bg-[#FAF8F5] text-[#0F0E0C] font-sans font-normal text-xs tracking-[0.15em] uppercase hover:border-[#8C7355] hover:bg-[#F0EDE6] transition-all group"
            >
              <span>Explorar Atlas OS</span>
              <ArrowRight className="w-4 h-4 text-[#8C7355] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-16 text-[10px] font-sans tracking-[0.2em] uppercase text-[#706C64]">
            Fifteen Miles Technologies · Foundation of Digital Infrastructure
          </div>
        </motion.div>

      </div>
    </section>
  );
};