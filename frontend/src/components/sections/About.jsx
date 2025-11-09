import React from 'react';

export default function About() {
  return (
    <section id="sobre-mi" className="py-32 bg-gray-800">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        
        {/* Título de la Sección */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sobre Mí
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto"></div>
        </div>

        {/* Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Columna Izquierda - Imagen/Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-8xl">
                  👨‍💻
                </div>
              </div>
              {/* Decoración */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse delay-150"></div>
            </div>
          </div>

          {/* Columna Derecha - Información */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              ¡Hola! Soy un desarrollador apasionado 🚀
            </h3>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Me especializo en crear aplicaciones web modernas y escalables.
                Con experiencia en desarrollo frontend y backend, disfruto transformando
                ideas en productos digitales que generan impacto.
              </p>
              
              <p>
                Mi enfoque está en escribir código limpio, mantenible y eficiente,
                siempre buscando las mejores prácticas y las tecnologías más actuales.
              </p>

              <p>
                Cuando no estoy programando, me gusta aprender nuevas tecnologías,
                contribuir a proyectos open source y compartir conocimiento con la comunidad.
              </p>
            </div>

            {/* Estadísticas/Info Quick */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <p className="text-4xl font-bold text-blue-400">3+</p>
                <p className="text-gray-400 text-base mt-2">Años de experiencia</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <p className="text-4xl font-bold text-purple-400">20+</p>
                <p className="text-gray-400 text-base mt-2">Proyectos completados</p>
              </div>
            </div>

            {/* Botón CV */}
            <div className="mt-10">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
