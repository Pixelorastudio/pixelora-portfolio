import { motion } from 'motion/react';
import { Github, ArrowUp } from 'lucide-react';
import { DiscordIcon, BehanceIcon, InstagramIcon, WhatsAppIcon } from './BrandIcons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold tracking-tighter mb-4 block">
              PIXELORA<span className="text-brand-purple">.</span>
            </a>
            <p className="text-white/40 max-w-xs">
              Pixelora specializes in building high-converting websites for forward-thinking brands.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-white/60">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

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
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Pixelora. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-mono text-white/30 hover:text-white transition-colors"
          >
            Back to top
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 group-hover:-translate-y-1 transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
