"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Mail, Send, Check, ScrollText, Landmark } from "lucide-react";
import Seo from "../components/Seo";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const FONT_BLACK = `'UnifrakturMaguntia', serif`;
const FONT_HEADING = `'Coolvetica', 'Helvetica Neue', sans-serif`;
const FONT_DISPLAY = `'Fraunces', serif`;
const FONT_EYEBROW = `'Cinzel', serif`;
const FONT_MONO = `'JetBrains Mono', monospace`;

const INK = "#1C1710";
const WINE = "#5C0000";
const PARCHMENT = "#FAF7F0";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

function useMedievalFonts() {
  useEffect(() => {
    if (document.getElementById("fm-medieval-fonts")) return;
    const link = document.createElement("link");
    link.id = "fm-medieval-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;1,9..144,400&family=UnifrakturMaguntia&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
}

function BlueprintGrid({ opacity = 0.045 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(92,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(92,0,0,1) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        opacity,
        maskImage: "radial-gradient(ellipse 75% 60% at 50% 10%, black 30%, transparent 85%)",
        WebkitMaskImage: "radial-gradient(ellipse 75% 60% at 50% 10%, black 30%, transparent 85%)",
      }}
    />
  );
}

function CornerMarks({ inset = 0 }: { inset?: number }) {
  const corners = [
    { cls: "top-0 left-0", d: "M1 10 L1 1 L10 1" },
    { cls: "top-0 right-0", d: "M10 1 L19 1 L19 10" },
    { cls: "bottom-0 right-0", d: "M19 10 L19 19 L10 19" },
    { cls: "bottom-0 left-0", d: "M10 19 L1 19 L1 10" },
  ];
  return (
    <>
      {corners.map((c, i) => (
        <svg
          key={i}
          className={`absolute w-5 h-5 pointer-events-none ${c.cls}`}
          style={{ margin: inset }}
          viewBox="0 0 20 20"
        >
          <path d={c.d} stroke={WINE} strokeWidth="1.25" opacity="0.4" fill="none" />
        </svg>
      ))}
    </>
  );
}

function Seal({ size = 100 }: { size?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <circle cx="50" cy="50" r="47" fill="none" stroke={WINE} strokeWidth="1" opacity="0.45" />
        <circle cx="50" cy="50" r="39" fill="none" stroke={WINE} strokeWidth="0.5" opacity="0.28" />
        {mounted &&
          Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * Math.PI * 2;
            const long = i % 6 === 0;
            const r1 = 47;
            const r2 = long ? 41 : 44.5;
            return (
              <line
                key={i}
                x1={50 + r1 * Math.cos(angle)}
                y1={50 + r1 * Math.sin(angle)}
                x2={50 + r2 * Math.cos(angle)}
                y2={50 + r2 * Math.sin(angle)}
                stroke={WINE}
                strokeWidth={long ? 1 : 0.5}
                opacity={long ? 0.55 : 0.28}
              />
            );
          })}
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center select-none"
        style={{ fontFamily: FONT_BLACK, color: WINE, fontSize: size * 0.32, lineHeight: 1 }}
      >
        XV
      </div>
    </div>
  );
}

