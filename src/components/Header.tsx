import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Style/Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scroll" : ""}`}>
      <nav className="container">
        
        <div className="left-section">
          <Link to="/" className="logo-link">
            <img src="/TopLogo.png" alt="Fifteen Miles" className="logo" />
          </Link>
        </div>

        <div className="center-section">
          
          <div className="nav-item">
            <span className="nav-link">Ecosystem</span>
            <div className="mega-menu w-large">
              <div className="menu-wrapper">
                <div className="menu-grid">
                  <div className="menu-col">
                    <Link to="/athena" className="menu-card">
                      <span className="card-label">Athena</span>
                      <span className="card-title">Business intelligence powered by AI and language</span>
                    </Link>
                    <Link to="/atlas" className="menu-card">
                      <span className="card-label">Atlas</span>
                      <span className="card-title">Infrastructure monitoring and operational visibility</span>
                    </Link>
                  </div>
                  
                  <div className="menu-col">
                    <Link to="/hephaestus" className="menu-card">
                      <span className="card-label">Hephaestus</span>
                      <span className="card-title">Build intelligent workflows connecting systems</span>
                    </Link>
                    <Link to="/chronos" className="menu-card">
                      <span className="card-label">Chronos</span>
                      <span className="card-title">Advanced management and time-saving engines</span>
                    </Link>
                  </div>

                  <div className="menu-col">
                    <Link to="/hermes" className="menu-card">
                      <span className="card-label">Hermes</span>
                      <span className="card-title">Seamless data integrations for your entire operation</span>
                    </Link>
                    <Link to="/apollo" className="menu-card">
                      <span className="card-label">Apollo</span>
                      <span className="card-title">Ultimate clarity and analytics for strategic decisions</span>
                    </Link>
                  </div>
                </div>
                <div className="menu-footer">
                  <span className="footer-text">New: AI Agent properties</span>
                  <Link to="/changelog" className="footer-link">Changelog</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-item">
            <span className="nav-link">Expertise</span>
            <div className="mega-menu w-medium">
              <div className="menu-wrapper">
                <div className="menu-grid">
                  <div className="menu-col">
                    <Link to="/ai" className="menu-card">
                      <span className="card-label">Artificial Intelligence</span>
                      <span className="card-title">Deploy custom language models and OCR</span>
                    </Link>
                    <Link to="/cloud" className="menu-card">
                      <span className="card-label">Cloud Computing</span>
                      <span className="card-title">Scalable architecture hosted on AWS</span>
                    </Link>
                  </div>
                  <div className="menu-col">
                    <Link to="/automation" className="menu-card">
                      <span className="card-label">Automation</span>
                      <span className="card-title">Eliminate manual work and repetitive tasks</span>
                    </Link>
                    <Link to="/data" className="menu-card">
                      <span className="card-label">Data Engineering</span>
                      <span className="card-title">Structuring pipelines for massive datasets</span>
                    </Link>
                  </div>
                </div>
                <div className="menu-footer">
                  <span className="footer-text">Explore our tech stack</span>
                  <Link to="/technologies" className="footer-link">View Stack</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="nav-item">
            <span className="nav-link">Company</span>
            <div className="mega-menu w-medium">
              <div className="menu-wrapper">
                <div className="menu-grid">
                  <div className="menu-col">
                    <Link to="/philosophy" className="menu-card">
                      <span className="card-label">Philosophy</span>
                      <span className="card-title">Engineering beyond traditional software</span>
                    </Link>
                    <Link to="/careers" className="menu-card">
                      <span className="card-label">Careers</span>
                      <span className="card-title">Join the team building the next era of tech</span>
                    </Link>
                  </div>
                  <div className="menu-col">
                    <Link to="/process" className="menu-card">
                      <span className="card-label">Process</span>
                      <span className="card-title">How we design, build and scale systems</span>
                    </Link>
                    <Link to="/manifesto" className="menu-card">
                      <span className="card-label">Manifesto</span>
                      <span className="card-title">Leaving the Dark Ages of operations behind</span>
                    </Link>
                  </div>
                </div>
                <div className="menu-footer">
                  <span className="footer-text">Our Story</span>
                  <Link to="/about" className="footer-link">Read about us</Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="right-section">
          <Link to="/contact" className="contact-btn">Start Journey</Link>
        </div>

      </nav>
    </header>
  );
};

export default Header;