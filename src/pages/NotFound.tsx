'use client';

import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import Seo from "../components/Seo";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
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
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
}

export default function NotFound() {
  useDisplayFonts();

  return (
    <div className="relative min-h-[90vh] bg-white text-[#1D1D1F] font-[Inter] overflow-hidden selection:bg-black/50 selection:text-white flex items-center justify-center">
      <Seo title="404 — Fifteen Miles" description="Página não encontrada" path="/404" />
      <div className="fixed inset-0 bg-[radial-gradient(#1D1D1F_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none z-0" />

      <section className="relative w-full flex flex-col items-center justify-center px-6 sm:px-12 z-10 py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-[#1D1D1F]/10 text-[11px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-[#1D1D1F]/80">
              <Compass className="w-3.5 h-3.5" />
              <span>Erro 404</span>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-[Inter] text-6xl sm:text-8xl lg:text-[9rem] tracking-[-0.03em] font-medium leading-[1.02] text-[#1D1D1F]"
          >
            <span>Página</span> <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">perdida.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-xl sm:text-2xl text-[#86868B] font-light tracking-tight max-w-xl leading-relaxed"
          >
            O destino que você tentou alcançar não existe ou foi movido para outro mapa.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-12 flex flex-col sm:flex-row items-center gap-5">
            <a
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1D1D1F] text-white font-medium text-xs tracking-[0.15em] uppercase hover:bg-black transition-all group shadow-lg"
            >
              <span>Voltar ao início</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}