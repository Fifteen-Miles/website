'use client';

import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Compass, Layers, ShieldCheck, Cpu, Users, Globe } from "lucide-react";
import Link from "next/link";
import Seo from "../components/Seo";
import LazyImage from "../components/LazyImage";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
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

export default function Company() {
  useDisplayFonts();

  return (
    <div className="min-h-screen bg-white text-[#1D1D1F] font-[Inter] selection:bg-black/50 selection:text-white overflow-x-hidden">
      <Seo title="Sobre — Fifteen Miles" description="Quem somos: visão, origem e propósito da Fifteen Miles — plataformas empresariais duradouras." path="/company" />
      
      <div className="fixed inset-0 bg-[radial-gradient(#1D1D1F_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none z-0" />

      <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center pt-32 pb-40 px-6 sm:px-12 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-[#1D1D1F]/80 mb-8"
          >
            <span>Capítulo I · A Instituição</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-[Inter] text-5xl sm:text-7xl lg:text-[7.5rem] tracking-[-0.03em] font-medium leading-[1.02] text-[#1D1D1F]"
          >
            Ainda estamos construindo <br />
            <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">a Fifteen Miles.</span>
            <br />
            E isso é exatamente o que nos motiva.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-10 text-xl sm:text-2xl text-[#86868B] font-light tracking-tight leading-relaxed max-w-2xl"
          >
            Acreditamos que grandes empresas não surgem de grandes ideias. Elas surgem da disciplina de construir todos os dias.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-14 flex flex-col sm:flex-row items-center gap-5">
            <Link
              href="/atlas"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-md bg-[#1D1D1F] text-white font-medium text-xs tracking-[0.15em] uppercase hover:bg-black transition-all group shadow-lg"
            >
              <span>Conheça o Atlas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#manifesto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#F5F5F7] border border-[#1D1D1F]/10 text-[#1D1D1F] font-medium text-xs tracking-[0.15em] uppercase hover:bg-[#E8E8ED] transition-colors"
            >
              Nosso Manifesto
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-7xl mx-auto mt-24 h-[50vh] md:h-[65vh] rounded-3xl overflow-hidden relative border border-[#1D1D1F]/10 bg-[#F5F5F7] shadow-xl"
        >
          <LazyImage
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2500&auto=format&fit=crop"
            alt="Arquitetura e Concreto Minimalista"
            className="w-full h-full object-cover grayscale opacity-90"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto relative z-10 border-t border-[#1D1D1F]/10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-6"
          >
            <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">
              Capítulo II · Visão
            </span>
            <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F] leading-[1.08]">
              Uma empresa brasileira. <br />
              <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">Uma visão global.</span>
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-6 space-y-6 text-lg sm:text-xl font-light text-[#86868B] leading-relaxed border-l border-[#1D1D1F]/10 pl-8 md:pl-12"
          >
            <p>
              A Fifteen Miles nasceu no Brasil, mas foi criada pensando em competir com empresas do mundo inteiro.
            </p>
            <p>
              Não queremos construir apenas softwares descartáveis. Queremos construir plataformas capazes de permanecer relevantes por décadas, elevando o patamar operacional das organizações.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 bg-[#F5F5F7] border-y border-[#1D1D1F]/10 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">
            Capítulo III · A Origem Real
          </span>
          <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F] leading-[1.1] mb-8">
            O Atlas nasceu para resolver <br /> problemas reais.
          </h2>
          <p className="text-lg sm:text-xl font-light text-[#86868B] leading-relaxed mb-8">
            Foi inicialmente concebido e utilizado no dia a dia da Eletra. Conforme operávamos, percebemos rapidamente que o caos de sistemas fragmentados não era exclusividade de uma única empresa — era o fardo de milhares.
          </p>
          <p className="font-[Fraunces] italic text-2xl text-[#1D1D1F] font-light">
            Então decidimos transformar aquela solução interna em um produto definitivo.
          </p>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-20 text-center"
        >
          <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">
            Capítulo IV · Premissas
          </span>
          <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F]">
            O que acreditamos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Não acreditamos em software descartável.",
            "Não acreditamos em complexidade desnecessária.",
            "Não acreditamos em dezenas de sistemas desconectados.",
            "Acreditamos que empresas merecem operar melhor."
          ].map((text, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="p-10 bg-[#F5F5F7] border border-[#1D1D1F]/10 rounded-3xl flex items-center justify-center min-h-[220px] text-center shadow-sm"
            >
              <p className="font-[Inter] text-2xl sm:text-3xl font-light tracking-tight text-[#1D1D1F] leading-snug">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 w-full bg-[#1D1D1F] text-white relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">
            Capítulo V · Identidade
          </span>
          <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white mb-8">
            Por que Fifteen Miles?
          </h2>
          <p className="text-lg sm:text-2xl font-light tracking-wide text-[#A8A399] leading-relaxed">
            O nome carrega a essência da jornada, da distância percorrida com perseverança e da ideia inegociável de progresso contínuo rumo ao longo prazo. Não é sobre velocidade explosiva; é sobre constância inabalável na construção.
          </p>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-20 text-center"
        >
          <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">
            Capítulo VI · Ecossistema
          </span>
          <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F]">
            O que estamos construindo
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Atlas", desc: "O sistema operacional empresarial unificado." },
            { name: "Hephaestus", desc: "O sistema de automações feito para leigos e experientes." },
            { name: "Marketplace", desc: "Ecossistema aberto de extensões e módulos especializados." },
            { name: "IA", desc: "Automação cognitiva integrada diretamente aos processos." },
            { name: "Ecossistema", desc: "Uma visão unificada e perfeitamente integrada para o futuro." }
          ].map((item, i) => (
            <motion.div
              key={item.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="p-8 bg-[#F5F5F7] border border-[#1D1D1F]/10 rounded-3xl flex flex-col justify-between min-h-[240px]"
            >
              <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B]">Módulo 0{i+1}</span>
              <div>
                <h3 className="font-[Inter] text-2xl font-medium tracking-tight text-[#1D1D1F] mb-2">{item.name}</h3>
                <p className="text-sm font-light text-[#86868B] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 bg-[#F5F5F7] border-y border-[#1D1D1F]/10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">Capítulo VII · Cultura</span>
              <h2 className="font-[Inter] text-4xl sm:text-5xl font-medium tracking-tight text-[#1D1D1F] leading-[1.1] mb-6">
                Empresas são feitas <br />
                <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">de pessoas.</span>
              </h2>
              <p className="text-base sm:text-lg font-light text-[#86868B] leading-relaxed">
                Toda decisão importante é discutida coletivamente. A melhor ideia sempre vence, independentemente de quem a propôs. Não existe ego individual; existe a obsessão compartilhada por construir algo extraordinário.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="border-l border-[#1D1D1F]/10 pl-8 md:pl-12 flex flex-col justify-center"
            >
              <h3 className="font-[Inter] text-2xl font-medium tracking-tight text-[#1D1D1F] mb-3">Como trabalhamos</h3>
              <p className="text-sm sm:text-base font-light text-[#86868B] leading-relaxed mb-6">
                Da concepção à entrega, mantemos um fluxo estrito de rigor conceitual e validação contínua.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["Problema", "Pesquisa", "Discussão", "Arquitetura", "Produto", "Validação", "Evolução"].map((step, idx) => (
                  <span key={step} className="px-4 py-2 bg-white border border-[#1D1D1F]/10 rounded-full font-[JetBrains_Mono] text-[10px] tracking-wider uppercase text-[#86868B]">
                    0{idx+1}. {step}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F] mb-4"
          >
            Projetado para durar décadas.
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-base sm:text-lg font-light text-[#86868B] max-w-2xl mx-auto"
          >
            Construímos com a mesma paciência necessária para criar algo que continuará relevante daqui a vinte anos.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Pensamento de Longo Prazo", desc: "Decisões orientadas pelo impacto futuro e pela sustentabilidade duradoura da arquitetura." },
            { title: "Excelência Antes da Velocidade", desc: "Preferimos fazer certo uma única vez a ter que reconstruir apressadamente depois." },
            { title: "Simplicidade Exige Engenharia", desc: "A verdadeira elegância oculta uma complexidade imensa nos bastidores para parecer simples ao usuário." },
            { title: "Software é Patrimônio", desc: "Tratamos cada linha de código e cada dado como ativos vitais e perenes da instituição." },
            { title: "Empresas Antes da Tecnologia", desc: "A tecnologia serve exclusivamente para potencializar a clareza e a autonomia do negócio." }
          ].map((val, i) => (
            <motion.div
              key={val.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="p-8 bg-[#F5F5F7] border border-[#1D1D1F]/10 rounded-3xl flex flex-col justify-between"
            >
              <span className="font-[JetBrains_Mono] text-xs text-[#86868B] tracking-widest block mb-6">0{i+1}</span>
              <div>
                <h3 className="font-[Inter] text-xl font-medium tracking-tight text-[#1D1D1F] mb-2">{val.title}</h3>
                <p className="text-sm font-light text-[#86868B] leading-relaxed">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 bg-[#F5F5F7] border-y border-[#1D1D1F]/10 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="p-8 sm:p-12 bg-white border border-[#1D1D1F]/10 rounded-3xl"
          >
            <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">O Presente</span>
            <h2 className="font-[Inter] text-3xl sm:text-4xl font-medium tracking-tight text-[#1D1D1F] mb-6">Hoje.</h2>
            <ul className="space-y-4 text-base sm:text-lg font-light text-[#86868B]">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#1D1D1F] rounded-full" /> Empresa fundada recentemente</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#1D1D1F] rounded-full" /> Primeiro produto em desenvolvimento contínuo</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#1D1D1F] rounded-full" /> Primeiros clientes corporativos e validações reais</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#1D1D1F] rounded-full" /> Estruturação de fundamentos e marca</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="p-8 sm:p-12 bg-white border border-[#1D1D1F]/10 rounded-3xl"
          >
            <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">O Futuro</span>
            <h2 className="font-[Inter] text-3xl sm:text-4xl font-medium tracking-tight text-[#1D1D1F] mb-6">Amanhã.</h2>
            <ul className="space-y-4 text-base sm:text-lg font-light text-[#86868B]">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#1D1D1F] rounded-full" /> Empresas inteiras operando sobre o Atlas</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#1D1D1F] rounded-full" /> Lançamento do ecossistema e Marketplace</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#1D1D1F] rounded-full" /> IA nativa integrada aos processos do dia a dia</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#1D1D1F] rounded-full" /> Expansão internacional estruturada</li>
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
          <motion.span variants={fadeUp} className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block">
            Nosso Manifesto
          </motion.span>
          <motion.p variants={fadeUp} className="font-[Inter] text-3xl sm:text-5xl font-light tracking-tight text-[#1D1D1F] leading-snug">
            Não seguimos tendências. Construímos infraestrutura.
          </motion.p>
          <motion.p variants={fadeUp} className="font-[Inter] text-3xl sm:text-5xl font-light tracking-tight text-[#1D1D1F] leading-snug">
            Não perseguimos velocidade efêmera. Perseguimos excelência estrutural.
          </motion.p>
          <motion.p variants={fadeUp} className="font-[Inter] text-3xl sm:text-5xl font-light tracking-tight text-[#1D1D1F] leading-snug">
            Não queremos lançar dezenas de produtos. Queremos construir poucos produtos extraordinários.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 bg-[#F5F5F7] border-y border-[#1D1D1F]/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-20 text-center"
          >
            <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">Liderança</span>
            <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F]">
              Quem constrói.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Nathanael", role: "Founder & CEO", desc: "Responsável por produto, arquitetura e visão geral da empresa." },
              { name: "Gabryel", role: "CFO & CBO", desc: "Estratégia financeira, operações e expansão de negócios." },
              { name: "Arthur", role: "Senior Software Engineer", desc: "Engenharia de sistemas, performance e robustez técnica." },
              { name: "Vinicius", role: "Senior Software Engineer", desc: "Arquitetura de componentes e experiência de interface." },
              { name: "Jaciara", role: "Chief Legal Officer", desc: "Conformidade, governança corporativa e segurança jurídica." }
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
                className="p-8 bg-white border border-[#1D1D1F]/10 rounded-3xl flex flex-col justify-between shadow-sm"
              >
                <div>
                  <span className="font-[JetBrains_Mono] text-xs tracking-[0.2em] uppercase text-[#86868B] block mb-3">{member.role}</span>
                  <h3 className="font-[Inter] text-2xl font-medium tracking-tight text-[#1D1D1F] mb-2">{member.name}</h3>
                </div>
                <p className="text-sm font-light text-[#86868B] leading-relaxed mt-6 border-t border-[#1D1D1F]/10 pt-4">{member.desc}</p>
              </motion.div>
            ))}
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
            className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F] mb-6"
          >
            Ainda estamos escrevendo <br /> <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">os primeiros capítulos.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl font-light text-[#86868B] max-w-2xl leading-relaxed mb-16"
          >
            A Fifteen Miles ainda é jovem, mas todas as grandes instituições também foram um dia. Estamos construindo com calma, com disciplina e pensando em décadas, não em meses.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-20">
            <h3 className="font-[Inter] text-3xl sm:text-5xl font-medium tracking-tight text-[#1D1D1F] mb-10">
              Se você acredita que software pode ser melhor, <br />
              <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">vamos conversar.</span>
            </h3>

            <Link
              href="/atlas"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-md bg-[#1D1D1F] text-white font-medium text-xs tracking-[0.15em] uppercase hover:bg-black transition-all group shadow-lg"
            >
              <span>Conheça o Atlas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-16 pt-12 flex flex-col items-center gap-2 border-t border-[#1D1D1F]/10 w-full max-w-xs"
        >
          <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase font-medium text-[#1D1D1F]">
            Fifteen Miles
          </span>
          <span className="font-[JetBrains_Mono] text-[9px] tracking-[0.2em] uppercase text-[#86868B]">
            Institution
          </span>
        </motion.div>
      </section>
    </div>
  );
}