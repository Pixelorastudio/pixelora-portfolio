/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/ui/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-dark-bg selection:bg-brand-purple/30 selection:text-white">
      <CustomCursor />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-purple z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

