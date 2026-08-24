'use client';

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Layers, Cpu, Box, Compass, Image as ImageIcon, CheckCircle2, Sliders, GitBranch } from "lucide-react";
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
        description="Produtos que transformam operações em sistemas. Conheça o Atlas OS, o ecossistema Hephaestus e o Atlas Capture." 
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
            <span>ECOSSISTEMA / CATÁLOGO</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.05] text-white mb-6"
          >
            <span className="font-[Helvetica]">Produtos que transformam </span>
            <span className="font-[Fraunces] italic font-light text-white/40">operações em sistemas.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-white/50 font-light leading-relaxed max-w-2xl"
          >
            Da organização centralizada da empresa à interação com o ambiente físico, construímos uma arquitetura integrada para tornar operações mais inteligentes, mensuráveis e adaptáveis.
          </motion.p>
        </motion.div>

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
                      SOFTWARE / NÚCLEO
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
                  O sistema operacional empresarial para centralizar a operação.
                </h3>

                <p className="text-base sm:text-lg text-white/50 font-light leading-relaxed mb-8">
                  Empresas utilizam ferramentas fragmentadas para projetos, tarefas, documentos e equipes. O Atlas centraliza essas estruturas em um ambiente modular onde a empresa não precisa se adaptar ao software — o software se adapta à operação.
                </p>

                <div className="space-y-4 mb-10 border-t border-white/[0.05] pt-6">
                  <div className="flex items-start gap-4">
                    <span className="font-[JetBrains_Mono] text-xs text-white/40 mt-1">01</span>
                    <div>
                      <h4 className="text-sm font-medium text-white">Centralização</h4>
                      <p className="text-xs text-white/50 font-light">Informações e processos reunidos em um único workspace.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-[JetBrains_Mono] text-xs text-white/40 mt-1">02</span>
                    <div>
                      <h4 className="text-sm font-medium text-white">Configurabilidade</h4>
                      <p className="text-xs text-white/50 font-light">Databases, formulários, wikis e fluxos sob medida.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-[JetBrains_Mono] text-xs text-white/40 mt-1">03</span>
                    <div>
                      <h4 className="text-sm font-medium text-white">Contexto Operacional</h4>
                      <p className="text-xs text-white/50 font-light">Dados conectados alimentam relatórios e inteligência.</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/atlas"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs font-[JetBrains_Mono] uppercase tracking-[0.15em] hover:bg-white/95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] group"
                >
                  <span>Explorar Atlas OS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="lg:col-span-6">
                <MockupPlaceholder title="Interface Principal do Workspace Atlas OS" aspect="video" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* ATLAS MODULES GRID */}
        <section className="mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/40 block mb-3">
              ARQUITETURA MODULAR
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-4">
              Uma fundação para diferentes formas de trabalhar
            </h2>
            <p className="text-white/50 font-light text-base">
              Módulos integrados que substituem dezenas de ferramentas isoladas.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { name: "Projects & Tasks", desc: "Gestão de entregas e fluxos Kanban" },
              { name: "Databases", desc: "Estruturas de dados flexíveis e relacionais" },
              { name: "Forms", desc: "Coleta de inputs externos e internos" },
              { name: "Goals & OKRs", desc: "Alinhamento estratégico e acompanhamento de metas" },
              { name: "Wiki & Docs", desc: "Base de conhecimento institucional unificada" },
              { name: "Analytics & Reports", desc: "Visão consolidada da performance operacional" },
            ].map((mod, idx) => (
              <motion.div key={idx} variants={fadeUp} className="p-8 rounded-[24px] border border-white/[0.08] bg-[#050505] shadow-xl hover:border-white/20 transition-all duration-300">
                <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-white/30 block mb-2">Módulo 0{idx+1}</span>
                <h3 className="text-lg font-medium text-white mb-1">{mod.name}</h3>
                <p className="text-xs text-white/50 font-light">{mod.desc}</p>
              </motion.div>
            ))}
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
                  INFRAESTRUTURA DE HARDWARE
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-3">
                Hephaestus
              </h2>
              <h3 className="font-[Fraunces] italic font-light text-lg text-white/40 mb-6">
                A infraestrutura física para a operação inteligente.
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
                <MockupPlaceholder title="Plataforma de Hardware Hephaestus" aspect="square" />
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/[0.05] flex items-center justify-between font-[JetBrains_Mono] text-xs text-white/40">
              <span>Hardware & Sensores</span>
              <span className="font-[Fraunces] italic text-sm text-white/60">Research & Development</span>
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
                    HEPHAESTUS LAB
                  </span>
                </div>
                <span className="font-[JetBrains_Mono] text-[10px] tracking-wider uppercase text-white border border-white/20 px-3 py-1 rounded-full bg-black/40 shadow-sm">
                  PROTÓTIPO / P&D
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-3">
                Atlas Capture
              </h2>
              <h3 className="font-[Fraunces] italic font-light text-lg text-white/40 mb-6">
                O ponto físico entre o trabalho e os dados da operação.
              </h3>

              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed mb-8">
                Um time tracker físico construído com ESP32, touch LCD e Wi-Fi. Ele elimina a barreira comportamental do registro manual em abas de navegador, transformando a execução de tarefas em um fluxo natural que alimenta o Atlas com métricas de tempo e gargalos.
              </p>

              <div className="bg-black/80 border border-white/10 rounded-2xl p-5 mb-8 font-[JetBrains_Mono] text-xs shadow-inner">
                <div className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Simulação do Display (ESP32)</div>
                <div className="text-white font-medium text-sm">Atlas Capture</div>
                <div className="text-white/60 text-[11px] mt-1">Projeto: Workspace · Tarefa: API Integration</div>
                <div className="text-emerald-400 font-bold text-lg my-2 font-[JetBrains_Mono]">01:42:37</div>
                <div className="flex items-center gap-2 text-[10px] text-white/90">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>● EM EXECUÇÃO</span>
                </div>
              </div>

              <div className="mb-8">
                <MockupPlaceholder title="Dispositivo Físico Atlas Capture (Gabinete & Display)" aspect="square" />
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-[JetBrains_Mono] text-[10px] text-white/50 tracking-wider">
                <span>Coleta física</span>
                <span>→</span>
                <span>Atlas OS</span>
                <span>→</span>
                <span>Insights</span>
              </div>
              <span className="font-[Fraunces] italic text-xs text-white/60">Hardware & Software</span>
            </div>
          </motion.div>

        </section>

        {/* OPERATIONAL CYCLE */}
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
              O dispositivo coleta. O Atlas entende.
            </h2>
            <p className="text-white/50 font-light text-base sm:text-lg">
              O objetivo não é apenas medir tempo. É transformar a execução cotidiana em informação útil para aprimorar processos e automatizar a rotina.
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
              <p className="text-xs text-white/50 font-light">Dispositivos físicos registram o tempo e a execução na estação de trabalho.</p>
            </div>

            <div className="p-8 rounded-[24px] border border-white/[0.08] bg-[#050505] shadow-xl">
              <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-white/40 block mb-2">02 / ORGANIZAÇÃO</span>
              <h3 className="text-lg font-medium text-white mb-1">Atlas OS</h3>
              <p className="text-xs text-white/50 font-light">Os dados entram no núcleo e estruturam os projetos e fluxos da empresa.</p>
            </div>

            <div className="p-8 rounded-[24px] border border-white/[0.08] bg-[#050505] shadow-xl">
              <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-white/40 block mb-2">03 / ANÁLISE</span>
              <h3 className="text-lg font-medium text-white mb-1">Inteligência</h3>
              <p className="text-xs text-white/50 font-light">O sistema identifica desvios de prazos, gargalos e tarefas repetitivas.</p>
            </div>

            <div className="p-8 rounded-[24px] border border-white/[0.08] bg-[#050505] shadow-xl">
              <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-white/40 block mb-2">04 / AÇÃO</span>
              <h3 className="text-lg font-medium text-white mb-1">Automação</h3>
              <p className="text-xs text-white/50 font-light">O ecossistema sugere melhorias e otimiza a operação no mundo real.</p>
            </div>
          </motion.div>
        </section>

        {/* ROADMAP SECTION */}
        <section className="mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="p-8 sm:p-14 rounded-[36px] border border-white/[0.08] bg-[#050505] shadow-2xl relative overflow-hidden"
          >
            <div className="max-w-2xl mb-12">
              <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/40 block mb-3">
                ESTÁGIO DOS PRODUTOS
              </span>
              <h2 className="text-3xl font-medium tracking-tight text-white mb-2">
                Roadmap de Desenvolvimento
              </h2>
              <p className="text-white/50 font-light text-sm">
                Transparência sobre o estágio atual de cada iniciativa da Fifteen Miles.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#080808] border border-white/10">
                <span className="inline-block font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full mb-4">
                  NOW / ATIVO
                </span>
                <h3 className="text-lg font-medium text-white mb-1">Atlas OS</h3>
                <p className="text-xs text-white/50 font-light">Desenvolvimento ativo, expansão de módulos e suporte a workspaces corporativos.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#080808] border border-white/10">
                <span className="inline-block font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full mb-4">
                  NEXT / PROTÓTIPO
                </span>
                <h3 className="text-lg font-medium text-white mb-1">Atlas Capture</h3>
                <p className="text-xs text-white/50 font-light">Testes de hardware com ESP32, prototipagem de gabinete 3D e integração com APIs do Atlas.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#080808] border border-white/10">
                <span className="inline-block font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full mb-4">
                  RESEARCH / P&D
                </span>
                <h3 className="text-lg font-medium text-white mb-1">Hephaestus</h3>
                <p className="text-xs text-white/50 font-light">Pesquisa de arquiteturas para novos dispositivos físicos de automação e sensores.</p>
              </div>
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
              A próxima geração de operações começa com uma arquitetura melhor.
            </h2>
            <p className="text-white/50 font-light text-base sm:text-lg mb-10 leading-relaxed">
              Conheça o Atlas e acompanhe os produtos que estamos desenvolvendo para transformar a forma como as empresas operam.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/atlas"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs font-[JetBrains_Mono] uppercase tracking-[0.15em] hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                <span>Explorar o Atlas</span>
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