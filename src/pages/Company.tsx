import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  { title: "Precisão & Disciplina", body: "Tratamos arquitetura de software, tipografia e design de interação como uma única disciplina contínua de rigor." },
  { title: "Durabilidade Institucional", body: "Sistemas devem manter a clareza operacional e a legibilidade através de anos de crescimento e mudanças de equipe." },
  { title: "Foco Restrito", body: "Desenvolvemos poucas plataformas fundamentais com princípios profundos em vez de acompanhar tendências passageiras de mercado." },
];

export default function Company() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F0E0C] font-sans selection:bg-[#8C7355] selection:text-[#FAF8F5] pt-24 pb-20">
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
        
        {/* Header */}
        <div className="max-w-4xl border-b border-[#8C7355]/20 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/30 bg-[#F5F2EB] text-[11px] font-sans tracking-[0.2em] uppercase text-[#8C7355] mb-6">
            <Compass className="w-3.5 h-3.5" />
            <span>A Instituição</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl font-normal leading-[1.04] text-[#0F0E0C] mb-8">
            Existimos para erguer fundações que duram décadas.
          </h1>

          <p className="text-lg sm:text-xl text-[#706C64] font-light leading-relaxed max-w-2xl">
            A Fifteen Miles foi fundada sobre a convicção de que o software corporativo deve ser tratado como infraestrutura crítica, construído com paciência, sobriedade e excelência artesanal.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/atlas"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0F0E0C] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium hover:bg-[#1F1C18] transition-all shadow-[0_10px_30px_rgba(15,14,12,0.12)]"
            >
              <span>Conhecer o Atlas OS</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </Link>

            <Link
              to="/manifesto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#8C7355]/40 bg-[#F5F2EB] text-[#0F0E0C] text-xs uppercase tracking-widest font-normal hover:border-[#8C7355] transition-all"
            >
              <span>Ler o Manifesto</span>
            </Link>
          </div>
        </div>

        {/* Institutional Pillars */}
        <section className="py-20 border-b border-[#8C7355]/20">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-10 rounded-2xl border border-[#8C7355]/20 bg-[#F5F2EB] engraved-border-light">
              <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#8C7355] block mb-3">
                Cultura de Longo Prazo
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0F0E0C] font-normal mb-4">
                Construímos como as catedrais foram erguidas.
              </h2>
              <p className="text-[#706C64] text-sm leading-relaxed font-light">
                Recusamos o ciclo frenético de lançamentos superficiais. Nossos engenheiros e projetistas trabalham com previsibilidade, eliminando complexidades acidentais e focando no legado de longo prazo.
              </p>
            </div>

            <div className="p-10 rounded-2xl border border-[#8C7355]/20 bg-[#F5F2EB] engraved-border-light">
              <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#8C7355] block mb-3">
                Soberania Operacional
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0F0E0C] font-normal mb-4">
                Software como patrimônio institucional.
              </h2>
              <p className="text-[#706C64] text-sm leading-relaxed font-light">
                Garantimos que as organizações mantenham a custódia imutável de seus dados, processos e inteligência coletiva sem aprisionamentos a ecossistemas efêmeros.
              </p>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-20">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F0E0C] font-normal mb-12 text-center">
            Nossos Valores Fundamentais
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-[#8C7355]/20 bg-[#F5F2EB] engraved-border-light">
                <span className="font-serif text-lg text-[#8C7355] block mb-3">0{idx + 1}</span>
                <h3 className="font-serif text-2xl text-[#0F0E0C] mb-2 font-normal">{val.title}</h3>
                <p className="text-xs text-[#706C64] font-light leading-relaxed">{val.body}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
