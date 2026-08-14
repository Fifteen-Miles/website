'use client';

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Mail, Send, Compass } from "lucide-react";
import Seo from "../components/Seo";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    if (!document.getElementById("fm-type-system")) {
      const link = document.createElement("link");
      link.id = "fm-type-system";
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xaewekqe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: "contato.fifteenmiles@gmail.com",
          name: form.name,
          senderEmail: form.email,
          company: form.company,
          message: form.message
        })
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1D1D1F] font-[Inter] selection:bg-black/50 selection:text-white pt-32 pb-24 relative overflow-hidden">
      <Seo title="Contato — Fifteen Miles" description="Fale com a Fifteen Miles: parcerias, demonstrações e consultas institucionais." path="/contact" />
      <div className="fixed inset-0 bg-[radial-gradient(#1D1D1F_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none z-0" />

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 relative z-10">
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl border-b border-[#1D1D1F]/10 pb-16 mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-[#1D1D1F]/10 text-[11px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-[#1D1D1F]/80 mb-6"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Comunicação Institucional</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-[Inter] text-4xl sm:text-6xl font-medium tracking-tight leading-[1.08] text-[#1D1D1F] mb-6"
          >
            Inicie um diálogo com a Fifteen Miles.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-[#86868B] font-light leading-relaxed max-w-2xl"
          >
            Convidamos executivos, diretores de tecnologia e operadores que buscam um sistema operacional verdadeiramente permanente para suas organizações.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 rounded-3xl border border-[#1D1D1F]/10 bg-[#F5F5F7] shadow-sm">
              <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-[#86868B] block mb-2">
                Canal Direto
              </span>
              <h2 className="font-[Inter] text-2xl text-[#1D1D1F] font-medium tracking-tight mb-3">Correio Eletrônico</h2>
              <p className="text-xs sm:text-sm text-[#86868B] font-light leading-relaxed mb-4">
                Para consultas corporativas, parcerias institucionais ou agendamento de demonstrações técnicas do Atlas OS.
              </p>
              <a
                href="mailto:contato.fifteenmiles@gmail.com"
                className="font-[Inter] text-base font-medium text-[#1D1D1F] hover:underline"
              >
                contato.fifteenmiles@gmail.com
              </a>
            </div>

            <div className="p-8 rounded-3xl border border-[#1D1D1F]/10 bg-[#F5F5F7] shadow-sm">
              <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.25em] uppercase text-[#86868B] block mb-2">
                Sede & Presença
              </span>
              <h2 className="font-[Inter] text-2xl text-[#1D1D1F] font-medium tracking-tight mb-3">Operação Global</h2>
              <p className="text-xs sm:text-sm text-[#86868B] font-light leading-relaxed">
                Atendemos organizações em múltiplos fusos horários com os mais altos padrões de confidencialidade e segurança da informação.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-12 rounded-3xl border border-[#1D1D1F]/10 bg-[#F5F5F7] shadow-sm">
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 rounded-full border border-[#1D1D1F]/10 bg-white text-[#1D1D1F] flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="font-[Inter] text-2xl text-[#1D1D1F] font-medium tracking-tight mb-3">Comunicação Enviada</h3>
                  <p className="text-sm text-[#86868B] font-light max-w-md mx-auto leading-relaxed">
                    Sua mensagem foi entregue diretamente para <strong className="text-[#1D1D1F]">contato.fifteenmiles@gmail.com</strong>. Responderemos com a atenção e o rigor que sua organização exige.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 px-6 py-3 rounded-full bg-white border border-[#1D1D1F]/10 text-[#1D1D1F] font-medium text-xs uppercase tracking-wider hover:bg-[#E8E8ED] transition-colors"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-[JetBrains_Mono] text-xs uppercase tracking-widest text-[#86868B] mb-2 font-medium">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Seu nome"
                      className="w-full px-4 py-3.5 rounded-2xl border border-[#1D1D1F]/10 bg-white text-[#1D1D1F] text-sm focus:outline-none focus:border-[#1D1D1F] transition-colors shadow-sm"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-[JetBrains_Mono] text-xs uppercase tracking-widest text-[#86868B] mb-2 font-medium">
                        E-mail Corporativo
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="nome@empresa.com"
                        className="w-full px-4 py-3.5 rounded-2xl border border-[#1D1D1F]/10 bg-white text-[#1D1D1F] text-sm focus:outline-none focus:border-[#1D1D1F] transition-colors shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block font-[JetBrains_Mono] text-xs uppercase tracking-widest text-[#86868B] mb-2 font-medium">
                        Organização
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Nome da sua instituição"
                        className="w-full px-4 py-3.5 rounded-2xl border border-[#1D1D1F]/10 bg-white text-[#1D1D1F] text-sm focus:outline-none focus:border-[#1D1D1F] transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-[JetBrains_Mono] text-xs uppercase tracking-widest text-[#86868B] mb-2 font-medium">
                      Descreva os Desafios de Infraestrutura
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Descreva a estrutura operacional atual, os objetivos de longo prazo ou as necessidades de integração."
                      className="w-full px-4 py-3.5 rounded-2xl border border-[#1D1D1F]/10 bg-white text-[#1D1D1F] text-sm focus:outline-none focus:border-[#1D1D1F] transition-colors resize-none shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#1D1D1F] text-white font-medium text-xs tracking-[0.15em] uppercase hover:bg-black transition-all shadow-lg group disabled:opacity-50"
                  >
                    <span>{status === "submitting" ? "Enviando..." : "Enviar Comunicação"}</span>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </main>
    </div>
  );
}