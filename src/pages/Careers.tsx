import { useEffect, useRef, useState } from "react";
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

export default function Careers() {
  return (
    <main className="fm-page fm-careers-page">
      <Seo title="Carreiras — Fifteen Miles" description="Vagas e oportunidades na Fifteen Miles. Junte-se à nossa ordem de engenheiros." path="/careers" />
      <div className="fm-grain" />
      <div className="fm-grid-bg" />

      <section className="fm-hero">
        <span className="fm-numeral OldLondon">XV</span>
        <span className="fm-hero-title">RECRUTAMENTO DA ORDEM</span>
        <h1 className="fm-careers-main-title OldLondon">Carreiras</h1>
        <p className="fm-hero-phrase">
          "A expansão do reino exige mentes extraordinárias, mas cada ciclo possui seu tempo exato."
        </p>
      </section>

      <div className="fm-divider" aria-hidden="true">
        <span className="fm-divider-line" />
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="fm-divider-tick" style={{ top: `${(i + 1) * 14}%` }} />
        ))}
      </div>

      <section className="fm-careers-content-section">
        <Reveal className="fm-careers-card">
          <span className="fm-careers-tag">STATUS: FECHADO</span>
          <h2 className="OldLondon">Nenhuma vaga aberta no momento</h2>
          <p>
            As portas da forja estão temporariamente fechadas para novos recrutas. No entanto, a Ordem está sempre atenta a mentes brilhantes que desejam reescrever o futuro da engenharia de software.
          </p>
          <p className="fm-careers-subtext">
            Retorne em breve para novos chamados ou acompanhe nossos canais oficiais.
          </p>
        </Reveal>
      </section>

      <section className="fm-final">
        <Reveal tag="h2" className="fm-title fm-title--old">Mantenha-se Conectado</Reveal>
        <Reveal tag="p" className="fm-final-caption">
          O futuro pertence àqueles que se antecipam.
        </Reveal>
        <Reveal>
          <a href="/contact" className="fm-btn">Entrar em Contato</a>
        </Reveal>
      </section>
    </main>
  );
}