"use client";

import { useEffect, useRef, useState } from "react";
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
  Workflow,
  KeyRound,
  Building2,
  Code2,
  BookOpen,
  SlidersHorizontal,
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

function MiniKanban() {
  const cols = [
    { label: "A Fazer", items: 3, tone: "bg-wine" },
    { label: "Em Curso", items: 2, tone: "bg-amber-700" },
    { label: "Concluído", items: 4, tone: "bg-emerald-800" },
  ];
  return (
    <div className="grid grid-cols-3 gap-2">
      {cols.map((c) => (
        <div key={c.label} className="rounded-lg border p-2.5 border-wine/[0.12] bg-parchment">
          <span className="block font-mono text-[8px] uppercase tracking-wider mb-2 text-ink/50">
            {c.label}
          </span>
          <div className="space-y-1.5">
            {Array.from({ length: c.items }).map((_, i) => (
              <div
                key={i}
                className={`h-2.5 rounded-sm ${i === 0 ? c.tone : "bg-ink/10"}`}
                style={{ opacity: i === 0 ? 0.75 : 1 }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MiniWorkspace() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
      className="relative flex flex-col items-center justify-center pt-6 lg:pt-0 w-full"
    >
      <div className="relative w-full flex items-center justify-center py-12 px-8">
        <div className="absolute w-[50vw] left-[12vw] z-10 filter  flex justify-center">
          <Image
            src="/notebook.png"
            alt="Atlas OS no Notebook"
            width={1900}
            height={1200}
            priority
            className="w-full h-full object-cover select-none hover:scale-[1.02] transition-transform duration-700 drop-shadow-[-27px_13px_30px_2px_rgba(0,_0,_0,_0.1)]"
            draggable={false}
          />
        </div>
        <div className="absolute left-[5%] w-[42%] mb-50 sm:w-[30%] z-20 filter ">
          <Image
            src="/phone.png"
            alt="Atlas OS no Celular"
            width={500}
            height={1000}
            priority
            className="w-full h-auto object-cover select-none hover:-translate-y-2 transition-transform duration-500"
            draggable={false}
          />
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
    <div className="flex -mt-40 flex-col gap-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between rounded-md border border-wine/20 bg-parchment px-3 py-2"
        >
          <span className="font-mono text-[9px] uppercase text-wine/50">
            {item.label}
          </span>

          <span className="font-mono text-[10px] text-wine">
            {item.value}
          </span>
        </div>
      ))}

      <div className="flex items-center justify-center gap-2 pt-1">
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
    <div className="space-y-2">
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
    <div className="rounded-lg border p-3 font-mono text-[10px] leading-relaxed overflow-hidden border-wine/[0.15] bg-ink text-parchment-dark">
      <div>
        <span className="text-amber-500">POST</span> /v1/workflows/run
      </div>
      <div className="opacity-50">{"{"}</div>
      <div className="pl-3 opacity-80">&quot;trigger&quot;: &quot;novo_contrato&quot;,</div>
      <div className="pl-3 opacity-80">&quot;module&quot;: &quot;crm&quot;</div>
      <div className="opacity-50">{"}"}</div>
    </div>
  );
}

function MiniInstitutionalMemory() {
  const items = ["Manuais", "Decisões", "Registros", "Políticas"];
  return (
    <div className="space-y-2">
      {items.map((it) => (
        <div key={it} className="rounded-lg border px-3 py-2 border-wine/[0.12] bg-parchment">
          <span className="text-[11px] font-medium text-ink">{it}</span>
        </div>
      ))}
    </div>
  );
}

function MiniTenants() {
  const tenants = ["Matriz — SP", "Filial — RJ", "Filial — CE"];
  return (
    <div className="space-y-2">
      {tenants.map((t, i) => (
        <div
          key={t}
          className={`flex items-center gap-3 rounded-lg border px-3 py-2 border-wine/[0.12] ${i === 0 ? "bg-wine/[0.05]" : "bg-parchment"}`}
        >
          <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-wine" />
          <span className="text-[11px] font-medium text-ink">{t}</span>
        </div>
      ))}
    </div>
  );
}

const metricsList = [
  { value: "Mais de 20", label: "Módulos, vistas e ferramentas integradas" },
  { value: "R$ 1,9 tri", label: "Em volume de operações processadas" },
  { value: "99,999%", label: "Histórico de tempo de atividade e resiliência" },
  { value: "Mais de 200", label: "Compromissos operacionais sob gestão" },
];

const trustedCompanies = ["Eletra Energy Solutions"];

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
    a: "Não se trata de uma substituição forçada, mas de um sistema operacional de convergência. O Atlas unifica a camada de execução, governança e memória da empresa, integrando-se perfeitamente aos seus sistemas existentes.",
  },
  {
    q: "Como é garantida a soberania dos dados corporativos?",
    a: "Diferente de SaaS estrangeiros submetidos a leis externas, o Atlas utiliza arquitetura multi-tenant isolada com criptografia de ponta a ponta e total conformidade com a legislação brasileira.",
  },
  {
    q: "Qual é o modelo de cobrança da plataforma?",
    a: "Trabalhamos exclusivamente em Reais (BRL), blindando sua operação contra variações cambiais agressivas, taxas de IOF e reajustes em dólar.",
  },
  {
    q: "Quanto tempo leva para implantar o ecossistema?",
    a: "Nossa equipe de engenharia conduz a estruturação inicial do workspace em ciclos acelerados, adaptando módulos, permissões RBAC e fluxos em poucos dias úteis.",
  },
];

type BentoItem = {
  id: string;
  icon: typeof Layers;
  eyebrow: string;
  title: string;
  desc: string;
  gridClass: string;
  preview: React.ReactNode;
  modal: {
    headline: string;
    body: string;
    features: string[];
    preview: React.ReactNode;
  };
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
      features: [
        "Dashboard executivo com telemetria em tempo real",
        "Kanban com automações por coluna e por prazo",
        "Planilhas relacionais nativas ao workspace",
        "CRM integrado ao funil e à carteira de clientes",
      ],
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
    body: "O Atlas não obriga sua operação a seguir uma estrutura pronta. Páginas, campos e informações podem ser organizados de acordo com as necessidades de cada área, criando um ambiente alinhado à realidade da empresa.",
    features: [
    "Páginas e estruturas configuráveis por área",
    "Campos e informações adaptáveis à operação",
    "Ambiente moldado às necessidades de cada empresa",
    ],
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
      body: "O RBAC do Atlas controla o acesso em granularidade de página, bloco ou registro — não apenas de módulo — e mantém um registro auditável de quem alterou o quê.",
      features: [
        "Papéis herdáveis por equipe e por cargo",
        "Restrições por página, bloco ou linha de dado",
        "Trilha de auditoria de todas as mudanças de acesso",
        "Isolamento total entre unidades de negócio",
      ],
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
      body: "Toda a superfície do Atlas — módulos, permissões, automações — é acessível via API REST documentada, com webhooks para eventos em tempo real e SDKs para as stacks mais comuns.",
      features: [
        "API REST versionada e documentada",
        "Webhooks para qualquer evento do workspace",
        "Chaves de acesso escopadas por integração",
      ],
      preview: <MiniApi />,
    },
  },
  {
    id: "institutional-memory",
    icon: BookOpen,
    eyebrow: "Para Organizações",
    title: "Memória institucional preservada",
    desc: "Centralize informações, decisões e registros para que o conhecimento da empresa não dependa de uma única pessoa.",
    gridClass: "lg:col-start-3 lg:col-end-5 lg:row-start-6 lg:row-end-9",
    preview: <MiniInstitutionalMemory />,
    modal: {
      headline: "Memória institucional preservada",
      body: "O Atlas transforma informações operacionais em patrimônio institucional. Registros, decisões e dados importantes permanecem organizados e acessíveis, reduzindo a dependência de conhecimento disperso entre pessoas e sistemas.",
      features: [
        "Informações organizadas em um ambiente centralizado",
        "Histórico e registros preservados",
        "Conhecimento acessível independentemente de pessoas específicas",
      ],
      preview: <MiniInstitutionalMemory />,
    },
  },
  {
    id: "tenancy",
    icon: Building2,
    eyebrow: "Multiempresa",
    title: "Isolamento total entre unidades",
    desc: "Matriz, filiais e subsidiárias operam separadas, com visão consolidada disponível para a diretoria.",
    gridClass: "lg:col-start-5 lg:col-end-7 lg:row-start-6 lg:row-end-9",
    preview: <MiniTenants />,
    modal: {
      headline: "Isolamento total entre unidades",
      body: "Cada unidade opera em seu próprio espaço de dados, com regras e módulos independentes, enquanto a diretoria mantém uma visão consolidada de toda a operação.",
      features: [
        "Dados isolados por unidade de negócio",
        "Visão consolidada para a diretoria",
        "Módulos e permissões configuráveis por unidade",
      ],
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
      <Seo title="Atlas OS — Fifteen Miles" description="Atlas: plataforma operacional definitiva para centralizar pessoas, processos e dados com precisão arquitetural." path="/atlas" />

      {/* Hero Section */}
      <section className="relative w-full pt-25 sm:pt-30 pb-20 px-6 sm:px-14">
        <BlueprintGrid />
        <div className="absolute top-10 right-14 hidden lg:block opacity-70">
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center text-center">
          <motion.h1 className="block text-[10vw] font-thin animate-text-opening font-mono">ATLAS</motion.h1>
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-10 mb-2 5">
              <motion.span variants={fadeUp} className="text-3xl font-raleway tracking-[0.5rem] font-[100]">
                INTELIGÊNCIA EXECUTIVA
              </motion.span>
              <motion.span variants={fadeUp} className="text-xl font-raleway">
                Veja sua empresa como ela realmente funciona.<br/><br/>
              </motion.span>
              <motion.span variants={fadeUp} className="text-xl font-raleway text-regular">
                "Todo número escreve uma história <br/><br/>
                Atlas conta ela inteira." 
              </motion.span>
            </motion.div>

          {/*<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.35, ease: EASE }} className="mt-8 text-lg sm:text-2xl max-w-3xl leading-relaxed font-light text-ink/70">
            Impulsionamos negócios de todos os tamanhos. Sua empresa possui muitas tecnologias fragmentadas? Gerencie tudo em uma plataforma unificada e confiável que se adapta às suas necessidades e resiste ao tempo.
          </motion.p>*/}

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5, ease: EASE }} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Button href="https://atlas.fifteenmiles.tech/register" variant="primary-dark" showArrow>Comece já</Button>
            <Button href="https://atlas.fifteenmiles.tech/register" variant="google">Registre-se com o Google</Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 border-y border-wine/[0.12] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metricsList.map((m, i) => (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5, ease: EASE }}  key={i} className="px-4">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5, ease: EASE }} className="block text-3xl sm:text-4xl font-bold tracking-tight mb-2 font-display text-ink">
                {m.value}
              </motion.span>
              <span className="text-xs uppercase font-mono tracking-wider text-ink/60">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trusted Companies */}
      <div className="py-12 border-b border-wine/[0.1] bg-parchment">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <span className="block font-mono text-[10px] uppercase tracking-[0.3em] mb-6 text-ink/40">
            Empresas globais que confiam na arquitetura Atlas
          </span>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 opacity-70">
            {trustedCompanies.map((comp) => (
              <span key={comp} className="font-mono text-sm sm:text-base font-bold tracking-widest uppercase text-ink">
                {comp}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Silos Section */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t border-wine/[0.12] bg-parchment-alt">
        <BlueprintGrid opacity={0.03} />
        <div className="relative z-10 max-w-[1000px] mx-auto text-center">
          <h2 className="mt-8 text-4xl sm:text-6xl leading-[1.1] font-display font-semibold text-ink">
            Sua empresa usa <br />
            <span className="text-wine italic font-normal">sistemas demais.</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed text-ink/70">
            O crescimento fragmentado empurra operações para dezenas de ferramentas desconectadas, criando silos de ignorância, retrabalho e alto custo de manutenção.
          </p>
        </div>

        <div className="relative z-10 max-w-xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {["Excel", "Google Drive", "WhatsApp", "ERP Legado", "CRM de Vendas", "Power BI", "Notion", "ClickUp", "E-mails Soltos"].map((tool) => (
            <div key={tool} className="p-5 rounded-[8px] border bg-white text-center shadow-sm flex items-center justify-center border-wine/[0.15]">
              <span className="font-mono text-xs uppercase tracking-widest opacity-70 text-ink">
                {tool}
              </span>
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-xl mx-auto mt-8 p-8 rounded-[10px] border text-center shadow-xl bg-wine border-wine">
          <span className="text-sm tracking-[0.3em] uppercase font-bold text-white font-mono block">Convergência Total: Atlas OS</span>
          <p className="text-xs text-white/80 mt-2 font-light">Unificação completa de dados, processos e equipes em um único ambiente imutável.</p>
        </div>
      </section>

      {/* ERP Comparison Statement */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t border-wine/[0.12] bg-parchment">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="space-y-4 md:col-span-1">
            <p className="text-2xl sm:text-3xl font-light line-through font-display text-ink/35 decoration-wine">
              O Atlas não é um ERP.
            </p>
            <p className="text-2xl sm:text-3xl font-light line-through font-display text-ink/35 decoration-wine">
              O Atlas não é gestor de tarefas.
            </p>
            <p className="text-2xl sm:text-3xl font-light line-through font-display text-ink/35 decoration-wine">
              O Atlas não é apenas software.
            </p>
          </div>

          <div className="md:col-span-2 p-12 sm:p-16 rounded-[12px] border shadow-xl bg-white relative overflow-hidden border-wine/20">
            <h3 className="text-3xl sm:text-5xl leading-[1.15] font-display font-semibold text-ink">
              O Atlas é onde <br />
              <span className="text-wine italic font-normal">toda a operação</span> <br />
              da empresa acontece.
            </h3>
            <p className="mt-6 text-base sm:text-lg font-light leading-relaxed text-ink/70">
              Substitua a dispersão operacional por um núcleo de alta performance projetado para alinhar equipes e preservar a memória corporativa.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 selection:bg-fuchsia-300 border-t border-wine/[0.12] bg-white overflow-hidden">
        <BlueprintGrid />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20 max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-6xl leading-[1.1] text-black font-display font-semibold">
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
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: EASE }}
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
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border border-wine/[0.18] bg-wine/[0.05]">
                        <Icon className="w-4.5 h-4.5 text-wine" />
                      </div>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.2em] mb-2 text-ink/45">
                        {item.eyebrow}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold leading-tight font-raleway text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm font-raleway leading-relaxed max-w-sm text-ink/[0.62]">
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
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t border-wine/[0.12] bg-parchment-dark">
        <BlueprintGrid opacity={0.05} />
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="mt-6 text-4xl sm:text-6xl leading-[1.1] font-display font-semibold text-ink">
              Onde o trabalho <br />
              <span className="text-wine italic font-normal">acontece.</span>
            </h2>
            <p className="mt-6 text-lg font-light text-ink/70">
              Cada módulo do Atlas é composto por páginas modulares e widgets configuráveis, adaptados cirurgicamente à sua operação.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageTypes.map((page) => {
              const Icon = page.icon;
              return (
                <div
                  key={page.name}
                  className="rounded-[12px] overflow-hidden border flex flex-col h-[300px] transition-all hover:-translate-y-1 hover:shadow-2xl bg-white group border-wine/[0.18]"
                >
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded border border-wine/25 text-wine bg-wine/[0.03]">
                          Vista // {page.name}
                        </span>
                        <Icon className="w-4 h-4 text-wine opacity-60" />
                      </div>
                      <h3 className="text-xl font-medium tracking-tight mb-2 font-display text-ink">
                        {page.name}
                      </h3>
                      <p className="text-xs font-light leading-relaxed text-ink/[0.65]">
                        {page.desc}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest pt-4 border-t border-wine/[0.08] text-wine flex items-center gap-1.5">
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

      {/* Customization & Governance */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t border-wine/[0.12] bg-parchment">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="mt-6 text-4xl sm:text-6xl leading-[1.1] font-display font-semibold text-ink">
              Feito para a sua empresa. <br />
              <span className="text-wine italic font-normal font-gothic">Sob medida para você.</span>
            </h2>
            <p className="mt-6 text-lg font-light text-ink/70">
              O Atlas resolve o problema de empresas com muitas tecnologias, combinando o isolamento rigoroso de dados com uma flexibilidade radical de personalização.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 sm:p-10 rounded-[12px] border flex flex-col justify-between bg-white shadow-sm border-wine/[0.18]">
              <div>
                <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-6 border-wine/25 bg-wine/[0.04]">
                  <Sliders className="w-5 h-5 text-wine" />
                </div>
                <h3 className="text-xl font-medium mb-3 font-display text-ink">
                  Identidade & Accent Color
                </h3>
                <p className="text-sm font-light leading-relaxed mb-6 text-ink/[0.65]">
                  Personalize o workspace com sua logomarca e escolha cores de destaque que alimentam dinamicamente toda a interface.
                </p>
              </div>
              <div className="pt-6 border-t border-wine/10 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#5C0000]" />
                <span className="w-3 h-3 rounded-full bg-blue-700" />
                <span className="w-3 h-3 rounded-full bg-amber-700" />
                <span className="w-3 h-3 rounded-full bg-emerald-700" />
                <span className="text-[10px] font-mono uppercase tracking-widest ml-auto text-wine">
                  Dinâmico
                </span>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-[12px] border flex flex-col justify-between bg-white shadow-sm border-wine/[0.18]">
              <div>
                <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-6 border-wine/25 bg-wine/[0.04]">
                  <Shield className="w-5 h-5 text-wine" />
                </div>
                <h3 className="text-xl font-medium mb-3 font-display text-ink">
                  Governança & RBAC
                </h3>
                <p className="text-sm font-light leading-relaxed mb-6 text-ink/[0.65]">
                  Controle cirúrgico de acessos por usuário, equipes ou páginas. Defina papéis com total segurança jurídica e técnica.
                </p>
              </div>
              <div className="pt-6 border-t border-wine/10 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink/45">
                  Multi-tenancy
                </span>
                <span className="text-xs font-medium text-wine">
                  Isolado & Seguro
                </span>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-[12px] border flex flex-col justify-between bg-white shadow-sm border-wine/[0.18]">
              <div>
                <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-6 border-wine/25 bg-wine/[0.04]">
                  <FolderTree className="w-5 h-5 text-wine" />
                </div>
                <h3 className="text-xl font-medium mb-3 font-display text-ink">
                  Módulos Ativáveis
                </h3>
                <p className="text-sm font-light leading-relaxed mb-6 text-ink/[0.65]">
                  Elimine ruídos visuais. Ative apenas os módulos de CRM, Financeiro, Wiki e Projetos essenciais para o seu negócio.
                </p>
              </div>
              <div className="pt-6 border-t border-wine/10 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink/45">
                  Sidebar Dinâmica
                </span>
                <span className="text-xs font-medium text-ink">
                  Configurável
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backbone / Architecture Steps */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t border-wine/[0.12] bg-parchment-alt">
        <BlueprintGrid opacity={0.03} />
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <h2 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight text-center mb-20 font-display text-ink">
            A espinha dorsal da operação.
          </h2>

          <div className="w-full flex flex-col items-center">
            {[
              "Empresa & Workspace",
              "Equipes & Departamentos",
              "Páginas, Databases & Blocos",
              "Projetos, Metas & Kanban",
              "Automações & Histórico (Activity)",
              "Operação Centralizada",
            ].map((step, i, arr) => {
              const isLast = i === arr.length - 1;
              return (
                <div key={step} className="flex flex-col items-center w-full max-w-lg">
                  <div className="w-full px-8 py-5 rounded-[10px] border flex items-center justify-center shadow-sm relative bg-white border-wine/20">
                    <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-center relative z-10 text-ink font-mono">
                      {step}
                    </span>
                  </div>
                  {!isLast && <div className="h-10 w-px my-2 bg-wine/25" />}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brazil / Currency Comparison */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 max-w-[1400px] mx-auto border-t border-wine/[0.12]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="p-8 sm:p-14 rounded-[12px] border shadow-xl bg-white relative overflow-hidden flex flex-col justify-between border-wine/20">
            <div>
              <h2 className="mt-6 text-3xl sm:text-4xl font-medium tracking-tight mb-6 font-display text-ink">
                Construído no Brasil.
                <br />
                <span className="text-wine italic font-normal">Para o Brasil.</span>
              </h2>
              <p className="text-base sm:text-lg font-light leading-relaxed mb-10 text-ink/70">
                Desenvolvido considerando idioma nativo, suporte humanizado de plantão, legislação fiscal brasileira e fuso horário alinhado. Sem barreiras de suporte estrangeiro.
              </p>
            </div>
            <div className="space-y-4">
              {["Português nativo e natural", "Suporte nacional prioritário", "Conformidade regulatória local", "Alinhamento total de fuso horário"].map((item) => (
                <div key={item} className="flex items-center gap-4 border-b border-wine/10 pb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-wine" />
                  <span className="text-sm font-light text-ink">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight font-display text-ink">
                Pagamento em Real.
                <br /> <span className="text-wine italic font-normal">Sem surpresas em dólar.</span>
              </h2>
            </div>

            <TiltCard>
              <div className="flex justify-between items-end border-b border-white/15 pb-6 mb-6">
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/70">SaaS Internacional</span>
                <div className="text-right">
                  <span className="block text-sm font-light mb-1.5 text-white/90">USD + IOF + Câmbio Flutuante</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-rose-300">Alto Risco Orçamentário</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-medium font-display text-white">
                  Atlas OS
                </span>
                <span className="font-mono text-xs uppercase tracking-widest font-medium px-4 py-2 rounded-full border border-white/30 bg-white/10 text-amber-300">
                  Preço Fixo em BRL
                </span>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t border-wine/[0.12] bg-wine">
        <div className="max-w-[1400px] mx-auto text-white">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono px-4 py-2 rounded-full border border-white/20 text-white/90 bg-white/10 inline-block mb-4">
              Desenvolvedores & APIs
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight font-display">
              Infraestrutura confiável e extensível para cada pilha tecnológica.
            </h2>
            <p className="mt-6 text-lg text-white/80 font-light">
              Adapte o Atlas às necessidades da sua empresa com opções de integração flexíveis, SDKs nativos e webhooks em tempo real.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="https://atlas.fifteenmiles.tech/docs"
                className="px-6 py-3 rounded-full text-xs font-mono uppercase tracking-widest text-white transition-all hover:opacity-95 bg-[#3D0000] border border-white/20"
              >
                Veja a documentação
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full text-xs font-mono uppercase tracking-widest text-white border border-white/20 transition-all hover:bg-white/10"
              >
                Veja o GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-14 border-t border-wine/[0.12] bg-parchment-alt">
        <BlueprintGrid opacity={0.03} />
        <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
          <h2 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight font-display text-ink">
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
            <div key={item.num} className="text-center relative p-10 sm:p-12 rounded-[12px] border shadow-sm bg-white border-wine/[0.18]">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase block mb-3 text-wine">
                Princípio {item.num}
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4 font-display text-ink">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg font-light max-w-xl mx-auto leading-relaxed text-ink/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-36 sm:py-48 px-6 sm:px-14 border-t border-wine/[0.12] relative overflow-hidden bg-gradient-to-b from-parchment to-parchment-dark">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight font-display text-ink">
              Dúvidas Frequentes
            </h2>
            <p className="mt-4 text-base font-light text-ink/70 max-w-lg mx-auto">
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
                    borderColor: isOpen ? "rgba(92,0,0,0.6)" : "rgba(92,0,0,0.18)",
                    boxShadow: isOpen ? "0 15px 30px -10px rgba(92,0,0,0.08)" : "0 2px 4px rgba(0,0,0,0.02)",
                  }}
                >
                  <button onClick={() => setOpenFaq(isOpen ? null : idx)} className="w-full p-7 text-left flex items-center justify-between gap-6 cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-semibold tracking-widest text-wine/60 group-hover:text-wine transition-colors">
                        0{idx + 1}
                      </span>
                      <span className="text-lg sm:text-xl font-medium transition-colors font-display text-ink">
                        {faq.q}
                      </span>
                    </div>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${isOpen ? "bg-wine text-white border-wine" : "bg-parchment text-wine border-wine/20"}`}>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: EASE }}>
                        <div className="px-7 pb-8 pt-2 text-sm sm:text-base font-regular leading-relaxed border-t border-wine/10 text-ink/80">{faq.a}</div>
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
      <section className="relative py-40 sm:py-52 px-6 sm:px-14 flex flex-col items-center justify-center text-center border-t border-wine/12 bg-parchment-alt">
        <BlueprintGrid opacity={0.04} />
        <div className="relative z-10 w-full max-w-4xl flex flex-col justify-center items-center">
          <Seal size={96} spin />
          <div className="mt-8" />

          <h2 className="mt-8 text-4xl sm:text-6xl lg:text-[4.5rem] leading-[1.05] font-display font-semibold text-ink">
            A infraestrutura digital <br />
            <span className="text-wine italic font-gothic font-normal">começa aqui.</span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed text-ink/70">
            Memória institucional intacta, execução fluida e inteligência centralizada. Assuma o controle absoluto da sua operação hoje.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <Button href="https://atlas.fifteenmiles.tech/register" variant="primary-dark" showArrow>Comece já</Button>
            <Button href="https://atlas.fifteenmiles.tech/register" variant="google">Registre-se com o Google</Button>
          </div>
        </div>
      </section>
    </div>
  );
}