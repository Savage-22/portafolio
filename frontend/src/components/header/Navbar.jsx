import React, { useState } from 'react';
import { Home, User, Briefcase, Rocket, Mail, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Componente NavLink reutilizable
const NavLink = ({ href, icon: Icon, children, onClick, theme }) => (
  <a
    href={href}
    onClick={onClick}
    className={`flex items-center gap-2 transition-all relative group ${
      theme === 'dark' 
        ? 'text-gray-300 hover:text-blue-400' 
        : 'text-[#2c2416] hover:text-[#8b7355]'
    }`}
  >
    {Icon && <Icon className="w-4 h-4" />}
    <span>{children}</span>
    <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all ${
      theme === 'dark' ? 'bg-blue-400' : 'bg-[#8b7355]'
    }`} />
  </a>
);

// Componente NavLink Mobile
const MobileNavLink = ({ href, icon: Icon, children, onClick, theme }) => (
  <a
    href={href}
    onClick={onClick}
    className={`flex items-center gap-3 px-5 py-3 rounded-lg transition-all font-medium border-l-4 border-transparent ${
      theme === 'dark'
        ? 'text-gray-300 hover:text-white hover:bg-gray-800 hover:border-blue-400'
        : 'text-[#2c2416] hover:bg-[#d4c4a8] hover:border-[#8b7355]'
    }`}
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{children}</span>
  </a>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { href: '#inicio', icon: Home, label: 'Inicio' },
    { href: '#sobre-mi', icon: User, label: 'Sobre Mí' },
    { href: '#habilidades', icon: Rocket, label: 'Habilidades' },
    { href: '#proyectos', icon: Briefcase, label: 'Proyectos' },
  ];

  return (
    <nav className={`${theme === 'dark' ? 'bg-gray-900 text-white border-blue-500/20' : 'bg-[#e8dcc8] text-[#2c2416] border-[#8b7355]/20'} shadow-lg fixed w-full top-0 z-50 backdrop-blur-sm bg-opacity-95 border-b transition-all duration-300`}>
      {/* Container principal */}
      <div className="flex justify-between items-center h-20 px-10">
        
        {/* Logo */}
        <a href="/">
          <h1 className={`text-xl sm:text-2xl lg:text-3xl font-bold cursor-pointer hover:scale-105 transition-transform ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 bg-clip-text text-transparent' 
              : 'text-[#8b7355]'
          }`}>
            Jeik Pasquel
          </h1>
        </a>

        {/* Desktop Navigation - OCULTO en mobile */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              icon={item.icon}
              theme={theme}
            >
              {item.label}
            </NavLink>
          ))}
          
          {/* Botón Contacto */}
          <a
            href="#contacto"
            className={`flex items-center gap-2 rounded-lg transition-all transform hover:scale-105 ${
              theme === 'dark' ? 'text-white hover:text-blue-300' : 'text-[#2c2416] hover:text-[#8b7355]'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>Contacto</span>
          </a>

          {/* Botón de Tema */}
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

        {/* Mobile Menu Button - SOLO visible en mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden p-2 rounded-md transition-colors ${
            theme === 'dark' 
              ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
              : 'text-[#2c2416] hover:bg-[#d4c4a8]'
          }`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`lg:hidden border-t ${theme === 'dark' ? 'border-gray-800' : 'border-[#8b7355]/20'}`}>
          <div className="px-6 sm:px-8 py-4 space-y-2">
            {navItems.map((item) => (
              <MobileNavLink
                key={item.href}
                href={item.href}
                icon={item.icon}
                onClick={closeMenu}
                theme={theme}
              >
                {item.label}
              </MobileNavLink>
            ))}
            <a
              href="#contacto"
              onClick={closeMenu}
              className={`flex items-center gap-3 px-5 py-3 rounded-lg transition-all font-semibold shadow-lg ${
                theme === 'dark' ? 'text-white' : 'text-[#2c2416]'
              }`}
            >
              <Mail className="w-5 h-5" />
              <span>Contacto</span>
            </a>
            
            {/* Botón de Tema Mobile */}
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