import React, { useEffect, useRef, useState, type JSX } from "react";
import "./style/StartJourney.css";
import { Link } from "react-router-dom";
import ProductModal from "../components/ProductModal";
import type { ProductData } from "../components/ProductModal";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({ children, className = "", tag = "div" }: { children: React.ReactNode; className?: string; tag?: keyof JSX.IntrinsicElements }) {
  const { ref, visible } = useReveal<HTMLElement>();
  const Tag = tag as React.ElementType;
  return (
    <Tag ref={ref} className={`tj-reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
}

const PILLARS = [
  { n: "01", t: "Visão", d: "Veja o que os outros não conseguem." },
  { n: "02", t: "Ofício", d: "Construa com precisão." },
  { n: "03", t: "Legado", d: "Deixe algo atemporal." },
];

const TIMELINE = [
  { y: "1077", t: "O Início" },
  { y: "2026", t: "O Primeiro Sistema" },
  { y: "Futuro", t: "O Império" },
];

const productsData: ProductData[] = [
  {
    id: "SYS. 001",
    name: "Athena",
    tagline: "Enterprise Intelligence",
    shortDesc: "Converse com os dados da sua empresa.",
    overview: "Athena é uma plataforma de inteligência artificial desenvolvida para transformar informações empresariais em conhecimento acionável. Ela conecta documentos, bancos de dados, ERPs e CRMs para responder perguntas em linguagem natural e auxiliar decisões estratégicas.",
    mission: "Eliminar a distância entre dados e decisões.",
    version: "v1.0 — Em Desenvolvimento",
    icon: "athena",
    capabilities: [
      "Chat com documentos",
      "Consultas SQL em linguagem natural",
      "Análise de indicadores",
      "Geração automática de relatórios",
      "Assistente para tomada de decisão",
      "Resumos inteligentes",
      "Busca semântica",
      "Predições com IA"
    ],
    integrations: [
      "SAP",
      "TOTVS",
      "Microsoft SQL Server",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Excel",
      "Power BI"
    ],
    useCases: [
      "Análise financeira",
      "Controle operacional",
      "Indicadores de produção",
      "Relatórios executivos"
    ],
    properties: [
      { property: "AI Engine", details: "Large Language Models with Retrieval-Augmented Generation (RAG)" },
      { property: "Architecture", details: "Microservices with FastAPI and Redis" },
      { property: "Context Window", details: "Up to 2M tokens" },
      { property: "Latency", details: "<150 ms average response" },
      { property: "Deployment", details: "Cloud or On-Premise" }
    ]
  },
  {
    id: "SYS. 002",
    name: "Hermes",
    tagline: "Universal Integration Layer",
    shortDesc: "Conectando tudo, sem fricção.",
    overview: "Hermes integra sistemas, aplicações e dispositivos em uma única plataforma de comunicação, permitindo fluxos de dados confiáveis entre diferentes tecnologias.",
    mission: "Eliminar silos de informação.",
    version: "v1.0 — Protótipo",
    icon: "hermes",
    capabilities: [
      "REST APIs",
      "GraphQL",
      "MQTT",
      "WebSockets",
      "Webhook Engine",
      "Event Streaming",
      "Queue Processing",
      "IoT Integration"
    ],
    integrations: [
      "SAP",
      "Salesforce",
      "Slack",
      "WhatsApp",
      "Azure",
      "AWS",
      "Google Workspace"
    ],
    useCases: [
      "Integração ERP",
      "Integração CRM",
      "Sincronização entre sistemas",
      "Integração IoT"
    ],
    properties: [
      { property: "Architecture", details: "Event-Driven Microservices" },
      { property: "Throughput", details: "50,000+ events/sec" },
      { property: "Protocol Support", details: "REST, GraphQL, MQTT, AMQP" },
      { property: "Availability", details: "99.999%" },
      { property: "Monitoring", details: "Real-time distributed tracing" }
    ]
  },
  {
    id: "SYS. 003",
    name: "Hephaestus",
    tagline: "Automation Engine",
    shortDesc: "Automações inteligentes para qualquer processo.",
    overview: "Hephaestus permite construir fluxos de automação visualmente, conectando IA, documentos, APIs e sistemas corporativos sem necessidade de reescrever processos.",
    mission: "Eliminar tarefas repetitivas.",
    version: "Conceito",
    icon: "hephaestus",
    capabilities: [
      "Visual Workflow Builder",
      "OCR",
      "PDF Processing",
      "Email Automation",
      "Document Approval",
      "AI Agents",
      "Background Jobs",
      "Data Validation"
    ],
    integrations: [
      "Microsoft 365",
      "Google Workspace",
      "OpenAI",
      "Anthropic",
      "AWS S3",
      "Dropbox"
    ],
    useCases: [
      "Processamento de documentos",
      "Automação financeira",
      "RH",
      "Compras"
    ],
    properties: [
      { property: "Workflow Engine", details: "Visual Low-Code Builder" },
      { property: "Execution", details: "Containerized Runtime" },
      { property: "Triggers", details: "Webhook, Schedule, Database, API" },
      { property: "Rollback", details: "Automatic" },
      { property: "Audit", details: "Immutable execution logs" }
    ]
  },
  {
    id: "SYS. 004",
    name: "Atlas",
    tagline: "Cloud Infrastructure",
    shortDesc: "Infraestrutura pronta para crescer.",
    overview: "Atlas centraliza servidores, aplicações, containers e ambientes cloud em uma única plataforma operacional.",
    mission: "Garantir estabilidade e escalabilidade.",
    version: "Conceito",
    icon: "atlas",
    capabilities: [
      "Container Management",
      "Cloud Monitoring",
      "CI/CD",
      "Infrastructure as Code",
      "Server Provisioning",
      "Backup",
      "Disaster Recovery"
    ],
    integrations: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes"
    ],
    useCases: [
      "Gestão Multi-Cloud",
      "Deployments Automatizados",
      "Recuperação de Desastres",
      "Monitoramento de Clusters"
    ],
    properties: [
      { property: "Infrastructure", details: "Kubernetes Cluster" },
      { property: "Scaling", details: "Horizontal Auto Scaling" },
      { property: "Availability", details: "99.999%" },
      { property: "Backup", details: "Continuous replication" },
      { property: "Observability", details: "Prometheus + Grafana" }
    ]
  },
  {
    id: "SYS. 005",
    name: "Orion",
    tagline: "Enterprise Mission Control",
    shortDesc: "Visualize e controle toda sua empresa em tempo real.",
    overview: "Orion é o centro de comando da plataforma Fifteen Miles. Ele monitora sistemas, integrações, infraestrutura, aplicações, automações e inteligência artificial em uma única interface operacional, oferecendo uma visão completa do estado da organização.",
    mission: "Transformar milhares de eventos distribuídos em uma única visão estratégica.",
    version: "Conceito",
    icon: "orion",
    capabilities: [
      "Enterprise Monitoring",
      "Mission Control Dashboard",
      "Real-Time Telemetry",
      "System Health Monitoring",
      "Enterprise Topology",
      "Live Event Timeline",
      "AI Operational Insights",
      "Global Infrastructure View",
      "Cross-System Correlation",
      "Executive Command Center"
    ],
    integrations: [
      "Athena",
      "Hermes",
      "Hephaestus",
      "Atlas",
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "PostgreSQL",
      "Redis"
    ],
    useCases: [
      "Monitoramento Corporativo",
      "Observabilidade em Tempo Real",
      "Centro de Operações Empresarial",
      "Gestão de Eventos",
      "Análise de Incidentes",
      "Visão Global da Empresa",
      "Monitoramento Multi-Cloud",
      "Acompanhamento Executivo"
    ],
    properties: [
      { property: "Monitoring", details: "Real-Time Enterprise Telemetry" },
      { property: "Infrastructure", details: "Unified Mission Control" },
      { property: "Latency", details: "< 50ms Event Processing" },
      { property: "Availability", details: "99.999% Operational" },
      { property: "Intelligence", details: "AI Event Correlation" },
      { property: "Topology", details: "Dynamic Enterprise Mapping" },
      { property: "Observability", details: "Infrastructure + Business + AI" }
    ]
  }
];

const COORDS = ["XIV", "XV", "XVI", "XVII"];

export default function StartJourney() {
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (product: ProductData) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="tj-page">
      <div className="tj-grain" />
      <div className="tj-vignette" />

      <div className="tj-bg-circles" aria-hidden="true">
        <span className="tj-circle tj-circle-a" />
        <span className="tj-circle tj-circle-b" />
        <span className="tj-circle tj-circle-c" />
      </div>
      <div className="tj-coords" aria-hidden="true">
        {COORDS.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>

      <section className="tj-hero">
        <img src="/homesymbol.png" alt="Home" className="logohome" />
        <Link to="/contact" className="btn-premium tj-btn">Começar</Link>
      </section>

      <div className="tj-divider" aria-hidden="true">
        <span className="tj-divider-line" />
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="tj-divider-tick" style={{ top: `${(i + 1) * 14}%` }} />
        ))}
      </div>

      <section className="tj-section">
        <Reveal tag="h2" className="tj-title">Toda jornada começa com um propósito.</Reveal>
        <Reveal className="tj-subtitle">
          Não construímos software.
          <br />
          Construímos instrumentos.
        </Reveal>

        <div className="tj-pillars">
          {PILLARS.map((p) => (
            <Reveal key={p.n} className="tj-pillar">
              <span className="tj-pillar-num">{p.n}</span>
              <span className="tj-pillar-rule" />
              <span className="tj-pillar-title">{p.t}</span>
              <p className="tj-pillar-desc">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="tj-manifesto">
        <Reveal tag="p" className="tj-manifesto-line">Recusamos o comum.</Reveal>
        <Reveal tag="p" className="tj-manifesto-line tj-manifesto-line--muted">O mundo já tem software suficiente.</Reveal>
        <Reveal tag="p" className="tj-manifesto-line">Construímos sistemas.</Reveal>
        <Reveal tag="p" className="tj-manifesto-line tj-manifesto-line--muted">O resto é consequência.</Reveal>
      </section>

      <section className="tj-section">
        <Reveal tag="h2" className="tj-title tj-title--old"><span className="OldLondon2">A</span> Ordem</Reveal>
        <div className="tj-timeline">
          {TIMELINE.map((t) => (
            <Reveal key={t.y} className="tj-timeline-item">
              <span className="tj-timeline-year">{t.y}</span>
              <span className="tj-timeline-rule" />
              <span className="tj-timeline-title">{t.t}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="tj-infinity">
        <Reveal tag="h2" className="tj-title-infinity">Projetado para durar décadas.</Reveal>
        <Reveal tag="span" className="tj-infinity-symbol"><img src="/∞.png" alt="" /></Reveal>
        <Reveal tag="p" className="tj-infinity-caption">Não perseguimos tendências.</Reveal>
      </section>

      <section className="fm-product-showcase">
        <Reveal className="fm-product-banner">
          <div className="fm-banner-content">
            <span className="fm-banner-tag">SYS. 001 // Enterprise Intelligence</span>
            <h2 className="fm-banner-title OldLondon"><span className="OldLondon2">A</span>thena</h2>
            <p className="fm-banner-desc">Athena é uma plataforma de inteligência artificial desenvolvida para transformar informações empresariais em conhecimento acionável. Ela conecta documentos, bancos de dados, ERPs e CRMs para responder perguntas em linguagem natural e auxiliar decisões estratégicas.</p>
            <div className="fm-banner-actions">
              <button className="fm-btn-primary" onClick={() => handleOpenModal(productsData[0])}>Saiba mais</button>
              <Link to="/athena" className="fm-btn-secondary">Inspecionar</Link>
            </div>
          </div>
          <div className="fm-banner-mockup" id="mockup-banner-athena" onClick={() => handleOpenModal(productsData[0])}>
            <img src="/mockup-placeholder.png" alt="Athena Mockup" id="img-athena" className="fm-mockup-img" />
          </div>
        </Reveal>

        <Reveal className="fm-product-banner reverse">
          <div className="fm-banner-content">
            <span className="fm-banner-tag">SYS. 002 // Universal Integration Layer</span>
            <h2 className="fm-banner-title OldLondon">Hermes</h2>
            <p className="fm-banner-desc">Hermes integra sistemas, aplicações e dispositivos em uma única plataforma de comunicação, permitindo fluxos de dados confiáveis entre diferentes tecnologias.</p>
            <div className="fm-banner-actions">
              <button className="fm-btn-primary" onClick={() => handleOpenModal(productsData[1])}>Saiba mais</button>
              <Link to="/hermes" className="fm-btn-secondary">Inspecionar</Link>
            </div>
          </div>
          <div className="fm-banner-mockup" id="mockup-banner-hermes" onClick={() => handleOpenModal(productsData[1])}>
            <img src="/mockup-placeholder.png" alt="Hermes Mockup" id="img-hermes" className="fm-mockup-img" />
          </div>
        </Reveal>

        <Reveal className="fm-product-banner">
          <div className="fm-banner-content">
            <span className="fm-banner-tag">SYS. 003 // Automation Engine</span>
            <h2 className="fm-banner-title OldLondon">Hephaestus</h2>
            <p className="fm-banner-desc">Hephaestus permite construir fluxos de automação visualmente, conectando IA, documentos, APIs e sistemas corporativos sem necessidade de reescrever processos.</p>
            <div className="fm-banner-actions">
              <button className="fm-btn-primary" onClick={() => handleOpenModal(productsData[2])}>Saiba mais</button>
              <Link to="/hephaestus" className="fm-btn-secondary">Inspecionar</Link>
            </div>
          </div>
          <div className="fm-banner-mockup" id="mockup-banner-hephaestus" onClick={() => handleOpenModal(productsData[2])}>
            <img src="/mockup-placeholder.png" alt="Hephaestus Mockup" id="img-hephaestus" className="fm-mockup-img" />
          </div>
        </Reveal>

        <Reveal className="fm-product-banner reverse">
          <div className="fm-banner-content">
            <span className="fm-banner-tag">SYS. 004 // Cloud Infrastructure</span>
            <h2 className="fm-banner-title OldLondon"><span className="OldLondon2">A</span>tlas</h2>
            <p className="fm-banner-desc">Atlas centraliza servidores, aplicações, containers e ambientes cloud em uma única plataforma operacional.</p>
            <div className="fm-banner-actions">
              <button className="fm-btn-primary" onClick={() => handleOpenModal(productsData[3])}>Saiba mais</button>
              <Link to="/atlas" className="fm-btn-secondary">Inspecionar</Link>
            </div>
          </div>
          <div className="fm-banner-mockup" id="mockup-banner-atlas" onClick={() => handleOpenModal(productsData[3])}>
            <img src="/mockup-placeholder.png" alt="Atlas Mockup" id="img-atlas" className="fm-mockup-img" />
          </div>
        </Reveal>

        <Reveal className="fm-product-banner">
          <div className="fm-banner-content">
            <span className="fm-banner-tag">SYS. 005 // Enterprise Mission Control</span>
            <h2 className="fm-banner-title OldLondon">Orion</h2>
            <p className="fm-banner-desc">Orion é o centro de comando da plataforma. Ele monitora sistemas, integrações, infraestrutura, aplicações, automações e IA em uma única interface operacional.</p>
            <div className="fm-banner-actions">
              <button className="fm-btn-primary" onClick={() => handleOpenModal(productsData[4])}>Saiba mais</button>
              <Link to="/orion" className="fm-btn-secondary">Inspecionar</Link>
            </div>
          </div>
          <div className="fm-banner-mockup" id="mockup-banner-orion" onClick={() => handleOpenModal(productsData[4])}>
            <img src="/mockup-placeholder.png" alt="Orion Mockup" id="img-orion" className="fm-mockup-img" />
          </div>
        </Reveal>
      </section>

      <section className="tj-final">
        <Reveal tag="h2" className="tj-title">O primeiro passo muda tudo.</Reveal>
        <Reveal tag="p" className="tj-final-caption">
          A jornada começa com uma única decisão.
        </Reveal>
        <Reveal>
          <Link to="/pricing" className="tj-btn btn-premium">Iniciar a Jornada</Link>
        </Reveal>
      </section>

      <footer className="tj-footer">
        <span className="tj-footer-signature">XV</span>
      </footer>

      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}