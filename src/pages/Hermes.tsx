import { useEffect, useRef } from "react";
import "./style/Hermes.css";

const Hermes = () => {
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
    <div className="hermes-page">
      <section className="hero-section scroll-element">
        <div className="hero-meta mono">
          <span>COMMUNICATION UNIT // 003</span>
          <div className="status-badge">
            <div className="blue-dot pulse"></div>
            TRANSMITTING
          </div>
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title mono">HERMES</h1>
          <p className="hero-tagline">The Messenger.</p>
          
          <div className="hero-metrics mono">
            <div className="metric">
              <span className="label">Throughput</span>
              <span className="value blue-text">High Speed</span>
            </div>
            <div className="metric">
              <span className="label">Active Bridges</span>
              <span className="value">2,481</span>
            </div>
            <div className="metric">
              <span className="label">Uptime</span>
              <span className="value">99.9%</span>
            </div>
          </div>
        </div>


      </section>

      <section className="manifesto-section scroll-element">
        <h2 className="massive-text">
          Data doesn't move.<br/>
          <span className="dim-text">It flows.</span>
        </h2>
      </section>

      <section className="mockup">
        <div className="hero-network-mockup">
          <div className="mockup-header">
            <div className="mono">HERMES // NETWORK_ORCHESTRATOR</div>
            <div className="header-status mono">SYSCALL: OK</div>
          </div>
          <div className="mockup-body">
            <div className="network-grid">
              <div className="system-node legacy">
                <div className="node-tag mono">LEGACY ERP</div>
                <div className="data-pulse"></div>
              </div>
              <div className="network-line">
                <div className="data-packet"></div>
              </div>
              <div className="system-node core">
                <div className="node-tag mono">HERMES CORE</div>
                <div className="core-rings">
                  <span></span><span></span>
                </div>
              </div>
              <div className="network-line">
                <div className="data-packet reverse"></div>
              </div>
              <div className="system-node modern">
                <div className="node-tag mono">CLOUD API</div>
                <div className="data-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="feature-section scroll-element">
        <div className="feature-header">
          <h3 className="mono">Interoperability</h3>
          <p className="feature-title">Connect anything. Anywhere.</p>
        </div>
        <div className="interop-visual">
          <div className="interop-grid">
            <div className="interop-item">
              <div className="mono">Webhooks</div>
              <div className="interop-line"></div>
            </div>
            <div className="interop-item">
              <div className="mono">gRPC</div>
              <div className="interop-line"></div>
            </div>
            <div className="interop-item">
              <div className="mono">GraphQL</div>
              <div className="interop-line"></div>
            </div>
            <div className="interop-item">
              <div className="mono">REST</div>
              <div className="interop-line"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="interlude-section scroll-element">
        <h2 className="interlude-text mono">INSTANT DELIVERY.</h2>
      </section>

      <section className="bento-section scroll-element">
        <div className="bento-container">
          <div className="bento-card">
            <h4 className="mono">Protocol Translation</h4>
            <p>Bridge legacy systems with modern stacks instantly.</p>
          </div>
          <div className="bento-card large">
            <h4 className="mono">Edge Network</h4>
            <p>Low-latency data transmission at the enterprise perimeter.</p>
          </div>
          <div className="bento-card">
            <h4 className="mono">Event Streaming</h4>
            <p>Real-time synchronization for global operations.</p>
          </div>
          <div className="bento-card large">
            <h4 className="mono">Security</h4>
            <p>End-to-end encryption for every packet transmitted.</p>
          </div>
        </div>
      </section>

      <section className="pipeline-section scroll-element">
        <h3 className="section-title mono">The Transmission Pipeline</h3>
        <div className="transmission-flow">
          <div className="flow-step">
            <div className="step-label mono">Ingress</div>
            <div className="step-glow"></div>
          </div>
          <div className="flow-connector"></div>
          <div className="flow-step active">
            <div className="step-label mono">Transform</div>
            <div className="step-glow"></div>
          </div>
          <div className="flow-connector"></div>
          <div className="flow-step">
            <div className="step-label mono">Route</div>
            <div className="step-glow"></div>
          </div>
          <div className="flow-connector"></div>
          <div className="flow-step">
            <div className="step-label mono">Egress</div>
            <div className="step-glow"></div>
          </div>
        </div>
      </section>

      <section className="integrations-section scroll-element">
        <h3 className="section-title mono">Network Wall</h3>
        <div className="network-wall">
          <div className="wall-row">
            <span>HTTP/3</span><span>MQTT</span><span>AMQP</span><span>WebSockets</span><span>TCP</span><span>UDP</span>
          </div>
          <div className="wall-row reverse">
            <span>Kafka</span><span>RabbitMQ</span><span>NATS</span><span>Redis Pub/Sub</span><span>SQS</span><span>PubNub</span>
          </div>
        </div>
      </section>

      <section className="specs-section scroll-element">
        <div className="specs-header">
          <h3 className="mono">Specifications</h3>
          <p>Technical performance metrics.</p>
        </div>
        <div className="specs-grid">
          <div className="spec-item">
            <div className="spec-line"></div>
            <div className="spec-content">
              <h5 className="mono">Transmission Speed</h5>
              <p>Ultra-low latency delivery in &lt;10ms.</p>
            </div>
          </div>
          <div className="spec-item">
            <div className="spec-line"></div>
            <div className="spec-content">
              <h5 className="mono">Protocol Support</h5>
              <p>Native support for 50+ enterprise protocols.</p>
            </div>
          </div>
          <div className="spec-item">
            <div className="spec-line"></div>
            <div className="spec-content">
              <h5 className="mono">Reliability</h5>
              <p>Zero-packet-loss architecture with automatic retries.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section scroll-element">
        <div className="cta-container">
          <div className="cta-divider"></div>
          <h2 className="mono">Connect Your World.</h2>
          <button className="premium-button mono">Deploy Hermes</button>
        </div>
      </section>
    </div>
  );
};

export default Hermes;
