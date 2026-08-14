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

export default function AConstrucaoDeSoftwareComoCatedrais() {
  const essay = {
    title: "A Construção de Software como Catedrais",
    date: "2026-08-14",
    displayDate: "14 de Agosto de 2026",
    tag: "Engenharia",
    readTime: "6 min de leitura",
    author: "Nathanael Secundo Cardoso",
    description: "Como a disciplina de engenharia e o planejamento de longo prazo evitam a ruína digital de sistemas corporativos.",
    image: "https://images.unsplash.com/photo-1471624257787-362e0c864ab2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "construcao-de-software-como-catedrais"
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": essay.title,
    "image": [essay.image],
    "datePublished": essay.date,
    "dateModified": essay.date,
    "author": [{
      "@type": "Person",
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
      
      {/* Textura de fundo sutil inspirada em papel de jornal */}
      
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
              NS
            </div>
            <div className="text-center md:text-left">
              <span className="font-[Inter] text-sm font-medium text-[#0F0E0C] block uppercase tracking-wider">{essay.author}</span>
              <span className="font-[Inter] text-xs text-[#706C64] italic">Diretoria de Engenharia & Arquitetura</span>
            </div>
          </div>
        </motion.div>

        <motion.article initial="hidden" animate="visible" variants={fadeUp} className="relative">
          
          <figure className="mb-16">
            <img 
              src={essay.image} 
              alt="Teto abobadado de uma catedral gótica, demonstrando engenharia complexa e duradoura" 
              className="w-full h-[60vh] object-cover rounded-sm grayscale-[20%] contrast-125"
            />
            <figcaption className="mt-4 text-right font-[Inter] text-xs text-[#706C64] italic border-b border-[#0F0E0C]/10 pb-4">
              A permanência exige fundações que desafiem o tempo. Arquitetura gótica medieval.
            </figcaption>
          </figure>

          <div className="space-y-8 text-justify">
            <p className="font-[Inter] text-xl sm:text-2xl font-light text-[#2A2824] leading-relaxed tracking-tight first-letter:text-[7rem] first-letter:font-[Fraunces] first-letter:font-normal first-letter:text-[#0F0E0C] first-letter:float-left first-letter:leading-[0.8] first-letter:mr-6 first-letter:mt-2">
              As grandes catedrais da Europa medieval não foram construídas para durar uma década; foram concebidas com a convicção de que sua finalidade transcendia a vida de seus próprios arquitetos. Cada bloco de pedra era assentado com precisão matemática, antecipando séculos de intempéries, guerras e mudanças estruturais.
            </p>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              Havia uma reverência pelo longo prazo que ditava cada decisão arquitetônica. O pedreiro que esculpia uma gárgula no telhado de Notre-Dame sabia que, muito provavelmente, não viveria para ver a obra concluída. Ele não trabalhava para o trimestre; ele trabalhava para a eternidade.
            </p>

            <h2 className="font-[Fraunces] text-3xl sm:text-4xl text-[#0F0E0C] mt-16 mb-8 border-t border-[#0F0E0C]/10 pt-8">
              A Cultura do Efêmero no Software
            </h2>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              Na engenharia de software moderna, infelizmente, cultivou-se a cultura do efêmero. O conceito de "Produto Mínimo Viável" (MVP) foi metodologicamente corrompido para "Arquitetura Mínima Viável". Sistemas são erguidos com pressa extrema, tratados como infraestrutura descartável e, frequentemente, reescritos a cada mudança de ciclo de mercado ou modismo tecnológico.
            </p>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              Conforme abordado em nosso artigo sobre <Link href="/blog/o-fim-da-era-dos-aplicativos-fragmentados" className="underline decoration-[#8C7355] underline-offset-4 hover:text-[#8C7355] transition-colors">o fim da era dos aplicativos fragmentados</Link>, essa fragilidade cobra um preço altíssimo. Startups e grandes corporações tornam-se reféns de bases de código instáveis, onde a adição de uma simples funcionalidade exige malabarismos técnicos arriscados.
            </p>

            <div className="py-12 my-12 border-y border-[#0F0E0C]/20 bg-[#F5F2EB]/50 px-8 rounded-sm">
              <p className="font-[Fraunces] text-2xl sm:text-3xl text-[#0F0E0C] italic font-light leading-snug text-center">
                "O custo inicial do rigor arquitetural transforma-se em longevidade operacional. A disciplina de hoje é a estabilidade da próxima década."
              </p>
            </div>

            <h3 className="font-[Inter] text-2xl text-[#0F0E0C] mt-12 mb-6 font-medium">O Peso da Dívida Técnica</h3>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              O resultado desse imediatismo é um ecossistema corporativo frágil, repleto de dívida técnica crônica. As equipes passam mais tempo apagando incêndios estruturais e consertando regressões do que, de fato, inovando. A manutenção torna-se um buraco negro de recursos financeiros e cognitivos.
            </p>

            <figure className="my-16">
              <img 
                src="https://images.unsplash.com/photo-1713891945510-c1a89654042f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Detalhe de alvenaria e engenharia de suporte estrutural" 
                className="w-full h-[400px] object-cover rounded-sm grayscale contrast-125"
              />
              <figcaption className="mt-4 text-left font-[Inter] text-xs text-[#706C64] italic">
                A sustentação de sistemas complexos requer bases sólidas, não remendos provisórios.
              </figcaption>
            </figure>

            <h2 className="font-[Fraunces] text-3xl sm:text-4xl text-[#0F0E0C] mt-16 mb-8 border-t border-[#0F0E0C]/10 pt-8">
              Engenharia Duradoura e o Atlas OS
            </h2>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              Construir software como catedrais exige uma mudança radical de postura. Significa priorizar a robustez, tipagem estrita e o isolamento de domínios sobre a velocidade cega. Significa favorecer a clareza arquitetural sobre a complexidade acidental, e a permanência estrutural sobre a conveniência de um final de semana de código.
            </p>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              O <Link href="/atlas" className="underline decoration-[#8C7355] underline-offset-4 hover:text-[#8C7355] transition-colors">Atlas OS</Link> foi arquitetado exatamente sob essa premissa. Não estamos apenas entregando uma interface bonita para o próximo trimestre. Estamos erguendo uma fundação de dados e processos que suportará o peso das operações das maiores empresas pelos próximos vinte anos.
            </p>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              Quando tratamos o código corporativo como patrimônio institucional, as decisões mudam. A verdadeira essência da engenharia é garantir que, muito tempo depois de termos escrito a última linha de código, o sistema continue de pé, operando de maneira inabalável e silenciosa.
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
            <Link href="/blog/o-fim-da-era-dos-aplicativos-fragmentados" className="font-[Fraunces] text-2xl text-[#0F0E0C] hover:text-[#8C7355] transition-colors">
              O Fim da Era dos Aplicativos Fragmentados
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