import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AnimatedBackground } from "../components/ui/AnimatedBackground";
import { Footer } from "../components/Footer";

const projects = [
  {
    title: "Cafe Kala Seduh Landing Page",
    desc: "A stylish café website focused on showcasing coffee, menus, and brand identity.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/cafe.jpg",
    color: "bg-accent1",
    demoLink: "https://kalaseduh.vercel.app/",
    githubLink: "https://github.com/MasMuham24/kalaseduh.git",
  }, 
  {
    title: "Rest Api Job Vacancy",
    desc: "A RESTful API for managing job vacancies, applications, and recruitment data.",
    tech: ["Laravel", "Mysql"],
    image: "/images/api.png",
    color: "bg-accent1",
    demoLink: "#",
    githubLink: "https://github.com/MasMuham24/Job-Vacancy.git",
  },
  {
    title: "Bahasa Nusantara",
    desc: "An online dictionary for exploring and preserving Indonesia's diverse regional languages.",
    tech: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
    image: "/images/bahasa.png",
    color: "bg-accent1",
    demoLink: "https://bahasa-nusantara.vercel.app/",
    githubLink: "https://github.com/MasMuham24/BahasaNusantara.git",
  },
  {
    title: "Installment Car",
    desc: "A Laravel 11 and React application for car installment simulation with finance calculation.",
    tech: ["Laravel", "Mysql", "React"],
    image: "/images/installment.png",
    color: "bg-accent1",
    demoLink: "#",
    githubLink: "https://github.com/MasMuham24/Kredit-Mobil.git",
  },
  {
    title: "CMS Skada",
    desc: "A modern Content Management System built with Laravel, Tailwind CSS, MySQL, and JavaScript.",
    tech: ["Laravel", "PHP", "MySQL", "TailwindCSS"],
    image: "/images/CMS.jpg",
    color: "bg-accent1",
    demoLink: "https://skada.nfy.fyi",
    githubLink: "https://github.com/MasMuham24/CMS-SKADA.git",
  },
  {
    title: "Restful API e-rumahsakit",
    desc: "A RESTful API for hospital management built with Laravel, Sanctum, and MySQL.",
    tech: ["Laravel", "PHP", "MySQL"],
    image: "/images/erumahsakit.png",
    color: "bg-accent1",
    demoLink: "#",
    githubLink: "https://github.com/MasMuham24/CMS-SKADA.git",
  },
  {
    title: "Sistem E-Arsip",
    desc: "A Laravel 11 web application for secure digital archive and document management.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwindcss"],
    image: "/images/arsip.png",
    color: "bg-accent1",
    demoLink: "http://e-arsip.page.gd/",
    githubLink: "https://github.com/MasMuham24/e-arsip.git",
  },
];

export const ProjectsPage = () => {
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
            Programergabut.id
          </Link>
          <Link
            to="/"
            className="brutal-btn bg-white py-2 text-sm flex gap-2 items-center"
          >
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="h-2 w-12 bg-border brutal-border hidden md:block"></div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                All Projects
              </h1>
              <div className="h-2 grow bg-border brutal-border hidden md:block"></div>
            </div>
            <p className="text-lg text-border/70 font-medium max-w-2xl">
              Kumpulan project yang sudah saya buat. Setiap project adalah
              perjalanan belajar dan eksplorasi teknologi baru.
            </p>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`brutal-card flex flex-col overflow-hidden group ${project.color}`}
              >
                <div className="relative h-48 sm:h-64 overflow-hidden brutal-border-b border-b-4">
                  <div className="absolute inset-0 bg-border/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-6 flex flex-col grow bg-white">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-border/80 font-medium mb-4 grow">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-bg brutal-border text-sm font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="brutal-btn bg-accent1 flex-1 py-2 text-sm flex gap-2 justify-center items-center"
                    >
                      <ExternalLink size={18} /> Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="brutal-btn bg-white flex-1 py-2 text-sm flex gap-2 justify-center items-center"
                    >
                      <FaGithub size={18} /> Code
                    </a>
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
