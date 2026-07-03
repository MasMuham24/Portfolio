import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Cafe Kala Seduh Landing Page",
    desc: "Website landing page untuk cafe kala seduh",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/cafe.jpg",
    color: "bg-accent1",
    demoLink: "https://kalaseduh.vercel.app/",
    githubLink: "https://github.com/MasMuham24/kalaseduh.git",
  },
  {
    title: "CMS Skada",
    desc: "Website untuk mengelola data sekolah",
    tech: ["Laravel", "PHP", "MySQL", "TailwindCSS"],
    image: "/images/CMS.jpg",
    color: "bg-accent1",
    demoLink: "https://skada.nfy.fyi",
    githubLink: "https://github.com/MasMuham24/CMS-SKADA.git",
  },
  {
    title: "Bahasa Nusantara",
    desc: "Website untuk belajar bahasa daerah",
    tech: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
    image: "/images/bahasa.png",
    color: "bg-accent1",
    demoLink: "https://bahasa-nusantara.vercel.app/",
    githubLink: "https://github.com/MasMuham24/game-durian-runtuh",
  },
];

// Only show first 3 projects on the home page
const previewProjects = projects.slice(0, 3);

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="h-2 w-12 bg-border brutal-border hidden md:block"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>
          <div className="h-2 flex-grow bg-border brutal-border hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
              <div className="p-6 flex flex-col flex-grow bg-white">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-border/80 font-medium mb-4 flex-grow">
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
            View All Projects <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
