import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Layers, ArrowRight, Cpu, Server, Lock, Compass, CheckCircle2 } from "lucide-react";

export const AtlasSystemSection = () => {
  return (
    <section className="relative py-32 bg-[#0C0B0A] border-t border-[#8C7355]/20 overflow-hidden">
      {/* Background Architectural Watermark Grid */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Header - Infrastructure Presentation */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/30 bg-[#161412] text-[11px] font-sans tracking-[0.2em] uppercase text-[#C5A059] mb-6">
            <Layers className="w-3.5 h-3.5" />
            <span>Capítulo IV · A Infraestrutura</span>
          </div>

          <h2 className="font-serif text-5xl sm:text-7xl text-[#FAF8F5] leading-tight font-normal">
            Atlas. <br />
            <span className="text-[#8C8880] italic">Uma plataforma. Toda a operação.</span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-[#8C8880] font-sans font-light leading-relaxed">
            O Atlas não é uma coleção de aplicativos. É o Sistema Operacional Empresarial projetado para servir como a infraestrutura central de organizações que planejam existir pelas próximas décadas.
          </p>
        </div>

        {/* Hero Architectural Platform View */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          
          {/* Main Core Diagram Card */}
          <div className="lg:col-span-8 p-8 sm:p-12 rounded-2xl border border-[#8C7355]/30 bg-[#141210] stone-card relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 opacity-10 font-serif text-8xl text-[#C5A059] font-light pointer-events-none">
              ATLAS
            </div>

            <div>
              <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#C5A059] block mb-2">
                Arquitetura Central
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] font-normal mb-6">
                Fundação Unificada de Dados e Decisão
              </h3>
              <p className="text-[#8C8880] font-sans text-base leading-relaxed max-w-xl font-light mb-10">
                A maioria dos softwares adapta as empresas a si mesmos. O Atlas faz o oposto. Ele fornece um ambiente configurável e resiliente onde fluxos operacionais, registros de conhecimento e governança coexistem com absoluta clareza.
              </p>
            </div>

            {/* Infrastructure Modules Grid */}
            <div className="grid sm:grid-cols-3 gap-4 pt-8 border-t border-[#8C7355]/20 font-sans text-xs">
              {[
                { label: "Governança Operacional", val: "Arquitetura Imutável" },
                { label: "Modelo de Conhecimento", val: "Memória Institucional" },
                { label: "Controle de Acesso", val: "Criptografia Restrita" }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0A0A0C]/80 border border-[#8C7355]/15">
                  <span className="text-[#8C8880] text-[10px] uppercase tracking-wider block mb-1">{item.label}</span>
                  <span className="text-[#FAF8F5] font-medium text-sm block">{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Side Pillar Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-8 rounded-2xl border border-[#8C7355]/20 bg-[#12100E] hover:border-[#8C7355]/40 transition-colors">
              <Server className="w-6 h-6 text-[#C5A059] mb-4" />
              <h4 className="font-serif text-2xl text-[#FAF8F5] mb-2 font-normal">Sem Dependências Frágeis</h4>
              <p className="text-xs text-[#8C8880] leading-relaxed font-light">
                Construído do zero com redundância estrutural. Sem ecossistemas de plugins instáveis ou integrações superficiais que falham silenciosamente.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-[#8C7355]/20 bg-[#12100E] hover:border-[#8C7355]/40 transition-colors">
              <Lock className="w-6 h-6 text-[#C5A059] mb-4" />
              <h4 className="font-serif text-2xl text-[#FAF8F5] mb-2 font-normal">Soberania Corporativa</h4>
              <p className="text-xs text-[#8C8880] leading-relaxed font-light">
                Seus dados operacionais não residem em silos proprietários opacos. Você mantém o controle total da arquitetura de informação da sua organização.
              </p>
            </div>
          </div>
        </div>

        {/* Action Link */}
        <div className="flex justify-center">
          <Link
            href="/atlas"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#8C7355]/40 bg-[#1A1815] text-[#FAF8F5] font-sans font-medium text-xs tracking-[0.15em] uppercase hover:border-[#C5A059] hover:bg-[#25221E] transition-all group"
          >
            <span>Examinar as Especificações do Atlas OS</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
