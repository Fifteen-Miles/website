'use client';

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, ArrowDown, Terminal, Layers, ShieldCheck, Cpu, Code2, Compass } from "lucide-react";
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

export default function Engineering() {
  useDisplayFonts();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="min-h-screen bg-white text-[#1D1D1F] font-[Inter] selection:bg-black/50 selection:text-white overflow-x-hidden">
      <Seo title="Engenharia — Fifteen Miles" description="Princípios e práticas de engenharia da Fifteen Miles — software projetado para durar décadas." path="/engineering" />
      
      <div className="fixed inset-0 bg-[radial-gradient(#1D1D1F_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none z-0" />

      <section ref={heroRef} className="relative min-h-[100svh] w-full flex flex-col items-center justify-center pt-32 pb-40 px-6 sm:px-12 z-10">
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
            <span>Capítulo I · O Núcleo</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-[Inter] text-5xl sm:text-7xl lg:text-[7.5rem] tracking-[-0.03em] font-medium leading-[1.02] text-[#1D1D1F]"
          >
            A engenharia é <br />
            <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">o produto.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-10 text-xl sm:text-2xl text-[#86868B] font-light tracking-tight leading-relaxed max-w-3xl"
          >
            Não acreditamos em software descartável. Projetamos plataformas preparadas para evoluir durante décadas.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-14 flex flex-col sm:flex-row items-center gap-5">
            <a
              href="/atlas"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1D1D1F] text-white font-medium text-xs tracking-[0.15em] uppercase hover:bg-black transition-all group shadow-lg"
            >
              <span>Conhecer o Atlas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#filosofia"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F5F5F7] border border-[#1D1D1F]/10 text-[#1D1D1F] font-medium text-xs tracking-[0.15em] uppercase hover:bg-[#E8E8ED] transition-colors"
            >
              Nossa filosofia
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y: parallaxY, opacity: parallaxOpacity }}
          className="w-full max-w-7xl mx-auto mt-24 h-[50vh] md:h-[65vh] rounded-3xl overflow-hidden relative border border-[#1D1D1F]/10 bg-[#F5F5F7] shadow-xl"
        >
          <div className="absolute inset-0 bg-[#1D1D1F]/5 mix-blend-overlay z-10" />
          <LazyImage
            src="/concrete.jpg"
            alt="Arquitetura Clássica e Concreto"
            className="w-full h-full object-cover grayscale opacity-90"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>
      </section>

      <section id="filosofia" className="py-32 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto relative z-10 border-t border-[#1D1D1F]/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-24 text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-[#1D1D1F]/10 text-[11px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-[#86868B] mb-6"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Capítulo II · A Filosofia</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-[Inter] text-4xl sm:text-6xl lg:text-[4.5rem] tracking-[-0.03em] font-medium leading-[1.05] text-[#1D1D1F]">
            Antes de escrever código, <br />
            <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">tomamos decisões.</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { tag: "Módulo 01.A", num: "I", title: "Clareza acima da complexidade.", desc: "Soluções brilhantes não são difíceis de entender. Se a arquitetura exige um manual exaustivo para ser compreendida, ela falhou em seu propósito mais básico." },
            { tag: "Módulo 01.B", num: "II", title: "Escalabilidade desde o primeiro dia.", desc: "Não construímos para o tráfego de hoje. Erguemos fundações sólidas que suportam o peso do crescimento natural de uma operação sem a necessidade de reescritas dramáticas." },
            { tag: "Módulo 01.C", num: "III", title: "Software é um patrimônio da empresa.", desc: "Linhas de código não são despesas operacionais; são ativos corporativos. Tratamos a base de código com o mesmo rigor de um projeto de engenharia civil." },
            { tag: "Módulo 01.D", num: "IV", title: "Projetado para durar décadas.", desc: "Ignoramos tendências passageiras e metodologias efêmeras. Focamos em padrões arquiteturais que sobreviveram ao tempo e continuarão relevantes." }
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="p-8 sm:p-12 border border-[#1D1D1F]/10 bg-[#F5F5F7] rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B]">
                    {item.tag}
                  </span>
                  <span className="font-[Fraunces] italic text-2xl text-[#1D1D1F]/30">
                    {item.num}
                  </span>
                </div>
                <h3 className="font-[Inter] text-2xl sm:text-3xl font-medium tracking-tight text-[#1D1D1F] mb-4">
                  {item.title}
                </h3>
              </div>
              <p className="text-base sm:text-lg text-[#86868B] font-light leading-relaxed mt-6">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 sm:py-40 px-6 sm:px-12 w-full bg-[#F5F5F7] border-y border-[#1D1D1F]/10 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">
              A Origem da Solução
            </span>
            <h2 className="font-[Inter] text-3xl sm:text-5xl font-medium tracking-tight text-[#1D1D1F]">
              Como pensamos.
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
                <div className="px-6 py-3.5 bg-white border border-[#1D1D1F]/10 rounded-2xl w-full md:w-auto text-center shadow-sm">
                  <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase text-[#86868B] block mb-0.5">
                    Etapa 0{i + 1}
                  </span>
                  <span className={`font-[Inter] text-sm sm:text-base tracking-wide ${i === arr.length - 1 ? 'text-[#1D1D1F] font-semibold' : 'text-[#86868B] font-medium'}`}>
                    {step}
                  </span>
                </div>
                {i !== arr.length - 1 && (
                  <ArrowRight strokeWidth={1.5} className="w-4 h-4 text-[#86868B] hidden md:block mx-auto flex-shrink-0" />
                )}
                {i !== arr.length - 1 && (
                  <ArrowDown strokeWidth={1.5} className="w-4 h-4 text-[#86868B] md:hidden my-2 flex-shrink-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-5"
          >
            <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">
              Restrições Estritas
            </span>
            <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F] leading-[1.08] mb-6">
              Boas decisões consistem <br />
              <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">em dizer não.</span>
            </h2>
            <p className="text-[#86868B] font-light text-lg leading-relaxed">
              Manter a integridade de uma plataforma exige limites claros sobre o que recusamos construir.
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
              "Nunca criamos soluções específicas para um único cliente.",
              "Nunca duplicamos componentes.",
              "Nunca espalhamos lógica pelo sistema.",
              "Nunca sacrificamos arquitetura por velocidade.",
              "Nunca implementamos funcionalidades sem propósito claro."
            ].map((text, i) => (
              <motion.div variants={fadeUp} key={i} className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#1D1D1F]/10 flex items-center gap-5">
                <span className="font-[JetBrains_Mono] text-xs text-[#86868B] tracking-widest font-medium">
                  0{i + 1}
                </span>
                <p className="font-[Inter] text-base sm:text-lg font-light text-[#1D1D1F]">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
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
            <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">
              Padrões Sistêmicos
            </span>
            <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F]">
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
                  className="p-8 rounded-3xl bg-white border border-[#1D1D1F]/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#F5F5F7] border border-[#1D1D1F]/10 flex items-center justify-center mb-6">
                      <IconComp className="w-5 h-5 text-[#1D1D1F]" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-[Inter] text-xl font-medium tracking-tight text-[#1D1D1F] mb-3">{item.title}</h3>
                  </div>
                  <p className="text-sm font-light text-[#86868B] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 sm:py-40 px-6 sm:px-12 max-w-6xl mx-auto flex flex-col items-center relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-[Inter] text-3xl sm:text-5xl font-medium tracking-tight text-[#1D1D1F] mb-20 text-center"
        >
          O Caminho da Engenharia
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
          {["Pesquisa", "Discussão", "Arquitetura", "Protótipo", "Implementação", "Review", "Validação", "Entrega"].map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="px-6 py-3 rounded-full bg-[#F5F5F7] border border-[#1D1D1F]/10 flex items-center gap-3"
            >
              <span className="font-[JetBrains_Mono] text-[10px] text-[#86868B]">0{i + 1}</span>
              <span className="font-[Inter] text-sm font-medium text-[#1D1D1F] tracking-tight">
                {step}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 w-full bg-[#F5F5F7] border-y border-[#1D1D1F]/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-20 max-w-4xl"
          >
            <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">
              Garantia de Execução
            </span>
            <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F] leading-[1.08]">
              A qualidade não acontece no final. <br />
              <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">Ela está presente durante todo o desenvolvimento.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Arquitetura Revisada", desc: "Decisões fundamentais debatidas exaustivamente antes da primeira linha de código." },
              { title: "Código Revisado", desc: "Revisão minuciosa por pares para garantir excelência técnica e legibilidade absoluta." },
              { title: "Componentes Reutilizáveis", desc: "Construímos com átomos e moléculas. Nada é feito de forma isolada." },
              { title: "Documentação", desc: "A transferência de conhecimento é obrigatória, não opcional." },
              { title: "Padronização", desc: "Convenções imutáveis que garantem previsibilidade em toda a base de código." },
              { title: "Versionamento", desc: "Histórico limpo, organizado e perfeitamente rastreável para o futuro." }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className="p-8 rounded-3xl bg-white border border-[#1D1D1F]/10"
              >
                <h3 className="font-[Inter] text-lg font-medium tracking-tight text-[#1D1D1F] mb-3">{item.title}</h3>
                <p className="text-sm font-light text-[#86868B] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="p-10 rounded-3xl bg-[#F5F5F7] border border-[#1D1D1F]/10 flex flex-col justify-between"
          >
            <motion.div variants={fadeUp}>
              <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">
                Visão de Horizonte
              </span>
              <h2 className="font-[Inter] text-3xl sm:text-5xl font-medium tracking-tight text-[#1D1D1F] leading-[1.1] mb-6">
                Construímos produtos. <br />
                <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">Não projetos.</span>
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-base sm:text-lg font-light text-[#86868B] leading-relaxed">
              Enxergamos o horizonte. Toda decisão arquitetural, toda escolha de abstração e toda estrutura de banco de dados considera um cenário de uso para daqui a 5, 10 ou 20 anos. O tempo é o verdadeiro juiz da boa engenharia.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="p-10 rounded-3xl bg-[#F5F5F7] border border-[#1D1D1F]/10 flex flex-col justify-between"
          >
            <motion.div variants={fadeUp}>
              <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">
                Cultura Interna
              </span>
              <h2 className="font-[Inter] text-3xl sm:text-5xl font-medium tracking-tight text-[#1D1D1F] leading-[1.1] mb-6">
                A melhor ideia <br />
                <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">vence.</span>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-4">
              <p className="text-base sm:text-lg font-light text-[#86868B] leading-relaxed">
                Toda decisão importante é discutida e revisada. O código é uma responsabilidade compartilhada da equipe, sem donos de módulos e sem egos.
              </p>
              <p className="text-base sm:text-lg font-light text-[#86868B] leading-relaxed">
                Essa é a cultura da Fifteen Miles. A excelência coletiva supera a genialidade isolada.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 w-full bg-[#F5F5F7] border-y border-[#1D1D1F]/10 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F] leading-[1.1] mb-8"
          >
            Nosso trabalho não termina <br />
            <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">quando o software funciona.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg sm:text-xl font-light text-[#86868B] leading-relaxed max-w-2xl mx-auto"
          >
            O objetivo da engenharia é construir plataformas que continuem funcionando impecavelmente, de forma fluida e silenciosa, conforme a sua organização cresce e o mundo muda.
          </motion.p>
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
            className="font-[Inter] text-5xl sm:text-7xl font-medium tracking-tight text-[#1D1D1F] leading-[1.05] mb-8"
          >
            Conheça o resultado <br /> da nossa <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">engenharia.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl font-light text-[#86868B] max-w-2xl leading-relaxed mb-12"
          >
            Toda essa filosofia existe por um único e definitivo motivo: construir produtos muito superiores ao padrão do mercado.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="/atlas"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1D1D1F] text-white font-medium text-xs tracking-[0.15em] uppercase hover:bg-black transition-all group shadow-lg"
            >
              <span>Conhecer o Atlas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-32 pt-16 flex flex-col items-center gap-6 border-t border-[#1D1D1F]/10 w-full max-w-md"
        >
          <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-[#86868B]">
            Git · GitHub · Firebase · React · TypeScript · Vite · Cloudflare
          </span>
          <div className="flex flex-col items-center gap-1">
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase font-medium text-[#1D1D1F]">
              Fifteen Miles
            </span>
            <span className="font-[JetBrains_Mono] text-[9px] tracking-[0.2em] uppercase text-[#86868B]">
              Engineering
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}