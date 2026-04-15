import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Palette, Smartphone, ArrowRight, CheckCircle2, X } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'I build fast, scalable, and modern web applications that don’t just work, they perform. From clean frontends to solid backend logic, everything is optimized for speed, usability, and growth.',
    icon: Code2,
    color: 'text-brand-purple',
    bg: 'bg-brand-purple/10',
    details: 'I build fast, scalable, and modern web applications that don’t just work, they perform. From clean frontends to solid backend logic, everything is optimized for speed, usability, and growth. I focus on delivering high-performance digital foundations that scale with your business.',
    promise: 'I promise a website that is not only visually stunning but also technically flawless, loading in under 2 seconds and scoring 90+ on Lighthouse.',
    features: ['React & Next.js Expert', 'Performance Optimization', 'SEO Best Practices', 'Secure & Scalable Code']
  },
  {
    title: 'UI/UX Design',
    description: 'Design isn’t just about looks, it’s about how it feels. I create intuitive, user-focused interfaces that guide users naturally and turn visitors into loyal users.',
    icon: Palette,
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
    details: 'Design isn’t just about looks, it’s about how it feels. I create intuitive, user-focused interfaces that guide users naturally and turn visitors into loyal users. My approach combines user psychology with modern aesthetics to build trust and drive engagement.',
    promise: 'I promise a design that reflects your brand\'s premium quality and provides a frictionless experience that turns visitors into loyal customers.',
    features: ['User Research & Strategy', 'High-Fidelity Prototyping', 'Design Systems', 'Conversion Rate Optimization']
  },
  {
    title: 'Mobile Solutions',
    description: 'Developing responsive and adaptive mobile-first websites that look great on any device or screen size.',
    icon: Smartphone,
    color: 'text-brand-pink',
    bg: 'bg-brand-pink/10',
    details: 'The world is mobile-first. I ensure your brand looks and performs perfectly on every screen size. From responsive layouts to full-featured Progressive Web Apps (PWAs), I bridge the gap between web and mobile.',
    promise: 'I promise a truly responsive experience where your site feels like a native app on mobile, ensuring you never lose a lead due to poor device compatibility.',
    features: ['Mobile-First Approach', 'PWA Development', 'Touch-Optimized UI', 'Cross-Browser Testing']
  },
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-purple font-mono text-sm tracking-widest uppercase mb-4 block"
          >
            My Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Solutions I <span className="text-gradient">Provide</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            I don’t just build websites, I craft digital experiences that convert, engage, and scale. Every project I take on is designed to look sharp, feel smooth, and perform flawlessly.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl group"
            >
              <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-white/30">0{i + 1}</span>
                <motion.div 
                  whileHover={{ x: 5 }}
                  onClick={() => setSelectedService(service)}
                  className="text-brand-purple text-sm font-bold flex items-center gap-2 cursor-pointer"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-dark-bg/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-dark-card border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
              
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-colors z-[110]"
              >
                <X className="w-6 h-6 text-white/50" />
              </button>

              <div className="relative z-10 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className={`w-20 h-20 ${selectedService.bg} rounded-2xl flex items-center justify-center ${selectedService.color} mb-8`}>
                  <selectedService.icon className="w-10 h-10" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-6">{selectedService.title}</h3>
                
                <div className="space-y-6 mb-10">
                  <p className="text-lg text-white/80 leading-relaxed">
                    {selectedService.details}
                  </p>
                  
                  <div className="p-6 bg-brand-purple/5 rounded-2xl border border-brand-purple/20">
                    <h4 className="text-brand-purple font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      My Trusted Promise
                    </h4>
                    <p className="text-white/70 italic leading-relaxed">
                      "{selectedService.promise}"
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <button 
                    onClick={() => {
                      setSelectedService(null);
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-4 bg-brand-purple hover:bg-brand-purple/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-purple/20"
                  >
                    Discuss Your Project
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
