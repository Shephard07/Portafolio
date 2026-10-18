import { trayectoria } from "../../data/portfolio";
import Icon from "../Icon";
import "./Perfil.css";

export default function Perfil() {
  const { educacion, practicas } = trayectoria;
  return (
    <section
      id="sobre-mi"
      className="profile-section section-space"
      aria-labelledby="profile-title"
    >
      <div className="page-width">
        <div className="profile-heading">
          <span className="section-kicker">01 / PERFIL</span>
          <h2 id="profile-title">
            Formación, práctica y código<span className="green-text">.</span>
          </h2>
          <p className="section-intro">
            Mi formación, mis primeras prácticas y los proyectos con los que sigo aprendiendo.
          </p>
        </div>
        <div className="profile-grid">
          <article className="profile-card profile-professional">
            <div className="profile-card-heading">
              <span className="profile-icon">
                <Icon name="user" size={23} />
              </span>
              <h3>Perfil en formación</h3>
            </div>
            <div className="profile-paragraphs">
              {trayectoria.presentacion.map((texto) => (
                <p key={texto}>{texto}</p>
              ))}
            </div>
            <div className="profile-experience">
              <span className="profile-small-label">
                <Icon name="briefcase" size={17} /> EXPERIENCIA PRÁCTICA
              </span>
              <h4>{practicas.empresa}</h4>
              <span className="profile-stage">{practicas.etapa}</span>
              <p>{practicas.descripcion}</p>
            </div>
          </article>
          <article className="profile-card profile-education">
            <div className="profile-card-heading">
              <span className="profile-icon">
                <Icon name="education" size={25} />
              </span>
              <h3>Educación</h3>
            </div>
            <div className="profile-study">
              <div className="profile-study-meta">
                <span>{educacion.institucion}</span>
                <span className="profile-status">
                  <span className="status-dot" />
                  {educacion.estado}
                </span>
              </div>
              <h4>{educacion.carrera}</h4>
              <p>{educacion.semestre}</p>
            </div>
            <div className="profile-knowledge">
              <span className="profile-small-label">
                TECNOLOGÍAS EN APRENDIZAJE
              </span>
              <div className="profile-tags">
                {trayectoria.conocimientos.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
            <div className="profile-learning">
              <Icon name="code" size={21} />
              <p>
                Sigo aprendiendo con proyectos web, APIs y sistemas de gestión
                con bases de datos.
              </p>
            </div>
            <a className="profile-project-link" href="#proyectos">
              Conoce mis proyectos <Icon name="external" size={19} />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
