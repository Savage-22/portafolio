import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} Jeik Bustillos. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">
              Hecho con ❤️ usando React + Vite
            </p>
          </div>
      </div>
    </footer>
  );
}
