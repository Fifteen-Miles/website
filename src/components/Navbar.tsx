'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from "../components/LazyImage";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white border-b border-white/10 backdrop-blur-md selection:bg-white/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <LazyImage src="/TopLogo.png" alt="Fifteen Miles" className="h-5 brightness-0 invert" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center h-full">
          {[
            { id: "platform", label: "Plataforma" },
            { id: "company", label: "Instituição" }
          ].map((item) => (
            <button
              key={item.id}
              className="h-full px-6 flex items-center gap-1.5 text-[12px] uppercase tracking-[0.1em] text-white/70 hover:text-white transition-colors"
              onMouseEnter={() => setActiveMenu(item.id)}
            >
              {item.label}
              <ChevronDown className={`w-3 h-3 transition-transform ${activeMenu === item.id ? "rotate-180" : ""}`} />
            </button>
          ))}
          
          <Link href="/engineering" className="px-6 text-[12px] uppercase tracking-[0.1em] text-white/70 hover:text-white transition-colors">Engenharia</Link>
          <Link href="/blog" className="px-6 text-[12px] uppercase tracking-[0.1em] text-white/70 hover:text-white transition-colors">Discursos</Link>
          <Link href="/contact" className="px-6 text-[12px] uppercase tracking-[0.1em] text-white/70 hover:text-white transition-colors">Contato</Link>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <a href="https://atlas.fifteenmiles.tech" className="text-[12px] uppercase tracking-[0.1em] text-white hover:text-white/70 transition-colors">
            Explore Atlas
          </a>
        </div>

        {/* Mobile Trigger */}
        <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            onMouseLeave={() => setActiveMenu(null)}
            className="hidden lg:block absolute left-0 right-0 bg-black border-b border-white/10"
          >
            <div className="max-w-5xl mx-auto px-6 py-16 flex gap-16">
              {/* Highlight Card */}
              <div className="w-[320px] border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium mb-2 uppercase tracking-widest text-white/50">
                    {activeMenu === "platform" ? "Plataforma" : "Sobre Nós"}
                  </h3>
                  <p className="text-xl leading-tight">
                    {activeMenu === "platform" 
                      ? "Atlas OS: O sistema operacional corporativo."
                      : "Fifteen Miles: Rigor, permanência e tecnologia."}
                  </p>
                </div>
                <Link href={activeMenu === "platform" ? "/atlas" : "/company"} className="flex items-center gap-2 mt-8 text-sm text-white/70 hover:text-white">
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Links */}
              <div className="flex-1 grid grid-cols-2 gap-8">
                {activeMenu === "platform" ? (
                  <>
                    <MenuColumn title="Módulos" links={[{t: "Atlas OS", l: "/atlas"}, {t: "Catálogo", l: "/products"}]} />
                    <MenuColumn title="Engenharia" links={[{t: "Arquitetura", l: "/engineering"}, {t: "Segurança", l: "/engineering#security"}]} />
                  </>
                ) : (
                  <>
                    <MenuColumn title="Empresa" links={[{t: "Nossa História", l: "/company"}, {t: "Manifesto", l: "/manifesto"}]} />
                    <MenuColumn title="Comunicação" links={[{t: "Blog", l: "/blog"}, {t: "Contato", l: "/contact"}]} />
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="lg:hidden absolute top-16 left-0 w-full bg-black h-screen p-8"
          >
            <div className="flex flex-col gap-8 text-2xl font-light">
              <Link href="/atlas" onClick={() => setMobileMenuOpen(false)}>Plataforma</Link>
              <Link href="/engineering" onClick={() => setMobileMenuOpen(false)}>Engenharia</Link>
              <Link href="/company" onClick={() => setMobileMenuOpen(false)}>Instituição</Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>Discursos</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contato</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const MenuColumn = ({ title, links }: { title: string, links: {t: string, l: string}[] }) => (
  <div>
    <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-6">{title}</h4>
    <ul className="space-y-4">
      {links.map((link, idx) => (
        <li key={`${link.l}-${idx}`}>
          <Link href={link.l} className="text-md hover:text-white/60 transition-colors">{link.t}</Link>
        </li>
      ))}
    </ul>
  </div>
);