import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, ExternalLink } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      label: 'Email',
      value: 'ofoeyawpaul1@gmail.com',
      icon: Mail,
      href: 'mailto:ofoeyawpaul1@gmail.com',
      color: 'text-brand-primary',
      bg: 'bg-brand-primary/10'
    },
    {
      label: 'Telephone',
      value: '0207044069',
      icon: Phone,
      href: 'tel:0207044069',
      color: 'text-brand-secondary',
      bg: 'bg-brand-secondary/10'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-brand-bg text-brand-text overflow-hidden relative border-t border-white/5">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#38BDF8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em] mb-4">Direct Connectivity</h2>
              <h3 className="text-4xl md:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter">
                READY TO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">REFINE DATA?</span>
              </h3>
              <p className="text-slate-400 text-lg mb-10 max-w-sm font-medium leading-relaxed">
                I'm active for new annotation pipelines, LiDAR integration, or high-throughput quality auditing.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 p-5 rounded-xl bg-white/5 border border-white/5 hover:border-brand-primary/30 transition-all group"
                  >
                    <div className={`w-12 h-12 ${info.bg} ${info.color} rounded flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <info.icon size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5 font-mono">{info.label}</div>
                      <div className="text-lg font-medium tracking-tight">{info.value}</div>
                    </div>
                    <ExternalLink size={14} className="ml-auto opacity-20 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-1 px-1 rounded-3xl bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-transparent border border-white/10"
          >
            <div className="p-10 rounded-[22px] bg-brand-card/80 backdrop-blur-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-sm bg-brand-primary flex items-center justify-center mb-8 shadow-2xl shadow-brand-primary/20 rotate-3">
                <MessageSquare size={28} className="text-brand-bg" />
              </div>
              <h4 className="text-xl font-bold mb-2 uppercase tracking-tight italic">Status: Online</h4>
              <p className="text-slate-500 text-[10px] mb-8 font-mono tracking-widest font-bold">
                OFAE_PAUL_YAW_ANN_SYS_01
              </p>
              <div className="w-full h-px bg-white/5 mb-8" />
              <div className="grid grid-cols-2 w-full gap-8">
                <div className="text-left font-mono">
                  <div className="text-[9px] text-slate-500 uppercase mb-1 font-bold">Current node</div>
                  <div className="text-xs font-bold text-brand-primary">DATAMAKER</div>
                </div>
                <div className="text-right font-mono">
                  <div className="text-[9px] text-slate-500 uppercase mb-1 font-bold">GEO_LOCK</div>
                  <div className="text-xs font-bold text-brand-secondary">GH_WST_023</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
