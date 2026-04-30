import { ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="section-padding flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            OFOE <span className="text-emerald-500">PAUL</span>
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            © {new Date().getFullYear()} Precision Data Annotation Portfolio.
          </p>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a href="#about" className="hover:text-emerald-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-emerald-500 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-emerald-500 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a>
        </div>

        <motion.button
          whileHover={{ y: -5 }}
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
}
