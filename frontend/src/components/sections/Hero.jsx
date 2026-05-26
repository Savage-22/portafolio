import { Link } from 'react-router-dom';
import { MapPin, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section id="inicio" className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0A1628]' : 'bg-[#f5f1e8]'
    }`}>

      <div className="max-w-4xl mx-auto text-center space-y-8">

        <div className="space-y-4">
          <p className={`text-lg sm:text-xl font-medium ${
            theme === 'dark' ? 'text-blue-400' : 'text-[#8b7355]'
          }`}>
            👋 Hola, soy
          </p>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-[#2c2416]'
          }`}>
            Jeet Lee Jeik Pasquel Bustillos
          </h1>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 bg-clip-text text-transparent'
              : 'text-[#8b7355]'
          }`}>
            Estudiante de Ingeniería de Sistemas
          </h2>
        </div>

        <div className={`flex items-center justify-center gap-2 ${
          theme === 'dark' ? 'text-gray-300' : 'text-[#4a3f2e]'
        }`}>
          <MapPin className={`w-5 h-5 ${theme === 'dark' ? 'text-blue-400' : 'text-[#8b7355]'}`} />
          <span className="text-base sm:text-lg">Huánuco, Perú 🇵🇪 | Campinas, Brasil 🇧🇷</span>
        </div>

        <p className={`text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto px-4 ${
          theme === 'dark' ? 'text-gray-300' : 'text-[#4a3f2e]'
        }`}>
          Apasionado por crear tecnología con impacto social. Actualmente en intercambio académico en
          <span className={`font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-[#8b7355]'}`}> UNICAMP</span>, desarrollando soluciones full-stack
          y enseñando programación a la próxima generación.
        </p>

        <div className="flex justify-center gap-6 pt-4">
          <a
            href="https://github.com/Savage-22"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-full transition-all duration-300 hover:scale-110 group ${
              theme === 'dark' ? 'bg-white/10 hover:bg-blue-600' : 'bg-[#d4c4a8] hover:bg-[#8b7355]'
            }`}
            aria-label="GitHub"
          >
            <Github className={`w-6 h-6 group-hover:text-white transition-colors ${
              theme === 'dark' ? 'text-gray-300' : 'text-white'
            }`} />
          </a>
          <a
            href="https://www.linkedin.com/in/jeik-pasquel-43215b280/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-full transition-all duration-300 hover:scale-110 group ${
              theme === 'dark' ? 'bg-white/10 hover:bg-blue-400' : 'bg-[#d4c4a8] hover:bg-[#8b7355]'
            }`}
            aria-label="LinkedIn"
          >
            <Linkedin className={`w-6 h-6 group-hover:text-white transition-colors ${
              theme === 'dark' ? 'text-gray-300' : 'text-white'
            }`} />
          </a>
          <a
            href="mailto:jeik11109@gmail.com"
            className={`p-4 rounded-full transition-all duration-300 hover:scale-110 group ${
              theme === 'dark' ? 'bg-white/10 hover:bg-red-500' : 'bg-[#d4c4a8] hover:bg-[#8b7355]'
            }`}
            aria-label="Email"
          >
            <Mail className={`w-6 h-6 group-hover:text-white transition-colors ${
              theme === 'dark' ? 'text-gray-300' : 'text-white'
            }`} />
          </a>
        </div>

        <div className="pt-12 animate-bounce">
          <Link
            to="/sobre-mi"
            className={`inline-block transition-colors ${
              theme === 'dark' ? 'text-gray-400 hover:text-purple-400' : 'text-[#8b7355] hover:text-[#6b5d4a]'
            }`}
            aria-label="Ver más sobre mí"
          >
            <ChevronDown className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </section>
  );
}
