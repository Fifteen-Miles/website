"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Sliders,
  Shield,
  FolderTree,
  Lock,
  Globe,
  Database,
  Terminal,
  Layers,
  ChevronDown,
  X,
  Check,
  KeyRound,
  Building2,
  Code2,
  BookOpen,
  SlidersHorizontal,
  Briefcase,
  ServerCog,
  Network,
  Activity
} from "lucide-react";
import Seo from "@/components/Seo";
import Button from "@/components/ui/button";

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

  const lines = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => {
      const angle = (i / 24) * Math.PI * 2;
      const long = i % 6 === 0;
      const r1 = 47;
      const r2 = long ? 41 : 44.5;
      return {
        id: i,
        x1: 50 + r1 * Math.cos(angle),
        y1: 50 + r1 * Math.sin(angle),
        x2: 50 + r2 * Math.cos(angle),
        y2: 50 + r2 * Math.sin(angle),
        long,
      };
    });
  }, []);

  return (
    <div
      className={`relative shrink-0 select-none pointer-events-none ${spin ? "animate-[spin_15s_linear_infinite]" : ""}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <circle cx="50" cy="50" r="47" fill="none" className="stroke-wine opacity-45" strokeWidth="1" />
        <circle cx="50" cy="50" r="39" fill="none" className="stroke-wine opacity-[0.28]" strokeWidth="0.5" />
        {mounted &&
          lines.map((line) => (
            <line
              key={line.id}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              className="stroke-wine"
              strokeWidth={line.long ? 1 : 0.5}
              opacity={line.long ? 0.55 : 0.28}
            />
          ))}
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center select-none font-gothic text-wine leading-none"
        style={{ fontSize: size * 0.32 }}
      >
        XV
      </div>
    </div>
  );
}

function BlueprintGrid({ opacity = 0.04 }: { opacity?: number }) {
  return <div className="absolute inset-0 pointer-events-none bg-[url('/blueprint-pattern.svg')] bg-repeat" style={{ opacity }} />;
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)` : `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
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
              transition={{ duration: 0.3 }}
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

function MiniWorkspace() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
      className="relative flex items-center justify-center w-full h-full min-h-[250px] sm:min-h-[350px]"
    >
      <div className="relative w-full max-w-[80%] aspect-video flex items-center justify-center">
        <Image src="/notebook.png" alt="Atlas OS no Notebook" fill priority className="object-contain hover:scale-[1.02] transition-transform duration-700 drop-shadow-2xl" draggable={false} />
        <div className="absolute -bottom-[15%] -right-[10%] w-[35%] aspect-[1/2]">
          <Image src="/phone.png" alt="Atlas OS no Celular" fill priority className="object-contain hover:-translate-y-2 transition-transform duration-500 drop-shadow-xl" draggable={false} />
        </div>
      </div>
    </motion.div>
  );
}

function MiniCustomization() {
  const items = [
    { label: "Página", value: "Projetos" },
    { label: "Campo", value: "Responsável" },
    { label: "Tipo", value: "Seleção" },
  ];

  return (
    <div className="flex flex-col justify-center h-full gap-2 w-full max-w-xs mx-auto">
      {items.map((item) => (
        <div key={item.label} className="flex items-center justify-between rounded-md border border-wine/20 bg-parchment px-3 py-2">
          <span className="font-mono text-[9px] uppercase text-wine/50">{item.label}</span>
          <span className="font-mono text-[10px] text-wine">{item.value}</span>
        </div>
      ))}
      <div className="flex items-center justify-center gap-2 pt-1 mt-2">
        <div className="h-px flex-1 bg-wine/15" />
        <SlidersHorizontal className="h-3 w-3 text-wine/40" />
        <div className="h-px flex-1 bg-wine/15" />
      </div>
    </div>
  );
}

function MiniPermissions() {
  const rows = [
    { name: "Financeiro", level: "Restrito" },
    { name: "Vendas", level: "Editor" },
    { name: "Diretoria", level: "Total" },
  ];
  return (
    <div className="flex flex-col justify-center h-full space-y-2 w-full max-w-xs mx-auto">
      {rows.map((r) => (
        <div key={r.name} className="flex items-center justify-between rounded-lg border px-3 py-2 border-wine/[0.12] bg-parchment">
          <span className="text-[11px] font-medium text-ink">{r.name}</span>
          <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full text-wine bg-wine/[0.08]">
            {r.level}
          </span>
        </div>
      ))}
    </div>
  );
}

function MiniApi() {
  return (
    <div className="flex flex-col justify-center h-full w-full max-w-xs mx-auto">
      <div className="rounded-lg border p-4 font-mono text-[10px] leading-relaxed overflow-hidden border-wine/[0.15] bg-ink text-parchment-dark shadow-inner">
        <div><span className="text-amber-500">POST</span> /v1/workflows/run</div>
        <div className="opacity-50 mt-1">{"{"}</div>
        <div className="pl-3 opacity-80">&quot;trigger&quot;: &quot;novo_contrato&quot;,</div>
        <div className="pl-3 opacity-80">&quot;module&quot;: &quot;crm&quot;</div>
        <div className="opacity-50">{"}"}</div>
      </div>
    </div>
  );
}

function MiniInstitutionalMemory() {
  const items = ["Manuais", "Decisões", "Registros", "Políticas"];
  return (
    <div className="flex flex-col justify-center h-full space-y-2 w-full max-w-xs mx-auto">
      {items.map((it) => (
        <div key={it} className="rounded-lg border px-3 py-2 border-wine/[0.12] bg-parchment hover:bg-wine/5 transition-colors">
          <span className="text-[11px] font-medium text-ink">{it}</span>
        </div>
      ))}
    </div>
  );
}

function MiniTenants() {
  const tenants = ["Matriz — SP", "Filial — RJ", "Filial — CE"];
  return (
    <div className="flex flex-col justify-center h-full space-y-2 w-full max-w-xs mx-auto">
      {tenants.map((t, i) => (
        <div key={t} className={`flex items-center gap-3 rounded-lg border px-3 py-2 border-wine/[0.12] ${i === 0 ? "bg-wine/[0.05]" : "bg-parchment"}`}>
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${i === 0 ? "bg-wine" : "bg-wine/30"}`} />
          <span className="text-[11px] font-medium text-ink">{t}</span>
        </div>
      ))}
    </div>
  );
}

