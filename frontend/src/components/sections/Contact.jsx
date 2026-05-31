import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTheme } from '../../context/ThemeContext';

export default function Contact() {
  const { theme } = useTheme();
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
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Faltan configuraciones de EmailJS. Verifica tu archivo .env');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Jeik',
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setStatus({
        type: 'success',
        message: '¡Mensaje enviado exitosamente! Te contactaré pronto.'
      });

      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Hubo un error al enviar el mensaje. Intenta de nuevo.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className={`min-h-screen py-16 sm:py-20 flex items-center transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0A1628]' : 'bg-[#f5f1e8]'}`}>
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>
            Contacto
          </h2>
          <div className={`w-20 sm:w-24 h-1.5 mx-auto mb-4 sm:mb-6 ${theme === 'dark' ? 'bg-blue-500' : 'bg-[#8b7355]'}`}></div>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto px-4 ${theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'}`}>
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>
                Información de Contacto
              </h3>
              <p className={`text-base sm:text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'}`}>
                No dudes en contactarme para cualquier proyecto, colaboración o simplemente para saludar.
                Estoy abierto a nuevas oportunidades y desafíos.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6">

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 ${theme === 'dark' ? 'bg-gradient-to-br from-blue-500 to-sky-500' : 'bg-[#8b7355]'}`}>
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>Email</h4>
                  <a
                    href="mailto:jeik11109@gmail.com"
                    className={`${theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'}`}
                  >
                    jeik11109@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 ${theme === 'dark' ? 'bg-gradient-to-br from-blue-500 to-sky-500' : 'bg-[#8b7355]'}`}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>Ubicación</h4>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'}`}>
                    Huánuco, Perú
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <h4 className={`font-semibold mb-4 sm:mb-5 text-base sm:text-lg ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>Sígueme en</h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://github.com/Savage-22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                    theme === 'dark'
                      ? 'bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600'
                      : 'bg-[#d4c4a8] hover:bg-[#8b7355]'
                  }`}
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none ${
                    theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-[#8b7355] text-white'
                  }`}>
                    GitHub
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jeik-pasquel-43215b280/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                    theme === 'dark'
                      ? 'bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600'
                      : 'bg-[#d4c4a8] hover:bg-[#8b7355]'
                  }`}
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  <span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none ${
                    theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-[#8b7355] text-white'
                  }`}>
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>

            <div className={`rounded-xl p-5 sm:p-6 mt-6 sm:mt-8 border ${theme === 'dark' ? 'bg-gradient-to-br from-blue-500/10 to-purple-600/10 border-blue-500/20' : 'bg-[#e8dcc8] border-[#8b7355]/30'}`}>
              <h4 className={`font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>
                <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${theme === 'dark' ? 'text-blue-400' : 'text-[#8b7355]'}`} />
                Disponible para proyectos
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'}`}>
                Actualmente abierto a oportunidades de desarrollo full-stack y colaboraciones en proyectos interesantes.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            className={`rounded-2xl p-6 sm:p-8 shadow-2xl border ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' : 'bg-[#e8dcc8] border-[#8b7355]/30'}`}
          >
            <h3 className={`text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>
              Envíame un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label htmlFor="name" className={`block font-medium mb-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-[#4a3f2e]'}`}>
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-200 border ${
                    theme === 'dark'
                      ? 'bg-gray-900 text-white border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                      : 'bg-[#f5f1e8] text-[#2c2416] border-[#8b7355]/30 focus:border-[#8b7355] focus:ring-2 focus:ring-[#8b7355]/20'
                  }`}
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block font-medium mb-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-[#4a3f2e]'}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-200 border ${
                    theme === 'dark'
                      ? 'bg-gray-900 text-white border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                      : 'bg-[#f5f1e8] text-[#2c2416] border-[#8b7355]/30 focus:border-[#8b7355] focus:ring-2 focus:ring-[#8b7355]/20'
                  }`}
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className={`block font-medium mb-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-[#4a3f2e]'}`}>
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-200 border ${
                    theme === 'dark'
                      ? 'bg-gray-900 text-white border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                      : 'bg-[#f5f1e8] text-[#2c2416] border-[#8b7355]/30 focus:border-[#8b7355] focus:ring-2 focus:ring-[#8b7355]/20'
                  }`}
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block font-medium mb-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-[#4a3f2e]'}`}>
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-200 resize-none border ${
                    theme === 'dark'
                      ? 'bg-gray-900 text-white border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                      : 'bg-[#f5f1e8] text-[#2c2416] border-[#8b7355]/30 focus:border-[#8b7355] focus:ring-2 focus:ring-[#8b7355]/20'
                  }`}
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3.5 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600'
                    : 'bg-[#8b7355] hover:bg-[#6b5d4a]'
                }`}
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

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg text-center font-medium ${
                    status.type === 'success'
                      ? 'bg-green-600/20 text-green-400 border border-green-600/30'
                      : 'bg-red-600/20 text-red-400 border border-red-600/30'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
