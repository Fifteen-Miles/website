import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Terminal, ArrowRight } from "lucide-react";

/** Four registration crop-marks — the same print-room detail used throughout the exhibit. */
const PlateMarks = () => (
  <>
    <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-[#8C7355]/50" />
    <span className="absolute -top-px -right-px w-3 h-3 border-t border-r border-[#8C7355]/50" />
    <span className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-[#8C7355]/50" />
    <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-[#8C7355]/50" />
  </>
);

const pillars = [
  {
    numeral: "I",
    title: "Pensamento de Longo Prazo",
    desc: "Rejeitamos a cultura de lançamentos apressados. Planejamos software para ciclos de vida de décadas.",
  },
  {
    numeral: "II",
    title: "Engenharia & Precisão",
    desc: "Cada contrato de API, modelo de dados e elemento de interface possui intenção clara e fundamentação formal.",
  },
  {
    numeral: "III",
    title: "Elegância & Calma",
    desc: "Interfaces limpas que transmitem tranquilidade operacional, eliminando ruído visual e modas efêmeras.",
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

export const ChamberOfPhilosophy = () => {
  return (
    <section className="relative py-36 bg-black text-[#FAF8F5] border-t border-[#8C7355]/30  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">

        {/* Chapter V: Why Fifteen Miles Exists */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-3xl mb-24"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/40 bg-[#1A1815] text-[11px] font-sans tracking-[0.2em] uppercase text-[#C5A059] mb-6"
          >
            <span>Capítulo V · Por Que Existimos</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-[Raleway] text-5xl sm:text-7xl text-[#FAF8F5] leading-tight font-normal"
          >
            A Filosofia da Permanência.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg sm:text-xl text-[#8C8880] font-sans font-light leading-relaxed"
          >
            A Fifteen Miles não foi criada para lançar um produto de passagem. Foi criada
            para edificar um legado na engenharia de software corporativo.
          </motion.p>
        </motion.div>

        {/* Pillars — read as a colonnade, not a stat grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32"
        >
          {pillars.map((item) => (
            <motion.div
              variants={fadeUp}
              key={item.numeral}
              className="relative p-8 border border-[#8C7355]/25 bg-[#1A1815] engraved-border-dark flex flex-col justify-between"
            >
              <PlateMarks />
              <div>
                <div className="w-8 h-px bg-[#C5A059]/60 mb-6" />
                <span className="font-serif text-3xl italic text-[#C5A059] block mb-6 font-light">
                  {item.numeral}
                </span>
                <h3 className="font-serif text-2xl text-[#FAF8F5] mb-3 font-normal">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8C8880] font-sans font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#8C7355]/20 flex items-center justify-between text-[10px] font-sans uppercase tracking-widest text-[#8C8880]">
                <span>Princípio Fundacional</span>
                <span>Placa V.{item.numeral}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Chapter VI: Engineering Philosophy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative p-10 sm:p-14 border border-[#8C7355]/30 bg-[#161412] engraved-border-dark"
        >
          <PlateMarks />
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-[11px] font-sans tracking-[0.2em] uppercase text-[#C5A059] mb-4">
                <Terminal className="w-3.5 h-3.5" />
                <span>Capítulo VI · A Engenharia</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] font-normal mb-4">
                Filosofia de Engenharia Monumental
              </h3>
              <p className="text-[#8C8880] text-sm leading-relaxed font-light mb-8">
                Arquitetura em primeiro lugar. Tudo o resto é consequência.
              </p>

              <Link
                to="/engineering"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#8C7355]/40 bg-[#1E1C18] text-[#FAF8F5] text-xs font-sans uppercase tracking-widest hover:border-[#C5A059] transition-all"
              >
                <span>Ver Manifesto de Engenharia</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </Link>
            </div>

            {/* Prose translated into instrument — a terminal, since this is the engineering chamber */}
            <div className="w-full lg:w-[22rem] shrink-0 border border-[#8C7355]/20 bg-[#0F0D0B]">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#8C7355]/15">
                <span className="w-2 h-2 rounded-full bg-[#8C7355]/40" />
                <span className="w-2 h-2 rounded-full bg-[#8C7355]/40" />
                <span className="w-2 h-2 rounded-full bg-[#8C7355]/40" />
                <span className="ml-3 font-mono text-[10px] tracking-widest text-[#8C8880]/70 uppercase">
                  fifteenmiles.eng
                </span>
              </div>
              <div className="p-5 font-mono text-[11.5px] leading-relaxed">
                {commands.map((cmd) => (
                  <p key={cmd} className="text-[#8C8880]">
                    <span className="text-[#C5A059]">$</span> {cmd}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};