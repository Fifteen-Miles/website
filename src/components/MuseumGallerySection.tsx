'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Shield,
  ArrowRight,
  Building,
  Layers,
  type LucideIcon,
} from "lucide-react";

type CorporatePillar = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
  icon: LucideIcon;
};

const pillars: CorporatePillar[] = [
  {
    id: "engineering",
    tag: "ENGENHARIA",
    title: "Código construído para durar décadas.",
    subtitle: "Rigor arquitetônico sobre velocidade.",
    description: "Na Fifteen Miles, tratamos software como infraestrutura crítica. Não adotamos modismos; construímos bases sólidas para garantir que os sistemas operem com estabilidade inabalável ao longo dos anos.",
    metrics: [
      { label: "Padrão", value: "Clean Arch" },
      { label: "Manutenção", value: "Sustentável" },
      { label: "Foco", value: "Longo Prazo" },
    ],
    icon: Layers,
  },
  {
    id: "identity",
    tag: "PRESENÇA",
    title: "Software de excelência, feito no Brasil.",
    subtitle: "Desenvolvimento local. Padrão global.",
    description: "Nascemos no Ceará com o objetivo de entregar às empresas brasileiras o mesmo nível de infraestrutura exigido globalmente, mas adaptado à nossa realidade operacional e financeira.",
    metrics: [
      { label: "Sede", value: "Ceará, BR" },
      { label: "Cobrança", value: "Em Reais (R$)" },
      { label: "Atendimento", value: "Local" },
    ],
    icon: Globe,
  },
  {
    id: "philosophy",
    tag: "MERCADO",
    title: "Parceria estratégica com nossos clientes.",
    subtitle: "Não somos apenas fornecedores.",
    description: "Entendemos que o sistema de uma empresa é seu coração pulsante. Operamos próximos aos nossos parceiros, garantindo que nossas soluções evoluam para resolver gargalos reais do dia a dia.",
    metrics: [
      { label: "Modelo", value: "SaaS B2B" },
      { label: "Foco", value: "PMEs" },
      { label: "Expansão", value: "Mútua" },
    ],
    icon: Building,
  },
  {
    id: "governance",
    tag: "GOVERNANÇA",
    title: "Soberania sobre a memória da empresa.",
    subtitle: "Seus dados pertencem à sua organização.",
    description: "Desenvolvemos nossos sistemas garantindo que o patrimônio de informações das empresas seja preservado em ambientes seguros, com políticas rígidas de acesso e total transparência.",
    metrics: [
      { label: "Privacidade", value: "By Design" },
      { label: "Soberania", value: "Total" },
      { label: "Acesso", value: "Granular" },
    ],
    icon: Shield,
  },
];

const companyStats = [
  { label: "Origem", value: "Brasil" },
  { label: "Modelo de Negócio", value: "B2B" },
  { label: "Estágio atual", value: "Em Evolução" },
  { label: "Infraestrutura", value: "Configurável" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export const MuseumGallerySection = () => {
  const [activeTab, setActiveTab] = useState(pillars[0].id);
  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];
  const IconComponent = currentPillar.icon;

  useEffect(() => {
    if (!document.getElementById("fm-type-system")) {
      const link = document.createElement("link");
      link.id = "fm-type-system";
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section className="relative w-full bg-white text-[#1D1D1F] py-20 sm:py-32 lg:py-48 font-[Inter] selection:bg-black/50 selection:text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24 lg:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-[#1D1D1F]/10 mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#1D1D1F]" />
            <span className="font-[JetBrains_Mono] text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#1D1D1F]/80 font-medium">
              A INSTITUIÇÃO FIFTEEN MILES
            </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-[Inter] text-3xl sm:text-5xl lg:text-7xl tracking-[-0.03em] font-medium leading-[1.1] text-[#1D1D1F] mb-6 sm:mb-8"
          >
            Construindo o futuro do software{" "}
            <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40 block sm:inline">
              corporativo.
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-base sm:text-xl lg:text-2xl text-[#86868B] font-light tracking-tight leading-relaxed max-w-2xl mx-auto px-4 sm:px-0"
          >
            Desenvolvemos infraestrutura digital rigorosa para empresas que buscam estabilidade, segurança e crescimento estruturado.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 py-8 sm:py-12 border-y border-[#1D1D1F]/10 mb-16 sm:mb-24"
        >
          {companyStats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="font-[JetBrains_Mono] text-[10px] sm:text-xs tracking-widest text-[#86868B] uppercase mb-1 sm:mb-2">
                {stat.label}
              </div>
              <div className="font-[Inter] text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#1D1D1F]">
                {stat.value}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tabs navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-16">
          {pillars.map((pillar) => {
            const isActive = pillar.id === activeTab;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`px-4 sm:px-6 py-2 sm:py-2 rounded-md text-xs sm:text-sm font-medium tracking-tight transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-[#1D1D1F] text-white/90 shadow-md"
                    : "bg-[#F5F5F7] text-[#1D1D1F]/50 hover:bg-[#1D1D1F]/10 hover:text-[#1D1D1F]/80"
                }`}
              >
                <span>{pillar.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Content Box */}
        <div className="bg-[#F5F5F7] border border-[#1D1D1F]/10 rounded-md p-6 sm:p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-bl from-[#1D1D1F]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10"
            >
              {/* Text Info (Takes up ~7 cols on large screens) */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white border border-[#1D1D1F]/10 flex items-center justify-center shadow-sm">
                    <IconComponent strokeWidth={1.5} className="w-4 h-4 sm:w-5 sm:h-5 text-[#1D1D1F]" />
                  </div>
                  <span className="font-[JetBrains_Mono] text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#86868B] font-medium">
                    {currentPillar.tag}
                  </span>
                </div>

                <h3 className="font-[Inter] text-2xl sm:text-3xl lg:text-4xl font-medium text-[#1D1D1F] tracking-tight mb-3 sm:mb-4 leading-snug">
                  {currentPillar.title}
                </h3>

                <h4 className="font-[Fraunces] italic font-light text-lg sm:text-xl text-[#1D1D1F]/60 mb-4 sm:mb-6">
                  {currentPillar.subtitle}
                </h4>

                <p className="text-[#86868B] text-base sm:text-lg font-light leading-relaxed mb-8 tracking-tight">
                  {currentPillar.description}
                </p>

                <div className="flex items-center">
                  <a 
                    href="/company" 
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2 rounded-md bg-[#1D1D1F] text-white font-medium text-xs opacity-100 sm:text-sm hover:opacity-80 transition-background duration-200 ease"
                  >
                    <span>Conhecer a Empresa</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Metrics Grid (Takes up ~5 cols on large screens) */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {currentPillar.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-[#1D1D1F]/10 p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm flex flex-col justify-between"
                  >
                    <div className="font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-[#86868B] mb-2">
                      {m.label}
                    </div>
                    <div className="font-[Inter] text-2xl sm:text-3xl font-medium tracking-tight text-[#1D1D1F]">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};