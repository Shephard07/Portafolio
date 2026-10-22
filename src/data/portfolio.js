// Personaliza el contenido aquí. Las URLs vacías no crean enlaces falsos.
export const perfil = {
  nombre: "Bryan Eloy",
  apellidos: "Cotrina Ortiz",
  nombreCorto: "Bryan Cotrina",
  rol: "Estudiante de Ingeniería de Software con IA",
  descripcion:
    "Estoy aprendiendo a desarrollar aplicaciones web y a entender cómo funciona el código. Aquí comparto mis proyectos, avances y lo que voy descubriendo en el camino.",
  email: "cotrina.bryaneloyt@gmail.com",
  github: "https://github.com/Shephard07",
  linkedin: "https://www.linkedin.com/in/bryan-eloy-cotrina-ortiz-786b093a7/",
  ubicacion: "Lima, Perú",
};
// Formación y experiencia proporcionadas para este portafolio.
export const trayectoria = {
  presentacion: [
    "Soy estudiante de Ingeniería de Software con IA en SENATI y actualmente curso el quinto semestre. Estoy aprendiendo desarrollo web y backend, y voy practicando con C#, ASP.NET Core y SQL Server.",
    "Proyectos como GesCAlim y ApiCredenciales forman parte de mi aprendizaje. Me permiten practicar la organización de aplicaciones MVC, el desarrollo de APIs y el uso de bases de datos. Todavía estoy reforzando estos conocimientos y utilizo cada proyecto para comprender mejor el código, resolver errores y seguir mejorando.",
  ],
  educacion: {
    carrera: "Ingeniería de Software con IA",
    institucion: "SENATI",
    semestre: "5.º semestre",
    estado: "En curso",
  },
  practicas: {
    empresa: "AUTOMATION DEVELOPER SYSTEM SAC",
    etapa: "Prácticas · 4.º semestre",
    descripcion:
      "Durante el cuarto semestre realicé mis prácticas y participé en proyectos web básicos. Después continué aprendiendo mediante proyectos de APIs y aplicaciones de gestión, aplicando lo que voy estudiando.",
  },
  conocimientos: [
    "C#",
    "ASP.NET Core",
    "MVC",
    "APIs REST",
    "SQL Server",
    "Entity Framework Core",
  ],
};

// Tecnologías que estoy practicando, sin asignar niveles de dominio.
export const habilidades = [
  {
    id: "web",
    titulo: "HTML y CSS",
    simbolo: "</>",
    descripcion:
      "Practico la estructura de páginas, los estilos y la adaptación de interfaces a celulares.",
    estado: "En aprendizaje",
  },
  {
    id: "javascript",
    titulo: "JavaScript",
    simbolo: "JS",
    descripcion:
      "Aprendo a añadir interactividad, manejar eventos y controlar funciones como las del reproductor de música.",
    estado: "En aprendizaje",
  },
  {
    id: "react",
    titulo: "React",
    simbolo: "RE",
    descripcion:
      "Estoy practicando componentes, estados y la organización de interfaces con este portafolio.",
    estado: "En aprendizaje",
  },
  {
    id: "dotnet",
    titulo: "C# y ASP.NET Core",
    simbolo: ".NET",
    descripcion:
      "Desarrollo proyectos de práctica para entender aplicaciones MVC, controladores y APIs REST.",
    estado: "En aprendizaje",
  },
  {
    id: "datos",
    titulo: "SQL Server y Entity Framework Core",
    simbolo: "SQL",
    descripcion:
      "Practico el registro y la consulta de información, y la conexión entre mis aplicaciones y sus bases de datos.",
    estado: "En aprendizaje",
  },
  {
    id: "git",
    titulo: "Git y GitHub",
    simbolo: "GIT",
    descripcion:
      "Aprendo a registrar cambios, trabajar con repositorios y publicar las versiones de mis proyectos.",
    estado: "En aprendizaje",
  },
];

