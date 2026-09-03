"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence, type Variants, cubicBezier } from "framer-motion";
import Image from "next/image";

const EASE = cubicBezier(0.16, 1, 0.3, 1);

const FONT_BLACK = `'UnifrakturMaguntia', serif`;
const FONT_HEADING = `'Coolvetica', 'Helvetica Neue', sans-serif`;
const FONT_DISPLAY = `'Fraunces', serif`;
const FONT_EYEBROW = `'Cinzel', serif`;
const FONT_MONO = `'JetBrains Mono', monospace`;

const INK = "#1C1710";
const WINE = "#5C0000";
const PARCHMENT = "#FAF7F0";

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -8, height: 0 },
  visible: { 
    opacity: 1, 
    y: 0, 
    height: "auto",
    transition: { duration: 0.45, ease: EASE }
  },
  exit: { 
    opacity: 0, 
    y: -8, 
    height: 0,
    transition: { duration: 0.25, ease: EASE }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.08 }
  }
};

const itemParallaxVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE } 
  }
};

const mobileContainerVariants: Variants = {
  hidden: { opacity: 0, clipPath: "circle(0% at 100% 0%)" },
  visible: { 
    opacity: 1, 
    clipPath: "circle(150% at 100% 0%)",
    transition: { duration: 0.6, ease: EASE, staggerChildren: 0.06, delayChildren: 0.1 }
  },
  exit: { 
    opacity: 0, 
    clipPath: "circle(0% at 100% 0%)",
    transition: { duration: 0.4, ease: EASE }
  }
};

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, y: 20, x: -10 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.4, ease: EASE } }
};

const MAIN_NAV_ITEMS = [
  { id: "platform", label: "Plataformas" },
  { id: "company", label: "Instituição" }
];

const SIMPLE_NAV_LINKS = [
  { href: "/engineering", label: "Engenharia" },
  { href: "/blog", label: "Discursos" },
  { href: "/contact", label: "Contato" }
];

const MEGA_MENU_DATA: Record<string, {
  columns: { title: string; links: { title: string; desc: string; href: string }[] }[];
  highlight: { tag: string; title: string; desc: string; href: string; cta: string; icon: React.ElementType };
}> = {
  platform: {
    columns: [
      {
        title: "Core & Sistema",
        links: [
          { title: "Atlas OS", desc: "Sistema operacional corporativo unificado", href: "/atlas" },
          { title: "Catálogo Geral", desc: "Módulos e ecossistema integrado", href: "/products" }
        ]
      },
      {
        title: "Infraestrutura",
        links: [
          { title: "Engenharia", desc: "Padrões arquiteturais perenes", href: "/engineering" },
          { title: "Soberania de Dados", desc: "Segurança de alto nível corporativo", href: "/security" }
        ]
      },
     // {
      //  title: "Recursos",
       // links: [
       //   { title: "Documentação", desc: "Manuais e especificações técnicas", href: "/docs" },
      //    { title: "Roadmap", desc: "Visão de longo prazo da plataforma", href: "/roadmap" }
     //   ]
     // },
      //{
       //} title: "Conectividade",
        //links: [
          //{ title: "APIs & Integrações", desc: "Conecte sistemas externos", href: "/apis" },
          //{ title: "Ambiente Cloud", desc: "Alta disponibilidade global", href: "/cloud" }
        //]
       //}
    ],
    highlight: {
      tag: "Lançamento MMXXVI",
      title: "Atlas OS",
      desc: "Explore o novo ecossistema unificado para operações corporativas de alta escala.",
      href: "/atlas",
      cta: "Saiba mais",
      icon: Sparkles
    }
  },
  company: {
    columns: [
      {
        title: "A Instituição",
        links: [
          { title: "Nossa História", desc: "Visão, origem e premissas", href: "/company" },
          { title: "Manifesto", desc: "Princípios imutáveis corporativos", href: "/manifesto" },
          { title: "Linha do Tempo", desc: "Tudo que aconteceu na nossa história.", href: "/timeline" }
        ]
      },
      {
        title: "Carreira & Ordem",
        links: [
          { title: "Recrutamento", desc: "Oportunidades e vagas abertas", href: "/careers" },
          { title: "Cultura", desc: "Excelência e rigor técnico", href: "/culture" },
          { title: "Time", desc: "Quem constrói essa história.", href: "/team" }
        ]
      },
      {
        title: "Imprensa & Editorial",
        links: [
          { title: "Acervo Editorial", desc: "Discursos e ensaios técnicos", href: "/blog" },
          //{ title: "Notas Oficiais", desc: "Comunicados institucionais", href: "/newsroom" },
          { title: "Clientes", desc: "Eles usaram e permaneceram", href: "/clients" }
        ]
      },
      {
        title: "Comunicação",
        links: [
          { title: "Contato Direto", desc: "Diálogo executivo e parcerias", href: "/contact" },
          //{ title: "Changelog", desc: "Mudanças registradas", href: "/changelog" }
        ]
      }
    ],
    highlight: {
      tag: "Acervo Oficial",
      title: "Discursos Institucionais",
      desc: "Reflexões profundas sobre arquitetura de software e governança corporativa.",
      href: "/blog",
      cta: "Ler ensaios",
      icon: Sparkles
    }
  }
};

