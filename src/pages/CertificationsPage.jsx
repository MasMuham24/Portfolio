import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedBackground } from "../components/ui/AnimatedBackground";
import { Footer } from "../components/Footer";

const certs = [
  {
    name: "3rd Place LKS Web Technology Demak Regency",
    platform: "Kemendikdasmen",
    year: "2025",
    color: "bg-accent2",
    file: "/certs/lks2.pdf",
  },
  {
    name: "1st Place LKS Web Technology Demak Regency",
    platform: "Kemendikdasmen",
    year: "2024",
    color: "bg-accent1",
    file: "/certs/lks1.pdf",
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

export const CertificationsPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const isPdf = selectedFile?.toLowerCase().endsWith(".pdf");

  return (
    <div className="relative selection:bg-accent1 selection:text-border min-h-screen">
      <AnimatedBackground />

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm brutal-border-b border-b-4 border-border px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold brutal-border bg-accent1 px-4 py-1 inline-block -rotate-2 hover:rotate-0 transition-transform cursor-pointer shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]"
          >
            Programergabut.id
          </Link>
          <Link
            to="/"
            className="brutal-btn bg-white py-2 text-sm flex gap-2 items-center"
          >
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
              <span className="bg-border text-white px-6 py-2 brutal-border border-border inline-block -rotate-1">
                Certifications
              </span>
            </h1>
            <p className="text-lg text-border/70 font-medium max-w-2xl mx-auto text-center mt-6">
              Sertifikat dan pencapaian yang sudah saya raih selama perjalanan
              belajar di bidang teknologi.
            </p>
          </motion.div>

          {/* Certification Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="brutal-border border-border bg-white text-border p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:-translate-y-2 hover:shadow-brutalLg transition-all cursor-pointer"
                onClick={() => setSelectedFile(cert.file)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 brutal-border rounded-lg ${cert.color}`}>
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{cert.name}</h3>
                    <p className="font-medium text-gray-600">
                      {cert.platform} &bull; {cert.year}
                    </p>
                  </div>
                </div>
                <button
                  className="brutal-btn bg-accent1 py-2 text-sm whitespace-nowrap self-stretch sm:self-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFile(cert.file);
                  }}
                >
                  View Credential
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* PDF Modal */}
      <AnimatePresence>
        {selectedFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFile(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -2 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotate: 2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-bg brutal-border border-4 border-border p-2 md:p-4 rounded-xl flex flex-col h-[80vh]"
            >
              <button
                onClick={() => setSelectedFile(null)}
                className="absolute -top-3 -right-3 md:-top-6 md:-right-6 bg-accent1 p-2 rounded-full brutal-border border-border hover:rotate-90 transition-transform z-10"
              >
                <X size={24} className="text-border" />
              </button>
              <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center overflow-hidden border-2 border-border relative group">
                {isPdf ? (
                  <iframe
                    src={selectedFile}
                    className="w-full h-full bg-white"
                    title="Certificate PDF"
                  />
                ) : (
                  <>
                    <img
                      src={selectedFile}
                      alt="Certificate"
                      className="w-full h-full object-contain bg-white"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="absolute inset-0 hidden flex-col items-center justify-center bg-gray-100 text-border p-6 text-center">
                      <Award size={48} className="mb-4 text-gray-400" />
                      <p className="font-bold text-xl mb-2">File Not Found</p>
                      <p className="text-gray-500">
                        Please add your certificate file at:
                      </p>
                      <code className="bg-gray-200 px-2 py-1 rounded mt-2 text-sm break-all font-mono">
                        {selectedFile}
                      </code>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};
