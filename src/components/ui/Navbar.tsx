import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Github } from 'lucide-react';
import { DiscordIcon, BehanceIcon, InstagramIcon, WhatsAppIcon } from './BrandIcons';
import { Button } from './Button';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/Pixelorastudio' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/pixelora_.studio/' },
  { icon: BehanceIcon, href: 'https://www.behance.net/2dillustratorLena' },
  { icon: DiscordIcon, href: 'https://discord.com/users/holylena' },
  { icon: WhatsAppIcon, href: 'https://wa.me/923205050974?text=Hi%20I%20saw%20your%20portfolio' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const navBg = useTransform(
    scrollY,
    [0, 50],
    ['rgba(3, 0, 20, 0)', 'rgba(3, 0, 20, 0.8)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      style={{ backgroundColor: navBg }}
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm border-b',
        scrolled ? 'border-white/10 py-3' : 'border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="text-2xl font-display font-bold tracking-tighter"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          PIXELORA<span className="text-brand-purple">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
          <Button size="sm" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Hire Me
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div
        className={cn(
          'fixed inset-0 top-[72px] bg-dark-bg/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center gap-8',
          isOpen ? 'flex' : 'hidden'
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="text-2xl font-display font-semibold text-white/80 hover:text-brand-purple transition-colors"
          >
            {link.name}
          </a>
        ))}
        <div className="flex gap-6 mt-4">
          {socialLinks.map((social, i) => (
            <a key={i} href={social.href} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};
