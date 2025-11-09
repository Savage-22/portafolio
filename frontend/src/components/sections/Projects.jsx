import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce App',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/Savage-22/proyecto1',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Task Manager',
      description: 'Aplicación de gestión de tareas con drag & drop, autenticación y sincronización en tiempo real.',
      image: '✅',
      technologies: ['React', 'Firebase', 'Tailwind'],
      githubUrl: 'https://github.com/Savage-22/proyecto2',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Weather App',
      description: 'App del clima con pronóstico de 7 días, geolocalización y visualización de datos meteorológicos.',
      image: '🌤️',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      githubUrl: 'https://github.com/Savage-22/proyecto3',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Portfolio CMS',
      description: 'Sistema de gestión de contenido para portafolios con editor visual y temas personalizables.',
      image: '📝',
      technologies: ['React', 'Express', 'PostgreSQL'],
      githubUrl: 'https://github.com/Savage-22/proyecto4',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Chat App',
      description: 'Aplicación de mensajería en tiempo real con salas de chat, notificaciones y compartir archivos.',
      image: '💬',
      technologies: ['React', 'Socket.io', 'Node.js'],
      githubUrl: 'https://github.com/Savage-22/proyecto5',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Blog Platform',
      description: 'Plataforma de blogs con editor markdown, comentarios, búsqueda y sistema de etiquetas.',
      image: '📰',
      technologies: ['React', 'Next.js', 'Prisma', 'MySQL'],
      githubUrl: 'https://github.com/Savage-22/proyecto6',
      liveUrl: '#',
      featured: false
    }
  ];

  return (
    <section id="proyectos" className="py-32 bg-gray-800">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        
        {/* Título de la Sección */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Mis Proyectos
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
            >
              {/* Badge Featured */}
              {project.featured && (
                <div className="bg-blue-600 text-white text-xs font-bold px-4 py-2 absolute mt-5 ml-5 rounded-full z-10">
                  ⭐ Destacado
                </div>
              )}

              {/* Imagen/Icono del Proyecto */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-56 flex items-center justify-center text-8xl">
                {project.image}
              </div>

              {/* Contenido */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-base mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-blue-400 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones de Acción */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-5 py-3 bg-gray-800 hover:bg-gray-700 text-white text-center rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Código
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver Más */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Savage-22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-all duration-300"
          >
            Ver más en GitHub
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
