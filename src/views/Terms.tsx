import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Seo from "../components/Seo"

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#FAF8F5] font-sans selection:bg-[#8C7355] selection:text-[#FAF8F5] pt-24 pb-20">
      <Seo title="Termos — Fifteen Miles" description="Termos de serviço e compromissos da Fifteen Miles com continuidade e disponibilidade." path="/terms" />
      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/30 bg-[#161412] text-[11px] font-sans tracking-[0.2em] uppercase text-[#C5A059] mb-6">
          <Shield className="w-3.5 h-3.5" />
          <span>Contrato Institucional</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.04] text-[#FAF8F5] mb-8">
          Termos de Serviço & Infraestrutura
        </h1>

        <div className="space-y-6 text-[#8C8880] text-sm leading-relaxed font-light">
          <p>
            O acesso e a utilização dos produtos da Fifteen Miles, incluindo o Atlas OS, são regidos por contratos de nível de serviço (SLA) específicos firmados com cada organização.
          </p>
          <p>
            Garantimos a manutenção contínua, a integridade arquitetônica e a legibilidade dos sistemas sob nossa responsabilidade com o compromisso de continuidade em longo prazo.
          </p>
        </div>
      </main>
    </div>
  );
}
