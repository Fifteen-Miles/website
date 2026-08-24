'use client';

import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Building2, MessageSquare, ArrowRight } from "lucide-react";
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

export default function ClientsPage() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-white font-[Inter] selection:bg-white/20">
      <Seo title="Clientes — Fifteen Miles" description="Parceiros que confiam sua infraestrutura e operações de longo prazo à Fifteen Miles." path="/clients" />

      <section className="pt-44 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-[#050505] text-[10px] font-[JetBrains_Mono] tracking-[0.25em] uppercase text-white/70">
              <Building2 className="w-3 h-3" /> Ecossistema
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-6xl sm:text-8xl font-medium tracking-[-0.04em] mb-10 leading-[0.9]">
            Parcerias de <br/>
            <span className="font-[Fraunces] italic font-light text-white/40">longo prazo.</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* Grid de Clientes (Logos Placeholder) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <motion.div key={item} variants={fadeUp} className="h-32 flex items-center justify-center border border-white/[0.05] bg-[#050505] rounded-3xl">
              <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-white/20">Logomarca</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Depoimentos de Clientes */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-12">
          <h2 className="text-3xl font-medium mb-12">Resultados comprovados</h2>
          
          {[
            { quote: "A Fifteen Miles não nos vendeu software, nos entregou uma base operacional que resolveu nossos gargalos de escala de uma vez por todas.", company: "Diretor de Operações" },
            { quote: "A profundidade da engenharia por trás do Atlas OS nos deu a segurança necessária para expandir nossa atuação sem receio técnico.", company: "CTO, Fintech Enterprise" }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="p-10 sm:p-14 rounded-[32px] bg-[#050505] border border-white/[0.08] border-l-4 border-l-white">
              <MessageSquare className="w-8 h-8 mb-8 text-white/30" />
              <p className="text-2xl font-light leading-snug mb-8 text-white/90">"{item.quote}"</p>
              <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.2em] text-white/50">{item.company}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}