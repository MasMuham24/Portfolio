import { Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-8 bg-accent1 brutal-border-y border-y-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 bg-white brutal-border text-sm font-bold shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] -rotate-1">
            <Sparkles size={16} className="text-border" />
            <span>Available for freelance projects and collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Let's Build Something Useful.
          </h2>
          <p className="text-lg sm:text-xl font-medium text-border/85 max-w-2xl mx-auto">
            Open to interesting projects, collaborations, and opportunities in web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white brutal-card p-6 sm:p-8 md:p-12">
          {/* Social Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Get in Touch</h3>
              <p className="text-base sm:text-lg font-medium text-border/80 leading-relaxed">
                Whether you have a question, a project in mind, or want to connect about development opportunities, feel free to drop a message.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:muhammadsyafiin950@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-accent2 brutal-border rounded-lg group-hover:-translate-y-1 group-hover:shadow-brutal transition-all shrink-0">
                  <Mail size={24} />
                </div>
                <span className="text-base sm:text-lg font-bold group-hover:underline break-all">
                  muhammadsyafiin950@gmail.com
                </span>
              </a>

              <a
                href="https://github.com/MasMuham24"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-white brutal-border rounded-lg group-hover:-translate-y-1 group-hover:shadow-brutal transition-all shrink-0">
                  <FaGithub size={24} />
                </div>
                <span className="text-base sm:text-lg font-bold group-hover:underline">
                  github.com/MasMuham24
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-syafi-i-967a7440a/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-accent4 brutal-border rounded-lg group-hover:-translate-y-1 group-hover:shadow-brutal transition-all shrink-0">
                  <FaLinkedin size={24} />
                </div>
                <span className="text-base sm:text-lg font-bold group-hover:underline">
                  Muhammad Syafi'i
                </span>
              </a>

              <a
                href="https://www.instagram.com/another__side24/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-accent3 text-white brutal-border border-border rounded-lg group-hover:-translate-y-1 group-hover:shadow-brutal transition-all shrink-0">
                  <FaInstagram size={24} className="text-border" />
                </div>
                <span className="text-base sm:text-lg font-bold group-hover:underline">
                  @another__side24
                </span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/muhammadsyafiin950@gmail.com"
            method="POST"
            className="space-y-5 flex flex-col justify-center"
          >
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-base font-bold text-border">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Muhammad Syafi'i"
                className="w-full px-4 py-3 brutal-border rounded-lg bg-bg focus:bg-white focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-base font-bold text-border">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="developer@example.com"
                className="w-full px-4 py-3 brutal-border rounded-lg bg-bg focus:bg-white focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-base font-bold text-border">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Tell me about your project or inquiry..."
                className="w-full px-4 py-3 brutal-border rounded-lg bg-bg focus:bg-white focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="brutal-btn bg-accent4 w-full flex items-center justify-center gap-2 py-3.5 text-lg font-bold hover:bg-accent4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
