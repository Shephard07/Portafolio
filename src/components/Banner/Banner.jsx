import './Banner.css';
import miFoto from '../../assets/foto.jpg';

const Banner = () => {
  return (
    <section id="sobre-mi" className="hero-section">
      <div className="hero-content">

        {/* 1. Etiqueta de Estado (Badge) */}
        <div className="status-badge">
          <span className="status-dot"></span>
          Disponible para nuevos proyectos
        </div>

        {/* 2. Foto de Perfil Circular */}
        <div className="profile-photo-container">
          <img
            src={miFoto}
            alt="Foto de Perfil"
            className="profile-photo"
          />
        </div>

        <h1 className="hero-title">
          Bryan Eloy <br />
          <span className="text-cyan">Cotrina Ortiz</span>
        </h1>

        {/* 4. Subtítulo (Rol) */}
        <h2 className="hero-subtitle">
          Ingeniero de Software con IA
        </h2>

        {/* 5. Descripción */}
        <p className="hero-description">
          Apasionado por el desarrollo de software e inteligencia artificial. Construyo soluciones tecnológicas que combinan código limpio con modelos inteligentes para resolver problemas del mundo real.
        </p>

        {/* 6. Botones de Acción */}
        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contacto" className="btn btn-secondary">Contáctame</a>
        </div>

      </div>

      {/* 7. Indicador de Scroll (Flecha animada hacia abajo) */}
      <div className="scroll-indicator">
        ↓
      </div>
    </section>
  );
};

export default Banner;