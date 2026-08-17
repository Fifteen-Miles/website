import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#030303] text-white border-t border-white/[0.08] pt-24 pb-16 font-[Inter] text-xs relative overflow-hidden selection:bg-white/20">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 pb-20 border-b border-white/[0.08]">
          
          <div className="md:col-span-4 flex flex-col justify-between">
            <div className="space-y-6">
              <Link href="/" className="inline-block group">
                <Image src="/TopLogo.png" alt="Fifteen Miles" width={160} height={22} className="h-5 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>

              <p className="text-white/50 font-light leading-relaxed max-w-sm text-sm">
                Construímos software corporativo como as catedrais foram erguidas: com paciência, rigor arquitetônico e a firme intenção de durar por décadas.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-white/[0.08] font-[Fraunces] italic text-sm text-white/70">
              "Technology changes. Strong foundations remain."
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-10">
            
            <div>
              <h4 className="font-[JetBrains_Mono] text-[10px] text-white/40 mb-6 uppercase tracking-[0.25em]">
                Infraestrutura
              </h4>
              <ul className="space-y-3.5 font-light text-white/60 text-sm">
                <li><Link href="/atlas" className="hover:text-white transition-colors">Atlas OS</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Catálogo Geral</Link></li>
                <li><Link href="/engineering" className="hover:text-white transition-colors">Engenharia</Link></li>
                <li><Link href="/security" className="hover:text-white transition-colors">Soberania de Dados</Link></li>
                <li><Link href="/cloud" className="hover:text-white transition-colors">Ambiente Cloud</Link></li>
                <li><Link href="/apis" className="hover:text-white transition-colors">APIs & Integrações</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-[JetBrains_Mono] text-[10px] text-white/40 mb-6 uppercase tracking-[0.25em]">
                Instituição
              </h4>
              <ul className="space-y-3.5 font-light text-white/60 text-sm">
                <li><Link href="/company" className="hover:text-white transition-colors">Nossa História</Link></li>
                <li><Link href="/manifesto" className="hover:text-white transition-colors">Manifesto</Link></li>
                <li><Link href="/timeline" className="hover:text-white transition-colors">Linha do Tempo</Link></li>
                <li><Link href="/culture" className="hover:text-white transition-colors">Cultura</Link></li>
                <li><Link href="/team" className="hover:text-white transition-colors">Time</Link></li>
                <li><Link href="/clients" className="hover:text-white transition-colors">Clientes</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-[JetBrains_Mono] text-[10px] text-white/40 mb-6 uppercase tracking-[0.25em]">
                Editorial & Ordem
              </h4>
              <ul className="space-y-3.5 font-light text-white/60 text-sm">
                <li><Link href="/blog" className="hover:text-white transition-colors">Acervo Editorial</Link></li>
                <li><Link href="/newsroom" className="hover:text-white transition-colors">Notas Oficiais</Link></li>
                <li><Link href="/roadmap" className="hover:text-white transition-colors">Roadmap</Link></li>
                <li><Link href="/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Recrutamento</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-[JetBrains_Mono] text-[10px] text-white/40 mb-6 uppercase tracking-[0.25em]">
                Governança
              </h4>
              <ul className="space-y-3.5 font-light text-white/60 text-sm">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contato Direto</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacidade</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Termos</Link></li>
                <li className="font-[JetBrains_Mono] text-[10px] tracking-widest text-emerald-400/85 uppercase pt-2">ISO 27001 Aligned</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-light text-white/40">
          <div>
            &copy; {new Date().getFullYear()} Fifteen Miles Technologies. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6 font-[JetBrains_Mono] tracking-[0.2em] uppercase text-[10px]">
            <span>Est. MMXXVI</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="font-[Fraunces] italic text-sm text-white/60 lowercase">xv</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;