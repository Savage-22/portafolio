import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Camera, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { timeline } from '../data/timeline';

// ── Collage auto-layout ──────────────────────────────────────────────────────
function PhotoCollage({ images }) {
  const n = images.length;
  if (n === 0) return null;

  const img = (src, cls = '') => (
    <div key={src} className={`overflow-hidden rounded-xl ${cls}`}>
      <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
  );

  if (n === 1) return <div className="h-72">{img(images[0], 'h-full')}</div>;

  if (n === 2) return (
    <div className="grid grid-cols-2 gap-2 h-60">
      {images.map((s) => img(s, 'h-full'))}
    </div>
  );

  if (n === 3) return (
    <div className="grid grid-cols-3 gap-2 h-60">
      {img(images[0], 'col-span-2 h-full')}
      <div className="flex flex-col gap-2 h-full">
        {img(images[1], 'flex-1')}
        {img(images[2], 'flex-1')}
      </div>
    </div>
  );

  if (n === 4) return (
    <div className="grid grid-cols-2 gap-2">
      {images.map((s) => img(s, 'h-44'))}
    </div>
  );

  // 5+: primera ancha arriba + grid 2 cols abajo (máx 5 mostradas)
  return (
    <div className="space-y-2">
      {img(images[0], 'h-52')}
      <div className="grid grid-cols-2 gap-2">
        {images.slice(1, 5).map((s) => img(s, 'h-36'))}
      </div>
    </div>
  );
}

// ── Animaciones compartidas ──────────────────────────────────────────────────
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

// ── Página principal ─────────────────────────────────────────────────────────
export default function TimelineDetailPage() {
  const { id } = useParams();
  const { theme } = useTheme();
  const [fotosOpen, setFotosOpen] = useState(false);
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
            <ArrowLeft className="w-4 h-4" /> Volver a la trayectoria
          </Link>
        </div>
      </div>
    );
  }

  const isEdu = item.type === 'education';
  const photos = item.images ?? [];

  const heroBg = isEdu
    ? dark ? 'from-blue-950 via-[#0A1628] to-[#0A1628]' : 'from-blue-100 via-blue-50 to-[#f5f1e8]'
    : dark ? 'from-purple-950 via-[#0A1628] to-[#0A1628]' : 'from-purple-100 via-purple-50 to-[#f5f1e8]';

  const iconBg = isEdu
    ? dark ? 'bg-blue-600 shadow-blue-900/50' : 'bg-blue-500 shadow-blue-200'
    : dark ? 'bg-purple-600 shadow-purple-900/50' : 'bg-purple-500 shadow-purple-200';

  const accent = isEdu
    ? dark ? 'text-blue-400' : 'text-blue-600'
    : dark ? 'text-purple-400' : 'text-purple-600';

  const badgeCls = isEdu
    ? dark ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-blue-100 text-blue-700 border border-blue-200'
    : dark ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-purple-100 text-purple-700 border border-purple-200';

  const cardBg = dark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dark ? 'bg-[#0A1628]' : 'bg-[#f5f1e8]'}`}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <div className={`bg-gradient-to-b ${heroBg} pb-16`}>
        <div className="max-w-3xl mx-auto px-6 pt-8">

          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <Link
              to="/trayectoria"
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                dark ? 'text-gray-400 hover:text-white' : 'text-[#6b5d4a] hover:text-[#2c2416]'
              }`}
            >
              <ArrowLeft className="w-4 h-4" /> Trayectoria completa
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 flex items-center gap-4 mb-6"
          >
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-xl ${iconBg}`}>
              {item.icon}
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase ${badgeCls}`}>
              {isEdu ? 'Educación' : 'Experiencia'}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className={`text-3xl sm:text-4xl font-bold leading-tight mb-2 ${dark ? 'text-white' : 'text-[#2c2416]'}`}
          >
            {item.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className={`text-base font-semibold mb-5 ${accent}`}
          >
            {item.institution}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {[
              { icon: <Calendar className="w-3.5 h-3.5" />, text: item.period },
              { icon: <MapPin className="w-3.5 h-3.5" />, text: item.location },
            ].map(({ icon, text }) => (
              <span key={text} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${
                dark ? 'bg-white/10 text-gray-300' : 'bg-black/8 text-[#4a3f2e]'
              }`}>
                {icon} {text}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── CONTENT ───────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 -mt-8 pb-16 space-y-6">

        {/* stats */}
        {item.stats?.length > 0 && (
          <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-3">
            {item.stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className={`rounded-2xl border p-4 text-center shadow-sm ${cardBg}`}>
                <p className={`text-2xl sm:text-3xl font-black mb-0.5 ${accent}`}>{s.value}</p>
                <p className={`text-xs font-medium leading-snug ${dark ? 'text-gray-400' : 'text-[#6b5d4a]'}`}>{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* descripción */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className={`rounded-2xl border p-6 shadow-sm ${cardBg}`}
        >
          <p className={`text-base leading-relaxed ${dark ? 'text-gray-300' : 'text-[#4a3f2e]'}`}>
            {item.description}
          </p>
        </motion.div>

        {/* collage de fotos — colapsable */}
        {photos.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
            <button
              onClick={() => setFotosOpen((v) => !v)}
              className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl border shadow-sm transition-colors ${
                dark
                  ? 'bg-gray-900 border-gray-800 hover:border-gray-600 text-white'
                  : 'bg-white border-gray-100 hover:border-gray-300 text-[#2c2416]'
              }`}
            >
              <span className="flex items-center gap-2.5 font-semibold text-sm">
                <Camera className={`w-4 h-4 ${accent}`} />
                Fotos
                <span className={`text-xs font-normal ${dark ? 'text-gray-500' : 'text-[#a68a6a]'}`}>
                  {photos.length} {photos.length === 1 ? 'imagen' : 'imágenes'}
                </span>
              </span>
              <motion.div animate={{ rotate: fotosOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown className={`w-4 h-4 ${dark ? 'text-gray-400' : 'text-[#a68a6a]'}`} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {fotosOpen && (
                <motion.div
                  key="collage"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="pt-3">
                    <PhotoCollage images={photos} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* skills */}
        {item.skills?.length > 0 && (
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.25 }}
              className={`text-lg font-bold mb-4 ${dark ? 'text-white' : 'text-[#2c2416]'}`}
            >
              Tecnologías y habilidades
            </motion.h2>
            <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={fadeUp}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold cursor-default shadow-sm ${
                    dark
                      ? 'bg-gray-800 text-gray-200 border border-gray-700 hover:border-gray-500'
                      : 'bg-white text-[#2c2416] border border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        )}

        {/* volver */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="pt-4">
          <Link
            to="/trayectoria"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              dark ? 'text-gray-500 hover:text-gray-300' : 'text-[#a68a6a] hover:text-[#6b5d4a]'
            }`}
          >
            <ArrowLeft className="w-4 h-4" /> Volver a la trayectoria
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
