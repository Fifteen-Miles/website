'use client';

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Mail, Send, Sparkles, Check } from "lucide-react";
import Seo from "../components/Seo";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none [perspective:1000px] overflow-hidden opacity-15 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10" />
      <div 
        className="absolute inset-x-0 bottom-0 h-[100vh] origin-bottom"
        style={{
          transform: "rotateX(75deg) translateY(100px) scale(2)",
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to top, black 10%, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to top, black 10%, transparent 85%)"
        }}
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", consent: false });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    if (!document.getElementById("fm-type-system")) {
      const link = document.createElement("link");
      link.id = "fm-type-system";
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.consent) return;
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
        setForm({ name: "", email: "", company: "", message: "", consent: false });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white font-[Inter] selection:bg-white/25 selection:text-white pt-36 pb-32 relative overflow-hidden">
      <Seo title="Contato — Fifteen Miles" description="Fale com a Fifteen Miles: parcerias, demonstrações e consultas institucionais para o Atlas OS." path="/contact" />
      <GridBackground />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none z-0" />

      <main className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl border-b border-white/[0.08] pb-16 mb-20"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md text-[10px] font-[JetBrains_Mono] tracking-[0.2em] uppercase text-white/80 shadow-[0_0_20px_rgba(255,255,255,0.02)] mb-8"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Comunicação Institucional</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-[Inter] text-5xl sm:text-7xl font-medium tracking-[-0.04em] leading-[1.05] text-white mb-8"
          >
            Inicie um diálogo <br />
            <span className="font-[Fraunces] italic font-light text-white/40">com a Fifteen Miles.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl text-white/50 font-light leading-relaxed max-w-3xl"
          >
            Convidamos executivos, diretores de tecnologia e operadores que buscam um sistema operacional verdadeiramente permanente para suas organizações.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 sm:p-10 rounded-[32px] border border-white/[0.08] bg-[#050505] shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10">
                <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-3">
                  Canal Direto
                </span>
                <h2 className="font-[Inter] text-2xl text-white font-medium tracking-tight mb-4">Correio Eletrônico</h2>
                <p className="text-sm text-white/50 font-light leading-relaxed mb-6">
                  Para consultas corporativas, parcerias institucionais ou agendamento de demonstrações técnicas do Atlas OS.
                </p>
                <a
                  href="mailto:contato.fifteenmiles@gmail.com"
                  className="font-[JetBrains_Mono] text-sm font-medium text-white hover:text-white/70 transition-colors underline underline-offset-4 decoration-white/30"
                >
                  contato.fifteenmiles@gmail.com
                </a>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-[32px] border border-white/[0.08] bg-[#050505] shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10">
                <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.3em] uppercase text-white/40 block mb-3">
                  Sede & Presença
                </span>
                <h2 className="font-[Inter] text-2xl text-white font-medium tracking-tight mb-4">Operação Global</h2>
                <p className="text-sm text-white/50 font-light leading-relaxed">
                  Atendemos organizações em múltiplos fusos horários com os mais altos padrões de confidencialidade, soberania e segurança de dados.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-12 lg:p-16 rounded-[32px] border border-white/[0.08] bg-[#050505] shadow-2xl relative overflow-hidden backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px]" />
              
              <div className="relative z-10">
                {status === "success" ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full border border-white/20 bg-white/[0.05] text-white flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <Sparkles className="w-7 h-7" />
                    </div>
                    <h3 className="font-[Inter] text-3xl text-white font-medium tracking-tight mb-4">Comunicação Enviada</h3>
                    <p className="text-base text-white/60 font-light max-w-md mx-auto leading-relaxed mb-8">
                      Sua mensagem foi entregue diretamente para <strong className="text-white font-medium">contato.fifteenmiles@gmail.com</strong>. Retornaremos com o rigor e a atenção que sua organização exige.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-8 py-4 rounded-full bg-white/[0.03] border border-white/[0.1] text-white font-medium text-xs uppercase tracking-widest hover:bg-white/[0.06] transition-colors"
                    >
                      Enviar nova mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.25em] text-white/60 mb-2 font-medium">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Seu nome"
                        className="w-full px-5 py-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/30 transition-all shadow-inner"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.25em] text-white/60 mb-2 font-medium">
                          E-mail Corporativo
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="nome@empresa.com"
                          className="w-full px-5 py-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/30 transition-all shadow-inner"
                        />
                      </div>

                      <div>
                        <label className="block font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.25em] text-white/60 mb-2 font-medium">
                          Organização
                        </label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Nome da sua instituição"
                          className="w-full px-5 py-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/30 transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-[JetBrains_Mono] text-[10px] uppercase tracking-[0.25em] text-white/60 mb-2 font-medium">
                        Descreva os Desafios de Infraestrutura
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Descreva a estrutura operacional atual, os objetivos de longo prazo ou as necessidades de integração."
                        className="w-full px-5 py-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/30 transition-all resize-none shadow-inner"
                      />
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={form.consent}
                        onClick={() => setForm({ ...form, consent: !form.consent })}
                        className={`mt-0.5 w-5 h-5 rounded-lg border flex items-center justify-center transition-all flex-shrink-0 ${
                          form.consent 
                            ? 'bg-white border-white text-black shadow-[0_0_12px_rgba(255,255,255,0.3)]' 
                            : 'border-white/20 bg-white/[0.02] hover:border-white/40'
                        }`}
                      >
                        {form.consent && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </button>
                      <span className="text-xs text-white/50 font-light leading-relaxed select-none cursor-pointer" onClick={() => setForm({ ...form, consent: !form.consent })}>
                        Concordo em receber comunicações, atualizações institucionais e notas técnicas da Fifteen Miles de acordo com os princípios de privacidade e governança.
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting" || !form.consent}
                      className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-full bg-white text-black font-semibold text-sm tracking-tight hover:scale-[0.98] hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] group disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed mt-4"
                    >
                      <span>{status === "submitting" ? "Enviando Comunicação..." : "Enviar Comunicação"}</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}