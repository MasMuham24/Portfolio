import { motion } from "framer-motion";
import { Layout, Server, Database, Terminal, Wrench } from "lucide-react";

const skillCategories = [
  {
    category: "Frontend",
    icon: <Layout size={24} />,
    color: "bg-accent1",
    items: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <Server size={24} />,
    color: "bg-accent2",
    items: ["PHP", "Laravel", "REST API"],
  },
  {
    category: "Database",
    icon: <Database size={24} />,
    color: "bg-accent4",
    items: ["MySQL"],
  },
  {
    category: "Programming",
    icon: <Terminal size={24} />,
    color: "bg-accent3",
    items: ["Java", "C++", "C"],
  },
  {
    category: "Tools / Workflow",
    icon: <Wrench size={24} />,
    color: "bg-accent1",
    items: ["Git", "GitHub", "Vite"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="h-2 w-12 bg-border brutal-border hidden md:block"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold flex flex-wrap items-center gap-3">
            Technical Skills
            <span className="text-base sm:text-lg bg-accent3 text-white px-3 py-1 brutal-border rounded-full rotate-2">
              Stack &amp; Tools
            </span>
          </h2>
          <div className="h-2 grow bg-border brutal-border hidden md:block"></div>
        </div>

        <p className="text-base sm:text-lg text-border/70 font-medium max-w-2xl mb-12">
          Technologies and tools I work with to architect, build, and deploy full-stack web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="brutal-card flex flex-col overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <div
                className={`${group.color} p-5 brutal-border-b border-b-4 flex items-center gap-3.5`}
              >
                <div className="bg-white p-2 brutal-border rounded-lg shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-border">
                  {group.category}
                </h3>
              </div>

              <div className="p-6 bg-white grow flex flex-wrap gap-2.5 content-start">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
                    className="px-3.5 py-1.5 bg-bg brutal-border rounded-lg font-bold text-sm text-border shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] hover:bg-accent1 transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
