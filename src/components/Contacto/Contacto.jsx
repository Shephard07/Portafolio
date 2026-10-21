
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./Contacto.css";

const Contacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [cargando, setCargando] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();

    if (cargando) return;

    setCargando(true);

    try {
      const templateParams = {
        nombre: formulario.nombre.trim(),
        email: formulario.email.trim(),
        mensaje: formulario.mensaje.trim(),
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      await Swal.fire({
        title: "¡Mensaje enviado!",
        text: "Gracias por contactarme. Te responderé a la brevedad.",
        icon: "success",
        confirmButtonColor: "#b2cc8a",
        background: "#111a2e",
        color: "#ffffff",
      });

      setFormulario({
        nombre: "",
        email: "",
        mensaje: "",
      });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);

      await Swal.fire({
        title: "No se pudo enviar",
        text: "Hubo un problema al enviar el mensaje. Inténtalo más tarde.",
        icon: "error",
        confirmButtonColor: "#b2cc8a",
        background: "#111a2e",
        color: "#ffffff",
      });
    } finally {
      setCargando(false);
    }
  };

  return (
    <section
      id="contacto"
      className="contacto-section section-space"
      aria-labelledby="contacto-title"
    >
      <div className="page-width contacto-container">
        <div className="contacto-heading">
          <span className="section-kicker">05 / CONTACTO</span>

          <h2 id="contacto-title" className="contacto-main-title">
            Trabajemos <span>juntos.</span>
          </h2>

          <p className="contacto-intro">
            Las buenas ideas empiezan con una conversación.
            Cuéntame sobre tu proyecto y veamos cómo podemos hacerlo realidad.
          </p>
        </div>

        <div className="contacto-grid">
          {/* Información de contacto */}
          <div className="contacto-info">
            <h3 className="info-title">Ponte en contacto</h3>

            <p className="info-desc">
              ¿Tienes un proyecto en mente o necesitas ayuda para
              automatizar tus flujos de trabajo? Me encantaría escucharte.
            </p>

            <div className="info-items">
              <a
                className="info-item"
                href="mailto:cotrina.bryaneloyt@gmail.com"
              >
                <div className="info-icon" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>

                <div className="info-content">
                  <span className="item-label">Correo electrónico</span>
                  <p className="item-text">cotrina.bryaneloyt@gmail.com</p>
                </div>

                <span className="info-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>

              <div className="info-item">
                <div className="info-icon" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>

                <div className="info-content">
                  <span className="item-label">Ubicación</span>
                  <p className="item-text">Lima - Perú</p>
                </div>
              </div>
            </div>

            <div className="contacto-note">
              <span className="note-dot" />
              <p>Disponible para conversar sobre nuevas ideas y proyectos.</p>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="contacto-form-wrapper">
            <form
              onSubmit={manejarEnvio}
              className="contacto-form"
            >
              <div className="form-caption">
                <span>CUÉNTAME TU IDEA</span>

                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <polyline points="3,7 12,13 21,7" />
                </svg>
              </div>

              <div className="form-group">
                <label htmlFor="nombre">Tu nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  autoComplete="name"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  placeholder="¿Cómo te llamas?"
                  maxLength={120}
                  required
                  disabled={cargando}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Tu correo</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formulario.email}
                  onChange={manejarCambio}
                  placeholder="nombre@correo.com"
                  maxLength={200}
                  required
                  disabled={cargando}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Tu mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows={5}
                  maxLength={3000}
                  required
                  disabled={cargando}
                />
              </div>

              <button
                type="submit"
                className="btn-submit"
                disabled={cargando}
              >
                <span>
                  {cargando ? "Enviando mensaje..." : "Enviar mensaje"}
                </span>

                {cargando ? (
                  <span className="submit-spinner" aria-hidden="true" />
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                )}
              </button>

              <p className="form-help">
                Tu mensaje se enviará directamente a mi correo electrónico.
                Gracias por tomarte el tiempo de escribirme.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
