"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import { Check, Activity, Shield, Compass, KeyRound, Castle, Layers, ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
import Button from "@/components/ui/button";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function BlueprintGrid({ opacity = 0.045 }: { opacity?: number }) {
  return <div className="absolute inset-0 pointer-events-none bg-blueprint" style={{ opacity }} />;
}

const FEATURES = [
  "Fundação de planejamento unificada",
  "Motor de automação neural",
  "Telemetria em tempo real, sem véus",
];

const atlasLegend = [
  { label: "Governança Operacional", value: "Arquitetura Imutável" },
  { label: "Modelo de Conhecimento", value: "Memória Institucional" },
  { label: "Controle de Acesso", value: "Granularidade Estrita" },
];

const horizons = [
  {
    year: "Horizonte 2030",
    title: "Consolidação de Infraestrutura",
    desc: "Adoção do Atlas OS pelas instituições que priorizam soberania de dados sobre conveniência passageira.",
  },
  {
    year: "Horizonte 2040",
    title: "Resiliência Operacional",
    desc: "Sistemas em execução contínua e imutável, preservando histórico institucional de vinte anos.",
  },
  {
    year: "Horizonte 2050",
    title: "Padrão de Legado",
    desc: "Plataformas que permanecem legíveis, seguras e funcionais — atravessando gerações de operadores.",
  },
];

const doctrinePillars = [
  {
    id: "rigor",
    numeral: "01",
    title: "Rigor Estrutural",
    subtitle: "Código como infraestrutura crítica.",
    description: "Rejeitamos a conveniência das abstrações mágicas e frameworks efêmeros. O núcleo do Atlas é forjado com engenharia estrita, tipagem forte e arquitetura limpa, garantindo estabilidade sistêmica que não degrada com o passar das décadas.",
    metrics: [
      { label: "Arquitetura", value: "Clean & Hexagonal" },
      { label: "Estabilidade", value: "Zero-Degradation" },
      { label: "Revisão", value: "Peer-Reviewed Strict" }
    ],
    icon: Shield
  },
  {
    id: "soberania",
    numeral: "02",
    title: "Soberania de Dados",
    subtitle: "A memória corporativa inegociável.",
    description: "O patrimônio intelectual da sua empresa não deve residir em silos opacos de nuvens públicas descontroladas. Garantimos isolamento absoluto, onde a inteligência corporativa permanece estritamente sua, auditável e protegida por design.",
    metrics: [
      { label: "Isolamento", value: "Multi-tenant Lógico" },
      { label: "Governança", value: "Privacidade by Design" },
      { label: "Auditoria", value: "Registros Imutáveis" }
    ],
    icon: KeyRound
  },
  {
    id: "convergencia",
    numeral: "03",
    title: "Convergência Total",
    subtitle: "O fim dos feudos de informação.",
    description: "Destruímos a fragmentação. Construímos módulos que conversam entre si organicamente, formando um tecido neural único para todas as áreas da sua organização. Onde termina o limite de uma equipe, começa o contexto da outra.",
    metrics: [
      { label: "Ecossistema", value: "Módulos Interconectados" },
      { label: "Processos", value: "Event-Driven Native" },
      { label: "Interface", value: "Adaptação Dinâmica" }
    ],
    icon: Activity
  },
  {
    id: "oficio",
    numeral: "04",
    title: "Ofício & Origem",
    subtitle: "Engenharia global, forjada no Ceará.",
    description: "Desenhado e arquitetado no Brasil como uma resposta direta ao software importado genérico. Entregamos o mais alto rigor técnico internacional, adaptado à nossa realidade econômica, com previsibilidade e parceria direta.",
    metrics: [
      { label: "Engenharia", value: "In-house (Ceará)" },
      { label: "Modelo", value: "BRL (Previsível)" },
      { label: "Suporte", value: "Acesso Direto (L3)" }
    ],
    icon: Castle
  }
];

