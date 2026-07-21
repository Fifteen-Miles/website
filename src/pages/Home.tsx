import { useEffect, useRef, useState } from "react";
import ProductModal from "../components/ProductModal";
import type { ProductData } from "../components/ProductModal";
import "./style/Home.css";

const productsData: ProductData[] = [
  {
    id: "SYS. 001",
    name: "Athena",
    tagline: "Enterprise Intelligence",
    shortDesc: "Converse com os dados da sua empresa.",
    overview: "Athena é uma plataforma de inteligência artificial desenvolvida para transformar informações empresariais em conhecimento acionável. Ela conecta documentos, bancos de dados, ERPs e CRMs para responder perguntas em linguagem natural e auxiliar decisões estratégicas.",
    mission: "Eliminar a distância entre dados e decisões.",
    version: "v1.0 — In Development",
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
    version: "v1.0 — Prototype",
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
    version: "Concept",
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
    version: "Concept",
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
    version: "Concept",
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

const Home = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".scroll-element");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const handleOpenModal = (product: ProductData) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <section className="home">
      </section>

      <section className="banner"></section>

      <section className="engineering-section scroll-element">
        <h2>Engineering Philosophy</h2>
        <p className="main-text">
          Toda empresa possui um <span className="OldLondon">reino</span>. Algumas ainda são governadas por <span className="OldLondon">Planilhas</span>
        </p>

        <div className="engineering">
          <div className="engineering-card">
            <span className="fig">FIG 01</span>

            <div className="wireframe">
              <div className="square big"></div>
              <div className="square medium"></div>
              <div className="square small"></div>
            </div>

            <h3>Arquitetura</h3>
            <p>
              Desenhamos a estrutura antes da primeira linha de código.
            </p>
          </div>

          <div className="engineering-card">
            <span className="fig">FIG 02</span>

            <div className="wireframe">
              <div className="circle"></div>
              <div className="line l1"></div>
              <div className="line l2"></div>
              <div className="line l3"></div>
            </div>

            <h3>Engenharia</h3>
            <p>
              Software projetado como grandes obras.
            </p>
          </div>

          <div className="engineering-card">
            <span className="fig">FIG 03</span>

            <div className="wireframe">
              <div className="grid-box"></div>
              <div className="grid-box second"></div>
              <div className="grid-box third"></div>
            </div>

            <h3>Evolução</h3>
            <p>
              O futuro começa quando o trabalho manual termina.
            </p>
          </div>
        </div>
      </section>

      <section className="products-section scroll-element">
        <div className="products-header">
          <h2>Produtos</h2>
          <p>
            Não vendemos software. Apresentamos um ecossistema. Ferramentas
            projetadas para eliminar o trabalho medieval.
          </p>
        </div>

        <div className="products-grid">
          {productsData.map((prod) => (
            <div 
              key={prod.id} 
              className="product-card" 
              onClick={() => handleOpenModal(prod)}
            >
              <span className="product-id">{prod.id}</span>
              <h3>{prod.name}</h3>
              <p>{prod.shortDesc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="process scroll-element">
        <h2>Processo de Engenharia</h2>

        <div className="process-grid">
          <div className="process-step">
            <span className="step-number">STEP 01</span>
            <h3>Observação</h3>
            <p>A tecnologia não substitui pessoas. Ela devolve tempo.</p>
          </div>

          <div className="process-step">
            <span className="step-number">STEP 02</span>
            <h3>Projeto</h3>
            <p>Plantas técnicas desenhadas para escalabilidade.</p>
          </div>

          <div className="process-step">
            <span className="step-number">STEP 03</span>
            <h3>Construção</h3>
            <p>Sistemas forjados com fundamentos rigorosos.</p>
          </div>

          <div className="process-step">
            <span className="step-number">STEP 04</span>
            <h3>Escala</h3>
            <p>Grandes empresas não operam no escuro.</p>
          </div>
        </div>
      </section>

      <section className="tech-section scroll-element">
        <div className="tech-grid">
          <div className="tech">React</div>
          <div className="tech">Next.js</div>
          <div className="tech">FastAPI</div>
          <div className="tech">Docker</div>
          <div className="tech">AWS</div>
          <div className="tech">Python</div>
          <div className="tech">PostgreSQL</div>
          <div className="tech">Redis</div>
          <div className="tech">TypeScript</div>
          <div className="tech">Cloud</div>
        </div>
      </section>

      <section className="projects scroll-element">
        <div className="project">
          <div className="project-image"></div>

          <div className="project-info">
            <span>PROJECT 001</span>
            <h2>Transformação Digital</h2>
            <p>
              Interfaces minimalistas que escondem motores complexos. A clareza
              visual como ferramenta central de decisão estratégica.
            </p>
          </div>
        </div>

        <div className="project">
          <div className="project-info">
            <span>PROJECT 002</span>
            <h2>Leitura Inteligente</h2>
            <p>
              OCR e extração de dados avançada. Transformando arquivos mortos e
              processos analógicos em inteligência ativa.
            </p>
          </div>

          <div className="project-image"></div>
        </div>
      </section>

      <section className="final scroll-element">
        <h2>Toda empresa merece deixar a Idade das Trevas para trás.</h2>
        <button className="primary-btn">Contato</button>
      </section>

      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </main>
  );
};

export default Home;