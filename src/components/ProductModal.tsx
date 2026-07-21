import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/ProductModal.css";

export interface ProductData {
  id: string;
  name: string;
  tagline: string;
  shortDesc: string;
  overview: string;
  mission: string;
  version: string;
  icon: string;
  capabilities: string[];
  integrations: string[];
  useCases: string[];
  properties: { property: string; details: string }[];
}

interface ProductModalProps {
  product: ProductData | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen || !product) return null;

  const handleExplore = () => {
    onClose();
    // Redireciona para a página usando o nome do produto em minúsculo (ex: /athena)
    navigate(`/${product.name.toLowerCase()}`);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} data-lenis-prevent>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Header do Modal */}
        <div className="modal-header">
          <div className="modal-meta">
            <span className="modal-id">{product.id}</span>
            <span className="modal-version">{product.version}</span>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-content">
          {/* Hero Section do Produto */}
          <div className="modal-hero">
            <h2 className="modal-title">{product.name}</h2>
            <h3 className="modal-tagline">{product.tagline}</h3>
            
            <div className="modal-mission">
              <p>"{product.mission}"</p>
            </div>
            
            <p className="modal-overview">{product.overview}</p>
          </div>

          {/* Grid de Informações */}
          <div className="modal-grid-3">
            <div className="modal-list-section">
              <h4>Capabilities</h4>
              <ul className="modal-list">
                {product.capabilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="modal-list-section">
              <h4>Use Cases</h4>
              <ul className="modal-list">
                {product.useCases.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="modal-list-section">
              <h4>Integrations</h4>
              <div className="modal-chips">
                {product.integrations.map((item, i) => (
                  <span className="chip" key={i}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Tabela de Propriedades Técnicas */}
          <div className="modal-section-tech">
            <h4>Technical Specifications</h4>
            <div className="properties-table">
              <div className="table-header-row">
                <span>Property</span>
                <span>Details</span>
              </div>
              {product.properties.map((prop, index) => (
                <div className="table-row" key={index}>
                  <span className="prop-name">{prop.property}</span>
                  <span className="prop-detail">{prop.details}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Footer do Modal */}
          <div className="modal-footer-cta">
            <button className="modal-primary-btn mono" onClick={handleExplore}>
              EXPLORAR MÓDULO COMPLETO
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductModal;