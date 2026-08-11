'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Compass, ArrowRight, Mail } from "lucide-react";

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

export const HorizonThirtyYearsRoom = () => {
  useDisplayFonts();

  return (
    <section className="relative py-32 sm:py-48 bg-white text-[#1D1D1F] border-t border-[#1D1D1F]/10 overflow-hidden font-[Inter] selection:bg-black/50">
      <div className="absolute inset-0 bg-[radial-gradient(#1D1D1F_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">

        <div className="max-w-4xl mx-auto text-center mb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-[#1D1D1F]/10 text-[11px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-[#1D1D1F]/80 mb-8"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Capítulo VII · Nossa Visão</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-[Inter] text-5xl sm:text-7xl lg:text-[5.5rem] tracking-[-0.03em] font-medium leading-[1.05] text-[#1D1D1F] mb-8"
            >
              Um horizonte de   

              <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">três décadas.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-xl sm:text-2xl text-[#86868B] font-light tracking-tight leading-relaxed max-w-3xl mx-auto italic"
            >
              "Não fomos fundados para o próximo trimestre, nem para uma rodada efêmera.
              Fomos criados para erguer a infraestrutura digital dos próximos 30 anos."
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mt-20 grid sm:grid-cols-3 gap-6 text-left"
          >
            {horizons.map((item, idx) => (
              <motion.div
                variants={fadeUp}
                key={item.year}
                className="relative p-8 border border-[#1D1D1F]/10 bg-[#F5F5F7] rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <span className="font-[JetBrains_Mono] text-xs uppercase tracking-widest text-[#86868B] block mb-3">
                    {item.year}
                  </span>
                  <h3 className="font-[Inter] text-xl font-medium text-[#1D1D1F] mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#86868B] font-light leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#1D1D1F]/10 flex items-center justify-between font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-[#86868B]">
                  <span>Fase 0{idx + 1}</span>
                  <span>Placa VII.{idx + 1}</span>
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
          className="relative p-10 sm:p-20 border border-[#1D1D1F]/10 bg-[#F5F5F7] rounded-3xl text-center overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1D1D1F]/10 text-[11px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-[#1D1D1F]/80 mb-8 shadow-sm">
            <span>Capítulo VIII · O Convite Institucional</span>
          </div>

          <h3 className="font-[Inter] text-4xl sm:text-6xl text-[#1D1D1F] font-medium tracking-tight leading-[1.1] max-w-3xl mx-auto mb-6">
            Construa sua operação sobre fundações permanentes.
          </h3>

          <p className="text-lg sm:text-xl text-[#86868B] font-light max-w-xl mx-auto mb-12 leading-relaxed tracking-tight">
            Se sua empresa busca estabilidade operacional e visão de longo prazo,
            convidamos você a dialogar diretamente com nosso time de arquitetura e
            engenharia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-[#1D1D1F] text-white font-medium text-xs tracking-[0.15em] uppercase hover:bg-black transition-all shadow-lg"
            >
              <span>Iniciar Diálogo Institucional</span>
            </Link>

            <Link
              to="/atlas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-[#1D1D1F]/15 bg-white text-[#1D1D1F] font-medium text-xs tracking-[0.15em] uppercase hover:bg-[#1D1D1F]/5 transition-all shadow-sm group"
            >
              <span>Explorar Atlas OS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-16 font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase text-[#86868B]">
            Fifteen Miles Technologies · Foundation of Digital Infrastructure
          </div>
        </motion.div>

      </div>
    </section>
  );
};
