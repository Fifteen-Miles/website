import "./style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/TopLogo.png" alt="15Miles Logo" className="footer-logo" />
          <p>
            Projetando software como grandes obras de engenharia. 
            Tiramos empresas da Idade das Trevas através de clareza, 
            automação e sistemas estruturados.
          </p>
        </div>

        <nav className="footer-links-grid">
          <div className="footer-col">
            <h4>Ecosystem</h4>
            <ul>
              <li><a href="#athena">Athena</a></li>
              <li><a href="#hermes">Hermes</a></li>
              <li><a href="#hephaestus">Hephaestus</a></li>
              <li><a href="#atlas">Atlas</a></li>
              <li><a href="#chronos">Chronos</a></li>
              <li><a href="#argos">Argos</a></li>
              <li><a href="#apollo">Apollo</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#philosophy">Engineering Philosophy</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#projects">Featured Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="#linkedin">LinkedIn</a></li>
              <li><a href="#github">GitHub</a></li>
              <li><a href="#twitter">X (Twitter)</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Fifteen Miles. All rights reserved.</p>
        
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;