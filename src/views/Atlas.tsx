"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Compass, Sliders, Shield, FolderTree, Lock, Globe, Database, Terminal, Layers, ChevronDown, Maximize2, X, Check } from "lucide-react";
import Seo from "@/components/Seo";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const FONT_BLACK = `'UnifrakturMaguntia', serif`;
const FONT_HEADING = `'Coolvetica', 'Helvetica Neue', sans-serif`;
const FONT_DISPLAY = `'Fraunces', serif`;
const FONT_EYEBROW = `'Cinzel', serif`;
const FONT_MONO = `'JetBrains Mono', monospace`;

const INK = "#1C1710";
const WINE = "#5C0000";
const PARCHMENT = "#FAF7F0";

function useMedievalFonts() {
  useEffect(() => {
    if (document.getElementById("fm-medieval-fonts")) return;
    const link = document.createElement("link");
    link.id = "fm-medieval-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;1,9..144,400&family=UnifrakturMaguntia&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
}

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
      className="relative shrink-0 select-none pointer-events-none"
      style={{
        width: size,
        height: size,
        animation: spin ? "fm-seal-spin 120s linear infinite" : undefined,
      }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <circle cx="50" cy="50" r="47" fill="none" stroke={WINE} strokeWidth="1" opacity="0.45" />
        <circle cx="50" cy="50" r="39" fill="none" stroke={WINE} strokeWidth="0.5" opacity="0.28" />
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
                stroke={WINE}
                strokeWidth={long ? 1 : 0.5}
                opacity={long ? 0.55 : 0.28}
              />
            );
          })}
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center select-none"
        style={{ fontFamily: FONT_BLACK, color: WINE, fontSize: size * 0.32, lineHeight: 1 }}
      >
        XV
      </div>
    </div>
  );
}

function ChapterTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border shadow-sm"
      style={{
        fontFamily: FONT_EYEBROW,
        color: WINE,
        borderColor: "rgba(92,0,0,0.22)",
        background: "rgba(92,0,0,0.03)",
        fontSize: "10px",
        letterSpacing: "0.28em",
        textTransform: "uppercase",
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
      {children}
    </span>
  );
}

function BlueprintGrid({ opacity = 0.04 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(92,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(92,0,0,1) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        opacity,
        maskImage: "radial-gradient(ellipse 80% 70% at 50% 15%, black 20%, transparent 90%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 15%, black 20%, transparent 90%)",
      }}
    />
  );
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
        {isHovered && (
          <div 
            className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent" 
            style={{ transform: "translateZ(30px)" }}
          />
        )}
        <div style={{ transform: "translateZ(20px)" }} className="w-full h-full flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  );
}

const metricsList = [
  { value: "Mais de 135", label: "Módulos, vistas e ferramentas integradas" },
  { value: "R$ 1,9 tri", label: "Em volume de operações processadas" },
  { value: "99,999%", label: "Histórico de tempo de atividade e resiliência" },
  { value: "Mais de 200 mi", label: "Assinaturas e metas ativas gerenciadas" },
];

const trustedCompanies = [
  "Eletra Energy Solutions", ""
];

const pageTypes = [
  { name: "Dashboard", desc: "Métricas operacionais, KPIs críticos e telemetria executiva em tempo real.", icon: Layers },
  { name: "Kanban", desc: "Fluxo visual dinâmico de tarefas, prazos estritos e alocação de equipes.", icon: Sliders },
  { name: "Planilha", desc: "Matrizes de dados estruturados com filtros relacionais e ordenação formal.", icon: Database },
  { name: "Wiki", desc: "Memória institucional viva, procedimentos imutáveis e manuais internos.", icon: Shield },
  { name: "Tracker", desc: "Acompanhamento cirúrgico de hábitos, metas e métricas recorrentes.", icon: Compass },
  { name: "Calendário", desc: "Timeline cronológica de eventos, marcos e prazos institucionais.", icon: Globe },
  { name: "CRM", desc: "Gestão inteligente de relacionamento, portfólio de clientes e funil.", icon: Terminal },
  { name: "Documentação", desc: "Padrões técnicos rigorosos e estruturação de texto em formato códice.", icon: Lock },
];

