import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Compass } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F0E0C] font-sans selection:bg-[#8C7355] selection:text-[#FAF8F5] pt-24 pb-20">
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">

        {/* Header */}
        <div className="max-w-4xl border-b border-[#8C7355]/20 pb-16 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8C7355]/30 bg-[#F5F2EB] text-[11px] font-sans tracking-[0.2em] uppercase text-[#8C7355] mb-6">
            <Mail className="w-3.5 h-3.5" />
            <span>Comunicação Institucional</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl font-normal leading-[1.04] text-[#0F0E0C] mb-8">
            Inicie um diálogo com a Fifteen Miles.
          </h1>

          <p className="text-lg sm:text-xl text-[#706C64] font-light leading-relaxed max-w-2xl">
            Convidamos executivos, diretores de tecnologia e operadores que buscam um sistema operacional verdadeiramente permanente para suas organizações.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl border border-[#8C7355]/20 bg-[#F5F2EB] engraved-border-light">
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#8C7355] block mb-2">
                Canal Direto
              </span>
              <h2 className="font-serif text-2xl text-[#0F0E0C] font-normal mb-3">Correio Eletrônico</h2>
              <p className="text-xs text-[#706C64] font-light leading-relaxed mb-4">
                Para consultas corporativas, parcerias institucionais ou agendamento de demonstrações técnicas do Atlas OS.
              </p>
              <a
                href="mailto:contato.fifteenmiles@gmail.com"
                className="font-serif text-lg text-[#8C7355] hover:underline"
              >
                contato.fifteenmiles@gmail.com
              </a>
            </div>

            <div className="p-8 rounded-2xl border border-[#8C7355]/20 bg-[#F5F2EB] engraved-border-light">
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#8C7355] block mb-2">
                Sede & Presença
              </span>
              <h2 className="font-serif text-2xl text-[#0F0E0C] font-normal mb-3">Operação Global</h2>
              <p className="text-xs text-[#706C64] font-light leading-relaxed">
                Atendemos organizações em múltiplos fusos horários com os mais altos padrões de confidencialidade e segurança da informação.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-2xl border border-[#8C7355]/30 bg-[#F5F2EB] engraved-border-light">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 rounded-full border border-[#8C7355]/40 bg-[#FAF8F5] text-[#8C7355] flex items-center justify-center mx-auto mb-6">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#0F0E0C] font-normal mb-3">Mensagem Recebida</h3>
                  <p className="text-sm text-[#706C64] font-light max-w-md mx-auto leading-relaxed">
                    Sua mensagem foi entregue diretamente aos nossos engenheiros e diretores. Responderemos com a atenção e os detalhes que sua organização exige.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#706C64] mb-2 font-medium">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Seu nome"
                      className="w-full px-4 py-3.5 rounded-lg border border-[#8C7355]/30 bg-[#FAF8F5] text-[#0F0E0C] text-sm focus:outline-none focus:border-[#8C7355] transition-colors"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#706C64] mb-2 font-medium">
                        E-mail Corporativo
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="nome@empresa.com"
                        className="w-full px-4 py-3.5 rounded-lg border border-[#8C7355]/30 bg-[#FAF8F5] text-[#0F0E0C] text-sm focus:outline-none focus:border-[#8C7355] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#706C64] mb-2 font-medium">
                        Organização
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Nome da sua instituição"
                        className="w-full px-4 py-3.5 rounded-lg border border-[#8C7355]/30 bg-[#FAF8F5] text-[#0F0E0C] text-sm focus:outline-none focus:border-[#8C7355] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#706C64] mb-2 font-medium">
                      Descreva os Desafios de Infraestrutura
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Descreva a estrutura operacional atual, os objetivos de longo prazo ou as necessidades de integração."
                      className="w-full px-4 py-3.5 rounded-lg border border-[#8C7355]/30 bg-[#FAF8F5] text-[#0F0E0C] text-sm focus:outline-none focus:border-[#8C7355] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-full bg-[#0F0E0C] text-[#FAF8F5] font-sans font-medium text-xs tracking-[0.15em] uppercase hover:bg-[#1F1C18] transition-all shadow-[0_10px_30px_rgba(15,14,12,0.12)]"
                  >
                    <span>Enviar Comunicação</span>
                    <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
