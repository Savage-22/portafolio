import React from 'react';
import { MapPin, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 px-4">
      
      {/* Container con ancho máximo - ESTO ES LO QUE TE FALTABA */}
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Saludo y Nombre */}
        <div className="space-y-4">
          <p className="text-blue-400 text-lg sm:text-xl font-medium">
            👋 Hola, soy
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Jeet Lee Jeik Pasquel Bustillos
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Systems Engineering Student
          </h2>
        </div>

        {/* Ubicación */}
        <div className="flex items-center justify-center gap-2 text-gray-300">
          <MapPin className="w-5 h-5 text-blue-400" />
          <span className="text-base sm:text-lg">Huánuco, Peru 🇵🇪 | Campinas, Brazil 🇧🇷</span>
        </div>

        {/* Descripción - Con max-w para mejor legibilidad */}
        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto px-4">
          Passionate about creating technology with social impact. Currently on academic exchange at 
          <span className="text-purple-400 font-semibold"> UNICAMP</span>, developing full-stack solutions 
          and teaching the next generation of programmers.
        </p>

        {/* Iconos Sociales - gap-6 para más espacio */}
        <div className="flex justify-center gap-6 pt-4">
          <a 
            href="https://github.com/Savage-22" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-4 bg-white/10 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 group"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
          </a>
          <a 
            href="https://linkedin.com/in/jeik-pasquel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-white/10 rounded-full hover:bg-blue-400 transition-all duration-300 hover:scale-110 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
          </a>
          <a 
            href="mailto:jeik11109@gmail.com"
            className="p-4 bg-white/10 rounded-full hover:bg-red-500 transition-all duration-300 hover:scale-110 group"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Indicador de Scroll */}
        <div className="pt-12 animate-bounce">
          <a 
            href="#sobre-mi" 
            className="inline-block text-gray-400 hover:text-purple-400 transition-colors"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}