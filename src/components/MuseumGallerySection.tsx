'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  Landmark,
  Compass,
  Scale,
  Ruler,
  Building2,
  ScrollText,
  ShieldCheck,
  Columns3,
  type LucideIcon,
} from "lucide-react";

type Principle = {
  numeral: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

const principles: Principle[] = [
  {
    numeral: "I",
    title: "Permanência",
    desc: "Construímos plataformas preparadas para anos de operação contínua, e não apenas para o próximo lançamento.",
    icon: Landmark,
  },
  {
    numeral: "II",
    title: "Evolução",
    desc: "Toda arquitetura é pensada para crescer junto com a empresa, sem exigir reconstruções constantes.",
    icon: Building2,
  },
  {
    numeral: "III",
    title: "Clareza",
    desc: "A tecnologia deve reduzir complexidade, não criar novas dependências. O controle não pode gerar ruído.",
    icon: Scale,
  },
  {
    numeral: "IV",
    title: "Simplicidade",
    desc: "A melhor tecnologia é aquela que permanece invisível enquanto a operação acontece perfeitamente.",
    icon: Ruler,
  },
  {
    numeral: "V",
    title: "Engenharia",
    desc: "Toda decisão técnica é, fundamentalmente, uma decisão estratégica de negócio e continuidade.",
    icon: Compass,
  },
];

const marginalia = [
  {
    ref: "§01",
    title: "Continuidade",
    body: "Acompanha o crescimento da organização sem comprometer estabilidade.",
    icon: Columns3,
  },
  {
    ref: "§02",
    title: "Governança",
    body: "Cada decisão importante permanece registrada, organizada e acessível.",
    icon: ScrollText,
  },
  {
    ref: "§03",
    title: "Confiabilidade",
    body: "Sistemas críticos exigem previsibilidade absurda antes de velocidade.",
    icon: ShieldCheck,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

/** Loads the display/mono faces this section depends on, once, at runtime. */
function useEditorialFonts() {
  useEffect(() => {
    if (document.getElementById("fm-museum-fonts")) return;
    const link = document.createElement("link");
    link.id = "fm-museum-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,440;0,9..144,560;1,9..144,400;1,9..144,500&family=JetBrains+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap";
    document.head.appendChild(link);
  }, []);
}

const RAIL_ITEM_HEIGHT = 64;

export const MuseumGallerySection = () => {
  useEditorialFonts();

  const plateRefs = useRef<(HTMLDivElement | null)[]>([]);
  const chapterRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: chapterRef,
    offset: ["start center", "end center"],
  });
  const railFill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = plateRefs.current.findIndex((el) => el === entry.target);
          if (idx !== -1) setActive(idx);
        });
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 }
    );
    plateRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToPlate = (idx: number) => {
    plateRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="relative w-full bg-[#030302] text-[#F3EEE2] overflow-hidden py-32 sm:py-40 font-[Inter] selection:bg-[#C6A15B]/30">
      {/* ambient wash */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-[100rem] mx-auto px-6 sm:px-12 lg:px-20">
        {/* ── Chapter opener ───────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-[4rem_1fr] gap-8 lg:gap-16 mb-28 lg:mb-40">
          <div className="hidden lg:block" />
          <div className="max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="flex items-center gap-4 mb-10"
            >
              <span className="font-[JetBrains_Mono] text-[11px] tracking-[0.35em] uppercase text-[#8F897D]">
                Capítulo Nº 01
              </span>
              <div className="h-px flex-1 max-w-[64px] bg-[#C6A15B]/40" />
              <span className="font-[JetBrains_Mono] text-[11px] tracking-[0.35em] uppercase text-[#8F897D]">
                A Filosofia
              </span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="font-[Raleway] text-5xl md:text-7xl lg:text-[6.25rem] leading-[0.88] font-[440] tracking-tight"
            >
              Software muda.
              <br />
              <span className="italic font-medium text-transparent bg-clip-text bg-gradient-to-br from-[#E8C77E] via-[#C6A15B] to-[#8A6B3B] pr-4">
                Fundações permanecem.
              </span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="mt-10 text-xl md:text-2xl text-[#8F897D] font-light max-w-2xl leading-relaxed"
            >
              Não escolhemos tecnologias pela tendência do momento. Projetamos sistemas
              que continuam fazendo sentido daqui a dez anos.
            </motion.p>
          </div>
        </div>

        {/* ── Chapter body: wayfinding rail + plates ─────────────────────── */}
        <div ref={chapterRef} className="relative grid lg:grid-cols-[4rem_1fr] gap-8 lg:gap-16">
          <div className="hidden lg:block relative">
            <div className="sticky top-[38vh]">
              <div
                className="relative"
                style={{ height: RAIL_ITEM_HEIGHT * principles.length }}
              >
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />
                <motion.div
                  className="absolute left-[7px] top-2 w-px bg-[#C6A15B]/70 origin-top"
                  style={{ height: railFill }}
                />
                <motion.div
                  className="absolute left-[3.5px] w-[8px] h-[8px] rounded-full bg-[#C6A15B] shadow-[0_0_14px_rgba(198,161,91,0.65)]"
                  animate={{ top: active * RAIL_ITEM_HEIGHT + 24 }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                />
                <ul>
                  {principles.map((p, i) => (
                    <li key={p.numeral} style={{ height: RAIL_ITEM_HEIGHT }}>
                      <button
                        type="button"
                        onClick={() => scrollToPlate(i)}
                        className="group flex h-full items-center pl-6"
                        aria-label={`Ir para Peça ${p.numeral} — ${p.title}`}
                      >
                        <span
                          className={`font-[JetBrains_Mono] text-sm tracking-wide transition-colors duration-500 ${
                            active === i
                              ? "text-[#C6A15B]"
                              : "text-[#8F897D]/50 group-hover:text-[#8F897D]"
                          }`}
                        >
                          {p.numeral}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            {principles.map((p, i) => {
              const Icon = p.icon;
              const reversed = i % 2 === 1;
              return (
                <div
                  key={p.numeral}
                  ref={(el) => {
                    plateRefs.current[i] = el;
                  }}
                  className="relative py-16 lg:py-24 border-t border-white/5 first:border-t-0 first:pt-0"
                >
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-120px" }}
                    variants={stagger}
                    className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
                      reversed ? "lg:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    <motion.div variants={fadeUp} className="relative">
                      <span className="font-[Fraunces] italic font-light text-[9rem] lg:text-[13rem] leading-none text-white/[0.035] absolute -top-8 -left-2 select-none pointer-events-none">
                        {p.numeral}
                      </span>

                      <div className="relative flex items-center gap-5 mb-8">
                        <div className="relative w-14 h-14 rounded-full border border-[#C6A15B]/30 flex items-center justify-center">
                          <div className="absolute inset-1.5 rounded-full border border-white/10" />
                          <Icon strokeWidth={1} className="w-5 h-5 text-[#C6A15B]" />
                        </div>
                        <span className="font-[JetBrains_Mono] text-xs tracking-[0.3em] uppercase text-[#8F897D]">
                          Peça {p.numeral}
                        </span>
                      </div>

                      <h3 className="font-[Fraunces] text-4xl lg:text-5xl font-[440] text-[#F3EEE2] mb-6 leading-[1.04]">
                        {p.title}
                      </h3>
                      <p className="text-[#8F897D] text-lg font-light leading-relaxed max-w-md">
                        {p.desc}
                      </p>
                    </motion.div>

                    <motion.div
                      variants={fadeUp}
                      className="relative aspect-[4/3] border border-white/5 bg-white/[0.015] overflow-hidden flex items-center justify-center"
                    >
                      <Icon strokeWidth={0.5} className="w-1/3 h-1/3 text-[#C6A15B]/20" />
                      <div className="absolute inset-4 border border-white/5" />
                      <span className="absolute bottom-4 right-4 font-[JetBrains_Mono] text-[10px] tracking-[0.2em] text-white/25">
                        FM—{p.numeral}
                      </span>
                      <span className="absolute top-4 left-4 font-[JetBrains_Mono] text-[10px] tracking-[0.2em] text-white/25">
                        {p.title.toUpperCase()}
                      </span>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Marginalia: Architect's note ───────────────────────────────── */}
        <div className="grid lg:grid-cols-[4rem_1fr] gap-8 lg:gap-16 mt-24 lg:mt-32">
          <div className="hidden lg:block" />
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="flex items-center gap-4 mb-14"
            >
              <span className="font-[JetBrains_Mono] text-[11px] tracking-[0.35em] uppercase text-[#8F897D]">
                Nota do Arquiteto
              </span>
              <div className="h-px flex-1 max-w-[64px] bg-[#C6A15B]/40" />
            </motion.div>

            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="font-[Fraunces] text-4xl sm:text-5xl lg:text-6xl font-[440] text-[#F3EEE2] tracking-tight leading-[1.08] mb-16 max-w-3xl"
            >
              Projetado para empresas,{" "}
              <span className="italic font-medium text-[#8F897D]">
                não para demonstrações.
              </span>
            </motion.h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid sm:grid-cols-3 gap-px bg-white/5 border border-white/5"
            >
              {marginalia.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    variants={fadeUp}
                    key={item.ref}
                    className="group bg-[#030302] p-8 lg:p-10 flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-[JetBrains_Mono] text-[11px] tracking-[0.2em] text-[#8F897D]/60">
                        {item.ref}
                      </span>
                      <ItemIcon
                        strokeWidth={1}
                        className="w-4 h-4 text-[#8F897D] group-hover:text-[#C6A15B] transition-colors duration-500"
                      />
                    </div>
                    <h4 className="font-[Fraunces] text-xl text-[#F3EEE2] mb-3">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#8F897D] font-light leading-relaxed">
                      {item.body}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* ── Colophon ──────────────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col items-center text-center pt-32 lg:pt-40"
        >
          <div className="w-px h-20 bg-gradient-to-b from-[#C6A15B]/50 to-transparent mb-10" />
          <h3 className="font-[Fraunces] text-5xl sm:text-7xl lg:text-[6rem] text-[#F3EEE2] font-[440] tracking-tight leading-[0.92] mb-8 max-w-5xl">
            Não desenvolvemos <span className="italic font-medium text-[#8F897D]">aplicações.</span>
            <br />
            Projetamos <span className="italic font-medium text-[#8F897D]">infraestrutura.</span>
          </h3>
          <span className="font-[JetBrains_Mono] text-[11px] tracking-[0.35em] uppercase text-[#8F897D]/60 mb-10">
            Fifteen Miles — Fundada para durar
          </span>
          <ArrowDown className="w-5 h-5 text-[#C6A15B] opacity-50" strokeWidth={1} />
        </motion.div>
      </div>
    </section>
  );
};