const faqItems = [
  {
    q: "O Atlas OS substitui o meu ERP legado?",
    a: "Não se trata de uma substituição forçada, mas de um sistema operacional de convergência. O Atlas unifica a camada de execução, governança e memória da empresa, integrando-se perfeitamente aos seus sistemas existentes."
  },
  {
    q: "Como é garantida a soberania dos dados corporativos?",
    a: "Diferente de SaaS estrangeiros submetidos a leis externas, o Atlas utiliza arquitetura multi-tenant isolada com criptografia de ponta a ponta e total conformidade com a legislação brasileira."
  },
  {
    q: "Qual é o modelo de cobrança da plataforma?",
    a: "Trabalhamos exclusivamente em Reais (BRL), blindando sua operação contra variações cambiais agressivas, taxas de IOF e reajustes em dólar."
  },
  {
    q: "Quanto tempo leva para implantar o ecossistema?",
    a: "Nossa equipe de engenharia conduz a estruturação inicial do workspace em ciclos acelerados, adaptando módulos, permissões RBAC e fluxos em poucos dias úteis."
  }
];

export default function AtlasLanding() {
  useMedievalFonts();
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: PARCHMENT, color: INK, fontFamily: FONT_HEADING }}
    >
      <Seo title="Atlas OS — Fifteen Miles" description="Atlas: plataforma operacional definitiva para centralizar pessoas, processos e dados com precisão arquitetural." path="/atlas" />

      <style dangerouslySetInnerHTML={{ __html: `
        @font-face {
          font-family: 'Coolvetica';
          src: url('https://cdn.jsdelivr.net/gh/luxonauta/coolvetica@master/woff2/CoolveticaRg.woff2') format('woff2');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @keyframes fm-seal-spin {
          to { transform: rotate(360deg); }
        }
        ::selection {
          background: rgba(92, 0, 0, 0.18);
          color: ${INK};
        }
      `}} />

      <section className="relative w-full pt-32 sm:pt-44 pb-20 px-6 sm:px-14">
        <BlueprintGrid />
        <div className="absolute top-10 right-14 hidden lg:block opacity-70">
          <Seal size={150} spin />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center text-center"
        >
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, ease: EASE }} className="mb-6">
            <ChapterTag>Capítulo I · O Sistema Operacional Global</ChapterTag>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-4xl sm:text-7xl lg:text-[6.5rem] tracking-tight uppercase leading-[1.02]"
            style={{ fontFamily: FONT_HEADING }}
          >
            <motion.span variants={fadeUp} className="block">PROJETADO PARA DURAR</motion.span>
            <motion.span variants={fadeUp} className="block font-Pnormal normal-case" style={{ fontFamily: FONT_BLACK, color: WINE, fontStyle: "italic", fontSize: "7vw" }}>Décadas.</motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: EASE }}
            className="mt-8 text-lg sm:text-2xl max-w-3xl leading-relaxed font-light"
            style={{ color: "rgba(28,23,16,0.7)" }}
          >
            Impulsionamos negócios de todos os tamanhos. Sua empresa possui muitas tecnologias fragmentadas? Gerencie tudo em uma plataforma unificada e confiável que se adapta às suas necessidades e resiste ao tempo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <button
              onClick={() => (window.location.href = "https://atlas.fifteenmiles.tech/register")}
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm transition-all duration-200 cursor-pointer"
              style={{ background: WINE, color: PARCHMENT, fontFamily: "Inter", boxShadow: "0 15px 35px -10px rgba(92,0,0,0.55)" }}
            >
              <span>Comece já</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <Link
              href="/docs"
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm transition-all duration-200 cursor-pointer border border-[rgba(92,0,0,0.35)] hover:border-[rgba(38,0,0,0.6)]"
              style={{ color: WINE, fontFamily: "Inter" }}
            >
              <Image
                src="/google-icon-logo-svgrepo-com.svg"
                alt="Google"
                width={12}
                height={12}
                priority
                draggable={false}
              />
              Registre-se com o Google
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 border-y bg-white" style={{ borderColor: "rgba(92,0,0,0.12)" }}>
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metricsList.map((m, i) => (
            <div key={i} className="px-4">
              <span className="block text-3xl sm:text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                {m.value}
              </span>
              <span className="text-xs uppercase font-mono tracking-wider" style={{ color: "rgba(28,23,16,0.6)" }}>
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="py-12 border-b bg-[#FAF7F0]" style={{ borderColor: "rgba(92,0,0,0.1)" }}>
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <span className="block font-mono text-[10px] uppercase tracking-[0.3em] mb-6" style={{ color: "rgba(28,23,16,0.4)" }}>
            Empresas globais que confiam na arquitetura Atlas
          </span>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 opacity-70">
            {trustedCompanies.map((comp) => (
              <span key={comp} className="font-mono text-sm sm:text-base font-bold tracking-widest uppercase" style={{ color: INK }}>
                {comp}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F6F1EA" }}>
        <BlueprintGrid opacity={0.03} />
        <div className="relative z-10 max-w-[1000px] mx-auto text-center">
          <ChapterTag>Diagnóstico de Caos</ChapterTag>
          <h2
            className="mt-8 text-4xl sm:text-6xl leading-[1.1]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}
          >
            Sua empresa usa <br />
            <span style={{ color: WINE, fontStyle: "italic" }}>sistemas demais.</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(28,23,16,0.7)" }}>
            O crescimento fragmentado empurra operações para dezenas de ferramentas desconectadas, criando silos de ignorância, retrabalho e alto custo de manutenção.
          </p>
        </div>

        <div className="relative z-10 max-w-xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {["Excel", "Google Drive", "WhatsApp", "ERP Legado", "CRM de Vendas", "Power BI", "Notion", "ClickUp", "E-mails Soltos"].map((tool) => (
            <div
              key={tool}
              className="p-5 rounded-[8px] border bg-white text-center shadow-sm flex items-center justify-center"
              style={{ borderColor: "rgba(92,0,0,0.15)" }}
            >
              <span className="font-mono text-xs uppercase tracking-widest opacity-70" style={{ color: INK }}>
                {tool}
              </span>
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-xl mx-auto mt-8 p-8 rounded-[10px] border text-center shadow-xl" style={{ background: WINE, borderColor: WINE }}>
          <span className="text-sm tracking-[0.3em] uppercase font-bold text-white font-mono block">
            Convergência Total: Atlas OS
          </span>
          <p className="text-xs text-white/80 mt-2 font-light">
            Unificação completa de dados, processos e equipes em um único ambiente imutável.
          </p>
        </div>
      </section>

      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: PARCHMENT }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="space-y-4 md:col-span-1">
            <ChapterTag>Posicionamento</ChapterTag>
            <p className="text-2xl sm:text-3xl font-light line-through" style={{ fontFamily: FONT_DISPLAY, color: "rgba(28,23,16,0.35)", textDecorationColor: WINE }}>
              O Atlas não é um ERP.
            </p>
            <p className="text-2xl sm:text-3xl font-light line-through" style={{ fontFamily: FONT_DISPLAY, color: "rgba(28,23,16,0.35)", textDecorationColor: WINE }}>
              O Atlas não é gestor de tarefas.
            </p>
            <p className="text-2xl sm:text-3xl font-light line-through" style={{ fontFamily: FONT_DISPLAY, color: "rgba(28,23,16,0.35)", textDecorationColor: WINE }}>
              O Atlas não é apenas software.
            </p>
          </div>
          
          <div className="md:col-span-2 p-12 sm:p-16 rounded-[12px] border shadow-xl bg-white relative overflow-hidden" style={{ borderColor: "rgba(92,0,0,0.2)" }}>
            <h3 className="text-3xl sm:text-5xl leading-[1.15]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}>
              O Atlas é onde <br />
              <span style={{ color: WINE, fontStyle: "italic" }}>toda a operação</span> <br />
              da empresa acontece.
            </h3>
            <p className="mt-6 text-base sm:text-lg font-light leading-relaxed" style={{ color: "rgba(28,23,16,0.7)" }}>
              Substitua a dispersão operacional por um núcleo de alta performance projetado para alinhar equipes e preservar a memória corporativa.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t overflow-hidden" style={{ borderColor: "rgba(92,0,0,0.12) ", background: WINE }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.25)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center  mb-20">
            <h2 className="text-4xl sm:text-6xl leading-[1.1] text-white" style={{ fontFamily: "Raleway", fontWeight: 600 }}>
              Infraestrutura modular com <br />
              <span className="italic" style={{ fontFamily: FONT_HEADING, color: "#FDE68A" }}>interface personalizável.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative rounded-[24px] p-8 sm:p-12 overflow-hidden border border-white/15 flex flex-col justify-between shadow-2xl bg-gradient-to-br from-[#3D0000] via-[#5C0000] to-[#800000] min-h-[420px]">
              <button onClick={() => setActiveModal("payments")} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer z-20">
                <Maximize2 className="w-4 h-4" />
              </button>
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/20 via-pink-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-lg">
                <h3 className="text-2xl sm:text-4xl font-medium text-white mb-4" style={{ fontFamily: FONT_DISPLAY }}>
                  Aceite e otimize pagamentos no mundo todo, online e presencialmente
                </h3>
                <p className="text-sm font-light text-white/80 leading-relaxed">
                  Simplifique seu checkout, amplie seu alcance e aumente a conversão com ferramentas baseadas em IA para aceitar pagamentos em qualquer lugar.
                </p>
              </div>
              <div className="relative z-10 mt-12">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15 flex items-center justify-between">
                  <span className="font-mono text-xs text-white/90">Checkout global unificado</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <div className="relative rounded-[24px] p-8 sm:p-12 overflow-hidden border border-white/15 flex flex-col justify-between shadow-2xl bg-gradient-to-br from-[#4A0000] via-[#5C0000] to-[#300000] min-h-[420px]">
              <button onClick={() => setActiveModal("billing")} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer z-20">
                <Maximize2 className="w-4 h-4" />
              </button>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-medium text-white mb-3" style={{ fontFamily: FONT_DISPLAY }}>
                  Viabilize qualquer modelo de faturamento
                </h3>
                <p className="text-xs font-light text-white/80 leading-relaxed">
                  Gerencie assinaturas complexas, cobranças baseadas em uso e automação de faturas em escala global.
                </p>
              </div>
              <div className="relative z-10 pt-6 mt-8 border-t border-white/15">
                <span className="font-mono text-[10px] text-amber-300 uppercase tracking-widest font-semibold">Billing Automatizado</span>
              </div>
            </div>

            <div className="relative rounded-[24px] p-8 sm:p-12 overflow-hidden border border-white/15 flex flex-col justify-between shadow-2xl bg-gradient-to-br from-[#380000] via-[#5C0000] to-[#500000] min-h-[380px]">
              <button onClick={() => setActiveModal("agentic")} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer z-20">
                <Maximize2 className="w-4 h-4" />
              </button>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-medium text-white mb-3" style={{ fontFamily: FONT_DISPLAY }}>
                  Monetize por meio do comércio agêntico
                </h3>
                <p className="text-xs font-light text-white/80 leading-relaxed">
                  Permita que agentes de IA autônomos realizem transações e gerenciem fluxos de caixa em nome dos usuários com segurança total.
                </p>
              </div>
              <div className="relative z-10 pt-6 mt-8 border-t border-white/15">
                <span className="font-mono text-[10px] text-blue-200 uppercase tracking-widest font-semibold">AI Commerce</span>
              </div>
            </div>

            <div className="relative rounded-[24px] p-8 sm:p-12 overflow-hidden border border-white/15 flex flex-col justify-between shadow-2xl bg-gradient-to-br from-[#5C0000] via-[#400000] to-[#250000] min-h-[380px]">
              <button onClick={() => setActiveModal("issuing")} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer z-20">
                <Maximize2 className="w-4 h-4" />
              </button>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-medium text-white mb-3" style={{ fontFamily: FONT_DISPLAY }}>
                  Crie um programa de emissão de cartões
                </h3>
                <p className="text-xs font-light text-white/80 leading-relaxed">
                  Emita cartões físicos e virtuais instantaneamente, gerencie limites de gastos e personalize regras de aprovação em tempo real.
                </p>
              </div>
              <div className="relative z-10 pt-6 mt-8 border-t border-white/15">
                <span className="font-mono text-[10px] text-amber-200 uppercase tracking-widest font-semibold">Cartões Instantâneos</span>
              </div>
            </div>

            <div className="relative rounded-[24px] p-8 sm:p-12 overflow-hidden border border-white/15 flex flex-col justify-between shadow-2xl bg-gradient-to-br from-[#450000] via-[#300000] to-[#1C0000] min-h-[380px]">
              <button onClick={() => setActiveModal("crypto")} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer z-20">
                <Maximize2 className="w-4 h-4" />
              </button>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-medium text-white mb-3" style={{ fontFamily: FONT_DISPLAY }}>
                  Dinheiro sem fronteiras com stablecoins e crip.
                </h3>
                <p className="text-xs font-light text-white/80 leading-relaxed">
                  Aceite pagamentos globais instantâneos convertidos automaticamente em moeda local com liquidez contínua.
                </p>
              </div>
              <div className="relative z-10 pt-6 mt-8 border-t border-white/15">
                <span className="font-mono text-[10px] text-purple-300 uppercase tracking-widest font-semibold">Global Crypto</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#FAF7F0] rounded-[24px] border border-[rgba(92,0,0,0.3)] shadow-2xl overflow-hidden p-8 sm:p-12"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" style={{ color: INK }} />
              </button>

              {activeModal === "payments" && (
                <div>
                  <div className="max-w-xl mb-8">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#5C0000] block mb-2">Módulo Executivo · Payments</span>
                    <h3 className="text-3xl font-medium" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                      Aceite e otimize pagamentos no mundo todo, online e presencialmente
                    </h3>
                    <p className="text-sm font-light mt-3 text-black/70">
                      Simplifique seu checkout, amplie seu alcance e aumente a conversão com ferramentas baseadas em IA para aceitar pagamentos em qualquer lugar.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {["Crie uma experiência de checkout sem interrupções", "Acelere sua expansão para novos mercados", "Maximize as taxas de aceitação e reduza fraudes", "Unifique pagamentos online e presenciais"].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[rgba(92,0,0,0.1)]">
                        <Check className="w-5 h-5 text-[#5C0000] shrink-0 mt-0.5" />
                        <span className="text-xs font-light text-black/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeModal === "billing" && (
                <div>
                  <div className="max-w-xl mb-8">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#5C0000] block mb-2">Módulo Executivo · Billing</span>
                    <h3 className="text-3xl font-medium" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                      Viabilize qualquer modelo de faturamento
                    </h3>
                    <p className="text-sm font-light mt-3 text-black/70">
                      Cobranças recorrentes, planos flexíveis por consumo e automação completa de faturas sem escrever código complexo.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-[rgba(92,0,0,0.15)]">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-bold">Plano Pro - Cobrança Mensal</span>
                      <span className="text-xs font-mono text-[#5C0000]">Ativo</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#5C0000] h-full w-3/4" />
                    </div>
                  </div>
                </div>
              )}

              {activeModal === "agentic" && (
                <div>
                  <div className="max-w-xl mb-8">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#5C0000] block mb-2">Módulo Executivo · AI Commerce</span>
                    <h3 className="text-3xl font-medium" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                      Monetize por meio do comércio agêntico
                    </h3>
                    <p className="text-sm font-light mt-3 text-black/70">
                      Permita que inteligências artificiais executem compras, contratem serviços e gerenciem assinaturas corporativas de forma autônoma e segura.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-[rgba(92,0,0,0.15)] font-mono text-xs text-black/80">
                    &gt; Agente de IA autorizado a transacionar R$ 5.000/dia [OK]
                  </div>
                </div>
              )}

              {activeModal === "issuing" && (
                <div>
                  <div className="max-w-xl mb-8">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#5C0000] block mb-2">Módulo Executivo · Issuing</span>
                    <h3 className="text-3xl font-medium" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                      Crie um programa de emissão de cartões
                    </h3>
                    <p className="text-sm font-light mt-3 text-black/70">
                      Emita cartões corporativos físicos e virtuais instantaneamente com regras de controle de gastos parametrizáveis por departamento.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-[#5C0000] to-[#800000] text-white">
                    <span className="text-xs font-mono tracking-widest block opacity-70 mb-4">ATLAS CORPORATE CARD</span>
                    <span className="text-lg font-mono tracking-widest">**** **** **** 8842</span>
                  </div>
                </div>
              )}

              {activeModal === "crypto" && (
                <div>
                  <div className="max-w-xl mb-8">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#5C0000] block mb-2">Módulo Executivo · Crypto</span>
                    <h3 className="text-3xl font-medium" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                      Dinheiro sem fronteiras com stablecoins
                    </h3>
                    <p className="text-sm font-light mt-3 text-black/70">
                      Liquidação imediata de pagamentos internacionais via stablecoins com conversão automática e sem taxas abusivas de câmbio.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-[rgba(92,0,0,0.15)] flex justify-between items-center">
                    <span className="font-mono text-xs">USDB Liquidity Pool</span>
                    <span className="font-mono text-sm font-bold text-[#5C0000]">$776,000 USD</span>
                  </div>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-[rgba(92,0,0,0.1)] flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest text-white bg-[#5C0000] cursor-pointer"
                >
                  Fechar Painel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F3EDE3" }}>
        <BlueprintGrid opacity={0.04} />
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <ChapterTag>Módulos & Vistas</ChapterTag>
            <h2 className="mt-6 text-4xl sm:text-6xl leading-[1.1]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}>
              Onde o trabalho <br />
              <span style={{ color: WINE, fontStyle: "italic" }}>acontece.</span>
            </h2>
            <p className="mt-6 text-lg font-light" style={{ color: "rgba(28,23,16,0.7)" }}>
              Cada módulo do Atlas é composto por páginas modulares e widgets configuráveis com layout facilitado adaptado cirurgicamente à sua operação.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageTypes.map((page) => {
              const Icon = page.icon;
              return (
                <div
                  key={page.name}
                  className="rounded-[12px] overflow-hidden border flex flex-col h-[340px] transition-all hover:-translate-y-1 hover:shadow-2xl bg-white group"
                  style={{ borderColor: "rgba(92,0,0,0.18)" }}
                >
                  <div className="h-[150px] w-full p-6 relative flex flex-col justify-between border-b" style={{ borderColor: "rgba(92,0,0,0.1)", background: PARCHMENT }}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded border" style={{ borderColor: "rgba(92,0,0,0.25)", color: WINE, background: "rgba(92,0,0,0.03)" }}>
                        Vista // {page.name}
                      </span>
                      <Icon className="w-4 h-4" style={{ color: WINE, opacity: 0.6 }} />
                    </div>
                    <div className="w-full h-8 rounded border border-dashed flex items-center justify-center font-mono text-[9px] uppercase tracking-widest" style={{ borderColor: "rgba(92,0,0,0.2)", color: "rgba(28,23,16,0.4)" }}>
                      Preview Interativo
                    </div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-medium tracking-tight mb-2" style={{ fontFamily: FONT_DISPLAY, color: INK }}>{page.name}</h3>
                      <p className="text-xs font-light leading-relaxed" style={{ color: "rgba(28,23,16,0.65)" }}>{page.desc}</p>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest pt-4 border-t flex items-center gap-1.5" style={{ borderColor: "rgba(92,0,0,0.08)", color: WINE }}>
                      <span>Explorar módulo</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: PARCHMENT }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <ChapterTag>Arquitetura Multi-Tenant</ChapterTag>
            <h2 className="mt-6 text-4xl sm:text-6xl leading-[1.1]" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}>
              Feito para a sua empresa. <br />
              <span style={{ color: WINE, fontStyle: "italic", fontFamily:FONT_BLACK }}>Sob medida para você.</span>
            </h2>
            <p className="mt-6 text-lg font-light" style={{ color: "rgba(28,23,16,0.7)" }}>
              O Atlas resolve o problema de empresas com muitas tecnologias, combinando o isolamento rigoroso de dados com uma flexibilidade radical de personalização.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 sm:p-10 rounded-[12px] border flex flex-col justify-between bg-white shadow-sm" style={{ borderColor: "rgba(92,0,0,0.18)" }}>
              <div>
                <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-6" style={{ borderColor: "rgba(92,0,0,0.25)", background: "rgba(92,0,0,0.04)" }}>
                  <Sliders className="w-5 h-5" style={{ color: WINE }} />
                </div>
                <h3 className="text-xl font-medium mb-3" style={{ fontFamily: FONT_DISPLAY, color: INK }}>Identidade & Accent Color</h3>
                <p className="text-sm font-light leading-relaxed mb-6" style={{ color: "rgba(28,23,16,0.65)" }}>
                  Personalize o workspace com sua logomarca e escolha cores de destaque que alimentam dinamicamente toda a interface com layout facilitado.
                </p>
              </div>
              <div className="pt-6 border-t flex items-center gap-3" style={{ borderColor: "rgba(92,0,0,0.1)" }}>
                <span className="w-3 h-3 rounded-full bg-[#5C0000]" />
                <span className="w-3 h-3 rounded-full bg-blue-700" />
                <span className="w-3 h-3 rounded-full bg-amber-700" />
                <span className="w-3 h-3 rounded-full bg-emerald-700" />
                <span className="text-[10px] font-mono uppercase tracking-widest ml-auto" style={{ color: WINE }}>Dinâmico</span>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-[12px] border flex flex-col justify-between bg-white shadow-sm" style={{ borderColor: "rgba(92,0,0,0.18)" }}>
              <div>
                <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-6" style={{ borderColor: "rgba(92,0,0,0.25)", background: "rgba(92,0,0,0.04)" }}>
                  <Shield className="w-5 h-5" style={{ color: WINE }} />
                </div>
                <h3 className="text-xl font-medium mb-3" style={{ fontFamily: FONT_DISPLAY, color: INK }}>Governança & RBAC</h3>
                <p className="text-sm font-light leading-relaxed mb-6" style={{ color: "rgba(28,23,16,0.65)" }}>
                  Controle cirúrgico de acessos por usuário, equipes ou páginas. Defina papéis com total segurança jurídica e técnica.
                </p>
              </div>
              <div className="pt-6 border-t flex items-center justify-between" style={{ borderColor: "rgba(92,0,0,0.1)" }}>
                <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "rgba(28,23,16,0.45)" }}>Multi-tenancy</span>
                <span className="text-xs font-medium" style={{ color: WINE }}>Isolado & Seguro</span>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-[12px] border flex flex-col justify-between bg-white shadow-sm" style={{ borderColor: "rgba(92,0,0,0.18)" }}>
              <div>
                <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-6" style={{ borderColor: "rgba(92,0,0,0.25)", background: "rgba(92,0,0,0.04)" }}>
                  <FolderTree className="w-5 h-5" style={{ color: WINE }} />
                </div>
                <h3 className="text-xl font-medium mb-3" style={{ fontFamily: FONT_DISPLAY, color: INK }}>Módulos Ativáveis</h3>
                <p className="text-sm font-light leading-relaxed mb-6" style={{ color: "rgba(28,23,16,0.65)" }}>
                  Elimine ruídos visuais. Ative apenas os módulos de CRM, Financeiro, Wiki e Projetos essenciais para o seu negócio.
                </p>
              </div>
              <div className="pt-6 border-t flex items-center justify-between" style={{ borderColor: "rgba(92,0,0,0.1)" }}>
                <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "rgba(28,23,16,0.45)" }}>Sidebar Dinâmica</span>
                <span className="text-xs font-medium" style={{ color: INK }}>Configurável</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F6F1EA" }}>
        <BlueprintGrid opacity={0.03} />
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <ChapterTag>Hierarquia Operacional</ChapterTag>
          <h2 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight text-center mb-20" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
            A espinha dorsal da operação.
          </h2>

          <div className="w-full flex flex-col items-center">
            {[
              "Empresa & Workspace", 
              "Equipes & Departamentos", 
              "Páginas, Databases & Blocos", 
              "Projetos, Metas & Kanban", 
              "Automações & Histórico (Activity)", 
              "Operação Centralizada"
            ].map((step, i, arr) => {
              const isLast = i === arr.length - 1;
              return (
                <div key={step} className="flex flex-col items-center w-full max-w-lg">
                  <div className="w-full px-8 py-5 rounded-[10px] border flex items-center justify-center shadow-sm relative bg-white" style={{ borderColor: "rgba(92,0,0,0.2)" }}>
                    <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-center relative z-10" style={{ color: INK, fontFamily: FONT_MONO }}>
                      {step}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="h-10 w-px my-2" style={{ background: "rgba(92,0,0,0.25)" }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-32 sm:py-44 px-6 sm:px-14 max-w-[1400px] mx-auto border-t" style={{ borderColor: "rgba(92,0,0,0.12)" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="p-8 sm:p-14 rounded-[12px] border shadow-xl bg-white relative overflow-hidden flex flex-col justify-between" style={{ borderColor: "rgba(92,0,0,0.2)" }}>
            <div>
              <ChapterTag>Soberania Nacional</ChapterTag>
              <h2 className="mt-6 text-3xl sm:text-4xl font-medium tracking-tight mb-6" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                Construído no Brasil.<br />
                <span style={{ color: WINE, fontStyle: "italic" }}>Para o Brasil.</span>
              </h2>
              <p className="text-base sm:text-lg font-light leading-relaxed mb-10" style={{ color: "rgba(28,23,16,0.7)" }}>
                Desenvolvido considerando idioma nativo, suporte humanizado de plantão, legislação fiscal brasileira e fuso horário alinhado. Sem barreiras de suporte estrangeiro.
              </p>
            </div>
            <div className="space-y-4">
              {["Português nativo e natural", "Suporte nacional prioritário", "Conformidade regulatória local", "Alinhamento total de fuso horário"].map((item) => (
                <div key={item} className="flex items-center gap-4 border-b pb-4" style={{ borderColor: "rgba(92,0,0,0.1)" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
                  <span className="text-sm font-light" style={{ color: INK }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <ChapterTag>Previsibilidade Financeira</ChapterTag>
              <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                Pagamento em Real.<br /> <span style={{ color: WINE, fontStyle: "italic" }}>Sem surpresas em dólar.</span>
              </h2>
            </div>

            <TiltCard>
              <div className="flex justify-between items-end border-b pb-6 mb-6" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/70">SaaS Internacional</span>
                <div className="text-right">
                  <span className="block text-sm font-light mb-1.5 text-white/90">USD + IOF + Câmbio Flutuante</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-rose-300">Alto Risco Orçamentário</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-medium" style={{ fontFamily: FONT_DISPLAY, color: "white" }}>Atlas OS</span>
                <span className="font-mono text-xs uppercase tracking-widest font-medium px-4 py-2 rounded-full border border-white/30 bg-white/10 text-amber-300">Preço Fixo em BRL</span>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: WINE }}>
        <div className="max-w-[1400px] mx-auto text-white">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono px-4 py-2 rounded-full border border-white/20 text-white/90 bg-white/10 inline-block mb-4">
              Desenvolvedores & APIs
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight" style={{ fontFamily: FONT_DISPLAY }}>
              Infraestrutura confiável e extensível para cada pilha tecnológica.
            </h2>
            <p className="mt-6 text-lg text-white/80 font-light">
              Adapte o Atlas às necessidades da sua empresa com opções de integração flexíveis, layout facilitado, SDKs nativos e webhooks em tempo real.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="https://atlas.fifteenmiles.tech/docs" className="px-6 py-3 rounded-full text-xs font-mono uppercase tracking-widest text-white transition-all hover:opacity-90" style={{ background: "#3D0000", border: "1px solid rgba(255,255,255,0.2)" }}>
                Veja a documentação
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full text-xs font-mono uppercase tracking-widest text-white border border-white/20 transition-all hover:bg-white/10">
                Veja o GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: "#F6F1EA" }}>
        <BlueprintGrid opacity={0.03} />
        <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
          <ChapterTag>Manifesto & Premissas</ChapterTag>
          <h2 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
            A Filosofia da Permanência.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          {[
            { num: "I", title: "Princípio da Permanência", desc: "Projetado para durar décadas, servindo como pilares de longo prazo para a empresa." },
            { num: "II", title: "Princípio da Operação", desc: "A empresa vem antes do software. A arquitetura se molda à realidade do negócio." },
            { num: "III", title: "Princípio do Contexto", desc: "Dados isolados geram ruído. Toda informação corporativa exige hierarquia e contexto." },
            { num: "IV", title: "Princípio da Engenharia", desc: "A verdadeira simplicidade exige um rigor colossal de engenharia invisível." },
          ].map((item) => (
            <div
              key={item.num}
              className="text-center relative p-10 sm:p-12 rounded-[12px] border shadow-sm bg-white"
              style={{ borderColor: "rgba(92,0,0,0.18)" }}
            >
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase block mb-3" style={{ color: WINE }}>
                Princípio {item.num}
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                {item.title}
              </h3>
              <p className="text-base sm:text-lg font-light max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(28,23,16,0.7)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-36 sm:py-48 px-6 sm:px-14 border-t relative overflow-hidden" style={{ borderColor: "rgba(92,0,0,0.12)", background: "linear-gradient(180deg, #FAF7F0 0%, #F3EDE3 100%)" }}>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
              Dúvidas Frequentes
            </h2>
            <p className="mt-4 text-base font-light text-[#1C1710]/70 max-w-lg mx-auto">
              Tudo o que você precisa saber sobre a arquitetura, soberania e implantação do Atlas OS.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-[16px] border bg-white shadow-sm transition-all duration-300 overflow-hidden"
                  style={{
                    borderColor: isOpen ? WINE : "rgba(92,0,0,0.18)",
                    boxShadow: isOpen ? "0 15px 30px -10px rgba(92,0,0,0.08)" : "0 2px 4px rgba(0,0,0,0.02)"
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-7 text-left flex items-center justify-between gap-6 cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-semibold tracking-widest text-[#5C0000]/60 group-hover:text-[#5C0000] transition-colors">
                        0{idx + 1}
                      </span>
                      <span className="text-lg sm:text-xl font-medium transition-colors" style={{ fontFamily: FONT_DISPLAY, color: INK }}>
                        {faq.q}
                      </span>
                    </div>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen ? "bg-[#5C0000] text-white border-[#5C0000]" : "bg-[#FAF7F0] text-[#5C0000] border-[rgba(92,0,0,0.2)]"
                      }`}
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                      >
                        <div className="px-7 pb-8 pt-2 text-sm sm:text-base font-regular leading-relaxed font-[Raleway] border-t border-[rgba(92,0,0,0.08)] text-[#1C1710]/80">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-40 sm:py-52 px-6 sm:px-14 flex flex-col items-center justify-center text-center border-t" style={{ borderColor: "rgba(92,0,0,0.12)", background: PARCHMENT }}>
        <BlueprintGrid opacity={0.04} />
        <div className="relative z-10 h-[100dvh] w-full max-w-4xl flex flex-col justify-center items-center">
          <Seal size={96} spin />
          <div className="mt-8">
          </div>

          <h2
            className="mt-8 text-4xl sm:text-6xl lg:text-[4.5rem] leading-[1.05]"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}
          >
            A infraestrutura digital <br />
            <span style={{ color: WINE, fontStyle: "italic", fontFamily: FONT_BLACK }}>começa aqui.</span>
          </h2>

          <p
            className="mt-8 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(28,23,16,0.7)" }}
          >
            Memória institucional intacta, execução fluida e inteligência centralizada. Assuma o controle absoluto da sua operação hoje.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => (window.location.href = "https://atlas.fifteenmiles.tech/register")}
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm transition-all duration-200 cursor-pointer"
              style={{ background: WINE, color: PARCHMENT, fontFamily: "Inter", boxShadow: "0 15px 35px -10px rgba(92,0,0,0.55)" }}
            >
              <span>Comece já</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <Link
              href="/docs"
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm transition-all duration-200 cursor-pointer border border-[rgba(92,0,0,0.35)] hover:border-[rgba(38,0,0,0.6)]"
              style={{ color: WINE, fontFamily: "Inter" }}
            >
              <Image
                src="/google-icon-logo-svgrepo-com.svg"
                alt="Google"
                width={12}
                height={12}
                priority
                draggable={false}
              />
              Registre-se com o Google
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}