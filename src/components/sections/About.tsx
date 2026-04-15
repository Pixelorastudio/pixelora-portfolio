import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Briefcase } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '3+', icon: Briefcase },
  { label: 'Projects Completed', value: '20+', icon: CheckCircle2 },
  { label: 'Happy Clients', value: '10+', icon: Users },
  { label: 'Awards Won', value: '5', icon: Award },
];

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['HTML, CSS, JavaScript', 'React / Next.js'],
  },
  {
    title: 'Design',
    skills: ['Figma', 'UI/UX Systems'],
  },
  {
    title: 'Tools',
    skills: ['Webflow', 'Framer', 'Vercel', 'Git / GitHub'],
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 aspect-square rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://i.postimg.cc/KYwpYx29/6e8b0d0dd055d06965595c4ee636ff0d.jpg" 
                alt="About Me" 
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-purple/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-blue/20 rounded-full blur-3xl" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl border border-white/20 z-20 hidden md:block"
            >
              <p className="text-3xl font-bold text-gradient">3+</p>
              <p className="text-xs font-mono text-white/50 uppercase tracking-widest">Years of Craft</p>
            </motion.div>
          </motion.div>

          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-purple font-mono text-sm tracking-widest uppercase mb-4 block"
            >
              About Me
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mb-8"
            >
              I Design & Build <span className="text-gradient">Digital Experiences That Work</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed mb-8 space-y-4"
            >
              <p>I’m not here to just make things look good — I build websites that do something. Whether it’s capturing attention, building trust, or driving conversions, every detail has a purpose.</p>
              <p>I approach every project with a balance of design and logic. Clean visuals, smooth interactions, and solid performance, all working together to create an experience people actually enjoy using.</p>
              <p>My focus is simple: create websites that are fast, intuitive, and built to grow with your business.</p>
              <p>Outside of projects, I’m constantly refining my skills, exploring new design trends, and pushing my work to the next level.</p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-purple border border-white/10">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{stat.value}</p>
                    <p className="text-xs text-white/40">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-purple" />
              My Skills
            </h3>
            <div className="space-y-8">
              {skillGroups.map((group, i) => (
                <div key={group.title}>
                  <h4 className="text-lg font-bold mb-4 text-white/80">{group.title}</h4>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white/60 hover:text-white hover:border-brand-purple/50 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-blue" />
              Experience
            </h3>
            <div className="space-y-8">
              {[
                { role: 'Senior Frontend Dev', company: 'TechFlow', year: '2023 - Present' },
                { role: 'UI/UX Designer', company: 'CreativePulse', year: '2022 - Present' },
                { role: 'Web Developer', company: 'StartUp Hub', year: '2023 - Present' },
              ].map((exp, i) => (
                <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-brand-purple before:rounded-full after:absolute after:left-[3px] after:top-6 after:bottom-[-20px] after:w-[2px] after:bg-white/10 last:after:hidden">
                  <p className="text-xs font-mono text-brand-purple mb-1">{exp.year}</p>
                  <h4 className="text-lg font-bold">{exp.role}</h4>
                  <p className="text-sm text-white/50">{exp.company}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
