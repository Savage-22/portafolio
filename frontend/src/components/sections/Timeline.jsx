import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ChevronRight, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { timeline } from '../../data/timeline';

export default function Timeline({ limit }) {
  const { theme } = useTheme();
  const visible = limit ? timeline.slice(0, limit) : timeline;
  const hasMore = limit && timeline.length > limit;

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
          className="text-center mb-14 sm:mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-[#2c2416]'
          }`}>
            Trayectoria
          </h2>
          <div className={`w-20 sm:w-24 h-1.5 mx-auto mb-4 sm:mb-6 ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-[#8b7355]'
          }`} />
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto px-4 ${
            theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'
          }`}>
            Mi camino académico y profesional hasta hoy
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">

          {/* contenedor con position relative solo para los ítems — la línea no pasa al botón */}
          <div className="relative">

          {/* línea central — solo en lg */}
          <div className={`hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-[#8b7355]/30'
          }`} />

          {/* línea izquierda — solo en mobile/tablet */}
          <div className={`lg:hidden absolute left-6 top-0 bottom-0 w-0.5 ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-[#8b7355]/30'
          }`} />

          <div className="space-y-10 lg:space-y-12">
            {visible.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className={`relative flex items-start lg:items-center gap-6 ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* nodo del timeline */}
                  <div className="flex-shrink-0 z-10 absolute left-6 lg:static lg:left-auto">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg border-4 ${
                      item.type === 'education'
                        ? theme === 'dark'
                          ? 'bg-blue-600 border-gray-800'
                          : 'bg-[#8b7355] border-[#e8dcc8]'
                        : theme === 'dark'
                          ? 'bg-purple-600 border-gray-800'
                          : 'bg-[#a68a6a] border-[#e8dcc8]'
                    }`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* spacer para centrar el nodo en lg */}
                  <div className="hidden lg:block flex-1" />

                  {/* card */}
                  <div className={`flex-1 ml-16 lg:ml-0 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                    <Link to={`/trayectoria/${item.id}`} className="block group/card">
                      <div className={`relative rounded-xl p-5 sm:p-6 border shadow-md hover:shadow-xl transition-all cursor-pointer ${
                        theme === 'dark'
                          ? 'bg-gray-900 border-gray-700 hover:border-gray-500'
                          : 'bg-[#f5f1e8] border-[#8b7355]/20 hover:border-[#8b7355]/50'
                      }`}>
                        <ChevronRight className={`absolute bottom-4 right-4 w-4 h-4 transition-all opacity-25 group-hover/card:opacity-100 group-hover/card:translate-x-0.5 ${
                          item.type === 'education'
                            ? theme === 'dark' ? 'text-blue-400' : 'text-[#8b7355]'
                            : theme === 'dark' ? 'text-purple-400' : 'text-[#a68a6a]'
                        }`} />

                        <div className={`flex flex-wrap items-center gap-2 mb-2 ${
                          isLeft ? 'lg:justify-end' : 'lg:justify-start'
                        }`}>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                            item.type === 'education'
                              ? theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-[#8b7355]/20 text-[#8b7355]'
                              : theme === 'dark' ? 'bg-purple-500/20 text-purple-400' : 'bg-[#a68a6a]/20 text-[#a68a6a]'
                          }`}>
                            {item.type === 'education' ? 'Educación' : 'Experiencia'}
                          </span>
                        </div>

                        <h3 className={`text-lg sm:text-xl font-bold mb-1 ${
                          theme === 'dark' ? 'text-white' : 'text-[#2c2416]'
                        }`}>
                          {item.title}
                        </h3>

                        <p className={`font-medium text-sm mb-3 ${
                          theme === 'dark' ? 'text-blue-300' : 'text-[#8b7355]'
                        }`}>
                          {item.institution}
                        </p>

                        <div className={`flex flex-wrap gap-3 mb-3 text-xs ${
                          theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'
                        } ${isLeft ? 'lg:justify-end' : 'lg:justify-start'}`}>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {item.location}
                          </span>
                        </div>

                        <p className={`text-sm leading-relaxed ${
                          theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'
                        }`}>
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
          </div>{/* fin contenedor línea+ítems */}

          {/* botón ver toda la trayectoria */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex justify-center mt-12"
            >
              <Link
                to="/trayectoria"
                className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 shadow-md ${
                  theme === 'dark'
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-[#8b7355] hover:bg-[#6b5d4a] text-white'
                }`}
              >
                Ver toda la trayectoria
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
