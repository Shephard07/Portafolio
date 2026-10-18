import { habilidades } from "../../data/portfolio";
import "./Habilidades.css";

export default function Habilidades() {
  return (
    <section
      id="tech-stack"
      className="skills-section section-space"
      aria-labelledby="skills-title"
    >
      <div className="page-width">
        <div className="section-heading">
          <div>
            <span className="section-kicker">02 / HABILIDADES</span>
            <h2 id="skills-title">
              Lo que estoy aprendiendo<span className="green-text">.</span>
            </h2>
          </div>
          <span className="skills-caption">PRÁCTICA + CURIOSIDAD</span>
        </div>
        <p className="section-intro">
          Tecnologías que voy conociendo y aplicando en mis proyectos. Sigo
          reforzando las bases, probando ideas y aprendiendo de cada error.
        </p>
        <div className="skills-grid">
          {habilidades.map((habilidad) => (
            <article className="skill-card" key={habilidad.id}>
              <div className="skill-card-header">
                <span className="skill-monogram" aria-hidden="true">
                  {habilidad.simbolo}
                </span>
                <span className="skill-status">
                  <span className="status-dot" />
                  {habilidad.estado}
                </span>
              </div>
              <h3>{habilidad.titulo}</h3>
              <p>{habilidad.descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
