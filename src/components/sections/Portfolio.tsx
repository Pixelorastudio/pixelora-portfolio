import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, X, Figma } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/Button';

const projects = [
  {
    id: 1,
    title: 'Otterchains Agency Website',
    category: 'UI/UX',
    image: 'https://i.postimg.cc/7hRZsKJn/Group-78.png',
    description: 'This project involved designing a futuristic, high-impact web experience for a blockchain and AI-driven development agency. The goal was to reflect innovation and technical excellence through sleek UI, immersive visuals, and modern layout systems.',
    fullDescription: 'This project involved designing a futuristic, high-impact web experience for a blockchain and AI-driven development agency. The goal was to reflect innovation and technical excellence through sleek UI, immersive visuals, and modern layout systems. I crafted a responsive, performance-optimized landing page and portfolio with smooth interactions and a strong visual hierarchy. The design emphasizes clarity, scalability, and a cutting-edge digital presence aligned with emerging technologies.',
    tech: ['Figma', 'UI/UX', 'Modern Layouts'],
    figma: 'https://www.figma.com/design/3sVjixIau6uCbysvjU1Uoy/Untitled?node-id=0-1&t=VSrYe47ATL9s9iNX-1',
  },
  {
    id: 2,
    title: 'Alpine Recruitment Platform',
    category: 'UI/UX',
    image: 'https://i.postimg.cc/h4CFFJZv/Group-152.png',
    description: 'This project involved building a multi-page recruitment platform designed to simplify and optimize the hiring process. A structured 10-step onboarding flow was implemented to guide users smoothly through registration while maintaining clarity and engagement.',
    fullDescription: 'This project involved building a multi-page recruitment platform designed to simplify and optimize the hiring process. A structured 10-step onboarding flow was implemented to guide users smoothly through registration while maintaining clarity and engagement. The website emphasizes clean design, intuitive navigation, and responsive performance across devices. The result is a practical yet polished recruitment system built for scalability and ease of use.',
    tech: ['Figma', 'UI/UX', 'Onboarding Flow'],
    figma: 'https://www.figma.com/design/N58DF0fTuIaNbKaLlqqPc0/AliNQuality?node-id=0-1&t=bRgUv8Wr2CkRCtL8-1',
  },
  {
    id: 3,
    title: 'Gen-no-ie Real Estate Website',
    category: 'UI/UX',
    image: 'https://i.postimg.cc/wTV32ffV/Group-312.png',
    description: 'A minimal yet luxurious digital presence crafted for a modern real estate brand. This project focused on delivering a clean, sophisticated interface with smooth navigation and carefully structured content to showcase properties with clarity.',
    fullDescription: 'A minimal yet luxurious digital presence crafted for a modern real estate brand. This project focused on delivering a clean, sophisticated interface with smooth navigation and carefully structured content to showcase properties with clarity. The multi-page design is fully responsive and optimized for performance, creating an elegant and trustworthy user experience aligned with high-end real estate standards.',
    tech: ['Figma', 'UI/UX', 'Real Estate'],
    figma: 'https://www.figma.com/design/3shJYdDbryvsSSFhfvSHts/Gen-no-ie?node-id=0-1&t=nrI0edvFWXlPW5He-1',
  },
  {
    id: 4,
    title: 'Game Character Launch Page',
    category: 'Web App',
    image: 'https://i.postimg.cc/XYYKky8f/3.png',
    description: 'A visually engaging launch page designed to introduce a new anime-style character. This project blends vibrant visuals with a clean, modern layout to create an immersive yet accessible experience.',
    fullDescription: 'A visually engaging launch page designed to introduce a new anime-style character. This project blends vibrant visuals with a clean, modern layout to create an immersive yet accessible experience. Built using pure HTML and CSS, the page emphasizes responsive design, smooth structure, and aesthetic balance while maintaining fast performance.',
    tech: ['HTML', 'CSS', 'Responsive'],
    link: 'https://pixelorastudio.github.io/Game-Character-Hero-Page/',
  },
  {
    id: 5,
    title: 'Talkpro.ai Automation Platform',
    category: 'UI/UX',
    image: 'https://i.postimg.cc/HL2gDRMB/Group-72.png',
    description: 'A modern, future-forward website built for an AI automation agency. This project emphasizes clean design, intuitive navigation, and a strong visual hierarchy to present complex services in a simple and engaging way.',
    fullDescription: 'A modern, future-forward website built for an AI automation agency. This project emphasizes clean design, intuitive navigation, and a strong visual hierarchy to present complex services in a simple and engaging way. The multi-page structure is fully responsive and optimized for performance, delivering a smooth user experience aligned with cutting-edge technology.',
    tech: ['Figma', 'UI/UX', 'AI Automation'],
    figma: 'https://www.figma.com/design/OmiNWgpQDYCMNfqcAbO5cT/Untitled?node-id=0-1&t=gwVSY6EuWldmQyh2-1',
  },
  {
    id: 6,
    title: 'Plumbing Service Website',
    category: 'Web App',
    image: 'https://i.postimg.cc/vHHmzKm2/image.png',
    description: 'A clean and conversion-driven website designed for a plumbing service business. This project focuses on simplicity, clear messaging, and strong call-to-actions to maximize lead generation.',
    fullDescription: 'A clean and conversion-driven website designed for a plumbing service business. This project focuses on simplicity, clear messaging, and strong call-to-actions to maximize lead generation. The layout is structured to guide users quickly toward contacting or booking services, with a responsive design that ensures seamless performance across all devices.',
    tech: ['HTML', 'CSS', 'Vercel'],
    link: 'https://plumbingwebsitedemo-zeta.vercel.app/',
  },
];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-purple font-mono text-sm tracking-widest uppercase mb-4 block"
            >
              Selected Works
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative bg-dark-card/40 border border-white/10 rounded-3xl overflow-hidden cursor-pointer hover:border-brand-purple/50 transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-2 bg-brand-purple rounded-full text-white text-sm font-bold shadow-lg">
                    View Details
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-brand-purple px-2 py-1 bg-brand-purple/10 rounded">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.tech.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] font-mono text-white/40">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-white/60 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-dark-bg/90 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-dark-bg border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 p-2 bg-dark-bg/50 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-brand-purple transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-brand-purple/10 border border-brand-purple/20 text-brand-purple rounded-full text-xs font-mono uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <div className="flex gap-2">
                      {selectedProject.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-white/40 rounded-full text-xs font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">{selectedProject.title}</h3>
                  <p className="text-lg text-white/60 leading-relaxed mb-10">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {selectedProject.link && (
                      <Button 
                        onClick={() => window.open(selectedProject.link, '_blank')}
                        className="group"
                      >
                        Live Preview
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    )}
                    {selectedProject.github && (
                      <Button 
                        variant="outline"
                        onClick={() => window.open(selectedProject.github, '_blank')}
                        className="group"
                      >
                        <Github className="mr-2 w-4 h-4" />
                        GitHub
                      </Button>
                    )}
                    {selectedProject.figma && (
                      <Button 
                        variant="outline"
                        onClick={() => window.open(selectedProject.figma, '_blank')}
                        className="group"
                      >
                        <Figma className="mr-2 w-4 h-4" />
                        Figma
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};


const ArrowRight = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);
