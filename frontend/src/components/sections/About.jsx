import React, { useState, useEffect } from 'react';
import { Download, Code, Globe, Users } from 'lucide-react';

// Importar imágenes
import perfilImg from '../../assets/public/imgs/perfil.jpeg';
import libertadoresImg from '../../assets/public/imgs/libertadores.jpeg';
import sonrisasImg from '../../assets/public/imgs/prsonrisas.jpeg';
import cvPDF from '../../assets/public/cv.pdf';

export default function About() {
  // Array de imágenes satélites
  const satelliteImages = [
    { id: 1, src: perfilImg, alt: 'Perfil', position: 'top-4 right-20' },
    { id: 2, src: libertadoresImg, alt: 'Libertadores', position: 'bottom-4 right-4' },
    { id: 3, src: sonrisasImg, alt: 'Programando Sonrisas', position: 'bottom-4 left-4' },
  ];

  // Estado para la imagen central - comienza con la primera
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainImage, setMainImage] = useState(satelliteImages[0].src);

  // Auto-rotación cada 4 segundos - SE REINICIA cuando cambia currentIndex
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % satelliteImages.length;
        setMainImage(satelliteImages[newIndex].src);
        return newIndex;
      });
    }, 5000); // 5 segundos

    // Limpia el intervalo anterior cuando currentIndex cambia
    return () => clearInterval(interval);
  }, [currentIndex]); // ← CLAVE: Dependencia agregada

  // Función para cambiar imagen al hacer clic
  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setMainImage(satelliteImages[index].src);
    // El useEffect se reiniciará automáticamente porque currentIndex cambió
  };

  return (
    <section id="sobre-mi" className="min-h-screen py-16 sm:py-20 lg:py-24 bg-gray-800 flex items-center">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        
        {/* Título de la Sección */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Sobre Mí
          </h2>
          <div className="w-20 sm:w-24 h-1.5 bg-blue-500 mx-auto"></div>
        </div>

        {/* Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Galería de Imágenes - Centrada en móviles */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem]">
              
              {/* Imagen Central */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-red-400 to-black-500 p-1.5 shadow-2xl">
                  <img 
                    src={mainImage} 
                    alt="Imagen principal" 
                    className="w-full h-full rounded-full object-cover transition-all duration-500"
                  />
                </div>
              </div>

              {/* Imágenes Satélites - Posiciones responsive */}
              <button
                type="button"
                className={`absolute top-2 right-8 sm:top-4 sm:right-20 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 cursor-pointer rounded-full bg-gradient-to-br from-red-500 to-black-500 p-1 shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-110 sm:hover:scale-125 ${
                  currentIndex === 0 ? 'ring-2 ring-red-400' : ''
                }`}
                onClick={() => handleImageClick(0)}
              >
                <img 
                  src={satelliteImages[0].src} 
                  alt={satelliteImages[0].alt}
                  className="w-full h-full rounded-full object-cover"
                />
              </button>

              <button
                type="button"
                className={`absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 cursor-pointer rounded-full bg-gradient-to-br from-red-500 to-black-500 p-1 shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-110 sm:hover:scale-125 ${
                  currentIndex === 1 ? 'ring-2 ring-red-400' : ''
                }`}
                onClick={() => handleImageClick(1)}
              >
                <img 
                  src={satelliteImages[1].src} 
                  alt={satelliteImages[1].alt}
                  className="w-full h-full rounded-full object-cover"
                />
              </button>

              <button
                type="button"
                className={`absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 cursor-pointer rounded-full bg-gradient-to-br from-red-500 to-black-500 p-1 shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-110 sm:hover:scale-125 ${
                  currentIndex === 2 ? 'ring-2 ring-red-400' : ''
                }`}
                onClick={() => handleImageClick(2)}
              >
                <img 
                  src={satelliteImages[2].src} 
                  alt={satelliteImages[2].alt}
                  className="w-full h-full rounded-full object-cover"
                />
              </button>

              {/* Decoración de fondo - NO BLOQUEA CLICKS */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[22rem] sm:h-[22rem] md:w-96 md:h-96 border-2 border-blue-500/20 rounded-full animate-pulse pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] border border-purple-500/10 rounded-full pointer-events-none"></div>
            </div>
          </div>

          {/* Columna Derecha - Información */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              ¡Hola! Soy Jeet 🚀
            </h3>
            
            <div className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Estudiante de Ingeniería de Sistemas en la <span className="text-blue-400 font-semibold">Universidad Nacional Hermilio Valdizán</span>, 
                actualmente en intercambio académico en <span className="text-purple-400 font-semibold">UNICAMP, Brasil</span>, 
                una de las universidades más prestigiosas de Latinoamérica.
              </p>
              
              <p>
                Me apasiona crear tecnología que genere un impacto positivo en la sociedad. 
                Disfruto enfrentando nuevos desafíos y aprendiendo constantemente sobre desarrollo web, 
                bases de datos y arquitectura de software para crear soluciones innovadoras y eficientes.
              </p>

              <p>
                Cuando no estoy programando, probablemente me encuentres practicando jiu-jitsu 🥋, 
                jugando fútbol ⚽ o explorando nuevos lugares y sabores en la cocina 🍳.
              </p>
              
              {/* Idiomas - Responsive */}
              <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-10 items-start justify-center text-gray-300 pt-4">
                <div className="flex flex-col items-center min-w-[80px]">
                  <span className="text-sm sm:text-base mb-2">🇪🇸 Español</span>
                  <span className="text-xs sm:text-sm text-red-400 font-medium">Nativo</span>
                </div>
                <div className="flex flex-col items-center min-w-[80px]">
                  <span className="text-sm sm:text-base mb-2">🇺🇸 Inglés</span>
                  <span className="text-xs sm:text-sm text-blue-400 font-medium">Básico</span>
                </div>
                <div className="flex flex-col items-center min-w-[80px]">
                  <span className="text-sm sm:text-base mb-2">🇧🇷 Portugués</span>
                  <span className="text-xs sm:text-sm text-green-400 font-medium">Conversacional</span>
                </div>
              </div>
            </div>

            {/* Destacados - Grid responsive */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10">
              <div className="text-center">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-xs sm:text-sm text-gray-400">Full-Stack</p>
              </div>
              <div className="text-center">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-xs sm:text-sm text-gray-400">3 Idiomas</p>
              </div>
              <div className="text-center">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400 mx-auto mb-2" />
                <p className="text-xs sm:text-sm text-gray-400">Impacto Social</p>
              </div>
            </div>

            {/* Botón CV - Responsive */}
            <div className="mt-8 sm:mt-10">
              <a
                href={cvPDF}
                download="CV_Jeik_Pasquel.pdf"
                className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
