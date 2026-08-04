import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Company() {
  return (
    <div className="min-h-screen bg-[#FCFBFA] text-[#0F0E0C] font-[Raleway] selection:bg-[#D4AF37]/20 selection:text-[#0F0E0C] overflow-x-hidden">
      
      {/* ═══════════════════════════════════════════════════
          01. HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center pt-32 pb-40 px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#8C7355] border border-[#8C7355]/20 px-6 py-2.5 rounded-full">
              A Instituição · Carta Aberta
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-[8rem] font-light tracking-tighter leading-[0.95] text-[#0F0E0C]"
          >
            Ainda estamos construindo <br />
            <span className="italic text-[#8C7355]">a Fifteen Miles.</span>
            <br />
            E isso é exatamente o que nos motiva.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-12 text-xl md:text-2xl font-light tracking-tight text-[#706C64] max-w-2xl leading-relaxed"
          >
            Acreditamos que grandes empresas não surgem de grandes ideias. Elas surgem da disciplina de construir todos os dias.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-16 flex flex-col sm:flex-row items-center gap-6">
            <Link
              to="/atlas"
              className="px-10 py-5 bg-[#0F0E0C] text-[#FAF8F5] rounded-full text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#1A1815] transition-all hover:scale-[1.02] duration-500"
            >
              Conheça o Atlas
            </Link>
            <a
              href="#manifesto"
              className="px-10 py-5 bg-transparent text-[#0F0E0C] border border-[#0F0E0C]/10 rounded-full text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#0F0E0C]/5 transition-colors duration-500"
            >
              Nosso Manifesto
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-7xl mx-auto mt-32 h-[50vh] md:h-[75vh] rounded-2xl overflow-hidden relative shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2500&auto=format&fit=crop" 
            alt="Arquitetura e Concreto Minimalista" 
            className="w-full h-full object-cover grayscale opacity-90"
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          02. QUEM SOMOS
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-64 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F0E0C] leading-[1.1] mb-8">
              Uma empresa brasileira. <br />
              <span className="italic text-[#8C7355]">Uma visão global.</span>
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-6 text-lg md:text-xl font-light tracking-wide text-[#706C64] leading-relaxed border-l border-[#0F0E0C]/10 pl-8 md:pl-12"
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

      {/* ═══════════════════════════════════════════════════
          03. NOSSA ORIGEM
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-64 px-6 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#8C7355] block mb-8"
          >
            A Origem Real
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F0E0C] leading-tight mb-12"
          >
            O Atlas nasceu para resolver <br /> problemas reais.
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-xl md:text-2xl font-light tracking-wide text-[#706C64] leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Foi inicialmente concebido e utilizado no dia a dia da Eletra. Conforme operávamos, percebemos rapidamente que o caos de sistemas fragmentados não era exclusividade de uma única empresa — era o fardo de milhares.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-xl md:text-2xl font-light tracking-wide text-[#0F0E0C] italic"
          >
            Então decidimos transformar aquela solução interna em um produto definitivo.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          04. O QUE ACREDITAMOS
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-72 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-32 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F0E0C]">
            O que acreditamos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
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
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-[#FAF8F5] border border-[#0F0E0C]/5 rounded-3xl flex items-center justify-center min-h-[220px] text-center shadow-[0_10px_30px_rgb(0,0,0,0.02)]"
            >
              <p className="text-2xl md:text-3xl font-light tracking-tight text-[#0F0E0C] leading-snug">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          05. O NOME "FIFTEEN MILES"
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-64 px-6 w-full bg-[#0F0E0C] text-[#FAF8F5] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(140,115,85,0.15)_0%,_transparent_70%)]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#C5A059] block mb-8"
          >
            A Identidade
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-12"
          >
            Por que Fifteen Miles?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-xl md:text-3xl font-light tracking-wide text-[#A8A399] leading-relaxed"
          >
            O nome carrega a essência da jornada, da distância percorrida com perseverança e da ideia inegociável de progresso contínuo rumo ao longo prazo. Não é sobre velocidade explosiva; é sobre constância inabalável na construção.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          06. O QUE ESTAMOS CONSTRUINDO
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-72 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-32 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F0E0C]">
            O que estamos construindo
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Atlas", desc: "O sistema operacional empresarial unificado." },
            { name: "Hermes", desc: "Camada de comunicação e fluxos em tempo real." },
            { name: "Athena", desc: "Inteligência contextual nativa para operações corporativas." },
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
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-[#FAF8F5] border border-[#0F0E0C]/5 rounded-3xl flex flex-col justify-between min-h-[260px]"
            >
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-[#8C7355]">Módulo 0{i+1}</span>
              <div>
                <h3 className="text-2xl font-light tracking-tight text-[#0F0E0C] mb-3">{item.name}</h3>
                <p className="text-sm font-light tracking-wide text-[#706C64] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          07. NOSSA CULTURA & COMO TRABALHAMOS
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-64 px-6 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 mb-40">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F0E0C] leading-[1.1] mb-8">
                Empresas são feitas <br />
                <span className="italic text-[#8C7355]">de pessoas.</span>
              </h2>
              <p className="text-lg font-light tracking-wide text-[#706C64] leading-relaxed">
                Toda decisão importante é discutida coletivamente. A melhor ideia sempre vence, independentemente de quem a propôs. Não existe ego individual; existe a obsessão compartilhada por construir algo extraordinário.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="flex flex-col justify-center border-l border-[#0F0E0C]/10 pl-8 md:pl-12"
            >
              <h3 className="text-2xl font-light tracking-tight text-[#0F0E0C] mb-4">Como trabalhamos</h3>
              <p className="text-base font-light tracking-wide text-[#706C64] leading-relaxed mb-8">
                Da concepção à entrega, mantemos um fluxo estrito de rigor conceitual e validação contínua.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Problema", "Pesquisa", "Discussão", "Arquitetura", "Produto", "Validação", "Evolução"].map((step, idx) => (
                  <span key={step} className="px-5 py-2.5 bg-white border border-[#0F0E0C]/5 rounded-full text-xs font-light tracking-widest uppercase text-[#706C64]">
                    0{idx+1}. {step}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          08. NOSSO COMPROMISSO & VALORES
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-72 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F0E0C] mb-6"
          >
            Projetado para durar décadas.
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-lg font-light tracking-wide text-[#706C64] max-w-2xl mx-auto"
          >
            Construímos com a mesma paciência necessária para criar algo que continuará relevante daqui a vinte anos.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-[#FAF8F5] border border-[#0F0E0C]/5 rounded-3xl flex flex-col justify-between"
            >
              <span className="text-xs font-light tracking-widest text-[#8C7355] block mb-6">0{i+1}</span>
              <div>
                <h3 className="text-2xl font-light tracking-tight text-[#0F0E0C] mb-3">{val.title}</h3>
                <p className="text-sm font-light tracking-wide text-[#706C64] leading-relaxed">{val.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          09. HOJE & AMANHÃ
      ═══════════════════════════════════════════════════ */}
      <section className="py-40 md:py-64 px-6 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#8C7355] block mb-6">O Presente</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-[#0F0E0C] mb-8">Hoje.</h2>
            <ul className="space-y-6 text-lg font-light tracking-wide text-[#706C64]">
              <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#8C7355] rounded-full" /> Empresa fundada recentemente</li>
              <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#8C7355] rounded-full" /> Primeiro produto em desenvolvimento contínuo</li>
              <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#8C7355] rounded-full" /> Primeiros clientes corporativos e validações reais</li>
              <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#8C7355] rounded-full" /> Estruturação de fundamentos e marca</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#8C7355] block mb-6">O Futuro</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-[#0F0E0C] mb-8">Amanhã.</h2>
            <ul className="space-y-6 text-lg font-light tracking-wide text-[#706C64]">
              <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#8C7355] rounded-full" /> Empresas inteiras operando sobre o Atlas</li>
              <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#8C7355] rounded-full" /> Lançamento do ecossistema e Marketplace</li>
              <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#8C7355] rounded-full" /> IA nativa integrada aos processos do dia a dia</li>
              <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 bg-[#8C7355] rounded-full" /> Expansão internacional estruturada</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          10. NOSSO MANIFESTO (EXCERTO)
      ═══════════════════════════════════════════════════ */}
      <section id="manifesto" className="py-40 md:py-72 px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-16"
        >
          <motion.span variants={fadeUp} className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#8C7355] block">
            Nosso Manifesto
          </motion.span>
          <motion.p variants={fadeUp} className="text-3xl md:text-5xl font-light tracking-tight text-[#0F0E0C] leading-snug">
            Não seguimos tendências. Construímos infraestrutura.
          </motion.p>
          <motion.p variants={fadeUp} className="text-3xl md:text-5xl font-light tracking-tight text-[#0F0E0C] leading-snug">
            Não perseguimos velocidade efêmera. Perseguimos excelência estrutural.
          </motion.p>
          <motion.p variants={fadeUp} className="text-3xl md:text-5xl font-light tracking-tight text-[#0F0E0C] leading-snug">
            Não queremos lançar dezenas de produtos. Queremos construir poucos produtos extraordinários.
          </motion.p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          11. TIME
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
              Quem constrói.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "Nathanael Secundo Cardoso", role: "Founder & CEO", desc: "Responsável por produto, arquitetura e visão geral da empresa." },
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
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white border border-[#0F0E0C]/5 rounded-3xl flex flex-col justify-between shadow-[0_10px_30px_rgb(0,0,0,0.02)]"
              >
                <div>
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#8C7355] block mb-4">{member.role}</span>
                  <h3 className="text-2xl font-light tracking-tight text-[#0F0E0C] mb-3">{member.name}</h3>
                </div>
                <p className="text-sm font-light tracking-wide text-[#706C64] leading-relaxed mt-6 border-t border-[#0F0E0C]/5 pt-6">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          12. ESTAMOS APENAS COMEÇANDO & CTA FINAL
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
            className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F0E0C] mb-8"
          >
            Ainda estamos escrevendo <br /> <span className="italic text-[#8C7355]">os primeiros capítulos.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl font-light tracking-wide text-[#706C64] max-w-2xl mx-auto leading-relaxed mb-24"
          >
            A Fifteen Miles ainda é jovem, mas todas as grandes instituições também foram um dia. Estamos construindo com calma, com disciplina e pensando em décadas, não em meses.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mb-32"
          >
            <h3 className="text-3xl md:text-5xl font-light tracking-tighter text-[#0F0E0C] mb-12">
              Se você acredita que software pode ser melhor, <br />
              <span className="italic text-[#8C7355]">vamos conversar.</span>
            </h3>

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
        </motion.div>

        {/* Footer Minimalista */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-20 pt-16 flex flex-col items-center gap-4 border-t border-[#0F0E0C]/10 w-full max-w-sm relative z-10"
        >
          <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#0F0E0C]">
            Fifteen Miles
          </span>
          <span className="text-[9px] font-light tracking-[0.3em] uppercase text-[#8C7355]">
            Institution
          </span>
        </motion.div>
      </section>

    </div>
  );
}