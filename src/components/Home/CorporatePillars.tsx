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
  { label: "Modelo", value: "B2B" },
  { label: "Estágio", value: "Evolutivo" },
  { label: "Infra", value: "Configurável" },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

function MonochromeAurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div
        className="absolute top-[20%] right-0 h-[600px] w-[800px] translate-x-1/3 rounded-full opacity-20"
        style={{
          background: "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 80%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}

function Grid3D() {
  return (
    <div className="absolute inset-0 pointer-events-none [perspective:1000px] overflow-hidden opacity-30">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10" />
      <div 
        className="absolute inset-x-0 bottom-0 h-[100vh] origin-bottom"
        style={{
          transform: "rotateX(75deg) translateY(150px) scale(2.5)",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to top, black 5%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to top, black 5%, transparent 60%)"
        }}
      />
    </div>
  );
}

export function CorporatePillars() {
  const [activeTab, setActiveTab] = useState(pillars[0].id);
  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];
  const IconComponent = currentPillar.icon;

  return (
    <section
      className="relative w-full py-24 sm:py-32 lg:py-44 font-[Inter] selection:bg-white/20 selection:text-white overflow-hidden bg-[#030303]"
    >
      <MonochromeAurora />
      <Grid3D />
      
      <div className="pointer-events-none absolute inset-4 sm:inset-6 border border-white/[0.03] rounded-[32px] z-20" />

      <div className="relative z-30 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 sm:mb-28">
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 mb-8 font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase"
            >
              <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md text-white/80 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                Fundamentos
              </span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="font-[Inter] font-medium text-[2.4rem] sm:text-5xl lg:text-[4.2rem] tracking-[-0.04em] leading-[1.05] text-white mb-8"
            >
              Construindo o futuro do software{" "}
              <span className="font-[Fraunces] italic font-light text-white/40 block sm:inline">
                corporativo.
              </span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-base sm:text-lg lg:text-xl font-light tracking-tight leading-relaxed max-w-2xl text-white/50"
            >
              Desenvolvemos infraestrutura digital rigorosa para empresas que
              buscam estabilidade, segurança e crescimento estruturado a longo prazo.
            </motion.p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="grid grid-cols-2 gap-px bg-white/[0.08] p-px rounded-[16px] overflow-hidden"
            >
              {companyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#050505] p-5 sm:p-6 transition-colors duration-300 hover:bg-[#0A0A0A]"
                >
                  <div className="font-[JetBrains_Mono] text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-3 text-white/30">
                    {stat.label}
                  </div>
                  <div className="font-[Inter] text-lg sm:text-xl font-medium tracking-tight text-white/90">
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div className="w-full">
              <div className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase mb-4 text-white/30">
                Os Quatro Pilares
              </div>
            </div>
          </div>

          {/* Seletor de Pilares */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] p-px rounded-[16px] overflow-hidden mb-12 sm:mb-16">
            {pillars.map((pillar, idx) => {
              const isActive = pillar.id === activeTab;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className="relative text-left p-5 sm:p-7 transition-all duration-300 group bg-[#050505] hover:bg-[#0A0A0A]"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
                      style={{ color: isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)" }}
                    >
                      {pillar.numeral}
                    </span>
                    <pillar.icon 
                      className="w-4 h-4 transition-colors duration-300" 
                      style={{ color: isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.2)" }} 
                    />
                  </div>
                  
                  <span
                    className="block font-[Inter] font-medium text-sm sm:text-base leading-snug tracking-tight mb-2"
                    style={{ color: isActive ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)" }}
                  >
                    {pillar.tag}
                  </span>

                  {/* Indicador de Atividade (Linha superior branca) */}
                  <span
                    className="absolute top-0 left-0 h-[2px] transition-all duration-300 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    style={{
                      width: isActive ? "100%" : "0%",
                      opacity: isActive ? 1 : 0
                    }}
                  />
                  
                  {/* Glow de fundo sutil quando ativo */}
                  <span
                    className="absolute inset-0 bg-white/[0.02] transition-opacity duration-300 pointer-events-none"
                    style={{ opacity: isActive ? 1 : 0 }}
                  />
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Área de Conteúdo do Pilar */}
        <div className="relative rounded-[24px] border border-white/[0.05] bg-[#050505]/80 backdrop-blur-xl shadow-2xl p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: EASE }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
            >
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.3em] text-white/30">
                    Pilar Operacional // {currentPillar.numeral}
                  </span>
                </div>

                <h3 className="font-[Inter] font-medium text-3xl sm:text-4xl lg:text-[2.6rem] tracking-[-0.03em] leading-[1.1] text-white mb-5">
                  {currentPillar.title}
                </h3>

                <h4 className="font-[Fraunces] italic font-light text-xl sm:text-2xl text-white/40 mb-8">
                  {currentPillar.subtitle}
                </h4>

                <p className="text-base sm:text-lg font-light leading-relaxed tracking-tight mb-12 max-w-2xl text-white/50">
                  {currentPillar.description}
                </p>

                <div className="flex items-center">
                  <a
                    href="/company"
                    className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-semibold tracking-tight text-black bg-white transition-all duration-200 hover:scale-[0.98] hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    Conhecer a Engenharia
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-[#030303] rounded-[16px] border border-white/[0.05] p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-[JetBrains_Mono] text-[9px] tracking-[0.25em] uppercase text-white/30">
                      Telemetria do Pilar
                    </span>
                    <IconComponent className="w-4 h-4 text-white/20" />
                  </div>
                  
                  <div className="flex flex-col gap-6">
                    {currentPillar.metrics.map((m) => (
                      <div key={m.label} className="flex flex-col gap-1.5 border-b border-white/[0.03] pb-6 last:border-0 last:pb-0">
                        <span className="font-[JetBrains_Mono] text-[10px] uppercase tracking-widest text-white/40">
                          {m.label}
                        </span>
                        <span className="font-[Inter] font-medium text-xl sm:text-2xl tracking-tight text-white/90">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}