'use client';

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Compass, Layers, ShieldCheck, Cpu, Users, Globe, Sparkles, Terminal, Code2, Scale, Image as ImageIcon } from "lucide-react";
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
    transition: { staggerChildren: 0.15 },
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

function TeamMemberCard({ name, role, desc }: { name: string, role: string, desc: string }) {
  return (
    <motion.div 
      variants={fadeUp}
      className="group relative rounded-[28px] border border-white/[0.08] bg-[#050505] p-8 flex flex-col justify-between overflow-hidden shadow-2xl hover:border-white/20 transition-all duration-700"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none group-hover:from-white/[0.04] transition-colors duration-700" />
      
      <div className="relative z-10 mb-8">
        <div className="aspect-[4/3] w-full rounded-[18px] bg-[#0a0a0a] border border-white/[0.06] flex flex-col items-center justify-center relative overflow-hidden group-hover:border-white/20 transition-all duration-500">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
            <ImageIcon className="w-5 h-5 text-white/30" />
          </div>
          <span className="font-[JetBrains_Mono] text-[9px] tracking-[0.25em] uppercase text-white/40">
            Retrato Institucional
          </span>
        </div>
      </div>

      <div className="relative z-10 space-y-3">
        <span className="inline-block font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-white/40">
          {role}
        </span>
        <h3 className="font-[Inter] text-2xl font-medium tracking-tight text-white">
          {name}
        </h3>
        <p className="font-[Inter] text-xs font-light text-white/50 leading-relaxed pt-2 border-t border-white/[0.05]">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Company() {
  useDisplayFonts();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#030303] text-white font-[Inter] overflow-hidden selection:bg-white/20"
    >
      <Seo title="Sobre a Fifteen Miles — Infraestrutura e Visão" description="Conheça a visão, origem e o propósito da Fifteen Miles — plataformas empresariais projetadas para durar décadas." path="/company" />
      
      <GridBackground />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none z-0" />

      <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center pt-36 pb-24 px-6 sm:px-12 z-10">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center text-center w-full max-w-6xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md text-[10px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-white/80 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
              <Compass className="w-3.5 h-3.5" />
              <span>Capítulo I · A Instituição</span>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-[Inter] text-5xl sm:text-7xl lg:text-[7.5rem] tracking-[-0.04em] font-medium leading-[1.02] text-white"
          >
            <motion.span variants={fadeUp} className="block">Ainda estamos construindo</motion.span>
            <motion.span variants={fadeUp} className="block font-[Fraunces] italic font-light text-white/40">a Fifteen Miles.</motion.span>
            <motion.span variants={fadeUp} className="block text-2xl sm:text-4xl text-white/60 font-light mt-4">E isso é exatamente o que nos motiva.</motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-10 text-xl sm:text-2xl text-white/50 font-light tracking-tight max-w-2xl leading-relaxed"
          >
            Acreditamos que grandes empresas não surgem de grandes ideias repentinas. Elas surgem da disciplina inegociável de construir todos os dias.
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
              href="#manifesto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/[0.03] border border-white/[0.1] text-white font-medium text-sm tracking-tight hover:bg-white/[0.05] transition-colors backdrop-blur-sm"
            >
              Ler Nosso Manifesto
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1200px] mt-24 h-[50vh] md:h-[70vh] rounded-[32px] overflow-hidden relative border border-white/[0.08] bg-[#050505] shadow-2xl z-20"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 pointer-events-none" />
          <LazyImage
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2500&auto=format&fit=crop"
            alt="Arquitetura Minimalista"
            className="w-full h-full object-cover grayscale contrast-125 opacity-70 scale-105 hover:scale-100 transition-transform duration-1000"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto relative z-10 border-t border-white/[0.05]">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-6"
          >
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">
              Capítulo II · Visão Global
            </span>
            <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.08]">
              Uma empresa brasileira. <br />
              <span className="font-[Fraunces] italic font-light text-white/40">Uma visão sem fronteiras.</span>
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-6 space-y-6 text-lg sm:text-xl font-light text-white/60 leading-relaxed border-l border-white/[0.08] pl-8 md:pl-12"
          >
            <p>
              A Fifteen Miles nasceu no Brasil com a convicção absoluta de que podemos criar sistemas capazes de competir no mais alto nível global.
            </p>
            <p>
              Não criamos softwares descartáveis para preencher ciclos de mercado. Construímos infraestruturas perenes, projetadas para elevar o patamar operacional das organizações por décadas.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 bg-[#050505] border-y border-white/[0.05] relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">
            Capítulo III · A Origem Real
          </span>
          <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-8">
            O Atlas nasceu para resolver <br /> problemas reais de operação.
          </h2>
          <p className="text-lg sm:text-xl font-light text-white/50 leading-relaxed mb-10">
            Concebido inicialmente no dia a dia da Eletra, percebemos rapidamente que o caos gerado pela fragmentação de ferramentas não era um problema isolado — era o fardo invisível de milhares de empresas.
          </p>
          <p className="font-[Fraunces] italic text-2xl sm:text-3xl text-white/80 font-light">
            Decidimos transformar aquela solução interna no sistema operacional definitivo.
          </p>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-24 text-center"
        >
          <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">
            Capítulo IV · Premissas
          </span>
          <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white">
            O que recusamos acreditar
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Não acreditamos em software descartável.",
            "Não acreditamos em complexidade desnecessária.",
            "Não acreditamos em dezenas de sistemas desconectados.",
            "Acreditamos que empresas merecem operar com absoluta clareza."
          ].map((text, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="p-12 bg-[#050505] border border-white/[0.08] rounded-[32px] flex items-center justify-center min-h-[240px] text-center shadow-xl group hover:border-white/20 transition-all duration-500"
            >
              <p className="font-[Inter] text-2xl sm:text-3xl font-light tracking-tight text-white/90 leading-snug">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 w-full bg-[#020202] text-white relative overflow-hidden z-10 border-y border-white/[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">
            Capítulo V · Identidade
          </span>
          <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white mb-8">
            Por que Fifteen Miles?
          </h2>
          <p className="text-lg sm:text-2xl font-light tracking-wide text-white/60 leading-relaxed">
            O nome carrega a essência da jornada, da distância percorrida com perseverança e da ideia inegociável de progresso contínuo rumo ao longo prazo. Não buscamos a velocidade explosiva e efêmera; buscamos a constância inabalável na construção de relevância.
          </p>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-24 text-center"
        >
          <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">
            Capítulo VI · Ecossistema
          </span>
          <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white">
            O que estamos construindo
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Atlas OS", desc: "O sistema operacional empresarial unificado para centralizar processos, pessoas e dados." },
            { name: "Hephaestus", desc: "A camada física de infraestrutura e automações que interage diretamente com o mundo real." },
            { name: "Atlas Capture", desc: "O dispositivo físico de captura de tempo e hábitos operacionais na estação de trabalho." },
            { name: "Marketplace", desc: "Ecossistema aberto de extensões, integrações e módulos especializados." },
            { name: "Inteligência & IA", desc: "Camada cognitiva integrada aos dados estruturados da operação." },
            { name: "Governança", desc: "Soberania absoluta de dados, multi-tenancy e controle granular por RBAC." }
          ].map((item, i) => (
            <motion.div
              key={item.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="p-10 bg-[#050505] border border-white/[0.08] rounded-[32px] flex flex-col justify-between min-h-[260px] group hover:border-white/20 transition-all duration-500 shadow-xl"
            >
              <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40">Módulo 0{i+1}</span>
              <div className="mt-8">
                <h3 className="font-[Inter] text-2xl font-medium tracking-tight text-white mb-3">{item.name}</h3>
                <p className="text-sm font-light text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 bg-[#050505] border-y border-white/[0.05] relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">Capítulo VII · Cultura</span>
              <h2 className="font-[Inter] text-4xl sm:text-5xl font-medium tracking-tight text-white leading-[1.1] mb-6">
                Empresas são feitas <br />
                <span className="font-[Fraunces] italic font-light text-white/40">de pessoas íntegras.</span>
              </h2>
              <p className="text-base sm:text-lg font-light text-white/50 leading-relaxed">
                Toda decisão importante é discutida coletivamente. A melhor ideia sempre vence, independentemente de quem a propôs. Não existe ego individual; existe a obsessão compartilhada por construir algo verdadeiramente extraordinário.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="border-l border-white/[0.08] pl-8 md:pl-12 flex flex-col justify-center"
            >
              <h3 className="font-[Inter] text-2xl font-medium tracking-tight text-white mb-3">Como trabalhamos</h3>
              <p className="text-sm sm:text-base font-light text-white/50 leading-relaxed mb-8">
                Da concepção à entrega, mantemos um fluxo rigoroso de validação conceitual e refinamento contínuo.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["Problema", "Pesquisa", "Discussão", "Arquitetura", "Produto", "Validação", "Evolução"].map((step, idx) => (
                  <span key={step} className="px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full font-[JetBrains_Mono] text-[10px] tracking-wider uppercase text-white/70">
                    0{idx+1}. {step}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white mb-4"
          >
            Projetado para durar décadas.
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-base sm:text-lg font-light text-white/50 max-w-2xl mx-auto"
          >
            Construímos com a paciência necessária para criar sistemas que permanecerão indispensáveis daqui a vinte anos.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Pensamento de Longo Prazo", desc: "Decisões orientadas pelo impacto perene e pela sustentabilidade duradoura da arquitetura." },
            { title: "Excelência Antes da Velocidade", desc: "Preferimos fazer certo uma única vez a ter que reconstruir apressadamente no futuro." },
            { title: "Simplicidade Exige Engenharia", desc: "A verdadeira elegância oculta uma complexidade imensa nos bastidores para parecer simples ao usuário." },
            { title: "Software é Patrimônio", desc: "Tratamos cada linha de código e cada banco de dados como ativos vitais da instituição." },
            { title: "Empresas Antes da Tecnologia", desc: "A tecnologia serve exclusivamente para potencializar a clareza e a autonomia do negócio." }
          ].map((val, i) => (
            <motion.div
              key={val.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="p-10 bg-[#050505] border border-white/[0.08] rounded-[32px] flex flex-col justify-between shadow-xl group hover:border-white/20 transition-all duration-500"
            >
              <span className="font-[JetBrains_Mono] text-[10px] text-white/40 tracking-widest block mb-6">0{i+1}</span>
              <div>
                <h3 className="font-[Inter] text-xl font-medium tracking-tight text-white mb-3">{val.title}</h3>
                <p className="text-sm font-light text-white/50 leading-relaxed">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 bg-[#050505] border-y border-white/[0.05] relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="p-10 sm:p-14 bg-[#030303] border border-white/[0.08] rounded-[32px] shadow-2xl"
          >
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">O Presente</span>
            <h2 className="font-[Inter] text-3xl sm:text-4xl font-medium tracking-tight text-white mb-6">Hoje.</h2>
            <ul className="space-y-4 text-base sm:text-lg font-light text-white/60">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white rounded-full" /> Empresa estabelecida com foco em excelência</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white rounded-full" /> Atlas OS em desenvolvimento e validação contínua</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white rounded-full" /> Primeiros clientes corporativos operando na plataforma</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white rounded-full" /> Consolidação de fundamentos de engenharia e marca</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="p-10 sm:p-14 bg-[#030303] border border-white/[0.08] rounded-[32px] shadow-2xl"
          >
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">O Futuro</span>
            <h2 className="font-[Inter] text-3xl sm:text-4xl font-medium tracking-tight text-white mb-6">Amanhã.</h2>
            <ul className="space-y-4 text-base sm:text-lg font-light text-white/60">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white/40 rounded-full" /> Empresas inteiras operando nativamente sobre o Atlas</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white/40 rounded-full" /> Lançamento oficial da linha Hephaestus e Atlas Capture</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white/40 rounded-full" /> Inteligência operacional integrada aos processos</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white/40 rounded-full" /> Expansão internacional estruturada de alta escala</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="manifesto" className="py-32 sm:py-48 px-6 sm:px-12 max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.span variants={fadeUp} className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block">
            Nosso Manifesto
          </motion.span>
          <motion.p variants={fadeUp} className="font-[Inter] text-3xl sm:text-5xl font-light tracking-tight text-white leading-snug">
            Não seguimos tendências efêmeras. Construímos infraestrutura.
          </motion.p>
          <motion.p variants={fadeUp} className="font-[Inter] text-3xl sm:text-5xl font-light tracking-tight text-white/70 leading-snug">
            Não perseguimos ruído. Perseguimos excelência estrutural.
          </motion.p>
          <motion.p variants={fadeUp} className="font-[Inter] text-3xl sm:text-5xl font-light tracking-tight text-white/40 leading-snug">
            Não queremos lançar dezenas de produtos. Queremos construir poucos produtos extraordinários.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 bg-[#050505] border-y border-white/[0.05] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-24 text-center"
          >
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">Liderança</span>
            <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white">
              Quem constrói.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMemberCard name="Nathanael" role="Founder & CEO" desc="Responsável por produto, arquitetura de sistemas e visão geral da empresa." />
            <TeamMemberCard name="Gabryel" role="CFO & CBO" desc="Estratégia financeira, operações corporativas e expansão de negócios." />
            <TeamMemberCard name="Arthur" role="Senior Software Engineer" desc="Engenharia de sistemas, performance avançada e robustez técnica." />
            <TeamMemberCard name="Vinicius" role="Senior Software Engineer" desc="Arquitetura de componentes de alta performance e interface." />
            <TeamMemberCard name="Jaciara" role="Chief Legal Officer" desc="Conformidade regulatória, governança corporativa e segurança jurídica." />
          </div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="w-full max-w-4xl flex flex-col items-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white mb-6"
          >
            Ainda estamos escrevendo <br /> <span className="font-[Fraunces] italic font-light text-white/40">os primeiros capítulos.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl font-light text-white/50 max-w-2xl leading-relaxed mb-16"
          >
            A Fifteen Miles é construída com calma, com rigor técnico e pensando sempre em décadas, não em meses.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-20">
            <h3 className="font-[Inter] text-3xl sm:text-5xl font-medium tracking-tight text-white mb-10">
              Se você acredita que o software empresarial pode ser melhor, <br />
              <span className="font-[Fraunces] italic font-light text-white/40">vamos conversar.</span>
            </h3>

            <Link
              href="/atlas"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-tight hover:scale-[0.98] hover:bg-white/90 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              <span>Conheça o Atlas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-16 pt-12 flex flex-col items-center gap-2 border-t border-white/[0.05] w-full max-w-xs"
        >
          <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase font-medium text-white/80">
            Fifteen Miles
          </span>
          <span className="font-[JetBrains_Mono] text-[9px] tracking-[0.2em] uppercase text-white/30">
            Institution
          </span>
        </motion.div>
      </section>
    </div>
  );
}