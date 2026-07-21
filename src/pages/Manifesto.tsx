import { useEffect, useRef, useState } from "react";
import "./style/Manifesto.css";

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

export default function Manifesto() {
  return (
    <main className="fm-page fm-manifesto-page">
      <div className="fm-grain" />
      <div className="fm-grid-bg" />

      <section className="fm-hero">
        <span className="fm-numeral OldLondon">XV</span>
        <span className="fm-hero-title">MANIFESTUM TENEBRIS</span>
        <h1 className="fm-manifesto-main-title OldLondon">O Fim da Idade das Trevas</h1>
        <p className="fm-hero-phrase">
          "As corporações perecem não por falta de ambição, mas pelo peso do trabalho analógico."
        </p>
      </section>

      <div className="fm-divider" aria-hidden="true">
        <span className="fm-divider-line" />
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="fm-divider-tick" style={{ top: `${(i + 1) * 14}%` }} />
        ))}
      </div>

      <section className="fm-manifesto-chapter">
        <Reveal className="fm-chapter-content">
          <span className="fm-chapter-num">CAPÍTULO I</span>
          <h2 className="OldLondon">As Sombras do Passado</h2>
          <p>
            Por séculos, o progresso operacional das empresas foi acorrentado a planilhas caóticas, processos manuais redundantes e silos de informação intransponíveis. O tempo dos executivos e mentes criativas foi consumido por tarefas repetitivas — um verdadeiro feudo digital onde a inteligência humana servia de engrenagem para sistemas arcaicos.
          </p>
          <p>
            Isso não é gestão. É sobrevivência no escuro.
          </p>
        </Reveal>
      </section>

      <section className="fm-manifesto-chapter">
        <Reveal className="fm-chapter-content">
          <span className="fm-chapter-num">CAPÍTULO II</span>
          <h2 className="OldLondon">A Promessa da Renascença</h2>
          <p>
            Acreditamos que a tecnologia definitiva deve ser invisível em sua complexidade e implacável em sua eficiência. Não criamos apenas softwares; forjamos um ecossistema integrado onde dados conversam em linguagem natural, automações executam o labor estéril e a inteligência artificial serve como extensão da estratégia.
          </p>
          <blockquote className="fm-manifesto-quote">
            "Automatizar o caos é perpetuar o erro. O verdadeiro poder reside em redesenhar o sistema desde a fundação."
          </blockquote>
        </Reveal>
      </section>

      <section className="fm-manifesto-chapter">
        <Reveal className="fm-chapter-content">
          <span className="fm-chapter-num">CAPÍTULO III</span>
          <h2 className="OldLondon">O Novo Reino</h2>
          <p>
            O futuro pertence às organizações que operam com precisão de cronômetro e clareza absoluta. Na Fifteen Miles, recusamos a mediocridade dos processos manuais. Convidamos você a abandonar o passado, romper as correntes dos sistemas legados e adentrar a nova era da engenharia corporativa.
          </p>
        </Reveal>
      </section>

      <section className="fm-final">
        <Reveal tag="h2" className="fm-title fm-title--old">A Escolha é Sua</Reveal>
        <Reveal tag="p" className="fm-final-caption">
          Continuar nas trevas ou ascender à luz da automação.
        </Reveal>
        <Reveal>
          <a href="/contact" className="fm-btn">Reivindicar o Futuro</a>
        </Reveal>
      </section>
    </main>
  );
}