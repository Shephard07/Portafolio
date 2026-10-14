import { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Completar información: aquí puedes integrar EmailJS, Formspree, o tu propio backend */
    console.log('Formulario enviado:', formData);
    setEnviado(true);
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-container">

        {/* Encabezado de sección */}
        <div className="contacto-header">
          <span className="section-tag-contacto">Hablemos</span>
          <h2 className="contacto-title">
            Ponte en <span className="text-cyan">Contacto</span>
          </h2>
          <p className="contacto-subtitle">
            Completar información — ¿Tienes un proyecto en mente? Escríbeme y hablemos.
          </p>
        </div>

        <div className="contacto-grid">

          {/* Información de contacto */}
          <div className="contacto-info">
            <h3 className="info-titulo">Información de Contacto</h3>

            <div className="info-item">
              <span className="info-icono">📧</span>
              <div>
                <span className="info-label">Email</span>
                <a href="mailto:cotrina.bryaneloyt@gmail.com" className="info-valor">
                  cotrina.bryaneloyt@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icono">💼</span>
              <div>
                <span className="info-label">LinkedIn</span>
                <a href="#" className="info-valor" target="_blank" rel="noopener noreferrer">
                  Completar información
                </a>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icono">🐙</span>
              <div>
                <span className="info-label">GitHub</span>
                <a href="https://github.com/Shephard07" className="info-valor" target="_blank" rel="noopener noreferrer">
                  github.com/Shephard07
                </a>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icono">📍</span>
              <div>
                <span className="info-label">Ubicación</span>
                <span className="info-valor">Perú, Lima</span>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <form className="contacto-form" onSubmit={handleSubmit}>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@correo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="asunto">Asunto</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                placeholder="¿En qué te puedo ayudar?"
                value={formData.asunto}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Cuéntame más sobre tu proyecto..."
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-enviar">
              {enviado ? '✅ ¡Mensaje enviado!' : '🚀 Enviar Mensaje'}
            </button>

            {enviado && (
              <p className="msg-exito">
                ¡Gracias por escribirme! Te responderé pronto.
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contacto;
