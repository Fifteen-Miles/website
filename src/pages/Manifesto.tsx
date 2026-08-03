import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";

export default function Manifesto() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F0E0C] font-sans selection:bg-[#8C7355] selection:text-[#FAF8F5] pt-28 pb-24">
      <main className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/30 bg-[#F5F2EB] text-[11px] font-sans tracking-[0.25em] uppercase text-[#8C7355] mb-6">
            <Compass className="w-3.5 h-3.5" />
            <span>Fifteen Miles Manifesto</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[1.04] text-[#0F0E0C] mb-8">
            O Manifesto da Permanência.
          </h1>

          <p className="text-xl sm:text-2xl text-[#706C64] font-serif italic leading-relaxed max-w-2xl mx-auto">
            "Tecnologia muda. Fundações permanecem."
          </p>
        </div>

        <div className="w-px h-16 bg-[#8C7355]/30 mx-auto mb-20" />

        {/* Manifesto Content */}
        <article className="space-y-16 text-base sm:text-lg text-[#706C64] font-light leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F0E0C] font-normal">
              1. Por que o software se tornou fragmentado
            </h2>
            <p>
              Nas últimas duas décadas, a indústria de tecnologia adotou a premissa de que a velocidade de lançamento se sobrepõe ao rigor arquitetônico. O resultado foi uma explosão de ferramentas pontuais e efêmeras. As empresas passaram a operar divididas em dezenas de silos desconectados, perdendo o contexto histórico de suas próprias decisões.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F0E0C] font-normal">
              2. As empresas merecem fundações melhores
            </h2>
            <p>
              Uma instituição corporativa não é um laboratório de experimentos temporários. Organizações que pretendem durar 30, 50 ou 100 anos necessitam de infraestruturas construídas com solidez monumental. O software deve servir como a espinha dorsal imutável da empresa, não como um remendo constante.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F0E0C] font-normal">
              3. Por que a engenharia importa
            </h2>
            <p>
              Engenharia de verdade não aceita atalhos. Não se trata de empilhar dependências frágeis ou cobrir falhas de design com marketing. Engenharia é a arte da disciplina intelectual: prever limites, isolar responsabilidades e construir com a precisão de catedrais e pontes de pedra.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F0E0C] font-normal">
              4. A simplicidade é difícil
            </h2>
            <p>
              A complexidade é fácil; basta somar funcionalidades sem critério. A simplicidade exige coragem e renúncia. Exige dizer não ao ruído visual, às modas passageiras e ao excesso decorativo para focar estritamente no essencial.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F0E0C] font-normal">
              5. Por que a permanência importa
            </h2>
            <p>
              Edificações construídas há centenas de anos continuam admiradas hoje não por fantasia, mas porque foram erguidas com proporções corretas, materiais nobres e atenção ao detalhe. Na Fifteen Miles, reinterpretamos essa sobriedade arquitetônica na era do software.
            </p>
          </section>

        </article>

        {/* Manifesto Sign-off */}
        <div className="mt-24 p-12 rounded-2xl border border-[#8C7355]/30 bg-[#F5F2EB] engraved-border-light text-center">
          <span className="font-serif text-3xl text-[#0F0E0C] block mb-4 font-normal">
            Construímos software para durar décadas.
          </span>
          <p className="text-xs text-[#706C64] max-w-md mx-auto mb-8 font-light">
            Se a sua organização compartilha deste compromisso com a longevidade e o rigor, convidamos você a se juntar a nós.
          </p>
          <Link
            to="/atlas"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0F0E0C] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium hover:bg-[#1F1C18] transition-all"
          >
            <span>Explorar Atlas OS</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </Link>
        </div>

      </main>
    </div>
  );
}