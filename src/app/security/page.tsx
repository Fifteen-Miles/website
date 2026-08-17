'use client';

import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Lock, Globe, Database, FileText, ArrowRight, Zap, RefreshCw } from "lucide-react";
import Link from "next/link";
import Seo from "../../components/Seo";

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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
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

export default function SecurityPage() {
  useDisplayFonts();

  return (
    <div className="relative min-h-screen bg-[#030303] text-white font-[Inter] selection:bg-white/20">
      <Seo title="Soberania de Dados — Fifteen Miles" description="Garantimos que seus dados permaneçam sob sua custódia absoluta. Arquitetura soberana e isolamento total." path="/security" />

      {/* Hero */}
      <section className="relative pt-44 pb-28 px-6 sm:px-12 z-10 text-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl text-[10px] font-[JetBrains_Mono] tracking-[0.25em] uppercase text-white/80">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Governança e Soberania</span>
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl lg:text-[7rem] tracking-[-0.04em] font-medium mb-10 leading-[1.02]">
            O dado é seu ativo. <br />
            <span className="font-[Fraunces] italic font-light text-white/40">Nós somos os guardiões.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl sm:text-2xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
            Em um mundo de nuvens compartilhadas, garantimos isolamento total, criptografia proprietária e soberania absoluta sobre suas informações.
          </motion.p>
        </motion.div>
      </section>

      {/* Grid de Pilares */}
      <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            { icon: Lock, title: "Isolamento Físico", desc: "Seus dados residem em instâncias logicamente segregadas. Nenhuma interferência de vizinhança." },
            { icon: Database, title: "Criptografia", desc: "Protocolos AES-256 de ponta a ponta, com chaves de gestão exclusivas do cliente." },
            { icon: Globe, title: "Geolocalização", desc: "Controle sobre o território onde seus dados são processados e armazenados (Compliance Regional)." },
            { icon: FileText, title: "Auditoria Imutável", desc: "Cada acesso é registrado em logs imutáveis, garantindo transparência total da linhagem do dado." },
            { icon: RefreshCw, title: "Portabilidade", desc: "A Fifteen Miles garante que seus dados são exportáveis em formatos abertos a qualquer momento." },
            { icon: Zap, title: "Conformidade Activa", desc: "Monitoramento contínuo contra vetores de ameaças, mantendo-se sempre à frente de auditorias." }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="p-8 rounded-[32px] bg-[#050505] border border-white/[0.08] hover:border-white/20 transition-all duration-500">
              <item.icon className="w-8 h-8 text-white mb-6" />
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-white/50 font-light leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight mb-8">Soberania não é um luxo.</h2>
          <p className="text-white/50 mb-10">É um requisito de sobrevivência para operações de alta escala no século XXI.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all">
            Falar com nossa engenharia <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}