import { motion } from 'motion/react';
import { Award } from 'lucide-react';

const certs = [
  "Cisco Networking",
  "Fortinet Cybersecurity",
  "NPTEL Java",
  "AWS ML"
];

export default function Certifications() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-purple-500 rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="text-blue-400" size={28} />
              </div>
              <h3 className="font-semibold text-gray-200">{cert}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
