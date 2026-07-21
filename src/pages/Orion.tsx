import React, { useEffect, useMemo, useRef, useState } from "react";
import "./style/Orion.css";

/* ---------------------------------------------------------
   Helpers
--------------------------------------------------------- */

function seeded(i: number, salt = 1) {
  const x = Math.sin(i * 999.7 * salt) * 43758.5453;
  return x - Math.floor(x);
}

const SYSTEMS = [
  "SAP", "Oracle", "Power BI", "SQL", "Azure", "AWS",
  "SharePoint", "Firebase", "ERP", "CRM", "Email", "IoT",
];

const CITIES = [
  { name: "São Paulo", x: 30, y: 62 },
  { name: "Recife", x: 34, y: 55 },
  { name: "Lisboa", x: 46, y: 32 },
  { name: "Toronto", x: 24, y: 28 },
  { name: "Tokyo", x: 84, y: 34 },
  { name: "Frankfurt", x: 50, y: 24 },
];

const TIMELINE = [
  { t: "08:41", e: "ERP Updated" },
  { t: "08:44", e: "Finance Indexed" },
  { t: "08:51", e: "New Knowledge Embedded" },
  { t: "09:02", e: "Athena Synced" },
  { t: "09:08", e: "Hermes Pipeline Executed" },
  { t: "09:11", e: "Hephaestus Finished" },
  { t: "09:17", e: "Atlas Refreshed" },
];

const COMPONENTS = [
  { n: "Telemetry", d: "Monitor every signal." },
  { n: "Navigation", d: "Map every connection." },
  { n: "Synchronization", d: "Observe every integration." },
  { n: "Decision Engine", d: "Transform signals into action." },
  { n: "Enterprise Map", d: "Visualize your organization." },
  { n: "Mission Replay", d: "Travel through every event." },
];

/* ---------------------------------------------------------
   Starfield (procedural, cheap, no images)
--------------------------------------------------------- */

