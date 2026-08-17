'use client';

import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

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

export const HorizonThirtyYearsRoom = () => {
  useDisplayFonts();

  return (
    <section className="relative py-36 sm:py-48 bg-[#030303] text-white border-t border-white/[0.08] overflow-hidden font-[Inter] selection:bg-white/20">
      {/* Background Grid sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">

        {/* Header da Seção */}
        <div className="max-w-4xl mx-auto text-center mb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-[#050505] text-[10px] font-[JetBrains_Mono] tracking-[0.25em] uppercase text-white/70 mb-8 shadow-sm"
            >
              <Compass className="w-3.5 h-3.5 text-white/60" />
              <span>Capítulo VII · Nossa Visão</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-5xl sm:text-7xl lg:text-[5.5rem] tracking-[-0.04em] font-medium leading-[1.05] text-white mb-10"
            >
              Um horizonte de <br />
              <span className="font-[Fraunces] italic font-light text-white/40">três décadas.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-xl sm:text-2xl text-white/50 font-light tracking-tight leading-relaxed max-w-3xl mx-auto italic"
            >
              "Não fomos fundados para o próximo trimestre, nem para uma rodada efêmera. 
              Fomos criados para erguer a infraestrutura digital dos próximos 30 anos."
            </motion.p>
          </motion.div>

          {/* Cards dos Horizontes */}
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
                className="relative p-8 border border-white/[0.08] bg-[#050505] rounded-[28px] flex flex-col justify-between hover:border-white/20 transition-all duration-500 shadow-xl"
              >
                <div>
                  <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.25em] text-white/40 block mb-4">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 font-light leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-10 pt-4 border-t border-white/[0.05] flex items-center justify-between font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-white/30">
                  <span>Fase 0{idx + 1}</span>
                  <span>Placa VII.{idx + 1}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bloco do Convite Institucional */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative p-10 sm:p-20 border border-white/[0.08] bg-[#050505] rounded-[36px] text-center overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-[10px] font-[JetBrains_Mono] tracking-[0.25em] uppercase text-white/70 mb-8">
              <span>Capítulo VIII · O Convite Institucional</span>
            </div>

            <h3 className="text-4xl sm:text-6xl text-white font-medium tracking-tight leading-[1.1] max-w-3xl mx-auto mb-6">
              Construa sua operação sobre fundações permanentes.
            </h3>

            <p className="text-lg sm:text-xl text-white/50 font-light max-w-xl mx-auto mb-12 leading-relaxed tracking-tight">
              Se sua empresa busca estabilidade operacional e visão de longo prazo, 
              convidamos você a dialogar diretamente com nosso time de arquitetura e engenharia.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-regular text-xs font-[JetBrains_Mono] hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                <span>Iniciar Diálogo Institucional</span>
              </Link>

              <Link
                href="/atlas"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 bg-transparent text-white font-regular text-xs font-[JetBrains_Mono] hover:bg-white/5 transition-all group"
              >
                <span>Explorar Atlas OS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="mt-16 font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/30">
              Fifteen Miles Technologies · Foundation of Digital Infrastructure
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};