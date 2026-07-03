import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Certifications = lazy(() => import('./components/Certifications').then(m => ({ default: m.Certifications })));
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const CertificationsPage = lazy(() => import('./pages/CertificationsPage').then(m => ({ default: m.CertificationsPage })));

function HomePage() {
  return (
    <div className="relative selection:bg-accent1 selection:text-border">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <About />
          <Projects />
          <Certifications />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
