"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Cpu, Box, Check, Terminal, Layers, Activity, Castle, KeyRound, Compass, Wifi, Zap } from "lucide-react";
import Seo from "@/components/Seo";
import Button from "@/components/ui/button";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const FEATURES = [
  "Fundação de planejamento unificada",
  "Motor de automação neural",
  "Telemetria em tempo real, sem véus",
];

const HEPHAESTUS_FEATURES = [
  "Arquitetura modular de sensores corporativos",
  "Sincronização nativa de baixa latência com o Atlas OS",
  "Resiliência industrial para ambientes de alta exigência",
];

const CAPTURE_FEATURES = [
  "Registro físico de tempo sem fricção humana",
  "Display touch LCD interativo com controladores ESP32",
  "Transmissão bidirecional via webhooks em tempo real",
];

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const atlasLegend = [
  { label: "Governança Operacional", value: "Arquitetura Imutável" },
  { label: "Modelo de Conhecimento", value: "Memória Institucional" },
  { label: "Controle de Acesso", value: "Granularidade Estrita" },
];

const hephaestusLegend = [
  { label: "Classe de Dispositivo", value: "Hardware Proprietário" },
  { label: "Camada de Conexão", value: "IoT Industrial & Wi-Fi" },
  { label: "Escalabilidade", value: "Multi-estação Integrada" },
];

const captureLegend = [
  { label: "Tecnologia Base", value: "ESP32 & Touch LCD" },
  { label: "Latência de Envio", value: "Tempo Real (< 100ms)" },
  { label: "Objetivo Métrico", value: "Eliminação de Gargalos" },
];

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

function ChapterTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-wine/25 bg-wine/[0.03] font-mono text-[10px] uppercase tracking-[0.28em] text-wine shadow-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-wine" />
      {children}
    </span>
  );
}

function BlueprintGrid({ opacity = 0.04 }: { opacity?: number }) {
  return <div className="absolute inset-0 pointer-events-none bg-blueprint" style={{ opacity }} />;
}

