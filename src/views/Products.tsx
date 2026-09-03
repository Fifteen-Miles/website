"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { 
  ArrowRight, 
  Cpu, 
  Check, 
  Terminal, 
  Castle, 
  Network, 
  Bot, 
  Database,
  Radio
} from "lucide-react";
import Seo from "@/components/Seo";
import Button from "@/components/ui/button";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const productsData = [
  {
    id: "atlas",
    tag: "A Fundação",
    name: "Atlas OS",
    title: "O sistema operacional configurável.",
    desc: "O Atlas reúne dados, processos, documentos, dashboards, equipes e permissões em uma fundação operacional que cada empresa pode configurar conforme sua forma de trabalhar. Ele organiza a operação sem exigir que todos os sistemas existentes sejam substituídos.",
    features: [
      "Configure módulos, páginas, campos, dashboards e fluxos conforme a operação evolui.",
      "Relacione tarefas, documentos, indicadores, decisões e histórico em um mesmo contexto.",
      "Governe acessos, responsabilidades e mudanças com rastreabilidade."
    ],
    specs: [
      { label: "Para que serve", value: "Centralizar e configurar a operação." },
      { label: "Funciona com", value: "Módulos, pessoas, dados e sistemas existentes." },
      { label: "Resultado", value: "Visibilidade, governança e continuidade." },
    ],
    ctaText: "Conhecer o Atlas",
    ctaLink: "/atlas",
    placa: "Placa III.A",
    renderVisual: () => (
      <div className="w-full h-full min-h-[300px] bg-white border border-wine/15 rounded-lg p-6 relative overflow-hidden flex flex-col">
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <Database className="w-48 h-48" />
        </div>
        <div className="flex items-center gap-3 mb-6 border-b border-wine/10 pb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-wine/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-wine/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-wine/30" />
          <span className="text-[10px] uppercase font-mono tracking-widest text-ink/40 ml-2">Kernel.sys</span>
        </div>
        <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-center">
          <div className="flex items-center justify-between p-3 border border-wine/10 bg-parchment-alt/50 rounded text-xs font-mono">
            <span className="text-ink/60">Data.Registry</span>
            <span className="text-emerald-600/80">Imutável</span>
          </div>
          <div className="flex items-center justify-between p-3 border border-wine/10 bg-parchment-alt/50 rounded text-xs font-mono">
            <span className="text-ink/60">Access.Control</span>
            <span className="text-emerald-600/80">Governança Ativa</span>
          </div>
          <div className="flex items-center justify-between p-3 border border-wine/10 bg-parchment-alt/50 rounded text-xs font-mono">
            <span className="text-ink/60">State.Machine</span>
            <span className="text-emerald-600/80">Configurável</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "hephaestus",
    tag: "O Motor",
    name: "Hephaestus",
    title: "Automação que entende o contexto.",
    desc: "O Hephaestus é o motor de automação do ecossistema Fifteen Miles. Ele conecta eventos, regras, APIs e agentes de IA para executar workflows rastreáveis, com limites, aprovações e histórico definidos pela empresa.",
    features: [
      "Orquestre processos entre Atlas, APIs e sistemas existentes.",
      "Use agentes de IA para classificar, encaminhar e executar tarefas repetitivas.",
      "Acompanhe cada execução com regras, permissões, logs e possibilidade de intervenção."
    ],
    specs: [
      { label: "Para que serve", value: "Automatizar e orquestrar workflows." },
      { label: "Funciona com", value: "Atlas, APIs, webhooks e regras." },
      { label: "Resultado", value: "Execução rápida, rastreável e consistente." },
    ],
    ctaText: "Conhecer as automações",
    ctaLink: "/hephaestus",
    placa: "Placa IV.H",
    renderVisual: () => (
      <div className="w-full h-full min-h-[300px] bg-[#1a1714] border border-wine/20 rounded-lg p-6 relative overflow-hidden flex flex-col text-parchment shadow-2xl">
        <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
          <Network className="w-48 h-48 text-white" />
        </div>
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
          <Terminal className="w-4 h-4 text-amber-200/70" />
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/50">Hephaestus_Node</span>
        </div>
        <div className="space-y-3 font-mono text-[11px] leading-relaxed relative z-10 flex-1 flex flex-col justify-end">
          <p className="text-white/40">{">"} Monitorando eventos do sistema...</p>
          <div className="p-3 border border-amber-200/20 bg-amber-200/5 rounded mt-2">
            <p className="text-amber-200/90 font-bold mb-1">Evento: Novo Contrato (ID: 8842)</p>
            <p className="text-amber-200/60 pl-2 border-l border-amber-200/30">Validação estrutural: <span className="text-emerald-400">Aprovada</span></p>
            <p className="text-amber-200/60 pl-2 border-l border-amber-200/30">Agente IA (Classificação): <span className="text-white/80">Risco Baixo</span></p>
            <p className="text-amber-200/60 pl-2 border-l border-amber-200/30">Delegação financeira: <span className="text-white/80">Pendente aprovação humana</span></p>
          </div>
          <p className="text-white/60 pt-2">{">"} Aguardando governança [Req_Fin_Auth]...</p>
          <p className="text-emerald-400/80">{">"} Execução registrada no log centralizado.</p>
        </div>
      </div>
    )
  },
  {
    id: "capture",
    tag: "Extensão Opcional",
    name: "Atlas Capture",
    title: "Eventos físicos no contexto da operação.",
    desc: "O Atlas Capture conecta estações e pontos físicos específicos ao Atlas para registrar apontamentos, tempos e eventos diretamente na operação. Não é necessário para usar o Atlas; é uma extensão para contextos que exigem coleta no ambiente físico.",
    features: [
      "Registre eventos com menos dependência de apontamentos manuais.",
      "Envie dados de campo para workflows, dashboards e históricos do Atlas.",
      "Use hardware dedicado apenas onde a operação realmente exigir."
    ],
    specs: [
      { label: "Para que serve", value: "Capturar eventos físicos específicos." },
      { label: "Funciona com", value: "Atlas e ambientes físicos selecionados." },
      { label: "Resultado", value: "Dados de campo mais precisos e oportunos." },
    ],
    ctaText: "Avaliar uma extensão física",
    ctaLink: "/contact",
    placa: "Placa V.C",
    renderVisual: () => (
      <div className="w-full h-full min-h-[300px] bg-white border border-wine/15 rounded-lg flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-parchment-alt/50" />
        
        <div className="relative z-10 w-64 h-40 bg-ink rounded-[10px] shadow-2xl border-4 border-ink p-1 flex flex-col justify-between overflow-hidden transform group-hover:scale-105 transition-transform duration-700">
          <div className="absolute top-0 inset-x-0 h-4 bg-white/5 flex items-center justify-end px-2">
            <Radio className="w-2.5 h-2.5 text-emerald-400 animate-pulse" />
          </div>
          <div className="pt-6 px-4">
            <span className="block text-[8px] uppercase font-mono tracking-widest text-white/40 mb-1">Station 04 - Execução</span>
            <span className="block text-3xl font-mono font-bold text-amber-300">02:44:19</span>
          </div>
          <div className="bg-white/10 p-2 flex items-center justify-between">
            <span className="text-[9px] font-mono text-white/60">Evento: Entrada de Lote</span>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400" />
          </div>
        </div>
      </div>
    )
  }
];

function BlueprintGrid({ opacity = 0.04 }: { opacity?: number }) {
  return <div className="absolute inset-0 pointer-events-none bg-blueprint" style={{ opacity }} />;
}

function Seal({ size = 100, spin = false }: { size?: number; spin?: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className={`relative shrink-0 select-none pointer-events-none ${spin ? "animate-seal-spin" : ""}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <circle cx="50" cy="50" r="47" fill="none" className="stroke-wine opacity-45" strokeWidth="1" />
        <circle cx="50" cy="50" r="39" fill="none" className="stroke-wine opacity-[0.28]" strokeWidth="0.5" />
        {mounted &&
          Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * Math.PI * 2;
            const long = i % 6 === 0;
            const r1 = 47;
            const r2 = long ? 41 : 44.5;
            return (
              <line
                key={i}
                x1={50 + r1 * Math.cos(angle)}
                y1={50 + r1 * Math.sin(angle)}
                x2={50 + r2 * Math.cos(angle)}
                y2={50 + r2 * Math.sin(angle)}
                className="stroke-wine"
                strokeWidth={long ? 1 : 0.5}
                opacity={long ? 0.55 : 0.28}
              />
            );
          })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center select-none font-gothic text-wine leading-none" style={{ fontSize: size * 0.32 }}>
        XV
      </div>
    </div>
  );
}

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden bg-parchment text-ink font-heading">
      <Seo title="Produtos | Fifteen Miles" description="O ecossistema definitivo de governança, automação IA e hardware para operações corporativas." path="/products" />

      {/* Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center px-6 sm:px-14 overflow-hidden border-b border-wine/10">
        <BlueprintGrid opacity={0.05} />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none overflow-hidden">
          <div className="text-[25vw] font-display font-bold leading-none tracking-tighter whitespace-nowrap">
            ECOSISTEMA
          </div>
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
              <span className="w-16 h-px bg-wine/30" />
              <Seal size={42} />
              <span className="w-16 h-px bg-wine/30" />
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl lg:text-[6rem] leading-[0.95] font-display font-medium text-ink tracking-tight mb-6">
              Infraestrutura para <br />
              <span className="text-wine italic font-light">a operação inteira.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg sm:text-xl font-light text-ink/70 leading-relaxed max-w-2xl mx-auto mb-10">
              A Fifteen Miles constrói uma fundação operacional, motores de automação e extensões especializadas para conectar dados, processos e pessoas em empresas que não podem depender de sistemas isolados.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] uppercase font-mono tracking-[0.2em] text-wine font-semibold bg-wine/5 px-6 py-3 rounded-full border border-wine/10">
              <span>Atlas OS <span className="font-light text-ink/40 ml-2">— fundação</span></span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-wine/30" />
              <span>Hephaestus <span className="font-light text-ink/40 ml-2">— automação</span></span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-wine/30" />
              <span>Extensões <span className="font-light text-ink/40 ml-2">— contextos específicos</span></span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Architecture Intro */}
      <section className="relative py-20 px-6 sm:px-14 bg-white border-b border-wine/10">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="max-w-3xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-display text-ink font-medium mb-6">
              Uma base comum. Diferentes formas de operar.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base sm:text-lg leading-relaxed font-light text-ink/75">
              O Atlas organiza os dados e a operação. O Hephaestus transforma regras e eventos em execução automatizada. Aplicações e extensões especializadas completam o ambiente conforme a realidade de cada empresa.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Ledger Layout */}
      <section className="relative w-full bg-white z-20">
        <div className="max-w-[1400px] mx-auto">
          {productsData.map((product, index) => {
            const isEven = index % 2 === 0;
            const isLast = index === productsData.length - 1;

            return (
              <div key={product.id} className={`relative flex flex-col lg:flex-row ${!isLast ? 'border-b border-wine/10' : ''}`}>
                
                {/* Text Column (Sticky Desktop) */}
                <div className={`w-full lg:w-1/2 p-10 sm:p-16 lg:p-24 ${isEven ? 'lg:border-r border-wine/10' : 'lg:order-2 lg:border-l border-wine/10'}`}>
                  <div className="lg:sticky lg:top-32">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
                      
                      <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                        <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-wine font-semibold bg-wine/5 px-3 py-1 rounded border border-wine/10">
                          {product.tag}
                        </span>
                        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-ink/40">
                          {product.placa}
                        </span>
                      </motion.div>

                      <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-display font-semibold text-ink tracking-tight mb-2">
                        {product.name}
                      </motion.h2>
                      <motion.h3 variants={fadeUp} className="text-2xl sm:text-3xl font-display italic font-light text-wine mb-6">
                        {product.title}
                      </motion.h3>

                      <motion.p variants={fadeUp} className="text-base sm:text-lg leading-relaxed font-light text-ink/75 mb-10">
                        {product.desc}
                      </motion.p>

                      <motion.ul variants={fadeUp} className="space-y-4 mb-12">
                        {product.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm font-medium tracking-wide text-ink/80">
                            <span className="mt-0.5 flex items-center justify-center w-4 h-4 rounded-full border border-wine/40 bg-wine/5 shrink-0">
                              <Check className="w-2.5 h-2.5 text-wine" />
                            </span>
                            {f}
                          </li>
                        ))}
                      </motion.ul>

                      <motion.div variants={fadeUp}>
                        <Button href={product.ctaLink} showArrow variant="outline" className="w-full sm:w-auto">
                          {product.ctaText}
                        </Button>
                      </motion.div>

                    </motion.div>
                  </div>
                </div>

                {/* Visual Column */}
                <div className={`w-full lg:w-1/2 p-10 sm:p-16 lg:p-24 bg-parchment-alt/30 flex flex-col justify-center ${isEven ? '' : 'lg:order-1'}`}>
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full">
                    
                    <div className="mb-12 shadow-xl rounded-lg">
                      {product.renderVisual()}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-wine/10">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex flex-col gap-2">
                          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-wine/70">{spec.label}</span>
                          <span className="text-sm font-medium text-ink leading-relaxed">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 sm:py-48 px-6 sm:px-14 bg-[#110E0D] overflow-hidden selection:bg-white">
        <div className="absolute inset-0 pointer-events-none bg-[url('/blueprint-pattern.svg')] bg-repeat opacity-[0.02] invert" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center text-center">
          <h3 className="mt-8 text-4xl sm:text-6xl lg:text-[4.5rem] leading-[1.05] max-w-4xl font-display font-medium text-parchment tracking-tight">
            Pronto para abandonar os <span className="italic text-white/50 font-light">sistemas estilhaçados?</span>
          </h3>
          
          <p className="mt-8 text-lg sm:text-xl max-w-2xl leading-relaxed font-light text-parchment/60">
            Comece pela parte da operação que mais precisa de clareza. Conheça o Atlas, entenda como o Hephaestus amplia os fluxos e avalie quais extensões fazem sentido para a sua realidade.
          </p>

          <p className="mt-8 text-sm font-mono text-white/40 max-w-xl mx-auto border border-white/10 p-4 rounded bg-white/5">
            Uma conversa inicial para entender sua operação, mapear o primeiro caso de uso e indicar a melhor combinação de plataforma, automação e extensões.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <a 
              href="/contact" 
              className="w-full sm:w-auto px-10 py-5 bg-wine text-white text-xs font-mono uppercase tracking-[0.2em] hover:bg-wine/80 transition-colors duration-300 text-center"
            >
              Agendar conversa de arquitetura
            </a>
            <a 
              href="/atlas" 
              className="w-full sm:w-auto px-10 py-5 bg-transparent text-parchment text-xs font-mono uppercase tracking-[0.2em] border border-parchment/20 hover:bg-parchment/5 transition-colors duration-300 text-center flex items-center justify-center gap-3"
            >
              Conhecer o Atlas <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-32 pt-10 border-t border-parchment/10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] uppercase font-mono tracking-[0.3em] text-parchment/30">
            <span>Fifteen Miles Technologies</span>
            <span>Software, Automação & Edge Computing</span>
            <span>MMXXVI</span>
          </div>
        </div>
      </section>
    </div>
  );
}