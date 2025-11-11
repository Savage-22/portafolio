/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Habilita el modo oscuro por clase
  theme: {
    extend: {
      colors: {
        // Tema Oscuro
        dark: {
          primary: '#0A1628',
          secondary: '#1e3a5f',
        },
        // Tema Claro
        light: {
          primary: '#f5f1e8',
          secondary: '#e8dcc8',
          accent: '#8b7355',
          text: '#2c2416',
        }
      }
    },
  },
  plugins: [],
}
