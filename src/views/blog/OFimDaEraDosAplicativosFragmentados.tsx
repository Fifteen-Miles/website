import { motion, type Variants } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import Seo from "../../components/Seo";
import { useEffect } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function OFimDaEraDosAplicativosFragmentados() {
  const essay = {
    title: "O Fim da Era dos Aplicativos Fragmentados",
    date: "2026-09-22",
    displayDate: "22 de Setembro de 2026",
    tag: "Infraestrutura",
    readTime: "8 min de leitura",
    author: "Fifteen Miles Editorial",
    description: "Por que plataformas operacionais unificadas estão substituindo pilhas de ferramentas terceirizadas desconectadas.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000",
    slug: "o-fim-da-era-dos-aplicativos-fragmentados"
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": essay.title,
    "image": [essay.image],
    "datePublished": essay.date,
    "dateModified": essay.date,
    "author": [{
      "@type": "Organization",
      "name": essay.author,
      "url": "https://www.fifteenmiles.tech/company"
    }]
  };

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
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F0E0C] font-[Inter] pt-32 pb-24 relative overflow-hidden selection:bg-[#0F0E0C] selection:text-[#FAF8F5]">
      <Seo 
        title={`${essay.title} — Fifteen Miles`}
        description={essay.description}
        path={`/blog/${essay.slug}`}
        image={essay.image}
        type="article"
        schemas={[articleSchema]}
      />
      

      <main className="max-w-4xl mx-auto px-6 sm:px-12 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-16">
          <Link href="/blog" className="inline-flex items-center gap-2 font-[Inter] text-xs uppercase tracking-widest text-[#706C64] hover:text-[#0F0E0C] transition-colors mb-12 border-b border-transparent hover:border-[#0F0E0C] pb-0.5">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retornar ao Índice</span>
          </Link>

          <div className="border-y-2 border-[#0F0E0C] py-4 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="font-[Inter] text-[10px] uppercase tracking-[0.25em] text-[#0F0E0C] font-medium">Edição Institucional</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C7355]" />
              <span className="font-[Inter] text-[10px] uppercase tracking-[0.25em] text-[#706C64]">{essay.tag}</span>
            </div>
            <div className="flex items-center gap-6 text-[10px] font-[Inter] uppercase tracking-[0.2em] text-[#706C64]">
              <time dateTime={essay.date}>{essay.displayDate}</time>
              <span className="hidden md:block">|</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {essay.readTime}</span>
            </div>
          </div>

          <h1 className="font-[Fraunces] text-5xl sm:text-7xl lg:text-[6rem] font-normal tracking-tight leading-[0.95] text-[#0F0E0C] mb-12 text-center md:text-left">
            {essay.title}
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-4 border-b border-[#0F0E0C]/10 pb-8 mb-16">
            <div className="w-12 h-12 rounded-full border border-[#0F0E0C] flex items-center justify-center font-[Fraunces] text-lg bg-[#0F0E0C] text-[#FAF8F5]">
              FM
            </div>
            <div className="text-center md:text-left">
              <span className="font-[Inter] text-sm font-medium text-[#0F0E0C] block uppercase tracking-wider">{essay.author}</span>
              <span className="font-[Inter] text-xs text-[#706C64] italic">Diretoria de Produto & Infraestrutura</span>
            </div>
          </div>
        </motion.div>

        <motion.article initial="hidden" animate="visible" variants={fadeUp} className="relative">
          
          <figure className="mb-16">
            <img 
              src={essay.image} 
              alt="Ambiente de trabalho corporativo moderno com múltiplos gráficos e telas mostrando fragmentação de dados" 
              className="w-full h-[60vh] object-cover rounded-sm grayscale-[20%] contrast-125"
            />
            <figcaption className="mt-4 text-right font-[Inter] text-xs text-[#706C64] italic border-b border-[#0F0E0C]/10 pb-4">
              O labirinto de ferramentas desconectadas nas corporações modernas.
            </figcaption>
          </figure>

          <div className="space-y-8 text-justify">
            <p className="font-[Inter] text-xl sm:text-2xl font-light text-[#2A2824] leading-relaxed tracking-tight first-letter:text-[7rem] first-letter:font-[Fraunces] first-letter:font-normal first-letter:text-[#0F0E0C] first-letter:float-left first-letter:leading-[0.8] first-letter:mr-6 first-letter:mt-2">
              O ecossistema corporativo contemporâneo sofre de uma patologia invisível e corrosiva: a fragmentação extrema. As empresas modernas acumulam dezenas de assinaturas de software desconectadas — um aplicativo para tarefas, outro para planilhas, um terceiro para comunicação em tempo real e dezenas de ferramentas isoladas.
            </p>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              Essa proliferação de silos digitais prometia agilidade absoluta, mas entregou exatamente o oposto. Cada departamento opera em sua própria ilha tecnológica, gerando barreiras invisíveis para a circulação da informação e destruindo o alinhamento estratégico da companhia.
            </p>

            <h2 className="font-[Fraunces] text-3xl sm:text-4xl text-[#0F0E0C] mt-16 mb-8 border-t border-[#0F0E0C]/10 pt-8">
              O Custo Oculto do Ruído Operacional
            </h2>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              O resultado operacional dessa dispersão é o ruído constante, a duplicação desenfreada de dados, o atrito cognitivo de múltiplos logins e a completa perda de contexto institucional. Conforme discutido no ensaio sobre <Link href="/blog/construcao-de-software-como-catedrais" className="underline decoration-[#8C7355] underline-offset-4 hover:text-[#8C7355] transition-colors">a construção de software como catedrais</Link>, a ausência de fundações sólidas atrai o caos.
            </p>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              As equipes perdem horas semanais preciosas apenas tentando localizar onde a informação real reside, cruzando dados manualmente entre planilhas e e-mails corporativos.
            </p>

            <div className="py-12 my-12 border-y border-[#0F0E0C]/20 bg-[#F5F2EB]/50 px-8 rounded-sm">
              <p className="font-[Fraunces] text-2xl sm:text-3xl text-[#0F0E0C] italic font-light leading-snug text-center">
                "A resposta para o caos não é adicionar mais uma integração frágil, mas sim resgatar a premissa de um sistema operacional unificado."
              </p>
            </div>

            <h3 className="font-[Inter] text-2xl text-[#0F0E0C] mt-12 mb-6 font-medium">A Ilusão das Integrações Superficiais</h3>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              Muitas empresas tentam solucionar o problema remendando APIs e webhooks de terceiros. O resultado costuma ser uma colcha de retalhos frágil, onde qualquer atualização em uma ponta quebra fluxos inteiros na outra. A verdadeira governança exige coesão nativa.
            </p>

            <figure className="my-16">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
                alt="Equipe colaborando em harmonia dentro de um ambiente centralizado" 
                className="w-full h-[400px] object-cover rounded-sm grayscale contrast-125"
              />
              <figcaption className="mt-4 text-left font-[Inter] text-xs text-[#706C64] italic">
                Colaboração estruturada e sem ruídos em um ecossistema unificado.
              </figcaption>
            </figure>

            <h2 className="font-[Fraunces] text-3xl sm:text-4xl text-[#0F0E0C] mt-16 mb-8 border-t border-[#0F0E0C]/10 pt-8">
              O Retorno ao Sistema Operacional Unificado
            </h2>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              A única saída sustentável para o excesso de complexidade corporativa é a consolidação em plataformas de alta coesão. Uma fundação onde os dados fluem organicamente entre módulos integrados de planejamento, tarefas e governança.
            </p>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              É exatamente para preencher essa lacuna que desenvolvemos o <Link href="/atlas" className="underline decoration-[#8C7355] underline-offset-4 hover:text-[#8C7355] transition-colors">Atlas OS</Link>. Ao unificar a operação sob uma única interface erguida para durar décadas, eliminamos o atrito administrativo e permitimos que o software volte a ser um facilitador silencioso da estratégia.
            </p>
          </div>
        </motion.article>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-32 pt-12 border-t-4 border-[#0F0E0C] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <span className="font-[Inter] text-[10px] uppercase tracking-[0.3em] text-[#0F0E0C] font-medium block mb-2">
              Próxima Leitura
            </span>
            <Link href="/blog/soberania-de-dados-e-memoria-institucional" className="font-[Fraunces] text-2xl text-[#0F0E0C] hover:text-[#8C7355] transition-colors">
              Soberania de Dados e Memória Institucional
            </Link>
          </div>
          <Link
            href="/blog"
            className="shrink-0 inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#0F0E0C] text-[#0F0E0C] font-[Inter] text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#0F0E0C] hover:text-[#FAF8F5] transition-colors duration-500"
          >
            Ver Acervo
          </Link>
        </motion.div>
      </main>
    </div>
  );
}