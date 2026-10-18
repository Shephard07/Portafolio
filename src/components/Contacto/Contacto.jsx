import { useState } from "react";
import { perfil } from "../../data/portfolio";
import Icon from "../Icon";
import "./Contacto.css";
export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [preparado, setPreparado] = useState(false);
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setPreparado(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const body = `Hola Bryan,\n\n${formData.mensaje}\n\n${formData.nombre}\nCorreo de contacto: ${formData.email}`;
    window.location.href = `mailto:${perfil.email}?subject=${encodeURIComponent(formData.asunto)}&body=${encodeURIComponent(body)}`;
    setPreparado(true);
  }
  return (
    <section
      id="contacto"
      className="contact-section section-space"
      aria-labelledby="contact-title"
    >
      <div className="page-width contact-layout">
        <div className="contact-copy">
          <span className="section-kicker">04 / CONTACTO</span>
          <h2 id="contact-title">
            Las buenas ideas
            <br />
            empiezan con
            <br />
            <span>una conversación.</span>
          </h2>
          <p>
            ¿Quieres hablar de un proyecto, compartir una idea o simplemente
            saludar? Me encantará leerte.
          </p>
          <a className="email-link" href={`mailto:${perfil.email}`}>
            {perfil.email} <Icon name="external" size={21} />
          </a>
          <div className="contact-socials">
            <a href={perfil.github} target="_blank" rel="noreferrer">
              <Icon name="github" size={18} /> GitHub{" "}
              <Icon name="external" size={15} />
            </a>
            {perfil.linkedin && (
              <a href={perfil.linkedin} target="_blank" rel="noreferrer">
                <Icon name="linkedin" size={18} /> LinkedIn{" "}
                <Icon name="external" size={15} />
              </a>
            )}
            <span>
              <Icon name="location" size={17} /> {perfil.ubicacion}
            </span>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <span className="form-caption">
            CUÉNTAME TU IDEA <Icon name="mail" size={21} />
          </span>
          <div className="form-pair">
            <div className="field">
              <label htmlFor="nombre">Tu nombre</label>
              <input
                id="nombre"
                name="nombre"
                autoComplete="name"
                placeholder="¿Cómo te llamas?"
                value={formData.nombre}
                onChange={handleChange}
                maxLength={120}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Tu correo</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="nombre@correo.com"
                value={formData.email}
                onChange={handleChange}
                maxLength={200}
                required
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="asunto">Asunto</label>
            <input
              id="asunto"
              name="asunto"
              placeholder="¿De qué hablamos?"
              value={formData.asunto}
              onChange={handleChange}
              maxLength={150}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="mensaje">Tu mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              placeholder="Todo empieza con una idea..."
              value={formData.mensaje}
              onChange={handleChange}
              maxLength={3000}
              required
            />
          </div>
          <button className="button button-green" type="submit">
            Preparar correo <Icon name="external" />
          </button>
          <p className="form-help" role="status">
            {preparado
              ? "Tu correo está preparado. Revisa y envía el mensaje desde tu aplicación de correo. Si no se abrió, usa el enlace de email."
              : "Se abrirá tu aplicación de correo para que revises y envíes el mensaje."}
          </p>
        </form>
      </div>
    </section>
  );
}
