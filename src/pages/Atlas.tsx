import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import Seo from "../components/Seo"

const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as any },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const pageTypes = [
  { name: "Dashboard", desc: "Métricas em tempo real" },
  { name: "Kanban", desc: "Fluxo visual de tarefas" },
  { name: "Planilha", desc: "Dados estruturados" },
  { name: "Wiki", desc: "Conhecimento compartilhado" },
  { name: "Tracker", desc: "Acompanhamento contínuo" },
  { name: "Calendário", desc: "Timeline e eventos" },
  { name: "CRM", desc: "Relacionamento e vendas" },
  { name: "Documentação", desc: "Padrões e procedimentos" },
];

export default function AtlasLanding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#FAF8F5] text-[#0F0E0C] font-[Raleway] overflow-hidden selection:bg-[#8C7355]/20 selection:text-[#0F0E0C]"
    >
      <Seo title="Atlas — Fifteen Miles" description="Atlas: plataforma operacional para centralizar pessoas, processos e dados em uma única interface" path="/atlas" />
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="fixed left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#8C7355]/10 to-transparent mix-blend-multiply z-40 hidden md:block" />
      <div className="fixed right-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#8C7355]/10 to-transparent mix-blend-multiply z-40 hidden md:block" />

      <section className="relative h-[100svh] w-full flex flex-col items-center justify-center px-6">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 flex flex-col items-center text-center w-full max-w-7xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <span className="text-[9px] md:text-[11px] font-medium tracking-[0.4em] uppercase text-[#8C7355] border border-[#8C7355]/20 px-6 py-2.5 rounded-full backdrop-blur-sm">
              Capítulo I · A Fundação
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-6xl md:text-8xl lg:text-[9rem] font-light tracking-tighter leading-[0.85] text-[#0F0E0C]"
          >
            <motion.span variants={fadeUp} className="block">Projetado para</motion.span>
            <motion.span variants={fadeUp} className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8C7355] via-[#C5A059] to-[#8C7355] italic pr-4">durar décadas.</motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 text-xl md:text-3xl font-light tracking-tight text-[#706C64] max-w-3xl leading-snug"
          >
            Toda empresa merece operar em um único lugar.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-sm md:text-base font-light tracking-wide text-[#8C8880] max-w-xl leading-relaxed"
          >
            O Atlas reúne pessoas, processos, conhecimento e operações em uma plataforma erguida para resistir ao tempo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 flex flex-col sm:flex-row items-center gap-6"
          >
            <a
              href="#"
              className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#0F0E0C] text-[#FAF8F5] rounded-full overflow-hidden transition-transform hover:scale-[1.02] duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase relative z-10">Conheça o Atlas</span>
            </a>
            <a
              href="#"
              className="group flex items-center justify-center gap-2 px-10 py-5 bg-transparent text-[#0F0E0C] rounded-full text-xs font-medium tracking-[0.2em] uppercase border border-[#0F0E0C]/10 hover:bg-[#0F0E0C]/5 transition-colors duration-500"
            >
              Solicitar demonstração
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-40 md:py-72 px-6 max-w-5xl mx-auto flex flex-col items-center text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative z-10 w-full"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-7xl font-light tracking-tighter text-[#0F0E0C] leading-[1.1] mb-32">
            Sua empresa utiliza <br /> <span className="italic text-[#8C7355]">sistemas demais.</span>
          </motion.h2>

          <div className="flex flex-col items-center w-full max-w-md mx-auto">
            {[
              "Excel", "Google Drive", "WhatsApp", "ERP Legado", 
              "CRM de Vendas", "Power BI", "Notion", "ClickUp", 
              "E-mails Corporativos", "Inúmeras Planilhas", "Atlas"
            ].map((tool, i, arr) => {
              const isLast = i === arr.length - 1;
              return (
                <motion.div
                  key={tool}
                  variants={{
                    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any } }
                  }}
                  className="flex flex-col items-center w-full"
                >
                  <div className={`px-10 py-5 w-full flex justify-center backdrop-blur-md transition-all duration-500 ${isLast ? 'bg-[#0F0E0C] text-[#FAF8F5] rounded-2xl shadow-2xl scale-110 mt-8' : 'border border-[#0F0E0C]/5 bg-white/40 text-[#706C64] rounded-xl hover:bg-white/80'}`}>
                    <span className={`text-sm md:text-base font-light tracking-[0.15em] uppercase ${isLast ? 'font-medium tracking-[0.3em] text-[#C5A059]' : ''}`}>
                      {tool}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="h-10 w-px bg-gradient-to-b from-[#0F0E0C]/10 to-transparent my-2 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#8C7355]/30" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className="py-40 md:py-64 px-6 w-full relative">
        <div className="absolute inset-0 bg-[#F3F0EB]/50" />
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex-1 space-y-12"
          >
            <motion.p variants={fadeUp} className="text-4xl md:text-6xl font-light tracking-tighter text-[#A8A399] strike-through">
              Atlas não é um ERP.
            </motion.p>
            <motion.p variants={fadeUp} className="text-4xl md:text-6xl font-light tracking-tighter text-[#A8A399]">
              Atlas não é um gestor de tarefas.
            </motion.p>
            <motion.p variants={fadeUp} className="text-4xl md:text-6xl font-light tracking-tighter text-[#A8A399]">
              Atlas não é apenas um software.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex-1"
          >
            <p className="text-5xl md:text-7xl font-light tracking-tighter text-[#0F0E0C] leading-[1.1]">
              Atlas é onde <br /> <span className="italic text-[#8C7355]">toda a operação</span> <br /> da empresa acontece.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-40 md:py-72 px-6 relative w-full bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-24 md:mb-32"
          >
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-light tracking-tighter text-[#0F0E0C] leading-[1.1]">
              Onde o trabalho <br />
              <span className="italic text-[#8C7355]">acontece.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-8 text-lg font-light tracking-wide text-[#8C8880] max-w-xl mx-auto">
              Todo módulo do Atlas é construído por páginas e widgets configuráveis.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pageTypes.map((page, i) => (
              <motion.div
                key={page.name}
                variants={fadeUp}
                className="bg-white rounded-2xl overflow-hidden border border-[#0F0E0C]/[0.03] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(140,115,85,0.08)] transition-all duration-700 group flex flex-col h-[280px]"
              >
                <div className="h-[180px] w-full bg-gradient-to-b from-[#FAF8F5] to-[#F3F0EB] p-5 relative flex flex-col gap-3">
                  <div className="flex gap-1.5 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8C7355]/20 group-hover:bg-[#8C7355]/40 transition-colors" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8C7355]/20 group-hover:bg-[#8C7355]/40 transition-colors" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8C7355]/20 group-hover:bg-[#8C7355]/40 transition-colors" />
                  </div>
                  
                  <div className="flex-1 w-full relative">
                    {page.name === "Dashboard" && (
                      <div className="absolute inset-0 flex flex-col gap-2">
                        <div className="flex gap-2 h-1/2">
                          <div className="flex-[2] bg-white/60 rounded-md shadow-sm border border-black/[0.02]" />
                          <div className="flex-[1] bg-white/60 rounded-md shadow-sm border border-black/[0.02]" />
                        </div>
                        <div className="h-1/2 bg-white/60 rounded-md shadow-sm border border-black/[0.02]" />
                      </div>
                    )}
                    {page.name === "Kanban" && (
                      <div className="absolute inset-0 flex gap-2">
                        {[1, 2, 3].map((col) => (
                          <div key={col} className="flex-1 bg-white/40 rounded-md border border-black/[0.02] p-1.5 flex flex-col gap-1.5">
                            <div className="w-full h-4 bg-white/80 rounded-sm shadow-sm" />
                            <div className="w-full h-8 bg-white/80 rounded-sm shadow-sm" />
                            {col !== 2 && <div className="w-full h-6 bg-white/80 rounded-sm shadow-sm" />}
                          </div>
                        ))}
                      </div>
                    )}
                    {page.name === "Planilha" && (
                      <div className="absolute inset-0 flex flex-col gap-1">
                        {[1, 2, 3, 4, 5].map((row) => (
                          <div key={row} className="flex gap-1 h-5 w-full">
                            {[1, 2, 3, 4].map((col) => (
                              <div key={col} className={`flex-1 rounded-sm shadow-sm border border-black/[0.02] ${row === 1 ? 'bg-[#8C7355]/5' : 'bg-white/60'}`} />
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                    {page.name === "Wiki" && (
                      <div className="absolute inset-0 flex flex-col gap-2.5 p-1">
                        <div className="w-3/4 h-3 bg-white/80 rounded-sm shadow-sm border border-black/[0.02]" />
                        <div className="w-full h-2 bg-white/50 rounded-sm" />
                        <div className="w-5/6 h-2 bg-white/50 rounded-sm" />
                        <div className="w-full h-10 bg-[#8C7355]/5 rounded-sm border border-[#8C7355]/10 mt-2" />
                      </div>
                    )}
                    {page.name === "Tracker" && (
                      <div className="absolute inset-0 flex flex-col gap-2 pt-1">
                        {[1, 2, 3, 4].map((row) => (
                          <div key={row} className="flex items-center gap-3 w-full h-5 bg-white/40 rounded-sm border border-black/[0.02] px-2">
                            <div className={`w-2.5 h-2.5 rounded-[2px] ${row === 1 ? 'bg-[#8C7355]/40' : 'border border-[#8C7355]/20'}`} />
                            <div className="flex-1 h-1.5 bg-black/5 rounded-full" />
                            <div className="w-6 h-1.5 bg-black/5 rounded-full" />
                          </div>
                        ))}
                      </div>
                    )}
                    {page.name === "Calendário" && (
                      <div className="absolute inset-0 flex flex-col gap-1">
                        <div className="flex gap-1 h-3 mb-1">
                          {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((d, idx) => (
                            <div key={idx} className="flex-1 bg-black/[0.02] rounded-[2px] flex items-center justify-center text-[5px] text-black/20">{d}</div>
                          ))}
                        </div>
                        <div className="grid grid-cols-7 gap-1 flex-1">
                          {Array.from({ length: 14 }).map((_, idx) => (
                            <div key={idx} className={`rounded-sm border border-black/[0.02] ${idx === 4 || idx === 11 ? 'bg-[#8C7355]/10' : 'bg-white/60'}`} />
                          ))}
                        </div>
                      </div>
                    )}
                    {page.name === "CRM" && (
                      <div className="absolute inset-0 flex flex-col gap-2 pt-1">
                        {[1, 2, 3].map((row) => (
                          <div key={row} className="flex items-center gap-3 w-full h-8 bg-white/60 rounded-md border border-black/[0.02] px-2 shadow-sm">
                            <div className="w-4 h-4 rounded-full bg-[#8C7355]/10" />
                            <div className="flex-1 flex flex-col gap-1">
                              <div className="w-1/2 h-1.5 bg-black/5 rounded-full" />
                              <div className="w-1/3 h-1 bg-black/5 rounded-full" />
                            </div>
                            <div className="w-8 h-3 bg-[#8C7355]/5 rounded-sm" />
                          </div>
                        ))}
                      </div>
                    )}
                    {page.name === "Documentação" && (
                      <div className="absolute inset-0 flex flex-col gap-2 p-1">
                        <div className="w-1/2 h-3 bg-white/80 rounded-sm shadow-sm border border-black/[0.02]" />
                        <div className="w-full h-1.5 bg-white/50 rounded-full mt-2" />
                        <div className="w-full h-1.5 bg-white/50 rounded-full" />
                        <div className="w-4/5 h-1.5 bg-white/50 rounded-full" />
                        <div className="flex gap-2 mt-4">
                          <div className="w-12 h-4 bg-[#8C7355]/5 border border-[#8C7355]/10 rounded-sm" />
                          <div className="w-16 h-4 bg-white/60 border border-black/[0.02] rounded-sm" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex-1 bg-white p-5 flex flex-col justify-center border-t border-[#0F0E0C]/[0.02]">
                  <h3 className="text-sm font-medium tracking-wide text-[#0F0E0C]">{page.name}</h3>
                  <p className="text-[11px] font-light tracking-wide text-[#A8A399] mt-1">{page.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-40 md:py-64 px-6 w-full relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F0E0C] text-center mb-32"
          >
            A espinha dorsal da operação.
          </motion.h2>

          <div className="w-full flex flex-col items-center">
            {["Empresa", "Workspace", "Setor", "Equipe", "Página", "Widgets", "Operação"].map((step, i, arr) => {
              const isLast = i === arr.length - 1;
              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center w-full max-w-sm"
                >
                  <div className="w-full px-8 py-6 bg-white border border-[#0F0E0C]/5 rounded-xl flex items-center justify-center shadow-[0_10px_40px_rgb(0,0,0,0.02)] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8C7355]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className="text-sm md:text-base font-light tracking-[0.2em] text-[#0F0E0C] uppercase relative z-10">
                      {step}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="h-10 w-px bg-gradient-to-b from-[#0F0E0C]/10 to-transparent my-2" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-40 md:py-72 px-6 w-full bg-[#F3F0EB]/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#0F0E0C] leading-[1.1]">
              Cada empresa trabalha <br /> de uma forma.
              <span className="block italic text-[#8C7355] mt-2">O Atlas também.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0F0E0C]/5 border border-[#0F0E0C]/5 rounded-3xl overflow-hidden">
            {[
              { title: "Templates", desc: "Padronize a excelência uma vez, escale infinitamente pela organização." },
              { title: "Layouts", desc: "A interface se adapta ao processo, e não o contrário." },
              { title: "Widgets", desc: "Blocos modulares que constroem exatamente o que sua equipe precisa." },
              { title: "Campos", desc: "Estruture informações com o nível de detalhe que o seu negócio exige." },
              { title: "Permissões", desc: "Controle cirúrgico e granular sobre quem vê, edita ou aprova." },
              { title: "Automações", desc: "Fluxos invisíveis que operam enquanto sua equipe foca no essencial." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="p-12 bg-[#FAF8F5] hover:bg-white transition-colors duration-500 flex flex-col justify-between min-h-[300px]"
              >
                <h3 className="text-2xl font-light tracking-tight text-[#0F0E0C] mb-8">{item.title}</h3>
                <p className="text-sm font-light tracking-wide text-[#706C64] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 md:py-64 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-light tracking-tighter mb-10 leading-[1.1]">
              Construído no Brasil.<br />
              <span className="italic text-[#8C7355]">Para empresas brasileiras.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg font-light tracking-wide text-[#706C64] leading-relaxed mb-16">
              O Atlas foi desenvolvido considerando idioma, suporte, legislação, fuso horário e atendimento local. Sem adaptações forçadas de ferramentas estrangeiras.
            </motion.p>
            <div className="space-y-8">
              {["Português nativo e natural", "Suporte nacional humanizado", "Legislação e tributação em mente", "Fuso horário alinhado"].map((item, i) => (
                <motion.div variants={fadeUp} key={item} className="flex items-center gap-6 border-b border-[#0F0E0C]/5 pb-6">
                  <div className="w-1.5 h-1.5 bg-[#8C7355] rounded-full" />
                  <span className="text-lg font-light tracking-wide text-[#0F0E0C]">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-10 leading-[1.1]">
              Chega de pagar <br /> <span className="italic text-[#8C7355]">em dólar.</span>
            </h2>
            <p className="text-lg font-light tracking-wide text-[#706C64] leading-relaxed mb-16">
              Enquanto diversas plataformas internacionais aumentam seus preços devido à variação cambial, o Atlas mantém previsibilidade financeira com preços justos em reais.
            </p>
            
            <div className="p-10 bg-white border border-[#0F0E0C]/5 rounded-3xl shadow-[0_20px_60px_rgb(0,0,0,0.03)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#8C7355]/10 to-transparent rounded-bl-full pointer-events-none" />
              <div className="flex flex-col gap-10 relative z-10">
                <div className="flex justify-between items-end border-b border-[#0F0E0C]/10 pb-8">
                  <span className="text-sm tracking-[0.2em] uppercase font-light text-[#A8A399]">Software comum</span>
                  <div className="text-right">
                    <span className="block text-[#0F0E0C] font-light mb-1">Mensalidade + IOF + Câmbio</span>
                    <span className="text-xs text-[#A8A399] tracking-widest uppercase">Valor imprevisível</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl tracking-tighter font-medium text-[#0F0E0C]">Atlas</span>
                  <span className="text-xl tracking-tight font-medium text-[#8C7355]">Preço fixo em Reais</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-40 md:py-72 px-6 w-full relative bg-[#0F0E0C] text-[#FAF8F5]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(140,115,85,0.1)_0%,_transparent_70%)]" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center mb-32 md:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="text-[9px] md:text-[11px] font-medium tracking-[0.4em] uppercase text-[#C5A059] border border-[#C5A059]/20 px-6 py-2.5 rounded-full inline-block mb-16"
          >
            A Filosofia
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto space-y-40 md:space-y-64 relative z-10">
          {[
            { num: "I", title: "Princípio da Permanência", desc: "Projetado para durar décadas, não apenas para o próximo ciclo de mercado." },
            { num: "II", title: "Princípio da Operação", desc: "A empresa vem antes da tecnologia. O software deve se moldar ao negócio." },
            { num: "III", title: "Princípio do Contexto", desc: "Dados isolados geram ruído. Toda informação exige contexto e hierarquia." },
            { num: "IV", title: "Princípio da Engenharia", desc: "A verdadeira simplicidade exige um esforço colossal de arquitetura invisível." },
          ].map((item, i, arr) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-150px" }}
              variants={staggerContainer}
              className="text-center relative"
            >
              <motion.span variants={fadeUp} className="text-[8rem] md:text-[12rem] leading-none font-light tracking-tighter text-white/5 block mb-8 md:absolute md:-left-32 md:-top-16 md:mb-0 select-none">
                {item.num}
              </motion.span>
              <motion.h3 variants={fadeUp} className="text-3xl md:text-5xl font-light tracking-tighter text-[#FAF8F5] mb-8 relative z-10">
                {item.title}
              </motion.h3>
              <motion.p variants={fadeUp} className="text-lg md:text-2xl font-light tracking-wide text-[#A8A399] leading-relaxed max-w-2xl mx-auto relative z-10">
                {item.desc}
              </motion.p>
              
              {i !== arr.length - 1 && (
                <div className="absolute -bottom-20 md:-bottom-32 left-1/2 -translate-x-1/2 w-px h-16 md:h-24 bg-gradient-to-b from-[#C5A059]/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-40 md:py-72 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F3F0EB]/30 pointer-events-none" />
        
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
            A infraestrutura digital <br />
            <span className="italic text-[#8C7355]">começa aqui.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl font-light tracking-wide text-[#706C64] max-w-3xl mx-auto leading-relaxed mb-24"
          >
            Não estamos construindo apenas mais um software. Estamos erguendo a base onde grandes empresas irão operar durante décadas.
          </motion.p>

          <motion.div variants={fadeUp} className="flex justify-center">
            <a
              href="#"
              className="group flex items-center gap-6 px-12 py-6 bg-[#0F0E0C] text-[#FAF8F5] rounded-full transition-all duration-700 hover:shadow-[0_20px_40px_rgba(15,14,12,0.2)] hover:scale-[1.02]"
            >
              <span className="text-xs font-medium tracking-[0.2em] uppercase">
                Solicitar demonstração
              </span>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                <ArrowRight strokeWidth={1.5} className="w-4 h-4 text-[#FAF8F5] group-hover:translate-x-1 transition-transform duration-500" />
              </div>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-48 pt-16 flex flex-col items-center gap-4 border-t border-[#0F0E0C]/10 w-full max-w-sm relative z-10"
        >
          <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-[#0F0E0C]">
            Atlas
          </span>
          <span className="text-[9px] font-light tracking-[0.3em] uppercase text-[#8C7355]">
            by Fifteen Miles
          </span>
        </motion.div>
      </section>
    </div>
  );
}