"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Check } from "lucide-react";
import { TiltFrame } from "@/components/TiltFrame";
import LazyImage from "@/components/LazyImage";
import Image from "next/image";
import Link from "next/link";

const APPSHOT = "/Aplicativo.png";
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function MonochromeAurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div
        className="absolute -top-[20%] left-1/2 h-[800px] w-[1200px] -translate-x-1/2 rounded-full opacity-40"
        style={{
          background: "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 80%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full opacity-30"
        style={{
          background: "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 80%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}

function Grid3D() {
  return (
    <div className="absolute inset-0 pointer-events-none [perspective:1000px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10" />
      <div 
        className="absolute inset-x-0 bottom-0 h-[150vh] origin-bottom"
        style={{
          transform: "rotateX(75deg) translateY(200px) scale(2)",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to top, black 10%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to top, black 10%, transparent 60%)"
        }}
      />
    </div>
  );
}

const FEATURES = [
  "Ambiente de planejamento unificado",
  "Motor de automação neural",
  "Telemetria em tempo real",
];

function PerformanceMetric() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
      className="mt-10 flex items-center gap-4 bg-white/[0.02] border border-white/[0.05] rounded-full p-1.5 pr-5 w-fit backdrop-blur-md"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.08] shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        <Activity className="w-4 h-4 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-[11px] font-medium text-white/50 tracking-wider uppercase font-[JetBrains_Mono]">
          Métrica de Impacto
        </span>
        <span className="text-sm font-medium text-white/90 tracking-tight">
          <strong className="text-white font-semibold">+3.240 horas</strong> de trabalho otimizadas
        </span>
      </div>
    </motion.div>
  );
}

function CheckList() {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
      className="mt-8 flex flex-col gap-3"
    >
      {FEATURES.map((f) => (
        <li key={f} className="flex items-center gap-3 text-sm text-white/60 font-medium">
          <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20 bg-white/5">
            <Check className="w-3 h-3 text-white" />
          </div>
          {f}
        </li>
      ))}
    </motion.ul>
  );
}

function TrustedBy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.9, ease: EASE }}
      className="relative mt-20 sm:mt-24 border-t border-white/[0.04] pt-10"
    >
      <h3 className="font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8 text-center">
        Infraestrutura homologada por
      </h3>
      <div className="w-full flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
        <span className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale">
          <LazyImage
            src="/eletra.png"
            alt="Eletra"
            width={112}
            height={112}
            className="w-24 sm:w-28 h-auto invert brightness-200"
          />
        </span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-start pt-28 sm:pt-36 pb-16 sm:pb-20 font-[Inter] text-white bg-[#030303]"
    >
      <MonochromeAurora />
      <Grid3D />
      
      <div className="pointer-events-none absolute inset-4 sm:inset-6 border border-white/[0.03] rounded-[32px] z-20" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-8 items-center w-full max-w-[1500px] px-6 sm:px-12">
        <div className="flex flex-col items-start text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0, ease: EASE }}
            className="flex items-center gap-2.5 mb-8 font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase"
          >
            <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md text-white/80 shadow-[0_0_20px_rgba(255,255,255,0.03)]">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex w-full h-full rounded-full animate-ping opacity-60 bg-white" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-white" />
              </span>
              Placa I · Atlas OS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="font-[Inter] font-semibold text-[2.8rem] sm:text-5xl md:text-[3.8rem] lg:text-[4.6rem] tracking-[-0.04em] leading-[1.05]"
          >
            O sistema operacional de produtividade para
            <span className="block text-white/60">
              <span className="font-[Fraunces] italic font-light text-white">empresas e equipes.</span> 
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
            className="mt-6 text-base sm:text-lg text-white/50 max-w-[32rem] font-normal tracking-tight leading-relaxed"
          >
            O sistema operacional definitivo para operações escaláveis. Projetado com rigor monocromático e focado inteiramente na execução eficiente.
          </motion.p>

          <CheckList />
          <PerformanceMetric />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => (window.location.href = "https://atlas.fifteenmiles.tech/register")}
              className="group w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 px-8 rounded-full text-sm font-semibold tracking-tight text-black bg-white transition-all duration-200 hover:scale-[0.98] hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              Iniciar implementação
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <Link
              href="/docs"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center px-8 rounded-full text-sm font-medium tracking-tight text-white transition-all duration-200 hover:scale-[0.98] border border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.03] backdrop-blur-sm"
            >
              Acessar documentação
            </Link>
          </motion.div>
        </div>

        <div className="relative w-full order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
            className="relative w-full max-w-[1100px]"
          >
            <div className="absolute inset-0 bg-white/[0.02] blur-[100px] pointer-events-none rounded-full" />

            <div className="relative p-1.5 rounded-[24px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)]">
              <TiltFrame>
                <div className="relative rounded-[18px] overflow-hidden border border-white/[0.08] bg-[#050505] shadow-2xl">
                  <Image
                    src={APPSHOT}
                    alt="Interface do Aplicativo Atlas"
                    width={1600}
                    height={900}
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 768px) 100vw, 1600px"
                    className="w-full h-auto object-cover grayscale-[0.2] contrast-[1.05] select-none"
                    draggable={false}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-white/[0.02] mix-blend-overlay" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.05] rounded-[18px]" />
                </div>
              </TiltFrame>
            </div>

            <div className="mt-6 flex items-center justify-between font-[JetBrains_Mono] text-[9px] tracking-[0.3em] uppercase text-white/30 px-4">
              <span>Atlas OS // v2.0</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                Sistema Operante
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1500px] px-6 sm:px-12">
        <TrustedBy />
      </div>
    </section>
  );
}