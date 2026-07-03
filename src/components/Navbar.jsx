import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../utils/cn";

const scrollItems = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Contact", to: "contact" },
];

const routerItems = [
  { name: "Projects", to: "/projects" },
  { name: "Certification", to: "/certifications" },
];

// Ordered list for display (maintaining visual order in navbar)
const navOrder = ["About", "Projects", "Certification", "Skills", "Contact"];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavItem = (name, isMobile = false) => {
    const scrollItem = scrollItems.find((item) => item.name === name);
    const routerItem = routerItems.find((item) => item.name === name);

    if (scrollItem) {
      return (
        <ScrollLink
          key={scrollItem.name}
          to={scrollItem.to}
          smooth={true}
          duration={500}
          spy={true}
          activeClass={
            isMobile
              ? "bg-accent2"
              : "bg-accent2 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] translate-x-[-2px] translate-y-[-2px]"
          }
          onClick={isMobile ? () => setIsOpen(false) : undefined}
          className={
            isMobile
              ? "px-4 py-3 font-bold brutal-border bg-bg text-center cursor-pointer hover:bg-accent2 transition-all active:translate-y-1"
              : "px-4 py-2 font-bold brutal-border bg-white cursor-pointer hover:bg-accent2 transition-all hover:shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-1"
          }
        >
          {scrollItem.name}
        </ScrollLink>
      );
    }

    if (routerItem) {
      return (
        <RouterLink
          key={routerItem.name}
          to={routerItem.to}
          onClick={isMobile ? () => setIsOpen(false) : undefined}
          className={
            isMobile
              ? "px-4 py-3 font-bold brutal-border bg-bg text-center cursor-pointer hover:bg-accent2 transition-all active:translate-y-1 block"
              : "px-4 py-2 font-bold brutal-border bg-white cursor-pointer hover:bg-accent2 transition-all hover:shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-1"
          }
        >
          {routerItem.name}
        </RouterLink>
      );
    }

    return null;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 md:px-8",
        scrolled
          ? "bg-bg/90 backdrop-blur-sm brutal-border-b border-b-4 border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold brutal-border bg-accent1 px-4 py-1 inline-block -rotate-2 hover:rotate-0 transition-transform cursor-pointer shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
          <ScrollLink to="hero" smooth={true} duration={500}>
            Programergabut.id
          </ScrollLink>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navOrder.map((name) => renderNavItem(name, false))}
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
          {navOrder.map((name) => renderNavItem(name, true))}
        </div>
      )}
    </nav>
  );
};
