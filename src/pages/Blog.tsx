import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import Seo from "../components/Seo"

const posts = [
  {
    date: "MMXXVI · I",
    title: "A Construção de Software como Catedrais",
    summary: "Como a disciplina de engenharia e o planejamento de longo prazo evitam a ruína digital de sistemas corporativos.",
    tag: "Engenharia"
  },
  {
    date: "MMXXVI · II",
    title: "O Fim da Era dos Aplicativos Fragmentados",
    summary: "Por que plataformas operacionais unificadas estão substituindo pilhas de ferramentas terceirizadas desconectadas.",
    tag: "Infraestrutura"
  },
  {
    date: "MMXXVI · III",
    title: "Soberania de Dados e Memória Institucional",
    summary: "Preservando o contexto histórico de decisões corporativas em ambientes de alta segurança e tipagem estrita.",
    tag: "Arquitetura"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F0E0C] font-sans selection:bg-[#8C7355] selection:text-[#FAF8F5] pt-24 pb-20">
      <Seo title="Blog — Fifteen Miles" description="Ensaios técnicos e reflexões sobre arquitetura, governança e plataformas empresariais." path="/blog" />
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
        
        {/* Header */}
        <div className="max-w-4xl border-b border-[#8C7355]/20 pb-16 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/30 bg-[#F5F2EB] text-[11px] font-sans tracking-[0.2em] uppercase text-[#8C7355] mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Discursos Institucionais</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl font-normal leading-[1.04] text-[#0F0E0C] mb-8">
            Ensaios sobre Engenharia, Permanência e Sistema.
          </h1>

          <p className="text-lg sm:text-xl text-[#706C64] font-light leading-relaxed max-w-2xl">
            Reflexões técnicas sobre a arquitetura de software de grande escala, governança de dados e a filosofia que guia a Fifteen Miles.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-[#8C7355]/20 bg-[#F5F2EB] engraved-border-light flex flex-col justify-between hover:border-[#8C7355]/50 transition-all">
              <div>
                <div className="flex items-center justify-between text-[10px] font-sans tracking-widest text-[#8C7355] uppercase mb-4">
                  <span>{post.date}</span>
                  <span className="border border-[#8C7355]/20 px-2 py-0.5 rounded">{post.tag}</span>
                </div>
                <h2 className="font-serif text-2xl text-[#0F0E0C] mb-4 font-normal leading-snug">
                  {post.title}
                </h2>
                <p className="text-xs text-[#706C64] font-light leading-relaxed mb-8">
                  {post.summary}
                </p>
              </div>

              <span className="inline-flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-[#8C7355] group hover:underline">
                <span>Ler Ensaio Completo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
