import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Timeline from './components/sections/Timeline';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <div id="sobre-mi"><About /></div>
      <Timeline />
      <div id="habilidades"><Skills /></div>
      <div id="proyectos"><Projects /></div>
      <Certifications />
      <div id="contacto"><Contact /></div>
    </>
  );
}
