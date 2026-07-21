import React, { useState } from "react";
import "./style/Pricing.css";
import PurchaseModal from "../components/PurchaseModal";

const COORDS = ["XIV", "XV", "XVI", "XVII"];

export default function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState("Tudo");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "", price: "" });

  const handleOpenModal = (name: string, price: string) => {
    setSelectedPlan({ name, price });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const plansData = [
    {
      id: "olympus",
      category: "Ecossistema",
      name: "Olympus (Pro Suite)",
      badge: "Economize 53%",
      tagClass: "amber",
      price: "R$ 99,00/mês",
      rawPrice: "R$ 99,00",
      desc: "Acesso integral a todos os 5 sistemas corporativos (Athena, Hermes, Hephaestus, Atlas e Orion) em uma única assinatura unificada com IA integrada.",
      exclusive: "Exclusivo Brasil"
    },
    {
      id: "prometheus",
      category: "Inteligência",
      name: "Athena",
      badge: "Preço exclusivo Brasil",
      tagClass: "red",
      price: "R$ 65,00/mês",
      rawPrice: "R$ 65,00",
      desc: "Plataforma de inteligência artificial corporativa para transformar dados em conhecimento acionável em linguagem natural.",
      exclusive: "IA Avançada"
    },
    {
      id: "hermes",
      category: "Integração",
      name: "Hermes",
      badge: "Preço exclusivo Brasil",
      tagClass: "red",
      price: "R$ 55,00/mês",
      rawPrice: "R$ 55,00",
      desc: "Camada universal de integração para conectar ERPs, CRMs e APIs sem fricção e com alta vazão de eventos.",
      exclusive: "Streams ao vivo"
    },
    {
      id: "hephaestus",
      category: "Automação",
      name: "Hephaestus",
      badge: "Preço exclusivo Brasil",
      tagClass: "red",
      price: "R$ 65,00/mês",
      rawPrice: "R$ 65,00",
      desc: "Motor visual de fluxos de trabalho e automação inteligente com processamento OCR e agentes autônomos.",
      exclusive: "Low-Code Builder"
    },
    {
      id: "atlas",
      category: "Infraestrutura",
      name: "Atlas",
      badge: "Preço exclusivo Brasil",
      tagClass: "red",
      price: "R$ 71,00/mês",
      rawPrice: "R$ 71,00",
      desc: "Centralização de servidores, containers Kubernetes e ambientes cloud em uma única plataforma de alta resiliência.",
      exclusive: "Multi-Cloud"
    },
    {
      id: "orion",
      category: "Controle",
      name: "Orion",
      badge: "Economize 30%",
      tagClass: "amber",
      price: "R$ 164,50/mês",
      rawPrice: "R$ 164,50",
      desc: "Centro de comando executivo com telemetria em tempo real, monitoramento global e correlação de eventos por IA.",
      exclusive: "Enterprise View"
    }
  ];

  const filteredPlans = selectedCategory === "Tudo" 
    ? plansData 
    : plansData.filter(p => p.category === selectedCategory);

  return (
    <main className="tj-page">
      <div className="tj-grain" />

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

      <section className="tj-adobe-layout-container">
        <aside className="tj-adobe-sidebar">
          <span className="tj-sidebar-title">Categorias</span>
          <ul>
            {["Tudo", "Ecossistema", "Inteligência", "Integração", "Automação", "Infraestrutura", "Controle"].map((cat) => (
              <li 
                key={cat} 
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        <div className="tj-adobe-content-area">
          <div className="tj-adobe-header-info">
            <span className="tj-hero-title">PLANOS & LICENÇAS</span>
            <h1 className="OldLondon tj-adobe-main-heading">Planos e preços dos sistemas corporativos e muito mais.</h1>
            <p>Comece com confiança! Solicite o cancelamento em até 14 dias para reembolso integral.</p>
          </div>

          <div className="tj-adobe-grid-cards">
            {filteredPlans.map((plan) => (
              <div key={plan.id} className="tj-adobe-dark-card">
                <span className={`tj-card-badge ${plan.tagClass}`}>{plan.badge}</span>
                <h3 className="OldLondon tj-card-title">{plan.name}</h3>
                <div className="tj-card-pricing-block">
                  <strong>{plan.price}</strong>
                  <span>Anual, cobrado mensalmente</span>
                </div>
                <p className="tj-card-desc">{plan.desc}</p>
                <div className="tj-card-footer">
                  <button className="tj-btn tj-card-buy-btn" onClick={() => handleOpenModal(plan.name, plan.rawPrice)}>
                    Compre agora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="tj-footer">
        <span className="tj-footer-signature">XV</span>
      </footer>

      <PurchaseModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        planName={selectedPlan.name} 
        basePrice={selectedPlan.price} 
      />
    </main>
  );
}