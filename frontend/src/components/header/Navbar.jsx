import React, { useState } from 'react';
import { Home, User, Briefcase, Rocket, Mail, Menu, X } from 'lucide-react';

// Componente NavLink reutilizable
const NavLink = ({ href, icon: Icon, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-all relative group"
  >
    {Icon && <Icon className="w-4 h-4" />}
    <span>{children}</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all" />
  </a>
);

// Componente NavLink Mobile
const MobileNavLink = ({ href, icon: Icon, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-800 px-5 py-3 rounded-lg transition-all font-medium border-l-4 border-transparent hover:border-blue-400"
  >
    {Icon && <Icon className="w-5 h-5" />}
    <span>{children}</span>
  </a>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { href: '#inicio', icon: Home, label: 'Inicio' },
    { href: '#sobre-mi', icon: User, label: 'Sobre Mí' },
    { href: '#habilidades', icon: Rocket, label: 'Habilidades' },
    { href: '#proyectos', icon: Briefcase, label: 'Proyectos' },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full top-0 z-50 backdrop-blur-sm bg-opacity-95">
      {/* Container principal */}
      <div className="flex justify-between items-center h-20 px-10">
        
        {/* Logo */}
        <a href="#inicio">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform">
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
            >
              {item.label}
            </NavLink>
          ))}
          
          {/* Botón Contacto */}
          <a
            href="#contacto"
            className="flex items-center gap-2 hover:text-blue-300 text-white rounded-lg transition-all transform hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            <span>Contacto</span>
          </a>
        </div>

        {/* Mobile Menu Button - SOLO visible en mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-300 hover:text-white p-2 rounded-md hover:bg-gray-800 transition-colors"
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
        <div className="lg:hidden border-t border-gray-800">
          <div className="px-6 sm:px-8 py-4 space-y-2">
            {navItems.map((item) => (
              <MobileNavLink
                key={item.href}
                href={item.href}
                icon={item.icon}
                onClick={closeMenu}
              >
                {item.label}
              </MobileNavLink>
            ))}
            <a
              href="#contacto"
              onClick={closeMenu}
              className="flex items-center gap-3 text-white px-5 py-3 rounded-lg transition-all font-semibold shadow-lg"
            >
              <Mail className="w-5 h-5" />
              <span>Contacto</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}