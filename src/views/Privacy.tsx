import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Seo from "../components/Seo";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#FAF8F5] font-sans selection:bg-[#8C7355] selection:text-[#FAF8F5] pt-24 pb-20">
      <Seo title="Privacidade — Fifteen Miles" description="Política de privacidade da Fifteen Miles. Como tratamos dados corporativos e pessoais." path="/privacy" />
      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/30 bg-[#161412] text-[11px] font-sans tracking-[0.2em] uppercase text-[#C5A059] mb-6">
          <Shield className="w-3.5 h-3.5" />
          <span>Diretrizes Institucionais</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.04] text-[#FAF8F5] mb-8">
          Política de Privacidade & Custódia de Dados
        </h1>

        <div className="space-y-6 text-[#8C8880] text-sm leading-relaxed font-light">
          <p>
            A Fifteen Miles respeita a soberania e a confidencialidade das informações operacionais de seus clientes e visitantes.
          </p>
          <p>
            Coletamos estritamente os dados necessários para o estabelecimento de comunicação institucional direta. Não comercializamos, compartilhamos ou rastreamos atividades de usuários para fins publicitários de terceiros.
          </p>
          <p>
            Todas as comunicações e credenciais tratadas pelo Atlas OS são encriptadas sob rigorosos padrões de segurança de classe governamental.
          </p>
        </div>
      </main>
    </div>
  );
}
