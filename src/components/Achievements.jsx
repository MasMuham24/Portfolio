import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";

const achievements = [
  {
    place: "1st Place",
    title: "LKS Web Technology Kabupaten Demak",
    year: "2026",
    level: "Demak Regency Competition",
    description: "Competed in full-stack web engineering challenges covering modern web application architecture, API integration, database design, and responsive frontend implementation under strict competition time constraints.",
    color: "bg-accent1",
    badgeColor: "bg-white",
    icon: <Trophy size={36} className="text-border" />,
    rotate: "-rotate-1",
  },
  {
    place: "3rd Place",
    title: "LKS Web Technology Kabupaten Demak",
    year: "2025",
    level: "Demak Regency Competition",
    description: "Recognized as a top web technology competitor in Demak Regency, demonstrating rapid problem-solving, clean code standards, and practical web development execution.",
    color: "bg-accent2",
    badgeColor: "bg-white",
    icon: <Medal size={36} className="text-border" />,
    rotate: "rotate-1",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 md:px-8 bg-white brutal-border-y border-y-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="h-2 w-12 bg-border brutal-border hidden md:block"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Key Achievements
          </h2>
          <div className="h-2 grow bg-border brutal-border hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.year + item.place}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`brutal-card p-6 sm:p-8 ${item.color} flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-transform`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="p-3 bg-white brutal-border rounded-xl shadow-[3px_3px_0px_0px_rgba(17,17,17,1)]">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1 bg-border text-white text-sm sm:text-base font-bold brutal-border rounded-full shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                      {item.year}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-white brutal-border text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
                    {item.level}
                  </span>
                  <div className="text-4xl sm:text-5xl font-black mb-2 tracking-tight">
                    {item.place}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-border leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-border/80 font-medium text-sm sm:text-base leading-relaxed bg-white/70 p-4 brutal-border rounded-lg">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
