import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Data Science Intern",
    company: "Encored",
    period: "Recent",
    achievements: [
      "Improved decision-making efficiency by ~30%",
      "Enhanced ML model accuracy by ~85%"
    ]
  },
  {
    role: "Software Developer Intern",
    company: "Chennai Metro Rail Limited",
    period: "Previous",
    achievements: [
      "Built AI chatbot (Mithra) with 90%+ accuracy",
      "Integrated Google Maps API improving efficiency by ~20%",
      "Improved UI engagement by ~25%"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-[#0a0a0a]/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-purple-500 rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-lg text-blue-400 font-medium flex items-center gap-2">
                    <Briefcase size={18} />
                    {exp.company}
                  </p>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 font-medium w-fit">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-3">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-purple-500 mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
