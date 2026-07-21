import { useEffect, useRef } from "react";
import "./style/Athena.css";

const Athena = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-element");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="athena-page">
      <section className="athena-hero scroll-element">
        <div className="hero-meta mono">
          <span>SYS. 001</span>
        </div>
        <h1 className="athena-title">ATHENA</h1>
      </section>

      <section className="hero-tagline-section scroll-element">
        <p className="athena-tagline">Enterprise Intelligence.</p>
      </section>

      <section className="athena-manifesto-section scroll-element">
        <h2 className="athena-manifesto">
          The end of searching.<br/>
          <span className="italic-accent red-text">The beginning of knowing.</span>
        </h2>
        <p className="athena-subtitle">
          Uma inteligência corporativa capaz de compreender documentos, bancos de dados, processos e pessoas em uma única conversa.
        </p>
      </section>

      <section className="product-interface-section scroll-element">
        <div className="hero-terminal-mockup">
          <div className="term-header">
            <div className="term-btns">
              <span className="term-btn"></span>
              <span className="term-btn"></span>
              <span className="term-btn"></span>
            </div>
            <span className="term-title mono">ATHENA // QUERY_ENGINE</span>
          </div>
          <div className="term-body">
            <div className="term-prompt">
              <span className="red-text">&gt;</span> Qual cliente gerou maior margem em junho?<span className="cursor"></span>
            </div>
            
            <div className="term-logs mono">
              <div className="log-line animate-log-1">[+] Consultando ERP (SAP)... <span className="log-success">23ms</span></div>
              <div className="log-line animate-log-2">[+] Consultando CRM (Salesforce)... <span className="log-success">41ms</span></div>
              <div className="log-line animate-log-3">[+] Consultando Financeiro... <span className="log-success">12ms</span></div>
              <div className="log-line animate-log-4">[+] Processando vetores de documentos... <span className="log-success">89ms</span></div>
            </div>

            <div className="term-result animate-result">
              <div className="result-header">
                <span>RESULTADO</span>
                <span className="mono">CONFIDENCE: 99.8%</span>
              </div>
              <div className="result-content">
                O cliente <strong>Nexus Corp</strong> gerou a maior margem líquida (34.2%) em junho, impulsionado pelo contrato de licenciamento Q3 e redução de custos logísticos identificada na NF-8821.
              </div>
              <div className="result-visual">
                <div className="bar" style={{ height: '40%' }}></div>
                <div className="bar" style={{ height: '60%' }}></div>
                <div className="bar red" style={{ height: '100%' }}></div>
                <div className="bar" style={{ height: '20%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="statement-section scroll-element">
        <h2 className="massive-statement">
          Sua empresa já sabe a resposta.
          <span className="statement-sub">A Athena apenas faz a pergunta certa.</span>
        </h2>
      </section>

      <section className="how-it-thinks-section scroll-element">
        <h3 className="section-title mono">How Athena Thinks</h3>
        <div className="thinking-pipeline">
          {[
            "Question", "Router", "Context", "Retrieval", "Reasoning", "Verification", "Answer"
          ].map((step, i, arr) => (
            <div key={step} className="thinking-step-container">
              <div className="thinking-step mono">{step}</div>
              {i < arr.length - 1 && <div className="thinking-arrow">↓</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="architecture-section scroll-element">
        <h3 className="section-title mono">Enterprise Architecture</h3>
        <div className="blueprint-svg-container">
          <svg viewBox="0 0 800 600" className="blueprint-svg">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <text x="400" y="50" textAnchor="middle" className="svg-text mono user-node">USER</text>
            <line x1="400" y1="70" x2="400" y2="120" className="svg-line" />
            
            <rect x="300" y="120" width="200" height="50" className="svg-box athena-node" />
            <text x="400" y="150" textAnchor="middle" className="svg-text mono">ATHENA CORE</text>
            
            <line x1="400" y1="170" x2="400" y2="220" className="svg-line" />
            <line x1="150" y1="220" x2="650" y2="220" className="svg-line" />
            
            {[
              { name: "LLM", x: 150 },
              { name: "RAG", x: 275 },
              { name: "CACHE", x: 400 },
              { name: "TOOLS", x: 525 },
              { name: "EMBEDDINGS", x: 650 }
            ].map((node) => (
              <g key={node.name}>
                <line x1={node.x} y1="220" x2={node.x} y2="270" className="svg-line" />
                <rect x={node.x - 50} y="270" width="100" height="40" className="svg-box" />
                <text x={node.x} y="295" textAnchor="middle" className="svg-text mono small">{node.name}</text>
                <line x1={node.x} y1="310" x2={node.x} y2="360" className="svg-line" />
              </g>
            ))}

            <line x1="150" y1="360" x2="650" y2="360" className="svg-line" />
            
            {[
              { name: "SAP", x: 150 },
              { name: "CRM", x: 233 },
              { name: "ERP", x: 316 },
              { name: "SQL", x: 400 },
              { name: "EMAIL", x: 483 },
              { name: "FILES", x: 566 },
              { name: "POWER BI", x: 650 }
            ].map((node) => (
              <g key={node.name}>
                <line x1={node.x} y1="360" x2={node.x} y2="410" className="svg-line" />
                <rect x={node.x - 35} y="410" width="70" height="30" className="svg-box system-node" />
                <text x={node.x} y="430" textAnchor="middle" className="svg-text mono tiny">{node.name}</text>
              </g>
            ))}
          </svg>
        </div>
      </section>

      <section className="integrations-section scroll-element">
        <h3 className="section-title mono">Integrations</h3>
        <div className="integrations-wall">
          {[
            "Oracle", "Postgres", "Firebase", "AWS", "Azure", "Office", "Slack", 
            "Discord", "Teams", "Power BI", "MongoDB", "Redis", "Stripe", "Notion", "Jira"
          ].map(item => (
            <div key={item} className="integration-item mono">{item}</div>
          ))}
        </div>
      </section>

      <section className="capabilities-section scroll-element">
        <div className="bento-container">
          <div className="bento-card">
            <div className="bento-icon mono">01</div>
            <h4 className="mono">Chat with Documents</h4>
            <p>Interaja diretamente com milhares de páginas simultaneamente sem perder o contexto corporativo.</p>
          </div>
          <div className="bento-card">
            <div className="bento-icon mono">02</div>
            <h4 className="mono">Automated Reports</h4>
            <p>Geração de dashboards e resumos executivos baseados em anomalias e indicadores de produção.</p>
          </div>
          <div className="bento-card wide">
            <div className="bento-icon mono red-text">03</div>
            <h4 className="mono">Decision Intelligence</h4>
            <p>Cruzamento de dados operacionais e financeiros em tempo real para embasar decisões executivas de alta complexidade.</p>
          </div>
        </div>
      </section>

      <section className="tech-specs-section scroll-element">
        <h3 className="section-title mono">Technical Specifications</h3>
        <div className="specs-grid-v2">
          <div className="spec-row">
            <span className="spec-label mono">Latency</span>
            <span className="spec-value">127ms</span>
          </div>
          <div className="spec-row">
            <span className="spec-label mono">Embedding Size</span>
            <span className="spec-value">3072</span>
          </div>
          <div className="spec-row">
            <span className="spec-label mono">Index</span>
            <span className="spec-value">43M vectors</span>
          </div>
          <div className="spec-row">
            <span className="spec-label mono">Documents</span>
            <span className="spec-value">18,432</span>
          </div>
          <div className="spec-row">
            <span className="spec-label mono">Active Models</span>
            <span className="spec-value">GPT-4.5, Claude, Gemini, Llama</span>
          </div>
          <div className="spec-row">
            <span className="spec-label mono">Deployment</span>
            <span className="spec-value">Hybrid (Cloud + On-Premise)</span>
          </div>
        </div>
      </section>

      <section className="security-section scroll-element">
        <div className="doc-specs-section">
          <div className="doc-col">
            <div className="doc-title mono">Security</div>
            <div className="doc-divider"></div>
            <ul className="doc-list">
              <li>AES-256 Encryption</li>
              <li>SOC2 Type II Compliant</li>
              <li>Air-gapped Support</li>
              <li>Private VPC Deployment</li>
              <li>Role-based Access Control</li>
            </ul>
          </div>
          <div className="doc-col">
            <div className="doc-title mono">Compliance</div>
            <div className="doc-divider"></div>
            <ul className="doc-list">
              <li>GDPR & LGPD</li>
              <li>HIPAA Ready</li>
              <li>ISO 27001</li>
              <li>Data Sovereignty</li>
              <li>Audit Logging</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="athena-cta scroll-element">
        <div className="cta-manifesto">
          <p>Every company has answers.</p>
          <p>Most companies can't reach them.</p>
        </div>
        <div className="cta-divider"></div>
        <h2 className="mono">Deploy Athena.</h2>
        <button className="premium-cta mono">Request Early Access</button>
      </section>
    </div>
  );
};

export default Athena;
