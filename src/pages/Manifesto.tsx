import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo"
import LazyImage from "../components/LazyImage"

/* ─── ANIMAÇÕES SUAVES E ELEGANTES ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Manifesto() {
  return (
    <div className="min-h-screen bg-[#FCFBFA] text-[#0F0E0C] font-[Raleway] selection:bg-[#D4AF37]/20 selection:text-[#0F0E0C] overflow-x-hidden">
      <Seo title="Manifesto — Fifteen Miles" description="Manifesto da Fifteen Miles: princípios, crenças e visão sobre construção de software duradouro." path="/manifesto" />
      
      {/* ═══════════════════════════════════════════════════
          01. HERO / ABERTURA DO MANIFESTO
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[90svh] w-full flex flex-col items-center justify-center pt-32 pb-24 px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#8C7355] border border-[#8C7355]/20 px-6 py-2.5 rounded-full">
              Fifteen Miles · Documento Fundador
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-8xl lg:text-[8rem] font-light tracking-tighter leading-[0.95] text-[#0F0E0C] mb-12"
          >
            Não estamos construindo <br />
            <span className="italic text-[#8C7355]">mais um software.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-2xl md:text-4xl font-light tracking-tight text-[#706C64] max-w-3xl leading-relaxed mb-20"
          >
            Estamos tentando mudar a forma como empresas operam.
          </motion.p>

          <motion.div variants={fadeUp} className="w-full">
            <p className="text-6xl md:text-8xl lg:text-[9rem] font-light tracking-tighter text-[#0F0E0C] italic">
              Projetado para durar décadas.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Imagem Editorial 1 (Arquitetura/Pedra) */}
      <section className="px-6 max-w-7xl mx-auto py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4 }}
          className="w-full h-[50vh] md:h-[75vh] rounded-3xl overflow-hidden shadow-2xl"
        >
          <LazyImage
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2500&auto=format&fit=crop"
            alt="Arquitetura Monumental"
            className="w-full h-full object-cover grayscale opacity-90"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          02. INTRODUÇÃO
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-64 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12 text-2xl md:text-4xl font-light tracking-tight text-[#0F0E0C] leading-snug"
        >
          <motion.p variants={fadeUp}>
            Toda empresa nasce acreditando que irá durar muitos anos.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#706C64]">
            Mas poucas escolhem ferramentas construídas para acompanhar essa jornada.
          </motion.p>
          <motion.p variants={fadeUp} className="italic text-[#8C7355]">
            Nós acreditamos que isso precisa mudar.
          </motion.p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          03. POR QUE EXISTIMOS & O PROBLEMA (FRASOMAX)
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-72 px-6 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-32"
        >
          <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#8C7355] block mb-6">
            O Diagnóstico
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F0E0C]">
            Por que existimos.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-40 text-lg md:text-xl font-light tracking-wide text-[#706C64] leading-relaxed">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            Existe um excesso de ferramentas no mercado. Existe um excesso de complexidade acumulada. Existe um excesso de sistemas desconectados que prometem clareza, mas entregam apenas ruído operacional.
          </motion.p>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            As empresas perderam o controle da própria operação. Foram divididas em silos efêmeros, reféns de fluxos fragmentados e plataformas passageiras.
          </motion.p>
        </div>

        {/* Impacto Visual Rápido */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-20 border-y border-[#0F0E0C]/10"
        >
          {[
            "Mais sistemas.", "Mais logins.", "Mais integrações.",
            "Mais planilhas.", "Mais retrabalho.", "Mais ruído.",
            "Menos contexto.", "Menos clareza."
          ].map((phrase, i) => (
            <motion.div key={i} variants={fadeUp} className="py-6">
              <span className={`text-xl md:text-2xl font-light tracking-tight ${phrase.startsWith('Menos') ? 'text-[#8C7355] font-medium' : 'text-[#0F0E0C]'}`}>
                {phrase}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Imagem Editorial 2 (Biblioteca/Concreto) */}
      <section className="px-6 max-w-7xl mx-auto py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4 }}
            className="w-full h-[50vh] md:h-[75vh] rounded-3xl overflow-hidden shadow-2xl"
          >
            <LazyImage
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2500&auto=format&fit=crop"
              alt="Biblioteca e Estruturas Sólidas"
              className="w-full h-full object-cover grayscale opacity-90"
              style={{ width: '100%', height: '100%' }}
            />
          </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          04. ACREDITAMOS (TELAS CHEIAS)
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-64 px-6 max-w-5xl mx-auto space-y-40 md:space-y-64 text-center">
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
            <p className="text-4xl md:text-7xl font-light tracking-tighter text-[#0F0E0C] leading-snug">
              {belief}
            </p>
          </motion.div>
        ))}
      </section>

      {/* ═══════════════════════════════════════════════════
          05. O PROBLEMA DO MERCADO
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-64 px-6 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-8"
          >
            <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#8C7355] block">Postura</span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F0E0C] leading-tight">
              O mercado mede quantidade. <br />
              <span className="italic text-[#8C7355]">Nós medimos qualidade.</span>
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-6 text-lg md:text-xl font-light tracking-wide text-[#706C64] leading-relaxed border-l border-[#0F0E0C]/10 pl-8 md:pl-12"
          >
            <p>O mercado passou a valorizar a velocidade vazia. Lançar dezenas de produtos descartáveis a cada trimestre tornou-se o padrão da indústria.</p>
            <p>Nós escolhemos o caminho oposto. Queremos construir poucos produtos, mas que permaneçam extraordinariamente relevantes durante décadas.</p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          06. O QUE RECUSAMOS & O QUE BUSCAMOS
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-72 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32">
          {/* Recusamos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="p-12 md:p-16 bg-[#FAF8F5] border border-[#0F0E0C]/5 rounded-3xl"
          >
            <motion.h3 variants={fadeUp} className="text-3xl font-light tracking-tight text-[#0F0E0C] mb-12">
              O que recusamos
            </motion.h3>
            <ul className="space-y-6 text-lg font-light tracking-wide text-[#706C64]">
              {[
                "Não seguimos tendências passageiras.",
                "Não perseguimos o hype do momento.",
                "Não criamos funcionalidades sem propósito.",
                "Não sacrificamos arquitetura em prol de atalhos.",
                "Não construímos software descartável."
              ].map((item, i) => (
                <motion.div variants={fadeUp} key={i} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-[#8C7355] rounded-full" />
                  <li>{item}</li>
                </motion.div>
              ))}
            </ul>
          </motion.div>

          {/* Buscamos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="p-12 md:p-16 bg-[#0F0E0C] text-[#FAF8F5] rounded-3xl"
          >
            <motion.h3 variants={fadeUp} className="text-3xl font-light tracking-tight text-white mb-12">
              O que buscamos
            </motion.h3>
            <ul className="space-y-6 text-lg font-light tracking-wide text-[#A8A399]">
              {[
                "Construir com paciência e disciplina.",
                "Pensar em décadas, não em trimestres.",
                "Projetar sistemas de clareza absoluta.",
                "Eliminar a complexidade acidental.",
                "Erguer infraestrutura perene."
              ].map((item, i) => (
                <motion.div variants={fadeUp} key={i} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
                  <li>{item}</li>
                </motion.div>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          07. O ATLAS (A PRIMEIRA PEDRA)
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-64 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.span variants={fadeUp} className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#8C7355] block">
            O Início
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-7xl font-light tracking-tighter text-[#0F0E0C]">
            O Atlas é apenas <br /> <span className="italic text-[#8C7355]">o primeiro passo.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl font-light tracking-wide text-[#706C64] leading-relaxed max-w-2xl mx-auto">
            Não é o objetivo final. É a primeira pedra, a primeira fundação e a primeira grande construção de um ecossistema inteiro que virá a seguir.
          </motion.p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          08. O FUTURO & NOSSA RESPONSABILIDADE
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-72 px-6 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#8C7355] block mb-6">Visão</span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F0E0C] mb-8 leading-tight">
              O futuro.
            </h2>
            <p className="text-lg font-light tracking-wide text-[#706C64] leading-relaxed mb-8">
              Atlas, Hermes, Athena, Marketplace, IA e ecossistema unificado. Uma visão integrada onde a tecnologia desaparece e a empresa simplesmente opera com perfeição.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="border-l border-[#0F0E0C]/10 pl-8 md:pl-12 flex flex-col justify-center"
          >
            <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#8C7355] block mb-6">Compromisso</span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F0E0C] mb-8 leading-tight">
              Nossa responsabilidade.
            </h2>
            <p className="text-lg font-light tracking-wide text-[#706C64] leading-relaxed">
              Empresas confiarão seus processos, suas pessoas, sua operação e seu conhecimento histórico ao nosso software. Isso exige uma responsabilidade inegociável que honraremos em cada linha de código.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          09. LONGO PRAZO & BRASIL
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-72 px-6 max-w-5xl mx-auto text-center space-y-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <p className="text-6xl md:text-9xl font-light tracking-tighter text-[#0F0E0C] italic">
            Não pensamos em cinco anos.
          </p>
          <p className="text-4xl md:text-6xl font-light tracking-tighter text-[#8C7355] mt-6">
            Pensamos nas próximas décadas.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#8C7355] block mb-6">Origem</span>
          <h3 className="text-3xl md:text-5xl font-light tracking-tighter text-[#0F0E0C] mb-6">
            Feito no Brasil. Para o mundo.
          </h3>
          <p className="text-lg font-light tracking-wide text-[#706C64] leading-relaxed">
            Somos brasileiros. Construímos no Brasil, entendendo a nossa realidade corporativa, mas mantendo rigorosamente padrões de excelência de nível internacional.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          10. CONCLUSÃO / BLOCO FINAL FILOSÓFICO
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-72 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden bg-[#FAF8F5]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto space-y-12 mb-32"
        >
          <motion.p variants={fadeUp} className="text-4xl md:text-6xl font-light tracking-tighter text-[#706C64]">
            O software muda.
          </motion.p>
          <motion.p variants={fadeUp} className="text-4xl md:text-6xl font-light tracking-tighter text-[#706C64]">
            A engenharia evolui.
          </motion.p>
          <motion.p variants={fadeUp} className="text-4xl md:text-6xl font-light tracking-tighter text-[#706C64]">
            As empresas crescem.
          </motion.p>
          <motion.p variants={fadeUp} className="text-5xl md:text-7xl font-light tracking-tighter text-[#0F0E0C] italic">
            Os princípios permanecem.
          </motion.p>

          <div className="pt-20">
            <p className="text-6xl md:text-8xl font-light tracking-tighter text-[#0F0E0C]">
              Essa é a Fifteen Miles.
            </p>
          </div>
        </motion.div>

        {/* Bloco Final com CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-4xl mx-auto space-y-12"
        >
          <p className="text-xl md:text-2xl font-light tracking-wide text-[#706C64]">
            Algumas empresas constroem aplicativos. Outras constroem plataformas. Nós queremos construir fundações.
          </p>
          <p className="text-xl md:text-2xl font-light tracking-wide text-[#706C64] mb-16">
            Porque acreditamos que toda grande empresa merece uma infraestrutura à altura de sua ambição.
          </p>

          <Link
            to="/atlas"
            className="group inline-flex items-center gap-6 px-12 py-6 bg-[#0F0E0C] text-[#FAF8F5] rounded-full transition-all duration-700 hover:shadow-[0_20px_40px_rgba(15,14,12,0.2)] hover:scale-[1.02]"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase">
              Conheça o Atlas
            </span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
              <ArrowRight strokeWidth={1.5} className="w-4 h-4 text-[#FAF8F5] group-hover:translate-x-1 transition-transform duration-500" />
            </div>
          </Link>
        </motion.div>

        {/* Footer Minimalista */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-48 pt-16 flex flex-col items-center gap-4 border-t border-[#0F0E0C]/10 w-full max-w-sm relative z-10"
        >
          <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#0F0E0C]">
            Fifteen Miles
          </span>
          <span className="text-[9px] font-light tracking-[0.3em] uppercase text-[#8C7355]">
            Manifesto
          </span>
        </motion.div>
      </section>

    </div>
  );
}