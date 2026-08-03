import { useEffect, useRef, useState } from "react";

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

export default function Philosophy() {
  return (
    <main className="fm-page fm-philosophy-page">
      <div className="fm-grain" />
      <div className="fm-grid-bg" />

      <section className="fm-hero">
        <span className="fm-numeral OldLondon">XV</span>
        <span className="fm-hero-title">CODEX PHILOSOPHIAE</span>
        <p className="fm-hero-phrase">
          "O código é a lei, a arquitetura é o templo, e a clareza é a luz que dissipa as trevas."
        </p>
      </section>

      <div className="fm-divider" aria-hidden="true">
        <span className="fm-divider-line" />
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="fm-divider-tick" style={{ top: `${(i + 1) * 14}%` }} />
        ))}
      </div>

      <section className="fm-scroll-container">
        <div className="fm-scroll-header">
          <span className="fm-scroll-tag">MANUSCRIPTUM I</span>
          <h2 className="OldLondon fm-scroll-title">A Fundação do Reino</h2>
        </div>
        <div className="fm-scroll-body">
          <Reveal className="fm-scroll-paragraph">
            <p>
              Toda empresa possui um reino. No entanto, enquanto impérios avançam para as estrelas, muitos reinos corporativos ainda permanecem atolados nas sombras de processos analógicos, governados por planilhas frágeis e rotinas medievais.
            </p>
          </Reveal>
          <Reveal className="fm-scroll-paragraph">
            <p>
              A Fifteen Miles não surge apenas para escrever software. Surgimos como uma ordem de engenharia dedicada a forjar a infraestrutura definitiva para a era moderna. Acreditamos que o trabalho manual repetitivo é um desperdício do potencial humano.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="fm-section">
        <Reveal tag="h2" className="fm-title fm-title--old">Os Pilares da Ordem</Reveal>
        <div className="fm-pillars-grid">
          <Reveal className="fm-pillar-card">
            <span className="fm-pillar-num">01</span>
            <h3 className="OldLondon">Arquitetura</h3>
            <p>Desenhamos a estrutura antes da primeira linha de código. Nenhum edifício resiste ao tempo sem fundações inabaláveis.</p>
          </Reveal>
          <Reveal className="fm-pillar-card">
            <span className="fm-pillar-num">02</span>
            <h3 className="OldLondon">Engenharia</h3>
            <p>Software projetado como grandes obras. Cada sistema é forjado com rigor técnico, precisão matemática e estética impecável.</p>
          </Reveal>
          <Reveal className="fm-pillar-card">
            <span className="fm-pillar-num">03</span>
            <h3 className="OldLondon">Evolução</h3>
            <p>O futuro começa quando o trabalho manual termina. Automatizamos o caos para devolver o tempo e a soberania estratégica aos criadores.</p>
          </Reveal>
        </div>
      </section>

      <section className="fm-quote-section">
        <Reveal className="fm-quote-box">
          <span className="OldLondon fm-quote-mark">“</span>
          <p className="fm-quote-text">
            A simplicidade é o grau supremo da sofisticação tecnológica. Quando removemos o supérfluo, revelamos a verdadeira potência de uma operação.
          </p>
          <span className="fm-quote-author">— Manifesto Fifteen Miles</span>
        </Reveal>
      </section>

      <section className="fm-section">
        <Reveal tag="h2" className="fm-title fm-title--old">Axiomas da Renascença</Reveal>
        <div className="fm-axioms-list">
          <Reveal className="fm-axiom-item">
            <span className="fm-axiom-code">AXIOM.01</span>
            <div>
              <h4>Clareza sobre Complexidade</h4>
              <p>Interfaces minimalistas escondem motores complexos. A clareza visual é a ferramenta central de decisão.</p>
            </div>
          </Reveal>
          <Reveal className="fm-axiom-item">
            <span className="fm-axiom-code">AXIOM.02</span>
            <div>
              <h4>Sistemas Imutáveis</h4>
              <p>Construímos ecossistemas resilientes que resistem ao teste do tempo e à expansão exponencial de dados.</p>
            </div>
          </Reveal>
          <Reveal className="fm-axiom-item">
            <span className="fm-axiom-code">AXIOM.03</span>
            <div>
              <h4>O Fim do Caos</h4>
              <p>Silos de informação são relíquias de uma era ultrapassada. Unificamos dados em uma única visão estratégica.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="fm-final">
        <Reveal tag="h2" className="fm-title fm-title--old">Atravessando a Fronteira</Reveal>
        <Reveal tag="p" className="fm-final-caption">
          O ritual de transformação da sua empresa começa aqui.
        </Reveal>
        <Reveal>
          <a href="/contact" className="fm-btn">Iniciar a Renascença</a>
        </Reveal>
      </section>
    </main>
  );
}