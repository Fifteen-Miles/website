import { motion } from "framer-motion";
import type{ Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Layers, Shield, Database, LayoutTemplate, 
  Settings, Zap, Grid, FileText, Lock, Globe, Cpu, 
  Building2, Workflow, Box, Component, Blocks
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const numbers = [
  { val: "∞", label: "Páginas Configuráveis" },
  { val: "100%", label: "Sem Alterar Código" },
  { val: "ABAC", label: "Controle Estrito" },
  { val: "360°", label: "Visão Organizacional" }
];

const architectureSteps = [
  "Organização", "Workspaces", "Departamentos", "Usuários", 
  "Papéis", "Páginas", "Widgets", "Dados", "Automações"
];

const pageTypes = [
  { icon: Grid, name: "Dashboard" },
  { icon: FileText, name: "Documento" },
  { icon: LayoutTemplate, name: "Kanban" },
  { icon: Database, name: "Database" },
  { icon: Box, name: "Assets" },
  { icon: Globe, name: "Wiki" },
];

const modules = [
  { name: "Governança & Risco", status: "Core" },
  { name: "Projetos & Engenharia", status: "Core" },
  { name: "Ativos Institucionais", status: "Core" },
  { name: "Memória Corporativa", status: "Core" },
  { name: "Gestão Financeira", status: "Breve" },
  { name: "Compliance", status: "Breve" },
];

const useCases = [
  "Engenharia", "Indústria", "Escritórios Jurídicos", "Hospitais", "Universidades", "Fundos"
];

const roadmap = [
  { time: "Hoje", desc: "Arquitetura Core, RBAC/ABAC, Pages" },
  { time: "Próximo", desc: "Templates Globais, Multiempresa" },
  { time: "Depois", desc: "Marketplace de Widgets, Integrações" },
  { time: "Futuro", desc: "Agentes de Infraestrutura (IA)" }
];

export default function Atlas() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F0E0C] font-sans selection:bg-[#8C7355] selection:text-[#FAF8F5] overflow-hidden">
      
      {/* NOVO HERO CINEMATOGRÁFICO */}
      <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center selection:bg-white/20">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/forest2.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.06)_0%,_transparent_110%)]" />

        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl px-6 mt-[-5vh]">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 flex items-center justify-center"
          >
            <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#C5A059] bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
              Enterprise Operating System
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-center text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.9] font-medium text-white tracking-tighter"
          >
            One platform.
            <br />
            <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-br from-[#E5C07B] via-[#D4AF37] to-[#8A6D3B] pr-4">
              Every operation.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 text-lg md:text-xl text-[#A1A1A6] max-w-2xl text-center font-light tracking-wide leading-relaxed"
          >
            Infraestrutura absoluta para organizações que pensam em décadas. Construa, configure e unifique toda a sua empresa.
          </motion.p>
        </div>

        {/* FLOATING ACTION DOCK */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-12 z-20"
        >
          <div className="flex items-center gap-1 p-1.5 rounded-full bg-[#1D1D1F]/40 border border-white/10 backdrop-blur-2xl shadow-2xl">
            <a
              href="https://atlas.fifteenmiles.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-[13px] font-semibold tracking-wide transition-transform hover:scale-[1.02]"
            >
              Explore Atlas
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent text-[#F5F5F7] text-[13px] font-medium tracking-wide hover:bg-white/10 transition-colors"
            >
              Solicitar acesso
            </Link>
          </div>
        </motion.div>
      </section>

      {/* RESTANTE DA PÁGINA */}
      <section className="py-40 px-6 max-w-6xl mx-auto flex justify-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#0F0E0C] leading-tight max-w-5xl"
        >
          Atlas não força empresas a mudarem seus processos. <span className="text-[#8C7355] italic">Atlas adapta-se à empresa.</span> Não o contrário.
        </motion.h2>
      </section>

      <section className="py-32 px-6 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="flex flex-col items-center text-center mb-24"
          >
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-medium tracking-tight text-[#0F0E0C]">
              Do Caos à Ordem.
            </motion.h2>
          </motion.div>

          <div className="relative h-[600px] w-full flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-[800px] h-[800px] border border-black/10 rounded-full absolute" />
              <div className="w-[600px] h-[600px] border border-black/10 rounded-full absolute" />
              <div className="w-[400px] h-[400px] border border-black/10 rounded-full absolute" />
            </div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}
              className="relative z-10 w-48 h-48 bg-black rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.1)] flex items-center justify-center border border-black/20"
            >
              <img src="/AtlasOS.png" alt="Atlas" className="h-45 rounded-xl pointer-events-none" />
            </motion.div>

            {["ERP", "CRM", "Kanban", "Drive", "Excel", "BI", "Chat", "Wiki"].map((tool, i) => {
              const angle = (i * 360) / 8;
              const radius = 280;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={tool}
                  initial={{ x: x * 1.5, y: y * 1.5, opacity: 0 }}
                  whileInView={{ x, y, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bg-white px-6 py-3 rounded-full border border-black/5 shadow-xl text-[#706C64] text-xs font-medium tracking-widest uppercase pointer-events-none"
                >
                  {tool}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#0F0E0C] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
            {numbers.map((num, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <span className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#C5A059] mb-4">{num.val}</span>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#8C8880]">{num.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
              A Hierarquia.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-[#706C64] font-light leading-relaxed mb-12">
              Empresas, espaços de trabalho, departamentos, permissões e dashboards em um único modelo mental claro. Tudo herda o contexto superior.
            </motion.p>
          </motion.div>

          <div className="relative flex flex-col gap-2">
            {architectureSteps.map((step, i) => (
              <motion.div
                key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex items-center gap-6"
                style={{ marginLeft: `${i * 12}px` }}
              >
                <div className="w-4 h-4 border-l border-b border-[#8C7355]/40 rounded-bl-lg" />
                <div className="px-6 py-3 bg-white border border-black/5 rounded-xl shadow-sm text-sm font-medium tracking-wide text-[#0F0E0C] w-full max-w-[280px]">
                  {step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">Páginas & Widgets.</h2>
            <p className="text-xl text-[#706C64] font-light max-w-2xl">Onde o trabalho acontece. Todo módulo do Atlas é construído por páginas e widgets configuráveis.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {pageTypes.map((page, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="aspect-square bg-[#FAF8F5] border border-black/5 rounded-3xl p-8 flex flex-col justify-between group hover:bg-[#F5F2EB] transition-colors"
              >
                <page.icon className="w-8 h-8 text-[#8C7355]" strokeWidth={1.5} />
                <span className="text-lg font-medium text-[#0F0E0C] tracking-wide">{page.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6 bg-black text-white selection:bg-white/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          <div>
            <span className="text-[#C5A059] text-[10px] tracking-[0.3em] uppercase mb-6 block">Segurança Absoluta</span>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-8">RBAC & ABAC.</h2>
            <p className="text-[#86868B] text-lg font-light leading-relaxed mb-8">
              Permissões granulares aplicadas por Empresa, Workspace, Departamento, Página, ou Campo. A informação flui apenas para onde deve, preservando a integridade e rastreabilidade total.
            </p>
            <div className="flex flex-col gap-4 border-l border-white/10 pl-6">
              <span className="text-sm tracking-widest text-[#F5F5F7] uppercase">Autenticação Estrita</span>
              <span className="text-sm tracking-widest text-[#F5F5F7] uppercase">Logs Imutáveis</span>
              <span className="text-sm tracking-widest text-[#F5F5F7] uppercase">Versionamento Completo</span>
            </div>
          </div>

          <div>
            <span className="text-[#C5A059] text-[10px] tracking-[0.3em] uppercase mb-6 block">Reuso Institucional</span>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-8">Templates.</h2>
            <p className="text-[#86868B] text-lg font-light leading-relaxed">
              Transforme a expertise da sua empresa em infraestrutura. Templates globais para empresas, espaços de trabalho, processos, dashboards e widgets. Crie uma vez, escale infinitamente.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-16 text-center">Catálogo de Módulos.</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-black/5 flex flex-col justify-between min-h-[200px]">
                <span className={`text-[10px] uppercase tracking-widest font-bold ${mod.status === 'Core' ? 'text-[#8C7355]' : 'text-black/30'}`}>
                  {mod.status}
                </span>
                <h3 className={`text-xl font-medium tracking-wide ${mod.status === 'Core' ? 'text-black' : 'text-black/40'}`}>
                  {mod.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-12">Design Configurável.</h2>
            <div className="flex flex-col gap-6">
              {["Temas & Branding", "Workspaces Personalizados", "Sidebars Dinâmicas", "Widgets Customizados"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-xl font-light text-[#706C64]">
                  <div className="w-2 h-2 rounded-full bg-[#8C7355]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-12">Onde Opera.</h2>
            <div className="flex flex-wrap gap-4">
              {useCases.map((useCase, i) => (
                <span key={i} className="px-6 py-3 rounded-full border border-black/10 text-sm font-medium tracking-wide text-[#0F0E0C]">
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-black text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,175,55,0.08)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-12">Roadmap.</h2>
            <div className="flex flex-col gap-10 border-l border-[#8C7355]/30 pl-8 relative">
              {roadmap.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#8C7355]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] block mb-2">{item.time}</span>
                  <p className="text-lg font-light text-[#F5F5F7] tracking-wide">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="mb-16">
              <span className="text-[#C5A059] text-[10px] tracking-[0.3em] uppercase mb-4 block">Coming Soon</span>
              <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#86868B]">
                Inteligência de Infraestrutura.
              </h2>
              <p className="text-[#86868B] text-lg font-light leading-relaxed">
                A IA no Atlas não será um chatbot lateral. Será integrada à fundação. Agentes autônomos criando estruturas, automatizando permissões e analisando o histórico completo da organização.
              </p>
            </div>

            <div>
              <span className="text-[#C5A059] text-[10px] tracking-[0.3em] uppercase mb-4 block">Visão</span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Marketplace.</h2>
              <p className="text-[#86868B] text-lg font-light leading-relaxed">
                Widgets, templates, integrações e módulos inteiros instalados sob demanda. O ecossistema infinito do Atlas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-5xl md:text-8xl font-serif text-[#0F0E0C] mb-12 max-w-4xl leading-[0.9]">
          Construa sua <span className="italic text-[#8C7355]">fundação.</span>
        </h2>
        <Link
          to="/contact"
          className="group flex items-center gap-6 px-10 py-5 bg-black text-white rounded-full transition-transform hover:scale-[1.02]"
        >
          <span className="text-sm font-semibold tracking-widest uppercase">
            Solicitar Acesso
          </span>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </section>
    </div>
  );
}