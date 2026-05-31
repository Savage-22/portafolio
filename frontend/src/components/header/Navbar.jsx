import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, User, Briefcase, Mail, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const NavItem = ({ to, icon: Icon, children, theme }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-2 transition-all relative group ${
        isActive
          ? theme === 'dark' ? 'text-blue-400' : 'text-[#8b7355]'
          : theme === 'dark' ? 'text-gray-300 hover:text-blue-400' : 'text-[#2c2416] hover:text-[#8b7355]'
      }`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      <span className={`absolute bottom-0 left-0 h-0.5 transition-all ${
        isActive ? 'w-full' : 'w-0 group-hover:w-full'
      } ${theme === 'dark' ? 'bg-blue-400' : 'bg-[#8b7355]'}`} />
    </Link>
  );
};

const NavAnchor = ({ sectionId, icon: Icon, children, theme }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <a
      href={`#${sectionId}`}
      onClick={handleClick}
      className={`flex items-center gap-2 transition-all relative group cursor-pointer ${
        theme === 'dark' ? 'text-gray-300 hover:text-blue-400' : 'text-[#2c2416] hover:text-[#8b7355]'
      }`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      <span className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all ${
        theme === 'dark' ? 'bg-blue-400' : 'bg-[#8b7355]'
      }`} />
    </a>
  );
};

const MobileNavAnchor = ({ sectionId, icon: Icon, children, onClose, theme }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    onClose();
    if (pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <a
      href={`#${sectionId}`}
      onClick={handleClick}
      className={`flex items-center gap-3 px-5 py-3 rounded-lg transition-all font-medium border-l-4 cursor-pointer ${
        theme === 'dark'
          ? 'text-gray-300 hover:text-white hover:bg-gray-800 border-transparent hover:border-blue-400'
          : 'text-[#2c2416] hover:bg-[#d4c4a8] border-transparent hover:border-[#8b7355]'
      }`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{children}</span>
    </a>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`${theme === 'dark' ? 'bg-gray-900 text-white border-blue-500/20' : 'bg-[#e8dcc8] text-[#2c2416] border-[#8b7355]/20'} shadow-lg fixed w-full top-0 z-50 backdrop-blur-sm bg-opacity-95 border-b transition-all duration-300`}>
      <div className="flex justify-between items-center h-20 px-10">

        <Link to="/">
          <h1 className={`text-xl sm:text-2xl lg:text-3xl font-bold cursor-pointer hover:scale-105 transition-transform ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 bg-clip-text text-transparent'
              : 'text-[#8b7355]'
          }`}>
            Jeik Pasquel
          </h1>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <NavItem to="/" icon={Home} theme={theme}>Inicio</NavItem>
          <NavAnchor sectionId="sobre-mi" icon={User} theme={theme}>Sobre Mí</NavAnchor>
          <NavAnchor sectionId="proyectos" icon={Briefcase} theme={theme}>Proyectos</NavAnchor>
          <NavAnchor sectionId="contacto" icon={Mail} theme={theme}>Contacto</NavAnchor>

          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-lg transition-all duration-300 hover:scale-110 ${
              theme === 'dark' ? 'bg-blue-900/30 hover:bg-blue-800/50' : 'bg-[#d4c4a8] hover:bg-[#c4b498]'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-[#8b7355]" />
            )}
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden p-2 rounded-md transition-colors ${
            theme === 'dark'
              ? 'text-gray-300 hover:text-white hover:bg-gray-800'
              : 'text-[#2c2416] hover:bg-[#d4c4a8]'
          }`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className={`lg:hidden border-t ${theme === 'dark' ? 'border-gray-800' : 'border-[#8b7355]/20'}`}>
          <div className="px-6 sm:px-8 py-4 space-y-2">
            <Link
              to="/"
              onClick={closeMenu}
              className={`flex items-center gap-3 px-5 py-3 rounded-lg transition-all font-medium border-l-4 border-transparent ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800 hover:border-blue-400'
                  : 'text-[#2c2416] hover:bg-[#d4c4a8] hover:border-[#8b7355]'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Inicio</span>
            </Link>
            <MobileNavAnchor sectionId="sobre-mi" icon={User} onClose={closeMenu} theme={theme}>Sobre Mí</MobileNavAnchor>
            <MobileNavAnchor sectionId="proyectos" icon={Briefcase} onClose={closeMenu} theme={theme}>Proyectos</MobileNavAnchor>
            <MobileNavAnchor sectionId="contacto" icon={Mail} onClose={closeMenu} theme={theme}>Contacto</MobileNavAnchor>

            <button
              onClick={toggleTheme}
              className={`flex items-center gap-3 w-full px-5 py-3 rounded-lg transition-all font-medium ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                  : 'text-[#2c2416] hover:bg-[#d4c4a8]'
              }`}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-5 h-5 text-yellow-400" />
                  <span>Modo Claro</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5 text-[#8b7355]" />
                  <span>Modo Oscuro</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
