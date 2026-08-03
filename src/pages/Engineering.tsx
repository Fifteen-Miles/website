import { motion } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const standards = [
  { title: "Tipagem Estrita & Verificação Formal", desc: "100% de cobertura TypeScript sem uso de tipos implícitos 'any'. Erros são prevenidos na compilação." },
  { title: "Design System Centralizado", desc: "Componentes atômicos reutilizáveis construídos sobre tokens de design imutáveis." },
  { title: "Code Review Rigoroso & CI/CD", desc: "Cada commit passa por testes automatizados, análise estática e revisão minuciosa por engenheiros seniores." },
  { title: "Desempenho & Baixa Latência", desc: "Carregamento instantâneo, renderização otimizada e zero dependências desnecessárias." }
];

export default function Engineering() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F0E0C] font-sans selection:bg-[#8C7355] selection:text-[#FAF8F5] pt-24 pb-20">
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
        
        {/* Header */}
        <div className="max-w-4xl border-b border-[#8C7355]/20 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/30 bg-[#F5F2EB] text-[11px] font-sans tracking-[0.2em] uppercase text-[#8C7355] mb-6">
            <Terminal className="w-3.5 h-3.5" />
            <span>Engenharia Institucional</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl font-normal leading-[1.04] text-[#0F0E0C] mb-8">
            Construímos software com o rigor de sistemas críticos.
          </h1>

          <p className="text-lg sm:text-xl text-[#706C64] font-light leading-relaxed max-w-2xl">
            A infraestrutura do Atlas OS é moldada por modularidade, tipagem estrita e uma visão de longo prazo. Engenharia não é uma função de suporte — é o produto principal.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0F0E0C] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium hover:bg-[#1F1C18] transition-all shadow-[0_10px_30px_rgba(15,14,12,0.12)]"
            >
              <span>Falar com o Time de Engenharia</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </Link>
          </div>
        </div>

        {/* Technical Principles */}
        <section className="py-20 border-b border-[#8C7355]/20">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#8C7355] block mb-2">
              Padrões de Engenharia
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#0F0E0C] font-normal">
              Princípios Imutáveis de Desenvolvedores
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {standards.map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-[#8C7355]/20 bg-[#F5F2EB] engraved-border-light">
                <span className="font-serif text-lg text-[#8C7355] block mb-3">0{idx + 1}</span>
                <h3 className="font-serif text-2xl text-[#0F0E0C] mb-2 font-normal">{item.title}</h3>
                <p className="text-xs text-[#706C64] font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack Overview in Dark Accent Box */}
        <section className="py-20">
          <div className="p-10 rounded-2xl border border-[#8C7355]/30 bg-[#12100E] text-[#FAF8F5] engraved-border-dark flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#C5A059] block mb-2">
                Arquitetura de Referência
              </span>
              <h3 className="font-serif text-3xl text-[#FAF8F5] font-normal mb-3">
                React 19 · TypeScript · Vite · Architecture Engine
              </h3>
              <p className="text-xs text-[#8C8880] font-light max-w-xl">
                Nossa pilha tecnológica é selecionada especificamente para garantir previsibilidade, acessibilidade e facilidade de manutenção por dezenas de anos.
              </p>
            </div>
            <Link
              to="/atlas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#8C7355]/40 bg-[#1A1815] text-[#FAF8F5] text-xs uppercase tracking-wider hover:border-[#C5A059] transition-colors shrink-0"
            >
              <span>Ver Especificações do Atlas</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
