"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Cpu, Box } from "lucide-react";
import Seo from "@/components/Seo";
import Button from "@/components//ui/button";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function Seal({ size = 100, spin = false }: { size?: number; spin?: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      className={`relative shrink-0 select-none pointer-events-none ${spin ? "animate-seal-spin" : ""}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <circle cx="50" cy="50" r="47" fill="none" className="stroke-wine opacity-45" strokeWidth="1" />
        <circle cx="50" cy="50" r="39" fill="none" className="stroke-wine opacity-[0.28]" strokeWidth="0.5" />
        {mounted &&
          Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * Math.PI * 2;
            const long = i % 6 === 0;
            const r1 = 47;
            const r2 = long ? 41 : 44.5;
            return (
              <line
                key={i}
                x1={50 + r1 * Math.cos(angle)}
                y1={50 + r1 * Math.sin(angle)}
                x2={50 + r2 * Math.cos(angle)}
                y2={50 + r2 * Math.sin(angle)}
                className="stroke-wine"
                strokeWidth={long ? 1 : 0.5}
                opacity={long ? 0.55 : 0.28}
              />
            );
          })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center select-none font-gothic text-wine leading-none" style={{ fontSize: size * 0.32 }}>
        XV
      </div>
    </div>
  );
}

function ChapterTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-wine/25 bg-wine/[0.03] font-mono text-[10px] uppercase tracking-[0.28em] text-wine shadow-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-wine" />
      {children}
    </span>
  );
}

function BlueprintGrid({ opacity = 0.04 }: { opacity?: number }) {
  return <div className="absolute inset-0 pointer-events-none bg-blueprint" style={{ opacity }} />;
}

function TiltCard({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = -((y - centerY) / centerY) * 8;
    const rY = ((x - centerX) / centerX) * 8;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div style={{ perspective: 1000, ...style }} className={className}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
            : `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-in-out",
          transformStyle: "preserve-3d",
          background: "linear-gradient(135deg, #990000 0%, #5C0000 50%, #350000 100%)",
          boxShadow: "0 30px 60px -15px rgba(92, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
          borderColor: "rgba(255, 255, 255, 0.25)",
        }}
        className="w-full h-full p-8 sm:p-12 rounded-[24px] border relative overflow-hidden text-white"
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 0.3, ease: "easeInOut" } }}
              className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white to-transparent"
              style={{ transform: "translateZ(30px)" }}
            />
          )}
        </AnimatePresence>
        <div style={{ transform: "translateZ(20px)" }} className="w-full h-full flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden bg-parchment text-ink font-heading">
      <Seo title="Produtos | Fifteen Miles" description="Produtos que transformam operações em sistemas. Conheça o Atlas OS, o ecossistema Hephaestus e o Atlas Capture." path="/products" />

      <section className="relative w-full pt-32 sm:pt-48 pb-20 px-6 sm:px-14 overflow-hidden">
        <BlueprintGrid />
        <div className="absolute top-10 right-14 hidden lg:block opacity-70 pointer-events-none">
          <Seal size={150} spin />
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }} className="mb-6">
            <ChapterTag>Capítulo II · Ecossistema de Produtos</ChapterTag>
          </motion.div>

          <motion.h1 initial="hidden" animate="visible" variants={staggerContainer} className="w-full">
            <motion.span variants={fadeUp} className="block text-4xl sm:text-7xl lg:text-[7rem] font-bold tracking-tight uppercase font-raleway text-ink animate-text-opening select-none mb-4">
              PRODUTOS
            </motion.span>
            <motion.span variants={fadeUp} className="block font-normal normal-case text-3xl sm:text-5xl lg:text-6xl font-display text-wine italic">
              que transformam operações em sistemas.
            </motion.span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 30, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.4, delay: 0.6, ease: EASE }} className="relative w-full max-w-[900px] mx-auto mt-12 mb-16 flex items-center justify-center">
            <div className="relative w-full z-10 filter drop-shadow-[0_30px_50px_rgba(28,23,16,0.22)]">
              <Image src="/notebook.png" alt="Atlas OS no Notebook" width={1400} height={900} priority className="w-full h-auto object-contain select-none hover:scale-[1.01] transition-transform duration-700" draggable={false} />
            </div>
            <div className="absolute -left-4 sm:-left-12 bottom-[-10%] w-[34%] sm:w-[30%] z-20 filter drop-shadow-[0_25px_40px_rgba(28,23,16,0.3)]">
              <Image src="/phone.png" alt="Atlas OS no Celular" width={500} height={1000} priority className="w-full h-auto object-contain select-none hover:-translate-y-2 transition-transform duration-500" draggable={false} />
            </div>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.8, ease: EASE }} className="mt-4 text-lg sm:text-xl max-w-3xl leading-relaxed font-light text-ink/70">
            Da organização centralizada da empresa à interação com o ambiente físico, construímos uma arquitetura integrada para tornar operações mais inteligentes, mensuráveis e adaptáveis.
          </motion.p>
        </motion.div>
      </section>

      <section className="relative py-20 px-6 sm:px-14 max-w-[1400px] mx-auto">
        <TiltCard className="w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-white/80 block mb-2">Produto Principal // Software Núcleo</span>
              <h2 className="text-4xl sm:text-6xl font-medium font-display">Atlas OS</h2>
            </div>
            <Link href="/atlas" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-wine font-mono text-xs uppercase tracking-widest transition-all hover:bg-white/90 shadow-lg cursor-pointer">
              <span>Explorar Atlas OS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-amber-300 block mb-2">01 / Centralização</span>
              <p className="text-sm font-light text-white/90 leading-relaxed">Informações e processos reunidos em um único workspace de alta performance e governança total.</p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-amber-300 block mb-2">02 / Configurabilidade</span>
              <p className="text-sm font-light text-white/90 leading-relaxed">Databases, formulários, wikis e fluxos ajustados sob medida cirúrgica para a realidade da sua empresa.</p>
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-amber-300 block mb-2">03 / Contexto Vivo</span>
              <p className="text-sm font-light text-white/90 leading-relaxed">Dados conectados alimentam relatórios de telemetria e inteligência executiva em tempo real.</p>
            </div>
          </div>
        </TiltCard>
      </section>

      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t border-wine/[0.12] bg-parchment-alt">
        <BlueprintGrid opacity={0.04} />
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <ChapterTag>Arquitetura Modular</ChapterTag>
            <h2 className="mt-6 text-4xl sm:text-6xl leading-[1.1] font-display font-semibold text-ink">
              Uma fundação para <br />
              <span className="text-wine italic font-normal">diferentes formas de trabalhar.</span>
            </h2>
            <p className="mt-6 text-lg font-light text-ink/70">Módulos integrados que substituem dezenas de ferramentas isoladas, mantendo a coesão de dados e processos.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Projects & Tasks", desc: "Gestão de entregas, prazos estritos e fluxos Kanban avançados." },
              { name: "Databases Relacionais", desc: "Estruturas de dados flexíveis interligadas sem fricção corporativa." },
              { name: "Forms & Captação", desc: "Coleta estruturada de inputs externos e internos em tempo real." },
              { name: "Goals & OKRs", desc: "Alinhamento estratégico rigoroso e acompanhamento de metas vitais." },
              { name: "Wiki & Docs", desc: "Base de conhecimento institucional viva e procedimentos imutáveis." },
              { name: "Analytics & Reports", desc: "Visão consolidada e telemetria da performance operacional." },
            ].map((mod, idx) => (
              <div key={mod.name} className="p-8 rounded-[12px] border border-wine/[0.18] bg-white shadow-sm flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl group">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded border border-wine/25 text-wine bg-wine/[0.03] inline-block mb-4">
                    Módulo 0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-medium mb-3 font-display text-ink">{mod.name}</h3>
                  <p className="text-sm font-light leading-relaxed text-ink/[0.65]">{mod.desc}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-wine/[0.08] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-wine" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-wine">Ativo no Ecossistema</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t border-wine/[0.12] bg-parchment">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12">
          <div className="p-10 sm:p-14 rounded-[16px] border border-wine/20 bg-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <ChapterTag>Hardware & P&D</ChapterTag>
                <Cpu className="w-6 h-6 text-wine" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-medium mb-4 font-display text-ink">Hephaestus</h3>
              <p className="text-lg font-light mb-6 text-wine italic">A infraestrutura física para a operação inteligente.</p>
              <p className="text-sm sm:text-base font-light leading-relaxed mb-8 text-ink/70">
                Inspirado na mitologia da forja e da engenharia, o Hephaestus representa a família de hardware e dispositivos empresariais da Fifteen Miles, interligando sensores, controladores e o Atlas OS ao mundo real.
              </p>
              <div className="space-y-3 font-mono text-xs text-ink/70 mb-8 border-t border-b border-wine/10 py-4">
                <div>• Família de dispositivos modulares proprietários</div>
                <div>• Conexão nativa em tempo real com o ecossistema Atlas</div>
                <div>• Arquitetura escalável para automação industrial e de escritório</div>
              </div>
            </div>
            <div className="pt-6 border-t border-wine/10 flex justify-between items-center font-mono text-xs uppercase tracking-widest text-wine">
              <span>Research & Development</span>
              <span>Hardware Nativo</span>
            </div>
          </div>

          <div className="p-10 sm:p-14 rounded-[16px] border border-wine/20 bg-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <ChapterTag>Protótipo Ativo</ChapterTag>
                <Box className="w-6 h-6 text-wine" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-medium mb-4 font-display text-ink">Atlas Capture</h3>
              <p className="text-lg font-light mb-6 text-wine italic">O ponto físico entre o trabalho e os dados da operação.</p>
              <p className="text-sm sm:text-base font-light leading-relaxed mb-6 text-ink/70">
                Time tracker físico construído com ESP32, touch LCD e Wi-Fi. Elimina a barreira do registro manual em abas, transformando a execução em métricas precisas de tempo e gargalos.
              </p>

              <div className="bg-ink text-white p-5 rounded-xl font-mono text-xs mb-8 shadow-inner">
                <div className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Simulação do Display (ESP32)</div>
                <div className="text-white font-medium text-sm">Atlas Capture // Station 01</div>
                <div className="text-amber-300 font-bold text-xl my-2">01:42:37</div>
                <div className="flex items-center gap-2 text-[10px] text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>● TRANSMITINDO AO VIVO PARA O ATLAS OS</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-wine/10 flex justify-between items-center font-mono text-xs uppercase tracking-widest text-wine">
              <span>Coleta Física → Atlas OS</span>
              <span>Protótipo P&D</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t border-wine/[0.12] bg-parchment-alt">
        <BlueprintGrid opacity={0.03} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ChapterTag>Ciclo Operacional</ChapterTag>
            <h2 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight font-display text-ink">O dispositivo coleta. O Atlas entende.</h2>
            <p className="mt-6 text-lg font-light text-ink/70">O objetivo não é apenas medir tempo. É transformar a execução cotidiana em informação acionável para aprimorar processos.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Coleta Física", desc: "Dispositivos Hephaestus registram o tempo e a execução na estação." },
              { step: "02", title: "Organização", desc: "Os dados entram no núcleo do Atlas OS estruturando projetos e tarefas." },
              { step: "03", title: "Análise", desc: "O sistema identifica desvios de prazos, gargalos e tarefas repetitivas." },
              { step: "04", title: "Ação & Otimização", desc: "O ecossistema sugere melhorias e otimiza a operação no mundo real." },
            ].map((item) => (
              <div key={item.step} className="p-8 rounded-[12px] border border-wine/[0.18] bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-wine tracking-widest block mb-4">FASE {item.step}</span>
                  <h3 className="text-xl font-medium mb-3 font-display text-ink">{item.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-ink/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t border-wine/[0.12] bg-parchment">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ChapterTag>Transparência de Engenharia</ChapterTag>
            <h2 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight font-display text-ink">Roadmap de Desenvolvimento</h2>
            <p className="mt-4 text-base font-light text-ink/70">Acompanhe o estágio atual de cada iniciativa tecnológica da Fifteen Miles.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[12px] border border-wine/[0.18] bg-white shadow-sm">
              <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-600 text-emerald-700 bg-emerald-50 inline-block mb-6">NOW // ATIVO EM PRODUÇÃO</span>
              <h3 className="text-2xl font-medium mb-3 font-display text-ink">Atlas OS</h3>
              <p className="text-sm font-light leading-relaxed text-ink/70">Desenvolvimento ativo, expansão de módulos corporativos, permissões RBAC avançadas e suporte a workspaces multi-tenant.</p>
            </div>

            <div className="p-8 rounded-[12px] border border-wine/[0.18] bg-white shadow-sm">
              <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-amber-600 text-amber-700 bg-amber-50 inline-block mb-6">NEXT // PROTÓTIPO AVANÇADO</span>
              <h3 className="text-2xl font-medium mb-3 font-display text-ink">Atlas Capture</h3>
              <p className="text-sm font-light leading-relaxed text-ink/70">Testes práticos de hardware com ESP32, refinamento de gabinete 3D e validação de webhooks bidirecionais com o Atlas OS.</p>
            </div>

            <div className="p-8 rounded-[12px] border border-wine/[0.18] bg-white shadow-sm">
              <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-blue-600 text-blue-700 bg-blue-50 inline-block mb-6">RESEARCH // P&D</span>
              <h3 className="text-2xl font-medium mb-3 font-display text-ink">Hephaestus</h3>
              <p className="text-sm font-light leading-relaxed text-ink/70">Pesquisa avançada de arquitetura para novos dispositivos físicos modulares de automação de ambientes corporativos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-40 sm:py-52 px-6 sm:px-14 flex flex-col items-center justify-center text-center border-t border-wine/12 bg-wine">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.25)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-white">
          <Seal size={96} spin />
          <div className="mt-8">
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono px-4 py-2 rounded-full border border-white/20 text-white/90 bg-white/10 inline-block">Arquitetura Integrada</span>
          </div>

          <h2 className="mt-8 text-4xl sm:text-6xl lg:text-[4.5rem] leading-[1.05] font-display font-semibold">
            A próxima geração de operações <br />
            <span className="italic text-amber-200">começa com uma arquitetura melhor.</span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed text-white/80">Conheça o Atlas e acompanhe os produtos que estamos desenvolvendo para transformar a forma como as empresas operam.</p>

          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <Button href="/atlas" variant="primary-dark" showArrow className="px-8 py-4 bg-white text-wine hover:bg-white/90">Explorar o Atlas OS</Button>
            <Link href="/contact" className="flex items-center justify-center gap-2 px-8 py-4 rounded-md text-xs font-mono uppercase tracking-widest border border-white/30 text-white hover:bg-white/10 transition-all">
              <span>Falar com a Fifteen Miles</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}