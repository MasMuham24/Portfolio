import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Projects", color: "bg-accent1" },
  { value: "Laravel", label: "Primary Backend", color: "bg-accent2" },
  { value: "React", label: "Frontend", color: "bg-accent4" },
  { value: "2×", label: "LKS Web Technology", color: "bg-accent3" },
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-8 bg-white brutal-border-y border-y-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">About Me</h2>
          <div className="h-2 flex-grow bg-border brutal-border hidden md:block"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg font-medium"
          >
            <p className="bg-bg p-6 brutal-card text-border/90 leading-relaxed">
              I'm{" "}
              <span className="font-bold bg-accent1 px-1.5 py-0.5 brutal-border">
                Muhammad Syafi'i
              </span>
              , a Full Stack Developer from Demak, Central Java, Indonesia. I
              focus on building responsive and reliable web applications with
              clean architecture and practical solutions.
            </p>
            <p className="bg-bg p-6 brutal-card text-border/90 leading-relaxed">
              My journey in web development started during junior high school.
              Since then, I've been exploring how modern technologies can turn
              ideas into functional applications. I mainly work with Laravel,
              React, REST APIs, and MySQL.
            </p>
            <div className="brutal-card p-6 bg-accent2">
              <h3 className="text-2xl font-bold mb-3">Experience Focus</h3>
              <p className="mb-3 leading-relaxed text-border/90">
                Currently focused on building full-stack applications with
                Laravel and React, designing REST APIs, managing relational
                databases, and creating reliable user experiences.
              </p>
              <p className="leading-relaxed text-border/90">
                I enjoy turning real-world problems into practical software
                while continuously learning new technologies and improving my
                development workflow.
              </p>
            </div>
          </motion.div>

          {/* Stats & Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`brutal-card p-6 ${stat.color} flex flex-col justify-center items-center text-center py-8 sm:py-10 hover:-translate-y-1 transition-transform`}
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 break-words">
                  {stat.value}
                </span>
                <span className="text-base sm:text-lg font-bold text-border/80">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