const philosophyPrinciples = [
  {
    numeral: "01",
    title: "Pensamento de Longo Prazo",
    desc: "Rejeitamos a cultura de lançamentos apressados e a aceitação pacífica da dívida técnica. Planejamos software para ciclos de vida de décadas, não de trimestres financeiros.",
  },
  {
    numeral: "02",
    title: "Rigor & Precisão",
    desc: "Cada contrato de API, modelo de dados e elemento de interface possui intenção clara e fundamentação formal. Na nossa engenharia, não há espaço para o acaso estrutural.",
  },
  {
    numeral: "03",
    title: "Elegância Operacional",
    desc: "Construímos interfaces que transmitem tranquilidade. Eliminamos implacavelmente o ruído visual, a sobrecarga cognitiva e os modismos efêmeros de design corporativo.",
  },
  {
    numeral: "04",
    title: "Execução Deliberada",
    desc: "Nunca velocidade cega. Nossos ecossistemas são erguidos com a disciplina exigida pelas grandes obras de arquitetura: fundações profundas e definitivas antes de qualquer fachada.",
  },
];

export default function Home() {
  const [activePillar, setActivePillar] = useState(doctrinePillars[0].id);

  return (
    <div className="min-h-screen overflow-x-hidden bg-parchment text-ink font-heading">
      <Seo
        title="Fifteen Miles | Tiramos a sua empresa da idade das trevas"
        description="A Fifteen Miles constrói plataformas corporativas configuráveis, projetadas para durar décadas — infraestrutura de precisão para empresas que recusam operar às escuras."
        path="/"
      />

      {/* Hero Section */}
      <section className="relative flex w-full h-[100dvh] flex-col items-center justify-center gap-10 px-6 pb-28 pt-36 sm:gap-12 sm:px-14 sm:pb-36 sm:pt-44">
        <Image src="/BigThree.png" alt="Logo" width={1400} height={900} priority className="h-auto w-full max-w-5xl select-none object-contain" draggable={false} />
        <Button href="/atlas" className="mt-5">Conheça o <strong>Atlas</strong></Button>
      </section>

      {/* Padrão Arquitetural */}
      <section className="relative py-32 sm:py-40 px-6 sm:px-14 border-t border-wine/[0.12] bg-parchment-alt">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative z-10 max-w-[1400px] mx-auto text-left">
          <h2 className="text-3xl sm:text-4xl md:text-[2.8rem] leading-[1.3] font-raleway font-regular text-ink">
            Infraestrutura digital para empresas que não podem operar em sistemas desconectados. <span className="text-wine/70 font-[500]">A Fifteen Miles desenvolve plataformas corporativas configuráveis que centralizam processos, informações, pessoas e decisões.</span>
          </h2>
          <div className="flex flex-row mt-10 gap-5">
            <Button href="/atlas" showArrow>Conheça o Atlas</Button>
            <Button href="/company" showArrow>Conheça a Fifteen Miles</Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: EASE }} className="relative z-10 max-w-[1500px] mx-auto mt-28 pt-12 border-t border-wine/[0.14]">
          <h3 className="text-center mb-8 text-[10px] uppercase font-mono tracking-[0.3em] text-ink/[0.45]">
            EMPRESAS QUE UTILIZAM NOSSAS SOLUÇÕES
          </h3>
          <div className="w-full flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
            <span className="opacity-70 hover:opacity-100 transition-opacity duration-500">
              <Image src="/eletra.png" alt="Eletra" width={150} height={150} className="pointer-events-none w-28 sm:w-32 h-auto" />
            </span>
          </div>
        </motion.div>
      </section>

      {/* É hora de iluminar */}
      <section className="relative w-full pt-36 sm:pt-44 pb-28 sm:pb-36 px-6 sm:px-14">
        <BlueprintGrid />

        <div className="relative z-10 max-w-[1600px] mx-auto flex flex-row justify-center items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }} className="mt-8 text-[2rem] sm:text-5xl md:text-[3.2rem] lg:text-[3.8rem] leading-[1.08] tracking-tight uppercase font-raleway">
              É hora de iluminar{" "}
              <span className="font-gothic text-wine normal-case inline-block text-[3.4rem] sm:text-7xl md:text-[5.2rem] lg:text-[5.8rem] font-normal">
                os seus processos.
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.22, ease: EASE }} className="mt-6 text-xl sm:text-2xl font-raleway text-wine uppercase font-normal">
              Projetado <span className="font-semibold">para</span> <span className="font-bold">durar</span> <span className="font-black">décadas.</span>
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: EASE }} className="mt-6 text-base sm:text-lg max-w-[36rem] leading-relaxed text-ink/[0.7] font-medium font-raleway">
              Infraestrutura corporativa forjada com o rigor de uma planta de engenharia e a solenidade de um códice antigo — para operações que não podem se dar ao luxo de desmoronar.
            </motion.p>

            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4, ease: EASE }} className="mt-8 flex flex-col gap-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm font-medium tracking-wide text-ink/[0.8]">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full shrink-0 border border-wine/[0.4] bg-wine/[0.05]">
                    <Check className="w-3 h-3 text-wine" />
                  </span>
                  {f}
                </li>
              ))}
            </motion.ul>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: EASE }} className="mt-9 flex items-center gap-2 w-fit rounded-md py-2 px-4 border border-wine/[0.18] bg-wine/[0.04]">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-wine">
                <Activity className="w-4 h-4 text-parchment" />
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-heading tracking-[0.2em] text-ink/[0.5]">
                  Métrica de Impacto
                </span>
                <span className="text-sm font-medium text-ink">
                  <strong className="text-wine font-gothic">+3.240</strong> <span className="text-wine font-heading">horas</span> resgatadas
                </span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.58, ease: EASE }} className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button onClick={() => (window.location.href = "https://atlas.fifteenmiles.tech/demo")} showArrow>Solicitar demonstração</Button>
              <Button onClick={() => (window.location.href = "https://atlas.fifteenmiles.tech/register")} variant="outline">Crie sua conta</Button>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.1, delay: 0.3, ease: EASE }} className="relative flex flex-col items-center justify-center pt-6 lg:pt-0">
            <div className="relative w-full max-w-[850px] scale-150 mx-auto flex items-center justify-center">
              <div className="relative w-full z-10 filter drop-shadow-[0_25px_35px_rgba(28,23,16,0.25)]">
                <Image src="/notebook.png" alt="Atlas OS no Notebook" width={1400} height={900} priority className="w-full h-auto object-contain select-none hover:translate-x-16 transition-transform duration-500" draggable={false} />
              </div>
              <div className="absolute -left-6 sm:-left-12 w-[32%] sm:w-[28%] z-20 filter drop-shadow-[0_20px_30px_rgba(28,23,16,0.35)]">
                <Image src="/phone.png" alt="Atlas OS no Celular" width={500} height={1000} priority className="w-full h-auto object-contain select-none transform hover:-translate-x-6 transition-transform duration-500" draggable={false} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Atlas OS - Core Architecture Section */}
      <section className="relative py-28 sm:py-40 px-6 sm:px-14 bg-parchment overflow-hidden border-t border-wine/[0.12]">
        <BlueprintGrid opacity={0.06} />

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-4xl">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-wine/40" />
              <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-wine font-semibold">Núcleo Arquitetural</span>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] font-display font-medium text-ink tracking-tight">
              Atlas OS. <br />
              <span className="text-wine italic font-light">Toda a operação.</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="mt-8 text-lg sm:text-xl leading-relaxed max-w-2xl font-light text-ink/75">
              O Atlas não é um aplicativo. É a infraestrutura central desenhada para servir como o sistema operacional de organizações que pensam no longo prazo.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mt-20 border border-wine/20 bg-white shadow-2xl relative">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-wine/20">
              <div className="relative p-10 sm:p-14 flex flex-col justify-between group hover:bg-parchment-alt transition-colors duration-500 overflow-hidden min-h-[420px]">
                <Layers className="absolute -bottom-10 -right-10 w-64 h-64 text-wine/[0.03] group-hover:text-wine/[0.06] transition-colors duration-700 pointer-events-none" strokeWidth={0.5} />
                <div>
                  <span className="block mb-6 text-[10px] font-mono text-wine/60 tracking-widest">01 // CONVERGÊNCIA</span>
                  <h3 className="text-3xl font-display font-medium text-ink mb-4">Fundação Unificada de Dados</h3>
                  <p className="text-sm sm:text-base leading-relaxed font-light text-ink/70 max-w-sm">
                    A maioria dos softwares força as empresas a se adaptarem a fluxos engessados. O Atlas fornece um ambiente configurável onde a inteligência corporativa é preservada de ponta a ponta.
                  </p>
                </div>
                <div className="mt-12 flex flex-col gap-3 relative z-10">
                  {atlasLegend.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 border-t border-wine/10 pt-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-wine/40" />
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase font-mono tracking-[0.2em] text-ink/40">{item.label}</span>
                        <span className="text-xs font-medium text-ink/90">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative p-10 sm:p-14 flex flex-col justify-between group hover:bg-parchment-alt transition-colors duration-500 overflow-hidden min-h-[420px]">
                <Castle className="absolute -bottom-10 -right-10 w-64 h-64 text-wine/[0.03] group-hover:text-wine/[0.06] transition-colors duration-700 pointer-events-none" strokeWidth={0.5} />
                <div>
                  <span className="block mb-6 text-[10px] font-mono text-wine/60 tracking-widest">02 // AUTONOMIA</span>
                  <h3 className="text-3xl font-display font-medium text-ink mb-4">Sem Dependências Frágeis</h3>
                  <p className="text-sm sm:text-base leading-relaxed font-light text-ink/70 max-w-sm">
                    Construído do zero para rodar de forma nativa e integrada, sem depender de integrações instáveis de terceiros que quebram com o tempo ou comprometem a estabilidade estrutural do sistema.
                  </p>
                </div>
                <div className="mt-12 inline-flex items-center gap-2 text-[10px] uppercase font-mono tracking-[0.2em] text-wine/80 relative z-10">
                  <span className="w-8 h-px bg-wine/30" />
                  Arquitetura Fechada
                </div>
              </div>

              <div className="relative p-10 sm:p-14 flex flex-col justify-between group hover:bg-parchment-alt transition-colors duration-500 overflow-hidden min-h-[420px]">
                <KeyRound className="absolute -bottom-10 -right-10 w-64 h-64 text-wine/[0.03] group-hover:text-wine/[0.06] transition-colors duration-700 pointer-events-none" strokeWidth={0.5} />
                <div>
                  <span className="block mb-6 text-[10px] font-mono text-wine/60 tracking-widest">03 // SOBERANIA</span>
                  <h3 className="text-3xl font-display font-medium text-ink mb-4">Soberania Institucional</h3>
                  <p className="text-sm sm:text-base leading-relaxed font-light text-ink/70 max-w-sm">
                    Seus dados nunca residem em silos opacos de nuvens públicas descontroladas. Através de nossa infraestrutura multi-tenant, sua empresa mantém o controle absoluto e imutável de sua inteligência.
                  </p>
                </div>
                <div className="mt-12 inline-flex items-center gap-2 text-[10px] uppercase font-mono tracking-[0.2em] text-wine/80 relative z-10">
                  <span className="w-8 h-px bg-wine/30" />
                  Isolamento de Dados
                </div>
              </div>
            </div>

            <div className="border-t border-wine/20 bg-wine/[0.03] p-6 sm:px-14 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-ink/50 w-full sm:w-auto">
                <Compass className="w-5 h-5 text-wine" strokeWidth={1.5} />
                <div className="flex items-end gap-[3px] flex-1 sm:w-48">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <span key={i} className={`w-px bg-wine/30 ${i % 6 === 0 ? 'h-3' : 'h-1.5'}`} />
                  ))}
                </div>
                <span className="text-[9px] uppercase font-mono tracking-[0.2em] whitespace-nowrap hidden sm:block">Escala 1:1</span>
              </div>
              <Button href="/atlas" showArrow className="w-full sm:w-auto px-8">Especificações do Atlas OS</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* A Filosofia da Permanência - NOVO LAYOUT EDITORIAL STICKY */}
      <section className="relative py-32 sm:py-48 px-6 sm:px-14 bg-white border-t border-wine/10">
        <BlueprintGrid opacity={0.03} />
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
          
          {/* Coluna Esquerda - Sticky */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-40">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
                <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
                  <span className="w-10 h-px bg-wine/30" />
                  <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-wine font-medium">Manifesto</span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-[4rem] leading-[1.05] font-display font-semibold text-ink tracking-tight mb-8">
                  A Filosofia da <br />
                  <span className="text-wine italic font-light">Permanência.</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-lg leading-relaxed font-light text-ink/70">
                  A Fifteen Miles não foi criada para lançar um produto de passagem. Foi fundada para edificar um legado absoluto na engenharia de software corporativo.
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Coluna Direita - Scrollável */}
          <div className="lg:w-2/3 flex flex-col">
            {philosophyPrinciples.map((item, idx) => (
              <motion.div 
                key={item.numeral}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className={`relative py-12 sm:py-16 flex flex-col sm:flex-row gap-6 sm:gap-12 border-wine/15 ${idx !== 0 ? 'border-t' : ''}`}
              >
                <div className="text-6xl sm:text-7xl font-display font-light text-wine/20 select-none shrink-0 sm:w-24">
                  {item.numeral}
                </div>
                <div className="flex-1 sm:mt-3">
                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-ink mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-base sm:text-lg leading-relaxed font-light text-ink/70 max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      {/* A Anatomia da Permanência */}
      <section className="relative py-32 sm:py-48 px-6 sm:px-14 border-t border-wine/10 bg-parchment overflow-hidden">
        <BlueprintGrid opacity={0.05} />
        
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 lg:mb-32">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-3xl">
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
                <span className="w-10 h-px bg-wine/30" />
                <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-wine font-medium">A Doutrina de Engenharia</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-[5rem] leading-[1.02] font-display font-semibold text-ink tracking-tight">
                A Anatomia da <br />
                <span className="text-wine italic font-light">Permanência.</span>
              </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-md pb-3">
              <p className="text-lg leading-relaxed font-light text-ink/70">
                Não construímos para o próximo trimestre. Forjamos infraestrutura digital projetada com rigor técnico para sustentar o crescimento da sua operação pelas próximas décadas.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-5 flex flex-col border-t border-wine/15 relative z-20">
              {doctrinePillars.map((pillar) => {
                const isActive = pillar.id === activePillar;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar.id)}
                    className="relative flex items-center justify-between w-full py-8 text-left border-b border-wine/15 group transition-all duration-500 cursor-pointer"
                  >
                    <div className="flex items-center gap-8">
                      <span className={`font-mono text-sm tracking-[0.2em] transition-colors duration-500 ${isActive ? "text-wine" : "text-ink/30 group-hover:text-ink/50"}`}>
                        {pillar.numeral}
                      </span>
                      <span className={`text-2xl sm:text-3xl font-display tracking-tight transition-all duration-500 ${isActive ? "text-ink font-medium" : "text-ink/40 font-light group-hover:text-ink/70"}`}>
                        {pillar.title}
                      </span>
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-all duration-500 ${isActive ? "text-wine opacity-100 translate-x-0" : "text-wine opacity-0 -translate-x-4"}`} />
                    
                    <span className={`absolute bottom-0 left-0 h-px bg-wine transition-all duration-700 ease-out ${isActive ? "w-full" : "w-0"}`} />
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7 relative min-h-[500px] lg:min-h-[550px] flex items-center">
              <AnimatePresence mode="wait">
                {doctrinePillars.map((pillar) => {
                  if (pillar.id !== activePillar) return null;
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.id}
                      initial={{ opacity: 0, filter: "blur(8px)", x: 20 }}
                      animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                      exit={{ opacity: 0, filter: "blur(8px)", x: -20 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 flex flex-col justify-center w-full"
                    >
                      <div className="absolute -top-10 -right-10 select-none pointer-events-none opacity-[0.03]">
                        <span className="text-[280px] sm:text-[350px] leading-none font-display font-bold text-wine italic">
                          {pillar.numeral}
                        </span>
                      </div>

                      <div className="relative z-10">
                        <Icon className="w-8 h-8 text-wine mb-8 opacity-80" strokeWidth={1.5} />
                        <h3 className="text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.1] font-display font-medium text-ink mb-6">
                          {pillar.subtitle}
                        </h3>
                        <p className="text-lg sm:text-xl leading-relaxed font-light text-ink/70 max-w-2xl mb-14">
                          {pillar.description}
                        </p>

                        <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-wine/15">
                          {pillar.metrics.map((metric, idx) => (
                            <div key={idx} className="flex flex-col gap-2">
                              <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-wine/70">
                                {metric.label}
                              </span>
                              <span className="text-sm font-medium text-ink">
                                {metric.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Visão de Longo Prazo */}
      <section className="relative py-32 sm:py-48 px-6 sm:px-14 border-t border-wine/10 bg-parchment-alt overflow-hidden">
        <BlueprintGrid opacity={0.04} />
        
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="max-w-4xl mb-24 sm:mb-32">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
                <span className="w-10 h-px bg-wine/30" />
                <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-wine font-medium">Visão de Longo Prazo</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.02] font-display font-semibold text-ink tracking-tight">
                Um horizonte de <br />
                <span className="text-wine italic font-light">três décadas.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-10 text-xl sm:text-2xl leading-relaxed max-w-3xl italic font-light font-display text-ink/70 border-l border-wine/30 pl-6">
                "Não fomos fundados para o próximo trimestre, nem para uma rodada efêmera. Fomos criados para erguer a infraestrutura digital dos próximos trinta anos."
              </motion.p>
            </motion.div>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="flex flex-col">
              {horizons.map((item, idx) => {
                const yearNumber = item.year.replace(/\D/g, "");
                return (
                  <motion.div variants={fadeUp} key={item.year} className="relative pl-8 sm:pl-16 py-12 sm:py-16 border-l border-wine/15 group">
                    <div className="absolute -left-[5px] top-16 sm:top-20 w-2.5 h-2.5 bg-parchment-alt border border-wine rounded-full group-hover:scale-150 transition-transform duration-500" />
                    
                    <div className="absolute top-0 sm:-top-4 left-8 sm:left-16 text-[6rem] sm:text-[9rem] font-display font-bold text-wine/[0.03] select-none pointer-events-none tracking-tighter">
                      {yearNumber}
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-wine font-semibold px-2 py-1 bg-wine/5 border border-wine/10 rounded">
                          Fase 0{idx + 1}
                        </span>
                        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-ink/40">
                          Placa VI.{idx + 1}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-4xl font-display font-medium text-ink mb-4 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-base sm:text-lg leading-relaxed font-light text-ink/70 max-w-2xl">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Convite Institucional */}
      <section className="relative py-32 sm:py-48 px-6 sm:px-14 bg-[#110E0D] overflow-hidden selection:bg-white">
        <div className="absolute inset-0 pointer-events-none bg-[url('/blueprint-pattern.svg')] bg-repeat opacity-[0.02] invert" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="flex flex-col items-center text-center">
            
            <h3 className="text-4xl sm:text-6xl lg:text-[5.5rem] leading-[1.05] max-w-5xl font-display font-medium text-parchment tracking-tight">
              Construa sua operação sobre <span className="italic text-white/60 font-light">fundações permanentes.</span>
            </h3>
            
            <p className="mt-8 text-lg sm:text-xl max-w-2xl leading-relaxed font-light text-parchment/60">
              Se sua organização busca estabilidade, centralização e visão de longo prazo, convidamos você a dialogar diretamente com nosso time de arquitetura e engenharia.
            </p>

            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
              <a 
                href="/contact" 
                className="w-full sm:w-auto px-10 py-5 bg-wine text-white text-xs font-mono uppercase tracking-[0.2em] hover:bg-wine/80 transition-colors duration-300 text-center cursor-pointer"
              >
                Iniciar Diálogo Institucional
              </a>
              <a 
                href="/atlas" 
                className="w-full sm:w-auto px-10 py-5 bg-transparent text-parchment text-xs font-mono uppercase tracking-[0.2em] border border-parchment/20 hover:bg-parchment/5 transition-colors duration-300 text-center flex items-center justify-center gap-3 cursor-pointer"
              >
                Explorar Atlas OS <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-32 pt-10 border-t border-parchment/10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] uppercase font-mono tracking-[0.3em] text-parchment/30">
              <span>Fifteen Miles Technologies</span>
              <span>Projetado para durar décadas</span>
              <span>MMXXVI</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}