'use client';

import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Compass, ArrowRight, CheckCircle2, Milestone } from "lucide-react";
import Link from "next/link";
import Seo from "@/components/Seo";

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
    transition: { staggerChildren: 0.12 },
  },
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

const timelineEvents = [
  { phase: "01", title: "Equipe fundadora estruturada", category: "Fundação" },
  { phase: "02", title: "MVP em desenvolvimento", category: "Produto" },
  { phase: "03", title: "Landing page publicada", category: "Lançamento" },
  { phase: "04", title: "Branding e posicionamento consolidados", category: "Identidade" },
  { phase: "05", title: "Operação organizada em sprints", category: "Processo" },
  { phase: "06", title: "Inscrição no Siará Tech Summit 2026", category: "Ecossistema" },
  { phase: "07", title: "Integração ao ecossistema Sebrae Startups", category: "Parceria" },
  { phase: "08", title: "Início da prospecção comercial", category: "Mercado" },
];

export default function StartupEvolutionPage() {
  useDisplayFonts();

  return (
    <div className="relative min-h-screen bg-[#030303] text-white font-[Inter] selection:bg-white/20 overflow-hidden">
      <Seo title="Evolução da Startup — Fifteen Miles" description="Da visão à execução: a trajetória de construção e estruturação da Fifteen Miles em 2026." path="/evolution" />

      <div className="absolute inset-0 pointer-events-none [perspective:1000px] overflow-hidden opacity-20 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10" />
        <div 
          className="absolute inset-x-0 bottom-0 h-[100vh] origin-bottom"
          style={{
            transform: "rotateX(75deg) translateY(120px) scale(2.2)",
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "linear-gradient(to top, black 5%, transparent 80%)",
            WebkitMaskImage: "linear-gradient(to top, black 5%, transparent 80%)"
          }}
        />
      </div>

      <section className="relative pt-44 pb-24 px-6 sm:px-12 z-10 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid lg:grid-cols-12 gap-12 items-end mb-24">
          <div className="lg:col-span-7">
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl text-[10px] font-[JetBrains_Mono] tracking-[0.25em] uppercase text-white/80">
                <Compass className="w-3.5 h-3.5 text-white/60" />
                <span>Trajetória 2026</span>
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl lg:text-[7.5rem] tracking-[-0.04em] font-medium leading-[1.02]">
              Evolução da <br />
              <span className="font-[Fraunces] italic font-light text-white/40">Startup.</span>
            </motion.h1>
          </div>
          <motion.div variants={fadeUp} className="lg:col-span-5 pb-4">
            <div className="p-8 rounded-[28px] bg-[#050505] border border-white/[0.08] backdrop-blur-xl">
              <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/40 block mb-3">Da visão à execução</span>
              <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
                Em poucos meses, estruturamos uma equipe multidisciplinar, definimos nossa arquitetura e iniciamos a construção do Atlas, consolidando as bases para uma empresa projetada para crescer de forma sustentável.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 px-6 sm:px-12 max-w-6xl mx-auto relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="relative border-l border-white/[0.1] ml-4 sm:ml-32 space-y-16">
          {timelineEvents.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="relative pl-10 sm:pl-16 group">
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#030303] border border-white/20 flex items-center justify-center group-hover:border-white group-hover:scale-110 transition-all">
                <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
              </div>
              <div className="p-8 rounded-[32px] bg-[#050505] border border-white/[0.08] group-hover:border-white/20 transition-all duration-500 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                  <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/40">Fase 2026.{item.phase}</span>
                  <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase text-white/60 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] w-fit">{item.category}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-32 px-6 text-center relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight mb-6">O próximo marco.</h2>
          <p className="text-white/50 mb-10 text-base font-light">Nossa operação segue escalando rumo aos próximos objetivos institucionais.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            <span>Contato Executivo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}