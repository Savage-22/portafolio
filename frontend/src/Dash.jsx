import React from 'react';
import Navbar from './components/header/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/footer/Footer';

export default function Dash() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar Fijo */}
      <Navbar />
      
      {/* Contenido Principal */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
