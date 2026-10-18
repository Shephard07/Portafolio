import { proyectos, perfil } from "../../data/portfolio";
import Icon from "../Icon";
import "./Proyectos.css";
function ProjectArtwork({ index }) {
  return (
    <div className={`project-art artwork-${index}`} aria-hidden="true">
      {index === 0 ? (
        <div className="art-window">
          <div className="art-window-bar">
            <i />
            <i />
            <i />
            <span>idea → desarrollo</span>
          </div>
          <div className="art-code">
            <span className="code-muted">01</span>{" "}
            <span className="code-green">const</span> idea = {"{"}
            <br />
            <span className="code-muted">02</span> &nbsp; propósito:{" "}
            <span className="code-orange">'crear'</span>,<br />
            <span className="code-muted">03</span> &nbsp; siguientePaso:{" "}
            <span className="code-orange">'construir'</span>
            <br />
            <span className="code-muted">04</span> {"}"};
          </div>
          <span className="art-terminal">
            ❯ un proyecto a la vez<span>_</span>
          </span>
        </div>
      ) : index === 1 ? (
        <div className="art-orbit">
          <span className="orbit-ring ring-two" />
          <span className="orbit-ring" />
          <span className="orbit-core">✳</span>
          <span className="orbit-dot dot-one" />
          <span className="orbit-dot dot-two" />
          <span className="orbit-label">CONECTAR IDEAS</span>
        </div>
      ) : (
        <div className="art-blocks">
          <span className="block block-a" />
          <span className="block block-b" />
          <span className="block block-c" />
          <span className="block block-d" />
          <span className="blocks-label">CONSTRUIR PASO A PASO ↗</span>
        </div>
      )}
    </div>
  );
}
export default function Proyectos() {
  return (
    <section
      id="proyectos"
      className="projects-section section-space page-width"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <div>
          <span className="section-kicker">02 / PROYECTOS</span>
          <h2 id="projects-title">
            Ideas en práctica<span className="green-text">.</span>
          </h2>
        </div>
        <a
          className="text-link"
          href={perfil.github}
          target="_blank"
          rel="noreferrer"
        >
          Mi GitHub <Icon name="external" size={19} />
        </a>
      </div>
      <p className="section-intro">
        Cinco proyectos publicados: sistemas de gestión, APIs y experiencias web
        que forman parte de mi aprendizaje.
      </p>
      <div className="projects-grid">
        {proyectos.map((project, i) => (
          <article className="project-card" key={project.id}>
            {project.imagen ? (
              <img
                className="project-cover"
                src={project.imagen}
                alt={`Vista de ${project.titulo}`}
                loading="lazy"
              />
            ) : (
              <ProjectArtwork index={i % 3} />
            )}
            <div className="project-body">
              <div className="project-meta">
                <span>{project.categoria}</span>
                <span>{project.pendiente ? "Por completar" : project.id}</span>
              </div>
              <h3>{project.titulo}</h3>
              {project.subtitulo && <p className="project-subtitle">{project.subtitulo}</p>}
              <p>{project.descripcion}</p>
              {project.tecnologias.length > 0 && (
                <div className="tech-tags">
                  {project.tecnologias.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              )}
              <div className="project-links">
                {project.codigo && (
                  <a href={project.codigo} target="_blank" rel="noreferrer">
                    Ver código <Icon name="code" size={17} />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Ver proyecto <Icon name="external" size={17} />
                  </a>
                )}
                {!project.codigo && !project.demo && (
                  <span className="project-pending">
                    Detalles próximamente <Icon name="external" size={17} />
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
