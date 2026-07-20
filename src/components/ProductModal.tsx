import React from "react";
import "./style/ProductModal.css";

export interface ProductData {
  id: string;
  name: string;
  shortDesc: string;
  overview: string;
  properties: { property: string; details: string }[];
}

interface ProductModalProps {
  product: ProductData | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-top-tag">TECH SPECS // {product.id}</span>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <span className="modal-sub-id">{product.id}</span>
          <h2 className="modal-title">{product.name}</h2>

          <div className="modal-section">
            <h3>Overview</h3>
            <p className="modal-overview-text">{product.overview}</p>
          </div>

          <div className="modal-preview-box">
            <div className="preview-terminal">
              <p>&gt; loading ecosystem module: {product.name.toLowerCase()}...</p>
              <p className="accent-text">&gt; core verification: active [secure]</p>
              <p>&gt; status: fully synchronized with corporate pipeline</p>
            </div>
          </div>

          <div className="modal-section">
            <h3>Properties</h3>
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
        </div>
      </div>
    </div>
  );
};

export default ProductModal;