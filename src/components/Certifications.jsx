import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X } from 'lucide-react';

const certs = [
  { name: '3rd PlaceLKS Web Technology Demak Regency', platform: 'Kemendikdasmen', year: '2025', color: 'bg-accent2', file: '/certs/lks2.pdf' },
  { name: '1st PlaceLKS Web Technology Demak Regency', platform: 'Kemendikdasmen', year: '2024', color: 'bg-accent1', file: '/certs/lks1.pdf' },
  { name: 'Digiup Bootcamp Laravel Web Programmer', platform: 'Digiup', year: '2025', color: 'bg-accent3', file: '/certs/digiup.pdf' },
  { name: 'Belajar Dasar Pemrograman Web', platform: 'Dicoding', year: '2025', color: 'bg-accent4', file: '/certs/dicoding1.pdf' },
];

export const Certifications = () => { 
  const [selectedFile, setSelectedFile] = useState(null);

  const isPdf = selectedFile?.toLowerCase().endsWith('.pdf');

  return (
    <section id="certification" className="py-20 px-4 md:px-8 bg-border text-white relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-bg text-border px-4 py-1 brutal-border border-white inline-block -rotate-1">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="brutal-border border-white bg-bg text-border p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all cursor-pointer"
              onClick={() => setSelectedFile(cert.file)}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 brutal-border rounded-lg ${cert.color}`}>
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{cert.name}</h3>
                  <p className="font-medium text-gray-600">{cert.platform} • {cert.year}</p>
                </div>
              </div>
              <button 
                className="brutal-btn bg-white py-2 text-sm whitespace-nowrap self-stretch sm:self-auto"
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
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 hidden flex-col items-center justify-center bg-gray-100 text-border p-6 text-center">
                      <Award size={48} className="mb-4 text-gray-400" />
                      <p className="font-bold text-xl mb-2">File Not Found</p>
                      <p className="text-gray-500">Please add your certificate file at:</p>
                      <code className="bg-gray-200 px-2 py-1 rounded mt-2 text-sm break-all font-mono">{selectedFile}</code>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