const metricsList = [
  { value: "Mais de 20", label: "Módulos disponíveis entre nativos e integrações" },
  { value: "R$ 1,9 tri", label: "Em volume de operações sob gestão (histórico consolidado)" },
  { value: "99,999%", label: "De disponibilidade média mensal registrada" },
  { value: "Mais de 200", label: "Casos de uso e fluxos operacionais mapeados" },
];

const trustedCompanies = ["Eletra Energy Solutions", "PODS Energy", "Fifteen Miles"];

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
  { q: "O Atlas OS substitui o meu ERP legado?", a: "Não se trata de uma substituição forçada. O Atlas atua como uma camada superior de convergência, execução e memória. Ele integra-se aos sistemas legados (fiscais, contábeis) para centralizar a operação onde as pessoas realmente trabalham, sem descartar a infraestrutura existente." },
  { q: "Como é garantida a soberania dos dados corporativos?", a: "Diferente de SaaS estrangeiros submetidos a legislações externas, o Atlas utiliza arquitetura multi-tenant com isolamento lógico de banco de dados, criptografia de ponta a ponta (at-rest e in-transit) e conformidade absoluta com a LGPD brasileira. Seus dados pertencem estritamente à sua operação." },
  { q: "Qual é o modelo de cobrança da plataforma?", a: "A previsibilidade é regra. Trabalhamos com faturamento exclusivamente em Reais (BRL), protegendo o orçamento da sua empresa contra variações cambiais agressivas, taxas de IOF e reajustes surpresa em dólar típicos de ferramentas globais." },
  { q: "Quanto tempo leva para implantar o ecossistema?", a: "O processo não leva meses. Nossa equipe de engenharia aplica a Arquitetura Orientada à Operação para estruturar seu workspace, espelhar seus processos, definir a malha de permissões (RBAC) e treinar os multiplicadores internos, entregando a fundação pronta em ciclos curtos de dias úteis." },
];

type BentoItem = {
  id: string;
  icon: typeof Layers;
  eyebrow: string;
  title: string;
  desc: string;
  gridClass: string;
  preview: React.ReactNode;
  modal: { headline: string; body: string; features: string[]; preview: React.ReactNode; };
};

