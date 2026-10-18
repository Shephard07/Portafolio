import { useState } from "react";
import "./Navbar.css";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  return (
    <header className="site-header">
      <nav
        className="site-nav page-width"
        aria-label="Navegación principal"
        onKeyDown={(e) => {
          if (e.key === "Escape") close();
        }}
      >
        <a className="brand" href="#inicio" onClick={close}>
          <span className="brand-symbol">
            b<span>.</span>
          </span>
          <span>
            Bryan Cotrina<span className="brand-caption">SOFTWARE & IA</span>
          </span>
        </a>
        <button
          type="button"
          className={`menu-toggle ${isOpen ? "is-open" : ""}`}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="main-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
        </button>
        <div id="main-menu" className={`nav-links ${isOpen ? "is-open" : ""}`}>
          <a href="#sobre-mi" onClick={close}>
            Sobre mí
          </a>
          <a href="#proyectos" onClick={close}>
            Proyectos
          </a>
          <a href="#certificados" onClick={close}>
            Certificados
          </a>
          <a className="nav-contact" href="#contacto" onClick={close}>
            Hablemos <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
