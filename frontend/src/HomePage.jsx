import { Link } from 'react-router-dom';
import { User, Briefcase, Mail, ArrowRight } from 'lucide-react';
import Hero from './components/sections/Hero';
import { useTheme } from './context/ThemeContext';

const previewCards = [
  {
    to: '/sobre-mi',
    icon: User,
    title: 'Sobre Mí',
    description: 'Conoce mi historia, mis habilidades técnicas y todo lo que me apasiona.',
  },
  {
    to: '/proyectos',
    icon: Briefcase,
    title: 'Proyectos',
    description: 'Explora los proyectos en los que he trabajado y las tecnologías que utilizo.',
  },
  {
    to: '/contacto',
    icon: Mail,
    title: 'Contacto',
    description: '¿Tienes un proyecto en mente? Estoy disponible para colaborar.',
  },
];

export default function HomePage() {
  const { theme } = useTheme();

  return (
    <>
      <Hero />
      <section className={`py-20 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-[#e8dcc8]'
      }`}>
        <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-[#2c2416]'
            }`}>
              Explora mi portafolio
            </h2>
            <div className={`w-16 h-1 mx-auto ${theme === 'dark' ? 'bg-blue-500' : 'bg-[#8b7355]'}`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {previewCards.map(({ to, icon: Icon, title, description }) => (
              <Link
                key={to}
                to={to}
                className={`group rounded-xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  theme === 'dark'
                    ? 'bg-gray-900 border-gray-700 hover:shadow-blue-500/20'
                    : 'bg-[#f5f1e8] border-[#8b7355]/20 hover:shadow-[#8b7355]/20'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                  theme === 'dark' ? 'bg-blue-500/20' : 'bg-[#8b7355]/20'
                }`}>
                  <Icon className={`w-7 h-7 ${theme === 'dark' ? 'text-blue-400' : 'text-[#8b7355]'}`} />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#2c2416]'}`}>
                  {title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'}`}>
                  {description}
                </p>
                <span className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                  theme === 'dark' ? 'text-blue-400 group-hover:text-blue-300' : 'text-[#8b7355] group-hover:text-[#6b5d4a]'
                }`}>
                  Ver más <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
