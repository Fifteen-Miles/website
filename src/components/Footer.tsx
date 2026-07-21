import { Link } from "react-router-dom";
import "./style/Footer.css";

const Footer = () => {
  return (
    <footer className="fm-footer">
      <div className="fm-footer-container">
        <div className="fm-footer-brand">
          <Link to="/" className="fm-footer-logo-link">
            <img src="/TopLogo.png" alt="Fifteen Miles" className="fm-footer-logo" />
          </Link>
          <p className="fm-footer-desc">
            Projetando software como grandes obras de engenharia. Tiramos empresas da Idade das Trevas através de clareza, automação e sistemas estruturados.
          </p>
        </div>

        <div className="fm-footer-grid">
          <div className="fm-footer-col">
            <span className="fm-footer-label">SYS.CAT</span>
            <h4 className="fm-footer-col-title">O Arsenal</h4>
            <ul className="fm-footer-list">
              <li><Link to="/athena">Athena</Link></li>
              <li><Link to="/hermes">Hermes</Link></li>
              <li><Link to="/hephaestus">Hephaestus</Link></li>
              <li><Link to="/atlas">Atlas</Link></li>
              <li><Link to="/orion">Orion</Link></li>
            </ul>
          </div>

          <div className="fm-footer-col">
            <span className="fm-footer-label">SYS.ORD</span>
            <h4 className="fm-footer-col-title">A Ordem</h4>
            <ul className="fm-footer-list">
              <li><Link to="/philosophy">Filosofia</Link></li>
              <li><Link to="/process">O Processo</Link></li>
              <li><Link to="/manifesto">Manifesto</Link></li>
              <li><Link to="/contact">Contato</Link></li>
            </ul>
          </div>

          <div className="fm-footer-col">
            <span className="fm-footer-label">SYS.NET</span>
            <h4 className="fm-footer-col-title">Conectar</h4>
            <ul className="fm-footer-list">
              <li><a href="#linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="#github" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="#twitter" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fm-footer-bottom">
        <div className="fm-footer-bottom-container">
          <span className="fm-footer-copy">&copy; {new Date().getFullYear()} Fifteen Miles. All rights reserved.</span>
          <div className="fm-footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="fm-footer-dot">/</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
          <span className="fm-footer-sig OldLondon">XV</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;