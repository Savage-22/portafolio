import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, X, ZoomIn } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { certifications } from '../../data/certifications';

function CertModal({ cert, onClose, theme }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* backdrop con blur */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 20 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className={`relative z-10 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        {/* botón cerrar */}
        <button
          onClick={onClose}
          className={`absolute top-3 right-3 z-20 p-1.5 rounded-full transition-colors ${
            theme === 'dark'
              ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
          }`}
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* imagen del certificado */}
        <div className={`w-full bg-gradient-to-br ${cert.gradient} p-1`}>
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full object-contain max-h-[60vh]"
          />
        </div>

        {/* info debajo */}
        <div className={`px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-t ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-100'
        }`}>
          <div>
            <p className={`font-bold text-base ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>
              {cert.title}
            </p>
            <p className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-[#8b7355]'}`}>
              {cert.issuer} · {cert.date}
            </p>
          </div>
          {cert.url !== '#' && (
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-[#8b7355] hover:bg-[#6b5d4a] text-white'
              }`}
            >
              <ExternalLink className="w-4 h-4" />
              Ver original
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  const { theme } = useTheme();
  const [selectedCert, setSelectedCert] = useState(null);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setSelectedCert(cert)}
              className={`group rounded-xl overflow-hidden border shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer ${
                theme === 'dark'
                  ? 'bg-gray-900 border-gray-700'
                  : 'bg-[#f5f1e8] border-[#8b7355]/20'
              }`}
            >
              {/* thumbnail del certificado */}
              <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${cert.gradient}`}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top"
                />
                {/* overlay con ícono al hacer hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* info */}
              <div className="p-4">
                <h3 className={`text-sm font-bold mb-1 leading-snug ${
                  theme === 'dark' ? 'text-white' : 'text-[#2c2416]'
                }`}>
                  {cert.title}
                </h3>
                <p className={`text-xs font-medium mb-1 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-[#8b7355]'
                }`}>
                  {cert.issuer}
                </p>
                <p className={`text-xs ${
                  theme === 'dark' ? 'text-gray-500' : 'text-[#a68a6a]'
                }`}>
                  {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* modal */}
      <AnimatePresence>
        {selectedCert && (
          <CertModal
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
            theme={theme}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
