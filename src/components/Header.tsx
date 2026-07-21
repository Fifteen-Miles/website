import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style/Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fm-header ${scrolled ? "scroll" : ""}`}>
      <nav className="fm-container">
        
        <div className="left-section">
          <Link to="/" className="logo">
            {/* O logo ganha um sutil glow dourado no hover pelo CSS */}
            Fifteen Miles
          </Link>
        </div>

        <div className="center-section">
          
          <div className="nav-item">
            <span className="nav-link">Arsenal</span>
            <div className="mega-menu w-large">
              <div className="menu-wrapper">
                <div className="menu-grid">
                  <div className="menu-col">
                    <Link to="/athena" className="menu-card">
                      <span className="card-label">SYS.001</span>
                      <span className="card-title OldLondon">Athena</span>
                      <span className="card-desc">Business intelligence impulsionada por IA e linguagem</span>
                    </Link>
                    <Link to="/atlas" className="menu-card">
                      <span className="card-label">SYS.004</span>
                      <span className="card-title OldLondon">Atlas</span>
                      <span className="card-desc">Monitoramento de infraestrutura e visibilidade operacional</span>
                    </Link>
                  </div>
                  
                  <div className="menu-col">
                    <Link to="/hephaestus" className="menu-card">
                      <span className="card-label">SYS.002</span>
                      <span className="card-title OldLondon">Hephaestus</span>
                      <span className="card-desc">Crie fluxos de trabalho inteligentes conectando sistemas</span>
                    </Link>
                    <Link to="/orion" className="menu-card">
                      <span className="card-label">SYS.005</span>
                      <span className="card-title OldLondon">Orion</span>
                      <span className="card-desc">Visualize, monitore e controle toda sua operação em tempo real</span>
                    </Link>
                  </div>

                  <div className="menu-col">
                    <Link to="/hermes" className="menu-card">
                      <span className="card-label">SYS.003</span>
                      <span className="card-title OldLondon">Hermes</span>
                      <span className="card-desc">Integrações de dados fluidas para toda a sua operação</span>
                    </Link>
                  </div>
                </div>
                <div className="menu-footer">
                  <span className="footer-text">NEW: AI AGENT PROPERTIES</span>
                  <Link to="/changelog" className="footer-link">Ver Manuscritos →</Link>
                </div>
              </div>
            </div>
          </div>

          {/*<div className="nav-item">
            <span className="nav-link">Expertise</span>
            <div className="mega-menu w-medium">
              <div className="menu-wrapper">
                <div className="menu-grid">
                  <div className="menu-col">
                    <Link to="/ai" className="menu-card">
                      <span className="card-label">EXP.01</span>
                      <span className="card-title OldLondon">Artif. Intelligence</span>
                      <span className="card-desc">Deploy custom language models and OCR</span>
                    </Link>
                    <Link to="/cloud" className="menu-card">
                      <span className="card-label">EXP.03</span>
                      <span className="card-title OldLondon">Cloud Computing</span>
                      <span className="card-desc">Scalable architecture hosted on AWS</span>
                    </Link>
                  </div>
                  <div className="menu-col">
                    <Link to="/automation" className="menu-card">
                      <span className="card-label">EXP.02</span>
                      <span className="card-title OldLondon">Automation</span>
                      <span className="card-desc">Eliminate manual work and repetitive tasks</span>
                    </Link>
                    <Link to="/data" className="menu-card">
                      <span className="card-label">EXP.04</span>
                      <span className="card-title OldLondon">Data Engineering</span>
                      <span className="card-desc">Structuring pipelines for massive datasets</span>
                    </Link>
                  </div>
                </div>
                <div className="menu-footer">
                  <span className="footer-text">EXPLORE OUR TECH STACK</span>
                  <Link to="/technologies" className="footer-link">Inspecionar Arsenal →</Link>
                </div>
              </div>
            </div>
          </div> */}
          
          <div className="nav-item">
            <span className="nav-link">Ordem</span>
            <div className="mega-menu w-medium">
              <div className="menu-wrapper">
                <div className="menu-grid">
                  <div className="menu-col">
                    <Link to="/philosophy" className="menu-card">
                      <span className="card-label">ORG.01</span>
                      <span className="card-title OldLondon">Filosofia</span>
                      <span className="card-desc">Engineering beyond traditional software</span>
                    </Link>
                    <Link to="/careers" className="menu-card">
                      <span className="card-label">ORG.03</span>
                      <span className="card-title OldLondon">Carreiras</span>
                      <span className="card-desc">Join the team building the next era of tech</span>
                    </Link>
                  </div>
                  <div className="menu-col">
                    <Link to="/process" className="menu-card">
                      <span className="card-label">ORG.02</span>
                      <span className="card-title OldLondon">Processo</span>
                      <span className="card-desc">How we design, build and scale systems</span>
                    </Link>
                    <Link to="/manifesto" className="menu-card">
                      <span className="card-label">ORG.04</span>
                      <span className="card-title OldLondon">Manifesto</span>
                      <span className="card-desc">Leaving the Dark Ages of operations behind</span>
                    </Link>
                  </div>
                </div>
                <div className="menu-footer">
                  <span className="footer-text">OUR STORY</span>
                  <Link to="/about" className="footer-link">Os Fundamentos →</Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="right-section">
          <Link to="/contact" className="btn-premium">Entre em Contato</Link>
        </div>

      </nav>
    </header>
  );
};

export default Header;