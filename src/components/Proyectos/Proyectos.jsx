import './Proyectos.css';

const proyectos = [
  {
    id: 1,
    titulo: 'Completar información',
    descripcion: 'Completar información del proyecto. Describe qué hace, las tecnologías usadas y el impacto que tuvo.',
    tecnologias: ['React', 'Node.js', 'MongoDB'],
    demo: '#',
    codigo: '#',
    destacado: true,
  },
  {
    id: 2,
    titulo: 'Completar información',
    descripcion: 'Completar información del proyecto. Describe qué hace, las tecnologías usadas y el impacto que tuvo.',
    tecnologias: ['Python', 'FastAPI', 'PostgreSQL'],
    demo: '#',
    codigo: '#',
    destacado: false,
  },
  {
    id: 3,
    titulo: 'Completar información',
    descripcion: 'Completar información del proyecto. Describe qué hace, las tecnologías usadas y el impacto que tuvo.',
    tecnologias: ['JavaScript', 'CSS', 'HTML'],
    demo: '#',
    codigo: '#',
    destacado: false,
  },
];

const Proyectos = () => {
  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">

        {/* Encabezado de sección */}
        <div className="section-header">
          <span className="section-tag">Portafolio</span>
          <h2 className="section-title">Mis <span className="text-cyan">Proyectos</span></h2>
          <p className="section-subtitle">
            Completar información — Una selección de proyectos que reflejan mis habilidades y experiencia.
          </p>
        </div>

        {/* Cuadrícula de tarjetas */}
        <div className="proyectos-grid">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className={`proyecto-card ${proyecto.destacado ? 'destacado' : ''}`}>

              {/* Ícono decorativo del proyecto */}
              <div className="proyecto-icono">
                <span>{'{ }'}</span>
              </div>

              {/* Etiqueta "Destacado" */}
              {proyecto.destacado && (
                <span className="badge-destacado">⭐ Destacado</span>
              )}

              <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
              <p className="proyecto-descripcion">{proyecto.descripcion}</p>

              {/* Tags de tecnologías */}
              <div className="proyecto-tags">
                {proyecto.tecnologias.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              {/* Botones de acción */}
              <div className="proyecto-acciones">
                <a href={proyecto.demo} className="btn-proyecto btn-demo">
                  🔗 Ver Demo
                </a>
                <a href={proyecto.codigo} className="btn-proyecto btn-codigo">
                  &lt;/&gt; Código
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Proyectos;
