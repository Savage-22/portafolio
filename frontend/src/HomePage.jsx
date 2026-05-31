import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Timeline from './components/sections/Timeline';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div id="sobre-mi"><About /></div>
      <Timeline limit={4} />
      <div id="habilidades"><Skills /></div>
      <div id="proyectos"><Projects /></div>
      <div id="contacto"><Contact /></div>
    </>
  );
}
