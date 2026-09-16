import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AnimatedBackground } from "../components/ui/AnimatedBackground";
import { Footer } from "../components/Footer";
import { useSeo } from "../utils/seo";

const allProjects = [
  {
    title: "SiPelajar",
    subtitle: "School Management & Attendance System",
    desc: "A Laravel-based school management platform for managing students, teachers, attendance, assignments, grades, and school locations.",
    tech: ["Laravel", "Blade", "MySQL", "Tailwind CSS"],
    image: "/images/SiPelajar.png",
    color: "bg-accent1",
    demoLink: "https://sipelajar.page.gd",
    githubLink: "https://github.com/MasMuham24/Sipelajar",
  },
  {
    title: "e-Absensi / HRIS",
    subtitle: "Employee Attendance & HR Management System",
    desc: "A web-based HR management system for managing employees, departments, positions, attendance, leave requests, and location-based check-in.",
    tech: ["Laravel", "Blade", "MySQL", "Tailwind CSS"],
    image: "/images/arsip.png",
    color: "bg-accent2",
    githubLink: "https://github.com/MasMuham24",
  },
  {
    title: "TruthGuard AI",
    subtitle: "AI-Powered Hoax & Scam Detection",
    desc: "An AI-powered web application that analyzes messages and classifies potential hoaxes and scams using natural language processing.",
    tech: ["Laravel", "AI API", "REST API", "MySQL"],
    image: "/images/truthguard.jpg",
    color: "bg-accent4",
    githubLink: "https://github.com/MasMuham24",
  },
  {
    title: "NusaAlert",
    subtitle: "Earthquake Monitoring Application",
    desc: "A web application that retrieves and displays earthquake information from BMKG and provides useful earthquake monitoring features.",
    tech: ["Laravel", "BMKG API", "MySQL", "Tailwind CSS"],
    image: "/images/nusaalert.jpg",
    color: "bg-accent1",
    githubLink: "https://github.com/MasMuham24",
  },
  {
    title: "e-RumahSakit",
    subtitle: "Hospital REST API",
    desc: "A REST API for hospital management with authentication, role-based access, and structured medical data management.",
    tech: ["Laravel", "Sanctum", "REST API", "MySQL"],
    image: "/images/erumahsakit.png",
    color: "bg-accent2",
    githubLink: "https://github.com/MasMuham24/Rest-Api-e-rumahsakit.git",
  },
  {
    title: "CMS-SKADA",
    subtitle: "School Content Management System",
    desc: "A modern Content Management System built with Laravel, Tailwind CSS, MySQL, and JavaScript for school administration.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    image: "/images/CMS.jpg",
    color: "bg-accent3",
    demoLink: "https://skada.nfy.fyi",
    githubLink: "https://github.com/MasMuham24/CMS-SKADA.git",
  },
  {
    title: "Installment Car",
    subtitle: "Car Installment Simulator",
    desc: "A Laravel 11 and React application for vehicle installment simulation with customizable finance calculations.",
    tech: ["Laravel", "MySQL", "React"],
    image: "/images/installment.png",
    color: "bg-accent1",
    githubLink: "https://github.com/MasMuham24/Kredit-Mobil.git",
  },
  {
    title: "Bahasa Nusantara",
    subtitle: "Regional Language Explorer",
    desc: "An online platform for exploring and preserving Indonesia's diverse regional languages and regional vocabularies.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/bahasa.png",
    color: "bg-accent2",
    demoLink: "https://bahasa-nusantara.vercel.app/",
    githubLink: "https://github.com/MasMuham24/BahasaNusantara.git",
  },
  {
    title: "Sistem E-Arsip",
    subtitle: "Digital Document Archive",
    desc: "A Laravel 11 web application for secure digital archive organization and categorized document management.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    image: "/images/arsip.png",
    color: "bg-accent4",
    demoLink: "http://e-arsip.page.gd/",
    githubLink: "https://github.com/MasMuham24/e-arsip.git",
  },
  {
    title: "Car Rental",
    subtitle: "Vehicle Booking Platform",
    desc: "A modern and responsive car rental showcase application built to display fleets, vehicle specs, and booking workflows.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    image: "/images/rental.png",
    color: "bg-accent1",
    demoLink: "https://rental27.vercel.app/",
    githubLink: "https://github.com/MasMuham24/rental-mobil.git",
  },
  {
    title: "Batik Nusantara",
    subtitle: "Cultural Heritage Showcase",
    desc: "A modern, responsive landing page showcasing Indonesian artisanal batik motifs, cultural history, and product catalogs.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/batik.png",
    color: "bg-accent2",
    demoLink: "https://batik-nusantara-orpin.vercel.app/",
    githubLink: "https://github.com/MasMuham24/batik-nusantara.git",
  },
  {
    title: "Cafe Kala Seduh",
    subtitle: "Café Brand & Menu Website",
    desc: "A stylish café landing page highlighting specialty coffee menus, store ambience, and visitor information.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/cafe.jpg",
    color: "bg-accent3",
    demoLink: "https://kalaseduh.vercel.app/",
    githubLink: "https://github.com/MasMuham24/kalaseduh.git",
  },
  {
    title: "MovieBox",
    subtitle: "Netflix-Inspired Movie Discovery & Watchlist Platform",
    desc: "A web-based movie discovery platform for exploring movies, searching titles, viewing detailed information, watching trailers, checking streaming availability, and managing personal favorites and watchlists using TMDB API.",
    tech: ["Laravel", "Blade", "MySQL", "TMDB API", "CSS", "JavaScript"],
    image: "/images/moviebox.webp",
    color: "bg-accent2",
    githubLink: "https://github.com/MasMuham24/MovieBox",
  },
];

export const ProjectsPage = () => {
  useSeo("/projects");
  return (
    <div className="relative selection:bg-accent1 selection:text-border min-h-screen">
      <AnimatedBackground />

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm brutal-border-b border-b-4 border-border px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold brutal-border bg-accent1 px-4 py-1 inline-block -rotate-2 hover:rotate-0 transition-transform cursor-pointer shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]"
          >
            Programmergabut.id
          </Link>
          <Link
            to="/"
            className="brutal-btn bg-white py-1.5 px-4 text-sm flex gap-2 items-center"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="h-2 w-12 bg-border brutal-border hidden md:block"></div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                All Projects
              </h1>
              <div className="h-2 grow bg-border brutal-border hidden md:block"></div>
            </div>
            <p className="text-base sm:text-lg text-border/70 font-medium max-w-2xl">
              A comprehensive showcase of web applications, full-stack
              platforms, REST APIs, and practical software solutions built with
              clean architecture and modern engineering standards.
            </p>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`brutal-card flex flex-col overflow-hidden group ${project.color}`}
              >
                <div className="relative h-44 sm:h-52 overflow-hidden brutal-border-b border-b-4 bg-gray-100">
                  <div className="absolute inset-0 bg-border/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.subtitle}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 sm:p-6 flex flex-col grow bg-white justify-between">
                  <div>
                    <div className="mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-border/60">
                        {project.subtitle}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold mt-0.5 text-border">
                        {project.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-border/80 font-medium mb-4 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 bg-bg brutal-border text-xs font-bold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="brutal-btn bg-accent1 flex-1 py-2 text-sm flex gap-2 justify-center items-center"
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className={`brutal-btn bg-white ${project.demoLink ? "flex-1" : "w-full"} py-2 text-sm flex gap-2 justify-center items-center`}
                        >
                          <FaGithub size={16} /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
