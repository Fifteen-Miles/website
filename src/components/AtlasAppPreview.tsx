'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Home, FileText, CheckSquare, BarChart2, Search, Bell, Settings, User, 
  Sparkles, TrendingUp, Users, Zap, Upload, Database, Plus, Cloud, 
  FolderOpen, Cpu, BookOpen, Phone, Target, PieChart, Filter, Columns, FileSearch
} from "lucide-react";

export function AtlasAppPreview() {
  const [taskDone, setTaskDone] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const sidebarIcons = [
    { id: 'home', icon: Home },
    { id: 'list', icon: Columns },
    { id: 'tasks', icon: FileText },
    { id: 'check', icon: CheckSquare },
    { id: 'analytics', icon: BarChart2 },
    { id: 'layout', icon: Columns },
    { id: 'search', icon: Search },
  ];

  const quickTools = [
    { name: 'Comparação', icon: Upload },
    { name: 'SharePoint', icon: Database },
    { name: 'Quadros de Tarefas', icon: Plus },
    { name: 'Histórico de Mudanças', icon: FileSearch },
    { name: 'Cloud (ORCAS)', icon: Cloud },
    { name: 'Documents', icon: FileText },
    { name: 'Controle de Amostras', icon: FolderOpen },
    { name: 'Controle de Chips', icon: Cpu },
    { name: 'Testbooks', icon: BookOpen },
    { name: 'Equipments Track', icon: Phone },
    { name: 'Pesquisas ETL', icon: Search },
  ];

  return (
    <div className="w-full relative z-20 flex justify-center py-10 px-6 overflow-x-auto">
      
      {/* Glow e Background do Container */}
      <div className="absolute inset-0 bg-white/[0.01] blur-3xl rounded-full pointer-events-none" />
      
      {/* Estilo para ocultar barras de rolagem nativas dentro do frame */}
      <style>{`
        .atlas-preview-scroll::-webkit-scrollbar { width: 4px; }
        .atlas-preview-scroll::-webkit-scrollbar-track { background: transparent; }
        .atlas-preview-scroll::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.05); border-radius: 10px; }
        .atlas-preview-scroll::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.1); }
      `}</style>

      {/* Frame Principal do Aplicativo (Resolução fixa para manter proporção exata) */}
      <div className="min-w-[1280px] w-[1280px] h-[740px] bg-[#0A0A0A] rounded-[16px] border border-white/[0.06] shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden flex font-[Inter] text-white select-none relative z-10 transition-transform">
        
        {/* Sidebar Lateral */}
        <aside className="w-[68px] border-r border-[#1C1C1C] bg-[#050505] flex flex-col items-center py-5 gap-6 flex-shrink-0 z-20">
          <div className="w-8 h-8 rounded-full bg-[#F97316]/10 text-[#F97316] flex items-center justify-center font-bold text-sm tracking-tighter">
            A
          </div>
          <div className="flex-1 flex flex-col gap-4 mt-4 w-full px-3">
            {sidebarIcons.map((item, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveTab(item.id)}
                className={`w-full aspect-square rounded-xl flex items-center justify-center transition-all duration-300 ${activeTab === item.id ? 'bg-white/10 text-white' : 'text-[#71717A] hover:text-white hover:bg-white/[0.05]'}`}
              >
                <item.icon className="w-5 h-5" strokeWidth={1.5} />
              </button>
            ))}
          </div>
        </aside>

        {/* Área Principal */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#0A0A0A] z-10">
          
          {/* Header Superior */}
          <header className="h-[60px] border-b border-[#1C1C1C] flex items-center justify-between px-6 bg-[#0A0A0A]">
            <div className="flex items-center gap-3 w-72">
              <div className="w-6 h-6 rounded-full bg-[#F97316] text-[#0A0A0A] flex items-center justify-center font-bold text-xs tracking-tighter shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                A
              </div>
              <span className="font-semibold text-[13px] text-white tracking-wide">Atlas</span>
              <span className="text-[10px] uppercase font-[JetBrains_Mono] tracking-[0.2em] text-[#71717A] bg-white/[0.03] px-2 py-0.5 rounded-md border border-white/[0.05]">
                Commercial SaaS
              </span>
            </div>
            
            {/* Barra de Pesquisa */}
            <div className="flex-1 max-w-lg mx-6 flex justify-center">
              <div className="w-full h-[36px] rounded-lg bg-[#141414] border border-[#27272A] flex items-center px-3 gap-2 focus-within:border-white/20 hover:border-white/15 transition-colors cursor-text shadow-inner">
                <Search className="w-4 h-4 text-[#71717A]" />
                <input 
                  type="text" 
                  placeholder="Buscar ou ir para..." 
                  readOnly
                  className="bg-transparent border-none outline-none text-[13px] w-full text-white placeholder-[#71717A] cursor-text"
                />
                <span className="text-[10px] font-[JetBrains_Mono] font-medium text-[#71717A] bg-[#27272A] border border-[#3F3F46] rounded px-1.5 py-0.5">
                  ⌘K
                </span>
              </div>
            </div>

            {/* Ações do Usuário */}
            <div className="flex items-center justify-end gap-5 w-72 text-[#71717A]">
              <motion.button whileHover={{ scale: 1.1 }} className="hover:text-white transition-colors">
                <Bell className="w-4 h-4" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} className="hover:text-white transition-colors">
                <Settings className="w-4 h-4" />
              </motion.button>
              <div className="flex items-center gap-3 pl-5 border-l border-[#27272A] cursor-pointer group">
                <div className="w-7 h-7 rounded-full bg-[#27272A] overflow-hidden flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-colors">
                  <User className="w-3.5 h-3.5 text-white/50" />
                </div>
                <span className="text-[13px] font-medium text-[#E4E4E7] group-hover:text-white transition-colors">Nathanael</span>
              </div>
            </div>
          </header>

          {/* Canvas Operacional */}
          <main className="flex-1 p-6 flex gap-6 overflow-hidden bg-[#050505]">
            
            {/* Coluna Esquerda/Central */}
            <div className="flex-1 flex flex-col gap-6 overflow-y-auto atlas-preview-scroll pr-2 pb-6">
              
              {/* Card Boas Vindas */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-7 rounded-[20px] bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-[#1C1C1C] shadow-md relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 w-64 h-64 bg-[#F87171]/5 rounded-full blur-3xl" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#2E1517] border border-[#4C1F22] flex items-center justify-center text-[#F87171] shadow-inner">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F87171] mb-2 block">
                      BEM-VINDO, NATHANAEL
                    </span>
                    <h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Boa tarde, Nathanael</h2>
                    <p className="text-[13px] text-[#A1A1AA] font-light max-w-2xl leading-relaxed">
                      Sua central de inteligência operacional para gerenciamento de páginas, tarefas, relatórios e oportunidades.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Resumo Operacional */}
              <div className="mt-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 rounded border border-white/10 bg-[#121212] flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5 text-[#71717A]" strokeWidth={2} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white block">Resumo Operacional</span>
                    <span className="text-[11px] font-light text-[#71717A]">Visão geral de métricas e status do sistema</span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { icon: TrendingUp, label: "OPORTUNIDADES", value: "138" },
                    { icon: FileText, label: "PÁGINAS", value: "30" },
                    { icon: Users, label: "USUÁRIOS TOTAIS", value: "8" },
                    { icon: Zap, label: "STATUS DO SISTEMA", value: "Optimal" },
                  ].map((card, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -2 }}
                      className="p-6 rounded-[20px] bg-[#121212] border border-[#1C1C1C] hover:border-white/10 transition-colors cursor-default shadow-sm relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                        <card.icon className="w-20 h-20 text-white" />
                      </div>
                      <card.icon className="w-5 h-5 text-[#E4E4E7] mb-6 relative z-10" strokeWidth={1.5} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#71717A] block mb-1 relative z-10">{card.label}</span>
                      <span className="text-4xl font-bold tracking-tighter text-white relative z-10">{card.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Ferramentas Rápidas */}
              <div className="mt-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 rounded border border-white/10 bg-[#121212] flex items-center justify-center">
                    <Columns className="w-3.5 h-3.5 text-[#71717A]" strokeWidth={2} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white block">Ferramentas Rápidas</span>
                    <span className="text-[11px] font-light text-[#71717A]">Acesso direto aos principais módulos do Atlas</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 gap-4">
                  {quickTools.map((tool, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.03)" }}
                      whileTap={{ scale: 0.98 }}
                      className="h-[105px] rounded-[20px] bg-[#121212] border border-[#1C1C1C] flex flex-col items-center justify-center text-center gap-3 cursor-pointer transition-colors px-3 shadow-sm"
                    >
                      <tool.icon className="w-5 h-5 text-[#A1A1AA]" strokeWidth={1.5} />
                      <span className="text-[11px] font-medium text-[#E4E4E7] leading-tight">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

            {/* Coluna Direita */}
            <div className="w-[380px] flex flex-col gap-6 flex-shrink-0 pb-6">
              
              {/* Metas Diárias */}
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-6 rounded-[20px] border border-[#1C1C1C] bg-[#121212] shadow-md"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#2E1517] flex items-center justify-center border border-[#4C1F22]">
                    <Target className="w-4 h-4 text-[#F87171]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-[13px] font-semibold text-white block">Metas Diárias</span>
                    <span className="text-[11px] font-light text-[#71717A]">Acompanhamento e tarefas prioritárias</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#A1A1AA]">
                    04 DE AGOSTO DE 2026
                  </span>
                  <Plus className="w-4 h-4 text-[#71717A] cursor-pointer hover:text-white transition-colors" />
                </div>
                
                {/* Task Item Interativo */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 cursor-pointer group" 
                  onClick={() => setTaskDone(!taskDone)}
                >
                  <div className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${taskDone ? 'bg-[#10B981] border-[#10B981] text-black shadow-[0_0_10px_rgba(16,185,129,0.3)]' : 'border-[#3F3F46] bg-[#1A1A1A] group-hover:border-[#71717A]'}`}>
                    {taskDone && <CheckSquare className="w-3 h-3" strokeWidth={3} />}
                  </div>
                  <div>
                    <p className={`text-[12px] font-medium transition-all duration-300 ${taskDone ? 'text-[#71717A] line-through' : 'text-[#E4E4E7]'}`}>
                      Checar tasks em: OPORTUNIDADES (GUILHERME NOGUEIRA)
                    </p>
                    <div className={`flex items-center gap-2 mt-2 transition-opacity duration-300 ${taskDone ? 'opacity-30' : 'opacity-100'}`}>
                      <User className="w-3.5 h-3.5 text-[#3B82F6]" />
                      <span className="text-[11px] text-[#3B82F6] font-medium">Guilherme Nogueira</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Analytics Hub */}
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-[20px] border border-[#1C1C1C] bg-[#121212] flex-1 flex flex-col shadow-md"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#27272A] flex items-center justify-center border border-white/5">
                    <BarChart2 className="w-4 h-4 text-[#A1A1AA]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-[13px] font-semibold text-white block">Analytics Hub</span>
                    <span className="text-[11px] font-light text-[#71717A]">Distribuição por status e utilização</span>
                  </div>
                </div>

                <div className="flex-1 bg-[#0A0A0A] border border-[#1C1C1C] rounded-[16px] p-6 flex flex-col relative overflow-hidden">
                  
                  {/* Status Oportunidades */}
                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#71717A] block mb-1.5">
                        STATUS DE OPORTUNIDADES
                      </span>
                      <h4 className="text-[20px] font-bold text-white tracking-tight">Distribution</h4>
                    </div>
                    <div className="w-9 h-9 rounded-full border border-[#4C1F22] bg-[#2E1517] flex items-center justify-center text-[#F87171]">
                      <PieChart className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Gráfico Donut Exato via SVG */}
                  <div className="flex justify-center mb-10 pt-2 relative z-10">
                    <div className="relative w-44 h-44 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-500">
                      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                        <circle cx="50" cy="50" r="35" fill="transparent" stroke="#06B6D4" strokeWidth="14" strokeDasharray="100 220" strokeDashoffset="-60" strokeLinecap="round" />
                        <circle cx="50" cy="50" r="35" fill="transparent" stroke="#F43F5E" strokeWidth="14" strokeDasharray="25 220" strokeDashoffset="-165" strokeLinecap="round" />
                        <circle cx="50" cy="50" r="35" fill="transparent" stroke="#8B5CF6" strokeWidth="14" strokeDasharray="90 220" strokeDashoffset="90" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  <div className="w-full h-px bg-[#1C1C1C] mb-6 relative z-10" />

                  {/* Principais Clientes */}
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-5">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#71717A] block mb-1.5">
                          PRINCIPAIS CLIENTES
                        </span>
                        <h4 className="text-[15px] font-bold text-white tracking-tight">Utility Rank</h4>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-blue-500/20 bg-blue-500/10 flex items-center justify-center text-blue-400">
                        <Filter className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <div className="space-y-5">
                      <div className="group cursor-default">
                        <span className="text-[11px] font-bold text-white/80 block mb-2 ml-1 group-hover:text-white transition-colors">COPEL</span>
                        <div className="w-full h-3 bg-[#1C1C1C] rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: "95%" }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-[#8B5CF6] rounded-full shadow-[0_0_10px_#8B5CF6]" />
                        </div>
                      </div>
                      <div className="group cursor-default">
                        <span className="text-[11px] font-bold text-white/80 block mb-2 ml-1 group-hover:text-white transition-colors">Energisa</span>
                        <div className="w-full h-3 bg-[#1C1C1C] rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: "70%" }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-[#06B6D4] rounded-full shadow-[0_0_10px_#06B6D4]" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}