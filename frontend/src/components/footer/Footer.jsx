import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-12 sm:py-14 lg:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm sm:text-base text-gray-400">
          <p className="text-center md:text-left">© {currentYear} Jeik Bustillos. Todos los derechos reservados.</p>
          <p className="text-center md:text-right">
            Hecho con ❤️ usando React
          </p>
        </div>
      </div>
    </footer>
  );
}
