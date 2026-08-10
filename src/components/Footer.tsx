import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-[#8C7355]/20 pt-24 pb-16 font-[Inter] text-xs relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#8C7355_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 pb-20 border-b border-[#8C7355]/20">
          
          <div className="md:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <Link to="/" className="inline-block group">
                <LazyImage src="/TopLogo.png" alt="Fifteen Miles" className="h-6 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>

              <p className="text-[#A19D94] font-light leading-relaxed max-w-sm text-sm">
                Construímos software corporativo como as catedrais foram erguidas: com paciência, rigor arquitetônico e a firme intenção de durar por décadas.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-[#8C7355]/20 font-[Fraunces] text-sm italic text-[#C5A059]">
              "Technology changes. Strong foundations remain."
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            
            <div>
              <h4 className="font-[Fraunces] text-sm text-[#FAF8F5] mb-6 font-normal tracking-wider uppercase">
                Infraestrutura
              </h4>
              <ul className="space-y-3 font-light text-[#A19D94]">
                <li><Link to="/atlas" className="hover:text-[#FAF8F5] transition-colors">Atlas OS</Link></li>
                <li><Link to="/products" className="hover:text-[#FAF8F5] transition-colors">Diretório de Módulos</Link></li>
                <li><Link to="/engineering" className="hover:text-[#FAF8F5] transition-colors">Arquitetura & Código</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-[Fraunces] text-sm text-[#FAF8F5] mb-6 font-normal tracking-wider uppercase">
                Instituição
              </h4>
              <ul className="space-y-3 font-light text-[#A19D94]">
                <li><Link to="/company" className="hover:text-[#FAF8F5] transition-colors">Sobre a Fifteen Miles</Link></li>
                <li><Link to="/manifesto" className="hover:text-[#FAF8F5] transition-colors">O Manifesto</Link></li>
                <li><Link to="/blog" className="hover:text-[#FAF8F5] transition-colors">Discursos & Ensaios</Link></li>
                <li><Link to="/contact" className="hover:text-[#FAF8F5] transition-colors">Contato Direto</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-[Fraunces] text-sm text-[#FAF8F5] mb-6 font-normal tracking-wider uppercase">
                Diretrizes
              </h4>
              <ul className="space-y-3 font-light text-[#A19D94]">
                <li><Link to="/privacy" className="hover:text-[#FAF8F5] transition-colors">Política de Privacidade</Link></li>
                <li><Link to="/terms" className="hover:text-[#FAF8F5] transition-colors">Termos Institucionais</Link></li>
                <li className="text-[#C5A059] text-[10px] tracking-widest uppercase pt-3">ISO 27001 Aligned</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-light text-[#A19D94]">
          <div>
            &copy; {new Date().getFullYear()} Fifteen Miles Technologies. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6 tracking-widest uppercase text-[10px]">
            <span>Est. MMXXVI</span>
            <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
            <span className="font-[Fraunces] text-sm text-[#C5A059]">XV</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;