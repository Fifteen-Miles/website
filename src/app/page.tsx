"use client";

import { motion } from "framer-motion";
import Hero from "../components/Home/Hero";
import { CorporatePillars } from "../components/Home/CorporatePillars";
import { AtlasInfrastructureRoom } from "../components/Home/AtlasInfrastructureRoom";
import { ChamberOfPhilosophy } from "../components/Home/ChamberOfPhilosophy";
import { HorizonThirtyYearsRoom } from "../components/Home/HorizonThirtyYearsRoom";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-white/20 selection:text-white overflow-x-hidden">
      <Seo 
        title="Fifteen Miles | Infraestrutura de Precisão" 
        description="A Fifteen Miles constrói plataformas corporativas configuráveis que centralizam operações em um ambiente único e de alta performance." 
        path="/" 
      />

      <Hero />

      <section className="relative w-full py-32 md:py-48 flex justify-center items-center bg-[#030303] border-t border-white/[0.03] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none" />
        
        <div 
          className="absolute inset-0 pointer-events-none opacity-40" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)', 
            backgroundSize: '60px 60px', 
            maskImage: 'linear-gradient(to bottom, black 10%, transparent 80%)', 
            WebkitMaskImage: 'linear-gradient(to bottom, black 10%, transparent 80%)' 
          }} 
        />

        <div className="max-w-[1200px] px-6 sm:px-12 mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/30 mb-8 block">
              Padrão Arquitetural
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-medium text-white leading-[1.05] tracking-[-0.04em] font-[Inter] max-w-[50rem]">
              Uma nova geração de <span className="text-white/40">infraestrutura empresarial.</span>
            </h2>
            
            <p className="mt-8 text-lg sm:text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-[48rem] tracking-tight">
              Desenvolvido para organizações que exigem centralizar sua operação em um único ambiente. <span className="font-[Fraunces] italic text-white/90">Governança, flexibilidade e precisão desde a base.</span>
            </p>
          </motion.div>
        </div>
      </section>

      <CorporatePillars />
      <AtlasInfrastructureRoom />
      <ChamberOfPhilosophy />
      <HorizonThirtyYearsRoom />
    </div>
  );
}