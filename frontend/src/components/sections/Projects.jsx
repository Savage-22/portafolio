import React from 'react';
import { Loader2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Projects() {
  const { theme } = useTheme();
  
  // Array de proyectos - Agrega tus proyectos aquí
  const projects = [
    {
      title: 'TitTit',
      description: 'Plataforma de gestión inteligente para deliverys. Actualmente en Fase 1, permite a los conductores registrar y controlar sus ganancias por entrega. Escalable hacia gestión empresarial completa.',
      image: '🛵', // Emoji o URL de imagen
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      githubUrl: 'https://github.com/Savage-22/tit',
      liveUrl: null, // null si no tiene demo en vivo aún
      status: 'En Desarrollo', // 'Completado', 'En Desarrollo', 'Fase 1'
      featured: true // Si es true, muestra badge de "Destacado" ⭐
    }
    // Agrega más proyectos aquí siguiendo la misma estructura
  ];

  return (
    <section id="proyectos" className={`min-h-screen py-16 sm:py-18 lg:py-20 flex items-center transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0A1628]' : 'bg-[#e8dcc8]'}`}>
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        
        {/* Título de la Sección */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>
            Proyectos
          </h2>
          <div className={`w-20 sm:w-24 h-1.5 mx-auto mb-4 sm:mb-6 ${theme === 'dark' ? 'bg-blue-500' : 'bg-[#8b7355]'}`}></div>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto px-4 ${theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'}`}>
            {projects.length > 0 
              ? 'Algunos de los proyectos en los que he trabajado'
              : 'Estoy trabajando en proyectos increíbles que pronto estarán aquí'
            }
          </p>
        </div>

        {/* Si no hay proyectos, mostrar mensaje de construcción */}
        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 sm:py-12 px-4">
            <div className="relative mb-6 sm:mb-8">
              <Loader2 className={`w-16 h-16 sm:w-20 sm:h-20 animate-spin ${theme === 'dark' ? 'text-blue-500' : 'text-[#8b7355]'}`} />
              <div className={`absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 border-4 rounded-full ${theme === 'dark' ? 'border-blue-500/20' : 'border-[#8b7355]/20'}`}></div>
            </div>
            <h3 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-center ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>
              🚧 En Construcción
            </h3>
            <p className={`text-base sm:text-lg text-center max-w-lg leading-relaxed px-2 ${theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'}`}>
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
                className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-gray-900 hover:shadow-blue-500/30' 
                    : 'bg-[#f5f1e8] hover:shadow-[#8b7355]/30'
                }`}
              >
                {/* Badge Featured - Solo si featured es true */}
                {project.featured && (
                  <div className={`text-xs font-bold px-4 py-2 absolute mt-5 ml-5 rounded-full z-10 ${
                    theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-[#8b7355] text-white'
                  }`}>
                    ⭐ Destacado
                  </div>
                )}

                {/* Imagen/Icono del Proyecto */}
                <div className={`h-48 flex items-center justify-center text-7xl ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                    : 'bg-gradient-to-br from-[#a68a6a] to-[#8b7355]'
                }`}>
                  {project.image}
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-5 line-clamp-3 ${theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'}`}>
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-xs rounded-md font-medium ${
                          theme === 'dark' 
                            ? 'bg-gray-800 text-blue-400' 
                            : 'bg-[#e8dcc8] text-[#8b7355] border border-[#8b7355]/30'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botones de Acción */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 px-4 py-2.5 text-center rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 font-medium text-sm ${
                          theme === 'dark' 
                            ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                            : 'bg-[#d4c4a8] hover:bg-[#8b7355] text-[#2c2416] hover:text-white'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Código
                      </a>
                    )}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 px-4 py-2.5 text-white text-center rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 font-medium text-sm ${
                          theme === 'dark' 
                            ? 'bg-blue-600 hover:bg-blue-700' 
                            : 'bg-[#8b7355] hover:bg-[#6b5d4a]'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </a>
                    ) : (
                      <div className={`flex-1 px-4 py-2.5 text-center rounded-lg flex items-center justify-center gap-2 font-medium text-sm cursor-not-allowed ${
                        theme === 'dark' 
                          ? 'bg-gray-800/50 text-gray-600' 
                          : 'bg-[#d4c4a8]/50 text-[#a68a6a]'
                      }`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        {project.status || 'Próximamente'}
                      </div>
                    )}
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
            className={`inline-flex items-center px-6 py-3 bg-transparent border-2 font-semibold rounded-lg transition-all duration-300 ${
              theme === 'dark' 
                ? 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white' 
                : 'border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white'
            }`}
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
