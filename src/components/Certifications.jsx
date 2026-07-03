import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const certs = [
  { name: '3rd Place LKS Web Technology Demak Regency', platform: 'Kemendikdasmen', year: '2025', color: 'bg-accent2', file: '/certs/lks2.pdf' },
  { name: '1st Place LKS Web Technology Demak Regency', platform: 'Kemendikdasmen', year: '2024', color: 'bg-accent1', file: '/certs/lks1.pdf' },
  { name: 'Digiup Bootcamp Laravel Web Programmer', platform: 'Digiup', year: '2025', color: 'bg-accent3', file: '/certs/digiup.pdf' },
  { name: 'Belajar Dasar Pemrograman Web', platform: 'Dicoding', year: '2025', color: 'bg-accent4', file: '/certs/dicoding1.pdf' },
];

// Only show first 2 certifications on the home page
const previewCerts = certs.slice(0, 2);

export const Certifications = () => {
  return (
    <section id="certification" className="py-20 px-4 md:px-8 bg-border text-white relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-bg text-border px-4 py-1 brutal-border border-white inline-block -rotate-1">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {previewCerts.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="brutal-border border-white bg-bg text-border p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 brutal-border rounded-lg ${cert.color}`}>
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{cert.name}</h3>
                  <p className="font-medium text-gray-600">{cert.platform} &bull; {cert.year}</p>
                </div>
              </div>
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
            View All Certifications <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
