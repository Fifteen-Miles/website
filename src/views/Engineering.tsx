'use client';

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, ArrowDown, Terminal, Layers, ShieldCheck, Cpu, Code2, Compass, Sparkles, Server, GitBranch, Lock, Box } from "lucide-react";
import Link from "next/link";
import Seo from "../components/Seo";
import LazyImage from "../components/LazyImage";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

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

function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none [perspective:1000px] overflow-hidden opacity-15 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10" />
      <div 
        className="absolute inset-x-0 bottom-0 h-[100vh] origin-bottom"
        style={{
          transform: "rotateX(75deg) translateY(100px) scale(2)",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to top, black 10%, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to top, black 10%, transparent 85%)"
        }}
      />
    </div>
  );
}

export default function Engineering() {
  useDisplayFonts();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="relative min-h-screen bg-[#030303] text-white font-[Inter] overflow-hidden selection:bg-white/20">
      <Seo title="Engenharia — Fifteen Miles" description="Princípios, padrões sistêmicos e arquitetura de software projetada para durar décadas." path="/engineering" />
      
      <GridBackground />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none z-0" />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[95vh] w-full flex flex-col items-center justify-center pt-36 pb-24 px-6 sm:px-12 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 flex flex-col items-center text-center w-full max-w-6xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md text-[10px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-white/80 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
              <Compass className="w-3.5 h-3.5" />
              <span>Capítulo I · O Núcleo Técnico</span>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-[Inter] text-5xl sm:text-7xl lg:text-[7.5rem] tracking-[-0.04em] font-medium leading-[1.02] text-white"
          >
            <motion.span variants={fadeUp} className="block">A engenharia é</motion.span>
            <motion.span variants={fadeUp} className="block font-[Fraunces] italic font-light text-white/40">o próprio produto.</motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-10 text-xl sm:text-2xl text-white/50 font-light tracking-tight max-w-3xl leading-relaxed"
          >
            Não acreditamos em software descartável. Projetamos plataformas robustas, modulares e preparadas para evoluir continuamente por décadas.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-12 flex flex-col sm:flex-row items-center gap-5">
            <Link
              href="/atlas"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-tight hover:scale-[0.98] hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              <span>Conhecer o Atlas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#filosofia"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/[0.03] border border-white/[0.1] text-white font-medium text-sm tracking-tight hover:bg-white/[0.05] transition-colors backdrop-blur-sm"
            >
              Nossa filosofia
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y: parallaxY, opacity: parallaxOpacity }}
          className="w-full max-w-[1200px] mt-24 h-[50vh] md:h-[65vh] rounded-[32px] overflow-hidden relative border border-white/[0.08] bg-[#050505] shadow-2xl z-20"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 pointer-events-none" />
          <LazyImage
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2500&auto=format&fit=crop"
            alt="Arquitetura de Circuitos e Engenharia de Software"
            className="w-full h-full object-cover grayscale contrast-125 opacity-60 scale-105 hover:scale-100 transition-transform duration-1000"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>
      </section>

      {/* CHAPTER II: PHILOSOPHY */}
      <section id="filosofia" className="py-32 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto relative z-10 border-t border-white/[0.05]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-24 text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[10px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-white/60 mb-6"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Capítulo II · A Filosofia</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-[Inter] text-4xl sm:text-6xl lg:text-[4.5rem] tracking-[-0.03em] font-medium leading-[1.05] text-white">
            Antes de escrever código, <br />
            <span className="font-[Fraunces] italic font-light text-white/40">tomamos decisões.</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { tag: "Módulo 01.A", num: "I", title: "Clareza acima da complexidade.", desc: "Soluções brilhantes são simples de entender. Se a arquitetura exige um manual exaustivo para ser compreendida, ela falhou em seu propósito mais básico." },
            { tag: "Módulo 01.B", num: "II", title: "Escalabilidade desde o primeiro dia.", desc: "Não construímos para o tráfego de hoje. Erguemos fundações sólidas que suportam o crescimento natural da operação sem exigir reescritas dramáticas." },
            { tag: "Módulo 01.C", num: "III", title: "Software é um patrimônio vital.", desc: "Linhas de código não são despesas descartáveis; são ativos corporativos. Tratamos a base de código com o mesmo rigor de um projeto de alta engenharia." },
            { tag: "Módulo 01.D", num: "IV", title: "Projetado para durar décadas.", desc: "Ignoramos modismos e metodologias efêmeras. Focamos em padrões arquiteturais comprovados pelo tempo que continuarão relevantes no futuro." }
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="p-10 sm:p-12 border border-white/[0.08] bg-[#050505] rounded-[32px] flex flex-col justify-between shadow-xl group hover:border-white/20 transition-all duration-500"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/40">
                    {item.tag}
                  </span>
                  <span className="font-[Fraunces] italic text-2xl text-white/20">
                    {item.num}
                  </span>
                </div>
                <h3 className="font-[Inter] text-2xl sm:text-3xl font-medium tracking-tight text-white mb-4">
                  {item.title}
                </h3>
              </div>
              <p className="text-base sm:text-lg text-white/50 font-light leading-relaxed mt-6">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PIPELINE / STEPS */}
      <section className="py-32 sm:py-40 px-6 sm:px-12 w-full bg-[#050505] border-y border-white/[0.05] relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">
              Origem da Solução
            </span>
            <h2 className="font-[Inter] text-3xl sm:text-5xl font-medium tracking-tight text-white">
              Como pensamos a engenharia.
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0">
            {["Problema", "Arquitetura", "Produto", "Código", "Validação", "Evolução"].map((step, i, arr) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col md:flex-row items-center w-full"
              >
                <div className="px-6 py-4 bg-[#030303] border border-white/[0.08] rounded-2xl w-full md:w-auto text-center shadow-lg relative overflow-hidden group">
                  <span className="font-[JetBrains_Mono] text-[9px] tracking-[0.2em] uppercase text-white/40 block mb-1">
                    Etapa 0{i + 1}
                  </span>
                  <span className={`font-[Inter] text-xs sm:text-sm tracking-wider uppercase ${i === arr.length - 1 ? 'text-white font-semibold' : 'text-white/70 font-medium'}`}>
                    {step}
                  </span>
                </div>
                {i !== arr.length - 1 && (
                  <ArrowRight strokeWidth={1.5} className="w-4 h-4 text-white/20 hidden md:block mx-auto flex-shrink-0" />
                )}
                {i !== arr.length - 1 && (
                  <ArrowDown strokeWidth={1.5} className="w-4 h-4 text-white/20 md:hidden my-2 flex-shrink-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESTRICTIONS SECTION */}
      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-5"
          >
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">
              Restrições Estritas
            </span>
            <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.08] mb-6">
              Boas decisões consistem <br />
              <span className="font-[Fraunces] italic font-light text-white/40">em dizer não.</span>
            </h2>
            <p className="text-white/50 font-light text-lg leading-relaxed">
              Manter a integridade arquitetural exige limites rigorosos sobre o que recusamos construir.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-4"
          >
            {[
              "Nunca criamos soluções específicas ou pontuais para um único cliente.",
              "Nunca duplicamos componentes nem reescrevemos lógica existente.",
              "Nunca espalhamos regras de negócio sem centralização clara.",
              "Nunca sacrificamos estabilidade arquitetural por velocidade efêmera.",
              "Nunca implementamos funcionalidades sem um propósito operacional cristalino."
            ].map((text, i) => (
              <motion.div variants={fadeUp} key={i} className="p-6 rounded-2xl bg-[#050505] border border-white/[0.08] flex items-center gap-5 hover:border-white/20 transition-all duration-300">
                <span className="font-[JetBrains_Mono] text-xs text-white/40 tracking-widest font-medium">
                  0{i + 1}
                </span>
                <p className="font-[Inter] text-base sm:text-lg font-light text-white/80">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SYSTEMIC PATTERNS */}
      <section className="py-32 sm:py-48 px-6 sm:px-12 bg-[#050505] border-y border-white/[0.05] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-24 text-center"
          >
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">
              Padrões Sistêmicos
            </span>
            <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white">
              Princípios de Arquitetura
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Cpu, title: "Escalabilidade", desc: "A infraestrutura cresce de forma transparente, suportando novos cenários sem intervenção." },
              { icon: Layers, title: "Modularidade", desc: "Blocos isolados e independentes. Se uma peça for substituída, o sistema permanece intacto." },
              { icon: Code2, title: "Consistência", desc: "Um único padrão visual, lógico e estrutural permeia absolutamente toda a aplicação." },
              { icon: Terminal, title: "Legibilidade", desc: "Código escrito para ser lido por humanos primeiro, e processado por máquinas depois." },
              { icon: ShieldCheck, title: "Reutilização", desc: "Nenhum problema deve ser resolvido duas vezes. Centralizamos inteligência e design." },
              { icon: Compass, title: "Governança", desc: "Controle estrito sobre permissões, histórico e ciclo de vida de cada dado criado." }
            ].map((item, i) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.08 }}
                  className="p-10 rounded-[32px] bg-[#030303] border border-white/[0.08] flex flex-col justify-between shadow-xl group hover:border-white/20 transition-all duration-500"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center mb-8 text-white/70 group-hover:scale-110 group-hover:text-white transition-all">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-[Inter] text-xl font-medium tracking-tight text-white mb-3">{item.title}</h3>
                  </div>
                  <p className="text-sm font-light text-white/50 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HORIZON & CULTURE */}
      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="p-10 sm:p-14 rounded-[32px] bg-[#050505] border border-white/[0.08] flex flex-col justify-between shadow-2xl"
          >
            <motion.div variants={fadeUp}>
              <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">
                Visão de Horizonte
              </span>
              <h2 className="font-[Inter] text-3xl sm:text-5xl font-medium tracking-tight text-white leading-[1.1] mb-6">
                Construímos produtos. <br />
                <span className="font-[Fraunces] italic font-light text-white/40">Não projetos efêmeros.</span>
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-base sm:text-lg font-light text-white/50 leading-relaxed mt-6">
              Enxergamos o horizonte. Toda escolha de abstração, arquitetura ou banco de dados considera um cenário de uso para daqui a 5, 10 ou 20 anos. O tempo é o verdadeiro juiz da boa engenharia.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="p-10 sm:p-14 rounded-[32px] bg-[#050505] border border-white/[0.08] flex flex-col justify-between shadow-2xl"
          >
            <motion.div variants={fadeUp}>
              <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">
                Cultura de Engenharia
              </span>
              <h2 className="font-[Inter] text-3xl sm:text-5xl font-medium tracking-tight text-white leading-[1.1] mb-6">
                A melhor ideia <br />
                <span className="font-[Fraunces] italic font-light text-white/40">sempre vence.</span>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-4 mt-6">
              <p className="text-base sm:text-lg font-light text-white/50 leading-relaxed">
                Toda decisão arquitetural é debatida e revisada. O código é uma responsabilidade compartilhada por toda a equipe, sem donos de módulos e sem egos.
              </p>
              <p className="text-base sm:text-lg font-light text-white/50 leading-relaxed">
                A excelência coletiva supera qualquer genialidade isolada.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FINAL STATEMENT & CTA */}
      <section className="py-32 sm:py-48 px-6 sm:px-12 w-full bg-[#050505] border-y border-white/[0.05] relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-8"
          >
            Nosso trabalho não termina <br />
            <span className="font-[Fraunces] italic font-light text-white/40">quando o software funciona.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg sm:text-xl font-light text-white/50 leading-relaxed max-w-2xl mx-auto mb-12"
          >
            O verdadeiro objetivo da engenharia é construir plataformas que continuem funcionando de forma transparente e silenciosa conforme sua empresa escala.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link
              href="/atlas"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-tight hover:scale-[0.98] hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              <span>Ver a plataforma em ação</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FOOTER BADGE */}
      <section className="py-24 px-6 sm:px-12 flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center gap-4 border-t border-white/[0.05] w-full max-w-md pt-12"
        >
          <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/40">
            Git · GitHub · NestJS · Next.js · React · TypeScript · PostgreSQL · Redis
          </span>
          <div className="flex flex-col items-center gap-1 mt-2">
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase font-medium text-white/80">
              Fifteen Miles
            </span>
            <span className="font-[JetBrains_Mono] text-[9px] tracking-[0.2em] uppercase text-white/30">
              Engineering Architecture
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}