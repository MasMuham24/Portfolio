<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import { AnimatedBackground } from "./components/ui/AnimatedBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectsPage } from "./pages/ProjectsPage";
import { CertificationsPage } from "./pages/CertificationsPage";
=======
import { lazy, Suspense } from 'react';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Lazy load below-the-fold components
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Projects = lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const Certifications = lazy(() => import('./components/Certifications').then(module => ({ default: module.Certifications })));
const Skills = lazy(() => import('./components/Skills').then(module => ({ default: module.Skills })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));
>>>>>>> 7512ac605be5de5a09f30df1cc67f4d27803b869

function HomePage() {
  return (
    <div className="relative selection:bg-accent1 selection:text-border">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
<<<<<<< HEAD
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
=======
        <Suspense fallback={<div className="min-h-screen" />}>
          <About />
          <Projects />
          <Certifications />
          <Skills />
          <Contact />
        </Suspense>
>>>>>>> 7512ac605be5de5a09f30df1cc67f4d27803b869
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/certifications" element={<CertificationsPage />} />
    </Routes>
  );
}

export default App;
