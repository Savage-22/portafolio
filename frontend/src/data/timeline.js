// ── Cómo añadir fotos ────────────────────────────────────────────────────────
// 1. Convierte tus fotos a WebP:  cwebp foto.jpg -q 85 -o foto.webp
// 2. Colócalas en la carpeta correspondiente:
//      frontend/src/assets/timeline/{id-del-item}/
//    Ejemplos:
//      frontend/src/assets/timeline/intercambio-unicamp/campus.webp
//      frontend/src/assets/timeline/rutero/demo.webp
// 3. ¡Listo! El collage se actualiza solo al reiniciar el servidor.
//    Se soportan: jpg, jpeg, png, webp (usa nombres descriptivos, se ordenan alfabéticamente).
// ─────────────────────────────────────────────────────────────────────────────

const allImages = import.meta.glob(
  '../assets/timeline/**/*.{jpg,jpeg,png,webp}',
  { eager: true },
);

function loadImages(id) {
  return Object.entries(allImages)
    .filter(([path]) => path.includes(`/${id}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default);
}

export const timeline = [
  {
    id: 'ingenieria-sistemas',
    type: 'education',
    title: 'Ingeniería de Sistemas',
    institution: 'Universidad Nacional Hermilio Valdizán',
    location: 'Huánuco, Perú',
    period: '2022 — Presente',
    description: 'Formación integral en ciencias de la computación: algoritmos, estructuras de datos, bases de datos, redes y desarrollo de software aplicado.',
    icon: '🎓',
    stats: [
      { label: 'Semestres', value: '5+' },
      { label: 'Proyectos', value: '8+' },
      { label: 'Promedio', value: '16.8' },
    ],
    skills: ['Java', 'Python', 'C++', 'SQL', 'Redes', 'Algoritmos'],
    get images() { return loadImages(this.id); },
  },
  {
    id: 'programando-sonrisas',
    type: 'education',
    title: 'Programando Sonrisas',
    institution: 'Responsabilidad Social Universitaria — UNHEVAL',
    location: 'Amarillis, Huánuco, Perú',
    period: '2023 — 2024',
    description: 'RSU junto a colegas de la escuela de Sistemas: enseñanza de Scratch a niños del Colegio Nacional José Carlos Mariátegui (El Amauta), acercando la programación a comunidades con pocos recursos.',
    icon: '👨‍🏫',
    stats: [
      { label: 'Estudiantes', value: '30+' },
      { label: 'Sesiones', value: '40+' },
      { label: 'Colegio', value: '1' },
    ],
    skills: ['Scratch', 'Pensamiento computacional', 'Didáctica', 'Trabajo en equipo'],
    get images() { return loadImages(this.id); },
  },
  {
    id: 'intercambio-unicamp',
    type: 'experience',
    title: 'Intercambio Académico',
    institution: 'UNICAMP — Universidade Estadual de Campinas',
    location: 'Campinas, Brasil',
    period: 'Ago 2025 — Dic 2025',
    description: 'Programa de intercambio en una de las top 10 universidades de América Latina. Cursos de computación en entorno multicultural e internacional, convivencia con estudiantes de más de 15 países.',
    icon: '🌍',
    stats: [
      { label: 'Meses', value: '5' },
      { label: 'Países representados', value: '15+' },
      { label: 'Ranking AL', value: 'Top 10' },
    ],
    skills: ['IA / ML', 'Sistemas Distribuidos', 'Portugués', 'Investigación'],
    get images() { return loadImages(this.id); },
  },
  {
    id: 'sicecna',
    type: 'experience',
    title: 'Sistema de Asistencia QR — SICECNA',
    institution: 'Colegio Nacional Aplicación UNHEVAL',
    location: 'Huánuco, Perú',
    period: '2024 — 2025',
    description: 'Desarrollo full-stack de un sistema web para el control de asistencia de docentes y estudiantes mediante códigos QR. Actualmente en producción en el Colegio Nacional Aplicación UNHEVAL.',
    icon: '📱',
    stats: [
      { label: 'Usuarios', value: '200+' },
      { label: 'Escaneos/día', value: '300+' },
      { label: 'Módulos', value: '5' },
    ],
    skills: ['React', 'Node.js', 'PostgreSQL', 'QR Code', 'JWT', 'Docker'],
    get images() { return loadImages(this.id); },
  },
  {
    id: 'rutero',
    type: 'experience',
    title: 'Rutero — Plataforma de Delivery',
    institution: 'Proyecto Rutero',
    location: 'Remoto',
    period: '2024 — Presente',
    description: 'Diseño y desarrollo de plataforma full-stack para la gestión de conductores de delivery: asignación de rutas, seguimiento en tiempo real y panel de administración.',
    icon: '🛵',
    stats: [
      { label: 'Endpoints API', value: '30+' },
      { label: 'Usuarios activos', value: '50+' },
      { label: 'Meses en prod.', value: '6+' },
    ],
    skills: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'JWT', 'REST API'],
    get images() { return loadImages(this.id); },
  },
  {
    id: 'semsis',
    type: 'experience',
    title: 'SEMSIS — Semana de Sistemas',
    institution: 'Escuela Profesional de Ingeniería de Sistemas — UNHEVAL',
    location: 'Huánuco, Perú',
    period: 'Jul 2026',
    description: 'Organización del evento tecnológico anual de la escuela por su aniversario: ponencias, talleres, competencias de programación y más. Actualmente en desarrollo para la primera semana de julio.',
    icon: '⚡',
    stats: [
      { label: 'Ponencias', value: '6+' },
      { label: 'Talleres', value: '4+' },
      { label: 'Inscritos esp.', value: '150+' },
    ],
    skills: ['Gestión de eventos', 'Coordinación de equipos', 'Marketing digital', 'Logística'],
    get images() { return loadImages(this.id); },
  },
];
