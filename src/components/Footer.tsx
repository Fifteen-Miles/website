import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F5F2EB] text-[#706C64] border-t border-[#8C7355]/20 pt-20 pb-12 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#8C7355]/15">
          
          {/* Brand & Manifesto Quote Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-8 h-8 rounded-sm border border-[#8C7355]/40 bg-[#0F0E0C] text-[#FAF8F5] flex items-center justify-center font-serif text-xs font-semibold tracking-wider group-hover:border-[#C5A059] transition-colors">
                  XV
                </div>
                <span className="font-serif text-xl tracking-[0.06em] text-[#0F0E0C] font-normal group-hover:text-[#8C7355] transition-colors">
                  FIFTEEN MILES
                </span>
              </Link>

              <p className="text-[#706C64] font-light leading-relaxed max-w-sm">
                Construímos software corporativo como as catedrais foram erguidas: com paciência, rigor arquitetônico e a firme intenção de durar por décadas.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#8C7355]/15 font-serif text-sm italic text-[#8C7355]">
              "Technology changes. Strong foundations remain."
            </div>
          </div>

          {/* Nav Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Platform & Infrastructure */}
            <div>
              <h4 className="font-serif text-sm text-[#0F0E0C] mb-4 font-normal tracking-wide uppercase">
                Infraestrutura
              </h4>
              <ul className="space-y-2.5 font-light">
                <li><Link to="/atlas" className="hover:text-[#0F0E0C] transition-colors">Atlas OS</Link></li>
                <li><Link to="/products" className="hover:text-[#0F0E0C] transition-colors">Diretório de Módulos</Link></li>
                <li><Link to="/engineering" className="hover:text-[#0F0E0C] transition-colors">Arquitetura & Código</Link></li>
              </ul>
            </div>

            {/* Column 2: Institution */}
            <div>
              <h4 className="font-serif text-sm text-[#0F0E0C] mb-4 font-normal tracking-wide uppercase">
                Instituição
              </h4>
              <ul className="space-y-2.5 font-light">
                <li><Link to="/company" className="hover:text-[#0F0E0C] transition-colors">Sobre a Fifteen Miles</Link></li>
                <li><Link to="/manifesto" className="hover:text-[#0F0E0C] transition-colors">O Manifesto</Link></li>
                <li><Link to="/blog" className="hover:text-[#0F0E0C] transition-colors">Discursos & Ensaios</Link></li>
                <li><Link to="/contact" className="hover:text-[#0F0E0C] transition-colors">Contato Direto</Link></li>
              </ul>
            </div>

            {/* Column 3: Legal & Directives */}
            <div>
              <h4 className="font-serif text-sm text-[#0F0E0C] mb-4 font-normal tracking-wide uppercase">
                Diretrizes
              </h4>
              <ul className="space-y-2.5 font-light">
                <li><Link to="/privacy" className="hover:text-[#0F0E0C] transition-colors">Política de Privacidade</Link></li>
                <li><Link to="/terms" className="hover:text-[#0F0E0C] transition-colors">Termos Institucionais</Link></li>
                <li className="text-[#8C7355] text-[10px] tracking-widest uppercase pt-2">ISO 27001 Aligned</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-light text-[#706C64]">
          <div>
            &copy; {new Date().getFullYear()} Fifteen Miles Technologies. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6 tracking-widest uppercase text-[10px]">
            <span>Est. MMXXVI</span>
            <span className="w-1 h-1 rounded-full bg-[#8C7355]" />
            <span className="font-serif text-xs text-[#8C7355]">XV</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;