'use client';

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Layers, Cpu, Box, Compass } from "lucide-react";
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
    <div className="min-h-screen bg-white text-[#1D1D1F] font-sans selection:bg-black/50 selection:text-white pt-24 pb-20 overflow-x-hidden">
      <Seo 
        title="Produtos | Fifteen Miles" 
        description="Conheça o Atlas OS, Hephaestus e Atlas Capture — produtos desenvolvidos pela Fifteen Miles para centralizar operações, transformar dados e estruturar a inteligência empresarial." 
        path="/products" 
      />
      <div className="fixed inset-0 bg-[radial-gradient(#1D1D1F_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none z-0" />

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 lg:py-20 relative z-10">
        
        {/* 1. HERO */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl border-b border-[#1D1D1F]/10 pb-16 mb-24"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-[#1D1D1F]/10 text-[11px] font-mono tracking-[0.2em] uppercase text-[#1D1D1F]/80 mb-6"
          >
            <span>PRODUCTS / 001</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] text-[#1D1D1F] mb-6"
          >
            Um ecossistema construído para tornar empresas mais inteligentes.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-[#86868B] font-light leading-relaxed max-w-2xl"
          >
            A Fifteen Miles desenvolve produtos próprios para centralizar operações, transformar dados em contexto e aproximar o trabalho real da inteligência empresarial.
          </motion.p>
        </motion.div>


        {/* 2. ATLAS OS — PRODUTO PRINCIPAL */}
        <section className="mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="p-8 sm:p-14 lg:p-16 rounded-3xl border border-[#1D1D1F]/10 bg-[#F5F5F7] shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#1D1D1F]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
              
              <div className="lg:col-span-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white border border-[#1D1D1F]/10 text-[#1D1D1F]">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#86868B]">
                      ATLAS OS / PREVIEW
                    </span>
                  </div>
                  <span className="font-mono text-[10px] tracking-wider uppercase text-[#1D1D1F] border border-[#1D1D1F]/10 px-3 py-1 rounded-full bg-white">
                    PRODUTO PRINCIPAL
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#1D1D1F] mb-4">
                  Atlas OS
                </h2>
                <h3 className="font-serif italic font-light text-xl text-[#1D1D1F]/60 mb-6">
                  O centro operacional da empresa.
                </h3>

                <p className="text-base sm:text-lg text-[#86868B] font-light leading-relaxed mb-8">
                  Uma empresa normalmente possui informações espalhadas entre ferramentas, planilhas, documentos, mensagens e sistemas diferentes. O Atlas centraliza informações, processos, documentos, equipes, planejamento e operações em um ambiente único e configurável.
                </p>

                <div className="space-y-4 mb-10 border-t border-[#1D1D1F]/10 pt-6">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-[#86868B] mt-1">01</span>
                    <div>
                      <h4 className="text-sm font-medium text-[#1D1D1F]">Centralização</h4>
                      <p className="text-xs text-[#86868B] font-light">Informações e processos reunidos em um único ambiente.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-[#86868B] mt-1">02</span>
                    <div>
                      <h4 className="text-sm font-medium text-[#1D1D1F]">Configurabilidade</h4>
                      <p className="text-xs text-[#86868B] font-light">A organização adapta o sistema à própria operação.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-[#86868B] mt-1">03</span>
                    <div>
                      <h4 className="text-sm font-medium text-[#1D1D1F]">Contexto</h4>
                      <p className="text-xs text-[#86868B] font-light">A informação deixa de existir isoladamente e passa a fazer parte do contexto operacional.</p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/atlas"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-md bg-[#1D1D1F] text-white font-medium text-xs tracking-[0.15em] uppercase hover:bg-black transition-all group shadow-md"
                >
                  <span>Conhecer o Atlas</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Mockup visual conceitual do Atlas */}
              <div className="lg:col-span-6">
                <div className="bg-white border border-[#1D1D1F]/10 rounded-2xl p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1D1D1F]/5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#1D1D1F]/20" />
                      <div className="w-3 h-3 rounded-full bg-[#1D1D1F]/10" />
                      <div className="w-3 h-3 rounded-full bg-[#1D1D1F]/10" />
                    </div>
                    <span className="font-mono text-[10px] text-[#86868B] uppercase tracking-wider">Atlas Workspace</span>
                  </div>

                  <div className="grid grid-cols-12 gap-4">
                    {/* Sidebar mini */}
                    <div className="col-span-4 bg-[#F5F5F7] rounded-xl p-3 space-y-2">
                      <div className="h-3 w-16 bg-[#1D1D1F]/20 rounded mb-4" />
                      <div className="h-2.5 w-full bg-[#1D1D1F]/10 rounded" />
                      <div className="h-2.5 w-4/5 bg-[#1D1D1F]/10 rounded" />
                      <div className="h-2.5 w-3/4 bg-[#1D1D1F]/10 rounded" />
                      <div className="h-2.5 w-5/6 bg-[#1D1D1F]/10 rounded" />
                    </div>

                    {/* Content preview mini */}
                    <div className="col-span-8 space-y-4">
                      <div className="p-3 rounded-xl border border-[#1D1D1F]/10 bg-[#F5F5F7]/50 space-y-2">
                        <div className="h-3 w-1/2 bg-[#1D1D1F]/20 rounded" />
                        <div className="h-2 w-full bg-[#1D1D1F]/10 rounded" />
                        <div className="h-2 w-2/3 bg-[#1D1D1F]/10 rounded" />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl border border-[#1D1D1F]/10 bg-[#F5F5F7]/50 space-y-2">
                          <div className="h-2 w-1/3 bg-[#1D1D1F]/20 rounded" />
                          <div className="h-4 w-2/3 bg-[#1D1D1F]/10 rounded" />
                        </div>
                        <div className="p-3 rounded-xl border border-[#1D1D1F]/10 bg-[#F5F5F7]/50 space-y-2">
                          <div className="h-2 w-1/3 bg-[#1D1D1F]/20 rounded" />
                          <div className="h-4 w-2/3 bg-[#1D1D1F]/10 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </section>


        {/* 3. HEPHAESTUS & 4. ATLAS CAPTURE (Grid de Produtos Secundários) */}
        <section className="grid lg:grid-cols-2 gap-8 mb-32">
          
          {/* HEPHAESTUS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="p-8 sm:p-12 rounded-3xl border border-[#1D1D1F]/10 bg-[#F5F5F7] flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-white border border-[#1D1D1F]/10 text-[#86868B]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#86868B]">
                    HEPHAESTUS
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-wider uppercase text-[#86868B] border border-[#1D1D1F]/10 px-3 py-1 rounded-full bg-white">
                  EM DESENVOLVIMENTO
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#1D1D1F] mb-3">
                Hephaestus
              </h2>
              <h3 className="font-serif italic font-light text-lg text-[#1D1D1F]/60 mb-6">
                Uma nova camada do ecossistema Fifteen Miles.
              </h3>

              <p className="text-sm sm:text-base text-[#86868B] font-light leading-relaxed mb-8">
                Módulo complementar de engenharia e automação estruturada. O Hephaestus está sendo construído para otimizar fluxos técnicos complexos e conectar dados profundos de infraestrutura diretamente ao núcleo operacional do Atlas.
              </p>
            </div>

            <div className="pt-6 border-t border-[#1D1D1F]/10 flex items-center justify-between">
              <span className="font-mono text-xs text-[#86868B]">Arquitetura de Apoio</span>
              <span className="font-serif italic text-sm text-[#1D1D1F]/70">Extensão de ecossistema</span>
            </div>
          </motion.div>


          {/* ATLAS CAPTURE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            transition={{ delay: 0.08 }}
            className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#0F0E0C] text-white flex flex-col justify-between shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/10 text-white">
                    <Box className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/60">
                    FIFTEEN MILES LAB
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-wider uppercase text-white border border-white/20 px-3 py-1 rounded-full bg-black/40">
                  PROTÓTIPO EXPERIMENTAL
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-3">
                Atlas Capture
              </h2>
              <h3 className="font-serif italic font-light text-lg text-white/60 mb-6">
                Do ambiente físico para o contexto digital.
              </h3>

              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed mb-8">
                Nem toda informação operacional nasce dentro de um computador. O Atlas Capture explora um dispositivo físico dedicado para capturar dados do trabalho real, enviando registros ao Atlas para gerar relatórios e identificar oportunidades de automação.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-white/50 tracking-wider">
                <span>Captura</span>
                <span>→</span>
                <span>Atlas OS</span>
                <span>→</span>
                <span>Automação</span>
              </div>
              <span className="font-serif italic text-xs text-white/60">Pesquisa & Hardware</span>
            </div>
          </motion.div>

        </section>


        {/* 5. ECOSSISTEMA */}
        <section className="mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#86868B] block mb-3">
              ARQUITETURA INTEGRADA
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#1D1D1F] mb-4">
              Um ecossistema, não uma coleção de ferramentas.
            </h2>
            <p className="text-[#86868B] font-light text-base sm:text-lg">
              O Atlas é o núcleo operacional. Hephaestus e Atlas Capture atuam como extensões que exploram diferentes camadas da operação empresarial.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid sm:grid-cols-3 gap-6"
          >
            <div className="p-8 rounded-2xl border border-[#1D1D1F]/10 bg-[#F5F5F7] text-center">
              <span className="font-mono text-xs uppercase tracking-widest text-[#86868B] block mb-2">01 / Núcleo</span>
              <h3 className="text-xl font-medium text-[#1D1D1F] mb-2">Atlas OS</h3>
              <p className="text-xs text-[#86868B] font-light">Centralização de processos, equipes e contexto institucional.</p>
            </div>

            <div className="p-8 rounded-2xl border border-[#1D1D1F]/10 bg-[#F5F5F7] text-center">
              <span className="font-mono text-xs uppercase tracking-widest text-[#86868B] block mb-2">02 / Extensão</span>
              <h3 className="text-xl font-medium text-[#1D1D1F] mb-2">Hephaestus</h3>
              <p className="text-xs text-[#86868B] font-light">Camada complementar de engenharia, dados e automação técnica.</p>
            </div>

            <div className="p-8 rounded-2xl border border-[#1D1D1F]/10 bg-[#F5F5F7] text-center">
              <span className="font-mono text-xs uppercase tracking-widest text-[#86868B] block mb-2">03 / Experimento</span>
              <h3 className="text-xl font-medium text-[#1D1D1F] mb-2">Atlas Capture</h3>
              <p className="text-xs text-[#86868B] font-light">Conexão física entre o ambiente de trabalho real e o software.</p>
            </div>
          </motion.div>
        </section>


        {/* 6. CTA FINAL */}
        <section className="border-t border-[#1D1D1F]/10 pt-20 text-center max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="w-10 h-10 rounded-full border border-[#1D1D1F]/20 bg-[#F5F5F7] text-[#1D1D1F] flex items-center justify-center mx-auto mb-6">
              <Compass className="w-5 h-5" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#1D1D1F] mb-4">
              Estamos construindo o próximo capítulo.
            </h2>
            <p className="text-[#86868B] font-light text-base sm:text-lg mb-8 leading-relaxed">
              Conheça o Atlas e acompanhe os produtos que estamos desenvolvendo para transformar a operação empresarial.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/atlas"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-[#1D1D1F] text-white font-medium text-xs tracking-[0.15em] uppercase hover:bg-black transition-all shadow-md"
              >
                <span>Conhecer Atlas</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-[#F5F5F7] border border-[#1D1D1F]/10 text-[#1D1D1F] font-medium text-xs tracking-[0.15em] uppercase hover:bg-[#EAEAEA] transition-all"
              >
                <span>Falar com a Fifteen Miles</span>
              </Link>
            </div>
          </motion.div>
        </section>

      </main>
    </div>
  );
}