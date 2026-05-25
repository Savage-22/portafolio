import { useTheme } from '../../context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  const lastUpdated = "11 de noviembre de 2025";

  return (
    <footer className={`transition-colors duration-300 border-t ${
      theme === 'dark' 
        ? 'bg-[#0A1628] text-gray-300 border-gray-800' 
        : 'bg-[#f5f1e8] text-[#4a3f2e] border-[#8b7355]/20'
    }`}>
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-16">
        <div className={`flex flex-col md:flex-row justify-between items-center gap-3 text-sm sm:text-base ${
          theme === 'dark' ? 'text-gray-400' : 'text-[#6b5d4a]'
        }`}>
          <p className="text-center md:text-left">© {currentYear} Jeik Bustillos. Todos los derechos reservados.</p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-center">
              Última actualización: {lastUpdated}
            </p>
            <p className="text-center">
              Hecho con ❤️ usando React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
