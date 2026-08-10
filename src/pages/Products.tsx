'use client';

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Layers, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
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

export default function Products() {
  return (
    <div className="min-h-screen bg-white text-[#1D1D1F] font-[Inter] selection:bg-black/50 selection:text-white pt-24 pb-20">
      <Seo title="Produtos — Fifteen Miles" description="Mapa de produtos e módulos: Atlas OS, orquestração, inteligência e camadas futuras." path="/products" />
      <div className="fixed inset-0 bg-[radial-gradient(#1D1D1F_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none z-0" />

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl border-b border-[#1D1D1F]/10 pb-16"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-[#1D1D1F]/10 text-[11px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-[#1D1D1F]/80 mb-6"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Mapa de Infraestrutura</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight leading-[1.08] text-[#1D1D1F] mb-6"
          >
            Plataformas de Operação Corporativa.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-[#86868B] font-light leading-relaxed max-w-2xl"
          >
            Cada módulo da Fifteen Miles é projetado para se conectar à arquitetura unificada do Atlas OS, eliminando o acoplamento frágil de ferramentas dispersas.
          </motion.p>
        </motion.div>

        <section className="py-20 grid lg:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="p-10 rounded-3xl border border-[#1D1D1F]/10 bg-[#F5F5F7] flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-white border border-[#1D1D1F]/10 text-[#1D1D1F]">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-[#86868B] block mb-1">Sistema Operacional</span>
                    <h2 className="font-[Inter] text-2xl text-[#1D1D1F] font-medium tracking-tight">Atlas OS</h2>
                  </div>
                </div>
                <span className="font-[JetBrains_Mono] text-[10px] tracking-wider uppercase text-[#1D1D1F] border border-[#1D1D1F]/10 px-3 py-1 rounded-full bg-white">
                  Ativo & Implantado
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#86868B] font-light leading-relaxed mb-8">
                O Sistema Operacional Empresarial configurável que centraliza planejamento, inteligência operacional, memória institucional e governança em um único ambiente monumental.
              </p>
            </div>

            <Link
              to="/atlas"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1D1D1F] text-white font-medium text-xs tracking-[0.15em] uppercase hover:bg-black transition-all group shadow-lg w-fit"
            >
              <span>Explorar Atlas OS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            transition={{ delay: 0.08 }}
            className="p-10 rounded-3xl border border-[#1D1D1F]/10 bg-[#F5F5F7] flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-white border border-[#1D1D1F]/10 text-[#86868B]">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-[#86868B] block mb-1">Camadas Futuras</span>
                    <h2 className="font-[Inter] text-2xl text-[#1D1D1F] font-medium tracking-tight">Orquestração & Inteligência</h2>
                  </div>
                </div>
                <span className="font-[JetBrains_Mono] text-[10px] tracking-wider uppercase text-[#86868B] border border-[#1D1D1F]/10 px-3 py-1 rounded-full bg-white">
                  Em Desenvolvimento
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#86868B] font-light leading-relaxed mb-8">
                Camadas adicionais de inteligência preditiva e orquestração de processos que se acoplarão organicamente ao núcleo do Atlas OS sem introduzir complexidade indesejada.
              </p>
            </div>

            <span className="font-[Fraunces] italic text-sm text-[#1D1D1F]/70">
              Desenvolvido com a paciência das arquiteturas duradouras.
            </span>
          </motion.div>
        </section>
      </main>
    </div>
  );
}