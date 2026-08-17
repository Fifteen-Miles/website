'use client';

import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Cloud, Globe, Activity, Server, Zap, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Seo from "../../components/Seo";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

function useDisplayFonts() {
  useEffect(() => {
    if (document.getElementById("fm-type-system")) return;
    const link = document.createElement("link");
    link.id = "fm-type-system";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
}

export default function CloudPage() {
  useDisplayFonts();

  return (
    <div className="relative min-h-screen bg-[#030303] text-white font-[Inter] selection:bg-white/20">
      <Seo title="Ambiente Cloud — Fifteen Miles" description="Infraestrutura de nuvem resiliente, distribuída globalmente e otimizada para sistemas corporativos de alta escala." path="/cloud" />

      {/* Hero */}
      <section className="pt-44 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-[#050505] text-[10px] font-[JetBrains_Mono] tracking-[0.25em] uppercase text-white/70">
              <Cloud className="w-3 h-3" /> Infraestrutura Perene
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-6xl sm:text-8xl font-medium tracking-[-0.04em] mb-10 leading-[0.9]">
            Cloud de <br/>
            <span className="font-[Fraunces] italic font-light text-white/40">Alta Escala.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/50 font-light max-w-xl">
            Uma infraestrutura distribuída globalmente, projetada para redundância máxima, baixa latência e resiliência absoluta.
          </motion.p>
        </motion.div>
      </section>

      {/* Grid de Capacidades */}
      <section className="pb-32 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <motion.div variants={fadeUp} className="p-8 sm:p-10 rounded-[28px] bg-[#050505] border border-white/[0.08]">
            <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-white">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-medium mb-4">99.999% Uptime</h3>
            <p className="text-white/50 font-light text-sm leading-relaxed">
              Arquitetura multirregional com failover automático, garantindo que sua operação nunca sofra interrupções.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="p-8 sm:p-10 rounded-[28px] bg-[#050505] border border-white/[0.08]">
            <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-white">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-medium mb-4">Edge Network</h3>
            <p className="text-white/50 font-light text-sm leading-relaxed">
              Processamento distribuído na borda para garantir latência mínima, independentemente da localização geográfica do usuário.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="p-8 sm:p-10 rounded-[28px] bg-[#050505] border border-white/[0.08]">
            <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-white">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-medium mb-4">Auto-Scaling</h3>
            <p className="text-white/50 font-light text-sm leading-relaxed">
              Elasticidade nativa que se adapta instantaneamente às demandas de tráfego, otimizando performance e custos.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="p-8 sm:p-10 rounded-[28px] bg-[#050505] border border-white/[0.08]">
            <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-white">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-medium mb-4">Zero Downtime</h3>
            <p className="text-white/50 font-light text-sm leading-relaxed">
              Deploys contínuos e migrações transparentes, garantindo que o sistema esteja sempre online durante atualizações.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="p-8 sm:p-10 rounded-[28px] bg-[#050505] border border-white/[0.08] lg:col-span-2">
            <div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-medium mb-4">Compliance & Soberania</h3>
            <p className="text-white/50 font-light text-sm leading-relaxed max-w-lg">
              Integração nativa com nossa camada de governança, assegurando que o armazenamento cumpra todas as regulações de soberania de dados.
            </p>
          </motion.div>

        </motion.div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 border-t border-white/[0.08] text-center px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-xl mx-auto">
          <h2 className="text-2xl font-medium mb-6">Precisa de escala enterprise?</h2>
          <p className="text-white/50 mb-10 text-base">Fale com nossos arquitetos de solução para desenhar um ambiente cloud sob medida para sua escala.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:opacity-90 transition-opacity">
            Consultar arquitetura <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}