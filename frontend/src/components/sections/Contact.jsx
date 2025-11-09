import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Configuración de EmailJS desde variables de entorno
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      // Debug: Verificar que las variables se cargan
      console.log('🔍 Variables de entorno:', {
        serviceId: serviceId ? '✅ Cargado' : '❌ No encontrado',
        templateId: templateId ? '✅ Cargado' : '❌ No encontrado',
        publicKey: publicKey ? '✅ Cargado' : '❌ No encontrado'
      });

      // Validar que existan las credenciales
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Faltan configuraciones de EmailJS. Verifica tu archivo .env');
      }
      
      // Preparar los datos del template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Jeik',  // Tu nombre
      };

      console.log('📤 Enviando email con:', { serviceId, templateId });

      // Enviar email usando EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      console.log('✅ Email enviado exitosamente:', response);
      
      setStatus({ 
        type: 'success', 
        message: '¡Mensaje enviado exitosamente! Te contactaré pronto.' 
      });
      
      // Resetear formulario
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    } catch (error) {
      console.error('❌ Error al enviar email:', error);
      console.error('❌ Detalles del error:', {
        name: error.name,
        message: error.message,
        text: error.text
      });
      
      setStatus({ 
        type: 'error', 
        message: error.message || 'Hubo un error al enviar el mensaje. Intenta de nuevo.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="min-h-screen py-16 sm:py-20 bg-gray-900 flex items-center">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        
        {/* Título de la Sección */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Contacto
          </h2>
          <div className="w-20 sm:w-24 h-1.5 bg-blue-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto px-4">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Columna Izquierda - Información de Contacto */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                Información de Contacto
              </h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                No dudes en contactarme para cualquier proyecto, colaboración o simplemente para saludar. 
                Estoy abierto a nuevas oportunidades y desafíos.
              </p>
            </div>

            {/* Items de Contacto */}
            <div className="space-y-5 sm:space-y-6">
              
              {/* Email */}
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:jeik11109@gmail.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    jeik11109@gmail.com
                  </a>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Ubicación</h4>
                  <p className="text-gray-400">
                    Huánuco, Perú
                  </p>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="pt-4 sm:pt-6">
              <h4 className="text-white font-semibold mb-4 sm:mb-5 text-base sm:text-lg">Sígueme en</h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a 
                  href="https://github.com/Savage-22" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative w-11 h-11 sm:w-12 sm:h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    GitHub
                  </span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/jeik-pasquel-43215b280/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative w-11 h-11 sm:w-12 sm:h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>

            {/* Call to Action Extra */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-5 sm:p-6 mt-6 sm:mt-8">
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                Disponible para proyectos
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Actualmente abierto a oportunidades de desarrollo full-stack y colaboraciones en proyectos interesantes.
              </p>
            </div>
          </div>

          {/* Columna Derecha - Formulario */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-700">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5 sm:mb-6">
              Envíame un mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2 text-sm">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Asunto */}
              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2 text-sm">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2 text-sm">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              {/* Botón Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </>
                )}
              </button>

              {/* Status Message */}
              {status.message && (
                <div className={`p-4 rounded-lg text-center font-medium ${
                  status.type === 'success' 
                    ? 'bg-green-600/20 text-green-400 border border-green-600/30' 
                    : 'bg-red-600/20 text-red-400 border border-red-600/30'
                }`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
