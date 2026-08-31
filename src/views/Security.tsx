"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/link";
import Link from "next/link";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ShieldCheck, Lock, Globe, Database, FileText, ArrowRight, Zap, RefreshCw } from "lucide-react";
import Seo from "@/components/Seo";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const FONT_BLACK = `'UnifrakturMaguntia', serif`;
const FONT_HEADING = `'Coolvetica', 'Helvetica Neue', sans-serif`;
const FONT_DISPLAY = `'Fraunces', serif`;
const FONT_EYEBROW = `'Cinzel', serif`;
const FONT_MONO = `'JetBrains Mono', monospace`;

const INK = "#1C1710";
const WINE = "#5C0000";
const PARCHMENT = "#FAF7F0";

function useMedievalFonts() {
  useEffect(() => {
    if (document.getElementById("fm-medieval-fonts")) return;
    const link = document.createElement("link");
    link.id = "fm-medieval-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;1,9..144,400&family=UnifrakturMaguntia&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function Seal({ size = 100, spin = false }: { size?: number; spin?: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      className="relative shrink-0 select-none pointer-events-none"
      style={{
        width: size,
        height: size,
        animation: spin ? "fm-seal-spin 120s linear infinite" : undefined,
      }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <circle cx="50" cy="50" r="47" fill="none" stroke={WINE} strokeWidth="1" opacity="0.45" />
        <circle cx="50" cy="50" r="39" fill="none" stroke={WINE} strokeWidth="0.5" opacity="0.28" />
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
                stroke={WINE}
                strokeWidth={long ? 1 : 0.5}
                opacity={long ? 0.55 : 0.28}
              />
            );
          })}
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center select-none"
        style={{ fontFamily: FONT_BLACK, color: WINE, fontSize: size * 0.32, lineHeight: 1 }}
      >
        XV
      </div>
    </div>
  );
}

function ChapterTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border shadow-sm"
      style={{
        fontFamily: FONT_EYEBROW,
        color: WINE,
        borderColor: "rgba(92,0,0,0.22)",
        background: "rgba(92,0,0,0.03)",
        fontSize: "10px",
        letterSpacing: "0.28em",
        textTransform: "uppercase",
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
      {children}
    </span>
  );
}

function BlueprintGrid({ opacity = 0.04 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(92,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(92,0,0,1) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        opacity,
        maskImage: "radial-gradient(ellipse 80% 70% at 50% 15%, black 20%, transparent 90%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 15%, black 20%, transparent 90%)",
      }}
    />
  );
}

export default function SecurityPage() {
  useMedievalFonts();

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: PARCHMENT, color: INK, fontFamily: FONT_HEADING }}
    >
      <Seo title="Soberania de Dados — Fifteen Miles" description="Garantimos que seus dados permaneçam sob sua custódia absoluta. Arquitetura soberana e isolamento total." path="/security" />

      <style dangerouslySetInnerHTML={{ __html: `
        @font-face {
          font-family: 'Coolvetica';
          src: url('https://cdn.jsdelivr.net/gh/luxonauta/coolvetica@master/woff2/CoolveticaRg.woff2') format('woff2');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @keyframes fm-seal-spin {
          to { transform: rotate(360deg); }
        }
        ::selection {
          background: rgba(92, 0, 0, 0.18);
          color: ${INK};
        }
      `}} />

      {/* Hero Section */}
      <section className="relative w-full pt-32 sm:pt-44 pb-20 px-6 sm:px-14">
        <BlueprintGrid />
        <div className="absolute top-10 right-14 hidden lg:block opacity-70">
          <Seal size={150} spin />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <ChapterTag>Governança e Soberania</ChapterTag>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-7xl lg:text-[6.5rem] tracking-tight uppercase leading-[1.02]"
            style={{ fontFamily: FONT_HEADING }}
          >
            <motion.span variants={fadeUp} className="block">O dado é seu ativo.</motion.span>
            <motion.span variants={fadeUp} className="block font-normal normal-case" style={{ fontFamily: FONT_DISPLAY, color: WINE, fontStyle: "italic" }}>Nós somos os guardiões.</motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-lg sm:text-2xl max-w-3xl leading-relaxed font-light"
            style={{ color: "rgba(28,23,16,0.7)" }}
          >
            Em um mundo de nuvens compartilhadas, garantimos isolamento total, criptografia proprietária e soberania absoluta sobre suas informações corporativas.
          </motion.p>
        </motion.div>
      </section>

      {/* Grid de Pilares */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F3EDE3" }}>
        <BlueprintGrid opacity={0.04} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ChapterTag>Pilares de Segurança</ChapterTag>
            <h2 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
              Isolamento e Controle Rigoroso
            </h2>
            <p className="mt-4 text-base font-light" style={{ color: "rgba(28,23,16,0.7)" }}>
              Cada camada do Atlas OS foi desenhada para eliminar pontos únicos de falha e blindar sua operação contra acessos não autorizados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Lock, title: "Isolamento Físico", desc: "Seus dados residem em instâncias logicamente segregadas. Nenhuma interferência ou compartilhamento de vizinhança." },
              { icon: Database, title: "Criptografia Avançada", desc: "Protocolos AES-256 de ponta a ponta, com chaves de gestão exclusivas dedicadas a cada organização." },
              { icon: Globe, title: "Soberania Regional", desc: "Controle absoluto sobre o território físico e jurídico onde seus dados são processados e armazenados." },
              { icon: FileText, title: "Auditoria Imutável", desc: "Cada acesso ou modificação é registrado em logs imutáveis, garantindo transparência total e rastreabilidade." },
              { icon: RefreshCw, title: "Portabilidade Total", desc: "Garantimos que seus dados permaneçam sempre exportáveis em formatos abertos a qualquer momento." },
              { icon: Zap, title: "Mitigação Contínua", desc: "Monitoramento em tempo real contra vetores de ameaças, mantendo a operação resiliente 24/7." }
            ].map((item, i) => {
              const IconComp = item.icon;
              return (
                <div
                  key={i}
                  className="p-10 rounded-[16px] border bg-white shadow-sm flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: "rgba(92,0,0,0.18)" }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-full border flex items-center justify-center mb-8" style={{ borderColor: "rgba(92,0,0,0.25)", background: "rgba(92,0,0,0.04)" }}>
                      <IconComp className="w-5 h-5 text-[#5C0000]" />
                    </div>
                    <h3 className="text-2xl font-medium mb-3" style={{ fontFamily: FONT_DISPLAY, color: INK }}>{item.title}</h3>
                  </div>
                  <p className="text-sm font-light leading-relaxed pt-4 border-t" style={{ borderColor: "rgba(92,0,0,0.1)", color: "rgba(28,23,16,0.7)" }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-40 sm:py-52 px-6 sm:px-14 flex flex-col items-center justify-center text-center border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: WINE }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.25)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-white">
          <Seal size={96} spin />
          <div className="mt-8">
            <ChapterTag>Compromisso Executivo</ChapterTag>
          </div>

          <h2
            className="mt-8 text-4xl sm:text-6xl lg:text-[4.5rem] leading-[1.05]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600 }}
          >
            Soberania não é um luxo. <br />
            <span className="italic" style={{ color: "#FDE68A" }}>É um requisito fundamental.</span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed text-white/80">
            Garanta blindagem técnica e jurídica absoluta para as informações mais valiosas do seu negócio.
          </p>

          <div className="mt-14">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-md text-xs font-mono uppercase tracking-widest bg-white text-[#5C0000] font-bold transition-all hover:bg-white/90 shadow-2xl"
            >
              <span>Falar com nossa engenharia</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}