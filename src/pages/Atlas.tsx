import { useEffect, useRef } from "react";
import "./style/Atlas.css";

const Atlas = () => {
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
    <div className="atlas-page">
      <section className="hero-section scroll-element">
        <div className="hero-content">
          <h1 className="hero-title mono">ATLAS</h1>
          <p className="hero-tagline">Executive Intelligence.</p>
          <h2 className="hero-sub">Veja sua empresa como ela realmente funciona.</h2>
          <div className="hero-quote">
            <p>"Every number tells a story.</p>
            <p>Atlas tells the whole story."</p>
          </div>
        </div>
        
        <div className="hero-dashboard-preview">
          <div className="dashboard-header">
            <div className="kpi-item">
              <span className="label mono">Revenue</span>
              <span className="value">+18.4%</span>
            </div>
            <div className="kpi-item">
              <span className="label mono">Lucro</span>
              <span className="value">R$ 2.4M</span>
            </div>
            <div className="kpi-item">
              <span className="label mono">Eficiência</span>
              <span className="value">94%</span>
            </div>
          </div>
          <div className="dashboard-chart-area">
            <svg viewBox="0 0 1000 300" className="main-chart">
              <path 
                d="M0,250 Q100,220 200,230 T400,180 T600,150 T800,100 T1000,80" 
                fill="none" 
                stroke="#0A84FF" 
                strokeWidth="2"
              />
              <path 
                d="M0,250 Q100,220 200,230 T400,180 T600,150 T800,100 T1000,80 L1000,300 L0,300 Z" 
                fill="url(#chartGradient)"
              />
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#0A84FF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      <section className="statement-section scroll-element">
        <h2 className="massive-text">
          Stop reading dashboards.<br/>
          <span className="blue-text">Start understanding them.</span>
        </h2>
        <p className="statement-sub">
          Atlas encontra automaticamente padrões, anomalias e tendências.
        </p>
      </section>

      <section className="ia-insights-section scroll-element">
        <div className="insights-container">
          <div className="insights-visual">
            <div className="mini-chart">
              <div className="bar" style={{ height: '40%' }}></div>
              <div className="bar" style={{ height: '60%' }}></div>
              <div className="bar highlight" style={{ height: '90%' }}></div>
              <div className="bar" style={{ height: '50%' }}></div>
            </div>
          </div>
          <div className="insights-content">
            <div className="insight-card">
              <span className="label mono">Detected</span>
              <h4 className="insight-title">Revenue anomaly</h4>
              <div className="insight-meta">
                <span>South Region</span>
                <span className="blue-text">+42%</span>
              </div>
              <div className="insight-reason">
                <span className="label mono">Reason</span>
                <p>Campaign Alpha performed 3.8x above expectation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section scroll-element">
        <div className="timeline-container">
          <div className="timeline-labels mono">
            <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
          </div>
          <div className="timeline-line">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot active"></div>
            <div className="dot"></div>
          </div>
          <div className="timeline-details">
            <div className="detail-item">
              <span className="label mono">Revenue</span>
              <span className="val">$4.2M</span>
            </div>
            <div className="detail-item">
              <span className="label mono">Margin</span>
              <span className="val">32%</span>
            </div>
            <div className="detail-item">
              <span className="label mono">Growth</span>
              <span className="val">+12%</span>
            </div>
            <div className="detail-item">
              <span className="label mono">Forecast</span>
              <span className="val blue-text">$4.8M</span>
            </div>
          </div>
        </div>
      </section>

      <section className="drill-down-section scroll-element">
        <h3 className="section-title mono">Drill Down</h3>
        <div className="drill-tree">
          <div className="tree-level">Company</div>
          <div className="tree-arrow">↓</div>
          <div className="tree-level">Sales</div>
          <div className="tree-arrow">↓</div>
          <div className="tree-level active">North Region</div>
          <div className="tree-arrow">↓</div>
          <div className="tree-level">Store 18</div>
          <div className="tree-arrow">↓</div>
          <div className="tree-level">Product X</div>
        </div>
      </section>

      <section className="comparison-section scroll-element">
        <div className="comparison-container">
          <div className="comp-item">
            <span className="label mono">Current Year</span>
            <div className="comp-bar-container">
              <div className="comp-bar blue" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="comp-value">+18%</div>
          <div className="comp-item">
            <span className="label mono">Previous Year</span>
            <div className="comp-bar-container">
              <div className="comp-bar" style={{ width: '70%' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="forecast-section scroll-element">
        <h3 className="section-title mono">Forecast Engine</h3>
        <div className="forecast-chart-container">
          <svg viewBox="0 0 1000 200" className="forecast-chart">
            <path d="M0,150 L200,130 L400,140 L600,110" fill="none" stroke="#111" strokeWidth="2" />
            <path d="M600,110 L800,80 L1000,60" fill="none" stroke="#0A84FF" strokeWidth="2" strokeDasharray="8,8" />
            <circle cx="600" cy="110" r="4" fill="#0A84FF" />
            <text x="580" y="140" className="mono small">Today</text>
          </svg>
        </div>
      </section>

      <section className="alerts-section scroll-element">
        <div className="alerts-grid">
          <div className="alert-card">
            <h4 className="mono">High Inventory</h4>
            <div className="alert-stat">
              <span className="label mono">Prediction</span>
              <span className="val">89%</span>
            </div>
            <div className="alert-arrow">↓</div>
            <p className="alert-msg">Potential overstock in 14 days.</p>
          </div>
          <div className="alert-card">
            <h4 className="mono">Revenue Drop</h4>
            <div className="alert-stat">
              <span className="label mono">Prediction</span>
              <span className="val">73%</span>
            </div>
            <div className="alert-arrow">↓</div>
            <p className="alert-msg">Possible churn detected.</p>
          </div>
        </div>
      </section>

      <section className="bento-section scroll-element">
        <div className="bento-grid">
          <div className="bento-item">
            <h4 className="mono">Executive Reports</h4>
            <p>One-click board reports.</p>
          </div>
          <div className="bento-item">
            <h4 className="mono">Natural Language Filters</h4>
            <p>Ask instead of clicking.</p>
          </div>
          <div className="bento-item">
            <h4 className="mono">Forecast Engine</h4>
            <p>Predict revenue and costs.</p>
          </div>
          <div className="bento-item">
            <h4 className="mono">Company Health</h4>
            <p>A single score for your business.</p>
          </div>
        </div>
      </section>

      <section className="cta-section scroll-element">
        <div className="cta-content">
          <h2 className="hero-title mono">ATLAS</h2>
          <div className="cta-text">
            <p>See everything.</p>
            <p>Understand everything.</p>
          </div>
          <button className="launch-button mono">Launch Atlas</button>
        </div>
      </section>
    </div>
  );
};

export default Atlas;
