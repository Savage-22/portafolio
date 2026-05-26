import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { certifications } from '../../data/certifications';

export default function Certifications() {
  const { theme } = useTheme();

  return (
    <section className={`py-16 sm:py-20 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-[#e8dcc8]'
    }`}>
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className={`w-9 h-9 ${theme === 'dark' ? 'text-yellow-400' : 'text-[#8b7355]'}`} />
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-[#2c2416]'
            }`}>
              Certificaciones
            </h2>
          </div>
          <div className={`w-20 sm:w-24 h-1.5 mx-auto mb-4 sm:mb-6 ${
            theme === 'dark' ? 'bg-yellow-400' : 'bg-[#8b7355]'
          }`} />
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto px-4 ${
            theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'
          }`}>
            Cursos y certificaciones completados en distintas plataformas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`rounded-xl overflow-hidden border shadow-md hover:shadow-xl transition-shadow duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-900 border-gray-700'
                  : 'bg-[#f5f1e8] border-[#8b7355]/20'
              }`}
            >
              {/* header con gradiente y badge */}
              <div className={`h-28 flex items-center justify-center text-5xl bg-gradient-to-br ${cert.gradient}`}>
                {cert.badge}
              </div>

              {/* contenido */}
              <div className="p-5">
                <h3 className={`text-base font-bold mb-1 leading-snug ${
                  theme === 'dark' ? 'text-white' : 'text-[#2c2416]'
                }`}>
                  {cert.title}
                </h3>
                <p className={`text-sm mb-1 font-medium ${
                  theme === 'dark' ? 'text-blue-400' : 'text-[#8b7355]'
                }`}>
                  {cert.issuer}
                </p>
                <p className={`text-xs mb-4 ${
                  theme === 'dark' ? 'text-gray-500' : 'text-[#a68a6a]'
                }`}>
                  {cert.date}
                </p>

                {cert.url !== '#' ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                      theme === 'dark'
                        ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white'
                        : 'bg-[#8b7355]/20 text-[#8b7355] hover:bg-[#8b7355] hover:text-white'
                    }`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Ver certificado
                  </a>
                ) : (
                  <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-800 text-gray-500' : 'bg-[#d4c4a8] text-[#a68a6a]'
                  }`}>
                    <Award className="w-3.5 h-3.5" />
                    Verificado
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
