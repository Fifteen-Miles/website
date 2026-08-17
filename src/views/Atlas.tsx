"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Compass, Image as ImageIcon, Sliders, Shield, FolderTree } from "lucide-react";
import Seo from "@/components/Seo";

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

const pageTypes = [
  { name: "Dashboard", desc: "Métricas operacionais, KPIs e relatórios em tempo real" },
  { name: "Kanban", desc: "Fluxo visual de tarefas, prazos e equipes associadas" },
  { name: "Planilha", desc: "Dados estruturados com tabelas, filtros e ordenação avançada" },
  { name: "Wiki", desc: "Memória institucional, procedimentos e manuais internos" },
  { name: "Tracker", desc: "Acompanhamento contínuo de hábitos e métricas recorrentes" },
  { name: "Calendário", desc: "Timeline de eventos, prazos e marcos de projetos" },
  { name: "CRM", desc: "Gestão de relacionamento, clientes e funil de vendas" },
  { name: "Documentação", desc: "Padrões técnicos e estruturação de texto rica" },
];

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

function Grid3D() {
  return (
    <div className="absolute inset-0 pointer-events-none [perspective:1000px] overflow-hidden opacity-20 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10" />
      <div 
        className="absolute inset-x-0 bottom-0 h-[100vh] origin-bottom"
        style={{
          transform: "rotateX(75deg) translateY(100px) scale(2)",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to top, black 10%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to top, black 10%, transparent 80%)"
        }}
      />
    </div>
  );
}

