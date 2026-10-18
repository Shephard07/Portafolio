import miFoto from "../../assets/foto.jpg";
import { perfil } from "../../data/portfolio";
import Icon from "../Icon";
import "./Banner.css";
export default function Banner() {
  return (
    <>
      <section
        id="inicio"
        className="hero page-width"
        aria-labelledby="hero-title"
      >
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> PORTAFOLIO PERSONAL
          </div>
          <h1 id="hero-title">
            Hola, soy Bryan<span className="hero-period">.</span>
            <br />
            <span className="hero-outline">Convierto ideas</span>
            <br />
            en código<span className="hero-period">.</span>
          </h1>
          <p className="hero-role">{perfil.rol}</p>
          <p className="hero-description">{perfil.descripcion}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#proyectos">
              Explorar proyectos <Icon />
            </a>
            <a className="text-link" href="#contacto">
              Conversemos <Icon name="external" size={18} />
            </a>
          </div>
          <div className="hero-location">
            <Icon name="location" size={16} /> {perfil.ubicacion}
            <span>·</span>
            <a href={perfil.github} target="_blank" rel="noreferrer">
              GitHub <Icon name="external" size={15} />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <span className="portrait-corner" aria-hidden="true">
              ↗
            </span>
            <div className="portrait-grid" aria-hidden="true" />
            <img
              src={miFoto}
              alt="Retrato de Bryan Eloy Cotrina Ortiz"
              className="portrait"
              fetchPriority="high"
            />
            <div className="portrait-caption">
              <span>
                {perfil.nombre}
                <br />
                <strong>{perfil.apellidos}</strong>
              </span>
              <span className="portrait-index">BC / 01</span>
            </div>
          </div>
          <div className="code-note">
            <span className="code-note-icon">
              <Icon name="code" size={22} />
            </span>
            <span>
              Una idea. Una línea.
              <br />
              <strong>Algo nuevo por construir.</strong>
            </span>
            <span className="note-dot" />
          </div>
          <span className="visual-annotation">
            CURIOSIDAD → CÓDIGO → SOLUCIONES
          </span>
        </div>
        <div className="hero-bottom">
          <span>APRENDER. CREAR. MEJORAR.</span>
          <a href="#sobre-mi">
            Conoce un poco más <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
    </>
  );
}
