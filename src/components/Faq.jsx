import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Berapa biaya jasa pembuatan website?",
    a: "Biaya jasa pembuatan website di Programmergabut.id menyesuaikan kebutuhan dan kompleksitas project, mulai dari landing page hingga sistem informasi. Silakan hubungi Muhammad Syafi'i untuk konsultasi gratis dan penawaran harga terbaik.",
  },
  {
    q: "Apa saja yang termasuk layanan jasa website?",
    a: "Layanan kami meliputi pembuatan landing page, company profile, toko online / e-commerce, sistem informasi, web app, hingga REST API dan backend menggunakan React, Laravel, dan MySQL.",
  },
  {
    q: "Berapa lama proses pembuatan website?",
    a: "Waktu pengerjaan tergantung jenis website. Landing page atau company profile umumnya selesai dalam 3-7 hari, sedangkan web app atau sistem informasi bisa memakan waktu 2-4 minggu tergantung fitur.",
  },
  {
    q: "Apakah website yang dibuat sudah SEO friendly?",
    a: "Ya, setiap website yang kami buat sudah menerapkan dasar-dasar SEO seperti struktur HTML yang rapi, meta description, judul yang optimal, kecepatan loading yang baik, serta responsive design agar mudah ditemukan di Google.",
  },
  {
    q: "Apakah bisa kustomisasi desain website?",
    a: "Tentu. Desain website sepenuhnya dapat dikustomisasi sesuai identitas brand Anda. Kami juga menyediakan layanan pembuatan landing page sesuai keinginan dengan konsep yang modern dan responsive.",
  },
];

export const Faq = () => {
  return (
    <section
      id="faq"
      className="py-20 px-4 md:px-8 bg-accent2 brutal-border-y border-y-4"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-lg font-medium flex items-center justify-center gap-2">
            <HelpCircle size={22} /> Seputar jasa pembuatan website
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.details
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="brutal-card bg-white overflow-hidden"
              open={index === 0}
            >
              <summary className="cursor-pointer list-none px-6 py-4 font-bold text-lg flex items-center justify-between gap-4 hover:bg-accent1/30 transition-colors">
                <span>{faq.q}</span>
                <span className="text-2xl leading-none shrink-0">+</span>
              </summary>
              <div className="px-6 pb-6 font-medium text-border/80 leading-relaxed">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};
