import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative selection:bg-accent1 selection:text-border">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
