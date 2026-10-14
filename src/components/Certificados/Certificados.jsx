import './Certificados.css';

const certificados = [
  {
    id: 1,
    titulo: 'Completar nombre del certificado',
    emisor: 'Cisco Networking Academy',
    fecha: 'MM/AAAA',
    credencial: '#',
    icono: '🏆',
  },
  {
    id: 2,
    titulo: 'Completar nombre del certificado',
    emisor: 'Cisco Networking Academy',
    fecha: 'MM/AAAA',
    credencial: '#',
    icono: '📜',
  },
  {
    id: 3,
    titulo: 'Completar nombre del certificado',
    emisor: 'Cisco Networking Academy',
    fecha: 'MM/AAAA',
    credencial: '#',
    icono: '🎓',
  },
  {
    id: 4,
    titulo: 'Completar nombre del certificado',
    emisor: 'Cisco Networking Academy',
    fecha: 'MM/AAAA',
    credencial: '#',
    icono: '⭐',
  },
];

const Certificados = () => {
  return (
    <section id="certificados" className="certificados-section">
      <div className="certificados-container">

        {/* Encabezado de sección */}
        <div className="section-header">
          <span className="section-tag">Logros</span>
          <h2 className="section-title">Mis <span className="text-cyan">Certificados</span></h2>
          <p className="section-subtitle">
            Completar información — Certificaciones y reconocimientos obtenidos a lo largo de mi carrera.
          </p>
        </div>

        {/* Cuadrícula de certificados */}
        <div className="certificados-grid">
          {certificados.map((cert) => (
            <div key={cert.id} className="certificado-card">

              {/* Ícono del certificado */}
              <div className="cert-icono">{cert.icono}</div>

              <div className="cert-info">
                <h3 className="cert-titulo">{cert.titulo}</h3>
                <p className="cert-emisor">{cert.emisor}</p>
                <span className="cert-fecha">📅 {cert.fecha}</span>
              </div>

              {/* Botón para ver credencial */}
              <a href={cert.credencial} className="cert-btn" target="_blank" rel="noopener noreferrer">
                Ver credencial →
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificados;
