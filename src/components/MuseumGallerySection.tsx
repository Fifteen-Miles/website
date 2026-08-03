import { motion } from "framer-motion";
import { Database, FileSpreadsheet, HardDrive, LayoutGrid, BarChart3, MessageSquare, AlertTriangle, ArrowDown } from "lucide-react";

const fragmentedArtifacts = [
  { code: "ART-01", title: "Enterprise CRM", desc: "Dados de clientes fragmentados em silos fechados de terceiros." },
  { code: "ART-02", title: "Planilhas Legadas", desc: "Controle manual propenso a erros de sincronização e perda de versão." },
  { code: "ART-03", title: "Nuvem Desestruturada", desc: "Arquivos isolados sem histórico de decisões corporativas." },
  { code: "ART-04", title: "Quadros Kanban Dispersos", desc: "Status de tarefas desalinhados entre departamentos operacionais." },
  { code: "ART-05", title: "Métricas de BI Terceirizadas", desc: "Relatórios defasados gerados por sistemas não integrados." },
  { code: "ART-06", title: "Canais de Mensagem Efêmeros", desc: "Conhecimento institucional perdido no fluxo de conversas diárias." }
];

export const MuseumGallerySection = () => {
  return (
    <section className="relative py-36 bg-[#FAF8F5] text-[#0F0E0C] border-t border-[#8C7355]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Gallery Room Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/30 bg-[#F5F2EB] text-[11px] font-sans tracking-[0.2em] uppercase text-[#706C64] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C7355]" />
            Galeria I · A Era da Fragmentação
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-5xl sm:text-7xl text-[#0F0E0C] leading-tight font-normal"
          >
            O mundo se tornou fragmentado.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-[#706C64] font-sans font-light max-w-2xl mx-auto leading-relaxed"
          >
            Nas últimas duas décadas, o software corporativo foi dividido em ilhas de ferramentas isoladas. O que deveria trazer clareza gerou ruído e desordem.
          </motion.p>
        </div>

        {/* Museum Exhibition Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
        >
          {fragmentedArtifacts.map((art, idx) => (
            <div
              key={art.code}
              className="p-8 rounded-xl border border-[#8C7355]/20 bg-[#F5F2EB]/60 engraved-border-light hover:border-[#8C7355]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-sans tracking-widest text-[#8C7355] uppercase mb-6">
                  <span>{art.code}</span>
                  <span className="w-1 h-1 rounded-full bg-[#8C7355]/50" />
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#0F0E0C] mb-3 group-hover:text-[#8C7355] transition-colors">
                  {art.title}
                </h3>
                <p className="text-xs text-[#706C64] font-light leading-relaxed">
                  {art.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#8C7355]/15 text-[10px] uppercase tracking-widest text-[#706C64]/70">
                Silo de Dados Isolado
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gallery Room II: The Complexity Room */}
        <div className="relative p-10 sm:p-16 rounded-2xl border border-[#8C7355]/30 bg-[#F5F2EB] engraved-border-light mb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#8C7355] block mb-3">
                Galeria II · O Custo do Caos
              </span>
              <h3 className="font-serif text-4xl sm:text-6xl text-[#0F0E0C] leading-tight font-normal mb-6">
                A complexidade se tornou o novo normal.
              </h3>
              <p className="text-[#706C64] font-sans text-base leading-relaxed font-light max-w-xl">
                Organizações aceitaram gastar mais recursos mantendo integrações superficiais do que executando sua própria visão. A fragilidade operacional passou a ser vista como inevitável.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-4 font-sans text-xs">
              {[
                { title: "Custos Invisíveis de Manutenção", body: "Sistemas customizados que exigem constante reparo e reconfiguração." },
                { title: "Erosão do Conhecimento", body: "Decisões históricas perdidas em plataformas efêmeras de chat." },
                { title: "Superfície de Ataque Ampliada", body: "Dados confidenciais espalhados por múltiplos provedores." }
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-lg bg-[#FAF8F5] border border-[#8C7355]/20 flex items-start gap-4">
                  <span className="font-serif text-base text-[#8C7355] font-normal">0{idx + 1}</span>
                  <div>
                    <h4 className="text-[#0F0E0C] font-medium text-sm mb-1">{item.title}</h4>
                    <p className="text-[#706C64] font-light leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Room III: The Quiet Threshold */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center py-20 px-8 rounded-3xl border border-[#8C7355]/25 bg-[#FAF8F5] shadow-sm"
        >
          <div className="w-px h-12 bg-[#8C7355]/40 mx-auto mb-6" />
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#706C64] block mb-4">
            Galeria III · A Mudança de Paradigma
          </span>
          <h3 className="font-serif text-4xl sm:text-6xl text-[#0F0E0C] font-normal leading-tight mb-8">
            Acreditamos que existe outro caminho.
          </h3>
          <p className="text-lg sm:text-xl text-[#706C64] font-serif font-light leading-relaxed max-w-2xl mx-auto italic">
            "Assim como a grande arquitetura europeia resistiu a séculos de mudanças sem perder a sobriedade, o software corporativo deve ser erguido sobre fundações imutáveis."
          </p>
          <div className="mt-10">
            <ArrowDown className="w-5 h-5 text-[#8C7355] mx-auto animate-subtle-float" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
