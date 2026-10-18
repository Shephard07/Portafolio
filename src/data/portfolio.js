// Personaliza el contenido aquí. Las URLs vacías no crean enlaces falsos.
export const perfil = {
  nombre: "Bryan Eloy",
  apellidos: "Cotrina Ortiz",
  nombreCorto: "Bryan Cotrina",
  rol: "Ingeniero de Software con IA",
  descripcion:
    "Me interesa crear software útil, entender cómo funciona y encontrar nuevas formas de resolver problemas con inteligencia artificial.",
  email: "cotrina.bryaneloyt@gmail.com",
  github: "https://github.com/Shephard07",
  linkedin: "https://www.linkedin.com/in/bryan-eloy-cotrina-ortiz-786b093a7/",
  ubicacion: "Lima, Perú",
};
// Proyectos publicados. Puedes añadir una captura real
// en public/proyectos y usar imagen: '/proyectos/mi-proyecto.png'.
export const proyectos = [
  {
    "id": "01",
    "titulo": "GesCAlim",
    "categoria": "Aplicación web",
    "subtitulo": "Gestión de calidad alimentaria",
    "descripcion": "Sistema web para registrar supervisiones, organizar evidencias y consultar reportes de calidad.",
    "tecnologias": [
      "ASP.NET Core",
      "C#",
      "SQL Server"
    ],
    "demo": "http://gescalim.runasp.net/",
    "codigo": "",
    "imagen": "",
    "pendiente": false
  },
  {
    "id": "02",
    "titulo": "ApiRestaurante",
    "categoria": "Web API",
    "subtitulo": "Pedidos y administración de restaurante",
    "descripcion": "Aplicación para gestionar productos y usuarios, y consultar pedidos desde una API conectada a SQL Server.",
    "tecnologias": [
      "ASP.NET Core Web API",
      "C#",
      "SQL Server"
    ],
    "demo": "http://restauranteweb4to.runasp.net/login.html",
    "codigo": "",
    "imagen": "",
    "pendiente": false
  },
  {
    "id": "03",
    "titulo": "Reproductor de música",
    "categoria": "Frontend",
    "subtitulo": "Una playlist con estilo propio",
    "descripcion": "Reproductor web con controles para reproducir, pausar, avanzar y retroceder canciones.",
    "tecnologias": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "demo": "https://proyectomusica.vercel.app/",
    "codigo": "",
    "imagen": "",
    "pendiente": false
  },
  {
    "id": "04",
    "titulo": "Restaurante Básico v1",
    "categoria": "Mi primera web",
    "subtitulo": "Mi primera página web",
    "descripcion": "Sitio sencillo de restaurante donde empecé a practicar cómo organizar y presentar un menú en la web.",
    "tecnologias": [
      "HTML",
      "CSS",
      "PHP"
    ],
    "demo": "https://restaurantebasicov1.vercel.app/#contactos",
    "codigo": "",
    "imagen": "",
    "pendiente": false
  },
  {
    "id": "05",
    "titulo": "ApiCredenciales",
    "categoria": "Proyecto académico",
    "subtitulo": "Gestión de credenciales por correo",
    "descripcion": "Proyecto académico para registrar y consultar datos de cuentas, con funciones relacionadas con el envío de correos.",
    "tecnologias": [
      "ASP.NET Core MVC",
      "C#",
      "Entity Framework Core",
      "SQL Server"
    ],
    "demo": "http://credencialespro.runasp.net/",
    "codigo": "",
    "imagen": "",
    "pendiente": false
  }
];
// Estructura: { id: 1, titulo: 'Nombre real', emisor: 'Institución', fecha: '2026', credencial: 'https://...' }
export const certificados = [
  {
    id: 1,
    titulo: "Fundamentos de Python 1",
    emisor: "Cisco Networking Academy · SENATI",
    fecha: "31 de agosto de 2024",
    fechaISO: "2024-08-31",
    credencial: "/certificados/python-essentials-1.pdf",
  },
  {
    id: 2,
    titulo: "Introducción a la Ciencia de Datos",
    emisor: "Cisco Networking Academy · SENATI",
    fecha: "10 de agosto de 2024",
    fechaISO: "2024-08-10",
    credencial: "/certificados/introduccion-ciencia-datos.pdf",
  },
  {
    id: 3,
    titulo: "Conceptos Básicos de Hardware de Computadora",
    emisor: "Cisco Networking Academy · SENATI",
    fecha: "27 de julio de 2024",
    fechaISO: "2024-07-27",
    credencial: "/certificados/hardware-computadora.pdf",
  },
  {
    id: 4,
    titulo: "Conceptos básicos de redes",
    emisor: "Cisco Networking Academy · SENATI",
    fecha: "4 de julio de 2024",
    fechaISO: "2024-07-04",
    credencial: "/certificados/conceptos-basicos-redes.pdf",
  },
  {
    id: 5,
    titulo: "Introducción al Internet de las Cosas y Transformación Digital",
    emisor: "Cisco Networking Academy · SENATI",
    fecha: "23 de junio de 2024",
    fechaISO: "2024-06-23",
    credencial: "/certificados/introduccion-iot.pdf",
  },
  {
    id: 6,
    titulo: "Introducción a la Ciberseguridad",
    emisor: "Cisco Networking Academy · SENATI",
    fecha: "23 de junio de 2024",
    fechaISO: "2024-06-23",
    credencial: "/certificados/introduccion-ciberseguridad.pdf",
  },
];
