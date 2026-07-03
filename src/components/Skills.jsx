import { motion } from 'framer-motion';
import { Layout, Database, Wrench } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Layout size={24} />,
    color: 'bg-accent1',
    items: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React', 'Framer Motion']
  },
  {
    category: 'Backend',
    icon: <Database size={24} />,
    color: 'bg-accent4',
    items: ['Laravel', 'REST API', 'MySQL', 'PHP']
  },
  {
    category: 'Tools',
    icon: <Wrench size={24} />,
    color: 'bg-accent2',
    items: ['Git', 'GitHub', 'Figma', 'VS Code', 'Postman']
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 flex flex-wrap items-center gap-3 sm:gap-4">
          Tech Stack <span className="text-lg sm:text-xl bg-accent3 text-white px-3 py-1 brutal-border rounded-full rotate-3 sm:rotate-6">My Arsenal</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="brutal-card flex flex-col overflow-hidden"
            >
              <div className={`${skillGroup.color} p-6 brutal-border-b border-b-4 flex items-center gap-4`}>
                <div className="bg-white p-2 brutal-border rounded-lg">
                  {skillGroup.icon}
                </div>
                <h3 className="text-2xl font-bold">{skillGroup.category}</h3>
              </div>
              <div className="p-6 bg-white grow flex flex-wrap gap-3 content-start">
                {skillGroup.items.map(item => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
                    className="px-4 py-2 bg-bg brutal-border rounded-full font-bold cursor-default"
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
