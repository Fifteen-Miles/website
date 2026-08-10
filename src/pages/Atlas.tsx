'use client';

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
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

const pageTypes = [
  { name: "Dashboard", desc: "Métricas em tempo real" },
  { name: "Kanban", desc: "Fluxo visual de tarefas" },
  { name: "Planilha", desc: "Dados estruturados" },
  { name: "Wiki", desc: "Conhecimento compartilhado" },
  { name: "Tracker", desc: "Acompanhamento contínuo" },
  { name: "Calendário", desc: "Timeline e eventos" },
  { name: "CRM", desc: "Relacionamento e vendas" },
  { name: "Documentação", desc: "Padrões e procedimentos" },
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

export default function AtlasLanding() {
  useDisplayFonts();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-white text-[#1D1D1F] font-[Inter] overflow-hidden selection:bg-black/50 selection:text-white"
    >
      <Seo title="Atlas — Fifteen Miles" description="Atlas: plataforma operacional para centralizar pessoas, processos e dados em uma única interface" path="/atlas" />
      <div className="fixed inset-0 bg-[radial-gradient(#1D1D1F_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none z-0" />

      <section className="relative h-[100svh] w-full flex flex-col items-center justify-center px-6 sm:px-12 z-10">
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-[#1D1D1F]/10 text-[11px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-[#1D1D1F]/80">
              <Compass className="w-3.5 h-3.5" />
              <span>Capítulo I · A Fundação</span>
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="font-[Inter] text-5xl sm:text-7xl lg:text-[7.5rem] tracking-[-0.03em] font-medium leading-[1.02] text-[#1D1D1F]"
          >
            <motion.span variants={fadeUp} className="block">Projetado para</motion.span>
            <motion.span variants={fadeUp} className="block font-[Fraunces] italic font-light text-[#1D1D1F]/40">durar décadas.</motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 text-xl sm:text-2xl text-[#86868B] font-light tracking-tight max-w-2xl leading-relaxed"
          >
            Toda empresa merece operar em um único lugar.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-sm sm:text-base font-light text-[#86868B] max-w-xl leading-relaxed"
          >
            O Atlas reúne pessoas, processos, conhecimento e operações em uma plataforma erguida para resistir ao tempo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-5"
          >
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1D1D1F] text-white font-medium text-xs tracking-[0.15em] uppercase hover:bg-black transition-all group shadow-lg"
            >
              <span>Conheça o Atlas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F5F5F7] border border-[#1D1D1F]/10 text-[#1D1D1F] font-medium text-xs tracking-[0.15em] uppercase hover:bg-[#E8E8ED] transition-colors"
            >
              Solicitar demonstração
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1D1D1F]/5 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative z-10 w-full"
        >
          <motion.h2 variants={fadeUp} className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F] leading-[1.1] mb-20">
            Sua empresa utiliza <br /> <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">sistemas demais.</span>
          </motion.h2>

          <div className="flex flex-col items-center w-full max-w-md mx-auto">
            {[
              "Excel", "Google Drive", "WhatsApp", "ERP Legado", 
              "CRM de Vendas", "Power BI", "Notion", "ClickUp", 
              "E-mails Corporativos", "Inúmeras Planilhas", "Atlas"
            ].map((tool, i, arr) => {
              const isLast = i === arr.length - 1;
              return (
                <motion.div
                  key={tool}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="flex flex-col items-center w-full"
                >
                  <div className={`px-8 py-4 w-full flex justify-center backdrop-blur-md transition-all duration-300 ${isLast ? 'bg-[#1D1D1F] text-white rounded-2xl shadow-xl scale-105 mt-6 font-medium tracking-[0.2em]' : 'border border-[#1D1D1F]/10 bg-[#F5F5F7] text-[#86868B] rounded-xl hover:bg-[#E8E8ED]'}`}>
                    <span className="font-[Inter] text-xs sm:text-sm tracking-[0.15em] uppercase">
                      {tool}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="h-8 w-px bg-[#1D1D1F]/10 my-1.5 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#1D1D1F]/20" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 w-full bg-[#F5F5F7] border-y border-[#1D1D1F]/10 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex-1 space-y-6"
          >
            <motion.p variants={fadeUp} className="font-[Inter] text-3xl sm:text-5xl font-light text-[#86868B] line-through">
              Atlas não é um ERP.
            </motion.p>
            <motion.p variants={fadeUp} className="font-[Inter] text-3xl sm:text-5xl font-light text-[#86868B] line-through">
              Atlas não é um gestor de tarefas.
            </motion.p>
            <motion.p variants={fadeUp} className="font-[Inter] text-3xl sm:text-5xl font-light text-[#86868B] line-through">
              Atlas não é apenas um software.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex-1"
          >
            <p className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F] leading-[1.1]">
              Atlas é onde <br /> <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">toda a operação</span> <br /> da empresa acontece.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 relative w-full max-w-7xl mx-auto z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h2 variants={fadeUp} className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F] leading-[1.1]">
            Onde o trabalho <br />
            <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">acontece.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base sm:text-lg font-light text-[#86868B] max-w-xl mx-auto">
            Todo módulo do Atlas é construído por páginas e widgets configuráveis.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pageTypes.map((page, i) => (
            <motion.div
              key={page.name}
              variants={fadeUp}
              className="bg-white rounded-3xl overflow-hidden border border-[#1D1D1F]/10 shadow-sm hover:shadow-md transition-all duration-500 group flex flex-col h-[280px]"
            >
              <div className="h-[170px] w-full bg-[#F5F5F7] p-4 relative flex flex-col gap-2 border-b border-[#1D1D1F]/10">
                <div className="flex gap-1.5 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F]/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F]/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F]/20" />
                </div>
                
                <div className="flex-1 w-full relative">
                  {page.name === "Dashboard" && (
                    <div className="absolute inset-0 flex flex-col gap-2">
                      <div className="flex gap-2 h-1/2">
                        <div className="flex-[2] bg-white rounded-md shadow-sm border border-[#1D1D1F]/10" />
                        <div className="flex-[1] bg-white rounded-md shadow-sm border border-[#1D1D1F]/10" />
                      </div>
                      <div className="h-1/2 bg-white rounded-md shadow-sm border border-[#1D1D1F]/10" />
                    </div>
                  )}
                  {page.name === "Kanban" && (
                    <div className="absolute inset-0 flex gap-2">
                      {[1, 2, 3].map((col) => (
                        <div key={col} className="flex-1 bg-white/60 rounded-md border border-[#1D1D1F]/10 p-1.5 flex flex-col gap-1.5">
                          <div className="w-full h-3 bg-white rounded-sm shadow-sm" />
                          <div className="w-full h-6 bg-white rounded-sm shadow-sm" />
                        </div>
                      ))}
                    </div>
                  )}
                  {page.name === "Planilha" && (
                    <div className="absolute inset-0 flex flex-col gap-1">
                      {[1, 2, 3, 4, 5].map((row) => (
                        <div key={row} className="flex gap-1 h-4 w-full">
                          {[1, 2, 3, 4].map((col) => (
                            <div key={col} className={`flex-1 rounded-sm shadow-sm border border-[#1D1D1F]/10 ${row === 1 ? 'bg-[#1D1D1F]/5' : 'bg-white'}`} />
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                  {page.name === "Wiki" && (
                    <div className="absolute inset-0 flex flex-col gap-2 p-1">
                      <div className="w-3/4 h-3 bg-white rounded-sm shadow-sm border border-[#1D1D1F]/10" />
                      <div className="w-full h-2 bg-white/60 rounded-sm" />
                      <div className="w-5/6 h-2 bg-white/60 rounded-sm" />
                      <div className="w-full h-8 bg-[#1D1D1F]/5 rounded-sm border border-[#1D1D1F]/10 mt-1" />
                    </div>
                  )}
                  {page.name === "Tracker" && (
                    <div className="absolute inset-0 flex flex-col gap-2 pt-1">
                      {[1, 2, 3, 4].map((row) => (
                        <div key={row} className="flex items-center gap-3 w-full h-4 bg-white rounded-sm border border-[#1D1D1F]/10 px-2">
                          <div className={`w-2.5 h-2.5 rounded-[2px] ${row === 1 ? 'bg-[#1D1D1F]' : 'border border-[#1D1D1F]/20'}`} />
                          <div className="flex-1 h-1.5 bg-[#1D1D1F]/10 rounded-full" />
                        </div>
                      ))}
                    </div>
                  )}
                  {page.name === "Calendário" && (
                    <div className="absolute inset-0 flex flex-col gap-1">
                      <div className="grid grid-cols-7 gap-1 flex-1">
                        {Array.from({ length: 14 }).map((_, idx) => (
                          <div key={idx} className={`rounded-sm border border-[#1D1D1F]/10 ${idx === 4 || idx === 11 ? 'bg-[#1D1D1F]/10' : 'bg-white'}`} />
                        ))}
                      </div>
                    </div>
                  )}
                  {page.name === "CRM" && (
                    <div className="absolute inset-0 flex flex-col gap-2 pt-1">
                      {[1, 2, 3].map((row) => (
                        <div key={row} className="flex items-center gap-3 w-full h-7 bg-white rounded-md border border-[#1D1D1F]/10 px-2 shadow-sm">
                          <div className="w-3.5 h-3.5 rounded-full bg-[#1D1D1F]/10" />
                          <div className="flex-1 flex flex-col gap-1">
                            <div className="w-1/2 h-1.5 bg-[#1D1D1F]/10 rounded-full" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {page.name === "Documentação" && (
                    <div className="absolute inset-0 flex flex-col gap-2 p-1">
                      <div className="w-1/2 h-3 bg-white rounded-sm shadow-sm border border-[#1D1D1F]/10" />
                      <div className="w-full h-1.5 bg-white/60 rounded-full mt-2" />
                      <div className="w-full h-1.5 bg-white/60 rounded-full" />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-center">
                <h3 className="font-[Inter] text-base font-medium tracking-tight text-[#1D1D1F]">{page.name}</h3>
                <p className="text-xs font-light text-[#86868B] mt-1">{page.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 w-full relative bg-[#F5F5F7] border-y border-[#1D1D1F]/10 z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F] text-center mb-20"
          >
            A espinha dorsal da operação.
          </motion.h2>

          <div className="w-full flex flex-col items-center">
            {["Empresa", "Workspace", "Setor", "Equipe", "Página", "Widgets", "Operação"].map((step, i, arr) => {
              const isLast = i === arr.length - 1;
              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center w-full max-w-sm"
                >
                  <div className="w-full px-8 py-5 bg-white border border-[#1D1D1F]/10 rounded-2xl flex items-center justify-center shadow-sm relative overflow-hidden">
                    <span className="font-[Inter] text-xs sm:text-sm font-medium tracking-[0.2em] text-[#1D1D1F] uppercase">
                      {step}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="h-8 w-px bg-[#1D1D1F]/10 my-1.5" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 w-full relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-20 text-center"
        >
          <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F] leading-[1.1]">
            Cada empresa trabalha <br /> de uma forma.
            <span className="block font-[Fraunces] italic font-light text-[#1D1D1F]/40 mt-2">O Atlas também.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Templates", desc: "Padronize a excelência uma vez, escale infinitamente pela organização." },
            { title: "Layouts", desc: "A interface se adapta ao processo, e não o contrário." },
            { title: "Widgets", desc: "Blocos modulares que constroem exatamente o que sua equipe precisa." },
            { title: "Campos", desc: "Estruture informações com o nível de detalhe que o seu negócio exige." },
            { title: "Permissões", desc: "Controle cirúrgico e granular sobre quem vê, edita ou aprova." },
            { title: "Automações", desc: "Fluxos invisíveis que operam enquanto sua equipe foca no essencial." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="p-8 sm:p-10 bg-[#F5F5F7] border border-[#1D1D1F]/10 rounded-3xl flex flex-col justify-between"
            >
              <h3 className="font-[Inter] text-xl font-medium tracking-tight text-[#1D1D1F] mb-4">{item.title}</h3>
              <p className="text-sm font-light text-[#86868B] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 w-full bg-[#F5F5F7] border-y border-[#1D1D1F]/10 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="p-8 sm:p-12 bg-white border border-[#1D1D1F]/10 rounded-3xl"
          >
            <h2 className="font-[Inter] text-3xl sm:text-4xl font-medium tracking-tight text-[#1D1D1F] mb-6">
              Construído no Brasil.<br />
              <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">Para empresas brasileiras.</span>
            </h2>
            <p className="text-base sm:text-lg font-light text-[#86868B] leading-relaxed mb-10">
              O Atlas foi desenvolvido considerando idioma, suporte, legislação, fuso horário e atendimento local. Sem adaptações forçadas de ferramentas estrangeiras.
            </p>
            <div className="space-y-4">
              {["Português nativo e natural", "Suporte nacional humanizado", "Legislação e tributação em mente", "Fuso horário alinhado"].map((item) => (
                <div key={item} className="flex items-center gap-4 border-b border-[#1D1D1F]/10 pb-4">
                  <div className="w-1.5 h-1.5 bg-[#1D1D1F] rounded-full" />
                  <span className="text-base font-light text-[#1D1D1F]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="p-8 sm:p-12 bg-white border border-[#1D1D1F]/10 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <h2 className="font-[Inter] text-3xl sm:text-4xl font-medium tracking-tight text-[#1D1D1F] mb-6">
                Chega de pagar <br /> <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">em dólar.</span>
              </h2>
              <p className="text-base sm:text-lg font-light text-[#86868B] leading-relaxed mb-10">
                Enquanto diversas plataformas internacionais aumentam seus preços devido à variação cambial, o Atlas mantém previsibilidade financeira com preços justos em reais.
              </p>
            </div>
            
            <div className="p-6 bg-[#F5F5F7] border border-[#1D1D1F]/10 rounded-2xl">
              <div className="flex justify-between items-end border-b border-[#1D1D1F]/10 pb-6 mb-6">
                <span className="font-[JetBrains_Mono] text-xs uppercase text-[#86868B]">Software comum</span>
                <div className="text-right">
                  <span className="block text-sm text-[#1D1D1F] font-light mb-1">Mensalidade + IOF + Câmbio</span>
                  <span className="font-[JetBrains_Mono] text-[10px] text-[#86868B] uppercase">Valor imprevisível</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-[Inter] text-xl font-medium text-[#1D1D1F]">Atlas</span>
                <span className="font-[Inter] text-base font-medium text-[#1D1D1F]/80">Preço fixo em Reais</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 w-full bg-black text-white relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center mb-24">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-[11px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-white/80 mb-12">
            A Filosofia
          </span>
        </div>

        <div className="max-w-4xl mx-auto space-y-28 relative z-10">
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
              className="text-center relative p-8 rounded-3xl bg-white/5 border border-white/10"
            >
              <span className="font-[JetBrains_Mono] text-xs tracking-[0.3em] uppercase text-white/50 block mb-3">
                Princípio {item.num}
              </span>
              <h3 className="font-[Inter] text-2xl sm:text-3xl font-medium tracking-tight text-white mb-4">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg font-light text-[#A8A399] leading-relaxed max-w-xl mx-auto">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative z-10 w-full max-w-4xl flex flex-col items-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F] mb-6"
          >
            A infraestrutura digital <br />
            <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">começa aqui.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl font-light text-[#86868B] max-w-2xl mx-auto leading-relaxed mb-16"
          >
            Não estamos construindo apenas mais um software. Estamos erguendo a base onde grandes empresas irão operar durante décadas.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-20">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1D1D1F] text-white font-medium text-xs tracking-[0.15em] uppercase hover:bg-black transition-all group shadow-lg"
            >
              <span>Solicitar demonstração</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="pt-12 flex flex-col items-center gap-2 border-t border-[#1D1D1F]/10 w-full max-w-xs relative z-10"
        >
          <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase font-medium text-[#1D1D1F]">
            Atlas
          </span>
          <span className="font-[JetBrains_Mono] text-[9px] tracking-[0.2em] uppercase text-[#86868B]">
            by Fifteen Miles
          </span>
        </motion.div>
      </section>
    </div>
  );
}