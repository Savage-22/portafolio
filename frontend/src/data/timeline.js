// ── Cómo añadir fotos ────────────────────────────────────────────────────────
// 1. Crea la carpeta: frontend/src/assets/timeline/{id-del-item}/
// 2. Mete las fotos ahí (jpg, png, webp — máx 6 para mejor collage)
// 3. Importa cada foto arriba:  import foto1 from '../assets/timeline/intercambio-unicamp/foto1.jpg';
// 4. Agrégala al array images: [foto1, foto2, ...]
// El collage se auto-organiza según cuántas fotos haya.
// ─────────────────────────────────────────────────────────────────────────────

export const timeline = [
  {
    id: 'ingenieria-sistemas',
    type: 'education',
    title: 'Ingeniería de Sistemas',
    institution: 'Universidad Nacional Hermilio Valdizán',
    location: 'Huánuco, Perú',
    period: '2022 — Presente',
    description: 'Formación en ciencias de la computación, algoritmos, estructuras de datos, bases de datos y desarrollo de software.',
    icon: '🎓',
    images: [],
    stats: [
      { label: 'Semestres', value: '5+' },
      { label: 'Proyectos', value: '8+' },
      { label: 'Promedio', value: '16.8' },
    ],
    skills: ['Java', 'Python', 'C++', 'SQL', 'Redes', 'Algoritmos'],
  },
  {
    id: 'ensenanza-programacion',
    type: 'education',
    title: 'Enseñanza de Programación',
    institution: 'Programa Social Comunitario',
    location: 'Huánuco, Perú',
    period: '2023 — 2024',
    description: 'Voluntariado enseñando programación básica a jóvenes de comunidades con recursos limitados. Más de 30 estudiantes impactados.',
    icon: '👨‍🏫',
    images: [],
    stats: [
      { label: 'Estudiantes', value: '30+' },
      { label: 'Clases', value: '40+' },
      { label: 'Meses', value: '12' },
    ],
    skills: ['Scratch', 'Python básico', 'Lógica de programación', 'Didáctica'],
  },
  {
    id: 'intercambio-unicamp',
    type: 'experience',
    title: 'Intercambio Académico',
    institution: 'UNICAMP — Universidade Estadual de Campinas',
    location: 'Campinas, Brasil',
    period: 'Ago 2025 — Dic 2025',
    description: 'Programa de intercambio en una de las top 10 universidades de América Latina. Materias en computación en un entorno multicultural e internacional.',
    icon: '🌍',
    images: [],
    stats: [
      { label: 'Meses', value: '5' },
      { label: 'Países representados', value: '15+' },
      { label: 'Ranking AL', value: 'Top 10' },
    ],
    skills: ['IA / ML', 'Sistemas Distribuidos', 'Portugués', 'Investigación'],
  },
  {
    id: 'tittit-fullstack',
    type: 'experience',
    title: 'Desarrollador Full Stack',
    institution: 'Proyecto TitTit',
    location: 'Remoto',
    period: '2024 — Presente',
    description: 'Diseño y desarrollo de plataforma de gestión para conductores de delivery usando React, Node.js y PostgreSQL.',
    icon: '🛵',
    images: [],
    stats: [
      { label: 'Endpoints API', value: '30+' },
      { label: 'Usuarios activos', value: '50+' },
      { label: 'Meses en prod.', value: '6+' },
    ],
    skills: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'JWT', 'REST API'],
  },
  {
    id: 'formacion-autodidacta',
    type: 'education',
    title: 'Formación Autodidacta en Tecnología',
    institution: 'freeCodeCamp · Coursera · Kaggle',
    location: 'En línea',
    period: '2023 — Presente',
    description: 'Aprendizaje continuo a través de plataformas online: certificaciones en desarrollo web, ciencia de datos y herramientas de industria.',
    icon: '📚',
    images: [],
    stats: [
      { label: 'Certificaciones', value: '10+' },
      { label: 'Plataformas', value: '4' },
      { label: 'Horas estimadas', value: '200+' },
    ],
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Python', 'Data Science', 'Git'],
  },
  {
    id: 'sistema-universitario',
    type: 'experience',
    title: 'Sistema de Gestión Académica',
    institution: 'Proyecto Personal',
    location: 'Huánuco, Perú',
    period: '2023',
    description: 'Desarrollo de un sistema web para gestión de notas y asistencias de estudiantes universitarios, orientado a docentes de la región.',
    icon: '🏫',
    images: [],
    stats: [
      { label: 'Usuarios', value: '15' },
      { label: 'Módulos', value: '4' },
      { label: 'Semanas de dev.', value: '8' },
    ],
    skills: ['React', 'Node.js', 'MySQL', 'Express', 'PDF Generation'],
  },
];
