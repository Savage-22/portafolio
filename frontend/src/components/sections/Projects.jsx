import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Projects() {
  // Array de proyectos - actualmente vacío, agrega tus proyectos aquí
  const projects = [
    // Ejemplo de estructura de proyecto:
    // {
    //   title: 'Nombre del Proyecto',
    //   description: 'Descripción detallada del proyecto',
    //   image: '🚀', // Emoji o URL de imagen
    //   technologies: ['React', 'Node.js', 'MongoDB'],
    //   githubUrl: 'https://github.com/tu-usuario/proyecto',
    //   liveUrl: 'https://tu-proyecto.com',
    //   featured: true // Si es true, muestra badge de "Destacado" ⭐
    // }
  ];

  return (
    <section id="proyectos" className="py-34 bg-gray-800">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        
        {/* Título de la Sección */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Proyectos
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            {projects.length > 0 
              ? 'Algunos de los proyectos en los que he trabajado'
              : 'Estoy trabajando en proyectos increíbles que pronto estarán aquí'
            }
          </p>
        </div>

        {/* Si no hay proyectos, mostrar mensaje de construcción */}
        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="relative mb-8">
              <Loader2 className="w-20 h-20 text-blue-500 animate-spin" />
              <div className="absolute inset-0 w-20 h-20 border-4 border-blue-500/20 rounded-full"></div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              🚧 En Construcción
            </h3>
            <p className="text-gray-400 text-lg text-center max-w-lg">
              Actualmente estoy desarrollando nuevos proyectos que mostrarán mis habilidades técnicas. 
              ¡Vuelve pronto para ver mi trabajo!
            </p>
          </div>
        ) : (
          /* Grid de Proyectos */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
              >
                {/* Badge Featured - Solo si featured es true */}
                {project.featured && (
                  <div className="bg-blue-600 text-white text-xs font-bold px-4 py-2 absolute mt-5 ml-5 rounded-full z-10">
                    ⭐ Destacado
                  </div>
                )}

                {/* Imagen/Icono del Proyecto */}
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center text-7xl">
                  {project.image}
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-blue-400 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botones de Acción */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-center rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 font-medium text-sm"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Código
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 font-medium text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Botón GitHub */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Savage-22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-all duration-300"
          >
            {projects.length > 0 ? 'Ver más en GitHub' : 'Visita mi GitHub'}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
