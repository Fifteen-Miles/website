'use client';

import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Users, Compass, ShieldCheck, Cpu, Sparkles, ArrowRight, Target } from "lucide-react";
import Link from "next/link";
import Seo from "@/components/Seo";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
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

export default function CulturePage() {
  useDisplayFonts();

  return (
    <div className="relative min-h-screen bg-[#030303] text-white font-[Inter] selection:bg-white/20">
      <Seo title="Cultura — Fifteen Miles" description="Princípios humanos, rigor técnico e premissas operacionais que definem a cultura da Fifteen Miles." path="/culture" />

      <section className="pt-44 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-[#050505] text-[10px] font-[JetBrains_Mono] tracking-[0.25em] uppercase text-white/70">
              <Users className="w-3 h-3" /> Fundação Humana
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-6xl sm:text-8xl font-medium tracking-[-0.04em] mb-10 leading-[0.9]">
            Nossa <br/>
            <span className="font-[Fraunces] italic font-light text-white/40">Cultura.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/50 font-light max-w-xl">
            Acreditamos que softwares perenes são reflexo direto de uma cultura baseada em rigor, clareza e autonomia responsável.
          </motion.p>
        </motion.div>
      </section>

      <section className="pb-32 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <motion.div variants={fadeUp} className="p-8 sm:p-10 rounded-[28px] bg-[#050505] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Rigor Técnico</h3>
              <p className="text-white/50 font-light text-sm leading-relaxed">
                Não buscamos atalhos. Cada linha de código é tratada como um investimento patrimonial de longo prazo para a operação das empresas.
              </p>
            </div>
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase text-white/30 pt-8 mt-8 border-t border-white/[0.05]">Pilar 01</span>
          </motion.div>

          <motion.div variants={fadeUp} className="p-8 sm:p-10 rounded-[28px] bg-[#050505] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-white">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Pensamento em Décadas</h3>
              <p className="text-white/50 font-light text-sm leading-relaxed">
                Ignoramos o ruído das tendências passageiras. Planejamos o crescimento e a arquitetura considerando horizontes de longo prazo.
              </p>
            </div>
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase text-white/30 pt-8 mt-8 border-t border-white/[0.05]">Pilar 02</span>
          </motion.div>

          <motion.div variants={fadeUp} className="p-8 sm:p-10 rounded-[28px] bg-[#050505] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-white">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Clareza Absoluta</h3>
              <p className="text-white/50 font-light text-sm leading-relaxed">
                Eliminamos a complexidade acidental. A verdadeira engenharia transforma fluxos caóticos em sistemas simples e transparentes.
              </p>
            </div>
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase text-white/30 pt-8 mt-8 border-t border-white/[0.05]">Pilar 03</span>
          </motion.div>

        </motion.div>
      </section>

      <section className="py-24 border-t border-white/[0.08] text-center px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-xl mx-auto">
          <h2 className="text-2xl font-medium mb-6">Quer fazer parte da nossa jornada?</h2>
          <p className="text-white/50 mb-10 text-base">Buscamos talentos comprometidos com a excelência arquitetural e a construção de fundações sólidas.</p>
          <Link href="/careers" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:opacity-90 transition-opacity">
            Ver oportunidades abertas <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}