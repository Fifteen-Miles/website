import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Terminal, ArrowRight, ShieldCheck } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "Pensamento de Longo Prazo",
    desc: "Rejeitamos a cultura de lançamentos apressados. Planejamos software para ciclos de vida de décadas."
  },
  {
    num: "02",
    title: "Engenharia & Precisão",
    desc: "Cada contrato de API, modelo de dados e elemento de interface possui intenção clara e fundamentação formal."
  },
  {
    num: "03",
    title: "Elegância & Calma",
    desc: "Interfaces limpas que transmitem tranquilidade operacional, eliminando ruído visual e modas efêmeras."
  },
  {
    num: "04",
    title: "Execução Deliberada",
    desc: "Nunca velocidade cega. Nossos sistemas são erguidos com a disciplina das grandes obras de arquitetura."
  }
];

export const ChamberOfPhilosophy = () => {
  return (
    <section className="relative py-36 bg-[#12100E] text-[#FAF8F5] border-t border-[#8C7355]/30 dark-chamber">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Chapter V: Why Fifteen Miles Exists */}
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/40 bg-[#1A1815] text-[11px] font-sans tracking-[0.2em] uppercase text-[#C5A059] mb-6">
            <span>Capítulo V · Por Que Existimos</span>
          </div>

          <h2 className="font-serif text-5xl sm:text-7xl text-[#FAF8F5] leading-tight font-normal">
            A Filosofia da Permanência.
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-[#8C8880] font-sans font-light leading-relaxed">
            A Fifteen Miles não foi criada para lançar um produto de passagem. Foi criada para edificar um legado na engenharia de software corporativo.
          </p>
        </div>

        {/* Pillars Quad Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {pillars.map((item) => (
            <div
              key={item.num}
              className="p-8 rounded-2xl border border-[#8C7355]/25 bg-[#1A1815] engraved-border-dark flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-2xl text-[#C5A059] block mb-6 font-light">
                  {item.num}
                </span>
                <h3 className="font-serif text-2xl text-[#FAF8F5] mb-3 font-normal">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8C8880] font-sans font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#8C7355]/20 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#8C8880]">
                <span>Princípio Fundacional</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C7355]" />
              </div>
            </div>
          ))}
        </div>

        {/* Chapter VI: Engineering Philosophy */}
        <div className="p-10 sm:p-14 rounded-3xl border border-[#8C7355]/30 bg-[#161412] engraved-border-dark">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[11px] font-sans tracking-[0.2em] uppercase text-[#C5A059] mb-4">
                <Terminal className="w-3.5 h-3.5" />
                <span>Capítulo VI · A Engenharia</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] font-normal mb-4">
                Filosofia de Engenharia Monumental
              </h3>
              <p className="text-[#8C8880] text-sm leading-relaxed font-light">
                Arquitetura em primeiro lugar, tipagem estrita no compilar, fluxo de trabalho Git rigoroso, code reviews por pares e documentação viva.
              </p>
            </div>

            <Link
              to="/engineering"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#8C7355]/40 bg-[#1E1C18] text-[#FAF8F5] text-xs font-sans uppercase tracking-widest hover:border-[#C5A059] transition-all shrink-0"
            >
              <span>Ver Manifesto de Engenharia</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