export default function Contact() {
  useMedievalFonts();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", consent: false });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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
    <div
      className="min-h-screen overflow-x-hidden pt-36 pb-32 relative selection:bg-[#5C0000]/10 selection:text-[#1C1710]"
      style={{ background: PARCHMENT, color: INK, fontFamily: "Inter" }}
    >
      <Seo title="Contato — Fifteen Miles" description="Fale com a Fifteen Miles: parcerias, demonstrações e consultas institucionais para o Atlas OS." path="/contact" />
      <BlueprintGrid opacity={0.05} />

      <style dangerouslySetInnerHTML={{ __html: `
        @font-face {
          font-family: 'Coolvetica';
          src: url('https://cdn.jsdelivr.net/gh/luxonauta/coolvetica@master/woff2/CoolveticaRg.woff2') format('woff2');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
      `}} />

      <main className="max-w-[1400px] mx-auto px-6 sm:px-14 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl pb-16 mb-20"
          style={{ borderBottom: "1px solid rgba(92,0,0,0.12)" }}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] uppercase font-mono tracking-[0.2em] mb-8"
            style={{ color: WINE, border: "1px solid rgba(92,0,0,0.25)", background: "rgba(92,0,0,0.03)" }}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Comunicação Institucional</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-7xl font-medium tracking-tight leading-[1.05] mb-8"
            style={{ fontFamily: FONT_HEADING }}
          >
            Inicie um diálogo <br />
            <span style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", fontWeight: 400, color: WINE }}>
              com a Fifteen Miles.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl font-light leading-relaxed max-w-3xl"
            style={{ color: "rgba(28,23,16,0.7)" }}
          >
            Convidamos executivos, diretores de tecnologia e operadores que buscam um sistema operacional verdadeiramente permanente para suas organizações.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="lg:col-span-5 space-y-6"
          >
            <div
              className="p-8 sm:p-10 rounded-[10px] relative overflow-hidden"
              style={{ border: "1px solid rgba(92,0,0,0.2)", background: "#fff" }}
            >
              <div className="relative z-10">
                <span className="text-[10px] uppercase font-mono tracking-[0.25em]" style={{ color: "rgba(28,23,16,0.45)" }}>
                  Canal Direto
                </span>
                <h2 className="text-2xl font-medium tracking-tight mt-3 mb-4" style={{ fontFamily: FONT_DISPLAY }}>
                  Correio Eletrônico
                </h2>
                <p className="text-sm font-light leading-relaxed mb-6" style={{ color: "rgba(28,23,16,0.65)" }}>
                  Para consultas corporativas, parcerias institucionais ou agendamento de demonstrações técnicas do Atlas OS.
                </p>
                <a
                  href="mailto:contato.fifteenmiles@gmail.com"
                  className="text-sm font-medium transition-colors"
                  style={{ fontFamily: FONT_MONO, color: WINE, textDecoration: "underline", textUnderlineOffset: "4px", textDecorationColor: "rgba(92,0,0,0.3)" }}
                >
                  contato.fifteenmiles@gmail.com
                </a>
              </div>
            </div>

            <div
              className="p-8 sm:p-10 rounded-[10px] relative overflow-hidden"
              style={{ border: "1px solid rgba(92,0,0,0.2)", background: "#fff" }}
            >
              <div className="relative z-10">
                <span className="text-[10px] uppercase font-mono tracking-[0.25em]" style={{ color: "rgba(28,23,16,0.45)" }}>
                  Sede & Presença
                </span>
                <h2 className="text-2xl font-medium tracking-tight mt-3 mb-4" style={{ fontFamily: FONT_DISPLAY }}>
                  Operação Global
                </h2>
                <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(28,23,16,0.65)" }}>
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
            <div
              className="p-8 sm:p-12 lg:p-16 rounded-[10px] relative overflow-hidden"
              style={{ border: "1px solid rgba(92,0,0,0.25)", background: "#fff", boxShadow: "0 30px 60px -15px rgba(28,23,16,0.05)" }}
            >
              <CornerMarks inset={10} />
              
              <div className="relative z-10">
                {status === "success" ? (
                  <div className="text-center py-12 flex flex-col items-center">
                    <Seal size={72} />
                    <div
                      className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase font-mono"
                      style={{ letterSpacing: "0.28em", color: WINE }}
                    >
                      <ScrollText className="w-3.5 h-3.5" />
                      <span>Comunicação Registrada</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl mt-6 mb-4" style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, color: INK }}>
                      Mensagem Entregue
                    </h3>
                    <p className="text-base font-light max-w-md mx-auto leading-relaxed mb-10" style={{ color: "rgba(28,23,16,0.7)" }}>
                      Sua mensagem foi entregue diretamente aos nossos canais oficiais. Retornaremos com o rigor e a atenção que sua organização exige.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="group flex items-center bg-white text-[#590C0D] font-[Raleway] uppercase border justify-center gap-2 px-8 py-3 rounded-md text-sm transition-all duration-200 cursor-pointer hover:bg-[#590C0D] hover:text-white"
                    >
                      Enviar nova mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-[0.25em] mb-2" style={{ color: "rgba(28,23,16,0.6)" }}>
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Seu nome"
                        className="w-full px-5 py-4 rounded-[6px] text-sm focus:outline-none transition-all placeholder:text-[#1C1710]/30"
                        style={{ border: "1px solid rgba(92,0,0,0.18)", background: PARCHMENT, color: INK }}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] uppercase font-mono tracking-[0.25em] mb-2" style={{ color: "rgba(28,23,16,0.6)" }}>
                          E-mail Corporativo
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="nome@empresa.com"
                          className="w-full px-5 py-4 rounded-[6px] text-sm focus:outline-none transition-all placeholder:text-[#1C1710]/30"
                          style={{ border: "1px solid rgba(92,0,0,0.18)", background: PARCHMENT, color: INK }}
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-mono tracking-[0.25em] mb-2" style={{ color: "rgba(28,23,16,0.6)" }}>
                          Organização
                        </label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Nome da instituição"
                          className="w-full px-5 py-4 rounded-[6px] text-sm focus:outline-none transition-all placeholder:text-[#1C1710]/30"
                          style={{ border: "1px solid rgba(92,0,0,0.18)", background: PARCHMENT, color: INK }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-[0.25em] mb-2" style={{ color: "rgba(28,23,16,0.6)" }}>
                        Descreva os Desafios de Infraestrutura
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Descreva a estrutura operacional atual, objetivos de longo prazo ou necessidades..."
                        className="w-full px-5 py-4 rounded-[6px] text-sm focus:outline-none transition-all resize-none placeholder:text-[#1C1710]/30"
                        style={{ border: "1px solid rgba(92,0,0,0.18)", background: PARCHMENT, color: INK }}
                      />
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={form.consent}
                        onClick={() => setForm({ ...form, consent: !form.consent })}
                        className="mt-0.5 w-5 h-5 rounded-[4px] flex items-center justify-center transition-all flex-shrink-0"
                        style={{
                          border: `1px solid ${form.consent ? WINE : "rgba(92,0,0,0.3)"}`,
                          background: form.consent ? WINE : "transparent",
                        }}
                      >
                        {form.consent && <Check className="w-3.5 h-3.5" style={{ color: PARCHMENT }} strokeWidth={3} />}
                      </button>
                      <span
                        className="text-xs font-light leading-relaxed select-none cursor-pointer"
                        style={{ color: "rgba(28,23,16,0.65)" }}
                        onClick={() => setForm({ ...form, consent: !form.consent })}
                      >
                        Concordo em receber comunicações, atualizações institucionais e notas técnicas da Fifteen Miles de acordo com os princípios de privacidade e governança.
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting" || !form.consent}
                      className="group flex items-center w-full bg-white text-[#590C0D] font-[Raleway] uppercase border border-[#590C0D] justify-center gap-2 px-6 py-4 mt-6 rounded-md text-sm transition-all duration-200 cursor-pointer hover:bg-[#590C0D] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{status === "submitting" ? "Enviando Comunicação..." : "Enviar Comunicação"}</span>
                      <Send className="w-4 h-4" />
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