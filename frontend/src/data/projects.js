export const projects = [
  {
    id: 'tittit',
    title: 'TitTit',
    shortDescription: 'Plataforma de gestión inteligente para deliverys. Actualmente en Fase 1, permite a los conductores registrar y controlar sus ganancias por entrega. Escalable hacia gestión empresarial completa.',
    description: 'TitTit es una plataforma full-stack diseñada para transformar la gestión de deliverys. En su Fase 1, los conductores pueden registrar cada entrega y llevar un control detallado de sus ganancias diarias. La arquitectura está pensada para escalar: las siguientes fases incluirán gestión de flotas, reportes empresariales y dashboards en tiempo real.',
    image: '🛵',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    githubUrl: 'https://github.com/Savage-22/tit',
    liveUrl: null,
    status: 'En Desarrollo',
    featured: true,
    features: [
      'Registro de entregas con monto, fecha y ruta',
      'Panel de control con resumen diario, semanal y mensual',
      'Autenticación segura por conductor',
      'API REST con Express y PostgreSQL',
      'Arquitectura escalable para módulos empresariales futuros',
    ],
  },
];
