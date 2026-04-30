import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-brand-bg">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold text-brand-secondary uppercase tracking-[0.3em] mb-4">Professional Record</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Career Arc</h3>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-slate-400 text-[10px] font-mono tracking-tighter uppercase">Ground_Truth_Expert_Log_2022</p>
          </div>
        </div>

        <div className="relative border-l-2 border-slate-100 dark:border-white/5 ml-4 md:ml-0 md:pl-0">
          {/* Main Experience */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 relative pl-8"
          >
            <div className="absolute top-0 left-0 -translate-x-[11px] w-5 h-5 rounded-full bg-brand-primary border-4 border-white dark:border-brand-bg shadow-sm" />
            <div className="bg-slate-50 dark:bg-brand-card border border-slate-200 dark:border-white/5 p-8 rounded-3xl group transition-all duration-300">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-tighter">Senior Data Annotator</h4>
                  <div className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest mb-2 font-mono">
                    <Briefcase size={14} /> DataMaker Corp
                  </div>
                </div>
                <div className="flex flex-col items-end text-[10px] text-slate-400 font-mono gap-1 uppercase font-bold">
                  <span className="flex items-center gap-1"><Calendar size={12} /> 2022 — PRESENT</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> GLOBAL_OFFICE</span>
                </div>
              </div>
              
              <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                <li className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span>Lead annotator for high-precision LiDAR and PCD projects, focusing on autonomous vehicle training data.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span>Mastered advanced segmentation techniques for medical imaging datasets, achieving 99.8% precision rating.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span>Onboarded and mentored 10+ junior annotators on best practices for polygon and polyline tool usage.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span>Collaborated with ML engineers to refine annotation guidelines and improve tool efficiency.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Key Achievements */}
          <div className="grid md:grid-cols-3 gap-6 ml-8 md:ml-0">
            <div className="p-6 rounded-2xl bg-white dark:bg-brand-card border border-slate-200 dark:border-white/5 text-center shadow-sm">
              <div className="text-3xl font-bold text-slate-900 dark:text-brand-primary mb-1 tracking-tighter">500k+</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold font-mono">INSTANCES_ANNOTATED</div>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-brand-card border border-slate-200 dark:border-white/5 text-center shadow-sm">
              <div className="text-3xl font-bold text-slate-900 dark:text-brand-primary mb-1 tracking-tighter">99.5%</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold font-mono">QUALITY_SCORE</div>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-brand-card border border-slate-200 dark:border-white/5 text-center shadow-sm">
              <div className="text-3xl font-bold text-slate-900 dark:text-brand-primary mb-1 tracking-tighter">20+</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold font-mono">BESPOKE_PROJECTS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
