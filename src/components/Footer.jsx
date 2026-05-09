import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-border text-bg py-12 px-4 md:px-8 border-t-8 border-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">John Doe.</h2>
          <p className="font-medium text-bg/80 max-w-xs">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
        </div>

        <div className="flex gap-4">
          <a href="#" className="p-3 bg-white text-border brutal-border border-white hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all rounded-lg">
            <FaGithub size={24} />
          </a>
          <a href="#" className="p-3 bg-accent4 text-border brutal-border border-white hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all rounded-lg">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="p-3 bg-accent3 text-white brutal-border border-white hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all rounded-lg">
            <FaInstagram size={24} />
          </a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t-2 border-white/20 text-center font-medium flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <p>Built with React & Neo Brutalism Style</p>
      </div>
    </footer>
  );
};
