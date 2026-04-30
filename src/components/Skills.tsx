import { motion } from 'motion/react';
import { 
  Square, 
  Slash, 
  Pentagon, 
  Scissors, 
  Cpu, 
  Globe 
} from 'lucide-react';

const skills = [
  {
    title: 'Bounding Box',
    description: 'Precise 2D rectangular annotations for object detection in security, retail, and transit datasets.',
    icon: Square,
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10'
  },
  {
    title: 'Polyline',
    description: 'Expertise in multi-segment path tracing for road markings, lane detection, and perimeter boundary definition.',
    icon: Slash,
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10'
  },
  {
    title: 'Polygon',
    description: 'Complex shape outlining for aerial imagery, land cover classification, and irregular object detection.',
    icon: Pentagon,
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10'
  },
  {
    title: 'Segmentation',
    description: 'Pixel-level annotation for medical imaging and autonomous vehicle training, ensuring extreme categorical precision.',
    icon: Scissors,
    color: 'text-brand-secondary',
    bg: 'bg-brand-secondary/10'
  },
  {
    title: 'LiDAR PCD',
    description: 'High-level 3D point cloud annotation for depth perception and spatial awareness in autonomous systems.',
    icon: Cpu,
    color: 'text-brand-secondary',
    bg: 'bg-brand-secondary/10'
  },
  {
    title: 'Data Quality',
    description: 'Ensuring 99%+ accuracy through rigorous validation and consistency checks across large-scale datasets.',
    icon: Globe,
    color: 'text-brand-secondary',
    bg: 'bg-brand-secondary/10'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 dark:bg-[#0A0B10] py-20 relative">
      <div className="section-padding">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">Functional Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Annotation Capabilities</h3>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Specialized in translating physical world observations into high-quality training data for groundbreaking machine learning models.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white dark:bg-brand-card border border-slate-200 dark:border-white/5 hover:border-brand-primary/30 transition-all duration-300 group"
              id={`skill-card-${idx}`}
            >
              <div className={`w-12 h-12 ${skill.bg} ${skill.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <skill.icon size={24} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-tight">{skill.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-medium">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
