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

function HomePage() {
  return (
    <div className="relative selection:bg-accent1 selection:text-border">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
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
