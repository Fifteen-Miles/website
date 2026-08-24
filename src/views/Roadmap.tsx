'use client';

import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Compass, Zap, Target, Layers, Cpu, GitBranch, Sparkles, ShieldCheck, ArrowRight, Database } from "lucide-react";
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

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white font-[Inter] selection:bg-white/20">
      <Seo title="Roadmap — Fifteen Miles" description="O horizonte tecnológico da Fifteen Miles. Evolução estratégica de nossas plataformas." path="/roadmap" />

      {/* Hero */}
      <section className="pt-44 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-[#050505] text-[10px] font-[JetBrains_Mono] tracking-[0.25em] uppercase text-white/70">
              <Compass className="w-3 h-3" /> Horizonte MMXXVI
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-6xl sm:text-8xl font-medium tracking-[-0.04em] mb-10 leading-[0.9]">
            A evolução da <br/>
            <span className="font-[Fraunces] italic font-light text-white/40">infraestrutura.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/50 font-light max-w-xl">
            Transparência total sobre a arquitetura que estamos construindo. Do núcleo operacional à inteligência autônoma.
          </motion.p>
        </motion.div>
      </section>

      {/* Roadmap Grid */}
      <section className="pb-32 px-6 max-w-7xl mx-auto space-y-24">
        
        {/* Phase 1 */}
        <RoadmapEra 
          tag="Fase 01 · Presente" 
          title="Consolidação da Base" 
          description="Foco total na resiliência e no refinamento técnico da infraestrutura principal."
        >
          <div className="grid md:grid-cols-3 gap-6">
            <RoadmapCard icon={<Layers />} title="Atlas OS Core" desc="Refinamento da arquitetura multitenant e isolamento de recursos." status="Estável" />
            <RoadmapCard icon={<Cpu />} title="API Gateway II" desc="Redesenho da camada de comunicação externa para latência sub-10ms." status="Em Progresso" />
            <RoadmapCard icon={<ShieldCheck />} title="Compliance Suite" desc="Módulos de auditoria automatizada para conformidade internacional." status="Em Progresso" />
          </div>
        </RoadmapEra>

        {/* Phase 2 */}
        <RoadmapEra 
          tag="Fase 02 · 2027" 
          title="Protocolo Hermes" 
          description="Expansão da capacidade de integração e automação entre ecossistemas."
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RoadmapCard icon={<GitBranch />} title="Hermes Messaging" desc="Protocolo proprietário de mensageria assíncrona para sistemas desacoplados." status="Planejado" />
            <RoadmapCard icon={<Database />} title="Marketplace SDK" desc="Ferramentas completas para parceiros construírem extensões no Atlas OS." status="Conceito" />
            <RoadmapCard icon={<Zap />} title="Governance Engine" desc="Interface de controle granular para permissões de usuários e soberania de dados." status="Pesquisa" />
          </div>
        </RoadmapEra>

        {/* Phase 3 */}
        <RoadmapEra 
          tag="Fase 03 · Futuro" 
          title="Visão Athena" 
          description="A integração da inteligência autônoma na camada central de operações."
        >
          <div className="grid md:grid-cols-2 gap-6">
            <RoadmapCard icon={<Sparkles />} title="Athena Intelligence" desc="Camada de IA autônoma para análise preditiva de dados corporativos e insights em tempo real." status="Roadmap" />
            <RoadmapCard icon={<Cpu />} title="Zero-Touch Ops" desc="Automação total de fluxos repetitivos via orquestração cognitiva." status="Roadmap" />
          </div>
        </RoadmapEra>

      </section>

      {/* Footer */}
      <section className="py-24 border-t border-white/[0.08] text-center px-6">
        <h2 className="text-2xl font-medium mb-6">Deseja colaborar com nossa visão?</h2>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
          Entrar em contato <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}

const RoadmapEra = ({ tag, title, description, children }: { tag: string, title: string, description: string, children: React.ReactNode }) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
    <motion.div variants={fadeUp} className="mb-12 border-l border-white/20 pl-6">
      <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2 block">{tag}</span>
      <h2 className="text-4xl font-medium mb-4">{title}</h2>
      <p className="text-white/50 text-lg">{description}</p>
    </motion.div>
    {children}
  </motion.div>
);

const RoadmapCard = ({ icon, title, desc, status }: { icon: React.ReactNode, title: string, desc: string, status: string }) => (
  <motion.div variants={fadeUp} className="p-8 rounded-[24px] bg-[#050505] border border-white/[0.08] hover:border-white/20 transition-all group">
    <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <div className="flex justify-between items-start mb-4">
      <h4 className="font-medium text-lg">{title}</h4>
      <span className="text-[9px] uppercase tracking-wider text-white/30">{status}</span>
    </div>
    <p className="text-sm text-white/50 font-light leading-relaxed">{desc}</p>
  </motion.div>
);