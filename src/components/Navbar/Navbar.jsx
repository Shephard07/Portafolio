import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // Estado para controlar el menú hamburguesa en móviles[cite: 5]
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Sección del Logo */}
      <div className="navbar-logo">
        <span className="text-cyan">Bryan</span> Cotrina
      </div>

      {/* Enlaces de Navegación */}
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        {/* Al hacer clic en un enlace en móvil, cerramos el menú */}
        <a href="#sobre-mi" onClick={() => setIsOpen(false)}>Perfil</a>
        <a href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a>
        <a href="#certificados" onClick={() => setIsOpen(false)}>Certificados</a>
        <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
      </div>

      {/* Ícono de Menú Hamburguesa (Solo visible en móviles) */}
      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;