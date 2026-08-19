/* eslint-disable react-refresh/only-export-components */
import { renderToString } from "react-dom/server";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AnimatedBackground } from "./components/ui/AnimatedBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Skills } from "./components/Skills";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectsPage } from "./pages/ProjectsPage";
import { CertificationsPage } from "./pages/CertificationsPage";
import { seoRoutes, faqJsonLdString, SITE_URL } from "./utils/seo";

function HomePage() {
  return (
    <div className="relative selection:bg-accent1 selection:text-border">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Certifications />
        <Skills />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function RoutedApp({ path }) {
  return (
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
      </Routes>
    </MemoryRouter>
  );
}

export function renderRoute(path = "/") {
  return renderToString(<RoutedApp path={path} />);
}

const metaByName = (name) => `name="${name}"`;
const metaByProp = (prop) => `property="${prop}"`;

export function buildSeoPatch(route) {
  const key = seoRoutes[route] ? route : "/";
  const seo = seoRoutes[key];
  const url = SITE_URL + (key === "/" ? "" : key);

  return {
    url,
    title: seo.title,
    description: seo.description,
    faqJsonLd: seo.faq ? faqJsonLdString() : null,
    metaByName,
    metaByProp,
  };
}