import { useEffect, useRef } from "react";
import "./style/Hephaestus.css";

const Hephaestus = () => {
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
    <div className="hephaestus-page">
      {/* HERO ================================================= */}
      <section className="hero-section scroll-element">
        <div className="hero-meta mono">
          <span>SYSTEM UNIT // 002</span>
          <div className="status-badge">
            <div className="orange-dot pulse"></div>
            OPERATIONAL
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title mono">HEPHAESTUS</h1>
          <p className="hero-tagline">Forge Intelligent Workflows.</p>

          <div className="hero-stats-row mono">
            <div className="stat-item">
              <span className="value orange-text">Live</span>
              <span className="label">System Status</span>
            </div>
            <div className="stat-item">
              <span className="value">142</span>
              <span className="label">Active Workflows</span>
            </div>
            <div className="stat-item">
              <span className="value">28ms</span>
              <span className="label">P50 Latency</span>
            </div>
          </div>
        </div>

        <div className="hero-software-mockup">
          <div className="eng-detail eng-detail--tr">
            <span>BUILD</span>
            <span className="value">02.14.7</span>
          </div>

          <div className="mockup-sidebar">
            <div className="sidebar-group-label mono">Connections</div>
            <div className="connection-item online">
              <span>SAP</span>
              <div className="conn-dot"></div>
            </div>
            <div className="connection-item online">
              <span>Redis</span>
              <div className="conn-dot"></div>
            </div>
            <div className="connection-item">
              <span>Oracle</span>
              <div className="conn-dot"></div>
            </div>
            <div className="connection-item online">
              <span>Kafka</span>
              <div className="conn-dot"></div>
            </div>

            <div className="sidebar-group-label mono">Runtime</div>
            <div className="connection-item online">
              <span>Workers: 12</span>
              <div className="conn-dot"></div>
            </div>
            <div className="connection-item online">
              <span>Queue: idle</span>
              <div className="conn-dot"></div>
            </div>
          </div>

          <div className="mockup-main">
            <div className="mockup-topbar">
              <div className="breadcrumb mono">HEPHAESTUS / PRODUCTION / FORGE_ENGINE</div>
              <div className="topbar-actions">
                <div className="action-btn"></div>
                <div className="action-btn orange-bg"></div>
              </div>
            </div>
            <div className="mockup-content">
              <div className="editor-grid">
                <div className="canvas-area">
                  <div className="node-grid">
                    <div className="node-item">
                      <div className="node-header mono">
                        <span>Trigger</span>
                        <span className="node-status">Idle</span>
                      </div>
                      <div className="node-body">Customer Order</div>
                      <div className="node-footer mono">
                        <span>Shopify</span>
                        <span>3.2k/day</span>
                      </div>
                    </div>
                    <div className="node-line"></div>
                    <div className="node-item active">
                      <div className="node-header mono">
                        <span>Validation</span>
                        <span className="node-status">Running</span>
                      </div>
                      <div className="node-body">Validate Payment</div>
                      <div className="node-footer mono">
                        <span>Stripe</span>
                        <span>18ms avg</span>
                      </div>
                    </div>
                    <div className="node-line"></div>
                    <div className="node-item">
                      <div className="node-header mono">
                        <span>Action</span>
                        <span className="node-status">Queued</span>
                      </div>
                      <div className="node-body">Generate Invoice</div>
                      <div className="node-footer mono">
                        <span>SAP</span>
                        <span>142 today</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="terminal-area mono">
                  <div className="term-line">[10:21:04] Webhook received from Shopify</div>
                  <div className="term-line orange-text">[10:21:05] Validation sequence initiated</div>
                  <div className="term-line">[10:21:05] Payment verified via Stripe</div>
                  <div className="term-line">[10:21:06] ERP system updated (SAP)</div>
                  <div className="term-line" style={{ margin: "0.9rem 0" }}>
                    <div className="metric-bar">
                      <span>Latency</span>
                      <div className="track">
                        <div className="fill" style={{ width: "22%" }}></div>
                      </div>
                      <span>28ms</span>
                    </div>
                  </div>
                  <div className="term-line">[10:21:07] Workflow completed successfully</div>
                  <div className="term-cursor"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT ================================================= */}
      <section className="statement-section scroll-element">
        <h2 className="massive-text">
          Operations aren't built.<br />
          <span className="dim-text">They're engineered.</span>
        </h2>
      </section>

      {/* FEATURE SHOWCASE / PIPELINE ================================================= */}
      <section className="feature-showcase scroll-element" style={{ position: "relative" }}>
        <div className="eng-detail eng-detail--tl">
          <span>PIPELINE</span>
          <span className="value">SYS.003</span>
        </div>

        <div className="showcase-header">
          <h3 className="mono">Workflow Builder</h3>
          <p className="showcase-title">Design automations. Not workflows.</p>
        </div>

        <div className="showcase-visual">
          <div className="pipeline-industrial">
            <div className="pipe-block">
              <div className="pipe-glow"></div>
              <span className="pipe-label mono">Input</span>
              <span className="pipe-status mono">Connected</span>
              <span className="pipe-meta">4.1k events / day</span>
            </div>
            <div className="pipe-connector"></div>
            <div className="pipe-block active">
              <div className="pipe-glow"></div>
              <span className="pipe-label mono">Validation</span>
              <span className="pipe-status mono">Running</span>
              <span className="pipe-meta">32ms avg</span>
            </div>
            <div className="pipe-connector"></div>
            <div className="pipe-block">
              <div className="pipe-glow"></div>
              <span className="pipe-label mono">Queue</span>
              <span className="pipe-status mono">Idle</span>
              <span className="pipe-meta">0 pending</span>
            </div>
            <div className="pipe-connector"></div>
            <div className="pipe-block">
              <div className="pipe-glow"></div>
              <span className="pipe-label mono">Execution</span>
              <span className="pipe-status mono">Standby</span>
              <span className="pipe-meta">12 workers</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTERLUDE ================================================= */}
      <section className="interlude-section scroll-element">
        <h2 className="interlude-text mono">ENGINEERED FOR SCALE.</h2>
      </section>

      {/* BENTO ================================================= */}
      <section className="bento-grid-section scroll-element">
        <div className="bento-container">
          <div className="bento-card-text">
            <h4 className="mono">Rollback Engine</h4>
            <p>Every execution. Fully recoverable.</p>
          </div>
          <div className="bento-card-large">
            <h4 className="mono">Observability</h4>
            <p>Real-time traces. Absolute visibility.</p>
          </div>
          <div className="bento-card-text">
            <h4 className="mono">Redis Streams</h4>
            <p>High-throughput event processing.</p>
          </div>
          <div className="bento-card-tall">
            <h4 className="mono">Task Runners</h4>
            <p>Isolated job execution across every worker.</p>
          </div>
          <div className="bento-card-wide">
            <h4 className="mono">Infrastructure</h4>
            <p>Enterprise-grade reliability at any scale.</p>
          </div>
          <div className="bento-card-text">
            <h4 className="mono">Encryption</h4>
            <p>End-to-end, at rest and in transit.</p>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE ================================================= */}
      <section className="architecture-section scroll-element" style={{ position: "relative" }}>
        <div className="eng-detail eng-detail--tr">
          <span>NODE</span>
          <span className="value">ACTIVE</span>
        </div>

        <div className="arch-header">
          <h3 className="mono">Architecture</h3>
          <p>The foundation of enterprise automation.</p>
        </div>
        <div className="arch-content">
          <div className="arch-item">
            <span className="mono" style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>01</span>
            <div className="arch-text">
              <h5 className="mono">Trigger Layer</h5>
              <p>Webhooks, polling, and event-driven triggers.</p>
            </div>
          </div>
          <div className="arch-item">
            <span className="mono" style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>02</span>
            <div className="arch-text">
              <h5 className="mono">Execution Engine</h5>
              <p>Distributed workers running in isolated containers.</p>
            </div>
          </div>
          <div className="arch-item">
            <span className="mono" style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>03</span>
            <div className="arch-text">
              <h5 className="mono">State Management</h5>
              <p>Persistence and recovery via high-performance clusters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS ================================================= */}
      <section className="integrations-section scroll-element">
        <h3 className="section-title mono">Integrations</h3>
        <div className="integrations-wall">
          <div className="wall-row">
            <span>SAP</span><span>Oracle</span><span>Redis</span><span>Docker</span><span>Kafka</span><span>Azure</span><span>Slack</span>
          </div>
          <div className="wall-row">
            <span>Stripe</span><span>AWS</span><span>Postgres</span><span>MongoDB</span><span>Kubernetes</span><span>Jira</span><span>Notion</span>
          </div>
          <div className="wall-row">
            <span>Salesforce</span><span>HubSpot</span><span>Power BI</span><span>Google</span><span>Microsoft</span><span>Shopify</span><span>Teams</span>
          </div>
        </div>
      </section>

      {/* CTA ================================================= */}
      <section className="cta-section scroll-element">
        <div className="cta-container">
          <div className="cta-line"></div>
          <p className="cta-eyebrow mono">One platform. Every system.</p>
          <h2 className="mono">Build your integration layer.</h2>
          <button className="premium-button mono">Request Private Access</button>
        </div>
      </section>
    </div>
  );
};

export default Hephaestus;