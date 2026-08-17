'use client';

import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Compass, Sparkles, Users, Lock } from "lucide-react";
import Link from "next/link";
import Seo from "../components/Seo";

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
    transition: { staggerChildren: 0.16 },
  },
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

function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none [perspective:1000px] overflow-hidden opacity-20 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10" />
      <div 
        className="absolute inset-x-0 bottom-0 h-[100vh] origin-bottom"
        style={{
          transform: "rotateX(75deg) translateY(120px) scale(2.2)",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to top, black 5%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to top, black 5%, transparent 80%)"
        }}
      />
    </div>
  );
}

export default function Careers() {
  useDisplayFonts();

  return (
    <div className="relative min-h-screen bg-[#030303] text-white font-[Inter] overflow-hidden selection:bg-white/20">
      <Seo title="Carreiras — Fifteen Miles" description="Oportunidades e recrutamento na Fifteen Miles — construindo sistemas empresariais perenes." path="/careers" />
      
      <GridBackground />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04)_0%,transparent_65%)] pointer-events-none z-0" />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center pt-40 pb-28 px-6 sm:px-12 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl text-[10px] font-[JetBrains_Mono] tracking-[0.25em] uppercase text-white/80 shadow-[0_0_25px_rgba(255,255,255,0.03)]">
              <Users className="w-3.5 h-3.5 text-white/60" />
              <span>Capítulo I · Recrutamento Institucional</span>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-[Inter] text-5xl sm:text-7xl lg:text-[8rem] tracking-[-0.04em] font-medium leading-[1.02] text-white"
          >
            <span className="block">Construa o futuro</span>
            <span className="block font-[Fraunces] italic font-light text-white/40 mt-1">com a Fifteen Miles.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-10 text-xl sm:text-2xl text-white/50 font-light tracking-tight max-w-2xl leading-relaxed"
          >
            "A expansão de plataformas perenes exige mentes extraordinárias, mas cada ciclo possui seu tempo exato de abertura."
          </motion.p>
        </motion.div>
      </section>

      {/* STATUS CARD SECTION */}
      <section className="py-24 px-6 sm:px-12 max-w-5xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="p-12 sm:p-20 rounded-[40px] border border-white/[0.08] bg-[#050505] shadow-2xl relative overflow-hidden group text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none group-hover:from-white/[0.04] transition-colors duration-700" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/60">
              <Lock className="w-3 h-3 text-white/40" /> Status: Fechado
            </div>
            
            <h2 className="font-[Inter] text-3xl sm:text-5xl font-medium tracking-tight text-white">
              Nenhuma vaga aberta no momento.
            </h2>
            
            <p className="text-base sm:text-lg text-white/50 font-light leading-relaxed">
              As portas da forja estão temporariamente fechadas para novos recrutas. No entanto, a Fifteen Miles está sempre atenta a engenheiros excepcionais que desejam reescrever o padrão da indústria de software.
            </p>

            <div className="pt-6">
              <span className="font-[JetBrains_Mono] text-xs text-white/40 tracking-widest uppercase block">
                Retorne em breve para novos chamados institucionais.
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CULTURE VALUES SECTION */}
      <section className="py-32 sm:py-40 px-6 sm:px-12 bg-[#050505] border-y border-white/[0.05] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-24 text-center"
          >
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">
              Princípios de Equipe
            </span>
            <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white">
              O que buscamos quando as portas abrem
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Rigor Técnico Absoluto", desc: "Preferimos fazer certo uma única vez a ter que reconstruir apressadamente no futuro." },
              { title: "Pensamento de Longo Prazo", desc: "Decisões orientadas pelo impacto perene e pela sustentabilidade duradoura da arquitetura." },
              { title: "Autonomia & Clareza", desc: "Acreditamos em profissionais independentes que priorizam a elegância e a simplicidade sistêmica." }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9, delay: i * 0.08 }}
                className="p-10 rounded-[36px] bg-[#030303] border border-white/[0.08] flex flex-col justify-between shadow-2xl group hover:border-white/20 transition-all duration-700 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <span className="font-[JetBrains_Mono] text-[10px] text-white/30 tracking-widest block mb-6">0{i+1}</span>
                  <h3 className="font-[Inter] text-2xl font-medium tracking-tight text-white mb-4">{item.title}</h3>
                </div>
                <p className="relative z-10 text-sm sm:text-base font-light text-white/50 leading-relaxed pt-4 border-t border-white/[0.05]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-36 sm:py-48 px-6 sm:px-12 w-full text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white mb-6"
          >
            Mantenha-se <span className="font-[Fraunces] italic font-light text-white/40">conectado.</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-lg sm:text-xl font-light text-white/50 max-w-xl mx-auto mb-12 leading-relaxed"
          >
            O futuro pertence àqueles que se antecipam e valorizam a excelência estrutural.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-semibold text-sm tracking-tight hover:scale-[0.98] hover:bg-white/90 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)]"
            >
              <span>Entrar em Contato</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FOOTER BADGE */}
      <section className="py-24 px-6 sm:px-12 flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center gap-4 border-t border-white/[0.05] w-full max-w-md pt-12"
        >
          <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40">
            Fifteen Miles · Institutional Careers
          </span>
          <span className="font-[JetBrains_Mono] text-[9px] tracking-[0.25em] uppercase text-white/30">
            Global Operations
          </span>
        </motion.div>
      </section>
    </div>
  );
}