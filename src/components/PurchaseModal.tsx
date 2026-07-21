import React, { useState } from "react";
import "./style/PurchaseModal.css";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  basePrice?: string;
}

export default function PurchaseModal({ isOpen, onClose, planName, basePrice = "0" }: PurchaseModalProps) {
  const [step, setStep] = useState<"select" | "checkout" | "success">("select");
  const [billingType, setBillingType] = useState<"monthly" | "annual_monthly" | "annual_prepaid">("annual_monthly");
  const [addon, setAddon] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "pix" | "paypal">("card");

  if (!isOpen) return null;

  const handleReset = () => {
    setStep("select");
    setBillingType("annual_monthly");
    setAddon(false);
    onClose();
  };

  const getPrices = () => {
    const safePrice = basePrice || "0";
    const numericBase = parseFloat(safePrice.replace("R$ ", "").replace(",", "."));
    if (billingType === "monthly") return { totalText: `R$ ${(numericBase * 1.3).toFixed(2).replace(".", ",")}/mês` };
    if (billingType === "annual_monthly") return { totalText: `R$ ${numericBase.toFixed(2).replace(".", ",")}/mês` };
    return { totalText: `R$ ${(numericBase * 10).toFixed(2).replace(".", ",")}/ano` };
  };

  const currentPricing = getPrices();

  return (
    <div className="tj-modal-backdrop" onClick={handleReset}>
      <div className="tj-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="tj-modal-close" onClick={handleReset}>✕</button>

        {step === "select" && (
          <div className="tj-modal-content">
            <div className="tj-modal-top-header">
              <span className="tj-modal-tag">ESCOLHA UMA ASSINATURA</span>
              <h2 className="OldLondon tj-modal-main-title">{planName}</h2>
              <p className="tj-modal-subtitle">Selecione a modalidade ideal para expandir as operações do seu domínio.</p>
            </div>

            <div className="tj-subscription-options">
              <label className={`tj-sub-option ${billingType === "monthly" ? "selected" : ""}`}>
                <input 
                  type="radio" 
                  name="billing" 
                  checked={billingType === "monthly"} 
                  onChange={() => setBillingType("monthly")} 
                />
                <div className="tj-sub-info">
                  <span className="tj-sub-title">Mensal</span>
                  <span className="tj-sub-desc">Cancele a qualquer momento, sem taxa de fidelidade.</span>
                </div>
                <span className="tj-sub-price">R$ {(parseFloat((basePrice || "0").replace("R$ ", "").replace(",", ".")) * 1.3).toFixed(2).replace(".", ",")}/mês</span>
              </label>

              <label className={`tj-sub-option highlighted ${billingType === "annual_monthly" ? "selected" : ""}`}>
                <input 
                  type="radio" 
                  name="billing" 
                  checked={billingType === "annual_monthly"} 
                  onChange={() => setBillingType("annual_monthly")} 
                />
                <div className="tj-sub-info">
                  <div className="tj-sub-title-row">
                    <span className="tj-sub-title">Anual, cobrança mensal</span>
                    <span className="tj-badge-inline">Economize 53%</span>
                  </div>
                  <span className="tj-sub-desc">Compromisso de 12 meses. Melhor custo-benefício.</span>
                </div>
                <span className="tj-sub-price">{basePrice}/mês</span>
              </label>

              <label className={`tj-sub-option ${billingType === "annual_prepaid" ? "selected" : ""}`}>
                <input 
                  type="radio" 
                  name="billing" 
                  checked={billingType === "annual_prepaid"} 
                  onChange={() => setBillingType("annual_prepaid")} 
                />
                <div className="tj-sub-info">
                  <span className="tj-sub-title">Plano anual pré-pago</span>
                  <span className="tj-sub-desc">Pagamento único antecipado para o período integral.</span>
                </div>
                <span className="tj-sub-price">R$ {(parseFloat((basePrice || "0").replace("R$ ", "").replace(",", ".")) * 10).toFixed(2).replace(".", ",")}/ano</span>
              </label>
            </div>

            <div className="tj-addon-box">
              <label>
                <input 
                  type="checkbox" 
                  checked={addon} 
                  onChange={(e) => setAddon(e.target.checked)} 
                />
                Adicione 1 mês grátis de ativos padrão do acervo de expansão corporativa.
              </label>
            </div>

            <button className="tj-btn tj-modal-continue-btn" onClick={() => setStep("checkout")}>
              Continuar
            </button>
          </div>
        )}

        {step === "checkout" && (
          <div className="tj-checkout-layout">
            <div className="tj-checkout-form-side">
              <span className="tj-modal-tag">PAGAMENTO SEGURO</span>
              <h2 className="OldLondon tj-modal-main-title">Insira as informações de pagamento</h2>
              
              <div className="tj-payment-tabs">
                <button className={paymentMethod === "card" ? "active" : ""} onClick={() => setPaymentMethod("card")}>Cartão</button>
                <button className={paymentMethod === "pix" ? "active" : ""} onClick={() => setPaymentMethod("pix")}>Pix</button>
                <button className={paymentMethod === "paypal" ? "active" : ""} onClick={() => setPaymentMethod("paypal")}>PayPal</button>
              </div>

              {paymentMethod === "card" && (
                <div className="tj-card-inputs">
                  <input type="text" placeholder="Número do cartão" required />
                  <div className="tj-row-inputs">
                    <input type="text" placeholder="MM/AA" required />
                    <input type="text" placeholder="CVV" required />
                  </div>
                  <input type="text" placeholder="Nome impresso no cartão" required />
                  <input type="text" placeholder="Endereço de cobrança" required />
                  <div className="tj-row-inputs">
                    <input type="text" placeholder="Cidade" required />
                    <input type="text" placeholder="CEP" required />
                  </div>
                </div>
              )}

              {paymentMethod === "pix" && (
                <div className="tj-pix-box">
                  <p>O QR Code instantâneo será gerado para liberação imediata do sistema.</p>
                </div>
              )}

              {paymentMethod === "paypal" && (
                <div className="tj-paypal-box">
                  <p>Você será redirecionado para autenticar sua conta de forma segura.</p>
                </div>
              )}

              <button className="tj-btn tj-modal-continue-btn" onClick={() => setStep("success")}>
                Concordar e assinar
              </button>
            </div>

            <div className="tj-checkout-summary-side">
              <h3 className="OldLondon">Seu carrinho</h3>
              <div className="tj-summary-item">
                <span>{planName}</span>
                <strong>{currentPricing.totalText}</strong>
              </div>
              {addon && (
                <div className="tj-summary-addon">
                  <span>Adicional Corporativo</span>
                  <strong>Grátis (1º mês)</strong>
                </div>
              )}
              <div className="tj-summary-total">
                <span>Total atual</span>
                <strong className="tj-total-price">{currentPricing.totalText}</strong>
              </div>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="tj-modal-content tj-success-content">
            <span className="tj-modal-tag">STATUS: CONCLUÍDO</span>
            <h2 className="OldLondon tj-modal-main-title">Licença Concedida</h2>
            <p className="tj-hero-phrase">
              O acesso ao ecossistema para o plano <strong>{planName}</strong> foi validado com sucesso.
            </p>
            <button className="tj-btn" onClick={handleReset}>Retornar ao Início</button>
          </div>
        )}
      </div>
    </div>
  );
}