const MOBILE_LINKS = [
  { href: "/atlas", label: "Atlas OS", sub: "Sistema operacional corporativo" },
  { href: "/engineering", label: "Engenharia", sub: "Padrões arquiteturais e código" },
  { href: "/company", label: "Instituição", sub: "Nossa história e manifesto" },
  { href: "/careers", label: "Carreiras", sub: "Recrutamento e oportunidades" },
  { href: "/blog", label: "Discursos", sub: "Artigos e notas técnicas" },
  { href: "/contact", label: "Contato", sub: "Canais diretos de diálogo" }
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  const activeMenuData = activeMenu ? MEGA_MENU_DATA[activeMenu] : null;

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300"
      style={{ background: PARCHMENT, borderColor: "rgba(92,0,0,0.18)", color: INK }}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-[1500px] mx-auto px-6 sm:px-14 h-12 flex items-center justify-between">
        <Link href="/" className="flex items-center group py-2">
          <Image 
            src="/TopLogo.png" 
            alt="Fifteen Miles" 
            width={160} 
            height={22} 
            priority 
            className="h-5 w-auto opacity-100 group-hover:opacity-70 transition-opacity" 
          />
        </Link>

        <nav className="hidden lg:flex items-center h-full">
          {MAIN_NAV_ITEMS.map((item) => (
            <div key={item.id} className="h-full flex items-center px-4" onMouseEnter={() => setActiveMenu(item.id)}>
              <button 
                className="h-full flex items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] transition-colors relative"
                style={{ fontFamily: FONT_EYEBROW, color: activeMenu === item.id ? WINE : "rgba(28,23,16,0.75)", fontWeight: 600 }}
              >
                <span>{item.label}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMenu === item.id ? "rotate-180" : "opacity-50"}`} />
                {activeMenu === item.id && (
                  <motion.div layoutId="activeNavIndicator" className="absolute bottom-3 left-0 right-0 h-[2px]" style={{ background: WINE }} />
                )}
              </button>
            </div>
          ))}
          
          {SIMPLE_NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="px-4 text-[11px] uppercase tracking-[0.25em] transition-colors hover:text-[#5C0000]"
              style={{ fontFamily: FONT_EYEBROW, color: "rgba(28,23,16,0.75)", fontWeight: 600 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a 
            href="/atlas" 
            className="inline-flex items-center gap-2.5 px-5 py-1.5 bg-[#590C0D] text-white border font-raleway rounded-md text-[11px] tracking-[0.18em] uppercase transition-all duration-200 hover:bg-white hover:text-[#590C0D]"
          >
            <span>Atlas OS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <button
          className="lg:hidden p-2.5 rounded-md transition-colors"
          style={{ color: WINE, border: "1px solid rgba(92,0,0,0.25)", background: "rgba(92,0,0,0.04)" }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu Principal"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {activeMenuData && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="hidden lg:block absolute left-0 right-0 border-b shadow-2xl overflow-hidden"
            style={{ background: PARCHMENT, borderColor: "rgba(92,0,0,0.18)" }}
          >
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-[1500px] mx-auto px-14 py-12 grid grid-cols-5 gap-10"
            >
              {activeMenuData.columns.map((col) => (
                <motion.div key={col.title} variants={itemParallaxVariants} className="space-y-6">
                  <h4 className="text-[10px] uppercase tracking-[0.28em]" style={{ fontFamily: FONT_EYEBROW, color: WINE, fontWeight: 700 }}>{col.title}</h4>
                  <ul className="space-y-4">
                    {col.links.map((link) => (
                      <MegaLink key={link.href} title={link.title} desc={link.desc} href={link.href} />
                    ))}
                  </ul>
                </motion.div>
              ))}

              <motion.div variants={itemParallaxVariants} className="rounded-[8px] border p-7 flex flex-col justify-between relative overflow-hidden group shadow-sm" style={{ borderColor: "rgba(92,0,0,0.2)", background: "#fff" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#5C0000]/[0.03] via-transparent to-transparent pointer-events-none" />
                <div className="relative z-10 space-y-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[9px] uppercase tracking-widest" style={{ borderColor: "rgba(92,0,0,0.2)", color: WINE, fontFamily: FONT_MONO, background: "rgba(92,0,0,0.04)" }}>
                    {activeMenuData.highlight.icon && <activeMenuData.highlight.icon className="w-3 h-3" />}
                    {activeMenuData.highlight.tag}
                  </span>
                  <h5 className="text-lg font-medium" style={{ fontFamily: FONT_DISPLAY, color: INK }}>{activeMenuData.highlight.title}</h5>
                  <p className="text-xs font-light leading-relaxed" style={{ color: "rgba(28,23,16,0.65)", fontFamily: FONT_HEADING }}>
                    {activeMenuData.highlight.desc}
                  </p>
                </div>
                <div className="relative z-10 pt-4 mt-4 border-t" style={{ borderColor: "rgba(92,0,0,0.1)" }}>
                  <Link href={activeMenuData.highlight.href} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest transition-colors hover:opacity-75" style={{ color: WINE, fontFamily: FONT_MONO, fontWeight: 600 }}>
                    <span>{activeMenuData.highlight.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-menu"
            variants={mobileContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed inset-0 top-20 z-50 p-6 sm:p-10 overflow-y-auto flex flex-col justify-between shadow-2xl"
            style={{ background: PARCHMENT, color: INK }}
          >
            <div className="flex flex-col gap-6">
              <motion.span variants={mobileItemVariants} className="text-[10px] tracking-[0.3em] uppercase pb-3 border-b" style={{ fontFamily: FONT_EYEBROW, color: WINE, borderColor: "rgba(92,0,0,0.2)", fontWeight: 700 }}>
                Navegação Institucional
              </motion.span>
              <div className="grid gap-3">
                {MOBILE_LINKS.map((link) => (
                  <motion.div key={link.href} variants={mobileItemVariants}>
                    <MobileLink href={link.href} label={link.label} sub={link.sub} onClick={() => setMobileMenuOpen(false)} />
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div variants={mobileItemVariants} className="pt-6 mt-8 border-t" style={{ borderColor: "rgba(92,0,0,0.2)" }}>
              <a 
                href="https://atlas.fifteenmiles.tech" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between w-full p-4 rounded-full text-xs uppercase tracking-widest shadow-lg transition-transform hover:scale-[0.99]"
                style={{ background: WINE, color: PARCHMENT, fontFamily: FONT_MONO, fontWeight: 600 }}
              >
                <span>Acessar Atlas OS</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const MegaLink = ({ title, desc, href }: { title: string; desc: string; href: string }) => (
  <li>
    <Link href={href} className="group block">
      <span className="text-sm font-medium transition-colors block mb-0.5 group-hover:text-[#5C0000]" style={{ fontFamily: FONT_DISPLAY, color: INK }}>{title}</span>
      <span className="text-[11px] font-light transition-colors block leading-snug" style={{ color: "rgba(28,23,16,0.6)", fontFamily: FONT_HEADING }}>{desc}</span>
    </Link>
  </li>
);

const MobileLink = ({ href, label, sub, onClick }: { href: string; label: string; sub: string; onClick: () => void }) => (
  <Link href={href} onClick={onClick} className="group block p-4 rounded-[8px] bg-white border transition-all hover:border-[#5C0000]" style={{ borderColor: "rgba(92,0,0,0.15)", boxShadow: "0 4px 12px rgba(28,23,16,0.03)" }}>
    <div className="flex items-center justify-between">
      <span className="text-base font-medium transition-colors group-hover:text-[#5C0000]" style={{ fontFamily: FONT_DISPLAY, color: INK }}>{label}</span>
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: WINE }} />
    </div>
    <span className="text-[11px] font-light mt-1 block" style={{ color: "rgba(28,23,16,0.6)", fontFamily: FONT_HEADING }}>{sub}</span>
  </Link>
);