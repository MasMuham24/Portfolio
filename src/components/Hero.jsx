import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 pb-12 px-4 md:px-8 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block brutal-border bg-accent2 px-4 py-1 mb-6 font-bold transform -rotate-2 text-sm md:text-base">
            👋 Hello World
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            I'm <span className="text-white bg-border px-2 inline-block -rotate-1 brutal-border border-white">Muhammad Syafi'i</span>
            <br />
            <span className="relative">
              Fullstack
              <svg className="absolute w-full h-4 -bottom-1 left-0 text-accent1" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> Developer   
          </h1>  
          <p className="text-lg sm:text-xl font-medium mb-8 max-w-lg leading-relaxed">
            I build modern, responsive, and visually striking web experiences using cutting-edge technologies. Welcome to my creative space.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Link to="projects" smooth={true} duration={500} className="brutal-btn bg-accent1 text-center">
              View Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} className="brutal-btn bg-white text-center">
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative px-4 sm:px-0"
        >
          {/* Avatar or decorative brutalist shape */}
          <div className="relative w-full aspect-square max-w-[280px] sm:max-w-md mx-auto">
            <div className="absolute inset-0 bg-accent4 brutal-border rounded-full translate-x-3 sm:translate-x-4 translate-y-3 sm:translate-y-4"></div>
            <div className="absolute inset-0 bg-white brutal-border rounded-full flex items-center justify-center overflow-hidden">
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=John&backgroundColor=transparent" alt="Avatar" loading="eager" fetchpriority="high" className="w-full h-full object-cover p-6 sm:p-8" />
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
