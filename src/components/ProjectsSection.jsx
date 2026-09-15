import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Star, Layers, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

const categories = [
  { id: 'all', label: 'All Projects', icon: '🌌' },
  { id: 'frontend', label: 'Frontend & 3D', icon: '🎨' },
  { id: 'backend', label: 'Backend & Cloud', icon: '⚙️' },
  { id: 'ai', label: 'AI / ML Solutions', icon: '🤖' },
  { id: 'opensource', label: 'Open Source', icon: '🔓' },
];

const projects = [
  {
    id: 1,
    title: 'Aether 3D Studio',
    category: 'frontend',
    description: 'WebGL-powered interactive 3D scene designer and real-time shader editor in the browser with WebAssembly compute.',
    tags: ['Three.js', 'React', 'GLSL', 'WebGPU', 'Tailwind'],
    gradient: 'from-cyan-500/20 via-blue-500/20 to-purple-500/20',
    stars: 342,
    demoUrl: 'https://example.com/aether3d',
    githubUrl: 'https://github.com/Vaigarai14/aether-3d-studio',
    badge: 'Featured'
  },
  {
    id: 2,
    title: 'Nexus AI Orchestrator',
    category: 'ai',
    description: 'Autonomous multi-agent system executing distributed code synthesis, testing suites, and automated deployment pipelines.',
    tags: ['Python', 'FastAPI', 'LangChain', 'React', 'Redis'],
    gradient: 'from-purple-500/20 via-pink-500/20 to-indigo-500/20',
    stars: 215,
    demoUrl: 'https://example.com/nexus-ai',
    githubUrl: 'https://github.com/Vaigarai14/nexus-ai-orchestrator',
    badge: 'AI Core'
  },
  {
    id: 3,
    title: 'HyperScale Gateway',
    category: 'backend',
    description: 'High-throughput microservices reverse proxy with real-time rate limiting, cryptographic auth, and sub-millisecond routing.',
    tags: ['Go', 'Rust', 'Docker', 'Kubernetes', 'gRPC'],
    gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    stars: 184,
    demoUrl: 'https://example.com/hyperscale',
    githubUrl: 'https://github.com/Vaigarai14/hyperscale-gateway',
    badge: 'High Perf'
  },
  {
    id: 4,
    title: 'react-3d-universe',
    category: 'opensource',
    description: 'Lightweight, declarative Three.js canvas component library for creating physics-driven celestial particle systems in React.',
    tags: ['TypeScript', 'Three.js', 'NPM Package', 'Rollup'],
    gradient: 'from-yellow-500/20 via-orange-500/20 to-red-500/20',
    stars: 420,
    demoUrl: 'https://example.com/react-3d-universe',
    githubUrl: 'https://github.com/Vaigarai14/react-3d-universe',
    badge: 'NPM 15k/mo'
  },
  {
    id: 5,
    title: 'Quantum Dashboard UI',
    category: 'frontend',
    description: 'Futuristic glassmorphic analytics control room with real-time telemetry charting, dynamic audio feedback, and dark/light modes.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind', 'Recharts'],
    gradient: 'from-cyan-500/20 via-purple-500/20 to-pink-500/20',
    stars: 156,
    demoUrl: 'https://example.com/quantum-ui',
    githubUrl: 'https://github.com/Vaigarai14/quantum-dashboard',
    badge: 'Design System'
  },
  {
    id: 6,
    title: 'Distributed Vector DB',
    category: 'backend',
    description: 'Embedded memory-mapped vector similarity search engine engineered for local semantic clustering and low-latency retrieval.',
    tags: ['Rust', 'SIMD', 'C++', 'WebAssembly', 'Python'],
    gradient: 'from-pink-500/20 via-purple-500/20 to-cyan-500/20',
    stars: 298,
    demoUrl: 'https://example.com/vector-db',
    githubUrl: 'https://github.com/Vaigarai14/distributed-vector-db',
    badge: 'Research'
  }
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handleLaunchDemo = (project) => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    setSelectedProject(project);
  };

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
            <span>Project Galaxy & Innovations</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-sora liquid-gradient mb-6 tracking-tight">
            Featured Works
          </h2>
          <p className="text-lg md:text-xl text-slate-300/80 max-w-3xl mx-auto leading-relaxed mb-10">
            Explore selected production systems, open-source repositories, and 3D visual experiences built with cutting-edge engineering.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
            {categories.map((cat) => {
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

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <button
                        onClick={() => handleLaunchDemo(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 fill-cyan-400" />
                        <span>Interactive Demo</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Demo Simulation Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-xl glass-card rounded-2xl border border-cyan-400/50 p-6 md:p-8 shadow-[0_0_50px_rgba(0,242,254,0.3)] bg-[#070b19]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-400 animate-ping" />
                    <h3 className="text-xl font-bold font-sora text-white">{selectedProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-slate-400 hover:text-white px-2 py-1 text-sm font-mono border border-white/10 rounded-lg"
                  >
                    ESC / Close
                  </button>
                </div>

                <div className="h-48 rounded-xl bg-black/60 border border-white/10 p-4 mb-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
                  <Sparkles className="w-10 h-10 text-cyan-400 mb-3 animate-spin-slow" />
                  <p className="text-white font-mono font-medium text-sm">
                    Live Container Environment Active
                  </p>
                  <p className="text-slate-400 text-xs font-mono mt-1">
                    Latency: 12ms | WebGL 2.0 Engine: Ready | 60 FPS
                  </p>
                </div>

                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex gap-3 justify-end">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl glass-morphism border border-white/10 text-xs font-semibold text-white hover:border-cyan-400"
                  >
                    View Codebase
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-xs font-semibold text-white shadow-lg shadow-cyan-500/30"
                  >
                    Awesome!
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
