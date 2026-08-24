'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -8, height: 0 },
  visible: { 
    opacity: 1, 
    y: 0, 
    height: "auto",
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
  },
  exit: { 
    opacity: 0, 
    y: -8, 
    height: 0,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
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
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

const mobileContainerVariants: Variants = {
  hidden: { opacity: 0, clipPath: "circle(0% at 100% 0%)" },
  visible: { 
    opacity: 1, 
    clipPath: "circle(150% at 100% 0%)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.06, delayChildren: 0.1 }
  },
  exit: { 
    opacity: 0, 
    clipPath: "circle(0% at 100% 0%)",
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  }
};

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, y: 20, x: -10 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
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
      {
        title: "Recursos",
        links: [
          { title: "Documentação", desc: "Manuais e especificações técnicas", href: "/docs" },
          { title: "Roadmap", desc: "Visão de longo prazo da plataforma", href: "/roadmap" }
        ]
      },
      {
        title: "Conectividade",
        links: [
          { title: "APIs & Integrações", desc: "Conecte sistemas externos", href: "/apis" },
          { title: "Ambiente Cloud", desc: "Alta disponibilidade global", href: "/cloud" }
        ]
      }
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
          { title: "Notas Oficiais", desc: "Comunicados institucionais", href: "/newsroom" },
          { title: "Clientes", desc: "Eles usaram e permaneceram", href: "/clients" }
        ]
      },
      {
        title: "Comunicação",
        links: [
          { title: "Contato Direto", desc: "Diálogo executivo e parcerias", href: "/contact" },
          { title: "Changelog", desc: "Mudanças registradas", href: "/changelog" }
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030303] text-white border-b border-white/[0.08]" onMouseLeave={() => setActiveMenu(null)}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Image src="/TopLogo.png" alt="Fifteen Miles" width={160} height={22} priority className="h-5 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" />
        </Link>

        <nav className="hidden lg:flex items-center h-full">
          {MAIN_NAV_ITEMS.map((item) => (
            <div key={item.id} className="h-full flex items-center" onMouseEnter={() => setActiveMenu(item.id)}>
              <button className="h-full px-5 flex items-center gap-1.5 text-[11px] font-[JetBrains_Mono] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors relative">
                <span>{item.label}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMenu === item.id ? "rotate-180 text-white" : "text-white/40"}`} />
                {activeMenu === item.id && (
                  <motion.div layoutId="activeNavIndicator" className="absolute bottom-0 left-5 right-5 h-[2px] bg-white" />
                )}
              </button>
            </div>
          ))}
          
          {SIMPLE_NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="px-5 text-[11px] font-[JetBrains_Mono] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a 
            href="https://atlas.fifteenmiles.tech" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-regular text-[11px] font-[JetBrains_Mono] hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <span>Atlas OS</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
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
            className="hidden lg:block absolute left-0 right-0 bg-[#030303] border-b border-white/[0.08] shadow-2xl overflow-hidden"
          >
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-5 gap-8"
            >
              {activeMenuData.columns.map((col) => (
                <motion.div key={col.title} variants={itemParallaxVariants} className="space-y-6">
                  <h4 className="font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.25em] text-white/40">{col.title}</h4>
                  <ul className="space-y-4">
                    {col.links.map((link) => (
                      <MegaLink key={link.href} title={link.title} desc={link.desc} href={link.href} />
                    ))}
                  </ul>
                </motion.div>
              ))}

              <motion.div variants={itemParallaxVariants} className="rounded-[24px] border border-white/[0.08] bg-[#050505] p-6 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />
                <div className="relative z-10 space-y-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] font-[JetBrains_Mono] text-[9px] uppercase tracking-widest text-white/70">
                    {activeMenuData.highlight.icon && <activeMenuData.highlight.icon className="w-3 h-3" />}
                    {activeMenuData.highlight.tag}
                  </span>
                  <h5 className="font-[Inter] text-lg font-medium text-white">{activeMenuData.highlight.title}</h5>
                  <p className="font-[Inter] text-xs font-light text-white/50 leading-relaxed">
                    {activeMenuData.highlight.desc}
                  </p>
                </div>
                <div className="relative z-10 pt-4 mt-4 border-t border-white/[0.05]">
                  <Link href={activeMenuData.highlight.href} className="inline-flex items-center gap-2 font-[JetBrains_Mono] text-xs uppercase tracking-widest text-white hover:text-white/70 transition-colors">
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
            className="lg:hidden fixed inset-0 top-16 bg-[#030303] z-50 p-8 overflow-y-auto flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6">
              <motion.span variants={mobileItemVariants} className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 pb-2 border-b border-white/[0.08]">Navegação Principal</motion.span>
              <div className="grid gap-3">
                {MOBILE_LINKS.map((link) => (
                  <motion.div key={link.href} variants={mobileItemVariants}>
                    <MobileLink href={link.href} label={link.label} sub={link.sub} onClick={() => setMobileMenuOpen(false)} />
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div variants={mobileItemVariants} className="pt-6 mt-6 border-t border-white/[0.08]">
              <a 
                href="https://atlas.fifteenmiles.tech" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between w-full p-4 rounded-2xl bg-white text-black font-semibold text-xs font-[JetBrains_Mono] uppercase tracking-widest shadow-lg"
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
      <span className="font-[Inter] text-sm font-medium text-white group-hover:text-white/70 transition-colors block mb-0.5">{title}</span>
      <span className="font-[Inter] text-[11px] font-light text-white/40 group-hover:text-white/50 transition-colors block">{desc}</span>
    </Link>
  </li>
);

const MobileLink = ({ href, label, sub, onClick }: { href: string; label: string; sub: string; onClick: () => void }) => (
  <Link href={href} onClick={onClick} className="group block p-3.5 rounded-2xl bg-[#050505] border border-white/[0.06] hover:border-white/20 transition-all">
    <div className="flex items-center justify-between">
      <span className="font-[Inter] text-base font-medium text-white group-hover:text-white/80 transition-colors">{label}</span>
      <ArrowRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-transform" />
    </div>
    <span className="font-[Inter] text-[11px] font-light text-white/40 mt-0.5 block">{sub}</span>
  </Link>
);