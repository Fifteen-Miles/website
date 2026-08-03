import { motion } from "framer-motion";
import { Grid, Layers, ShieldCheck, Database, FileSpreadsheet, MessageSquare, LayoutGrid, HardDrive, BarChart3, AlertTriangle, ArrowDown } from "lucide-react";

const fragmentedApps = [
  { icon: Database, label: "Enterprise CRM", state: "Siloed Data" },
  { icon: FileSpreadsheet, label: "Legacy Spreadsheets", state: "Manual Sync" },
  { icon: HardDrive, label: "Unstructured Cloud Storage", state: "Lost Context" },
  { icon: LayoutGrid, label: "Kanban Boards", state: "Isolated Status" },
  { icon: BarChart3, label: "Third-party Analytics", state: "Delayed Metrics" },
  { icon: MessageSquare, label: "Ephemeral Chat Channels", state: "No Memory" },
];

export const FragmentedWorldSection = () => {
  return (
    <section className="relative py-32 bg-[#0A0A0C] border-t border-[#8C7355]/15 overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-[radial-gradient(ellipse_at_top,_rgba(140,115,85,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section 1: The world became fragmented */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/20 bg-[#141210] text-[11px] font-sans tracking-[0.2em] uppercase text-[#8C8880] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C7355]" />
            Capítulo I · A Fragmentação
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl text-[#FAF8F5] leading-tight font-normal"
          >
            O mundo se tornou fragmentado.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-[#8C8880] font-sans font-light max-w-2xl mx-auto leading-relaxed"
          >
            Organizações foram forçadas a empilhar dezenas de ferramentas desconectadas. Cada departamento criou suas próprias ilhas de conhecimento e controle.
          </motion.p>
        </div>

        {/* Visual Matrix of Fragmented Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mb-28"
        >
          {fragmentedApps.map((app, index) => {
            const Icon = app.icon;
            return (
              <div
                key={app.label}
                className="relative p-6 rounded-xl border border-[#8C7355]/15 bg-[#12100E]/70 backdrop-blur-sm group hover:border-[#8C7355]/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-[#1C1A17] text-[#8C8880] group-hover:text-[#C5A059] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-sans tracking-widest uppercase text-[#8C7355]/70 border border-[#8C7355]/20 px-2 py-0.5 rounded">
                    Disconnected
                  </span>
                </div>
                <h3 className="font-sans text-sm font-medium text-[#FAF8F5] mb-1">
                  {app.label}
                </h3>
                <p className="text-xs text-[#8C8880] font-light">
                  {app.state}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Section 2: Complexity Became Normal */}
        <div className="relative p-8 sm:p-14 rounded-2xl border border-[#8C7355]/25 bg-[#141210]/90 engraved-border mb-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-sans tracking-[0.2em] uppercase text-[#C5A059] mb-4">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Capítulo II · A Sobrecarga</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-5xl text-[#FAF8F5] leading-tight font-normal">
                A complexidade se tornou o novo normal.
              </h3>
              <p className="mt-6 text-[#8C8880] font-sans text-base leading-relaxed font-light">
                Empresas passaram a gastar mais energia gerenciando a integração de software do que executando sua própria visão. A fragilidade operacional passou a ser aceita como um inevitável custo de fazer negócios.
              </p>
            </div>

            <div className="space-y-4 font-sans text-xs text-[#8C8880]">
              {[
                { title: "Custos Ocultos de Manutenção", desc: "Integradores customizados que quebram a cada atualização de API." },
                { title: "Perda de Contexto Histórico", desc: "Decisões institucionais perdidas no histórico de conversas efêmeras." },
                { title: "Insegurança de Dados", desc: "Múltiplas superfícies de ataque distribuídas em plataformas terceirizadas." }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#0A0A0C]/80 border border-[#8C7355]/15 flex items-start gap-4">
                  <span className="font-serif text-sm text-[#C5A059] font-normal">0{idx + 1}</span>
                  <div>
                    <h4 className="text-[#FAF8F5] font-medium text-sm mb-1">{item.title}</h4>
                    <p className="font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: We believe there is another way */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center py-16 px-8 rounded-2xl border border-[#8C7355]/20 bg-[radial-gradient(ellipse_at_center,_rgba(22,20,18,0.9)_0%,_rgba(10,10,12,0.95)_100%)] shadow-2xl"
        >
          <div className="w-px h-10 bg-[#8C7355]/50 mx-auto mb-6" />
          <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#8C8880] mb-4 block">
            Capítulo III · A Resposta
          </span>
          <h3 className="font-serif text-4xl sm:text-5xl text-[#FAF8F5] font-normal leading-tight mb-6">
            Acreditamos que existe outro caminho.
          </h3>
          <p className="text-lg text-[#8C8880] font-sans font-light leading-relaxed max-w-xl mx-auto">
            Assim como as catedrais europeias foram erguidas com paciência, rigor e fundações que resistiram a séculos de mudanças, o software corporativo deve ser construído para durar.
          </p>
          <div className="mt-8">
            <ArrowDown className="w-5 h-5 text-[#C5A059] mx-auto animate-subtle-float" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
