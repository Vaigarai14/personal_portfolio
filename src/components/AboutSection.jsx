import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, MapPin, Github, GitCommitHorizontal, BookOpen, Zap, Award, Sparkles } from 'lucide-react';

// test
const experiences = [
  {
    year: '2024 - Present',
    role: 'Senior Full-Stack Architect',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA (Remote)',
    description: 'Leading development of next-generation enterprise web applications, real-time analytics dashboards, and immersive 3D user interfaces using cutting-edge WebGL and distributed microservices.',
    tags: ['React', 'Node.js', 'TypeScript', 'Three.js', 'AWS', 'Docker'],
    accent: 'cyan'
  },
  {
    year: '2022 - 2024',
    role: 'Creative Technologist',
    company: 'Digital Agency Apex',
    location: 'New York, NY',
    description: 'Bridged the gap between high-end digital design and cutting-edge frontend architecture. Crafted award-winning interactive marketing campaigns and 3D product visualizers.',
    tags: ['Three.js', 'WebGL', 'Framer Motion', 'React', 'GLSL Shaders', 'Python'],
    accent: 'purple'
  },
  {
    year: '2020 - 2022',
    role: 'Frontend & UI Engineer',
    company: 'StartupXYZ',
    location: 'Austin, TX',
    description: 'Architected responsive web applications, component design systems, and mobile-first portals with rich micro-animations and lightning-fast sub-second load times.',
    tags: ['React', 'JavaScript', 'CSS3/Tailwind', 'Next.js', 'Firebase', 'GraphQL'],
    accent: 'pink'
  }
];

const learningItems = [
  { name: 'WebAssembly & Rust Core', progress: 75, icon: '🔧', color: 'from-cyan-400 to-blue-500' },
  { name: 'Rust High-Performance Systems', progress: 60, icon: '🦀', color: 'from-orange-400 to-red-500' },
  { name: 'Generative AI & LLM Pipelines', progress: 50, icon: '🤖', color: 'from-purple-400 to-pink-500' },
  { name: 'WebGPU & Custom Compute Shaders', progress: 40, icon: '⚡', color: 'from-green-400 to-emerald-600' }
];

// Generate 52 weeks of contribution data for the heatmap
const generateContributions = () => {
  const weeks = [];
  for (let w = 0; w < 48; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const rand = Math.random();
      let level = 0;
      if (rand > 0.8) level = 4;
      else if (rand > 0.6) level = 3;
      else if (rand > 0.4) level = 2;
      else if (rand > 0.2) level = 1;
      days.push(level);
    }
    weeks.push(days);
  }
  return weeks;
};

const contributionWeeks = generateContributions();

const getLevelColor = (level) => {
  switch (level) {
    case 4: return 'bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.7)]';
    case 3: return 'bg-green-500/80';
    case 2: return 'bg-green-600/50';
    case 1: return 'bg-green-700/30';
    default: return 'bg-white/5';
  }
};

