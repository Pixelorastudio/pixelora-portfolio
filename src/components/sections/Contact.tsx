import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github } from 'lucide-react';
import { DiscordIcon, BehanceIcon, InstagramIcon, WhatsAppIcon } from '../ui/BrandIcons';
import { Button } from '../ui/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/src/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const whatsappNumber = '+923205050974';
    const message = `Name: ${data.name}%0AEmail: ${data.email}%0ASubject: ${data.subject}%0AMessage: ${data.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    reset();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-purple font-mono text-sm tracking-widest uppercase mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Let's Build Something <span className="text-gradient">Great</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hello? Feel free to reach out!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 font-mono uppercase tracking-wider">Email</p>
                    <p className="text-lg font-medium">contact.pixelora@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 font-mono uppercase tracking-wider">Phone</p>
                    <p className="text-lg font-medium">+92 320 5050974</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-pink/10 rounded-2xl flex items-center justify-center text-brand-pink shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 font-mono uppercase tracking-wider">Location</p>
                    <p className="text-lg font-medium">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-sm text-white/40 font-mono uppercase tracking-wider mb-6">Follow Me</p>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: 'https://github.com/Pixelorastudio' },
                    { icon: InstagramIcon, href: 'https://www.instagram.com/pixelora_.studio/' },
                    { icon: BehanceIcon, href: 'https://www.behance.net/2dillustratorLena' },
                    { icon: DiscordIcon, href: 'https://discord.com/users/holylena' },
                    { icon: WhatsAppIcon, href: 'https://wa.me/923205050974?text=Hi%20I%20saw%20your%20portfolio' },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/60 hover:text-white hover:bg-brand-purple/20 transition-all border border-white/10"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 rounded-3xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-1">Name</label>
                  <input
                    {...register('name')}
                    className={cn(
                      "w-full bg-white/5 border rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 transition-all",
                      errors.name ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:ring-brand-purple/20 focus:border-brand-purple/50"
                    )}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1 ml-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-1">Email</label>
                  <input
                    {...register('email')}
                    className={cn(
                      "w-full bg-white/5 border rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 transition-all",
                      errors.email ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:ring-brand-purple/20 focus:border-brand-purple/50"
                    )}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1 ml-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Subject</label>
                <input
                  {...register('subject')}
                  className={cn(
                    "w-full bg-white/5 border rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 transition-all",
                    errors.subject ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:ring-brand-purple/20 focus:border-brand-purple/50"
                  )}
                  placeholder="Project Inquiry"
                />
                {errors.subject && <p className="text-xs text-red-400 mt-1 ml-1">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Message</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className={cn(
                    "w-full bg-white/5 border rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 transition-all resize-none",
                    errors.message ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:ring-brand-purple/20 focus:border-brand-purple/50"
                  )}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-xs text-red-400 mt-1 ml-1">{errors.message.message}</p>}
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message <Send className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
