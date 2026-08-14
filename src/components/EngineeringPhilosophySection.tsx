import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, GitBranch, Terminal, Shield, Layers, FileText, CheckCircle2, ArrowRight } from "lucide-react";

const engineeringPillars = [
  {
    icon: Layers,
    title: "Arquitetura em Primeiro Lugar",
    desc: "Decisões de sistema são tomadas antes de escrever uma única linha de código. Evitamos débitos técnicos prevendo a escala futura."
  },
  {
    icon: Code2,
    title: "Design System & Componentes Reutilizáveis",
    desc: "Linguagem visual estritamente tipada. Cada padrão de interface possui fundamentação funcional e comportamento padronizado."
  },
  {
    icon: GitBranch,
    title: "Fluxo de Trabalho Git & Rigoroso Code Review",
    desc: "Nenhuma mudança entra em produção sem revisão por pares, testes automatizados abrangentes e verificação formal de tipos."
  },
  {
    icon: FileText,
    title: "Documentação Abrangente",
    desc: "Instruções e especificações claras mantêm o conhecimento vivo e legível para as próximas gerações de engenheiros."
  },
  {
    icon: Shield,
    title: "Escalabilidade & Segurança Ativa",
    desc: "Sistemas desenhados para isolamento de falhas, baixo acoplamento e resiliência contínua sob alto volume de operações."
  },
  {
    icon: Terminal,
    title: "Cultura de Engenharia Monumental",
    desc: "Incentivamos a sobriedade técnica, o orgulho pelo artesanato do código e a busca incessante pela simplicidade perfeita."
  }
];

export const EngineeringPhilosophySection = () => {
  return (
    <section className="relative py-32 bg-[#0C0B0A] border-t border-[#8C7355]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/30 bg-[#161412] text-[11px] font-sans tracking-[0.2em] uppercase text-[#C5A059] mb-6">
              <Terminal className="w-3.5 h-3.5" />
              <span>Capítulo VI · A Engenharia</span>
            </div>

            <h2 className="font-serif text-5xl sm:text-7xl text-[#FAF8F5] leading-tight font-normal">
              Filosofia de Engenharia.
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-[#8C8880] font-sans font-light leading-relaxed">
              Engenharia não é apenas escrever linhas de código. É construir estruturas intelectuais com disciplina, clareza e previsibilidade de longo prazo.
            </p>
          </div>

          <Link
          href="/engineering"
            className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.15em] uppercase text-[#C5A059] hover:text-[#FAF8F5] transition-colors shrink-0"
          >
            <span>Ver Manifesto de Engenharia</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {engineeringPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-[#8C7355]/15 bg-[#12100E] hover:border-[#8C7355]/35 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-[#1A1815] border border-[#8C7355]/20 text-[#C5A059] w-fit mb-6 group-hover:border-[#C5A059]/40 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-[#FAF8F5] mb-3 font-normal">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8C8880] font-sans font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Banner */}
        <div className="p-8 rounded-xl border border-[#8C7355]/20 bg-[#141210] flex flex-col md:flex-row items-center justify-between gap-6 font-sans text-xs text-[#8C8880]">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
            <span>Padrões de Qualidade: React 19 · TypeScript 5.9 · Vite · Tailwind Architecture</span>
          </div>
          <div className="tracking-widest uppercase text-[10px] text-[#8C7355]">
            Strict Type Safety & Zero Compromise
          </div>
        </div>

      </div>
    </section>
  );
};