const bentoItems: BentoItem[] = [
  {
    id: "workspace",
    icon: Layers,
    eyebrow: "Núcleo Operacional",
    title: "Um workspace. Todos os módulos.",
    desc: "Dashboard, kanban, planilhas e CRM convivem no mesmo núcleo de dados, sem exportações nem sincronização manual.",
    gridClass: "sm:col-span-2 lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-6",
    preview: <MiniWorkspace />,
    modal: {
      headline: "Um workspace. Todos os módulos.",
      body: "O Atlas concentra as visões que a sua operação já usa — dashboard, kanban, planilha, CRM — dentro do mesmo espaço de dados, com contexto compartilhado entre elas em vez de arquivos soltos e exportações manuais.",
      features: ["Dashboard executivo com telemetria em tempo real", "Kanban com automações por coluna e por prazo", "Planilhas relacionais nativas ao workspace", "CRM integrado ao funil e à carteira de clientes"],
      preview: <MiniWorkspace />,
    },
  },
  {
    id: "customization",
    icon: SlidersHorizontal,
    eyebrow: "Personalização",
    title: "A empresa define o sistema",
    desc: "Configure páginas, campos e estruturas do Atlas para refletir a forma como sua empresa realmente trabalha.",
    gridClass: "lg:col-start-5 lg:col-end-7 lg:row-start-1 lg:row-end-4",
    preview: <MiniCustomization />,
    modal: {
      headline: "A empresa define o sistema",
      body: "O Atlas não obriga sua operação a seguir uma estrutura pronta. Páginas, campos e informações podem ser organizados de acordo com as necessidades de cada área.",
      features: ["Páginas e estruturas configuráveis por área", "Campos e informações adaptáveis à operação", "Ambiente moldado às necessidades de cada empresa"],
      preview: <MiniCustomization />,
    },
  },
  {
    id: "rbac",
    icon: KeyRound,
    eyebrow: "Governança",
    title: "Permissões cirúrgicas",
    desc: "Defina quem vê o quê por página, equipe ou cargo — com histórico de cada alteração de acesso.",
    gridClass: "lg:col-start-5 lg:col-end-7 lg:row-start-4 lg:row-end-6",
    preview: <MiniPermissions />,
    modal: {
      headline: "Permissões cirúrgicas",
      body: "O RBAC do Atlas controla o acesso em granularidade de página, bloco ou registro — não apenas de módulo — e mantém um registro auditável.",
      features: ["Papéis herdáveis por equipe e por cargo", "Restrições por página, bloco ou linha de dado", "Trilha de auditoria de todas as mudanças de acesso", "Isolamento total entre unidades de negócio"],
      preview: <MiniPermissions />,
    },
  },
  {
    id: "api",
    icon: Code2,
    eyebrow: "Para Desenvolvedores",
    title: "API aberta, webhooks nativos",
    desc: "Estenda o Atlas com integrações próprias e automações via API REST documentada.",
    gridClass: "lg:col-start-1 lg:col-end-3 lg:row-start-6 lg:row-end-9",
    preview: <MiniApi />,
    modal: {
      headline: "API aberta, webhooks nativos",
      body: "Toda a superfície do Atlas — módulos, permissões, automações — é acessível via API REST documentada, com webhooks para eventos em tempo real.",
      features: ["API REST versionada e documentada", "Webhooks para qualquer evento do workspace", "Chaves de acesso escopadas por integração"],
      preview: <MiniApi />,
    },
  },
  {
    id: "institutional-memory",
    icon: BookOpen,
    eyebrow: "Para Organizações",
    title: "Memória institucional",
    desc: "Centralize informações, decisões e registros para que o conhecimento da empresa não dependa de pessoas.",
    gridClass: "lg:col-start-3 lg:col-end-5 lg:row-start-6 lg:row-end-9",
    preview: <MiniInstitutionalMemory />,
    modal: {
      headline: "Memória institucional preservada",
      body: "O Atlas transforma informações operacionais em patrimônio institucional. Registros, decisões e dados importantes permanecem organizados e acessíveis.",
      features: ["Informações organizadas em ambiente centralizado", "Histórico e registros preservados", "Conhecimento acessível de forma sistêmica"],
      preview: <MiniInstitutionalMemory />,
    },
  },
  {
    id: "tenancy",
    icon: Building2,
    eyebrow: "Multiempresa",
    title: "Isolamento entre unidades",
    desc: "Matriz e filiais operam separadas, com visão consolidada disponível para a diretoria.",
    gridClass: "lg:col-start-5 lg:col-end-7 lg:row-start-6 lg:row-end-9",
    preview: <MiniTenants />,
    modal: {
      headline: "Isolamento total entre unidades",
      body: "Cada unidade opera em seu próprio espaço de dados, com regras e módulos independentes, enquanto a diretoria mantém uma visão consolidada.",
      features: ["Dados isolados por unidade de negócio", "Visão consolidada para a diretoria", "Módulos e permissões configuráveis por unidade"],
      preview: <MiniTenants />,
    },
  },
];

