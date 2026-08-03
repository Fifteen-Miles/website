import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Pensamento de Longo Prazo",
    desc: "Rejeitamos a cultura de lançamentos apressados. Planejamos software com ciclos de vida de décadas."
  },
  {
    number: "02",
    title: "Engenharia & Precisão",
    desc: "Cada estrutura de dados, contrato de API e componente visual é desenhado com rigor matemático e intenção clara."
  },
  {
    number: "03",
    title: "Elegância & Calma",
    desc: "Interfaces que transmitem tranquilidade operacional, sem distrações desnecessárias, ruído visual ou elementos estéticos efêmeros."
  },
  {
    number: "04",
    title: "Execução Deliberada",
    desc: "Nunca velocidade cega. Nunca 'moverse rápido e quebrar coisas'. Construímos software da forma como as catedrais foram erguidas: cuidadosamente."
  }
];

export const WhyFifteenMilesSection = () => {
  return (
    <section className="relative py-32 bg-[#0A0A0C] border-t border-[#8C7355]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/30 bg-[#161412] text-[11px] font-sans tracking-[0.2em] uppercase text-[#C5A059] mb-6">
            <span>Capítulo V · Por que existimos</span>
          </div>

          <h2 className="font-serif text-5xl sm:text-7xl text-[#FAF8F5] leading-tight font-normal">
            A Filosofia Fifteen Miles.
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-[#8C8880] font-sans font-light leading-relaxed">
            A Fifteen Miles não foi criada para lançar um produto de passagem. Foi criada para edificar um legado na engenharia de software.
          </p>
        </div>

        {/* Values Quad Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item) => (
            <div
              key={item.number}
              className="p-8 rounded-2xl border border-[#8C7355]/20 bg-[#12100E] engraved-border hover:border-[#8C7355]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-2xl text-[#C5A059] block mb-6 font-light">
                  {item.number}
                </span>
                <h3 className="font-serif text-2xl text-[#FAF8F5] mb-3 font-normal">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8C8880] font-sans font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#8C7355]/15 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#8C8880]">
                <span>Princípio Fundacional</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C7355]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
