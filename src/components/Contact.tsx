import { motion } from 'motion/react';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#0a0a0a]/80 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
            <a 
              href="mailto:abishin@example.com" 
              className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center"
            >
              <Mail size={20} />
              Say Hello
            </a>
          </div>

          <div className="flex justify-center gap-8">
            <a href="#" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
              <span className="font-medium">LinkedIn</span>
              <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
            <a href="#" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
              <span className="font-medium">GitHub</span>
              <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-24 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Abishin J. All rights reserved.</p>
      </div>
    </section>
  );
}
