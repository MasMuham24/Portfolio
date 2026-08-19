import { motion } from "framer-motion";
import { LayoutTemplate, ShoppingCart, Database, Code2 } from "lucide-react";

const services = [
  {
    icon: <LayoutTemplate size={28} />,
    title: "Landing Page & Company Profile",
    desc: "Website profesional untuk memperkenalkan bisnis atau brand Anda. Desain modern, responsive, dan cepat, cocok untuk meningkatkan kepercayaan pelanggan.",
    color: "bg-accent1",
  },
  {
    icon: <ShoppingCart size={28} />,
    title: "Toko Online (E-Commerce)",
    desc: "Jasa pembuatan toko online dengan fitur keranjang, pembayaran, dan manajemen produk agar bisnis Anda bisa menjual lebih banyak secara online.",
    color: "bg-accent2",
  },
  {
    icon: <Database size={28} />,
    title: "Web App & Sistem Informasi",
    desc: "Pengembangan aplikasi web dan sistem informasi untuk sekolah, perusahaan, atau instansi dengan React, Laravel, dan MySQL yang aman dan terstruktur.",
    color: "bg-accent4",
  },
  {
    icon: <Code2 size={28} />,
    title: "REST API & Backend Laravel",
    desc: "Pembuatan REST API dan backend yang scalable menggunakan Laravel dan Sanctum, siap diintegrasikan dengan frontend maupun aplikasi mobile.",
    color: "bg-accent3",
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-4 md:px-8 bg-bg relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Jasa Pembuatan Website
          </h2>
          <div className="h-2 flex-grow bg-border brutal-border hidden md:block"></div>
        </div>
        <p className="text-lg font-medium max-w-3xl mb-12">
          Butuh website untuk bisnis atau organisasi Anda? Saya{" "}
          <span className="font-bold bg-accent1 px-1 brutal-border">
            Muhammad Syafi'i
          </span>{" "}
          (Programmergabut.id) menyediakan{" "}
          <span className="font-bold">jasa pembuatan website</span> profesional
          dan murah dengan teknologi modern React, Laravel, dan MySQL. Mulai
          dari landing page hingga sistem informasi lengkap.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="brutal-card p-6 md:p-8 flex flex-col gap-4 hover:-translate-y-1 transition-transform"
            >
              <div
                className={`p-3 ${service.color} brutal-border rounded-lg w-fit`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">
                {service.title}
              </h3>
              <p className="text-border/80 font-medium leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
