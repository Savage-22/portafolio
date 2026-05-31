import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Code2, Globe, CalendarDays } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const stats = [
  { icon: Briefcase, value: 5, suffix: '+', label: 'Proyectos' },
  { icon: Code2, value: 12, suffix: '+', label: 'Tecnologías' },
  { icon: Globe, value: 3, suffix: '', label: 'Idiomas' },
  { icon: CalendarDays, value: 2, suffix: '+', label: 'Años de Experiencia' },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const duration = 1400;
    const step = Math.max(1, Math.ceil(value / (duration / 16)));
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const { theme } = useTheme();

  return (
    <section className={`py-16 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0A1628]' : 'bg-[#f5f1e8]'
    }`}>
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map(({ icon: Icon, value, suffix, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl border text-center ${
                theme === 'dark'
                  ? 'bg-gray-800/60 border-gray-700'
                  : 'bg-[#e8dcc8] border-[#8b7355]/20'
              }`}
            >
              <Icon className={`w-8 h-8 mb-3 ${theme === 'dark' ? 'text-blue-400' : 'text-[#8b7355]'}`} />
              <p className={`text-4xl sm:text-5xl font-bold mb-1 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent'
                  : 'text-[#2c2416]'
              }`}>
                <Counter value={value} suffix={suffix} />
              </p>
              <p className={`text-sm sm:text-base font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'
              }`}>
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