export default function AtlasLanding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

  const activeItem = bentoItems.find((b) => b.id === activeModal) ?? null;

  return (
    <div ref={containerRef} className="min-h-screen overflow-x-hidden bg-parchment text-ink font-heading">
      <Seo title="Atlas OS — O Sistema Operacional da sua Empresa" description="Centralize processos, dados, documentos e equipes em um ambiente que se adapta à sua forma de trabalhar." path="/atlas" />

      {/* Hero Section */}
      <section className="relative w-full pt-28 sm:pt-36 pb-24 px-6 sm:px-14 flex flex-col items-center justify-center min-h-[90vh]">
        <BlueprintGrid />
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
          <motion.h1 className="block text-6xl sm:text-[8vw] leading-none font-thin animate-text-opening font-mono mb-8">ATLAS</motion.h1>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-6 mb-10 max-w-3xl">
            <motion.span variants={fadeUp} className="text-xl sm:text-3xl font-display font-medium text-ink">
              O sistema operacional configurável <br/> para a operação da sua empresa.
            </motion.span>
            <motion.span variants={fadeUp} className="text-base sm:text-xl font-light font-raleway text-ink/75 leading-relaxed">
              Centralize processos, dados, documentos, indicadores e equipes em um ambiente que se adapta à sua forma de trabalhar — sem criar um sistema isolado para cada necessidade.
            </motion.span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5, ease: EASE }} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4">
            <Button href="https://atlas.fifteenmiles.tech/demo" variant="primary-dark" showArrow className="w-full sm:w-auto">Solicitar Demonstração</Button>
            <Button href="https://atlas.fifteenmiles.tech/register" className="w-full sm:w-auto border border-ink/20 text-ink hover:bg-ink/5 bg-transparent">Crie sua conta</Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 border-y border-wine/[0.12] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 text-center">
          {metricsList.map((m, i) => (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1, ease: EASE }} key={i} className="px-4">
              <span className="block text-4xl sm:text-5xl font-bold tracking-tight mb-3 font-display text-ink">{m.value}</span>
              <span className="text-xs uppercase font-mono tracking-wider text-ink/60">{m.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Personas Segmentation */}
      <section className="py-24 sm:py-32 px-6 sm:px-14 border-b border-wine/[0.12] bg-parchment-alt">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-ink">Projetado para quem decide e quem executa.</h2>
            <p className="mt-4 text-ink/70 font-light text-lg">Uma única fundação arquitetural que resolve dores específicas de cada área da empresa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: "Diretoria & COO", pain: "Falta de visão integrada e execução fragmentada.", solution: "Veja a operação inteira, consolide KPIs e acompanhe o que exige decisão rápida.", icon: Briefcase },
              { role: "Tecnologia & CIO", pain: "Sistemas legados difíceis de integrar e manter.", solution: "Uma fundação configurável, escalável, com APIs, webhooks e governança forte.", icon: ServerCog },
              { role: "Operações & PMO", pain: "Processos manuais e informação espalhada.", solution: "Configure fluxos reais, responsáveis, aprovações e cronogramas automatizados.", icon: Activity },
              { role: "Empresas Multiunidade", pain: "Dados isolados e pouca visão consolidada.", solution: "Separe operações por filial ou CNPJ sem perder a visão corporativa central.", icon: Network }
            ].map((persona, i) => (
              <div key={i} className="p-8 rounded-xl border bg-white border-wine/[0.15] shadow-sm flex flex-col h-full">
                <persona.icon className="w-6 h-6 text-wine mb-6" />
                <h3 className="text-lg font-medium font-display text-ink mb-4">{persona.role}</h3>
                <div className="flex flex-col gap-4 flex-1">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-wine/60 block mb-1">O Problema</span>
                    <p className="text-sm font-light text-ink/80">{persona.pain}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-wine/10">
                    <span className="text-[10px] uppercase font-mono text-emerald-700/60 block mb-1">A Solução Atlas</span>
                    <p className="text-sm font-light text-ink/90">{persona.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Silos Section */}
      <section className="relative py-24 sm:py-36 px-6 sm:px-14 border-b border-wine/[0.12] bg-parchment">
        <BlueprintGrid opacity={0.03} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl leading-[1.1] font-display font-semibold text-ink">
            Sua empresa usa <br /><span className="text-wine italic font-normal">sistemas demais.</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl font-light mx-auto leading-relaxed text-ink/70 max-w-2xl">
            O crescimento fragmentado empurra operações para dezenas de ferramentas desconectadas, criando silos de ignorância, retrabalho e alto custo de manutenção.
          </p>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {["Excel", "Google Drive", "WhatsApp", "ERP Legado", "CRM de Vendas", "Power BI", "Notion", "ClickUp", "E-mails Soltos"].map((tool) => (
            <div key={tool} className="p-4 sm:p-5 rounded-lg border bg-white text-center shadow-sm flex items-center justify-center border-wine/[0.15]">
              <span className="font-mono text-xs uppercase tracking-widest opacity-70 text-ink truncate">{tool}</span>
            </div>
          ))}
        </div>
        <div className="relative z-10 max-w-2xl mx-auto mt-8 p-8 rounded-lg border text-center shadow-xl bg-wine border-wine selection:bg-white">
          <span className="text-sm tracking-[0.3em] uppercase font-bold text-white font-mono block">Convergência Total: Atlas OS</span>
          <p className="text-xs text-white/80 mt-2 font-light">Fundação estável, configuração adaptável e histórico rastreável em um único ambiente.</p>
        </div>
      </section>

      {/* ERP Comparison Statement */}
      <section className="relative py-24 sm:py-36 px-6 sm:px-14 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center text-center lg:text-left">
          <div className="space-y-6 lg:col-span-1">
            <p className="text-2xl sm:text-3xl font-light line-through font-display text-ink/35 decoration-wine">O Atlas não é um ERP.</p>
            <p className="text-2xl sm:text-3xl font-light line-through font-display text-ink/35 decoration-wine">O Atlas não é gestor de tarefas.</p>
            <p className="text-2xl sm:text-3xl font-light line-through font-display text-ink/35 decoration-wine">O Atlas não é apenas software.</p>
          </div>
          <div className="lg:col-span-2 p-10 sm:p-16 rounded-2xl border shadow-xl bg-parchment-alt relative overflow-hidden border-wine/20">
            <h3 className="text-3xl sm:text-5xl leading-[1.15] font-display font-semibold text-ink">
              O Atlas é onde <br /><span className="text-wine italic font-normal">toda a operação</span> <br />da empresa acontece.
            </h3>
            <p className="mt-6 text-base sm:text-lg font-light leading-relaxed text-ink/70">
              Substitua a dispersão operacional por um núcleo de alta performance projetado para alinhar equipes e preservar a memória corporativa.
            </p>
          </div>
        </div>
      </section>

      {/* Narrated Workflow Section (NEW 6.4) */}
      <section className="relative py-24 sm:py-36 px-6 sm:px-14 border-t border-wine/[0.12] bg-parchment-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-5xl leading-[1.1] font-display font-semibold text-ink">
              A diferença entre ferramentas isoladas e um Sistema Operacional.
            </h2>
            <p className="mt-6 text-lg font-light text-ink/70">
              O valor do Atlas não é ter planilhas ou kanbans bonitos. É como a informação flui através da empresa, sem nunca sair da plataforma.
            </p>
          </div>

          <div className="relative border-l border-wine/20 ml-4 sm:ml-8 space-y-12 pb-8">
            {[
              { step: "01. Entrada", module: "CRM & Forms", desc: "Um novo contrato é registrado pela equipe comercial. Todos os dados primários nascem estruturados." },
              { step: "02. Governança", module: "Automação", desc: "O sistema identifica o valor do contrato e exige aprovação automática da diretoria financeira via notificação." },
              { step: "03. Execução", module: "Projetos & Kanban", desc: "Após aprovado, tarefas são geradas e delegadas para as equipes técnicas, respeitando o cronograma e os SLAs." },
              { step: "04. Visibilidade", module: "Dashboard", desc: "A receita projetada e o status da entrega atualizam em tempo real o painel executivo da empresa." },
              { step: "05. Patrimônio", module: "Memória Institucional", desc: "Documentos, e-mails, notas e histórico de alterações ficam salvos para sempre no perfil daquele projeto para futura auditoria." }
            ].map((flow, i) => (
              <div key={i} className="relative pl-8 sm:pl-12">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-wine ring-4 ring-parchment-dark" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-wine/70 block mb-2">{flow.step} // {flow.module}</span>
                <p className="text-lg sm:text-xl font-light text-ink/90 leading-relaxed">{flow.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="relative py-24 sm:py-36 px-6 sm:px-14 border-t border-wine/[0.12] bg-white overflow-hidden">
        <BlueprintGrid />
        <div className="max-w-[1400px] flex flex-col mx-auto relative z-10">
          <div className="text-left w-full mb-12 sm:mb-16 max-w-3xl">
            <h2 className="text-3xl sm:text-5xl leading-[1.1] font-light font-raleway uppercase text-ink">
              Infraestrutura modular, interface personalizável.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[200px] gap-5">
            {bentoItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveModal(item.id)}
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border p-7 sm:p-8 text-left cursor-pointer ${item.gridClass}`}
                  style={{ borderColor: "rgba(255,255,255,0.14)", boxShadow: "0 20px 40px -20px rgba(0,0,0,0.35)" }}
                >
                  <div className="absolute inset-0 bg-white">
                    <img
                      src="/bg-cards.png"
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply"
                    />
                  </div>

                  <div className="relative z-10 flex flex-col justify-between h-full w-full">
                    <div>
                      <p className="mt-2.5 text-[1vw] font-raleway leading-relaxed max-w-sm text-ink">
                        {item.desc}
                      </p>
                    </div>

                    <div className="my-4">{item.preview}</div>

                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-wine">
                      Explorar módulo
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-ink/70 backdrop-blur-[6px]"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl border bg-white shadow-2xl border-wine/[0.18]"
            >
              <div className="sticky top-0 z-10 flex items-start justify-between gap-6 px-7 sm:px-10 pt-8 pb-6 border-b bg-white/95 border-wine/10 backdrop-blur-[8px]">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center border shrink-0 border-wine/20 bg-wine/[0.05]">
                    <activeItem.icon className="w-5 h-5 text-wine" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.25em] mb-1.5 text-ink/45">
                      {activeItem.eyebrow}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-medium leading-tight font-display text-ink">
                      {activeItem.modal.headline}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center shrink-0 cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4 text-ink" />
                </button>
              </div>

              <div className="px-7 sm:px-10 py-8">
                <p className="text-base font-light leading-relaxed max-w-xl text-ink/70">
                  {activeItem.modal.body}
                </p>

                <div className="mt-8 rounded-2xl border p-5 sm:p-6 border-wine/[0.15] bg-parchment">
                  {activeItem.modal.preview}
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                  {activeItem.modal.features.map((f) => (
                    <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-wine/[0.12]">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-wine" />
                      <span className="text-sm font-light text-ink/80">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-7 sm:px-10 py-6 border-t border-wine/10 flex items-center justify-between gap-4">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-ink/40">
                  Módulo // {activeItem.eyebrow}
                </span>
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest text-white cursor-pointer bg-wine"
                >
                  Fechar painel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Types Section */}
      <section className="relative py-24 sm:py-36 px-6 sm:px-14 border-t border-wine/[0.12] bg-parchment">
        <BlueprintGrid opacity={0.05} />
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <h2 className="text-4xl sm:text-6xl leading-[1.1] font-display font-semibold text-ink">
              Módulos Nativos. <br /><span className="text-wine italic font-normal">Uma única fundação.</span>
            </h2>
            <p className="mt-6 text-lg font-light text-ink/70">
              O Atlas pode atuar como plataforma base enquanto módulos verticais especializados são habilitados conforme o nível de maturidade da sua operação.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageTypes.map((page) => {
              const Icon = page.icon;
              return (
                <div key={page.name} className="rounded-xl overflow-hidden border flex flex-col h-[280px] transition-all hover:-translate-y-1 hover:shadow-xl bg-white group border-wine/[0.15]">
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded border border-wine/20 text-wine bg-wine/5">
                          Vista // {page.name}
                        </span>
                        <Icon className="w-4 h-4 text-wine opacity-60" />
                      </div>
                      <h3 className="text-xl font-medium tracking-tight mb-2 font-display text-ink">{page.name}</h3>
                      <p className="text-xs font-light leading-relaxed text-ink/70">{page.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customization & Governance */}
      <section className="relative py-24 sm:py-36 px-6 sm:px-14 border-t border-wine/[0.12] bg-parchment-alt">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <h2 className="text-4xl sm:text-6xl leading-[1.1] font-display font-semibold text-ink">
              Feito para a sua empresa. <br /><span className="text-wine italic font-normal font-gothic">Sob medida para você.</span>
            </h2>
            <p className="mt-6 text-lg font-light text-ink/70">
              O Atlas combina isolamento rigoroso de dados com flexibilidade radical de personalização visual e arquitetural.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sliders, title: "Identidade & Accent Color", desc: "Personalize o workspace com sua logomarca e cores de destaque que alimentam dinamicamente a interface.", tag: "Dinâmico" },
              { icon: Shield, title: "Governança & RBAC", desc: "Controle cirúrgico de acessos por usuário, equipes ou páginas com segurança jurídica e técnica.", tag: "Isolado & Seguro" },
              { icon: FolderTree, title: "Módulos Ativáveis", desc: "Elimine ruídos visuais. Ative apenas módulos essenciais para o seu negócio operar hoje.", tag: "Configurável" }
            ].map((card, i) => (
              <div key={i} className="p-8 sm:p-10 rounded-xl border flex flex-col justify-between bg-white shadow-sm border-wine/[0.15]">
                <div>
                  <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-6 border-wine/25 bg-wine/5">
                    <card.icon className="w-5 h-5 text-wine" />
                  </div>
                  <h3 className="text-xl font-medium mb-3 font-display text-ink">{card.title}</h3>
                  <p className="text-sm font-light leading-relaxed mb-8 text-ink/70">{card.desc}</p>
                </div>
                <div className="pt-6 border-t border-wine/10 flex items-center justify-end">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-wine">{card.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backbone / Architecture Steps */}
      <section className="relative py-24 sm:py-36 px-6 sm:px-14 border-t border-wine/[0.12] bg-white">
        <BlueprintGrid opacity={0.03} />
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-center mb-16 font-display text-ink">A espinha dorsal da operação.</h2>
          <div className="w-full flex flex-col items-center">
            {["Empresa & Workspace", "Equipes & Departamentos", "Páginas, Databases & Blocos", "Projetos, Metas & Kanban", "Automações & Histórico", "Operação Centralizada"].map((step, i, arr) => (
              <div key={step} className="flex flex-col items-center w-full max-w-md">
                <div className="w-full px-6 py-4 rounded-lg border flex items-center justify-center shadow-sm relative bg-parchment-alt border-wine/20">
                  <span className="text-xs sm:text-sm font-medium tracking-[0.15em] uppercase text-center relative z-10 text-ink font-mono">{step}</span>
                </div>
                {i !== arr.length - 1 && <div className="h-8 w-px my-2 bg-wine/20" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brazil / Currency Comparison */}
      <section className="relative py-24 sm:py-36 px-6 sm:px-14 max-w-[1400px] mx-auto border-t border-wine/[0.12]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="p-8 sm:p-14 rounded-2xl border shadow-xl bg-parchment-alt relative overflow-hidden flex flex-col justify-between border-wine/20 h-full">
            <div>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-6 font-display text-ink">
                Construído no Brasil.<br /><span className="text-wine italic font-normal">Para o Brasil.</span>
              </h2>
              <p className="text-base sm:text-lg font-light leading-relaxed mb-10 text-ink/70">
                Desenvolvido considerando idioma nativo, suporte humanizado de plantão, legislação fiscal brasileira e fuso horário alinhado. Sem barreiras estrangeiras.
              </p>
            </div>
            <div className="space-y-4">
              {["Português nativo e natural", "Suporte nacional prioritário", "Conformidade regulatória local", "Alinhamento total de fuso horário"].map((item) => (
                <div key={item} className="flex items-center gap-4 border-b border-wine/10 pb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-wine" />
                  <span className="text-sm font-light text-ink">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col h-full justify-center">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight font-display text-ink">
                Pagamento em Real.<br /><span className="text-wine italic font-normal">Sem surpresas em dólar.</span>
              </h2>
            </div>
            <TiltCard className="w-full selection:bg-white">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-white/15 pb-6 mb-6 gap-4">
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/70">SaaS Internacional</span>
                <div className="text-left sm:text-right">
                  <span className="block text-sm font-light mb-1.5 text-white/90">USD + IOF + Câmbio Flutuante</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-rose-300">Alto Risco Orçamentário</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <span className="text-3xl font-medium font-display text-white">Atlas OS</span>
                <span className="font-mono text-xs uppercase tracking-widest font-medium px-4 py-2 rounded-full border border-white/30 bg-white/10 text-amber-300">
                  Preço Fixo em BRL
                </span>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="relative py-24 sm:py-36 px-6 sm:px-14 border-t selection:bg-white border-wine/[0.12] bg-wine">
        <div className="max-w-[1400px] mx-auto text-white">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight font-display">
              Infraestrutura extensível para desenvolvedores.
            </h2>
            <p className="mt-6 text-lg text-white/80 font-light">
              A verdadeira convergência exige abertura. Adapte o Atlas às necessidades da sua empresa com opções de integração flexíveis, SDKs nativos e webhooks em tempo real.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="https://atlas.fifteenmiles.tech/docs" className="px-6 py-4 text-center rounded text-xs font-mono uppercase tracking-widest text-white transition-all bg-[#3D0000] border border-white/20 hover:bg-[#4D0000]">
                Explorar Documentação
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="px-6 py-4 text-center rounded text-xs font-mono uppercase tracking-widest text-white border border-white/20 transition-all hover:bg-white/10">
                Acessar Repositório
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-24 sm:py-36 px-6 sm:px-14 border-t border-wine/[0.12] bg-parchment">
        <BlueprintGrid opacity={0.03} />
        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight font-display text-ink">A Filosofia da Permanência.</h2>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
          {[
            { num: "I", title: "Permanência", desc: "Projetado para durar décadas." },
            { num: "II", title: "Operação", desc: "A empresa vem antes do software." },
            { num: "III", title: "Contexto", desc: "Dados exigem hierarquia e contexto." },
            { num: "IV", title: "Engenharia", desc: "Simplicidade exige rigor técnico." },
          ].map((item) => (
            <div key={item.num} className="p-8 sm:p-10 rounded-xl border shadow-sm bg-white border-wine/[0.15]">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase block mb-3 text-wine">Princípio {item.num}</span>
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight mb-3 font-display text-ink">{item.title}</h3>
              <p className="text-sm sm:text-base font-light leading-relaxed text-ink/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-36 px-6 sm:px-14 border-t border-wine/[0.12] relative overflow-hidden bg-gradient-to-b from-parchment to-parchment-dark">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight font-display text-ink">Dúvidas Frequentes</h2>
            <p className="mt-4 text-base font-light text-ink/70">Tudo sobre a arquitetura, soberania e implantação do Atlas.</p>
          </div>
          <div className="space-y-4">
            {faqItems.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q} className="rounded-xl border bg-white shadow-sm transition-all duration-300 overflow-hidden" style={{ borderColor: isOpen ? "rgba(92,0,0,0.4)" : "rgba(92,0,0,0.15)" }}>
                  <button onClick={() => setOpenFaq(isOpen ? null : idx)} className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-semibold tracking-widest text-wine/60 group-hover:text-wine transition-colors">0{idx + 1}</span>
                      <span className="text-base sm:text-lg font-medium transition-colors font-display text-ink">{faq.q}</span>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-colors ${isOpen ? "bg-wine text-white border-wine" : "bg-parchment text-wine border-wine/20"}`}>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
                        <div className="px-6 pb-6 pt-2 text-sm sm:text-base font-light leading-relaxed border-t border-wine/10 text-ink/80">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 sm:py-48 px-6 sm:px-14 flex flex-col items-center justify-center text-center border-t border-wine/12 bg-parchment-alt">
        <BlueprintGrid opacity={0.04} />
        <div className="relative z-10 w-full max-w-3xl flex flex-col justify-center items-center">
          <Seal size={80} spin />
          <h2 className="mt-12 text-4xl sm:text-5xl lg:text-7xl leading-[1.05] font-display font-semibold text-ink">
            A infraestrutura digital <br /><span className="text-wine italic font-gothic font-normal">começa aqui.</span>
          </h2>
          <p className="mt-8 text-lg sm:text-xl font-light mx-auto leading-relaxed text-ink/70">
            Memória institucional intacta, execução fluida e inteligência centralizada. Assuma o controle absoluto da sua operação hoje.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button href="https://atlas.fifteenmiles.tech/demo" variant="primary-dark" showArrow className="w-full sm:w-auto">Solicitar Demonstração</Button>
            <Button href="https://atlas.fifteenmiles.tech/contact" className="w-full sm:w-auto border border-ink/20 text-ink hover:bg-ink/5 bg-transparent">Falar com Consultor</Button>
          </div>
        </div>
      </section>
    </div>
  );
}