// Proyectos publicados. Puedes añadir una captura real
// en public/proyectos y usar imagen: '/proyectos/mi-proyecto.png'.
export const proyectos = [
  {
    id: "01",
    titulo: "GesCAlim",
    categoria: "Aplicación web",
    subtitulo: "Gestión de calidad alimentaria",
    descripcion:
      "Sistema web para registrar supervisiones, organizar evidencias y consultar reportes de calidad.",
    tecnologias: ["ASP.NET Core", "C#", "SQL Server"],
    demo: "http://gescalim.runasp.net/",
    codigo: "",
    imagen: "",
    pendiente: false,
  },
  {
    id: "02",
    titulo: "ApiRestaurante",
    categoria: "Web API",
    subtitulo: "Pedidos y administración de restaurante",
    descripcion:
      "Aplicación para gestionar productos y usuarios, y consultar pedidos desde una API conectada a SQL Server.",
    tecnologias: ["ASP.NET Core Web API", "C#", "SQL Server"],
    demo: "http://restauranteweb4to.runasp.net/login.html",
    codigo: "",
    imagen: "",
    pendiente: false,
  },
  {
    id: "03",
    titulo: "Reproductor de música",
    categoria: "Frontend",
    subtitulo: "Una playlist con estilo propio",
    descripcion:
      "Reproductor web con controles para reproducir, pausar, avanzar y retroceder canciones.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    demo: "https://proyectomusica.vercel.app/",
    codigo: "",
    imagen: "",
    pendiente: false,
  },
  {
    id: "04",
    titulo: "Restaurante Básico v1",
    categoria: "Mi primera web",
    subtitulo: "Mi primera página web",
    descripcion:
      "Sitio sencillo de restaurante donde empecé a practicar cómo organizar y presentar un menú en la web.",
    tecnologias: ["HTML", "CSS", "PHP"],
    demo: "https://restaurantebasicov1.vercel.app/#contactos",
    codigo: "",
    imagen: "",
    pendiente: false,
  },
  {
    id: "05",
    titulo: "ApiCredenciales",
    categoria: "Proyecto académico",
    subtitulo: "Gestión de credenciales por correo",
    descripcion:
      "Proyecto académico para registrar y consultar datos de cuentas, con funciones relacionadas con el envío de correos.",
    tecnologias: [
      "ASP.NET Core MVC",
      "C#",
      "Entity Framework Core",
      "SQL Server",
    ],
    demo: "http://credencialespro.runasp.net/",
    codigo: "",
    imagen: "",
    pendiente: false,
  },
    {
    id: "06",
    titulo: "AppTareas",
    categoria: "Aplicación Android",
    subtitulo: "Organización y seguimiento de tareas",
    descripcion:
      "Aplicación para crear y organizar tareas con prioridades, fechas de vencimiento y responsables. Permite buscar, filtrar por estado y consultar estadísticas de avance, guardando la información localmente con SQLite.",
    tecnologias: ["Android", "Java", "XML", "SQLite"],
    apk: "/apks/appTareas.apk",
    codigo: "https://github.com/jeremyylasaca40-a11y/AppTareas",
    demo: "",
    imagen: "",
    pendiente: false,
  },
  {
    id: "07",
    titulo: "EcoTrack",
    categoria: "Aplicación Android",
    subtitulo: "Registro y seguimiento de residuos",
    descripcion:
      "Aplicación para registrar recolecciones de residuos por tipo, peso y cliente. Incluye edición de registros, filtros y estadísticas por categoría, con almacenamiento local en SQLite y una práctica de envío de datos a una API de prueba.",
    tecnologias: ["Android", "Java", "SQLite", "Retrofit"],
    apk: "/apks/EcoTrack.apk",
    codigo: "https://github.com/jeremyylasaca40-a11y/EcoTrack2",
    demo: "",
    imagen: "",
    pendiente: false,
  },
  {
    id: "08",
    titulo: "Estacionamiento inteligente",
    categoria: "Arduino · Proyecto grupal",
    subtitulo: "Acceso, iluminación y alertas",
    descripcion:
      "Simulación de un estacionamiento que abre una barrera al detectar movimiento, enciende la iluminación cuando hay poca luz y activa una alarma si la temperatura supera los 40 °C. Integra sensores, un servomotor y una pantalla LCD.",
    tecnologias: ["Arduino Uno", "C++", "Sensores", "Tinkercad"],
    codigo: "",
    demo:
      "https://www.tinkercad.com/things/8UBEnAFoxPx/editel?returnTo=%2Fdashboard&sharecode=n3VLQxC1nXoCJtrQZsWtbifkNBEc-MWr9bZgW4tXLWg",
    textoDemo: "Ver simulación",
    imagen: "",
    pendiente: false,
  },
  {
    id: "09",
    titulo: "Control de temperatura",
    categoria: "Arduino · Proyecto grupal",
    subtitulo: "Monitoreo de una sala de servidores",
    descripcion:
      "Simulación que mide la temperatura con un sensor TMP36 y muestra el estado en una pantalla LCD. Utiliza indicadores LED, simula una compuerta de ventilación con un servomotor y activa una alarma cuando la temperatura supera los 32 °C.",
    tecnologias: ["Arduino Uno", "C++", "TMP36", "Tinkercad"],
    codigo: "",
    demo:
      "https://www.tinkercad.com/things/fKLxgmL0g8E-proyecto-entregable-20/editel?returnTo=https%3A%2F%2Fwww.tinkercad.com%2Fdashboard%2Fdesigns%2Fcircuits&sharecode=887C8vakBjt2y0ptf23Zk8xlwGMRzbpFRGmJhyth2so",
    textoDemo: "Ver simulación",
    imagen: "",
    pendiente: false,
  },
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
    {
    id: 7,
    titulo: "Java Fundamentals – Español",
    emisor: "Oracle Academy",
    fecha: "19 de octubre de 2026",
    fechaISO: "2026-10-19",
    credencial: "/certificados/java-fundamentals.pdf",
  },
  {
    id: 8,
    titulo: "Java Foundations – Español",
    emisor: "Oracle Academy",
    fecha: "14 de octubre de 2026",
    fechaISO: "2026-10-14",
    credencial: "/certificados/java-foundations.pdf",
  },
  {
    id: 9,
    titulo: "Database Design – Español",
    emisor: "Oracle Academy",
    fecha: "14 de octubre de 2026",
    fechaISO: "2026-10-14",
    credencial: "/certificados/database-design.pdf",
  },
  {
    id: 10,
    titulo: "Database Programming with SQL – Español",
    emisor: "Oracle Academy",
    fecha: "14 de octubre de 2026",
    fechaISO: "2026-10-14",
    credencial: "/certificados/database-programming-sql.pdf",
  },
];
