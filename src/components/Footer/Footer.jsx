import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Marca / Logo */}
        <div className="footer-brand">
          <span className="footer-logo">
            <span className="text-cyan">Bryan</span> Cotrina
          </span>
          <p className="footer-tagline">Ingeniero de Software con IA.</p>
        </div>

        {/* Navegación rápida */}
        <nav className="footer-nav">
          <a href="#sobre-mi">Perfil</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#certificados">Certificados</a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* Redes sociales */}
        <div className="footer-social">
          <a href="https://github.com/Shephard07" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            🐙 GitHub
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            💼 LinkedIn
          </a>
          <a href="mailto:cotrina.bryaneloyt@gmail.com" aria-label="Email">
            📧 Email
          </a>
        </div>

      </div>

      {/* Línea divisoria y copyright */}
      <div className="footer-bottom">
        <span>© {currentYear} Bryan Eloy Cotrina Ortiz.</span>
      </div>
    </footer>
  );
};

export default Footer;
