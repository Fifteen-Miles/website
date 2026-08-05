import { useEffect, useRef, useState } from "react";
import "./style/Process.css";
import Seo from "../components/Seo"

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
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({ children, className = "", tag = "div" }: { children: React.ReactNode; className?: string; tag?: React.ElementType }) {
  const { ref, visible } = useReveal<HTMLElement>();
  const Tag = tag;
  return (
    <Tag ref={ref} className={`fm-reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
}

const TECH_STACK = ["React", "Next.js", "FastAPI", "Docker", "AWS", "Python", "PostgreSQL", "Redis", "TypeScript", "Cloud"];


export default function Process() {
  return (
    <main className="fm-page fm-process-page-light">
      <Seo title="Processo — Fifteen Miles" description="Metodologia de engenharia: identificação, projeto, construção e observabilidade." path="/process" />
      <div className="fm-blueprint-grid" />
      
      <section className="fm-hero-light">
        <span className="fm-numeral-light OldLondon">XV</span>
        <span className="fm-hero-title-light">METODOLOGIA DA FORJA</span>
        <h1 className="fm-process-main-title OldLondon">O Processo de Engenharia</h1>
        <p className="fm-hero-phrase-light">
          Do rascunho arquitetônico à imutabilidade dos sistemas em escala global.
        </p>
      </section>

      <div className="fm-divider-light" aria-hidden="true">
        <span className="fm-divider-line-light" />
      </div>

      <section className="fm-process-steps-container">
        <Reveal className="fm-process-card-light">
          <span className="fm-step-number">STEP 01</span>
          <h2 className="OldLondon">Observação e Diagnóstico</h2>
          <p>Mapeamos cada engrenagem analógica e gargalo operacional. A tecnologia nunca deve ser imposta; ela deve responder cirurgicamente às dores do reino corporativo.</p>
        </Reveal>

        <Reveal className="fm-process-card-light">
          <span className="fm-step-number">STEP 02</span>
          <h2 className="OldLondon">Projeto e Planta Baixa</h2>
          <p>Desenhamos a arquitetura de microsserviços, fluxos de inteligência artificial e contratos de API antes da primeira linha de código ser escrita.</p>
        </Reveal>

        <Reveal className="fm-process-card-light">
          <span className="fm-step-number">STEP 03</span>
          <h2 className="OldLondon">Construção na Forja</h2>
          <p>Sistemas e automações são desenvolvidos com rigor estético e técnico, utilizando pilares imutáveis em React, FastAPI, Docker e bancos de dados resilientes.</p>
        </Reveal>

        <Reveal className="fm-process-card-light">
          <span className="fm-step-number">STEP 04</span>
          <h2 className="OldLondon">Escala e Observabilidade</h2>
          <p>Implantação em nuvem com monitoramento em tempo real (Telemetry & Mission Control), garantindo alta disponibilidade e evolução contínua.</p>
        </Reveal>
      </section>

      <section className="fm-section">
        <Reveal tag="h2" className="fm-title fm-title--old">Tecnologia</Reveal>
        <div className="fm-tech-grid">
          {TECH_STACK.map((tech, index) => (
            <Reveal key={tech} className="fm-tech-item">
               <span className="fm-tech-index OldLondon">{(index + 1).toString().padStart(2, '0')}</span>
               <span className="fm-tech-name">{tech}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="fm-final-light">
        <Reveal tag="h2" className="OldLondon">Pronto para iniciar a obra?</Reveal>
        <Reveal>
          <a href="/contact" className="fm-btn-light">Iniciar a Transformação</a>
        </Reveal>
      </section>
    </main>
  );
}