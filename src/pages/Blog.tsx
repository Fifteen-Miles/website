'use client';

import { motion, type Variants } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { useEffect } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const posts = [
  {
    slug: "construcao-de-software-como-catedrais",
    date: "MMXXVI · I",
    title: "A Construção de Software como Catedrais",
    summary: "Como a disciplina de engenharia e o planejamento de longo prazo evitam a ruína digital de sistemas corporativos.",
    tag: "Engenharia"
  },
  {
    slug: "o-fim-da-era-dos-aplicativos-fragmentados",
    date: "MMXXVI · II",
    title: "O Fim da Era dos Aplicativos Fragmentados",
    summary: "Por que plataformas operacionais unificadas estão substituindo pilhas de ferramentas terceirizadas desconectadas.",
    tag: "Infraestrutura"
  },
  {
    slug: "soberania-de-dados-e-memoria-institucional",
    date: "MMXXVI · III",
    title: "Soberania de Dados e Memória Institucional",
    summary: "Preservando o contexto histórico de decisões corporativas em ambientes de alta segurança e tipagem estrita.",
    tag: "Arquitetura"
  }
];

export default function Blog() {
  useEffect(() => {
    if (!document.getElementById("fm-type-system")) {
      const link = document.createElement("link");
      link.id = "fm-type-system";
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F0E0C] font-[Inter] selection:bg-black/50 selection:text-[#FAF8F5] pt-32 pb-24 relative overflow-hidden">
      <Seo title="Blog — Fifteen Miles" description="Ensaios técnicos e reflexões sobre arquitetura, governança e plataformas empresariais." path="/blog" />
      

      <main className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-24"
        >
          <div className="border-y-2 border-[#0F0E0C] py-4 mb-16 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="font-[Inter] text-[10px] uppercase tracking-[0.25em] text-[#0F0E0C] font-medium flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5" /> Acervo Editorial
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C7355]" />
              <span className="font-[Inter] text-[10px] uppercase tracking-[0.25em] text-[#706C64]">Publicações Oficiais</span>
            </div>
            <div className="text-[10px] font-[Inter] uppercase tracking-[0.2em] text-[#706C64]">
              Atualizado em MMXXVI
            </div>
          </div>

          <motion.h1
            variants={fadeUp}
            className="font-[Fraunces] text-6xl md:text-8xl lg:text-[7.5rem] font-normal tracking-tight leading-[0.95] text-[#0F0E0C] mb-8 text-center md:text-left"
          >
            Discursos Institucionais.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-3xl text-[#706C64] font-light leading-relaxed max-w-4xl text-center md:text-left font-[Fraunces] italic"
          >
            Reflexões técnicas sobre a arquitetura de software de grande escala, governança de dados e a filosofia operacional que guia a Fifteen Miles.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-12 lg:gap-16 border-t-2 border-[#0F0E0C] pt-12"
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              variants={fadeUp}
              className="flex flex-col group relative"
            >
              {index !== 0 && (
                <div className="hidden md:block absolute -left-6 lg:-left-8 top-0 bottom-0 w-[1px] bg-[#0F0E0C]/10" />
              )}
              {index !== 0 && (
                <div className="block md:hidden absolute top-[-1.5rem] left-0 right-0 h-[1px] bg-[#0F0E0C]/10" />
              )}

              <div className="flex-1">
                <div className="flex items-center justify-between border-b border-[#0F0E0C]/10 pb-4 mb-6">
                  <span className="font-[Inter] text-[10px] tracking-widest text-[#706C64] uppercase">{post.date}</span>
                  <span className="font-[Inter] text-[10px] tracking-widest text-[#0F0E0C] uppercase font-medium">{post.tag}</span>
                </div>
                
                <Link to={`/blog/${post.slug}`} className="block">
                  <h2 className="font-[Fraunces] text-3xl md:text-4xl text-[#0F0E0C] mb-6 font-normal leading-[1.15] group-hover:text-[#8C7355] transition-colors duration-500">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-base text-[#2A2824] font-light leading-relaxed mb-10 text-justify">
                  {post.summary}
                </p>
              </div>

              <Link
                to={`/blog/${post.slug}`}
                className="mt-auto flex items-center justify-center gap-3 font-[Inter] text-xs uppercase tracking-widest text-[#0F0E0C] border border-[#0F0E0C] w-full py-4 hover:bg-[#0F0E0C] hover:text-[#FAF8F5] transition-all duration-500"
              >
                <span>Ler Ensaio Completo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-32 pt-12 border-t border-[#0F0E0C]/10 flex flex-col items-center justify-center"
        >
          <div className="w-12 h-12 rounded-full border border-[#0F0E0C] flex items-center justify-center font-[Fraunces] text-lg bg-[#0F0E0C] text-[#FAF8F5] mb-6">
            FM
          </div>
          <span className="font-[Inter] text-[10px] uppercase tracking-[0.3em] text-[#706C64] text-center">
            Imprensa Oficial Institucional
          </span>
        </motion.div>
      </main>
    </div>
  );
}