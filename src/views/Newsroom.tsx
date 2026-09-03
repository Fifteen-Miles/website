'use client';

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, FileText, Calendar, Filter } from "lucide-react";
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

// Exemplo de dados (você pode carregar isso via CMS/API)
//const officialNotes = [
 //{ date: "17 Ago, 2026", type: "Nota Institucional", title: "Fifteen Miles apresenta nova visão para software empresarial", excerpt: "Uma nova geração de sistemas projetados para reduzir a fragmentação operacional e preservar o conhecimento das organizações." },

//{ date: "12 Jul, 2026", type: "Nota Técnica", title: "AtlasOS: evolução da plataforma de operações empresariais", excerpt: "Nova etapa de evolução do Atlas com foco em modularidade, personalização e uma arquitetura preparada para diferentes modelos de negócio." },

//{ date: "05 Jun, 2026", type: "Nota Institucional", title: "Fifteen Miles inicia nova fase de desenvolvimento de produtos", excerpt: "A empresa amplia sua plataforma de software com uma abordagem centrada em sistemas duradouros, dados organizados e autonomia operacional." },

//{ date: "14 Mai, 2026", type: "Nota Técnica", title: "Arquitetura modular: construindo sistemas que evoluem com a empresa", excerpt: "Estudo de engenharia sobre modularidade, reutilização de componentes e estruturas capazes de acompanhar o crescimento das organizações." },];

export default function OfficialNotesPage() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-white font-[Inter] selection:bg-white/20">
      <Seo title="Notas Oficiais — Fifteen Miles" description="Comunicados oficiais, notas técnicas e atualizações institucionais da Fifteen Miles." path="/blog" />

      {/* Hero */}
      <section className="pt-44 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-[#050505] text-[10px] font-[JetBrains_Mono] tracking-[0.25em] uppercase text-white/70">
              <FileText className="w-3 h-3" /> Acervo Editorial
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-6xl sm:text-8xl font-medium tracking-[-0.04em] mb-10 leading-[0.9]">
            Notas <br/>
            <span className="font-[Fraunces] italic font-light text-white/40">Oficiais.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/50 font-light max-w-xl">
            Comunicados, relatórios técnicos e diretrizes institucionais que definem a nossa jornada.
          </motion.p>
        </motion.div>
      </section>

      {/* Filtros e Listagem */}
      <section className="pb-32 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col gap-12">
          
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
            <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.2em] text-white/40">Últimos comunicados</span>
            <button className="flex items-center gap-2 text-[11px] font-[JetBrains_Mono] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
              <Filter className="w-3 h-3" /> Filtrar por categoria
            </button>
          </div>

          <div className="grid gap-6">
            {/*{officialNotes.map((note, i) => (
              <motion.div key={i} variants={fadeUp} className="group p-8 sm:p-10 rounded-[24px] bg-[#050505] border border-white/[0.08] hover:border-white/20 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[10px] font-[JetBrains_Mono] uppercase tracking-[0.2em] text-white/40">
                      <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {note.date}</span>
                      <span className="px-2 py-0.5 rounded border border-white/[0.1] text-white/60">{note.type}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-medium group-hover:text-white/80 transition-colors">{note.title}</h2>
                    <p className="text-white/50 font-light max-w-2xl leading-relaxed">{note.excerpt}</p>
                  </div>
                  <Link 
                    href="#" 
                    className="flex-shrink-0 inline-flex items-center gap-2 text-[12px] font-[JetBrains_Mono] uppercase tracking-[0.1em] text-white border border-white/10 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all"
                  >
                    Ler Nota <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}*/}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <section className="py-24 border-t border-white/[0.08] text-center px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-2xl font-medium mb-6">Acompanhe as atualizações</h2>
          <p className="text-white/50 mb-10 text-lg">Inscreva-se em nossa lista de distribuição para receber comunicados em primeira mão.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:opacity-90 transition-opacity">
            Inscrever-se <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}