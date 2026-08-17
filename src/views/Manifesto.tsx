'use client';

import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import Link from "next/link";
import Seo from "../components/Seo";
import LazyImage from "../components/LazyImage";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16 },
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
    <div className="absolute inset-0 pointer-events-none [perspective:1000px] overflow-hidden opacity-20 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10" />
      <div 
        className="absolute inset-x-0 bottom-0 h-[100vh] origin-bottom"
        style={{
          transform: "rotateX(75deg) translateY(120px) scale(2.2)",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to top, black 5%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to top, black 5%, transparent 80%)"
        }}
      />
    </div>
  );
}

export default function Manifesto() {
  useDisplayFonts();

  return (
    <div className="relative min-h-screen bg-[#030303] text-white font-[Inter] overflow-hidden selection:bg-white/20">
      <Seo title="Manifesto — Fifteen Miles" description="Manifesto oficial da Fifteen Miles: princípios, premissas imutáveis e visão sobre infraestruturas perenes." path="/manifesto" />
      
      <GridBackground />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04)_0%,transparent_65%)] pointer-events-none z-0" />

      <section className="relative min-h-[92vh] w-full flex flex-col items-center justify-center pt-44 pb-28 px-6 sm:px-12 text-center z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl text-[10px] font-[JetBrains_Mono] tracking-[0.25em] uppercase text-white/80 shadow-[0_0_25px_rgba(255,255,255,0.03)]">
              <Compass className="w-3.5 h-3.5 text-white/60" />
              <span>Capítulo I · Documento Fundador</span>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-[Inter] text-5xl sm:text-7xl lg:text-[8rem] tracking-[-0.04em] font-medium leading-[1.02] text-white mb-8"
          >
            <span className="block">Não estamos construindo</span>
            <span className="block font-[Fraunces] italic font-light text-white/40 mt-1">mais um software.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl text-white/50 font-light tracking-tight max-w-3xl leading-relaxed mb-16"
          >
            Estamos redefinindo a forma como corporações de alta escala operam, centralizam inteligência e constroem perenidade digital.
          </motion.p>

          <motion.div variants={fadeUp} className="w-full">
            <p className="font-[Fraunces] italic font-light text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white/90">
              Projetado para durar décadas.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="px-6 sm:px-12 max-w-7xl mx-auto py-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[50vh] md:h-[75vh] rounded-[36px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-white/[0.08] bg-[#050505] relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 pointer-events-none" />
          <LazyImage
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2500&auto=format&fit=crop"
            alt="Arquitetura Monumental"
            className="w-full h-full object-cover grayscale contrast-125 opacity-60 scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-center pointer-events-none">
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 bg-black/40">
              Monumental Architecture
            </span>
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/30">
              Fifteen Miles Lab
            </span>
          </div>
        </motion.div>
      </section>

      <section className="py-36 sm:py-48 px-6 sm:px-12 max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12 text-2xl sm:text-4xl font-light tracking-tight text-white/90 leading-snug"
        >
          <motion.p variants={fadeUp}>
            Toda empresa nasce acreditando que irá perdurar por gerações.
          </motion.p>
          <motion.p variants={fadeUp} className="text-white/40">
            Mas poucas escolhem ferramentas estruturadas para acompanhar o peso dessa ambição.
          </motion.p>
          <motion.p variants={fadeUp} className="font-[Fraunces] italic text-white font-normal text-3xl sm:text-5xl">
            Nós acreditamos que isso precisa mudar absolutamente.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-36 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto relative z-10 border-t border-white/[0.05]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-28"
        >
          <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">
            Capítulo II · O Diagnóstico
          </span>
          <h2 className="font-[Inter] text-4xl sm:text-6xl lg:text-[5rem] font-medium tracking-tight text-white">
            Por que existimos.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-10 sm:p-14 rounded-[36px] bg-[#050505] border border-white/[0.08] shadow-2xl">
            <p className="text-base sm:text-lg font-light text-white/60 leading-relaxed">
              Existe um excesso alarmante de ferramentas no mercado corporativo. Há complexidade desnecessária acumulada e silos desconectados que prometem clareza operacional, mas entregam apenas ruído e fragmentação.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-10 sm:p-14 rounded-[36px] bg-[#050505] border border-white/[0.08] shadow-2xl">
            <p className="text-base sm:text-lg font-light text-white/60 leading-relaxed">
              As empresas perderam o controle de sua própria base de dados e fluxos vitais. Tornaram-se reféns de ecossistemas passageiros, assinaturas efêmeras e arquiteturas sem coesão.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-20 border-y border-white/[0.05]"
        >
          {[
            "Mais sistemas.", "Mais logins.", "Mais integrações.",
            "Mais planilhas.", "Mais retrabalho.", "Mais ruído.",
            "Menos contexto.", "Menos clareza."
          ].map((phrase, i) => (
            <motion.div key={i} variants={fadeUp} className="p-8 rounded-[24px] bg-[#050505] border border-white/[0.08] shadow-xl">
              <span className={`font-[Inter] text-sm sm:text-base tracking-tight ${phrase.startsWith('Menos') ? 'text-white font-semibold' : 'text-white/40 font-light'}`}>
                {phrase}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-36 sm:py-48 px-6 sm:px-12 max-w-5xl mx-auto space-y-36 sm:space-y-48 text-center relative z-10">
        <motion.div variants={fadeUp}>
          <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">
            Capítulo III · Crenças Imutáveis
          </span>
        </motion.div>
        {[
          "Acreditamos que software é um patrimônio corporativo vital.",
          "Acreditamos que empresas merecem operar com elegância absoluta.",
          "Acreditamos que a verdadeira simplicidade exige alta engenharia.",
          "Acreditamos que velocidade sem direção arquitetural destrói o futuro."
        ].map((belief, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <p className="font-[Inter] text-3xl sm:text-6xl font-medium tracking-tight text-white leading-snug">
              {belief}
            </p>
          </motion.div>
        ))}
      </section>

      <section className="py-36 sm:py-48 px-6 sm:px-12 bg-[#050505] border-y border-white/[0.05] relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-6"
          >
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block">Capítulo IV · Postura</span>
            <h2 className="font-[Inter] text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
              O mercado mede quantidade. <br />
              <span className="font-[Fraunces] italic font-light text-white/40">Nós medimos permanência.</span>
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-6 text-base sm:text-lg font-light text-white/60 leading-relaxed border-l border-white/10 pl-8 md:pl-12"
          >
            <p>O ecossistema digital passou a glorificar a velocidade vazia. Lançar dezenas de utilitários descartáveis por trimestre tornou-se o padrão da indústria.</p>
            <p>Nós escolhemos o caminho inverso. Construímos poucas plataformas, mas com um nível de rigor técnico que lhes permite operar impecavelmente ao longo de décadas.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-36 sm:py-48 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="p-10 sm:p-14 bg-[#050505] border border-white/[0.08] rounded-[36px] shadow-2xl"
          >
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-6">Capítulo V</span>
            <motion.h3 variants={fadeUp} className="font-[Inter] text-2xl sm:text-3xl font-medium tracking-tight text-white mb-8">
              O que recusamos
            </motion.h3>
            <ul className="space-y-5 text-base sm:text-lg font-light text-white/60">
              {[
                "Nunca seguimos modismos ou tendências passageiras.",
                "Nunca perseguimos o hype tecnológico do trimestre.",
                "Nunca criamos funcionalidades sem propósito operacional.",
                "Nunca sacrificamos a integridade arquitetural por atalhos.",
                "Nunca construímos software descartável."
              ].map((item, i) => (
                <motion.div variants={fadeUp} key={i} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full flex-shrink-0" />
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
            className="p-10 sm:p-14 bg-[#080808] border border-white/20 text-white rounded-[36px] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none" />
            <span className="relative z-10 font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-6">Capítulo VI</span>
            <motion.h3 variants={fadeUp} className="relative z-10 font-[Inter] text-2xl sm:text-3xl font-medium tracking-tight text-white mb-8">
              O que buscamos
            </motion.h3>
            <ul className="relative z-10 space-y-5 text-base sm:text-lg font-light text-white/70">
              {[
                "Construir com extrema paciência e rigor disciplinar.",
                "Pensar em décadas de operação, não em trimestres financeiros.",
                "Projetar sistemas de clareza conceitual absoluta.",
                "Eliminar toda complexidade acidental do fluxo diário.",
                "Erguer infraestrutura empresarial inabalável."
              ].map((item, i) => (
                <motion.div variants={fadeUp} key={i} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                  <li>{item}</li>
                </motion.div>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-36 sm:py-48 px-6 sm:px-12 max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.span variants={fadeUp} className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block">
            Capítulo VII · O Marco Inicial
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white">
            O Atlas OS é apenas <br /> <span className="font-[Fraunces] italic font-light text-white/40">o primeiro alicerce.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg sm:text-xl font-light text-white/50 leading-relaxed max-w-2xl mx-auto">
            Não representa o objetivo final. É a primeira pedra de um ecossistema integrado inteiro que continuará expandindo as fronteiras da engenharia de software corporativa.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-36 sm:py-48 px-6 sm:px-12 bg-[#050505] border-y border-white/[0.05] relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">Capítulo VIII · Visão</span>
            <h2 className="font-[Inter] text-3xl sm:text-4xl font-medium tracking-tight text-white mb-4">
              O horizonte tecnológico.
            </h2>
            <p className="text-base sm:text-lg font-light text-white/60 leading-relaxed">
              Atlas, ecossistemas modulares, IA soberana e integração sem atritos. Uma visão unificada onde a complexidade da tecnologia desaparece e a empresa opera com perfeição silenciosa.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="border-l border-white/10 pl-8 md:pl-12 flex flex-col justify-center"
          >
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">Capítulo IX · Compromisso</span>
            <h2 className="font-[Inter] text-3xl sm:text-4xl font-medium tracking-tight text-white mb-4">
              A responsabilidade institucional.
            </h2>
            <p className="text-base sm:text-lg font-light text-white/60 leading-relaxed">
              Empresas confiarão seus processos críticos, suas equipes, suas operações e seus dados históricos ao nosso software. Isso exige um nível inegociável de honra e precisão técnica.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-36 sm:py-48 px-6 sm:px-12 max-w-5xl mx-auto text-center space-y-36 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <p className="font-[Fraunces] italic font-light text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white mb-6">
            Não pensamos em cinco anos.
          </p>
          <p className="font-[Inter] text-2xl sm:text-4xl font-medium tracking-tight text-white/50">
            Pensamos nas próximas décadas.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-3xl mx-auto p-12 rounded-[36px] bg-[#050505] border border-white/[0.08] shadow-2xl"
        >
          <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-4">Capítulo X · Origem</span>
          <h3 className="font-[Inter] text-2xl sm:text-4xl font-medium tracking-tight text-white mb-4">
            Feito no Brasil. Para o mundo.
          </h3>
          <p className="text-base sm:text-lg font-light text-white/60 leading-relaxed">
            Desenvolvido com profundo entendimento da realidade corporativa nacional, mas mantendo rigorosamente padrões arquiteturais de excelência global.
          </p>
        </motion.div>
      </section>

      <section className="py-36 sm:py-48 px-6 sm:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden bg-[#050505] border-t border-white/[0.05] z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-6 mb-20"
        >
          <motion.p variants={fadeUp} className="font-[Inter] text-2xl sm:text-4xl font-light text-white/50">
            O software muda.
          </motion.p>
          <motion.p variants={fadeUp} className="font-[Inter] text-2xl sm:text-4xl font-light text-white/50">
            A engenharia evolui.
          </motion.p>
          <motion.p variants={fadeUp} className="font-[Inter] text-2xl sm:text-4xl font-light text-white/50">
            As empresas crescem.
          </motion.p>
          <motion.p variants={fadeUp} className="font-[Fraunces] italic font-light text-4xl sm:text-6xl text-white">
            Os princípios permanecem imutáveis.
          </motion.p>

          <div className="pt-12">
            <p className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight text-white">
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
          <p className="text-lg sm:text-xl font-light text-white/60 leading-relaxed">
            Algumas empresas constroem aplicativos efêmeros. Outras constroem sistemas. Nós escolhemos erguer fundações.
          </p>
          <p className="text-lg sm:text-xl font-light text-white/60 leading-relaxed mb-12">
            Porque acreditamos que toda organização de alto nível merece uma infraestrutura à altura de sua ambição.
          </p>

          <Link
            href="/atlas"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-regular text-xs font-[JetBrains_Mono] tracking-[0.2em] hover:bg-white/90 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            <span>Conhecer o Atlas OS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="pt-12 flex flex-col items-center gap-2 border-t border-white/[0.08] w-full max-w-xs relative z-10"
        >
          <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase font-medium text-white/80">
            Fifteen Miles
          </span>
          <span className="font-[JetBrains_Mono] text-[9px] tracking-[0.25em] uppercase text-white/40">
            Manifesto Institucional
          </span>
        </motion.div>
      </section>
    </div>
  );
}