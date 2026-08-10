'use client';

import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { Link } from "react-router-dom";
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

export default function Manifesto() {
  useDisplayFonts();

  return (
    <div className="min-h-screen bg-white text-[#1D1D1F] font-[Inter] selection:bg-black/50 selection:text-white overflow-x-hidden">
      <Seo title="Manifesto — Fifteen Miles" description="Manifesto da Fifteen Miles: princípios, crenças e visão sobre construção de software duradouro." path="/manifesto" />
      
      <div className="fixed inset-0 bg-[radial-gradient(#1D1D1F_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none z-0" />

      <section className="relative min-h-[90svh] w-full flex flex-col items-center justify-center pt-32 pb-24 px-6 sm:px-12 text-center z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-[#1D1D1F]/10 text-[11px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-[#1D1D1F]/80">
              <Compass className="w-3.5 h-3.5" />
              <span>Capítulo I · Documento Fundador</span>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-[Inter] text-5xl sm:text-7xl lg:text-[7.5rem] tracking-[-0.03em] font-medium leading-[1.02] text-[#1D1D1F] mb-8"
          >
            Não estamos construindo <br />
            <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">mais um software.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl text-[#86868B] font-light tracking-tight max-w-3xl leading-relaxed mb-16"
          >
            Estamos tentando mudar a forma como empresas operam.
          </motion.p>

          <motion.div variants={fadeUp} className="w-full">
            <p className="font-[Fraunces] italic font-light text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#1D1D1F]">
              Projetado para durar décadas.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="px-6 sm:px-12 max-w-7xl mx-auto py-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4 }}
          className="w-full h-[50vh] md:h-[75vh] rounded-3xl overflow-hidden shadow-xl border border-[#1D1D1F]/10 bg-[#F5F5F7]"
        >
          <LazyImage
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2500&auto=format&fit=crop"
            alt="Arquitetura Monumental"
            className="w-full h-full object-cover grayscale opacity-90"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-10 text-xl sm:text-3xl font-light tracking-tight text-[#1D1D1F] leading-snug"
        >
          <motion.p variants={fadeUp}>
            Toda empresa nasce acreditando que irá durar muitos anos.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#86868B]">
            Mas poucas escolhem ferramentas construídas para acompanhar essa jornada.
          </motion.p>
          <motion.p variants={fadeUp} className="font-[Fraunces] italic text-[#1D1D1F] font-normal">
            Nós acreditamos que isso precisa mudar.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-6xl mx-auto relative z-10 border-t border-[#1D1D1F]/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-24"
        >
          <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">
            Capítulo II · O Diagnóstico
          </span>
          <h2 className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F]">
            Por que existimos.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-24 text-base sm:text-lg font-light text-[#86868B] leading-relaxed">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 sm:p-10 rounded-3xl bg-[#F5F5F7] border border-[#1D1D1F]/10">
            Existe um excesso de ferramentas no mercado. Existe um excesso de complexidade acumulada. Existe um excesso de sistemas desconectados que prometem clareza, mas entregam apenas ruído operacional.
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 sm:p-10 rounded-3xl bg-[#F5F5F7] border border-[#1D1D1F]/10">
            As empresas perderam o controle da própria operação. Foram divididas em silos efêmeros, reféns de fluxos fragmentados e plataformas passageiras.
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-16 border-y border-[#1D1D1F]/10"
        >
          {[
            "Mais sistemas.", "Mais logins.", "Mais integrações.",
            "Mais planilhas.", "Mais retrabalho.", "Mais ruído.",
            "Menos contexto.", "Menos clareza."
          ].map((phrase, i) => (
            <motion.div key={i} variants={fadeUp} className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#1D1D1F]/10">
              <span className={`font-[Inter] text-sm sm:text-base tracking-tight ${phrase.startsWith('Menos') ? 'text-[#1D1D1F] font-semibold' : 'text-[#86868B] font-light'}`}>
                {phrase}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="px-6 sm:px-12 max-w-7xl mx-auto py-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4 }}
          className="w-full h-[50vh] md:h-[75vh] rounded-3xl overflow-hidden shadow-xl border border-[#1D1D1F]/10 bg-[#F5F5F7]"
        >
          <LazyImage
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2500&auto=format&fit=crop"
            alt="Biblioteca e Estruturas Sólidas"
            className="w-full h-full object-cover grayscale opacity-90"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-5xl mx-auto space-y-32 sm:space-y-48 text-center relative z-10">
        <motion.div variants={fadeUp}>
          <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">
            Capítulo III · Crenças
          </span>
        </motion.div>
        {[
          "Acreditamos que software é patrimônio.",
          "Acreditamos que empresas merecem operar melhor.",
          "Acreditamos que simplicidade exige engenharia.",
          "Acreditamos que velocidade sem direção não constrói legado."
        ].map((belief, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <p className="font-[Inter] text-3xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F] leading-snug">
              {belief}
            </p>
          </motion.div>
        ))}
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 bg-[#F5F5F7] border-y border-[#1D1D1F]/10 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-6"
          >
            <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block">Capítulo IV · Postura</span>
            <h2 className="font-[Inter] text-3xl sm:text-5xl font-medium tracking-tight text-[#1D1D1F] leading-tight">
              O mercado mede quantidade. <br />
              <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">Nós medimos qualidade.</span>
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-6 text-base sm:text-lg font-light text-[#86868B] leading-relaxed border-l border-[#1D1D1F]/10 pl-8 md:pl-12"
          >
            <p>O mercado passou a valorizar a velocidade vazia. Lançar dezenas de produtos descartáveis a cada trimestre tornou-se o padrão da indústria.</p>
            <p>Nós escolhemos o caminho oposto. Queremos construir poucos produtos, mas que permaneçam extraordinariamente relevantes durante décadas.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="p-8 sm:p-12 bg-[#F5F5F7] border border-[#1D1D1F]/10 rounded-3xl"
          >
            <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">Capítulo V</span>
            <motion.h3 variants={fadeUp} className="font-[Inter] text-2xl sm:text-3xl font-medium tracking-tight text-[#1D1D1F] mb-8">
              O que recusamos
            </motion.h3>
            <ul className="space-y-4 text-base sm:text-lg font-light text-[#86868B]">
              {[
                "Não seguimos tendências passageiras.",
                "Não perseguimos o hype do momento.",
                "Não criamos funcionalidades sem propósito.",
                "Não sacrificamos arquitetura em prol de atalhos.",
                "Não construímos software descartável."
              ].map((item, i) => (
                <motion.div variants={fadeUp} key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#1D1D1F] rounded-full flex-shrink-0" />
                  <li>{item}</li>
                </motion.div>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="p-8 sm:p-12 bg-[#1D1D1F] text-white rounded-3xl"
          >
            <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">Capítulo VI</span>
            <motion.h3 variants={fadeUp} className="font-[Inter] text-2xl sm:text-3xl font-medium tracking-tight text-white mb-8">
              O que buscamos
            </motion.h3>
            <ul className="space-y-4 text-base sm:text-lg font-light text-[#A8A399]">
              {[
                "Construir com paciência e disciplina.",
                "Pensar em décadas, não em trimestres.",
                "Projetar sistemas de clareza absoluta.",
                "Eliminar a complexidade acidental.",
                "Erguer infraestrutura perene."
              ].map((item, i) => (
                <motion.div variants={fadeUp} key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full flex-shrink-0" />
                  <li>{item}</li>
                </motion.div>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.span variants={fadeUp} className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block">
            Capítulo VII · O Início
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-[Inter] text-3xl sm:text-5xl font-medium tracking-tight text-[#1D1D1F]">
            O Atlas é apenas <br /> <span className="font-[Fraunces] italic font-light text-[#1D1D1F]/40">o primeiro passo.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg font-light text-[#86868B] leading-relaxed max-w-2xl mx-auto">
            Não é o objetivo final. É a primeira pedra, a primeira fundação e a primeira grande construção de um ecossistema inteiro que virá a seguir.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 bg-[#F5F5F7] border-y border-[#1D1D1F]/10 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">Capítulo VIII · Visão</span>
            <h2 className="font-[Inter] text-3xl sm:text-4xl font-medium tracking-tight text-[#1D1D1F] mb-4">
              O futuro.
            </h2>
            <p className="text-base sm:text-lg font-light text-[#86868B] leading-relaxed">
              Atlas, Hermes, Athena, Marketplace, IA e ecossistema unificado. Uma visão integrada onde a tecnologia desaparece e a empresa simplesmente opera com perfeição.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="border-l border-[#1D1D1F]/10 pl-8 md:pl-12 flex flex-col justify-center"
          >
            <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">Capítulo IX · Compromisso</span>
            <h2 className="font-[Inter] text-3xl sm:text-4xl font-medium tracking-tight text-[#1D1D1F] mb-4">
              Nossa responsabilidade.
            </h2>
            <p className="text-base sm:text-lg font-light text-[#86868B] leading-relaxed">
              Empresas confiarão seus processos, suas pessoas, sua operação e seu conhecimento histórico ao nosso software. Isso exige uma responsabilidade inegociável que honraremos em cada linha de código.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 max-w-5xl mx-auto text-center space-y-32 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <p className="font-[Fraunces] italic font-light text-4xl sm:text-7xl lg:text-8xl tracking-tight text-[#1D1D1F] mb-6">
            Não pensamos em cinco anos.
          </p>
          <p className="font-[Inter] text-2xl sm:text-4xl font-medium tracking-tight text-[#86868B]">
            Pensamos nas próximas décadas.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-3xl mx-auto p-10 rounded-3xl bg-[#F5F5F7] border border-[#1D1D1F]/10"
        >
          <span className="font-[JetBrains_Mono] text-xs tracking-[0.25em] uppercase text-[#86868B] block mb-4">Capítulo X · Origem</span>
          <h3 className="font-[Inter] text-2xl sm:text-4xl font-medium tracking-tight text-[#1D1D1F] mb-4">
            Feito no Brasil. Para o mundo.
          </h3>
          <p className="text-base sm:text-lg font-light text-[#86868B] leading-relaxed">
            Somos brasileiros. Construímos no Brasil, entendendo a nossa realidade corporativa, mas mantendo rigorosamente padrões de excelência de nível internacional.
          </p>
        </motion.div>
      </section>

      <section className="py-32 sm:py-48 px-6 sm:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden bg-[#F5F5F7] border-t border-[#1D1D1F]/10 z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-8 mb-20"
        >
          <motion.p variants={fadeUp} className="font-[Inter] text-2xl sm:text-4xl font-light text-[#86868B]">
            O software muda.
          </motion.p>
          <motion.p variants={fadeUp} className="font-[Inter] text-2xl sm:text-4xl font-light text-[#86868B]">
            A engenharia evolui.
          </motion.p>
          <motion.p variants={fadeUp} className="font-[Inter] text-2xl sm:text-4xl font-light text-[#86868B]">
            As empresas crescem.
          </motion.p>
          <motion.p variants={fadeUp} className="font-[Fraunces] italic font-light text-3xl sm:text-6xl text-[#1D1D1F]">
            Os princípios permanecem.
          </motion.p>

          <div className="pt-12">
            <p className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-[#1D1D1F]">
              Essa é a Fifteen Miles.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-3xl mx-auto space-y-8 mb-24"
        >
          <p className="text-base sm:text-xl font-light text-[#86868B] leading-relaxed">
            Algumas empresas constroem aplicativos. Outras constroem plataformas. Nós queremos construir fundações.
          </p>
          <p className="text-base sm:text-xl font-light text-[#86868B] leading-relaxed mb-10">
            Porque acreditamos que toda grande empresa merece uma infraestrutura à altura de sua ambição.
          </p>

          <Link
            to="/atlas"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1D1D1F] text-white font-medium text-xs tracking-[0.15em] uppercase hover:bg-black transition-all group shadow-lg"
          >
            <span>Conheça o Atlas</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="pt-12 flex flex-col items-center gap-2 border-t border-[#1D1D1F]/10 w-full max-w-xs relative z-10"
        >
          <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase font-medium text-[#1D1D1F]">
            Fifteen Miles
          </span>
          <span className="font-[JetBrains_Mono] text-[9px] tracking-[0.2em] uppercase text-[#86868B]">
            Manifesto
          </span>
        </motion.div>
      </section>
    </div>
  );
}