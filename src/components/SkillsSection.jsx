import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Database, Cpu, Globe, Terminal, Box } from 'lucide-react';
import Skills3DOrbit from './canvas/Skills3DOrbit';

const skillCategories = [
  {
    title: 'Frontend & Creative WebGL',
    icon: <Globe className="w-5 h-5 text-cyan-400" />,
    skills: [
      { name: 'React / Next.js', level: '95%' },
      { name: 'Three.js / WebGL / GLSL', level: '90%' },
      { name: 'TypeScript & JavaScript', level: '95%' },
      { name: 'Framer Motion & Anime.js', level: '92%' },
      { name: 'Tailwind CSS & Responsive UI', level: '98%' },
    ]
  },
  {
    title: 'Backend & Cloud Infrastructure',
    icon: <Database className="w-5 h-5 text-purple-400" />,
    skills: [
      { name: 'Node.js / Express / NestJS', level: '92%' },
      { name: 'Python / FastAPI / LangChain', level: '88%' },
      { name: 'PostgreSQL, MongoDB, Redis', level: '90%' },
      { name: 'Docker, Kubernetes, CI/CD', level: '85%' },
      { name: 'AWS Cloud & Serverless', level: '86%' },
    ]
  },
  {
    title: 'Emerging Tech & Architecture',
    icon: <Cpu className="w-5 h-5 text-green-400" />,
    skills: [
      { name: 'Rust & WebAssembly Core', level: '75%' },
      { name: 'Microservices & Event Streams', level: '88%' },
      { name: 'AI LLM Fine-Tuning & RAG', level: '82%' },
      { name: 'Performance Optimization & SIMD', level: '85%' },
      { name: 'Git, Linux Systems, DevSecOps', level: '94%' },
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-morphism border border-purple-400/30 text-xs font-mono text-purple-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Interactive Capability Matrix</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-sora liquid-gradient mb-6 tracking-tight">
            Skills Matrix
          </h2>
          <p className="text-lg md:text-xl text-slate-300/80 max-w-3xl mx-auto leading-relaxed">
            Interactive 3D visualization of my technical stack and domain proficiencies. Drag the globe to interact.
          </p>
        </motion.div>

        {/* 3D Orbit Canvas & Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
          {/* 3D Canvas Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 glass-card p-6 rounded-3xl border border-white/10 flex flex-col items-center justify-center relative shadow-2xl"
          >
            <div className="w-full text-center mb-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                WebGL Interactive Core
              </span>
            </div>
            <Skills3DOrbit />
          </motion.div>

          {/* Skill Breakdown Column */}
          <div className="lg:col-span-7 space-y-6">
            {skillCategories.map((cat, cIdx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: cIdx * 0.15 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold font-sora text-white">{cat.title}</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between"
                    >
                      <span className="text-xs font-medium text-slate-200">{skill.name}</span>
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-400/30">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
