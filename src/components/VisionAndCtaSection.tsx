import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Compass, ArrowRight, ShieldCheck, Mail } from "lucide-react";

export const VisionAndCtaSection = () => {
  return (
    <section className="relative py-32 bg-[#0A0A0C] border-t border-[#8C7355]/20 overflow-hidden">
      {/* Dark Subtle Cathedral Arch Background Graphic */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(197,160,89,0.06)_0%,_transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section 7: Our Vision */}
        <div className="max-w-4xl mx-auto text-center mb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/30 bg-[#161412] text-[11px] font-sans tracking-[0.2em] uppercase text-[#C5A059] mb-6">
            <Compass className="w-3.5 h-3.5" />
            <span>Capítulo VII · Nossa Visão</span>
          </div>

          <h2 className="font-serif text-5xl sm:text-7xl text-[#FAF8F5] leading-tight font-normal mb-8">
            Um horizonte de três décadas.
          </h2>

          <p className="text-xl sm:text-2xl text-[#8C8880] font-serif font-light leading-relaxed max-w-3xl mx-auto italic">
            "Não fomos criados para o próximo trimestre, nem para uma rodada de financiamento. Fomos fundados para construir as fundações do software corporativo nos próximos 30 anos."
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 font-sans text-xs text-left">
            {[
              { year: "Horizonte 2030", title: "Consolidação de Infraestrutura", desc: "Adoção do Atlas OS pelas principais instituições de tecnologia e indústria." },
              { year: "Horizonte 2040", title: "Resiliência Operacional", desc: "Sistemas em execução contínua com histórico imutável mantido por 20 anos." },
              { year: "Horizonte 2050", title: "Padrão de Legado", desc: "Plataformas operacionais que continuam legíveis e úteis após gerações." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-[#8C7355]/20 bg-[#12100E] engraved-border">
                <span className="text-[#C5A059] font-serif text-sm block mb-1">{item.year}</span>
                <h3 className="text-[#FAF8F5] font-medium text-sm mb-2">{item.title}</h3>
                <p className="text-[#8C8880] font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 8: Call to Action */}
        <div className="relative p-10 sm:p-16 rounded-3xl border border-[#8C7355]/30 bg-[radial-gradient(ellipse_at_top,_rgba(22,20,18,0.95)_0%,_rgba(10,10,12,0.98)_100%)] engraved-border text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

          <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#8C8880] block mb-4">
            Capítulo VIII · O Convite
          </span>

          <h3 className="font-serif text-4xl sm:text-6xl text-[#FAF8F5] font-normal leading-tight max-w-3xl mx-auto mb-6">
            Construa sua operação sobre fundações permanentes.
          </h3>

          <p className="text-base sm:text-lg text-[#8C8880] font-sans font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Se sua organização planeja crescer com estabilidade e visão de longo prazo, convidamos você a conhecer a infraestrutura do Atlas OS.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FAF8F5] text-[#0A0A0C] font-sans font-medium text-xs tracking-[0.15em] uppercase hover:bg-[#EBE5D8] transition-all shadow-[0_10px_30px_rgba(250,248,245,0.15)] group"
            >
              <Mail className="w-4 h-4 text-[#0A0A0C]" />
              <span>Iniciar Diálogo Institucional</span>
            </Link>

            <Link
              to="/atlas"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#8C7355]/40 bg-[#161412] text-[#FAF8F5] font-sans font-normal text-xs tracking-[0.15em] uppercase hover:border-[#C5A059] hover:bg-[#1F1C18] transition-all"
            >
              <span>Explorar Atlas</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </Link>
          </div>

          <div className="mt-12 text-[10px] font-sans tracking-[0.2em] uppercase text-[#8C8880]/60">
            Fifteen Miles Technologies · Established for Permanence
          </div>
        </div>

      </div>
    </section>
  );
};