export default function AboutSection() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-morphism border border-cyan-400/30 text-xs font-mono text-cyan-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Curiosity Driven & Future Focused</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-sora liquid-gradient mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-slate-300/80 max-w-3xl mx-auto leading-relaxed">
            I am a creative technologist and full-stack developer who bridges the boundary between design precision and scalable engineering, crafting digital experiences that push the boundaries of what is possible on the web.
          </p>
        </motion.div>

        {/* Vertical Career Journey Timeline */}
        <div className="relative mb-24">
          {/* Glowing central vertical timeline bar */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full shadow-[0_0_15px_rgba(0,242,254,0.4)]" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 relative`}
                >
                  {/* Timeline Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass-card glass-card-hover p-6 md:p-8 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all text-left">
                      {/* Year pill */}
                      <div className={`flex items-center gap-2 mb-3 ${isEven ? 'md:justify-start' : 'md:justify-start'}`}>
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-bold font-mono text-cyan-300 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-400/30">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold font-sora text-white mb-1.5">
                        {item.role}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300/80 mb-4">
                        <div className="flex items-center gap-1.5 text-purple-300">
                          <Briefcase className="w-3.5 h-3.5" />
                          <span>{item.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-green-300">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <p className="text-slate-300/75 text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white/5 border border-white/10 text-cyan-200 hover:border-cyan-400/40 hover:bg-cyan-950/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Central glowing node marker */}
                  <div className="hidden md:flex relative z-10 w-10 h-10 rounded-full bg-[#05070f] border-2 border-cyan-400 items-center justify-center shadow-[0_0_20px_rgba(0,242,254,0.6)]">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 animate-pulse" />
                  </div>

                  {/* Empty spacer for alignment */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dual Live Cards: Currently Building & Currently Learning */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Currently Building */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 hover:border-green-400/40 transition-all shadow-xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5 text-xl font-bold font-sora text-white">
                <Github className="w-6 h-6 text-green-400" />
                <span>Currently Building</span>
              </div>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-green-950/60 border border-green-400/40 text-green-400 shadow-[0_0_10px_rgba(74,222,128,0.2)]">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-ping inline-block" />
                Active Dev
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                <div className="text-3xl font-extrabold font-sora text-green-400">1,247</div>
                <div className="text-xs text-slate-400 font-mono mt-1">Total Commits (2025-2026)</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                <div className="text-3xl font-extrabold font-sora text-yellow-400">89+</div>
                <div className="text-xs text-slate-400 font-mono mt-1">GitHub Stars Earned</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 mb-6 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <GitCommitHorizontal className="w-4 h-4 text-cyan-400" />
                <span>Last Commit:</span>
              </div>
              <span className="text-green-400 font-semibold">2 hours ago on main</span>
            </div>

            <div className="space-y-2.5">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Recent Activity Logs:</div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs font-mono text-slate-300 flex items-center gap-2">
                <span>🚀</span>
                <span>Implemented WebGL 3D particle universe & physics engine</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs font-mono text-slate-300 flex items-center gap-2">
                <span>✨</span>
                <span>Added kinetic typography & anime.js stagger choreography</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs font-mono text-slate-300 flex items-center gap-2">
                <span>⚡</span>
                <span>Optimized 60 FPS frame time with responsive WebGL resizing</span>
              </div>
            </div>
          </motion.div>

          {/* Currently Learning */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 hover:border-purple-400/40 transition-all shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5 text-xl font-bold font-sora text-white">
                  <BookOpen className="w-6 h-6 text-purple-400" />
                  <span>Currently Learning</span>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950/60 border border-purple-400/40 text-purple-300">
                  Self Evolution
                </span>
              </div>

              <div className="space-y-4 mb-6">
                {learningItems.map((item) => (
                  <div key={item.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2 text-slate-200">
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                      <span className="text-cyan-300 font-bold">{item.progress}%</span>
                    </div>
                    {/* Meter bar */}
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Up Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-cyan-900/30 border border-purple-400/30">
              <div className="flex items-center gap-2 text-yellow-300 text-sm font-bold mb-1 font-sora">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Next Milestone:</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                Architecting decentralized WebGPU computational shaders and autonomous AI agent workflows for immersive web applications.
              </p>
            </div>
          </motion.div>
        </div>

        {/* GitHub Contribution Heatmap Simulation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all shadow-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div className="flex items-center gap-2.5 text-lg font-bold font-sora text-white">
              <Github className="w-5 h-5 text-green-400" />
              <span>GitHub Contribution Grid</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span>Less</span>
              <div className="flex gap-1">
                <span className="w-3 h-3 rounded-sm bg-white/5" />
                <span className="w-3 h-3 rounded-sm bg-green-700/30" />
                <span className="w-3 h-3 rounded-sm bg-green-600/50" />
                <span className="w-3 h-3 rounded-sm bg-green-500/80" />
                <span className="w-3 h-3 rounded-sm bg-green-400" />
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Grid overflow wrapper */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[700px]">
              {contributionWeeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((dayLevel, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-3.5 h-3.5 rounded-sm transition-transform hover:scale-125 cursor-pointer ${getLevelColor(
                        dayLevel
                      )}`}
                      title={`Activity Level: ${dayLevel}/4`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>🔥 1,247 contributions in the last 365 days</span>
            <span className="text-green-400">Longest Streak: 42 days</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
