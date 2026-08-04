import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

/* ─── ANIMAÇÕES SUAVES E ELEGANTES ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.98, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Engineering() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="min-h-screen bg-[#FCFBFA] text-[#0F0E0C] font-[Raleway] selection:bg-[#D4AF37]/20 selection:text-[#0F0E0C] overflow-x-hidden">
      
      {/* ═══════════════════════════════════════════════════
          01. HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[100svh] w-full flex flex-col items-center justify-center pt-32 pb-40 px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto"
        >
          <motion.h1
            variants={fadeUp}
            className="text-6xl md:text-8xl lg:text-[9rem] font-light tracking-tighter leading-[0.9] text-[#0F0E0C]"
          >
            A engenharia é <br />
            <span className="italic text-[#8C7355] pr-4">o produto.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-12 text-xl md:text-3xl font-light tracking-tight text-[#706C64] max-w-3xl leading-relaxed"
          >
            Não acreditamos em software descartável. Projetamos plataformas preparadas para evoluir durante décadas.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-20 flex flex-col sm:flex-row items-center gap-6">
            <a
              href="#"
              className="px-12 py-5 bg-[#0F0E0C] text-[#FAF8F5] rounded-full text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#1A1815] transition-all hover:scale-[1.02] duration-500"
            >
              Conhecer o Atlas
            </a>
            <a
              href="#filosofia"
              className="px-12 py-5 bg-transparent text-[#0F0E0C] border border-[#0F0E0C]/10 rounded-full text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#0F0E0C]/5 transition-colors duration-500"
            >
              Nossa filosofia
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image (Classical Architecture / Technical Blueprint feel) */}
        <motion.div 
          style={{ y: parallaxY, opacity: parallaxOpacity }}
          className="w-full max-w-7xl mx-auto mt-32 h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[#0F0E0C]/5 mix-blend-overlay z-10" />
          <img 
            src="https://images.unsplash.com/photo-1541888087617-64c8c7ad4372?q=80&w=2500&auto=format&fit=crop" 
            alt="Arquitetura Clássica e Concreto" 
            className="w-full h-full object-cover grayscale opacity-90"
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          02. NOSSA FILOSOFIA (OS 4 PRINCÍPIOS)
      ═══════════════════════════════════════════════════ */}
      <section id="filosofia" className="py-40 md:py-72 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-32 md:mb-48 text-center"
        >
          <h2 className="text-4xl md:text-7xl font-light tracking-tighter text-[#0F0E0C] leading-[1.1]">
            Antes de escrever código, <br />
            <span className="italic text-[#8C7355]">tomamos decisões.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
          {[
            { num: "I", title: "Clareza acima da complexidade.", desc: "Soluções brilhantes não são difíceis de entender. Se a arquitetura exige um manual exaustivo para ser compreendida, ela falhou em seu propósito mais básico." },
            { num: "II", title: "Escalabilidade desde o primeiro dia.", desc: "Não construímos para o tráfego de hoje. Erguemos fundações sólidas que suportam o peso do crescimento natural de uma operação sem a necessidade de reescritas dramáticas." },
            { num: "III", title: "Software é um patrimônio da empresa.", desc: "Linhas de código não são despesas operacionais; são ativos corporativos. Tratamos a base de código com o mesmo rigor de um projeto de engenharia civil." },
            { num: "IV", title: "Projetado para durar décadas.", desc: "Ignoramos tendências passageiras e metodologias efêmeras. Focamos em padrões arquiteturais que sobreviveram ao tempo e continuarão relevantes." }
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col border-t border-[#0F0E0C]/10 pt-12"
            >
              <span className="text-6xl md:text-8xl font-light tracking-tighter text-[#0F0E0C]/10 mb-8 select-none">
                {item.num}
              </span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-[#0F0E0C] mb-6 leading-snug">
                {item.title}
              </h3>
              <p className="text-lg md:text-xl font-light tracking-wide text-[#706C64] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          03. COMO PENSAMOS (FLUXO)
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-64 px-6 w-full bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-32"
          >
            <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#8C7355] block mb-8">
              A Origem da Solução
            </span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F0E0C]">
              Como pensamos.
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0">
            {["Problema", "Arquitetura", "Produto", "Código", "Validação", "Evolução"].map((step, i, arr) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="flex flex-col md:flex-row items-center w-full"
              >
                <div className="px-8 py-4 flex items-center justify-center">
                  <span className={`text-lg md:text-xl font-light tracking-widest ${i === arr.length - 1 ? 'text-[#8C7355] font-normal italic' : 'text-[#706C64]'}`}>
                    {step}
                  </span>
                </div>
                {i !== arr.length - 1 && (
                  <ArrowRight strokeWidth={1} className="w-5 h-5 text-[#0F0E0C]/20 hidden md:block mx-auto flex-shrink-0" />
                )}
                {i !== arr.length - 1 && (
                  <ArrowDown strokeWidth={1} className="w-4 h-4 text-[#0F0E0C]/20 md:hidden my-2 flex-shrink-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          04. O QUE NUNCA FAZEMOS
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-72 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#0F0E0C] leading-[1.1] mb-12">
              Boas decisões também consistem <br />
              <span className="italic text-[#8C7355]">em dizer não.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-10 border-l border-[#0F0E0C]/10 pl-10 md:pl-16"
          >
            {[
              "Nunca criamos soluções específicas para um único cliente.",
              "Nunca duplicamos componentes.",
              "Nunca espalhamos lógica pelo sistema.",
              "Nunca sacrificamos arquitetura por velocidade.",
              "Nunca implementamos funcionalidades sem propósito claro."
            ].map((text, i) => (
              <motion.div variants={fadeUp} key={i} className="flex items-start gap-6">
                <div className="w-2 h-px bg-[#8C7355] mt-4 flex-shrink-0" />
                <p className="text-xl md:text-2xl font-light tracking-wide text-[#706C64] leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          05. NOSSOS PRINCÍPIOS DE ARQUITETURA
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-64 px-6 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-32 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F0E0C]">
              Princípios de Arquitetura
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-16">
            {[
              { title: "Escalabilidade", desc: "A infraestrutura cresce de forma transparente, suportando novos cenários sem intervenção." },
              { title: "Modularidade", desc: "Blocos isolados e independentes. Se uma peça for substituída, o sistema permanece intacto." },
              { title: "Consistência", desc: "Um único padrão visual, lógico e estrutural permeia absolutamente toda a aplicação." },
              { title: "Legibilidade", desc: "Código escrito para ser lido por humanos primeiro, e processado por máquinas depois." },
              { title: "Reutilização", desc: "Nenhum problema deve ser resolvido duas vezes. Centralizamos inteligência e design." },
              { title: "Governança", desc: "Controle estrito sobre permissões, histórico e ciclo de vida de cada dado criado." }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="flex flex-col"
              >
                <div className="w-6 h-6 border border-[#0F0E0C]/10 rounded-full flex items-center justify-center mb-8">
                  <div className="w-1.5 h-1.5 bg-[#8C7355] rounded-full" />
                </div>
                <h3 className="text-2xl font-light tracking-tight text-[#0F0E0C] mb-4">{item.title}</h3>
                <p className="text-base font-light tracking-wide text-[#706C64] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          06. COMO CONSTRUÍMOS (FLUXO 2)
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-64 px-6 max-w-6xl mx-auto flex flex-col items-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-4xl md:text-5xl font-light tracking-tighter text-[#0F0E0C] mb-32 text-center"
        >
          O Caminho da Engenharia
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
          {["Pesquisa", "Discussão", "Arquitetura", "Protótipo", "Implementação", "Review", "Validação", "Entrega"].map((step, i, arr) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex items-center gap-12"
            >
              <span className="text-sm md:text-base font-light tracking-[0.2em] uppercase text-[#706C64]">
                {step}
              </span>
              {i !== arr.length - 1 && (
                <div className="w-12 h-px bg-[#0F0E0C]/10 hidden md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          07. QUALIDADE
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-64 px-6 w-full relative bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-32 md:mb-48 max-w-4xl"
          >
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#0F0E0C] leading-[1.1]">
              A qualidade não acontece no final. <br />
              <span className="italic text-[#8C7355]">Ela está presente durante todo o desenvolvimento.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-[#0F0E0C]/5 border border-[#0F0E0C]/5 rounded-2xl overflow-hidden">
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="p-12 md:p-16 bg-[#FCFBFA] hover:bg-white transition-colors duration-500"
              >
                <h3 className="text-xl font-light tracking-tight text-[#0F0E0C] mb-6">{item.title}</h3>
                <p className="text-sm font-light tracking-wide text-[#706C64] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          08. ENGENHARIA INSTITUCIONAL & CULTURA
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-64 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col justify-center"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F0E0C] leading-[1.1] mb-12">
              Construímos produtos. <br />
              <span className="italic text-[#8C7355]">Não projetos.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg md:text-xl font-light tracking-wide text-[#706C64] leading-relaxed">
              Enxergamos o horizonte. Toda decisão arquitetural, toda escolha de abstração e toda estrutura de banco de dados considera um cenário de uso para daqui a 5, 10 ou 20 anos. O tempo é o verdadeiro juiz da boa engenharia.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col justify-center border-l border-[#0F0E0C]/10 pl-10 md:pl-20"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F0E0C] leading-[1.1] mb-12">
              A melhor ideia <br />
              <span className="italic text-[#8C7355]">vence.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg md:text-xl font-light tracking-wide text-[#706C64] leading-relaxed mb-10">
              Toda decisão importante é discutida e revisada. O código é uma responsabilidade compartilhada da equipe, sem donos de módulos e sem egos. 
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg md:text-xl font-light tracking-wide text-[#706C64] leading-relaxed">
              Essa é a cultura da Fifteen Miles. A excelência coletiva supera a genialidade isolada.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          09. ENGENHARIA PARA EMPRESAS
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-64 px-6 w-full relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter text-[#0F0E0C] leading-[1.1] mb-16"
          >
            Nosso trabalho não termina <br />
            <span className="italic text-[#8C7355]">quando o software funciona.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl font-light tracking-wide text-[#706C64] leading-relaxed max-w-3xl mx-auto"
          >
            O objetivo da engenharia é construir plataformas que continuem funcionando impecavelmente, de forma fluida e silenciosa, conforme a sua organização cresce e o mundo muda.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          10. FERRAMENTAS & CTA FINAL
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-72 px-6 flex flex-col items-center justify-center text-center relative">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative z-10 w-full max-w-5xl"
        >
          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-[7rem] font-light tracking-tighter text-[#0F0E0C] leading-[0.95] mb-12"
          >
            Conheça o resultado <br /> da nossa <span className="italic text-[#8C7355]">engenharia.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl font-light tracking-wide text-[#706C64] max-w-3xl mx-auto leading-relaxed mb-24"
          >
            Toda essa filosofia existe por um único e definitivo motivo: construir produtos muito superiores ao padrão do mercado.
          </motion.p>

          <motion.div variants={fadeUp} className="flex justify-center">
            <a
              href="#"
              className="group flex items-center gap-6 px-12 py-6 bg-[#0F0E0C] text-[#FAF8F5] rounded-full transition-all duration-700 hover:shadow-[0_20px_40px_rgba(15,14,12,0.2)] hover:scale-[1.02]"
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase">
                Conhecer o Atlas
              </span>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                <ArrowRight strokeWidth={1.5} className="w-4 h-4 text-[#FAF8F5] group-hover:translate-x-1 transition-transform duration-500" />
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Discreet Tools Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-48 pt-16 flex flex-col items-center gap-8 border-t border-[#0F0E0C]/10 w-full"
        >
          <span className="text-[10px] font-light tracking-[0.4em] uppercase text-[#0F0E0C]/30 text-center px-4 leading-loose">
            Git &nbsp;·&nbsp; GitHub &nbsp;·&nbsp; Firebase &nbsp;·&nbsp; React &nbsp;·&nbsp; TypeScript &nbsp;·&nbsp; Vite &nbsp;·&nbsp; Cloudflare
          </span>
          <div className="flex flex-col items-center gap-2 mt-8">
            <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#0F0E0C]">
              Fifteen Miles
            </span>
            <span className="text-[9px] font-light tracking-[0.3em] uppercase text-[#8C7355]">
              Engineering
            </span>
          </div>
        </motion.div>
      </section>

    </div>
  );
}