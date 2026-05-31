import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { timeline } from '../data/timeline';

export default function TimelineDetailPage() {
  const { id } = useParams();
  const { theme } = useTheme();
  const item = timeline.find((t) => t.id === id);

  const dark = theme === 'dark';

  if (!item) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${dark ? 'bg-[#0A1628] text-white' : 'bg-[#f5f1e8] text-[#2c2416]'}`}>
        <div className="text-center px-6">
          <p className="text-6xl mb-4">🔍</p>
          <h2 className="text-2xl font-bold mb-2">Evento no encontrado</h2>
          <p className={`text-sm mb-6 ${dark ? 'text-gray-400' : 'text-[#6b5d4a]'}`}>
            El ítem que buscas no existe en la trayectoria.
          </p>
          <Link
            to="/trayectoria"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm ${
              dark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-[#8b7355] hover:bg-[#6b5d4a] text-white'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a la trayectoria
          </Link>
        </div>
      </div>
    );
  }

  const isEducation = item.type === 'education';
  const accentDark = isEducation ? 'text-blue-400' : 'text-purple-400';
  const accentLight = 'text-[#8b7355]';
  const badgeDark = isEducation ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400';
  const badgeLight = isEducation ? 'bg-[#8b7355]/20 text-[#8b7355]' : 'bg-[#a68a6a]/20 text-[#a68a6a]';
  const iconBgDark = isEducation ? 'bg-blue-600' : 'bg-purple-600';
  const iconBgLight = isEducation ? 'bg-[#8b7355]' : 'bg-[#a68a6a]';

  return (
    <div className={`min-h-screen py-12 px-6 transition-colors duration-300 ${
      dark ? 'bg-[#0A1628]' : 'bg-[#f5f1e8]'
    }`}>
      <div className="max-w-2xl mx-auto">

        {/* back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            to="/trayectoria"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              dark ? 'text-gray-400 hover:text-blue-400' : 'text-[#6b5d4a] hover:text-[#8b7355]'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Trayectoria completa
          </Link>
        </motion.div>

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className={`rounded-2xl p-6 sm:p-8 border shadow-lg mb-6 ${
            dark ? 'bg-gray-900 border-gray-700' : 'bg-white border-[#8b7355]/20'
          }`}
        >
          <div className="flex items-start gap-5">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-md ${
              dark ? iconBgDark : iconBgLight
            }`}>
              {item.icon}
            </div>

            <div className="flex-1 min-w-0">
              <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 ${
                dark ? badgeDark : badgeLight
              }`}>
                {isEducation ? 'Educación' : 'Experiencia'}
              </span>
              <h1 className={`text-2xl sm:text-3xl font-bold leading-snug mb-1 ${
                dark ? 'text-white' : 'text-[#2c2416]'
              }`}>
                {item.title}
              </h1>
              <p className={`font-semibold text-sm mb-3 ${dark ? accentDark : accentLight}`}>
                {item.institution}
              </p>
              <div className={`flex flex-wrap gap-4 text-xs ${dark ? 'text-gray-400' : 'text-[#6b5d4a]'}`}>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.location}
                </span>
              </div>
            </div>
          </div>

          <p className={`mt-5 text-sm sm:text-base leading-relaxed ${
            dark ? 'text-gray-300' : 'text-[#4a3f2e]'
          }`}>
            {item.description}
          </p>
        </motion.div>

        {/* highlights */}
        {item.highlights?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className={`rounded-2xl p-6 sm:p-8 border shadow-md mb-6 ${
              dark ? 'bg-gray-900 border-gray-700' : 'bg-white border-[#8b7355]/20'
            }`}
          >
            <h2 className={`text-lg font-bold mb-4 ${dark ? 'text-white' : 'text-[#2c2416]'}`}>
              Puntos destacados
            </h2>
            <ul className="space-y-3">
              {item.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${dark ? accentDark : accentLight}`} />
                  <span className={`text-sm leading-relaxed ${dark ? 'text-gray-300' : 'text-[#4a3f2e]'}`}>
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* skills */}
        {item.skills?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className={`rounded-2xl p-6 sm:p-8 border shadow-md ${
              dark ? 'bg-gray-900 border-gray-700' : 'bg-white border-[#8b7355]/20'
            }`}
          >
            <h2 className={`text-lg font-bold mb-4 ${dark ? 'text-white' : 'text-[#2c2416]'}`}>
              Tecnologías y habilidades
            </h2>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                    dark
                      ? 'bg-gray-800 text-gray-200 border border-gray-700'
                      : 'bg-[#e8dcc8] text-[#2c2416] border border-[#8b7355]/20'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
