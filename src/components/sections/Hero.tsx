import { motion } from 'motion/react';
import { ArrowRight, Download, MousePointer2 } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen lg:h-screen flex flex-col overflow-hidden bg-gradient-mesh">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] animate-pulse-slow" />
      
      {/* Navbar Spacer - Reduced */}
      <div className="h-16 md:h-20 shrink-0" />

      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 text-center pb-6 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-purple text-[10px] md:text-xs font-medium mb-3"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-purple"></span>
            </span>
            Available for new projects
          </motion.div>
          
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-display font-extrabold leading-[1.1] mb-3 tracking-tight max-w-3xl">
            I Build <span className="text-gradient">High-Converting</span> Websites That Actually Get You Clients
          </h1>
          
          <p className="text-xs md:text-sm text-white/60 max-w-xl mx-auto mb-5 leading-relaxed">
            I design and develop modern, high-performance websites for businesses that want to stand out, build trust, and grow faster.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6 md:mb-8">
            <Button size="md" className="group px-6 py-3 text-sm" onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="md" className="px-6 py-3 text-sm" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 max-w-2xl mx-auto border-t border-white/5 pt-6">
            {[
              { label: 'Projects Completed', value: '20+' },
              { label: 'Happy Clients', value: '10+' },
              { label: 'Years Experience', value: '3+' },
              { label: 'Custom Design', value: '100%' },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-xl md:text-2xl font-bold text-white mb-0.5">{stat.value}</span>
                <span className="text-[8px] md:text-[9px] text-white/40 font-mono uppercase tracking-[0.15em] whitespace-nowrap">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - More compact */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-[8px] font-mono text-white/30 tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-4 bg-gradient-to-b from-brand-purple to-transparent" />
      </motion.div>
    </section>
  );
};
