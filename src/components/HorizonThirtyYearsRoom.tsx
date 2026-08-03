import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Compass, ArrowRight, Mail } from "lucide-react";

export const HorizonThirtyYearsRoom = () => {
  return (
    <section className="relative py-36 bg-[#FAF8F5] text-[#0F0E0C] border-t border-[#8C7355]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Chapter VII: Our Vision */}
        <div className="max-w-4xl mx-auto text-center mb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/30 bg-[#F5F2EB] text-[11px] font-sans tracking-[0.2em] uppercase text-[#706C64] mb-6">
            <Compass className="w-3.5 h-3.5" />
            <span>Capítulo VII · Nossa Visão</span>
          </div>

          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#0F0E0C] leading-tight font-normal mb-8">
            Um horizonte de três décadas.
          </h2>

          <p className="text-xl sm:text-2xl text-[#706C64] font-serif font-light leading-relaxed max-w-3xl mx-auto italic">
            "Não fomos fundados para o próximo trimestre, nem para uma rodada efêmera. Fomos criados para erguer a infraestrutura digital dos próximos 30 anos."
          </p>

          {/* Symmetrical Timeline Cards */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8 font-sans text-xs text-left">
            {[
              { year: "Horizonte 2030", title: "Consolidação de Infraestrutura", desc: "Adoção do Atlas OS pelas principais instituições que priorizam soberania de dados." },
              { year: "Horizonte 2040", title: "Resiliência Operacional", desc: "Sistemas em execução imutável contínua mantendo histórico institucional de 20 anos." },
              { year: "Horizonte 2050", title: "Padrão de Legado", desc: "Plataformas operacionais que continuam legíveis, seguras e funcionais por gerações." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl border border-[#8C7355]/20 bg-[#F5F2EB] engraved-border-light flex flex-col justify-between">
                <div>
                  <span className="text-[#8C7355] font-serif text-sm block mb-2 font-medium">{item.year}</span>
                  <h3 className="text-[#0F0E0C] font-serif text-xl font-normal mb-3">{item.title}</h3>
                  <p className="text-[#706C64] font-light leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#8C7355]/15 text-[10px] uppercase tracking-widest text-[#706C64]">
                  Fase Estrutural 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chapter VIII: Architectural Call to Action */}
        <div className="relative p-12 sm:p-20 rounded-3xl border border-[#8C7355]/30 bg-[#F5F2EB] engraved-border-light text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#8C7355] to-transparent" />

          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#706C64] block mb-4">
            Capítulo VIII · O Convite Institucional
          </span>

          <h3 className="font-serif text-4xl sm:text-6xl text-[#0F0E0C] font-normal leading-tight max-w-3xl mx-auto mb-6">
            Construa sua operação sobre fundações permanentes.
          </h3>

          <p className="text-base sm:text-lg text-[#706C64] font-sans font-light max-w-xl mx-auto mb-12 leading-relaxed">
            Se sua empresa busca estabilidade operacional e visão de longo prazo, convidamos você a dialogar diretamente com nosso time de arquitetura e engenharia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0F0E0C] text-[#FAF8F5] font-sans font-medium text-xs tracking-[0.15em] uppercase hover:bg-[#1F1C18] transition-all shadow-[0_10px_30px_rgba(15,14,12,0.15)] group"
            >
              <Mail className="w-4 h-4 text-[#C5A059]" />
              <span>Iniciar Diálogo Institucional</span>
            </Link>

            <Link
              to="/atlas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#8C7355]/40 bg-[#FAF8F5] text-[#0F0E0C] font-sans font-normal text-xs tracking-[0.15em] uppercase hover:border-[#8C7355] hover:bg-[#F0EDE6] transition-all"
            >
              <span>Explorar Atlas OS</span>
              <ArrowRight className="w-4 h-4 text-[#8C7355]" />
            </Link>
          </div>

          <div className="mt-16 text-[10px] font-sans tracking-[0.2em] uppercase text-[#706C64]">
            Fifteen Miles Technologies · Foundation of Digital Infrastructure
          </div>
        </div>

      </div>
    </section>
  );
};
