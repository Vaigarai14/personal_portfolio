import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Sparkles, Star, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projectsData.projects
    : projectsData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-morphism border border-cyan-400/30 text-xs font-mono text-cyan-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{projectsData.header.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-sora liquid-gradient mb-6 tracking-tight">
            {projectsData.header.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-300/80 max-w-3xl mx-auto leading-relaxed mb-10">
            {projectsData.header.description}
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {projectsData.categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,242,254,0.3)] scale-105'
                      : 'glass-morphism border-white/10 text-white/70 hover:text-white hover:border-white/20'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative"
              >
                {/* Glow frame */}
                <div className="relative h-full rounded-2xl glass-card glass-card-hover p-6 border border-white/10 flex flex-col justify-between overflow-hidden">
                  {/* Card Background Gradient Aura */}
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${project.gradient} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                  <div>
                    {/* Top Meta */}
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-950/80 border border-cyan-400/40 text-cyan-300">
                        {project.badge}
                      </span>
                      <div className="flex items-center gap-1 text-yellow-400 text-xs font-mono">
                        <Star className="w-3.5 h-3.5 fill-yellow-400" />
                        <span>{project.stars}</span>
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold font-sora text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300/80 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Clean Action Link */}
                    {/* <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Repository</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        title="Open GitHub"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
