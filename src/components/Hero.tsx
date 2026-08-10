import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/** Loads the two-face type system once. Idempotent — safe to call from every section. */
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

/** A single drifting elevation contour — the survey line that runs under everything. */
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
    transition={{ duration: 2.4, delay, ease: [0.16, 1, 0.3, 1] }}
  />
);

export const Hero = () => {
  useDisplayFonts();

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-start pt-32 sm:pt-40 pb-16 sm:pb-24 selection:bg-white selection:text-black font-[Inter]">
      {/* Survey datum — a single hairline that anchors the whole composition */}
      <div className="absolute left-0 right-0 top-[38%] h-px bg-white/[0.06]" />

      {/* Elevation contours: the signature motif, drawn once on load */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.5]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden
      >
        <ContourLine d="M-100,180 C 300,140 700,230 1540,150" delay={0.2} opacity={0.10} />
        <ContourLine d="M-100,260 C 340,320 760,180 1540,260" delay={0.4} opacity={0.08} />
        <ContourLine d="M-100,620 C 380,560 820,700 1540,600" delay={0.6} opacity={0.09} />
        <ContourLine d="M-100,720 C 300,760 900,650 1540,740" delay={0.8} opacity={0.06} />
      </svg>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-4 sm:px-6 text-center">
        {/* Benchmark plate — a geodetic survey marker, not a marketing pill */}
       {/*} <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-10"
        >
          <Link
            to="/update"
            className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-full pl-1.5 pr-4 py-1.5 border border-white/15 transition-colors hover:border-white/30"
          >
            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-white/25 text-[9px] font-[JetBrains_Mono] text-white/70">
              15
            </span>
            <span className="text-[11px] sm:text-xs font-[JetBrains_Mono] tracking-[0.15em] uppercase text-white/50">
              Novo
            </span>
            <span className="text-[11px] sm:text-xs font-[JetBrains_Mono] tracking-[0.15em] uppercase text-white">
              Coding Sessions
            </span>
            <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white/50 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>*/}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[Inter] text-[2rem] sm:text-5xl md:text-6xl lg:text-[6rem] mt-10 font-medium tracking-[-0.045em] text-white max-w-[100%] sm:max-w-5xl leading-[1.02] sm:leading-[0.94]"
        >
          O sistema de desenvolvimento de produtos
          <br className="hidden sm:block" />
          {" "}para{" "}
          <span className="font-[Fraunces] italic font-light text-white/60">
            equipes e agentes
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 sm:mt-9 text-base sm:text-lg md:text-xl text-white/45 max-w-[90%] sm:max-w-2xl font-light tracking-tight leading-relaxed"
        >
          Projetado especificamente para planejamento e construção de produtos.
          Otimizado para a era da IA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4"
        >
          <Link
            to="/contact"
            className="group w-full sm:w-auto inline-flex h-12 sm:h-11 items-center justify-center gap-2 px-7 sm:px-8 rounded-full bg-white text-black text-sm font-medium tracking-tight transition-all hover:bg-white/85"
          >
            Solicitar demonstração
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href="https://atlas.fifteenmiles.tech/register"
            className="w-full sm:w-auto inline-flex h-12 sm:h-11 items-center justify-center px-7 sm:px-8 rounded-full text-white text-sm font-medium tracking-tight border border-white/15 hover:border-white/35 hover:bg-white/[0.03] transition-all"
          >
            Criar conta
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 sm:mt-24 items-center justify-center w-full px-4 sm:px-0"
        >
          <div className="relative w-full max-w-[1200px] mx-auto">
            {/* Corner benchmark ticks — the survey mark used throughout the site */}
            <span className="absolute -top-3 -left-3 w-5 h-5 border-t border-l border-white/25" />
            <span className="absolute -top-3 -right-3 w-5 h-5 border-t border-r border-white/25" />
            <span className="absolute -bottom-3 -left-3 w-5 h-5 border-b border-l border-white/25" />
            <span className="absolute -bottom-3 -right-3 w-5 h-5 border-b border-r border-white/25" />

            <div className="relative overflow-hidden rounded-md border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
              <img
                src="/Aplicativo.png"
                alt="Interface do Aplicativo Atlas"
                className="pointer-events-none w-full h-auto contrast-[1.05] brightness-[0.96]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="mt-4 flex items-center justify-between font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/30">
              <span>Fifteen Miles — Atlas OS</span>
              <span>Escala 1:1</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};