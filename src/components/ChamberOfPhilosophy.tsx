'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Terminal, ArrowRight } from "lucide-react";

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

export const ChamberOfPhilosophy = () => {
  useDisplayFonts();

  return (
    <section className="relative py-32 sm:py-48 bg-black text-white border-t border-white/10 overflow-hidden font-[Inter] selection:bg-white/50">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-3xl mb-24"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-white/80 mb-8"
          >
            <span>Capítulo V · Por Que Existimos</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-[Inter] text-5xl sm:text-7xl lg:text-[5.5rem] tracking-[-0.03em] font-medium leading-[1.05] text-white mb-8"
          >
            A Filosofia da   

            <span className="font-[Fraunces] italic font-light text-white/40">Permanência.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl text-white/60 font-light tracking-tight leading-relaxed"
          >
            A Fifteen Miles não foi criada para lançar um produto de passagem. Foi criada
            para edificar um legado na engenharia de software corporativo.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28"
        >
          {pillars.map((item) => (
            <motion.div
              variants={fadeUp}
              key={item.numeral}
              className="relative p-8 border border-white/10 bg-white/[0.02] rounded-3xl flex flex-col justify-between hover:bg-white/[0.04] transition-colors"
            >
              <div>
                <span className="font-[Fraunces] italic text-4xl text-white/40 block mb-6 font-light">
                  {item.numeral}
                </span>
                <h3 className="font-[Inter] text-2xl text-white mb-3 font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-white/40">
                <span>Princípio</span>
                <span>Placa V.{item.numeral}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative p-8 sm:p-14 border border-white/10 bg-white/[0.02] rounded-3xl"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-[11px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-white/60 mb-4">
                <Terminal className="w-3.5 h-3.5" />
                <span>Capítulo VI · A Engenharia</span>
              </div>
              <h3 className="font-[Inter] text-3xl sm:text-4xl text-white font-medium tracking-tight mb-4">
                Filosofia de Engenharia Monumental
              </h3>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                Arquitetura em primeiro lugar. Tudo o resto é consequência.
              </p>

              <Link
                to="/engineering"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium text-xs tracking-[0.15em] uppercase hover:bg-white/90 transition-all group shadow-lg"
              >
                <span>Ver Manifesto de Engenharia</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="w-full lg:w-[24rem] shrink-0 border border-white/10 bg-[#121216] rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-1.5 px-4 py-3.5 border-b border-white/10 bg-white/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="ml-3 font-[JetBrains_Mono] text-[10px] tracking-widest text-white/40 uppercase">
                  fifteenmiles.eng
                </span>
              </div>
              <div className="p-6 font-[JetBrains_Mono] text-xs leading-relaxed space-y-2">
                {commands.map((cmd) => (
                  <p key={cmd} className="text-white/70">
                    <span className="text-emerald-400">$</span> {cmd}
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
