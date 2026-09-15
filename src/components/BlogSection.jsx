import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ExternalLink, Sparkles, Star, Github } from 'lucide-react';

const articles = [
  {
    title: 'The Future of Web Development: WebAssembly and Beyond',
    description: 'Exploring how WebAssembly is revolutionizing web performance, threading, and opening high-compute possibilities for modern browsers.',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
    tags: ['WebAssembly', 'Performance', 'Future Tech'],
    url: '#'
  },
  {
    title: 'Building Immersive 3D Experiences with Three.js & Shaders',
    description: 'A comprehensive guide to crafting high-performance, responsive 3D web scenes using custom GLSL shaders and additive blending particles.',
    date: 'Jan 10, 2025',
    readTime: '12 min read',
    tags: ['Three.js', '3D Graphics', 'WebGL'],
    url: '#'
  },
  {
    title: 'AI-Powered Full-Stack Engineering: Tools Shaping Tomorrow',
    description: 'How autonomous coding agents, LLM pipelines, and neural synthesis are redefining software architecture and rapid prototyping.',
    date: 'Jan 05, 2025',
    readTime: '6 min read',
    tags: ['AI Agents', 'Development', 'Architecture'],
    url: '#'
  }
];

const openSourceProjects = [
  {
    name: 'react-3d-universe',
    stars: 234,
    description: 'A performant 3D particle universe component built for React & Three.js applications with dynamic lighting.',
    tag: 'TypeScript'
  },
  {
    name: 'webgl-particle-system',
    stars: 156,
    description: 'High-performance WebGL 2.0 particle engine with customizable physics vectors and attraction forces.',
    tag: 'JavaScript'
  },
  {
    name: 'ai-code-copilot-engine',
    stars: 89,
    description: 'Lightweight context retrieval and indexing pipeline for AI-assisted code generation in IDEs.',
    tag: 'TypeScript'
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-morphism border border-cyan-400/30 text-xs font-mono text-cyan-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Knowledge Sharing & Community</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-sora liquid-gradient mb-6 tracking-tight">
            Articles & Open Source
          </h2>
          <p className="text-lg md:text-xl text-slate-300/80 max-w-3xl mx-auto leading-relaxed">
            Sharing technical insights through in-depth publications and contributing freely to the developer ecosystem.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Articles Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-sora text-white flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-cyan-400" />
              <span>Latest Articles</span>
            </h3>

            {articles.map((art, idx) => (
              <motion.div
                key={art.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all"
              >
                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{art.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h4 className="text-lg font-bold font-sora text-white mb-2 hover:text-cyan-300 transition-colors">
                  {art.title}
                </h4>

                <p className="text-slate-300/75 text-sm leading-relaxed mb-4">
                  {art.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {art.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-cyan-200">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={art.url}
                    className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Read More</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Open Source Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-sora text-white flex items-center gap-2 mb-4">
              <Github className="w-6 h-6 text-purple-400" />
              <span>Open Source Contributions</span>
            </h3>

            {openSourceProjects.map((repo, idx) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 hover:border-purple-400/40 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-bold font-mono text-white group-hover:text-purple-300">
                    {repo.name}
                  </h4>
                  <div className="flex items-center gap-1 text-yellow-400 text-xs font-mono bg-yellow-500/10 px-2 py-0.5 rounded-full border border-yellow-400/30">
                    <Star className="w-3.5 h-3.5 fill-yellow-400" />
                    <span>{repo.stars}</span>
                  </div>
                </div>

                <p className="text-slate-300/75 text-sm leading-relaxed mb-4">
                  {repo.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-purple-300">
                    {repo.tag}
                  </span>

                  <a
                    href="https://github.com/Vaigarai14"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-300 hover:text-white transition-colors"
                  >
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
