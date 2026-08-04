import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown, Component } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
        scrolled ? "pt-4" : "pt-6"
      }`}
    >
      <div
        className={`w-full max-w-5xl mx-4 transition-all duration-500 rounded-full border backdrop-blur-2xl ${
          scrolled
            ? "bg-black border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2.5 px-6"
            : "bg-transparent border-transparent py-3 px-4"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/TopLogo.png" alt="" className="h-4 hover:opacity-50 transition-all duration-500 ease"/>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className={`flex items-center gap-1 text-[12px] font-medium tracking-wide transition-colors cursor-pointer ${
                  location.pathname.startsWith("/atlas") ||
                  location.pathname.startsWith("/products")
                    ? "text-white"
                    : "text-[#86868B] hover:text-white"
                }`}
              >
                Plataforma
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 rounded-2xl bg-[#1D1D1F]/90 border border-white/10 backdrop-blur-3xl shadow-2xl p-2 z-50"
                  >
                    <Link
                      to="/atlas"
                      onClick={() => setProductsOpen(false)}
                      className="block p-3 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="font-medium text-[13px] text-white group-hover:text-[#D4AF37] transition-colors">
                        Atlas OS
                      </div>
                      <p className="text-[11px] text-[#86868B] mt-1 font-light tracking-wide">
                        Sistema Operacional Empresarial
                      </p>
                    </Link>
                    <div className="my-1 border-t border-white/5" />
                    <Link
                      to="/products"
                      onClick={() => setProductsOpen(false)}
                      className="block p-3 rounded-xl hover:bg-white/10 text-[12px] text-[#86868B] hover:text-white transition-colors"
                    >
                      Módulos de Infraestrutura &rarr;
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/engineering"
              className={`text-[12px] font-medium tracking-wide transition-colors ${
                location.pathname === "/engineering"
                  ? "text-white"
                  : "text-[#86868B] hover:text-white"
              }`}
            >
              Engenharia
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                onClick={() => setCompanyOpen(!companyOpen)}
                className={`flex items-center gap-1 text-[12px] font-medium tracking-wide transition-colors cursor-pointer ${
                  location.pathname === "/company" ||
                  location.pathname === "/manifesto"
                    ? "text-white"
                    : "text-[#86868B] hover:text-white"
                }`}
              >
                Instituição
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>

              <AnimatePresence>
                {companyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-52 rounded-2xl bg-[#1D1D1F]/90 border border-white/10 backdrop-blur-3xl shadow-2xl p-2 z-50"
                  >
                    <Link
                      to="/company"
                      onClick={() => setCompanyOpen(false)}
                      className="block p-3 rounded-xl hover:bg-white/10 text-[12px] tracking-wide text-white transition-colors"
                    >
                      Nossa Instituição
                    </Link>
                    <Link
                      to="/manifesto"
                      onClick={() => setCompanyOpen(false)}
                      className="block p-3 rounded-xl hover:bg-white/10 text-[12px] tracking-wide text-white transition-colors"
                    >
                      O Manifesto
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/blog"
              className={`text-[12px] font-medium tracking-wide transition-colors ${
                location.pathname === "/blog"
                  ? "text-white"
                  : "text-[#86868B] hover:text-white"
              }`}
            >
              Discursos
            </Link>

            <Link
              to="/contact"
              className={`text-[12px] font-medium tracking-wide transition-colors ${
                location.pathname === "/contact"
                  ? "text-white"
                  : "text-[#86868B] hover:text-white"
              }`}
            >
              Contato
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Button
              onClick={() => setMobileMenuOpen(false)}
              className="group relative w-full flex items-center justify-between px-6 py-2 bg-white text-black rounded-full overflow-hidden transition-all duration-300"
            >
              <a
                href="https://atlas.fifteenmiles.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[12px] font-semibold tracking-widest uppercase">
                  Explore Atlas
                </span>
              </a>
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#F5F5F7] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 mx-4 mt-2 p-6 rounded-3xl bg-[#1D1D1F]/90 border border-white/10 shadow-2xl backdrop-blur-3xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              <Link
                to="/atlas"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl hover:bg-white/10 text-[14px] font-medium text-white tracking-wide"
              >
                Atlas OS
              </Link>
              <Link
                to="/engineering"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl hover:bg-white/10 text-[14px] font-medium text-white tracking-wide"
              >
                Engenharia
              </Link>
              <Link
                to="/company"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl hover:bg-white/10 text-[14px] font-medium text-white tracking-wide"
              >
                Instituição
              </Link>
              <Link
                to="/manifesto"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl hover:bg-white/10 text-[14px] font-medium text-white tracking-wide"
              >
                Manifesto
              </Link>
              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl hover:bg-white/10 text-[14px] font-medium text-white tracking-wide"
              >
                Discursos
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl hover:bg-white/10 text-[14px] font-medium text-white tracking-wide"
              >
                Contato
              </Link>

              <div className="pt-4 mt-2 border-t border-white/10">
                <a
                  href="https://atlas.fifteenmiles.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="group w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white text-black text-[12px] font-semibold tracking-wide transition-transform hover:scale-[1.02]"
                >
                  Explore Atlas
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};