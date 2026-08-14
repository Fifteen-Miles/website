"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Shield, ArrowRight, Building, Layers, type LucideIcon } from "lucide-react";

type CorporatePillar = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
  icon: LucideIcon;
  numeral: string;
};

const pillars: CorporatePillar[] = [
  {
    id: "engineering",
    tag: "ENGENHARIA",
    numeral: "I",
    title: "Código construído para durar décadas.",
    subtitle: "Rigor arquitetônico sobre velocidade.",
    description:
      "Na Fifteen Miles, tratamos software como infraestrutura crítica. Não adotamos modismos; construímos bases sólidas para garantir que os sistemas operem com estabilidade inabalável ao longo dos anos.",
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
    numeral: "II",
    title: "Software de excelência, feito no Brasil.",
    subtitle: "Desenvolvimento local. Padrão global.",
    description:
      "Nascemos no Ceará com o objetivo de entregar às empresas brasileiras o mesmo nível de infraestrutura exigido globalmente, mas adaptado à nossa realidade operacional e financeira.",
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
    numeral: "III",
    title: "Parceria estratégica com nossos clientes.",
    subtitle: "Não somos apenas fornecedores.",
    description:
      "Entendemos que o sistema de uma empresa é seu coração pulsante. Operamos próximos aos nossos parceiros, garantindo que nossas soluções evoluam para resolver gargalos reais do dia a dia.",
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
    numeral: "IV",
    title: "Soberania sobre a memória da empresa.",
    subtitle: "Seus dados pertencem à sua organização.",
    description:
      "Desenvolvemos nossos sistemas garantindo que o patrimônio de informações das empresas seja preservado em ambientes seguros, com políticas rígidas de acesso e total transparência.",
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

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const brass = "rgb(217 195 122)";
const ink = "#1D1D1F";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function CorporatePillars() {
  const [activeTab, setActiveTab] = useState(pillars[0].id);
  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];
  const IconComponent = currentPillar.icon;

  return (
    <section
      className="relative w-full py-24 sm:py-32 lg:py-44 font-[Inter] selection:bg-white/50 selection:text-white overflow-hidden"
      style={{ background: "#000000" }}
    >
      <div className="pointer-events-none absolute inset-3 sm:inset-5 border border-white/[0.06]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 sm:mb-24">
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="inline-flex items-center gap-3 mb-7 sm:mb-9"
            >
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="font-[Raleway] font-light text-[2.2rem] sm:text-5xl lg:text-[4.4rem] tracking-[-0.035em] leading-[1.05] sm:leading-[1.0] text-white mb-7 sm:mb-9"
            >
              Construindo o futuro do software{" "}
              <span className="font-[Fraunces] italic font-light" style={{ color: "rgba(255,255,255,0.45)" }}>
                corporativo
              </span>
              .
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-base sm:text-lg lg:text-xl font-light tracking-tight leading-relaxed max-w-2xl"
              style={{ color: "rgba(255,255,255,0.42)" }}
            >
              Desenvolvemos infraestrutura digital rigorosa para empresas que
              buscam estabilidade, segurança e crescimento estruturado.
            </motion.p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="grid grid-cols-2 gap-px bg-white/[0.07]"
            >
              {companyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0A0B0E] p-5 sm:p-6 border-t-2 transition-colors duration-300 hover:bg-[#0D0F13]"
                  style={{ borderTopColor: `rgba(217,195,122,0.35)` }}
                >
                  <div className="font-[JetBrains_Mono] text-[9px] sm:text-[10px] tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.38)" }}>
                    {stat.label}
                  </div>
                  <div className="font-[Fraunces] text-xl sm:text-2xl font-light tracking-tight text-white">
                    {stat.value}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div>
              <div className="font-[JetBrains_Mono] text-[10px] sm:text-[11px] tracking-[0.3em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
                Os Quatro Pilares
              </div>
              <div className="h-px w-full bg-white/[0.08]" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.08] mb-12 sm:mb-16">
            {pillars.map((pillar, idx) => {
              const isActive = pillar.id === activeTab;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className="relative text-left p-5 sm:p-7 transition-colors duration-300 group"
                  style={{ background: isActive ? "#101115" : "#0A0B0E" }}
                >
                  <span
                    className="block font-[Fraunces] text-xs tracking-[0.2em] mb-6 transition-colors duration-300"
                    style={{ color: isActive ? brass : "rgba(255,255,255,0.22)" }}
                  >
                    {pillar.numeral}
                  </span>
                  <span
                    className="block font-[JetBrains_Mono] text-[9px] sm:text-[10px] tracking-[0.25em] uppercase mb-2"
                    style={{ color: isActive ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)" }}
                  >
                    {pillar.tag}
                  </span>
                  <span
                    className="block font-[Fraunces] font-light text-base sm:text-lg leading-snug tracking-tight"
                    style={{ color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)" }}
                  >
                    {pillar.title}
                  </span>
                  <span
                    className="absolute bottom-0 left-0 h-[2px] transition-all duration-300"
                    style={{
                      width: isActive ? "100%" : "0%",
                      background: brass,
                    }}
                  />
                  <span
                    className="absolute right-5 sm:right-7 top-6 font-[JetBrains_Mono] text-[9px] tracking-[0.2em] transition-opacity duration-300"
                    style={{ color: brass, opacity: isActive ? 1 : 0 }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <div
          className="relative border-t border-white/[0.08] pt-12 sm:pt-16"
          style={{ borderTopColor: "rgba(217,195,122,0.2)" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
            >
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-3 mb-6 sm:mb-8">
                  <div
                    className="w-9 h-9 sm:w-11 sm:h-11 border flex items-center justify-center"
                    style={{ borderColor: "rgba(217,195,122,0.4)" }}
                  >
                    <IconComponent strokeWidth={1.5} className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: brass }} />
                  </div>
                  <span className="font-[JetBrains_Mono] text-[10px] sm:text-[11px] tracking-[0.25em] uppercase" style={{ color: brass }}>
                    Pilar {currentPillar.numeral} — {currentPillar.tag}
                  </span>
                </div>

                <h3 className="font-[Raleway] font-light text-2xl sm:text-3xl lg:text-4xl tracking-[-0.02em] leading-snug text-white mb-4">
                  {currentPillar.title}
                </h3>

                <h4 className="font-[Fraunces] italic font-light text-lg sm:text-xl mb-6 sm:mb-8" style={{ color: "rgba(255,255,255,0.48)" }}>
                  {currentPillar.subtitle}
                </h4>

                <p className="text-base sm:text-lg font-light leading-relaxed tracking-tight mb-10 sm:mb-12 max-w-2xl" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {currentPillar.description}
                </p>

                <div className="flex items-center">
                  <a
                    href="/company"
                    className="group inline-flex items-center gap-3 px-7 sm:px-8 py-3 sm:py-3.5 text-sm font-medium tracking-tight text-black transition-all duration-200 active:scale-[0.97] hover:bg-white/85"
                    style={{ background: "#EDE8DA" }}
                  >
                    <span style={{ color: ink }}>Conhecer a Empresa</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" style={{ color: ink }} />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-[JetBrains_Mono] text-[9px] sm:text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Indicadores do Pilar
                  </span>
                  <span className="h-px flex-1 ml-4" style={{ background: "rgba(217,195,122,0.25)" }} />
                </div>
                <div className="divide-y divide-white/[0.07] border-t border-white/[0.07]">
                  {currentPillar.metrics.map((m) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="flex items-baseline justify-between py-5 group"
                    >
                      <span className="font-[JetBrains_Mono] text-[10px] sm:text-[11px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {m.label}
                      </span>
                      <span
                        className="font-[Fraunces] font-light text-xl sm:text-2xl tracking-tight transition-colors duration-300"
                        style={{ color: brass }}
                      >
                        {m.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
