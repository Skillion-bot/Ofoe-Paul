import { motion } from 'motion/react';
import { ArrowRight, Box, Map as MapIcon, Database, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-brand-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-brand-secondary/5 blur-[100px] rounded-full" />

      <div className="section-padding grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-primary"></span>
            </span>
            Ground Truth Verification Active
          </div>
          <h1 id="hero-title" className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 dark:text-white leading-[0.85] mb-6">
            PRECISION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              DATA ANNOTATOR
            </span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg mb-8 leading-relaxed font-medium">
            Expert in ground-truth generation for autonomous systems. Specializing in computer vision labeling and 3D point cloud refinement for DataMaker.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 p-4 rounded-xl">
              <div className="text-brand-primary font-mono text-[10px] mb-2 uppercase font-bold tracking-wider">2D Annotation</div>
              <div className="flex flex-wrap gap-2 text-[10px] font-bold text-slate-400">
                <span className="px-2 py-1 bg-brand-primary/5 border border-brand-primary/20 rounded">BOUNDING BOX</span>
                <span className="px-2 py-1 bg-brand-primary/5 border border-brand-primary/20 rounded">POLYLINE</span>
                <span className="px-2 py-1 bg-brand-primary/5 border border-brand-primary/20 rounded">POLYGON</span>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 p-4 rounded-xl">
              <div className="text-brand-secondary font-mono text-[10px] mb-2 uppercase font-bold tracking-wider">3D & Advanced</div>
              <div className="flex flex-wrap gap-2 text-[10px] font-bold text-slate-400">
                <span className="px-2 py-1 bg-brand-secondary/5 border border-brand-secondary/20 rounded">LIDAR (PCD)</span>
                <span className="px-2 py-1 bg-brand-secondary/5 border border-brand-secondary/20 rounded">SEGMENTATION</span>
                <span className="px-2 py-1 bg-brand-secondary/5 border border-brand-secondary/20 rounded">MASKS</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-brand-text text-brand-bg rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand-primary transition-colors"
            >
              Hire Ofoe Paul
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute inset-0 bg-brand-secondary/10 blur-[100px] rounded-full -z-10"></div>
          <div className="h-full w-full border border-slate-200 dark:border-white/10 rounded-3xl bg-slate-50 dark:bg-brand-card p-6 flex flex-col gap-4 relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
              </div>
              <span className="text-[10px] font-mono text-slate-500">POINT_CLOUD_VIEWER_04.pcd</span>
            </div>
            
            <div className="flex-1 min-h-[300px] rounded-xl bg-slate-900 relative border border-white/5 flex items-center justify-center overflow-hidden">
               {/* Decorative grid */}
               <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#38BDF8 0.5px, transparent 0.5px), linear-gradient(90deg, #38BDF8 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
               
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                     <div className="absolute inset-0 border border-brand-primary/30 rotate-45 animate-[spin_20s_linear_infinite]"></div>
                     <div className="absolute inset-4 border border-brand-secondary/30 -rotate-12 animate-[spin_15s_linear_infinite_reverse]"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_15px_white]"></div>
                     
                     {/* Floating point clouds */}
                     <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-brand-primary rounded-full opacity-60 animate-pulse"></div>
                     <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-brand-primary rounded-full opacity-40 animate-pulse delay-75"></div>
                     <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-brand-primary rounded-full opacity-80 animate-pulse delay-150"></div>
                  </div>
               </div>
               
               <div className="absolute bottom-4 left-4 flex gap-2">
                  <div className="w-12 h-6 bg-brand-primary/20 border border-brand-primary/40 rounded flex items-center justify-center text-[8px] text-brand-primary font-mono italic font-bold">GRID</div>
                  <div className="w-12 h-6 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[8px] text-slate-400 font-mono font-bold">SCAN</div>
               </div>
            </div>
            
            <div className="flex justify-between items-end border-t border-slate-200 dark:border-white/5 pt-4">
              <div className="space-y-1">
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Instance Info</div>
                <div className="text-xs text-slate-700 dark:text-slate-300 font-mono">ID: 9942-X-TRK</div>
              </div>
              <div className="text-right">
                 <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Confidence</div>
                 <div className="text-xs text-green-500 font-mono font-bold tracking-tighter">98.4%</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
