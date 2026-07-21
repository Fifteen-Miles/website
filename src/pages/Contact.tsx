import React, { useState } from "react";
import "./style/Contact.css";

const COORDS = ["XIV", "XV", "XVI", "XVII"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="tj-page">
      <div className="tj-grain" />
      <div className="tj-vignette" />

      <div className="tj-bg-circles" aria-hidden="true">
        <span className="tj-circle tj-circle-a" />
        <span className="tj-circle tj-circle-b" />
        <span className="tj-circle tj-circle-c" />
      </div>
      <div className="tj-coords" aria-hidden="true">
        {COORDS.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>

      <section className="tj-hero">
        <span className="tj-numeral">XV</span>
        <span className="tj-hero-title">CONTATO</span>
        <p className="tj-hero-phrase">
          Inicie o diálogo com a Ordem. Suas dúvidas e projetos merecem precisão absoluta.
        </p>

        {sent ? (
          <div className="tj-success-msg">
            <h3 className="tj-title tj-title--old">Mensagem Transmitida</h3>
            <p className="tj-hero-phrase">Retornaremos em breve.</p>
          </div>
        ) : (
          <form className="tj-contact-form" onSubmit={handleSubmit}>
            <div className="tj-form-group">
              <input 
                type="text" 
                placeholder="Seu Nome / Reino" 
                value={form.name} 
                onChange={(e) => setForm({ ...form, name: e.target.value })} 
                required 
              />
            </div>
            <div className="tj-form-group">
              <input 
                type="email" 
                placeholder="Seu E-mail Corporativo" 
                value={form.email} 
                onChange={(e) => setForm({ ...form, email: e.target.value })} 
                required 
              />
            </div>
            <div className="tj-form-group">
              <textarea 
                placeholder="Sua Mensagem" 
                rows={5} 
                value={form.message} 
                onChange={(e) => setForm({ ...form, message: e.target.value })} 
                required 
              />
            </div>
            <button type="submit" className="tj-btn">Enviar Mensagem</button>
          </form>
        )}
      </section>

      <footer className="tj-footer">
        <span className="tj-footer-signature">XV</span>
      </footer>
    </main>
  );
}