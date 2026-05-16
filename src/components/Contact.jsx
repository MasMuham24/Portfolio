import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-8 bg-accent1 brutal-border-y border-y-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl font-medium">
            Have a project in mind or just want to chat?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white brutal-card p-8 md:p-12">
          {/* Social Links */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Reach Out Directly</h3>
            <p className="text-lg font-medium text-border/80">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:muhammadsyafiin950@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-accent2 brutal-border rounded-lg group-hover:-translate-y-1 group-hover:shadow-brutal transition-all shrink-0">
                  <Mail size={24} />
                </div>
                <span className="text-base sm:text-xl font-bold group-hover:underline break-all sm:break-normal">
                  muhammadsyafiin950@gmail.com
                </span>
              </a>
              <a href="#" className="flex items-center gap-4 group">
                <div className="p-3 bg-white brutal-border rounded-lg group-hover:-translate-y-1 group-hover:shadow-brutal transition-all shrink-0">
                  <FaGithub size={24} />
                </div>
                <span className="text-base sm:text-xl font-bold group-hover:underline break-all sm:break-normal">
                  github.com/MasMuham24
                </span>
              </a>
              <a href="https://www.instagram.com/another__side24/" className="flex items-center gap-4 group">
                <div className="p-3 bg-accent3 text-white brutal-border border-white rounded-lg group-hover:-translate-y-1 group-hover:shadow-brutal transition-all shrink-0">
                  <FaInstagram size={24} />
                </div>
                <span className="text-base sm:text-xl font-bold group-hover:underline break-all sm:break-normal">
                  @another__side24
                </span>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-syafi-i-967a7440a/" className="flex items-center gap-4 group">
                <div className="p-3 bg-accent3 text-white brutal-border border-white rounded-lg group-hover:-translate-y-1 group-hover:shadow-brutal transition-all shrink-0">
                  <FaLinkedin size={24} />
                </div>
                <span className="text-base sm:text-xl font-bold group-hover:underline break-all sm:break-normal">
                  Muhammad Syafi'i
                </span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 flex flex-col justify-center">
            <div className="space-y-2">
              <label htmlFor="name" className="text-lg font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full px-4 py-3 brutal-border rounded-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-shadow bg-bg"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-lg font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 brutal-border rounded-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-shadow bg-bg"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-lg font-bold">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 brutal-border rounded-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-shadow bg-bg resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="brutal-btn bg-accent4 w-full flex items-center justify-center gap-2 py-4 text-xl"
            >
              <Send size={24} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