function Starfield() {
  const stars = useMemo(
    () =>
      Array.from({ length: 220 }, (_, i) => ({
        x: seeded(i, 1.3) * 100,
        y: seeded(i, 2.7) * 100,
        r: 0.4 + seeded(i, 4.1) * 1.1,
        d: 6 + seeded(i, 5.9) * 14,
        delay: seeded(i, 7.3) * 10,
      })),
    []
  );
  const dust = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        x: seeded(i, 11) * 100,
        y: seeded(i, 17) * 100,
        dur: 40 + seeded(i, 23) * 60,
        delay: seeded(i, 29) * 30,
      })),
    []
  );

  return (
    <div className="orion-starfield" aria-hidden="true">
      <svg width="100%" height="100%" preserveAspectRatio="none">
        {stars.map((s, i) => (
          <circle
            key={i}
            cx={`${s.x}%`}
            cy={`${s.y}%`}
            r={s.r}
            className="orion-star"
            style={{
              animationDuration: `${s.d}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
        {dust.map((p, i) => (
          <circle
            key={`d${i}`}
            cx={`${p.x}%`}
            cy={`${p.y}%`}
            r={0.9}
            className="orion-dust"
            style={{
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </svg>
      <div className="orion-nebula orion-nebula-a" />
      <div className="orion-nebula orion-nebula-b" />
    </div>
  );
}

/* ---------------------------------------------------------
   Core Sphere — the Orion intelligence
--------------------------------------------------------- */

function CoreSphere({ compact = false }: { compact?: boolean }) {
  const rings = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => ({
        r: 118 + i * 46,
        dur: 40 + i * 22,
        rev: i % 2 === 0,
        dash: `${2 + i}, ${10 + i * 3}`,
      })),
    []
  );

  const orbitSystems = useMemo(
    () =>
      SYSTEMS.map((s, i) => {
        const angle = (i / SYSTEMS.length) * Math.PI * 2;
        const radius = 200;
        return { s, angle, radius };
      }),
    []
  );

  const particles = useMemo(
    () =>
      Array.from({ length: 90 }, (_, i) => {
        const angle = seeded(i, 3.1) * Math.PI * 2;
        const radius = 40 + seeded(i, 6.2) * 70;
        return {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          r: 0.6 + seeded(i, 9.3) * 1.2,
          dur: 5 + seeded(i, 12.4) * 8,
        };
      }),
    []
  );

  return (
    <div className={`orion-sphere-wrap ${compact ? "is-compact" : ""}`}>
      <svg viewBox="-260 -260 520 520" className="orion-sphere-svg">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#00AEEF" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#00AEEF" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="0" cy="0" r="150" fill="url(#coreGlow)" className="orion-core-pulse" />

        {rings.map((r, i) => (
          <circle
            key={i}
            cx="0"
            cy="0"
            r={r.r}
            className="orion-ring"
            strokeDasharray={r.dash}
            style={{
              animationDuration: `${r.dur}s`,
              animationDirection: r.rev ? "reverse" : "normal",
            }}
          />
        ))}

        <circle cx="0" cy="0" r="60" className="orion-core-body" />
        <circle cx="0" cy="0" r="60" className="orion-core-body-outline" />

        {particles.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={p.r}
            className="orion-particle"
            style={{ animationDuration: `${p.dur}s` }}
          />
        ))}

        <g className="orion-orbit-labels">
          {orbitSystems.map((o, i) => {
            const x = Math.cos(o.angle) * o.radius;
            const y = Math.sin(o.angle) * o.radius;
            return (
              <g
                key={o.s}
                className="orion-orbit-node"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <circle cx={x} cy={y} r={2.4} className="orion-node-dot" />
                {!compact && (
                  <text x={x} y={y - 10} textAnchor="middle" className="orion-node-label">
                    {o.s}
                  </text>
                )}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

/* ---------------------------------------------------------
   Radar
--------------------------------------------------------- */

function MissionRadar() {
  const [active, setActive] = useState<string[]>([]);
  const items = [
    "ERP Detected", "CRM Connected", "SQL Synced",
    "Power BI Active", "SAP Available", "Azure Online", "AWS Healthy",
  ];

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setActive((prev) => {
        const next = [...prev, items[i % items.length]].slice(-4);
        return next;
      });
      i++;
    }, 2600);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rings = [1, 2, 3, 4];

  return (
    <div className="orion-radar-wrap">
      <svg viewBox="-200 -200 400 400" className="orion-radar-svg">
        {rings.map((r) => (
          <circle key={r} cx="0" cy="0" r={r * 44} className="orion-radar-ring" />
        ))}
        {Array.from({ length: 24 }, (_, i) => {
          const a = (i / 24) * Math.PI * 2;
          const inner = 176;
          const outer = 186;
          return (
            <line
              key={i}
              x1={Math.cos(a) * inner}
              y1={Math.sin(a) * inner}
              x2={Math.cos(a) * outer}
              y2={Math.sin(a) * outer}
              className="orion-radar-tick"
            />
          );
        })}
        <line x1="-176" y1="0" x2="176" y2="0" className="orion-radar-axis" />
        <line x1="0" y1="-176" x2="0" y2="176" className="orion-radar-axis" />
        <g className="orion-radar-sweep">
          <path d="M0 0 L0 -176 A176 176 0 0 1 40 -172 Z" className="orion-radar-sweep-fill" />
        </g>
      </svg>
      <div className="orion-radar-feed">
        {active.map((a, i) => (
          <div key={i} className="orion-radar-feed-item">
            <span className="orion-dot" /> {a}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Star Map
--------------------------------------------------------- */

function StarMap() {
  const [hover, setHover] = useState<number | null>(null);
  const nodes = useMemo(
    () =>
      SYSTEMS.concat(["MongoDB", "Redis"]).map((s, i) => ({
        s,
        x: 8 + seeded(i, 2.2) * 84,
        y: 10 + seeded(i, 5.5) * 80,
      })),
    []
  );

  return (
    <div className="orion-starmap">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="orion-starmap-svg">
        {nodes.map((a, i) =>
          nodes.slice(i + 1).map((b, j) => (
            <line
              key={`${i}-${j}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              className={`orion-starmap-line ${hover === i || hover === i + j + 1 ? "is-active" : ""}`}
            />
          ))
        )}
        {nodes.map((n, i) => (
          <g
            key={n.s}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className="orion-starmap-node"
          >
            <circle cx={n.x} cy={n.y} r={hover === i ? 1.6 : 1} className="orion-starmap-dot" />
            <text x={n.x} y={n.y - 2} className="orion-starmap-label">
              {n.s}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ---------------------------------------------------------
   Telemetry
--------------------------------------------------------- */

function Telemetry() {
  const metrics = [
    { l: "CPU", v: "34%" },
    { l: "Storage", v: "61%" },
    { l: "Latency", v: "29ms" },
    { l: "Memory", v: "48%" },
    { l: "Bandwidth", v: "812 Mb/s" },
    { l: "Tokens", v: "1.2M/h" },
    { l: "AI Usage", v: "Active" },
    { l: "Vector DB", v: "Synced" },
    { l: "RAG Status", v: "Ready" },
  ];

  const wavePath = useMemo(() => {
    const pts = Array.from({ length: 60 }, (_, i) => {
      const x = (i / 59) * 600;
      const y = 60 + Math.sin(i * 0.5) * 18 + Math.sin(i * 0.13) * 10;
      return `${x},${y}`;
    });
    return `M${pts.join(" L")}`;
  }, []);

  return (
    <div className="orion-telemetry">
      <div className="orion-telemetry-list">
        {metrics.map((m) => (
          <div key={m.l} className="orion-telemetry-row">
            <span className="orion-telemetry-label">{m.l}</span>
            <span className="orion-telemetry-bar">
              <span className="orion-telemetry-bar-fill" />
            </span>
            <span className="orion-telemetry-value">{m.v}</span>
          </div>
        ))}
      </div>
      <div className="orion-wave-wrap">
        <div className="orion-eyebrow">Network Traffic</div>
        <svg viewBox="0 0 600 120" className="orion-wave-svg" preserveAspectRatio="none">
          <path d={wavePath} className="orion-wave-path" />
        </svg>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Global Enterprise
--------------------------------------------------------- */

function GlobalEnterprise() {
  return (
    <div className="orion-globe-wrap">
      <svg viewBox="0 0 100 100" className="orion-globe-svg">
        <circle cx="50" cy="50" r="42" className="orion-globe-outline" />
        {[16, 26, 34].map((r, i) => (
          <ellipse key={i} cx="50" cy="50" rx={r} ry="42" className="orion-globe-meridian" />
        ))}
        <ellipse cx="50" cy="50" rx="42" ry="12" className="orion-globe-meridian" />
        <ellipse cx="50" cy="50" rx="42" ry="24" className="orion-globe-meridian" />
        {CITIES.map((a, i) =>
          CITIES.slice(i + 1).map((b, j) => (
            <line
              key={`${i}-${j}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              className="orion-globe-line"
            />
          ))
        )}
        {CITIES.map((c) => (
          <g key={c.name}>
            <circle cx={c.x} cy={c.y} r="1.2" className="orion-globe-dot" />
            <text x={c.x} y={c.y - 3} className="orion-globe-label">
              {c.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ---------------------------------------------------------
   System Health
--------------------------------------------------------- */

function SystemHealth() {
  const items = [
    "Authentication", "Database", "Queue", "Workers",
    "Embeddings", "AI Models", "Storage",
  ];
  return (
    <div className="orion-health">
      <div className="orion-health-core">
        <svg viewBox="0 0 200 200" className="orion-health-ring">
          <circle cx="100" cy="100" r="88" className="orion-health-ring-bg" />
          <circle cx="100" cy="100" r="88" className="orion-health-ring-fg" />
        </svg>
        <div className="orion-health-center">
          <span className="orion-health-pct">98%</span>
          <span className="orion-health-caption">Operational</span>
        </div>
      </div>
      <div className="orion-health-grid">
        {items.map((it) => (
          <div key={it} className="orion-health-item">
            <span className="orion-dot" />
            <span>{it}</span>
            <span className="orion-health-status">Healthy</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Command Console
--------------------------------------------------------- */

function CommandConsole() {
  const lines = [
    "> show network health",
    "",
    "Connected Systems     127",
    "Latency               29ms",
    "Warnings              0",
    "Critical Events       0",
    "Knowledge Sources     2,481",
    "Embeddings            15.2M",
    "AI Models             6 Active",
  ];
  const [visible, setVisible] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const id = setInterval(() => {
            i++;
            setVisible(i);
            if (i >= lines.length) clearInterval(id);
          }, 220);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="orion-console" ref={ref}>
      {lines.slice(0, visible).map((l, i) => (
        <div key={i} className={`orion-console-line ${l.startsWith(">") ? "is-command" : ""}`}>
          {l}
        </div>
      ))}
      <span className="orion-console-cursor" />
    </div>
  );
}

/* ---------------------------------------------------------
   Main Page
--------------------------------------------------------- */

export default function OrionPage() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="orion-page">
      <Starfield />

      <header className="orion-header">
        <div className="orion-header-left">
          <span className="orion-brand-sub">FIFTEEN MILES</span>
          <span className="orion-brand-main">ORION</span>
        </div>
        <div className="orion-header-right">
          <span className="orion-status">
            <span className="orion-dot is-live" /> ONLINE
          </span>
          <span className="orion-metric">Connected Systems <b>127</b></span>
          <span className="orion-metric">Latency <b>34ms</b></span>
          <span className="orion-metric">AI <b>ACTIVE</b></span>
        </div>
      </header>

      {/* HERO */}
      <section className="orion-hero">
        <div
          className="orion-hero-sphere"
          style={{
            transform: `translate(-50%, -50%) rotate(${mouse.x * 1.5}deg)`,
          }}
        >
          <CoreSphere />
        </div>
        <div className="orion-hero-copy">
          <h1 className="orion-h1">ORION</h1>
          <p className="orion-hero-sub">Enterprise Mission Control</p>
          <p className="orion-hero-line">Observe. Understand. Command.</p>
          <p className="orion-hero-line orion-hero-line--muted">
            Every system. Every connection. One mission control.
          </p>
          <button className="orion-btn">Launch Orion</button>
        </div>
        <div className="orion-scroll-hint">SCROLL</div>
      </section>

      {/* INTRO */}
      <section className="orion-section orion-intro">
        <div className="orion-hud-sphere">
          <CoreSphere compact />
        </div>
        <h2 className="orion-h2">
          Your company is a living system.
          <br />
          <span className="orion-h2-muted">Not a collection of software.</span>
        </h2>
        <p className="orion-p">
          Orion continuously monitors every service, process, integration and event
          across your enterprise.
        </p>
      </section>

      {/* RADAR */}
      <section className="orion-section orion-section--wide">
        <div className="orion-eyebrow">MISSION RADAR</div>
        <MissionRadar />
      </section>

      {/* STAR MAP */}
      <section className="orion-section orion-section--wide">
        <div className="orion-eyebrow">STAR MAP</div>
        <StarMap />
      </section>

      {/* TELEMETRY */}
      <section className="orion-section orion-section--wide">
        <div className="orion-eyebrow">LIVE TELEMETRY</div>
        <Telemetry />
      </section>

      {/* GLOBAL ENTERPRISE */}
      <section className="orion-section orion-section--wide">
        <div className="orion-eyebrow">GLOBAL ENTERPRISE</div>
        <GlobalEnterprise />
      </section>

      {/* SYSTEM HEALTH */}
      <section className="orion-section">
        <div className="orion-eyebrow">SYSTEM HEALTH</div>
        <SystemHealth />
      </section>

      {/* TIMELINE */}
      <section className="orion-section">
        <div className="orion-eyebrow">MISSION TIMELINE</div>
        <div className="orion-timeline">
          <div className="orion-timeline-line" />
          {TIMELINE.map((t) => (
            <div key={t.t} className="orion-timeline-item">
              <span className="orion-timeline-dot" />
              <span className="orion-timeline-time">{t.t}</span>
              <span className="orion-timeline-event">{t.e}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DECISION ENGINE */}
      <section className="orion-section orion-decision">
        <div className="orion-eyebrow">DECISION ENGINE</div>
        <div className="orion-decision-sphere">
          <div className="orion-decision-core" />
          <div className="orion-decision-ring" />
        </div>
        <div className="orion-decision-flow">
          <span>Raw Data</span>
          <span className="orion-arrow">↓</span>
          <span>Correlation</span>
          <span className="orion-arrow">↓</span>
          <span>Knowledge</span>
          <span className="orion-arrow">↓</span>
          <span>Decision</span>
        </div>
      </section>

      {/* COMPONENTS GRID */}
      <section className="orion-section">
        <div className="orion-eyebrow">MISSION COMPONENTS</div>
        <div className="orion-grid">
          {COMPONENTS.map((c) => (
            <div key={c.n} className="orion-card">
              <h3>{c.n}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMAND CONSOLE */}
      <section className="orion-section">
        <div className="orion-eyebrow">COMMAND CONSOLE</div>
        <CommandConsole />
      </section>

      {/* FOOTER */}
      <footer className="orion-footer">
        <div className="orion-footer-sphere">
          <CoreSphere compact />
        </div>
        <p className="orion-footer-text">
          Everything is connected.
          <br />
          Orion lets you see it.
        </p>
        <button className="orion-btn orion-btn--light">Launch Orion</button>
      </footer>
    </div>
  );
}