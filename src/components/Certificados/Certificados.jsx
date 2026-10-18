import { certificados } from "../../data/portfolio";
import Icon from "../Icon";
import "./Certificados.css";

export default function Certificados() {
  return (
    <section
      id="certificados"
      className="certificates-section section-space"
      aria-labelledby="certificates-title"
    >
      <div className="page-width certificates-layout">
        <div className="certificates-heading">
          <span className="section-kicker">03 / FORMACIÓN</span>
          <h2 id="certificates-title">
            Siempre hay{" "}
            <br />
            algo que aprender<span className="green-text">.</span>
          </h2>
          <p className="section-intro">
            Cursos y conocimientos que se suman al camino. Selecciona un
            certificado para abrir el documento completo.
          </p>
          <span className="learning-note">
            <span className="status-dot" /> Cisco Networking Academy · SENATI
          </span>
        </div>
        <div className="certificates-grid">
          {certificados.map((cert) => (
            <a
              className="certificate-card"
              key={cert.id}
              href={cert.credencial}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver certificado en ${cert.titulo} (PDF, abre en una pestaña nueva)`}
            >
              <div className="certificate-card-top">
                <span className="certificate-icon">
                  <Icon name="award" size={23} />
                </span>
                <span className="certificate-format">
                  PDF <Icon name="external" size={15} />
                </span>
              </div>
              <span className="certificate-kicker">CERTIFICADO EN</span>
              <h3>{cert.titulo}</h3>
              <p className="certificate-issuer">{cert.emisor}</p>
              <time className="certificate-date" dateTime={cert.fechaISO}>
                {cert.fecha}
              </time>
              <span className="certificate-action">
                Ver certificado <Icon name="external" size={17} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
