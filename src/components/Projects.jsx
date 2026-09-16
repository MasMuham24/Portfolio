import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const featuredProjects = [
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
    githubLink: "https://github.com/MasMuham24/WorkTrack-HRIS",
  },
  {
    title: "TruthGuard AI",
    subtitle: "AI-Powered Hoax & Scam Detection",
    desc: "An AI-powered web application that analyzes messages and classifies potential hoaxes and scams.",
    tech: ["Laravel", "AI API", "REST API", "MySQL"],
    image: "/images/truthguard.jpg",
    color: "bg-accent4",
    githubLink: "https://github.com/MasMuham24/TruthGuard-AI",
  },
  {
    title: "NusaAlert",
    subtitle: "Earthquake Monitoring Application",
    desc: "A web application that retrieves and displays earthquake information from BMKG and provides useful earthquake monitoring features.",
    tech: ["Laravel", "BMKG API", "MySQL", "Tailwind CSS"],
    image: "/images/nusaalert.jpg",
    color: "bg-accent1",
    githubLink: "https://github.com/MasMuham24/NusaAlert",
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
    desc: "A modern Content Management System built with Laravel, Tailwind CSS, MySQL, and JavaScript for school administration and publication.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    image: "/images/CMS.jpg",
    color: "bg-accent3",
    demoLink: "https://skada.nfy.fyi",
    githubLink: "https://github.com/MasMuham24/CMS-SKADA.git",
  },

];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="h-2 w-12 bg-border brutal-border hidden md:block"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>
          <div className="h-2 grow bg-border brutal-border hidden md:block"></div>
        </div>

        <p className="text-base sm:text-lg text-border/70 font-medium max-w-2xl mb-12">
          Production-oriented web applications and backend systems built with
          Laravel, React, REST APIs, and relational databases.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`brutal-card flex flex-col overflow-hidden group ${project.color}`}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden brutal-border-b border-b-4 bg-gray-100">
                <div className="absolute inset-0 bg-border/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.subtitle}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col grow bg-white justify-between">
                <div>
                  <div className="mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-border/60">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold mt-0.5 text-border">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-border/80 font-medium text-sm leading-relaxed mb-5">
                    {project.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
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

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link
            to="/projects"
            className="brutal-btn bg-border text-white px-8 py-3 text-lg font-bold flex items-center gap-3 hover:-translate-y-1 transition-transform"
          >
            View All Projects ({featuredProjects.length}+){" "}
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
