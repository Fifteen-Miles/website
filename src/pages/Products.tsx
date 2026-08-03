import { motion } from "framer-motion";
import { ArrowRight, Layers, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F0E0C] font-sans selection:bg-[#8C7355] selection:text-[#FAF8F5] pt-24 pb-20">
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
        
        {/* Header */}
        <div className="max-w-4xl border-b border-[#8C7355]/20 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/30 bg-[#F5F2EB] text-[11px] font-sans tracking-[0.2em] uppercase text-[#8C7355] mb-6">
            <Layers className="w-3.5 h-3.5" />
            <span>Mapa de Infraestrutura</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl font-normal leading-[1.04] text-[#0F0E0C] mb-8">
            Plataformas de Operação Corporativa.
          </h1>

          <p className="text-lg sm:text-xl text-[#706C64] font-light leading-relaxed max-w-2xl">
            Cada módulo da Fifteen Miles é projetado para se conectar à arquitetura unificada do Atlas OS, eliminando o acoplamento frágil de ferramentas dispersas.
          </p>
        </div>

        {/* Product Grid */}
        <section className="py-20 grid lg:grid-cols-2 gap-8">
          
          {/* Atlas Card */}
          <div className="p-10 rounded-2xl border border-[#8C7355]/30 bg-[#F5F2EB] engraved-border-light flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#8C7355]/30 text-[#8C7355]">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#706C64] block">Sistema Operacional</span>
                    <h2 className="font-serif text-3xl text-[#0F0E0C] font-normal">Atlas OS</h2>
                  </div>
                </div>
                <span className="text-[10px] font-sans tracking-widest uppercase text-[#8C7355] border border-[#8C7355]/30 px-3 py-1 rounded-full bg-[#FAF8F5]">
                  Ativo & Implantado
                </span>
              </div>

              <p className="text-sm text-[#706C64] font-light leading-relaxed mb-8">
                O Sistema Operacional Empresarial configurável que centraliza planejamento, inteligência operacional, memória institucional e governança em um único ambiente monumental.
              </p>
            </div>

            <Link
              to="/atlas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0F0E0C] text-[#FAF8F5] text-xs font-medium uppercase tracking-wider hover:bg-[#1F1C18] transition-all w-fit"
            >
              <span>Explorar Atlas OS</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </Link>
          </div>

          {/* Future Modules */}
          <div className="p-10 rounded-2xl border border-[#8C7355]/20 bg-[#F5F2EB] engraved-border-light flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#8C7355]/20 text-[#706C64]">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#706C64] block">Camadas Futuras</span>
                    <h2 className="font-serif text-3xl text-[#0F0E0C] font-normal">Orquestração & Inteligência</h2>
                  </div>
                </div>
                <span className="text-[10px] font-sans tracking-widest uppercase text-[#706C64] border border-[#8C7355]/20 px-3 py-1 rounded-full">
                  Em Desenvolvimento
                </span>
              </div>

              <p className="text-sm text-[#706C64] font-light leading-relaxed mb-8">
                Camadas adicionais de inteligência preditiva e orquestração de processos que se acoplarão organicamente ao núcleo do Atlas OS sem introduzir complexidade indesejada.
              </p>
            </div>

            <span className="text-xs text-[#8C7355] font-serif italic">
              Desenvolvido com a paciência das arquiteturas duradouras.
            </span>
          </div>

        </section>

      </main>
    </div>
  );
}
