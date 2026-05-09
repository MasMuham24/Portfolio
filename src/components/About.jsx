import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: "20+", color: "bg-accent1" },
  { label: "Tech Stack", value: "15+", color: "bg-accent2" },
  { label: "Learning Journey", value: "3 Yrs", color: "bg-accent4" },
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

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg font-medium"
          >
            <p className="bg-bg p-6 brutal-card">
              I am a passionate{" "}
              <span className="font-bold bg-accent1 px-1 brutal-border">
                Fullstack Web Developer
              </span>{" "}
              with a strong focus on creating dynamic, responsive, and
              user-centric web applications.
            </p>
            <p className="bg-bg p-6 brutal-card">
              My journey in web development began in 7th grade, and since then,
              I've been obsessed with bridging the gap between beautiful design
              and functional code. I specialize in the React ecosystem and
              modern backend frameworks.
            </p>
            <div className="brutal-card p-6 bg-accent2">
              <h3 className="text-2xl font-bold mb-2">Experience Focus</h3>
              <p>
                Currently focused on building robust backend systems and
                scalable fullstack applications using Laravel and React.
                Passionate about architecting efficient APIs and seamless user
                experiences while staying adaptable to the evolving tech
                landscape
              </p>
            </div>
          </motion.div>

          {/* Stats & Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`brutal-card p-6 ${stat.color} flex flex-col justify-center items-center text-center aspect-auto sm:aspect-square md:aspect-auto py-8 sm:py-6 ${index === 2 ? "md:col-span-2" : ""}`}
              >
                <span className="text-5xl font-bold mb-2">{stat.value}</span>
                <span className="text-xl font-semibold">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
