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
    <section className="relative w-full bg-white text-[#1D1D1F] py-32 sm:py-48 font-[Inter] selection:bg-black/50 selection:text-white">
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-20">

        <div className="text-center max-w-4xl mx-auto mb-24 lg:mb-36">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-[#1D1D1F]/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#1D1D1F]" />
            <span className="font-[JetBrains_Mono] text-[11px] tracking-[0.25em] uppercase text-[#1D1D1F]/80 font-medium">
              A INSTITUIÇÃO FIFTEEN MILES
            </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-[Inter] text-5xl sm:text-7xl lg:text-[5.5rem] tracking-[-0.03em] font-medium leading-[1.05] text-[#1D1D1F] mb-8"
          >
            Construindo o futuro do software{" "}
            <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">
              corporativo.
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-xl sm:text-2xl text-[#86868B] font-light tracking-tight leading-relaxed max-w-2xl mx-auto"
          >
            Desenvolvemos infraestrutura digital rigorosa para empresas que buscam estabilidade, segurança e crescimento estruturado.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-[#1D1D1F]/10 mb-28"
        >
          {companyStats.map((stat, idx) => (
            <div key={idx} className="text-center lg:text-left">
              <div className="font-[JetBrains_Mono] text-xs tracking-widest text-[#86868B] uppercase mb-2">
                {stat.label}
              </div>
              <div className="font-[Inter] text-3xl sm:text-4xl font-medium tracking-tight text-[#1D1D1F]">
                {stat.value}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {pillars.map((pillar) => {
            const isActive = pillar.id === activeTab;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`px-6 py-3.5 rounded-full text-sm font-medium tracking-tight transition-all duration-300 flex items-center gap-2.5 ${
                  isActive
                    ? "bg-[#1D1D1F] text-white shadow-md scale-105"
                    : "bg-[#F5F5F7] text-[#1D1D1F]/70 hover:bg-[#1D1D1F]/10 hover:text-[#1D1D1F]"
                }`}
              >
                <span>{pillar.tag}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-[#F5F5F7] border border-[#1D1D1F]/10 rounded-3xl p-8 sm:p-14 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#1D1D1F]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center relative z-10"
            >
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#1D1D1F]/10 flex items-center justify-center shadow-sm">
                    <IconComponent strokeWidth={1.5} className="w-5 h-5 text-[#1D1D1F]" />
                  </div>
                  <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] font-medium">
                    {currentPillar.tag}
                  </span>
                </div>

                <h3 className="font-[Inter] text-3xl sm:text-5xl font-medium text-[#1D1D1F] tracking-tight mb-4 leading-[1.1]">
                  {currentPillar.title}
                </h3>

                <h4 className="font-[Fraunces] italic font-light text-xl sm:text-2xl text-[#1D1D1F]/60 mb-6">
                  {currentPillar.subtitle}
                </h4>

                <p className="text-[#86868B] text-lg font-light leading-relaxed mb-10 tracking-tight max-w-xl">
                  {currentPillar.description}
                </p>

                <div className="flex items-center gap-4">
                  <a href="/company" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1D1D1F] text-white font-medium text-sm transition-transform hover:scale-105">
                    <span>Conhecer a Empresa</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {currentPillar.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className={`bg-white border border-[#1D1D1F]/10 p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between ${
                      idx === 2 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-[#86868B] mb-3">
                      {m.label}
                    </div>
                    <div className="font-[Inter] text-3xl sm:text-4xl font-medium tracking-tight text-[#1D1D1F]">
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