function CornerMarks({ inset = 0 }: { inset?: number }) {
  const corners = [
    { cls: "top-0 left-0", d: "M1 10 L1 1 L10 1" },
    { cls: "top-0 right-0", d: "M10 1 L19 1 L19 10" },
    { cls: "bottom-0 right-0", d: "M19 10 L19 19 L10 19" },
    { cls: "bottom-0 left-0", d: "M10 19 L1 19 L1 10" },
  ];
  return (
    <>
      {corners.map((c, i) => (
        <svg key={i} className={`absolute w-5 h-5 pointer-events-none ${c.cls}`} style={{ margin: inset }} viewBox="0 0 20 20">
          <path d={c.d} className="stroke-wine opacity-40" strokeWidth="1.25" fill="none" />
        </svg>
      ))}
    </>
  );
}

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden bg-parchment text-ink font-heading">
      <Seo title="Produtos | Fifteen Miles" description="Ecossistema integrado de software e hardware para operações de alto desempenho." path="/products" />

      <section className="relative w-full pt-32 sm:pt-48 pb-24 px-6 sm:px-14 overflow-hidden">
        <BlueprintGrid />
        <div className="absolute top-10 right-14 hidden lg:block opacity-70 pointer-events-none">
          <Seal size={150} spin />
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center text-center">
          <motion.h1 className="w-full">
            <motion.span className="text-4xl sm:text-7xl lg:text-[7rem] font-bold tracking-tight uppercase font-raleway text-ink animate-text-opening select-none mb-4 block">
              PRODUTOS
            </motion.span>
            <motion.span variants={fadeUp} className="block font-normal normal-case text-3xl sm:text-5xl lg:text-6xl font-display text-wine italic">
              que transformam operações em sistemas.
            </motion.span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5, ease: EASE }} className="mt-8 text-lg sm:text-xl max-w-3xl leading-relaxed font-light text-ink/70">
            Da organização centralizada da empresa à interação com o ambiente físico, construímos uma arquitetura integrada para tornar operações mais inteligentes, mensuráveis e adaptáveis.
          </motion.p>
        </motion.div>
      </section>

      <section className="relative w-full pt-36 sm:pt-44 pb-28 sm:pb-36 px-6 sm:px-14">
        <BlueprintGrid />

        <div className="relative z-10 max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-center items-center gap-12">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }} className="mt-8 text-[3rem] sm:text-6xl md:text-[4.2rem] lg:text-[4.8rem] leading-[1.08] tracking-tight uppercase font-heading">
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
              <Button onClick={() => (window.location.href = "https://atlas.fifteenmiles.tech/register")} showArrow>Comece já</Button>
              <Button onClick={() => (window.location.href = "https://atlas.fifteenmiles.tech/register")} variant="google">Registre-se com o Google</Button>
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

      <section className="relative pb-10 px-6 sm:px-14">
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-3xl mb-16">
            <motion.h2 variants={fadeUp} className="mt-7 text-5xl sm:text-6xl lg:text-[4.2rem] leading-[1.05] font-display font-semibold text-ink">
              Atlas OS.
              <br />
              <span className="text-wine italic font-normal">Uma plataforma. Toda a operação.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl font-light text-ink/[0.7]">
              O Atlas não é um aplicativo. É a infraestrutura central desenhada para servir como o sistema operacional de organizações que pensam no longo prazo.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid lg:grid-cols-12 gap-6 mb-20">
            <motion.div variants={fadeUp} className="relative lg:col-span-8 p-8 sm:p-14 rounded-[10px] flex flex-col justify-between overflow-hidden border border-wine/[0.2] bg-white">
              <CornerMarks inset={8} />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-ink/[0.45]">Arquitetura Central</span>
                  <span className="text-[10px] uppercase px-3.5 py-1 rounded-full font-mono tracking-[0.2em] text-wine border border-wine/[0.25]">Placa III.A</span>
                </div>
                <h3 className="text-3xl sm:text-4xl mb-6 font-display font-semibold text-ink">Fundação Unificada de Dados e Decisão</h3>
                <p className="text-base sm:text-lg leading-relaxed max-w-xl mb-12 font-light text-ink/[0.7]">
                  A maioria dos softwares força as empresas a se adaptarem a fluxos engessados. O Atlas faz o inverso: fornece um ambiente configurável e imutável onde a inteligência corporativa é preservada de ponta a ponta.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-wine/[0.1]">
                {atlasLegend.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-[7px] w-2 h-2 rounded-full shrink-0 border border-wine bg-wine/[0.15]" />
                    <div>
                      <span className="block mb-1 text-[10px] uppercase font-mono tracking-[0.15em] text-ink/[0.4]">{item.label}</span>
                      <span className="block text-sm font-medium text-ink">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              <motion.div variants={fadeUp} className="relative p-8 rounded-[10px] border border-wine/[0.2] bg-white">
                <div className="flex items-center justify-between mb-5">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-wine/[0.06]">
                    <Castle className="w-5 h-5 text-wine" />
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-ink/[0.4]">Placa III.B</span>
                </div>
                <h4 className="text-xl font-medium mb-2 tracking-tight text-ink font-display">Sem Dependências Frágeis</h4>
                <p className="text-sm leading-relaxed font-light text-ink/[0.65]">Construído do zero, sem depender de integrações instáveis de terceiros que quebram com o tempo ou comprometem a estabilidade do sistema.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="relative p-8 rounded-[10px] border border-wine/[0.2] bg-white">
                <div className="flex items-center justify-between mb-5">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-wine/[0.06]">
                    <KeyRound className="w-5 h-5 text-wine" />
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-ink/[0.4]">Placa III.C</span>
                </div>
                <h4 className="text-xl font-medium mb-2 tracking-tight text-ink font-display">Soberania Institucional</h4>
                <p className="text-sm leading-relaxed font-light text-ink/[0.65]">Seus dados nunca residem em silos opacos de nuvens públicas descontroladas. Sua empresa mantém o controle absoluto e imutável de sua inteligência.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="flex flex-col items-center gap-10 pt-12 border-t border-wine/[0.12]">
            <div className="flex items-center gap-3 text-ink/[0.45]">
              <Compass className="w-4 h-4 text-wine" strokeWidth={1.5} />
              <div className="flex items-end gap-[2px]">
                {Array.from({ length: 17 }).map((_, i) => (
                  <span key={i} className={`w-px bg-wine/[0.3] ${i % 4 === 0 ? 'h-2' : 'h-1'}`} />
                ))}
              </div>
              <span className="text-[10px] uppercase font-mono tracking-[0.2em]">Escala 1:1 — ambiente real de produção</span>
            </div>
            <Button href="/atlas" showArrow>Especificações do Atlas OS</Button>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: EASE }} className="relative z-10 max-w-[1500px] mx-auto mt-28 pt-12 border-t border-wine/[0.14]">
          <h3 className="text-center mb-8 text-[10px] uppercase font-mono tracking-[0.3em] text-ink/[0.45]">
            Selo de confiança de
          </h3>
          <div className="w-full flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
            <span className="opacity-70 hover:opacity-100 transition-opacity duration-500">
              <Image src="/eletra.png" alt="Eletra" width={128} height={128} className="w-28 sm:w-32 h-auto" />
            </span>
          </div>
        </motion.div>
      </section>

      <section className="relative py-36 sm:py-44 px-6 sm:px-14 border-t border-wine/[0.12] bg-parchment-alt">
        <BlueprintGrid opacity={0.03} />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-3xl mb-16">
            <motion.h2 variants={fadeUp} className="mt-7 text-5xl sm:text-6xl lg:text-[4.2rem] leading-[1.05] font-display font-semibold text-ink">
              Hephaestus.
              <br />
              <span className="text-wine italic font-normal">A infraestrutura física da operação.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl font-light text-ink/[0.7]">
              Inspirado na mitologia da forja e da engenharia, o Hephaestus representa a família de hardware e dispositivos empresariais da Fifteen Miles, interligando sensores, controladores e o Atlas OS ao mundo real.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid lg:grid-cols-12 gap-6 mb-20">
            <motion.div variants={fadeUp} className="relative lg:col-span-8 p-8 sm:p-14 rounded-[10px] flex flex-col justify-between overflow-hidden border border-wine/[0.2] bg-white">
              <CornerMarks inset={8} />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-ink/[0.45]">Hardware Proprietário</span>
                  <span className="text-[10px] uppercase px-3.5 py-1 rounded-full font-mono tracking-[0.2em] text-wine border border-wine/[0.25]">Placa II.B</span>
                </div>
                <h3 className="text-3xl sm:text-4xl mb-6 font-display font-semibold text-ink">Sensores e Conectividade Industrial</h3>
                <p className="text-base sm:text-lg leading-relaxed max-w-xl mb-12 font-light text-ink/[0.7]">
                  Dispositivos de ponta desenvolvidos para capturar dados diretamente do chão de fábrica ou do escritório, traduzindo o esforço físico em métricas e automações instantâneas.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-wine/[0.1]">
                {hephaestusLegend.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-[7px] w-2 h-2 rounded-full shrink-0 border border-wine bg-wine/[0.15]" />
                    <div>
                      <span className="block mb-1 text-[10px] uppercase font-mono tracking-[0.15em] text-ink/[0.4]">{item.label}</span>
                      <span className="block text-sm font-medium text-ink">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              <motion.div variants={fadeUp} className="relative p-8 rounded-[10px] border border-wine/[0.2] bg-white flex flex-col items-center text-center justify-center min-h-[260px]">
                <Cpu className="w-16 h-16 text-wine mb-4 opacity-80" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-wine mb-2">Módulo de Hardware</span>
                <p className="text-sm font-light text-ink/70">Telemetria física integrada via Wi-Fi ao núcleo corporativo.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="flex flex-col items-center gap-10 pt-12 border-t border-wine/[0.12]">
            <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium tracking-wide text-ink/[0.8]">
              {HEPHAESTUS_FEATURES.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-4 h-4 rounded-full border border-wine/[0.4] bg-wine/[0.05]">
                    <Check className="w-2.5 h-2.5 text-wine" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/contact" showArrow>Falar com a Engenharia</Button>
          </motion.div>
        </div>
      </section>

      <section className="relative py-36 sm:py-44 px-6 sm:px-14 border-t border-wine/[0.12] bg-parchment">
        <BlueprintGrid opacity={0.03} />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-3xl mb-16">
            <motion.h2 variants={fadeUp} className="mt-7 text-5xl sm:text-6xl lg:text-[4.2rem] leading-[1.05] font-display font-semibold text-ink">
              Atlas Capture.
              <br />
              <span className="text-wine italic font-normal">O ponto físico entre o trabalho e os dados.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl font-light text-ink/[0.7]">
              Time tracker físico construído com ESP32, touch LCD e Wi-Fi. Elimina a barreira do registro manual em abas, transformando a execução em métricas precisas de tempo e gargalos.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid lg:grid-cols-12 gap-6 mb-20">
            <motion.div variants={fadeUp} className="relative lg:col-span-8 p-8 sm:p-14 rounded-[10px] flex flex-col justify-between overflow-hidden border border-wine/[0.2] bg-white">
              <CornerMarks inset={8} />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-ink/[0.45]">Protótipo Ativo</span>
                  <span className="text-[10px] uppercase px-3.5 py-1 rounded-full font-mono tracking-[0.2em] text-wine border border-wine/[0.25]">Placa III.C</span>
                </div>
                <h3 className="text-3xl sm:text-4xl mb-6 font-display font-semibold text-ink">Medição Direta de Tempo e Execução</h3>
                <p className="text-base sm:text-lg leading-relaxed max-w-xl mb-12 font-light text-ink/[0.7]">
                  Um dispositivo dedicado na estação de trabalho que registra atividades com um toque, enviando telemetria em tempo real diretamente para as tabelas do Atlas OS.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-wine/[0.1]">
                {captureLegend.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-[7px] w-2 h-2 rounded-full shrink-0 border border-wine bg-wine/[0.15]" />
                    <div>
                      <span className="block mb-1 text-[10px] uppercase font-mono tracking-[0.15em] text-ink/[0.4]">{item.label}</span>
                      <span className="block text-sm font-medium text-ink">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              <motion.div variants={fadeUp} className="relative p-6 rounded-[10px] border border-wine/[0.2] bg-ink text-white font-mono text-xs shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-white/40 text-[10px] uppercase tracking-widest mb-4 pb-2 border-b border-white/10">
                    <span>Simulação do Display (ESP32)</span>
                    <Terminal className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                  <div className="text-white font-medium text-sm mb-1">Atlas Capture // Station 01</div>
                  <div className="text-amber-300 font-bold text-3xl my-3">01:42:37</div>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-emerald-400 bg-emerald-950/40 p-2.5 rounded border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>● TRANSMITINDO AO VIVO PARA O ATLAS OS</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="flex flex-col items-center gap-10 pt-12 border-t border-wine/[0.12]">
            <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium tracking-wide text-ink/[0.8]">
              {CAPTURE_FEATURES.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-4 h-4 rounded-full border border-wine/[0.4] bg-wine/[0.05]">
                    <Check className="w-2.5 h-2.5 text-wine" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/contact" showArrow>Acompanhar Protótipo</Button>
          </motion.div>
        </div>
      </section>

      <section className="relative py-40 sm:py-52 px-6 sm:px-14 flex flex-col items-center justify-center text-center border-t border-wine/12 bg-wine">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.25)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-white">
          <Seal size={96} spin />
          <div className="mt-8">
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono px-4 py-2 rounded-full border border-white/20 text-white/90 bg-white/10 inline-block">Arquitetura Integrada</span>
          </div>

          <h2 className="mt-8 text-4xl sm:text-6xl lg:text-[4.5rem] leading-[1.05] font-display font-semibold">
            A próxima geração de operações <br />
            <span className="italic text-amber-200">começa com uma arquitetura melhor.</span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed text-white/80">Conheça o Atlas e acompanhe os produtos que estamos desenvolvendo para transformar a forma como as empresas operam.</p>

          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <Button href="/atlas" variant="primary-dark" showArrow className="px-8 py-4 bg-white text-wine hover:bg-white/90">Explorar o Atlas OS</Button>
            <Link href="/contact" className="flex items-center justify-center gap-2 px-8 py-4 rounded-md text-xs font-mono uppercase tracking-widest border border-white/30 text-white hover:bg-white/10 transition-all">
              <span>Falar com a Fifteen Miles</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}