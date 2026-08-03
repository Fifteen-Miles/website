import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layers, ArrowRight, Shield, Server, Lock } from "lucide-react";

export const AtlasInfrastructureRoom = () => {
  return (
    <section className="relative py-36 bg-[#FCFBF9] text-[#0F0E0C] border-t border-[#8C7355]/20 overflow-hidden">
      {/* Background Architectural Light Grid */}
      <div className="absolute inset-0 architectural-grid-light opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Header - Infrastructure Presentation */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/30 bg-[#F5F2EB] text-[11px] font-sans tracking-[0.2em] uppercase text-[#8C7355] mb-6">
            <Layers className="w-3.5 h-3.5" />
            <span>Capítulo IV · A Infraestrutura</span>
          </div>

          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#0F0E0C] leading-tight font-normal">
            Atlas OS. <br />
            <span className="text-[#706C64] italic">Uma plataforma. Toda a operação.</span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl text-[#706C64] font-sans font-light leading-relaxed max-w-2xl">
            O Atlas não é um aplicativo. É a infraestrutura central projetada para servir como o Sistema Operacional Empresarial de organizações que pensam no longo prazo.
          </p>
        </div>

        {/* Spatial Architecture View */}
        <div className="grid lg:grid-cols-12 gap-8 mb-24">
          
          {/* Main Core Infrastructure Block */}
          <div className="lg:col-span-8 p-10 sm:p-14 rounded-2xl border border-[#8C7355]/30 bg-[#F5F2EB] engraved-border-light flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#8C7355] block mb-3">
                Arquitetura Central
              </span>
              <h3 className="font-serif text-4xl sm:text-5xl text-[#0F0E0C] font-normal mb-6">
                Fundação Unificada de Dados e Decisão
              </h3>
              <p className="text-[#706C64] font-sans text-base leading-relaxed max-w-xl font-light mb-12">
                A maioria dos softwares força as empresas a se adaptarem a ele. O Atlas faz o inverso: fornece um ambiente configurável e imutável onde a inteligência corporativa é preservada.
              </p>
            </div>

            {/* Core Modules List */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-[#8C7355]/20 font-sans text-xs">
              {[
                { label: "Governança Operacional", val: "Arquitetura Imutável" },
                { label: "Modelo de Conhecimento", val: "Memória Institucional" },
                { label: "Controle de Acesso", val: "Granularidade Estrita" }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#FAF8F5] border border-[#8C7355]/20">
                  <span className="text-[#706C64] text-[10px] uppercase tracking-wider block mb-1">{item.label}</span>
                  <span className="text-[#0F0E0C] font-medium text-sm block">{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pillars */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-8 rounded-2xl border border-[#8C7355]/20 bg-[#FAF8F5] engraved-border-light">
              <Server className="w-6 h-6 text-[#8C7355] mb-4" />
              <h4 className="font-serif text-2xl text-[#0F0E0C] mb-2 font-normal">Sem Dependências Frágeis</h4>
              <p className="text-xs text-[#706C64] leading-relaxed font-light">
                Construído do zero sem depender de integrações instáveis de terceiros que falham com o tempo.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-[#8C7355]/20 bg-[#FAF8F5] engraved-border-light">
              <Lock className="w-6 h-6 text-[#8C7355] mb-4" />
              <h4 className="font-serif text-2xl text-[#0F0E0C] mb-2 font-normal">Soberania Institucional</h4>
              <p className="text-xs text-[#706C64] leading-relaxed font-light">
                Seus dados não residem em silos opacos. Sua empresa mantém o controle imutável de sua inteligência.
              </p>
            </div>
          </div>
        </div>

        {/* Action Link */}
        <div className="flex justify-center">
          <Link
            to="/atlas"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#8C7355]/40 bg-[#0F0E0C] text-[#FAF8F5] font-sans font-medium text-xs tracking-[0.15em] uppercase hover:bg-[#1F1C18] transition-all group shadow-[0_10px_30px_rgba(15,14,12,0.1)]"
          >
            <span>Especificações do Atlas OS</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
