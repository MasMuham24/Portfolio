import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";

export const certs = [
  {
    name: "1st Place LKS Web Technology Demak Regency",
    platform: "Kemendikdasmen",
    year: "2026",
    color: "bg-accent1",
    file: "/certs/lks1.pdf",
  },
  {
    name: "3rd Place LKS Web Technology Demak Regency",
    platform: "Kemendikdasmen",
    year: "2025",
    color: "bg-accent2",
    file: "/certs/lks2.pdf",
  },
  {
    name: "Digiup Bootcamp Laravel Web Programmer",
    platform: "Digiup",
    year: "2025",
    color: "bg-accent3",
    file: "/certs/digiup.pdf",
  },
  {
    name: "Belajar Dasar Pemrograman Web",
    platform: "Dicoding",
    year: "2025",
    color: "bg-accent4",
    file: "/certs/dicoding1.pdf",
  },
];

export const Certifications = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const isPdf = selectedFile?.toLowerCase().endsWith(".pdf");

  return (
    <section id="certifications" className="py-20 px-4 md:px-8 bg-border text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-bg text-border px-6 py-1 brutal-border border-white inline-block -rotate-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
              Certifications
            </span>
          </h2>
          <p className="text-white/80 font-medium max-w-xl mx-auto mt-4 text-base sm:text-lg">
            Verified credentials and competition recognition in full-stack web development and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedFile(cert.file)}
              className="brutal-border border-white bg-bg text-border p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 brutal-border rounded-lg ${cert.color} shrink-0`}>
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold leading-snug group-hover:underline">
                    {cert.name}
                  </h3>
                  <p className="font-semibold text-border/70 mt-1 text-sm">
                    {cert.platform} &bull; {cert.year}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedFile(cert.file);
                }}
                className="brutal-btn bg-white text-border py-1.5 px-3 text-xs font-bold whitespace-nowrap self-stretch sm:self-auto hover:bg-accent1 transition-colors"
              >
                View PDF
              </button>
            </motion.div>
          ))}
        </div>

        {/* View All Certifications Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link
            to="/certifications"
            className="brutal-btn bg-bg text-border px-8 py-3 text-lg font-bold flex items-center gap-3 hover:-translate-y-1 transition-transform"
          >
            All Certifications &amp; Credentials <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>

      {/* PDF Modal */}
      <AnimatePresence>
        {selectedFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFile(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-bg brutal-border border-4 border-border p-3 md:p-4 rounded-xl flex flex-col h-[85vh]"
            >
              <button
                onClick={() => setSelectedFile(null)}
                className="absolute -top-3 -right-3 md:-top-5 md:-right-5 bg-accent1 p-2 rounded-full brutal-border border-border hover:rotate-90 transition-transform z-10 cursor-pointer shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]"
                aria-label="Close Certificate Preview"
              >
                <X size={20} className="text-border" />
              </button>
              <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center overflow-hidden border-2 border-border relative">
                {isPdf ? (
                  <iframe
                    src={selectedFile}
                    className="w-full h-full bg-white"
                    title="Certificate PDF Preview"
                  />
                ) : (
                  <img
                    src={selectedFile}
                    alt="Certificate Preview"
                    className="w-full h-full object-contain bg-white"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
