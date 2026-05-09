import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

const navItems = [
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Certification', to: 'certification' },
  { name: 'Skills', to: 'skills' },
  { name: 'Contact', to: 'contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 md:px-8",
      scrolled ? "bg-bg/90 backdrop-blur-sm brutal-border-b border-b-4 border-border" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold brutal-border bg-accent1 px-4 py-1 inline-block -rotate-2 hover:rotate-0 transition-transform cursor-pointer shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
          <Link to="hero" smooth={true} duration={500}>
            Programergabut.id
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="bg-accent2 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] translate-x-[-2px] translate-y-[-2px]"
              className="px-4 py-2 font-bold brutal-border bg-white cursor-pointer hover:bg-accent2 transition-all hover:shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-1"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden brutal-border bg-white p-2 hover:bg-accent1 shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] active:translate-y-1 active:shadow-none transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white brutal-border border-x-0 border-t-0 p-4 flex flex-col gap-4 shadow-brutalLg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="bg-accent2"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 font-bold brutal-border bg-bg text-center cursor-pointer hover:bg-accent2 transition-all active:translate-y-1"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
