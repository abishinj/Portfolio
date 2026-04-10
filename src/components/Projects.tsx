import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Chatroom Application",
    description: "A real-time, encrypted messaging application designed for scalability and secure communication.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "#",
    demo: "#"
  },
  {
    title: "Skin Disease Analyzer",
    description: "An ML-based image detection system deployed via Flask to analyze and identify various skin diseases.",
    tech: ["Python", "TensorFlow", "Flask", "React"],
    github: "#",
    demo: "#"
  },
  {
    title: "Healthcare Chatbot",
    description: "An intelligent chatbot for healthcare that assists users with appointment booking and medical inquiries.",
    tech: ["Python", "NLP", "MySQL", "React"],
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-pink-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-card rounded-3xl p-8 flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💻</span>
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
