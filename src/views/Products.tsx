'use client';

import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Layers, Cpu, Box, Compass, Image as ImageIcon } from "lucide-react";
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
    transition: { staggerChildren: 0.08 },
  },
};

function MockupPlaceholder({ title, aspect = "video" }: { title: string, aspect?: "video" | "square" | "mobile" }) {
  const aspectClasses = {
    video: "aspect-video w-full",
    square: "aspect-square w-full max-w-xl mx-auto",
    mobile: "aspect-[9/19] w-full max-w-xs mx-auto"
  };

  return (
    <div className={`relative rounded-[28px] border border-white/[0.08] bg-[#050505] shadow-2xl overflow-hidden group ${aspectClasses[aspect]}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />
      
      <div className="absolute top-0 inset-x-0 h-12 border-b border-white/[0.05] bg-white/[0.01] flex items-center px-6 gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
        <div className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <ImageIcon className="w-6 h-6 text-white/30" />
        </div>
        <div>
          <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/40 block mb-1">
            Preview Visual
          </span>
          <span className="font-[Inter] text-sm font-medium text-white/80">
            {title}
          </span>
        </div>
      </div>
      
      <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.05] rounded-[28px] pointer-events-none" />
    </div>
  );
}

export default function Products() {
  return (
    <div className="min-h-screen bg-[#030303] text-white font-[Inter] selection:bg-white/20 pt-28 pb-24 overflow-x-hidden">
      <Seo 
        title="Produtos | Fifteen Miles" 
        description="Conheça o Atlas OS, o ecossistema Hephaestus e o Atlas Capture — desenvolvidos pela Fifteen Miles para unir software, hardware e inteligência operacional." 
        path="/products" 
      />
      <div className="fixed inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none z-0" />

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 lg:py-20 relative z-10">
        
        {/* HERO SECTION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl border-b border-white/[0.08] pb-16 mb-24"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-[#050505] text-[10px] font-[JetBrains_Mono] tracking-[0.25em] uppercase text-white/70 mb-6 shadow-sm"
          >
            <span>PRODUCTS / ECOSYSTEM</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.05] text-white mb-6"
          >
            <span className="font-[Helvetica]">Um ecossistema que une </span>
            <span className="font-[Fraunces] italic font-light text-white/40">software, hardware e operação.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-white/50 font-light leading-relaxed max-w-2xl"
          >
            A Fifteen Miles expande o limite dos sistemas corporativos. Enquanto o Atlas pensa e organiza, o ecossistema Hephaestus e o Atlas Capture conectam o software diretamente ao mundo físico.
          </motion.p>
        </motion.div>

        {/* ECOSYSTEM NARRATIVE: BRAIN, SENSES, HANDS */}
        <section className="mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="p-8 sm:p-14 lg:p-16 rounded-[36px] border border-white/[0.08] bg-[#050505] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
            
            <div className="max-w-3xl mb-16 relative z-10">
              <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/40 block mb-3">
                ARQUITETURA DA OPERAÇÃO
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-4">
                O papel de cada camada na Fifteen Miles
              </h2>
              <p className="text-white/50 font-light text-base sm:text-lg">
                O software isolado depende de inputs manuais. A nossa visão integra o ambiente físico e digital em um ciclo contínuo de inteligência, governança e automação.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-[#080808] border border-white/[0.08] p-8 rounded-[24px] shadow-xl flex flex-col justify-between hover:border-white/20 transition-all duration-500">
                <div>
                  <span className="font-[JetBrains_Mono] text-[10px] text-white/40 uppercase tracking-widest block mb-2">01 / NÚCLEO DE SOFTWARE</span>
                  <h3 className="text-xl font-medium text-white mb-1">Atlas OS</h3>
                  <p className="font-[Fraunces] italic text-sm text-white/40 mb-4">"O cérebro"</p>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    Centraliza informações, processos, pessoas, projetos, dados e toda a operação corporativa em um ambiente único, modular e configurável.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/[0.05]">
                  <Link href="/atlas" className="inline-flex items-center gap-2 text-xs font-[JetBrains_Mono] uppercase tracking-wider text-white hover:text-white/70 transition-colors">
                    <span>Explorar Atlas OS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="bg-[#080808] border border-white/[0.08] p-8 rounded-[24px] shadow-xl flex flex-col justify-between hover:border-white/20 transition-all duration-500">
                <div>
                  <span className="font-[JetBrains_Mono] text-[10px] text-white/40 uppercase tracking-widest block mb-2">02 / DISPOSITIVO DE COLETA</span>
                  <h3 className="text-xl font-medium text-white mb-1">Atlas Capture</h3>
                  <p className="font-[Fraunces] italic text-sm text-white/40 mb-4">"Os sentidos"</p>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    Observa e registra o que realmente acontece na operação física, eliminando a barreira comportamental do registro manual de tempo.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/[0.05] font-[JetBrains_Mono] text-[10px] text-white/40 uppercase tracking-widest">
                  Protótipo Físico
                </div>
              </div>

              <div className="bg-[#080808] border border-white/[0.08] p-8 rounded-[24px] shadow-xl flex flex-col justify-between hover:border-white/20 transition-all duration-500">
                <div>
                  <span className="font-[JetBrains_Mono] text-[10px] text-white/40 uppercase tracking-widest block mb-2">03 / PLATAFORMA DE HARDWARE</span>
                  <h3 className="text-xl font-medium text-white mb-1">Hephaestus</h3>
                  <p className="font-[Fraunces] italic text-sm text-white/40 mb-4">"As mãos"</p>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    A família de infraestrutura física e automação que conecta o software ao mundo real, permitindo que o ecossistema interaja com o ambiente de trabalho.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/[0.05] font-[JetBrains_Mono] text-[10px] text-white/40 uppercase tracking-widest">
                  Plataforma Futura
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ATLAS OS SECTION */}
        <section className="mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="p-8 sm:p-14 lg:p-16 rounded-[36px] border border-white/[0.08] bg-[#050505] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
              <div className="lg:col-span-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white shadow-sm">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/40">
                      ATLAS OS / NÚCLEO
                    </span>
                  </div>
                  <span className="font-[JetBrains_Mono] text-[10px] tracking-wider uppercase text-white border border-white/10 px-3 py-1 rounded-full bg-white/[0.03] shadow-sm">
                    PRODUTO PRINCIPAL
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-4">
                  Atlas OS
                </h2>
                <h3 className="font-[Fraunces] italic font-light text-xl text-white/40 mb-6">
                  O centro operacional da empresa.
                </h3>

                <p className="text-base sm:text-lg text-white/50 font-light leading-relaxed mb-8">
                  Uma empresa normalmente possui informações espalhadas entre ferramentas fragmentadas. O Atlas centraliza informações, processos, documentos, equipes, planejamento e operações em um ambiente único e configurável.
                </p>

                <div className="space-y-4 mb-10 border-t border-white/[0.05] pt-6">
                  <div className="flex items-start gap-4">
                    <span className="font-[JetBrains_Mono] text-xs text-white/40 mt-1">01</span>
                    <div>
                      <h4 className="text-sm font-medium text-white">Centralização</h4>
                      <p className="text-xs text-white/50 font-light">Informações e processos reunidos em um único ambiente.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-[JetBrains_Mono] text-xs text-white/40 mt-1">02</span>
                    <div>
                      <h4 className="text-sm font-medium text-white">Configurabilidade</h4>
                      <p className="text-xs text-white/50 font-light">A organização adapta o sistema à própria operação, sem amarras rígidas.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-[JetBrains_Mono] text-xs text-white/40 mt-1">03</span>
                    <div>
                      <h4 className="text-sm font-medium text-white">Contexto</h4>
                      <p className="text-xs text-white/50 font-light">A informação deixa de existir isoladamente e alimenta relatórios e automações.</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/atlas"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs font-[JetBrains_Mono] uppercase tracking-[0.15em] hover:bg-white/95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] group"
                >
                  <span>Conhecer o Atlas</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="lg:col-span-6">
                <MockupPlaceholder title="Interface Principal do Workspace Atlas OS" aspect="video" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* HEPHAESTUS & ATLAS CAPTURE */}
        <section className="grid lg:grid-cols-2 gap-8 mb-32">
          
          {/* HEPHAESTUS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="p-8 sm:p-12 rounded-[32px] border border-white/[0.08] bg-[#050505] flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white/70 shadow-sm">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/40">
                    HEPHAESTUS
                  </span>
                </div>
                <span className="font-[JetBrains_Mono] text-[10px] tracking-wider uppercase text-white/60 border border-white/10 px-3 py-1 rounded-full bg-white/[0.03] shadow-sm">
                  PLATAFORMA DE HARDWARE
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-3">
                Hephaestus
              </h2>
              <h3 className="font-[Fraunces] italic font-light text-lg text-white/40 mb-6">
                A camada de infraestrutura física e automação.
              </h3>

              <p className="text-sm sm:text-base text-white/50 font-light leading-relaxed mb-8">
                Inspirado na mitologia da forja e da engenharia, o Hephaestus representa a família de hardware e dispositivos empresariais da Fifteen Miles. Ele viabiliza a expansão do software para o mundo real, interligando sensores, controladores e o Atlas OS.
              </p>

              <div className="space-y-2 mb-8 font-[JetBrains_Mono] text-xs text-white/50">
                <div>• Família de dispositivos modulares</div>
                <div>• Conexão nativa com o ecossistema Atlas</div>
                <div>• Arquitetura escalável para automação física</div>
              </div>

              <div className="mb-8">
                <MockupPlaceholder title="Esquema da Plataforma de Hardware Hephaestus" aspect="square" />
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/[0.05] flex items-center justify-between font-[JetBrains_Mono] text-xs text-white/40">
              <span>Infraestrutura & Sensores</span>
              <span className="font-[Fraunces] italic text-sm text-white/60">Linha de expansão</span>
            </div>
          </motion.div>

          {/* ATLAS CAPTURE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            transition={{ delay: 0.08 }}
            className="p-8 sm:p-12 rounded-[32px] border border-white/20 bg-[#080808] text-white flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/15 text-white shadow-sm">
                    <Box className="w-5 h-5" />
                  </div>
                  <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/60">
                    HEPHAESTUS LAB / PROTÓTIPO
                  </span>
                </div>
                <span className="font-[JetBrains_Mono] text-[10px] tracking-wider uppercase text-white border border-white/20 px-3 py-1 rounded-full bg-black/40 shadow-sm">
                  PROJETO EXPERIMENTAL
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-3">
                Atlas Capture
              </h2>
              <h3 className="font-[Fraunces] italic font-light text-lg text-white/40 mb-6">
                Do ambiente físico para o contexto digital.
              </h3>

              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed mb-8">
                Um Time Tracker físico construído com ESP32, tela LCD touch, botões e Wi-Fi. Ele resolve o problema comportamental de lembrar de abrir abas no computador, transformando o registro de tarefas em um hábito natural e enviando dados precisos ao Atlas para análise de gargalos e automação.
              </p>

              {/* Simulação visual do dispositivo */}
              <div className="bg-black/80 border border-white/10 rounded-2xl p-5 mb-8 font-[JetBrains_Mono] text-xs shadow-inner">
                <div className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Simulação do Display (ESP32)</div>
                <div className="text-white font-medium text-sm">Atlas Capture</div>
                <div className="text-white/60 text-[11px] mt-1">Projeto: Website · Tarefa: Landing Page</div>
                <div className="text-emerald-400 font-bold text-lg my-2 font-[JetBrains_Mono]">01:42:37</div>
                <div className="flex items-center gap-2 text-[10px] text-white/90">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>● TRABALHANDO</span>
                </div>
              </div>

              <div className="mb-8">
                <MockupPlaceholder title="Dispositivo Físico Atlas Capture (Gabinete & Display)" aspect="square" />
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-[JetBrains_Mono] text-[10px] text-white/50 tracking-wider">
                <span>Capture</span>
                <span>→</span>
                <span>Atlas OS</span>
                <span>→</span>
                <span>Insights</span>
              </div>
              <span className="font-[Fraunces] italic text-xs text-white/60">Hardware & Software</span>
            </div>
          </motion.div>

        </section>

        {/* ECOSYSTEM CYCLE */}
        <section className="mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/40 block mb-3">
              CICLO OPERACIONAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-4">
              Como o ecossistema se fecha
            </h2>
            <p className="text-white/50 font-light text-base sm:text-lg">
              A união entre o Hephaestus e o Atlas transforma dados brutos do mundo físico em automações inteligentes.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid sm:grid-cols-4 gap-6"
          >
            <div className="p-8 rounded-[24px] border border-white/[0.08] bg-[#050505] shadow-xl">
              <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-white/40 block mb-2">01 / COLETA</span>
              <h3 className="text-lg font-medium text-white mb-1">Hephaestus</h3>
              <p className="text-xs text-white/50 font-light">Dispositivos físicos capturam o tempo e as ações na estação de trabalho.</p>
            </div>

            <div className="p-8 rounded-[24px] border border-white/[0.08] bg-[#050505] shadow-xl">
              <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-white/40 block mb-2">02 / ORGANIZAÇÃO</span>
              <h3 className="text-lg font-medium text-white mb-1">Atlas OS</h3>
              <p className="text-xs text-white/50 font-light">Os dados entram no núcleo e estruturam a operação e os projetos da empresa.</p>
            </div>

            <div className="p-8 rounded-[24px] border border-white/[0.08] bg-[#050505] shadow-xl">
              <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-white/40 block mb-2">03 / ANÁLISE</span>
              <h3 className="text-lg font-medium text-white mb-1">Inteligência</h3>
              <p className="text-xs text-white/50 font-light">O sistema identifica padrões, gargalos e processos repetitivos.</p>
            </div>

            <div className="p-8 rounded-[24px] border border-white/[0.08] bg-[#050505] shadow-xl">
              <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-white/40 block mb-2">04 / AÇÃO</span>
              <h3 className="text-lg font-medium text-white mb-1">Automação</h3>
              <p className="text-xs text-white/50 font-light">O ecossistema sugere melhorias e executa fluxos otimizados no mundo real.</p>
            </div>
          </motion.div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-white/[0.08] pt-24 text-center max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="w-12 h-12 rounded-full border border-white/10 bg-[#050505] text-white flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Compass className="w-5 h-5 text-white/70" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-4">
              Estamos construindo o futuro da operação.
            </h2>
            <p className="text-white/50 font-light text-base sm:text-lg mb-10 leading-relaxed">
              Conheça o Atlas e acompanhe os produtos que estamos desenvolvendo para transformar a forma como as empresas operam.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/atlas"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs font-[JetBrains_Mono] uppercase tracking-[0.15em] hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                <span>Conhecer Atlas</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-transparent text-white font-semibold text-xs font-[JetBrains_Mono] uppercase tracking-[0.15em] hover:bg-white/5 transition-all"
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