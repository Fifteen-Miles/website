import { motion, type Variants } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
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

export default function SoberaniaDeDadosEMemoriaInstitucional() {
  const { slug } = useParams<{ slug: string }>();
  const essay = {
    title: "Soberania de Dados e Memória Institucional",
    date: "2026-11-05",
    displayDate: "05 de Novembro de 2026",
    tag: "Arquitetura",
    readTime: "7 min de leitura",
    author: "Fifteen Miles Editorial",
    description: "Preservando o contexto histórico de decisões corporativas em ambientes de alta segurança e tipagem estrita.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000",
    slug: "soberania-de-dados-e-memoria-institucional"
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
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-[Inter] text-xs uppercase tracking-widest text-[#706C64] hover:text-[#0F0E0C] transition-colors mb-12 border-b border-transparent hover:border-[#0F0E0C] pb-0.5"
          >
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
              <span className="font-[Inter] text-xs text-[#706C64] italic">Diretoria de Governança & Dados</span>
            </div>
          </div>
        </motion.div>

        <motion.article
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative"
        >
          <figure className="mb-16">
            <img 
              src={essay.image} 
              alt="Servidores e infraestrutura de alta segurança representando a soberania e armazenamento de dados" 
              className="w-full h-[60vh] object-cover rounded-sm grayscale-[20%] contrast-125"
            />
            <figcaption className="mt-4 text-right font-[Inter] text-xs text-[#706C64] italic border-b border-[#0F0E0C]/10 pb-4">
              A preservação rigorosa da memória e do contexto corporativo.
            </figcaption>
          </figure>

          <div className="space-y-8 text-justify">
            <p className="font-[Inter] text-xl sm:text-2xl font-light text-[#2A2824] leading-relaxed tracking-tight first-letter:text-[7rem] first-letter:font-[Fraunces] first-letter:font-normal first-letter:text-[#0F0E0C] first-letter:float-left first-letter:leading-[0.8] first-letter:mr-6 first-letter:mt-2">
              O conhecimento acumulado por uma empresa ao longo de anos de operação constitui seu ativo mais valioso e, paradoxalmente, o mais negligenciado. No entanto, esse patrimônio imaterial é frequentemente tratado com descaso, fragmentado em chats efêmeros, e-mails perdidos e arquivos sem taxonomia clara.
            </p>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              Quando funcionários deixam a corporação, levam consigo fatias inteiras do contexto operacional. As decisões estratégicas do passado tornam-se mitos obscuros, e a organização se vê compelida a reinventar soluções para problemas que já haviam sido resolvidos anos antes.
            </p>

            <h2 className="font-[Fraunces] text-3xl sm:text-4xl text-[#0F0E0C] mt-16 mb-8 border-t border-[#0F0E0C]/10 pt-8">
              A Soberania e o Controle Institucional
            </h2>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              A soberania de dados começa pela garantia de que a memória institucional pertença inteiramente à organização, preservada em ambientes de alta segurança, tipagem rigorosa e controle cirúrgico de acesso. Conforme discutido em <Link to="/blog/construcao-de-software-como-catedrais" className="underline decoration-[#8C7355] underline-offset-4 hover:text-[#8C7355] transition-colors">a construção de software como catedrais</Link>, não se pode governar aquilo que não possui fundações estruturadas.
            </p>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              Não se trata apenas de cumplir regulamentações de armazenamento, mas de assegurar que a informação pertença à empresa e sirva de base sólida para o futuro, sem intermediários opacos ou dependência de plataformas de terceiros vulneráveis.
            </p>

            <div className="py-12 my-12 border-y border-[#0F0E0C]/20 bg-[#F5F2EB]/50 px-8 rounded-sm">
              <p className="font-[Fraunces] text-2xl sm:text-3xl text-[#0F0E0C] italic font-light leading-snug text-center">
                "A soberania começa pela garantia de que a memória institucional pertença inteiramente à organização, preservada em alta segurança."
              </p>
            </div>

            <h3 className="font-[Inter] text-2xl text-[#0F0E0C] mt-12 mb-6 font-medium">Contexto e Hierarquia contra o Ruído</h3>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              Dados isolados geram ruído operacional. Conforme explorado no ensaio sobre <Link to="/blog/o-fim-da-era-dos-aplicativos-fragmentados" className="underline decoration-[#8C7355] underline-offset-4 hover:text-[#8C7355] transition-colors">o fim da era dos aplicativos fragmentados</Link>, quando cada decisão, processo e documento possui contexto e hierarquia definidos em um sistema relacional sólido, a empresa transcende a volatilidade humana.
            </p>

            <figure className="my-16">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
                alt="Visualização abstrata de nós de dados interconectados formando uma rede segura" 
                className="w-full h-[400px] object-cover rounded-sm grayscale contrast-125"
              />
              <figcaption className="mt-4 text-left font-[Inter] text-xs text-[#706C64] italic">
                Redes de dados estruturadas que formam a inteligência duradoura de uma corporação.
              </figcaption>
            </figure>

            <h2 className="font-[Fraunces] text-3xl sm:text-4xl text-[#0F0E0C] mt-16 mb-8 border-t border-[#0F0E0C]/10 pt-8">
              O Futuro com o Atlas OS
            </h2>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              Arquiteturas orientadas à permanência asseguram que o passado operacional sirva de alicerce inabalável para o crescimento futuro. O <Link to="/atlas" className="underline decoration-[#8C7355] underline-offset-4 hover:text-[#8C7355] transition-colors">Atlas OS</Link> foi construído para blindar a instituição contra perdas de know-how, centralizando a memória institucional em um ecossistema perene e consultável.
            </p>

            <p className="font-[Inter] text-lg sm:text-xl font-light text-[#2A2824] leading-relaxed tracking-tight">
              A memória corporativa deixa de ser um fragmento disperso e passa a se consolidar como a principal vantagem competitiva de longo prazo da organização.
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
              Leitura Inicial
            </span>
            <Link to="/blog/construcao-de-software-como-catedrais" className="font-[Fraunces] text-2xl text-[#0F0E0C] hover:text-[#8C7355] transition-colors">
              A Construção de Software como Catedrais
            </Link>
          </div>
          <Link
            to="/blog"
            className="shrink-0 inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#0F0E0C] text-[#0F0E0C] font-[Inter] text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#0F0E0C] hover:text-[#FAF8F5] transition-colors duration-500"
          >
            Ver Acervo
          </Link>
        </motion.div>
      </main>
    </div>
  );
}