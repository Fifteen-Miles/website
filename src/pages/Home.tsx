import { useEffect, useRef, useState } from "react";
import ProductModal from "../components/ProductModal";
import type { ProductData } from "../components/ProductModal";
import "./style/Home.css";

const productsData: ProductData[] = [
  {
    id: "SYS. 001",
    name: "Athena",
    shortDesc: "IA empresarial.",
    overview: "Business intelligence powered by artificial intelligence and natural language.",
    properties: [
      { property: "Architecture", details: "Transformer-based custom LLM pipeline" },
      { property: "Integration", details: "REST APIs, GraphQL, and direct database connectors" },
      { property: "Security", details: "End-to-end encryption with local model fallback" },
      { property: "Latency", details: "Sub-100ms response time for standard queries" }
    ]
  },
  {
    id: "SYS. 002",
    name: "Hermes",
    shortDesc: "Integrações.",
    overview: "Build intelligent workflows connecting APIs, documents, systems and AI.",
    properties: [
      { property: "Protocol", details: "Event-driven asynchronous messaging" },
      { property: "Throughput", details: "Up to 50,000 transactions per second" },
      { property: "Reliability", details: "Automated retry queues and failover protocols" },
      { property: "Monitoring", details: "Real-time packet inspection and tracing" }
    ]
  },
  {
    id: "SYS. 003",
    name: "Hephaestus",
    shortDesc: "Automações.",
    overview: "Build intelligent workflows connecting APIs, documents, systems and AI.",
    properties: [
      { property: "Execution", details: "Sandboxed containerized task runners" },
      { property: "Trigger types", details: "Webhook, cron schedule, and event-based" },
      { property: "Error handling", details: "Automated rollback and human-in-the-loop escalation" },
      { property: "Audit trail", details: "Immutable logs for compliance and governance" }
    ]
  },
  {
    id: "SYS. 004",
    name: "Atlas",
    shortDesc: "Infraestrutura.",
    overview: "Infrastructure monitoring and operational visibility for critical environments.",
    properties: [
      { property: "Cloud Provider", details: "Multi-region AWS orchestration" },
      { property: "Scaling", details: "Automatic horizontal scaling based on load metrics" },
      { property: "Uptime SLA", details: "99.999% guaranteed availability" },
      { property: "Backup", details: "Continuous snapshot replication" }
    ]
  },
  {
    id: "SYS. 005",
    name: "Chronos",
    shortDesc: "Gestão.",
    overview: "Advanced management and time-saving engines for corporate efficiency.",
    properties: [
      { property: "Scheduling", details: "Algorithmic resource allocation" },
      { property: "Analytics", details: "Predictive workload forecasting" },
      { property: "Interface", details: "Minimalist high-density command dashboards" },
      { property: "Sync", details: "Cross-departmental calendar alignment" }
    ]
  },
  {
    id: "SYS. 006",
    name: "Argos",
    shortDesc: "Monitoramento.",
    overview: "Complete operational visibility through real-time telemetry and active anomaly detection.",
    properties: [
      { property: "Observability", details: "Metrics, logs, and distributed traces" },
      { property: "Alerting", details: "Custom webhook and high-priority triggers" },
      { property: "Retention", details: "90-day hot storage with cold tier archiving" },
      { property: "Dashboard", details: "Zero-latency vector rendering" }
    ]
  },
  {
    id: "SYS. 007",
    name: "Apollo",
    shortDesc: "Business Intelligence.",
    overview: "Transform unstructured organizational data into pristine strategic intelligence.",
    properties: [
      { property: "Data Sources", details: "SQL, NoSQL, data lakes, and flat files" },
      { property: "Processing", details: "In-memory columnar aggregation" },
      { property: "Export", details: "Automated executive report generation" },
      { property: "Security", details: "Role-based row-level access control" }
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
          Toda empresa possui um reino. Algumas ainda são governadas por
          planilhas. Nenhuma empresa evolui sem atravessar sua própria
          Renascença.
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
          <h2>Products</h2>
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
        <h2>Engineering Process</h2>

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