function MockupPlaceholder({ title, aspect = "video" }: { title: string, aspect?: "video" | "square" | "mobile" }) {
  const aspectClasses = {
    video: "aspect-video w-full",
    square: "aspect-square w-full max-w-2xl mx-auto",
    mobile: "aspect-[9/19] w-full max-w-sm mx-auto"
  };

  return (
    <div className={`relative rounded-[24px] border border-white/[0.08] bg-[#050505] shadow-2xl overflow-hidden group ${aspectClasses[aspect]}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
      
      <div className="absolute top-0 inset-x-0 h-12 border-b border-white/[0.05] flex items-center px-6 gap-2 bg-white/[0.01]">
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover:scale-110 transition-transform duration-500">
          <ImageIcon className="w-6 h-6 text-white/20" />
        </div>
        <div className="text-center">
          <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase text-white/40 block mb-1">
            Interface do Sistema
          </span>
          <span className="font-[Inter] text-sm font-medium text-white/70">
            {title}
          </span>
        </div>
      </div>
      
      <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.05] rounded-[24px] pointer-events-none" />
    </div>
  );
}

export default function AtlasLanding() {
  useDisplayFonts();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#030303] text-white font-[Inter] overflow-hidden selection:bg-white/20"
    >
      <Seo title="Atlas — Fifteen Miles" description="Atlas: plataforma operacional para centralizar pessoas, processos e dados em uma única interface." path="/atlas" />
      
      <Grid3D />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-48 pb-20 w-full flex flex-col items-center justify-center px-6 sm:px-12 z-10">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 flex flex-col items-center text-center w-full max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md text-[10px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-white/80 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
              <Compass className="w-3.5 h-3.5" />
              <span>Capítulo I · A Fundação</span>
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="font-[Inter] text-5xl sm:text-7xl lg:text-[7.5rem] tracking-[-0.04em] font-medium leading-[1.02] text-white"
          >
            <motion.span variants={fadeUp} className="block">Projetado para</motion.span>
            <motion.span variants={fadeUp} className="block font-[Fraunces] italic font-light text-white/40">durar décadas.</motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 text-xl sm:text-2xl text-white/50 font-light tracking-tight max-w-2xl leading-relaxed"
          >
            Toda empresa merece operar em um único lugar. O Atlas reúne pessoas, processos, conhecimento e operações em uma plataforma erguida para resistir ao tempo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-5"
          >
            <a
              href="https://atlas.fifteenmiles.tech/"
              target="/blank"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-tight hover:scale-[0.98] hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              <span>Conheça o Atlas</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/[0.03] border border-white/[0.1] text-white font-medium text-sm tracking-tight hover:bg-white/[0.05] transition-colors backdrop-blur-sm"
            >
              Solicitar demonstração
            </a>
          </motion.div>
        </motion.div>

        {/* Imagem aplicativo*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mt-24"
        >

        </motion.div>
      </section>

      {/* Fragmentation Section */}
      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative z-10 w-full"
        >
          <motion.h2 variants={fadeUp} className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-20">
            Sua empresa utiliza <br /> <span className="font-[Fraunces] italic font-light text-white/40">sistemas demais.</span>
          </motion.h2>

          <div className="flex flex-col items-center w-full max-w-md mx-auto relative">
            <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#060606] to-transparent z-10 pointer-events-none mix-blend-plus-darker  " />
            
            {[
              "Excel", "Google Drive", "WhatsApp", "ERP Legado", 
              "CRM de Vendas", "Power BI", "Notion", "ClickUp", 
              "E-mails Corporativos", "Inúmeras Planilhas"
            ].map((tool) => (
              <motion.div
                key={tool}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="flex flex-col items-center w-full relative z-0"
              >
                <div className="px-8 py-3 w-full flex justify-center opacity-40">
                  <span className="font-[Inter] text-xs sm:text-sm tracking-[0.2em] uppercase text-white/60">
                    {tool}
                  </span>
                </div>
                <div className="h-4 w-px bg-white/10 my-1 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/20" />
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 } }
              }}
              className="relative w-full mt-4 z-20"
            >
              <div className="relative w-full bg-[#030303] border-1 border-white rounded-xl flex justify-center items-center py-6 px-10">
                <span className="font-[Inter] text-base sm:text-lg tracking-[0.4em] uppercase font-bold text-white">
                  Atlas
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Clarification Section */}
      <section className="py-32 sm:py-48 px-6 sm:px-12 w-full bg-[#050505] border-y border-white/[0.05] relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex-1 space-y-6"
          >
            <motion.p variants={fadeUp} className="font-[Inter] text-3xl sm:text-5xl font-light text-white/30 line-through decoration-white/20">
              Atlas não é um ERP.
            </motion.p>
            <motion.p variants={fadeUp} className="font-[Inter] text-3xl sm:text-5xl font-light text-white/30 line-through decoration-white/20">
              Atlas não é gestor de tarefas.
            </motion.p>
            <motion.p variants={fadeUp} className="font-[Inter] text-3xl sm:text-5xl font-light text-white/30 line-through decoration-white/20">
              Atlas não é apenas software.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex-1"
          >
            <p className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              Atlas é onde <br /> <span className="font-[Fraunces] italic font-light text-white/40">toda a operação</span> <br /> da empresa acontece.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pages & Views Grid */}
      <section className="py-32 sm:py-48 px-6 sm:px-12 relative w-full max-w-[1400px] mx-auto z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-24"
        >
          <motion.h2 variants={fadeUp} className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1]">
            Onde o trabalho <br />
            <span className="font-[Fraunces] italic font-light text-white/40">acontece.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-base sm:text-lg font-light text-white/50 max-w-xl mx-auto">
            Todo módulo do Atlas é construído por páginas modulares e widgets configuráveis adaptados à sua operação.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pageTypes.map((page) => (
            <motion.div
              key={page.name}
              variants={fadeUp}
              className="bg-[#050505] rounded-[24px] overflow-hidden border border-white/[0.05] shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col h-[320px]"
            >
              <div className="h-[180px] w-full bg-[#080808] p-5 relative flex flex-col gap-2 border-b border-white/[0.05]">
                <div className="flex gap-1.5 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 w-full flex items-center justify-center font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-white/20 border border-dashed border-white/10 rounded-lg">
                  Visão: {page.name}
                </div>
              </div>
              <div className="flex-1 bg-[#050505] p-6 flex flex-col justify-center">
                <h3 className="font-[Inter] text-base font-medium tracking-tight text-white">{page.name}</h3>
                <p className="text-xs font-light text-white/40 mt-1.5 leading-relaxed">{page.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* NEW: Workspace, Customization & Functional Depth Section (From detailed specs) */}
      <section className="py-32 sm:py-48 px-6 sm:px-12 w-full bg-[#050505] border-y border-white/[0.05] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-24"
          >
            <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4 block">
              Arquitetura Multi-Tenant & Customização
            </span>
            <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white mb-6">
              Feito para a sua empresa. <br />
              <span className="font-[Fraunces] italic font-light text-white/40">Sob medida para você.</span>
            </h2>
            <p className="text-base sm:text-lg font-light text-white/50 leading-relaxed">
              O Atlas combina o isolamento de dados por empresa com uma flexibilidade radical de personalização individual e organizacional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-[28px] bg-[#030303] border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] mb-6 text-white">
                  <Sliders className="w-5 h-5 text-white/70" />
                </div>
                <h3 className="font-[Inter] text-xl font-medium text-white mb-3">Identidade & Accent Color</h3>
                <p className="text-sm font-light text-white/50 leading-relaxed mb-6">
                  Personalize o workspace com a logo, ícones e escolha cores de destaque (Accent Color) que alimentam toda a identidade visual do ambiente.
                </p>
              </div>
              <div className="pt-6 border-t border-white/[0.05] flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="w-3 h-3 rounded-full bg-purple-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-[JetBrains_Mono] text-white/40 uppercase tracking-widest ml-auto">Dinâmico</span>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-[28px] bg-[#030303] border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] mb-6 text-white">
                  <Shield className="w-5 h-5 text-white/70" />
                </div>
                <h3 className="font-[Inter] text-xl font-medium text-white mb-3">Governança & RBAC</h3>
                <p className="text-sm font-light text-white/50 leading-relaxed mb-6">
                  Controle cirúrgico de acessos por usuário, equipes, páginas ou módulos. Defina papéis de Proprietário, Administrador ou Membro com total segurança.
                </p>
              </div>
              <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between">
                <span className="text-[10px] font-[JetBrains_Mono] text-white/40 uppercase tracking-widest">Multi-tenancy</span>
                <span className="text-xs font-medium text-emerald-400">Isolado & Seguro</span>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-[28px] bg-[#030303] border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] mb-6 text-white">
                  <FolderTree className="w-5 h-5 text-white/70" />
                </div>
                <h3 className="font-[Inter] text-xl font-medium text-white mb-3">Módulos Ativáveis</h3>
                <p className="text-sm font-light text-white/50 leading-relaxed mb-6">
                  Evite ambientes poluídos. Ative ou desative módulos como CRM, Financeiro, Wiki e Projetos conforme as necessidades reais da sua operação.
                </p>
              </div>
              <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between">
                <span className="text-[10px] font-[JetBrains_Mono] text-white/40 uppercase tracking-widest">Sidebar Dinâmica</span>
                <span className="text-xs font-medium text-white/80">Configurável</span>
              </div>
            </motion.div>
          </div>

          <div className="mt-12">
            <MockupPlaceholder title="Modal de Configurações do Workspace (Settings & Theme)" aspect="video" />
          </div>
        </div>
      </section>

      {/* Backbone Hierarchy Section */}
      <section className="py-32 sm:py-48 px-6 sm:px-12 w-full relative bg-[#030303] border-b border-white/[0.05] z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white text-center mb-24"
          >
            A espinha dorsal da operação.
          </motion.h2>

          <div className="w-full flex flex-col items-center">
            {[
              "Empresa & Workspace", 
              "Equipes & Departamentos", 
              "Páginas, Databases & Blocos", 
              "Projetos, Metas & Kanban", 
              "Automações & Histórico (Activity)", 
              "Operação Centralizada"
            ].map((step, i, arr) => {
              const isLast = i === arr.length - 1;
              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center w-full max-w-lg"
                >
                  <div className="w-full px-8 py-5 bg-[#050505] border border-white/[0.1] rounded-[16px] flex items-center justify-center shadow-lg relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="font-[Inter] text-xs sm:text-sm font-medium tracking-[0.2em] text-white uppercase text-center relative z-10">
                      {step}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="h-10 w-px bg-white/[0.1] my-2" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* National Localization & Pricing Value Section */}
      <section className="py-32 sm:py-48 px-6 sm:px-12 w-full relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="p-8 sm:p-14 bg-[#050505] border border-white/[0.05] rounded-[32px] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] blur-3xl rounded-full" />
            <h2 className="font-[Inter] text-3xl sm:text-4xl font-medium tracking-tight text-white mb-6 relative z-10">
              Construído no Brasil.<br />
              <span className="font-[Fraunces] italic font-light text-white/40">Para o Brasil.</span>
            </h2>
            <p className="text-base sm:text-lg font-light text-white/50 leading-relaxed mb-10 relative z-10">
              O Atlas foi desenvolvido considerando idioma, suporte, legislação, fuso horário e atendimento local. Sem adaptações forçadas de ferramentas estrangeiras.
            </p>
            <div className="space-y-5 relative z-10">
              {["Português nativo e natural", "Suporte nacional humanizado", "Legislação e tributação em mente", "Fuso horário alinhado"].map((item) => (
                <div key={item} className="flex items-center gap-4 border-b border-white/[0.05] pb-5">
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                  <span className="text-base font-light text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="p-8 sm:p-14 bg-[#050505] border border-white/[0.05] rounded-[32px] shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/[0.02] blur-3xl rounded-full" />
            <div className="relative z-10">
              <h2 className="font-[Inter] text-3xl sm:text-4xl font-medium tracking-tight text-white mb-6">
                Chega de pagar <br /> <span className="font-[Fraunces] italic font-light text-white/40">em dólar.</span>
              </h2>
              <p className="text-base sm:text-lg font-light text-white/50 leading-relaxed mb-12">
                Enquanto plataformas internacionais aumentam preços devido à variação cambial e IOF, o Atlas garante previsibilidade financeira com preços justos em reais.
              </p>
            </div>
            
            <div className="p-8 bg-[#030303] border border-white/[0.08] rounded-[24px] relative z-10">
              <div className="flex justify-between items-end border-b border-white/[0.08] pb-6 mb-6">
                <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.1em] uppercase text-white/40">SaaS Comum</span>
                <div className="text-right">
                  <span className="block text-sm text-white/60 font-light mb-1.5">Licença + IOF + Câmbio</span>
                  <span className="font-[JetBrains_Mono] text-[9px] text-white/30 uppercase tracking-widest">Valor Volátil</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-[Inter] text-2xl font-medium text-white">Atlas</span>
                <span className="font-[JetBrains_Mono] text-xs uppercase tracking-widest font-medium text-white/80">Preço Fixo BRL</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 sm:py-48 px-6 sm:px-12 w-full bg-[#030303] relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center mb-24">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[10px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-white/60 mb-12">
            A Filosofia
          </span>
        </div>

        <div className="max-w-3xl mx-auto space-y-20 relative z-10">
          {[
            { num: "I", title: "Princípio da Permanência", desc: "Projetado para durar décadas, não apenas para o próximo ciclo de mercado." },
            { num: "II", title: "Princípio da Operação", desc: "A empresa vem antes da tecnologia. O software deve se moldar ao negócio." },
            { num: "III", title: "Princípio do Contexto", desc: "Dados isolados geram ruído. Toda informação exige contexto e hierarquia." },
            { num: "IV", title: "Princípio da Engenharia", desc: "A verdadeira simplicidade exige um esforço colossal de arquitetura invisível." },
          ].map((item) => (
            <motion.div
              key={item.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="text-center relative p-10 rounded-[32px] bg-[#050505] border border-white/[0.05] shadow-xl"
            >
              <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/30 block mb-4">
                Princípio {item.num}
              </span>
              <h3 className="font-[Inter] text-2xl sm:text-3xl font-medium tracking-tight text-white mb-5">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg font-light text-white/50 leading-relaxed max-w-xl mx-auto">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-32 sm:py-48 px-6 sm:px-12 flex flex-col items-center justify-center text-center relative z-10 border-t border-white/[0.05]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative z-10 w-full max-w-4xl flex flex-col items-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[Inter] text-4xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.02em] text-white mb-8"
          >
            A infraestrutura digital <br />
            <span className="font-[Fraunces] italic font-light text-white/40">começa aqui.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl font-light text-white/50 max-w-2xl mx-auto leading-relaxed mb-16"
          >
            Memória institucional, execução fluida e inteligência centralizada. Assuma o controle total dos dados da sua empresa.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-24 flex flex-col sm:flex-row gap-4">
            <a
              href="https://atlas.fifteenmiles.tech/register"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-black font-semibold text-sm tracking-tight hover:scale-[0.98] hover:bg-white/90 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              <span>Criar Workspace</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-[#050505] border border-white/[0.1] text-white font-medium text-sm tracking-tight hover:bg-white/[0.05] transition-colors"
            >
              Solicitar demonstração
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="pt-12 flex flex-col items-center gap-3 border-t border-white/[0.05] w-full max-w-xs relative z-10"
        >
          <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase font-medium text-white/80">
            Atlas OS
          </span>
          <span className="font-[JetBrains_Mono] text-[9px] tracking-[0.2em] uppercase text-white/30">
            Infraestrutura de Precisão
          </span>
        </motion.div>
      </section>
    </div>
  );
}