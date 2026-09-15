import { motion } from "framer-motion";
import { Code2, Trophy, Laptop } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Web Development",
    category: "Development & Solutions",
    desc: "Building web applications, internal systems, and REST APIs for practical and real-world use cases.",
    icon: <Code2 size={24} />,
    color: "bg-accent1",
    tags: ["Laravel", "React", "REST API", "MySQL"],
  },
  {
    role: "LKS Web Technology Competitor & Intensive Training",
    category: "Technical Competition",
    desc: "Participating in intensive web development training and competition preparation with a focus on full-stack development, architecture, implementation speed, and web standards.",
    icon: <Trophy size={24} />,
    color: "bg-accent2",
    tags: ["Full Stack Architecture", "API Integration", "Web Standards", "Speed & Precision"],
  },
  {
    role: "Vocational Practical Software Development",
    category: "Applied Engineering",
    desc: "Developing practical software projects including school management systems, HR attendance systems, API integrations, and other web applications.",
    icon: <Laptop size={24} />,
    color: "bg-accent4",
    tags: ["School Management", "HR & Attendance", "Database Design", "Blade & Tailwind CSS"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="h-2 w-12 bg-border brutal-border hidden md:block"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Practical Experience
          </h2>
          <div className="h-2 grow bg-border brutal-border hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="brutal-card flex flex-col overflow-hidden group hover:-translate-y-1 transition-transform"
            >
              <div className={`${exp.color} p-6 brutal-border-b border-b-4 flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white brutal-border rounded-lg shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                    {exp.icon}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider bg-white/80 px-2.5 py-1 brutal-border rounded">
                    {exp.category}
                  </span>
                </div>
              </div>

              <div className="p-6 bg-white flex flex-col grow justify-between gap-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug">
                    {exp.role}
                  </h3>
                  <p className="text-border/80 font-medium leading-relaxed">
                    {exp.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-border/10">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-bg brutal-border text-xs font-bold rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
