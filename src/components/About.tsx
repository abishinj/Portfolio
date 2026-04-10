import { motion } from 'motion/react';
import { Code2, Brain, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg leading-relaxed space-y-6"
          >
            <p>
              I am a final-year B.Tech Computer Science student at SRM University, deeply passionate about full-stack development, AI/ML, and software engineering.
            </p>
            <p>
              My journey involves building efficient applications and intelligent systems. I thrive on solving complex problems, collaborating with teams, and continuously learning new technologies to build scalable digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6"
          >
            {[
              { icon: <Code2 className="text-blue-400" />, title: "Full Stack Development", desc: "Building responsive, scalable web applications." },
              { icon: <Brain className="text-purple-400" />, title: "AI & Machine Learning", desc: "Developing intelligent models and chatbots." },
              { icon: <Rocket className="text-pink-400" />, title: "Software Engineering", desc: "Applying best practices for efficient problem-solving." }
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl flex gap-4 items-start">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
