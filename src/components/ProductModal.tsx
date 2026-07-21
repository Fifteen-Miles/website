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
    navigate(`/${product.name.toLowerCase()}`);
  };

  return (
    <div className="fm-modal-backdrop" onClick={onClose} data-lenis-prevent>
      <div className="fm-modal-container" onClick={(e) => e.stopPropagation()}>
        
        <div className="fm-modal-header">
          <div className="fm-modal-meta">
            <span className="fm-modal-id">{product.id}</span>
            <span className="fm-modal-version">{product.version}</span>
          </div>
          <button className="fm-modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="fm-modal-content">
          <div className="fm-modal-hero">
            <h2 className="fm-modal-title OldLondon">{product.name}</h2>
            <h3 className="fm-modal-tagline">{product.tagline}</h3>
            
            <div className="fm-modal-mission">
              <p>"{product.mission}"</p>
            </div>
            
            <p className="fm-modal-overview">{product.overview}</p>
          </div>

          <div className="fm-modal-grid-3">
            <div className="fm-modal-list-section">
              <h4>Capabilities</h4>
              <ul className="fm-modal-list">
                {product.capabilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="fm-modal-list-section">
              <h4>Use Cases</h4>
              <ul className="fm-modal-list">
                {product.useCases.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="fm-modal-list-section">
              <h4>Integrations</h4>
              <div className="fm-modal-chips">
                {product.integrations.map((item, i) => (
                  <span className="fm-chip" key={i}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="fm-modal-section-tech">
            <h4>Technical Specifications</h4>
            <div className="fm-properties-table">
              <div className="fm-table-header-row">
                <span>Property</span>
                <span>Details</span>
              </div>
              {product.properties.map((prop, index) => (
                <div className="fm-table-row" key={index}>
                  <span className="fm-prop-name">{prop.property}</span>
                  <span className="fm-prop-detail">{prop.details}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="fm-modal-footer-cta">
            <button className="fm-modal-primary-btn" onClick={handleExplore}>
              Inspecionar Arsenal
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductModal;