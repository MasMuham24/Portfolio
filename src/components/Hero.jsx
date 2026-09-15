import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 px-4 md:px-8 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-accent1 brutal-border text-sm font-bold shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] -rotate-1">
            <span>Portfolio</span>
            <span>&bull;</span>
            <span>Muhammad Syafi'i</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Full Stack{" "}
            <span className="relative inline-block">
              Developer
              <svg className="absolute w-full h-4 -bottom-1 left-0 text-accent1" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-bold mb-4 text-border/90">
            Building Web Applications That Solve Real Problems.
          </p>

          <p className="text-base sm:text-lg font-medium mb-8 max-w-lg leading-relaxed text-border/80">
            I'm Muhammad Syafi'i, a Full Stack Developer from Demak, Central Java, Indonesia. I build modern web applications using Laravel, React, REST APIs, and relational databases.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="brutal-btn bg-accent1 text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            <a
              href="https://github.com/MasMuham24"
              target="_blank"
              rel="noreferrer"
              className="brutal-btn bg-white text-center flex items-center justify-center gap-2"
            >
              <FaGithub size={18} /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative px-4 sm:px-0"
        >
          {/* Avatar or decorative brutalist shape */}
          <div className="relative w-full aspect-square max-w-70 sm:max-w-md mx-auto">
            <div className="absolute inset-0 bg-accent4 brutal-border rounded-full translate-x-3 sm:translate-x-4 translate-y-3 sm:translate-y-4"></div>
            <div className="absolute inset-0 bg-white brutal-border rounded-full flex items-center justify-center overflow-hidden">
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=John&backgroundColor=transparent" alt="Muhammad Syafi'i - Full Stack Developer" loading="eager" fetchpriority="high" className="w-full h-full object-cover p-6 sm:p-8" />
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-5 sm:top-10 -left-2 sm:-left-6 brutal-border bg-accent1 px-3 sm:px-4 py-1 sm:py-2 font-bold rotate-12 text-sm sm:text-base z-10"
            >
              React.js
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute bottom-10 sm:bottom-20 -right-2 sm:-right-4 brutal-border bg-accent3 text-white px-3 sm:px-4 py-1 sm:py-2 font-bold -rotate-6 text-sm sm:text-base z-10"
            >
              Laravel
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
