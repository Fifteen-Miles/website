"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ContourTerrain } from "./CountourTerrain";
import { TiltFrame } from "./TiltFrame";

const APPSHOT = "/Aplicativo.png";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const brass = "rgb(217 195 122)";

function useDisplayFonts() {
  useEffect(() => {
    if (document.getElementById("fm-type-system")) return;
    const link = document.createElement("link");
    link.id = "fm-type-system";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
}

const ContourLine = ({
  d,
  delay,
  opacity,
}: {
  d: string;
  delay: number;
  opacity: number;
}) => (
  <motion.path
    d={d}
    fill="none"
    stroke="white"
    strokeWidth="1"
    strokeOpacity={opacity}
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2.4, delay, ease: EASE }}
  />
);

function coordGrid() {
  return (
    <>
      {Array.from({ length: 9 }).map((_, i) => (
        <span
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none"
          style={{ top: `${(i + 1) * 10}%` }}
        />
      ))}
      {Array.from({ length: 11 }).map((_, i) => (
        <span
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent pointer-events-none"
          style={{ left: `${(i + 1) * 8}%` }}
        />
      ))}
    </>
  );
}

export default function Hero() {
  useDisplayFonts();
  const [boot, setBoot] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setBoot((b) => b + 1), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-start pt-32 sm:pt-40 pb-16 sm:pb-24 selection:bg-white selection:text-black font-[Inter] text-white"
      style={{ background: "#050608" }}
    >
      <div className="absolute inset-0">
        <ContourTerrain />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[38%] bg-gradient-to-b from-[#050608] via-[#050608]/30 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[26%] bg-gradient-to-t from-[#050608] via-[#050608]/60 to-transparent" />
      </div>

      <div className="absolute inset-0 pointer-events-none">{coordGrid()}</div>

      <div className="absolute left-0 right-0 top-[40%] h-px bg-white/[0.05] pointer-events-none" />

      
      <div className="pointer-events-none absolute inset-3 sm:inset-5 border border-white/[0.05]" />
      <span
        className="pointer-events-none absolute left-5 sm:left-6 top-4 font-[JetBrains_Mono] text-[9px] sm:text-[10px] tracking-[0.3em] uppercase"
        style={{ color: "rgba(255,255,255,0.28)" }}
      >
        ATL — 23°32'48"S · 46°38'12"W
      </span>
      <span
        className="pointer-events-none absolute right-5 sm:right-6 top-4 font-[JetBrains_Mono] text-[9px] sm:text-[10px] tracking-[0.3em] uppercase flex items-center gap-2"
        style={{ color: "rgba(255,255,255,0.28)" }}
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: brass }} />
        Online
      </span>
      <span
        className="pointer-events-none absolute bottom-5 sm:bottom-6 left-5 sm:left-6 font-[JetBrains_Mono] text-[9px] sm:text-[10px] tracking-[0.3em] uppercase"
        style={{ color: "rgba(255,255,255,0.28)" }}
      >
        Datum WGS84 · Elev. {431 + boot}m
      </span>
      <span
        className="pointer-events-none absolute bottom-5 sm:bottom-6 right-5 sm:right-6 font-[JetBrains_Mono] text-[9px] sm:text-[10px] tracking-[0.3em] uppercase hidden sm:block"
        style={{ color: "rgba(255,255,255,0.28)" }}
      >
        Sessão 0015
      </span>

      <svg
        className="absolute inset-0 w-full h-full opacity-[0.4] pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden
      >
        <ContourLine d="M-100,180 C 300,140 700,230 1540,150" delay={0.2} opacity={0.08} />
        <ContourLine d="M-100,260 C 340,320 760,180 1540,260" delay={0.4} opacity={0.06} />
        <ContourLine d="M-100,620 C 380,560 820,700 1540,600" delay={0.6} opacity={0.07} />
        <ContourLine d="M-100,720 C 300,760 900,650 1540,740" delay={0.8} opacity={0.05} />
      </svg>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl px-4 sm:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="font-[Raleway] font-regular text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[6.2rem] mt-4 tracking-[-0.035em] max-w-[100%] sm:max-w-5xl leading-[1.04] sm:leading-[0.98]"
        >
          O sistema operacional
          <br className="hidden sm:block" /> de produtividade para{" "}
          <span className="font-[Fraunces] italic font-light" style={{ color: "rgba(255,255,255,0.62)" }}>
            empresas e equipes
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
          className="mt-7 sm:mt-9 text-base sm:text-lg md:text-xl text-white/45 max-w-[90%] sm:max-w-2xl font-light tracking-tight leading-relaxed"
        >
          Cartografia de trabalho para planejar, executar e construir produtos.
          Otimizado para a era da IA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4"
        >
          <button
            onClick={() => (window.location.href = "/contact")}
            className="group w-full sm:w-auto inline-flex h-12 sm:h-11 items-center justify-center gap-2 px-7 sm:px-8 rounded-full bg-white text-black text-sm font-medium tracking-tight transition-all duration-200 hover:bg-white/85 active:scale-[0.97]"
          >
            Solicitar demonstração
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
          <a
            href="https://atlas.fifteenmiles.tech/register"
            className="w-full sm:w-auto inline-flex h-12 sm:h-11 items-center justify-center px-7 sm:px-8 rounded-full text-white text-sm font-medium tracking-tight border transition-all duration-200 active:scale-[0.97] hover:border-[rgba(217,195,122,0.5)] hover:bg-[rgba(217,195,122,0.06)]"
          >
            Criar conta
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: EASE }}
          className="relative mt-16 sm:mt-24 items-center justify-center w-full px-4 sm:px-0"
        >
          <div className="relative w-full max-w-[1200px] mx-auto">
            <span className="absolute -top-3 -left-3 w-5 h-5 border-t border-l z-10 pointer-events-none" style={{ borderColor: "rgba(217,195,122,0.5)" }} />
            <span className="absolute -top-3 -right-3 w-5 h-5 border-t border-r z-10 pointer-events-none" style={{ borderColor: "rgba(217,195,122,0.5)" }} />
            <span className="absolute -bottom-3 -left-3 w-5 h-5 border-b border-l z-10 pointer-events-none" style={{ borderColor: "rgba(217,195,122,0.5)" }} />
            <span className="absolute -bottom-3 -right-3 w-5 h-5 border-b border-r z-10 pointer-events-none" style={{ borderColor: "rgba(217,195,122,0.5)" }} />

            <TiltFrame>
              <div className="relative">
                <img
                  src={APPSHOT}
                  alt="Interface do Aplicativo Atlas"
                  className="pointer-events-none w-full h-auto contrast-[1.04] brightness-[0.97] select-none"
                  draggable={false}
                />
              </div>
            </TiltFrame>

            <div className="mt-4 flex items-center justify-between font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
              <span>Fifteen Miles — Atlas OS</span>
              <span>Escala 1:1</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
