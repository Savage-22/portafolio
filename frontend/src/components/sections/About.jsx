import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Globe, Users } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

import perfilImg from '../../assets/public/imgs/perfil.jpeg';
import libertadoresImg from '../../assets/public/imgs/libertadores.jpeg';
import sonrisasImg from '../../assets/public/imgs/prsonrisas.jpeg';
import cvPDF from '../../assets/public/cv.pdf';

export default function About() {
  const { theme } = useTheme();
  const satelliteImages = [
    { id: 1, src: perfilImg, alt: 'Perfil', position: 'top-4 right-20' },
    { id: 2, src: libertadoresImg, alt: 'Libertadores', position: 'bottom-4 right-4' },
    { id: 3, src: sonrisasImg, alt: 'Programando Sonrisas', position: 'bottom-4 left-4' },
  ];

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
    }, 5000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]); // dependencia intencional: reinicia el intervalo al cambiar manualmente

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setMainImage(satelliteImages[index].src);
    // el useEffect se reinicia automáticamente porque currentIndex cambió
  };

  return (
    <section id="sobre-mi" className={`min-h-screen py-14 sm:py-20 lg:py-22 flex items-center transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-[#e8dcc8]'
    }`}>
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-[#2c2416]'
          }`}>
            Sobre Mí
          </h2>
          <div className={`w-20 sm:w-24 h-1.5 mx-auto ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-[#8b7355]'
          }`}></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem]">

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80">
                <div className={`w-full h-full rounded-full p-1.5 shadow-2xl ${
                  theme === 'dark' ? 'bg-gradient-to-br from-blue-500 to-sky-400' : 'bg-[#8b7355]'
                }`}>
                  <img
                    src={mainImage}
                    alt="Imagen principal"
                    className="w-full h-full rounded-full object-cover transition-all duration-500"
                  />
                </div>
              </div>

              <button
                type="button"
                className={`absolute top-2 right-8 sm:top-4 sm:right-20 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 cursor-pointer rounded-full p-1 shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-110 sm:hover:scale-125 ${
                  theme === 'dark' ? 'bg-gradient-to-br from-blue-500 to-sky-500' : 'bg-[#8b7355]'
                } ${currentIndex === 0 ? (theme === 'dark' ? 'ring-2 ring-blue-400' : 'ring-2 ring-[#8b7355]') : ''}`}
                onClick={() => handleImageClick(0)}
              >
                <img src={satelliteImages[0].src} alt={satelliteImages[0].alt} className="w-full h-full rounded-full object-cover" />
              </button>

              <button
                type="button"
                className={`absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 cursor-pointer rounded-full p-1 shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-110 sm:hover:scale-125 ${
                  theme === 'dark' ? 'bg-gradient-to-br from-blue-500 to-sky-500' : 'bg-[#8b7355]'
                } ${currentIndex === 1 ? (theme === 'dark' ? 'ring-2 ring-blue-400' : 'ring-2 ring-[#8b7355]') : ''}`}
                onClick={() => handleImageClick(1)}
              >
                <img src={satelliteImages[1].src} alt={satelliteImages[1].alt} className="w-full h-full rounded-full object-cover" />
              </button>

              <button
                type="button"
                className={`absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 cursor-pointer rounded-full p-1 shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-110 sm:hover:scale-125 ${
                  theme === 'dark' ? 'bg-gradient-to-br from-blue-500 to-sky-500' : 'bg-[#8b7355]'
                } ${currentIndex === 2 ? (theme === 'dark' ? 'ring-2 ring-blue-400' : 'ring-2 ring-[#8b7355]') : ''}`}
                onClick={() => handleImageClick(2)}
              >
                <img src={satelliteImages[2].src} alt={satelliteImages[2].alt} className="w-full h-full rounded-full object-cover" />
              </button>

              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[22rem] sm:h-[22rem] md:w-96 md:h-96 border-2 rounded-full animate-pulse pointer-events-none ${theme === 'dark' ? 'border-blue-500/20' : 'border-[#8b7355]/20'}`}></div>
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] border rounded-full pointer-events-none ${theme === 'dark' ? 'border-purple-500/10' : 'border-[#8b7355]/10'}`}></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="space-y-6 sm:space-y-8"
          >
            <h3 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>
              ¡Hola! Soy Jeet 🚀
            </h3>

            <div className={`space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-[#4a3f2e]'
            }`}>
              <p>
                Estudiante de Ingeniería de Sistemas en la <span className={`font-semibold ${
                  theme === 'dark' ? 'text-sky-300' : 'text-[#6b7fa0]'
                }`}>Universidad Nacional Hermilio Valdizán</span>,
                de vuelta en Huánuco después de un semestre de intercambio en <span className={`font-semibold ${
                  theme === 'dark' ? 'text-green-400' : 'text-[#5a8a5a]'
                }`}>UNICAMP, Brasil</span>.
                Ahora enfocado en terminar la carrera y seguir construyendo proyectos que dejen huella.
              </p>

              <p>
                Lo que más me mueve es crear tecnología con impacto real.
                Me gusta desarrollar soluciones que simplifiquen la vida de las personas —
                desde sistemas para colegios hasta plataformas que acercan la programación
                a comunidades con pocos recursos. Creo que el software puede cambiar vidas,
                y eso me da propósito.
              </p>

              <p>
                Cuando no estoy programando, probablemente me encuentres practicando jiu-jitsu 🥋,
                jugando fútbol ⚽ o experimentando en la cocina 🍳.
              </p>

              <div className={`flex flex-wrap gap-4 sm:gap-6 md:gap-10 items-start justify-center pt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-[#4a3f2e]'}`}>
                <div className="flex flex-col items-center min-w-[80px]">
                  <span className="text-sm sm:text-base mb-2">🇵🇪 Español</span>
                  <span className={`text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-red-400' : 'text-[#8b4513]'}`}>Nativo</span>
                </div>
                <div className="flex flex-col items-center min-w-[80px]">
                  <span className="text-sm sm:text-base mb-2">🇺🇸 Inglés</span>
                  <span className={`text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-blue-400' : 'text-[#6b7fa0]'}`}>Básico</span>
                </div>
                <div className="flex flex-col items-center min-w-[80px]">
                  <span className="text-sm sm:text-base mb-2">🇧🇷 Portugués</span>
                  <span className={`text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-green-400' : 'text-[#5a8a5a]'}`}>Conversacional</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10">
              <div className="text-center">
                <Code className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 ${theme === 'dark' ? 'text-blue-400' : 'text-[#8b7355]'}`} />
                <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'}`}>Full-Stack</p>
              </div>
              <div className="text-center">
                <Globe className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 ${theme === 'dark' ? 'text-purple-400' : 'text-[#a68a6a]'}`} />
                <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'}`}>3 Idiomas</p>
              </div>
              <div className="text-center">
                <Users className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 ${theme === 'dark' ? 'text-pink-400' : 'text-[#c9a86a]'}`} />
                <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'}`}>Impacto Social</p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <a
                href={cvPDF}
                download="CV_Jeik_Pasquel.pdf"
                className={`inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-[#8b7355] hover:bg-[#6b5d4a]'
                }`}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Descargar CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
