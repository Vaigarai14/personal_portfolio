import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Calendar, Briefcase, MapPin, Github, GitCommitHorizontal, BookOpen, Zap, Sparkles } from 'lucide-react';
import { aboutData } from '../data/aboutData';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  // Scroll Progress linked specifically to the About section
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothSectionProgress = useSpring(sectionProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001,
  });

  // Parallax subtle background movement on scroll
  const glowY1 = useTransform(smoothSectionProgress, [0, 1], [-60, 60]);
  const glowY2 = useTransform(smoothSectionProgress, [0, 1], [60, -60]);

  // Scroll Progress linked to the Timeline for dynamic filling line
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 70%'],
  });

  const timelineScaleY = useSpring(timelineProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 relative overflow-hidden scroll-mt-20"
    >
      {/* Subtle parallax ambient lighting */}
      <motion.div
        style={{ y: glowY1 }}
        className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        style={{ y: glowY2 }}
        className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-purple-500/15 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header with smooth entrance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-morphism border border-cyan-400/30 text-xs font-mono text-cyan-300 mb-4 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>{aboutData.header.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-sora liquid-gradient mb-6 tracking-tight drop-shadow-[0_10px_30px_rgba(0,242,254,0.2)]">
            {aboutData.header.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-300/85 max-w-3xl mx-auto leading-relaxed font-light">
            {aboutData.header.description}
          </p>
        </motion.div>

        {/* Vertical Career Journey Timeline with Dynamic Scroll Fill */}
        <div ref={timelineRef} className="relative mb-28">
          {/* Base Background Track */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-white/10 rounded-full" />

          {/* Glowing central vertical timeline bar that fills smoothly on scroll */}
          <motion.div
            style={{ scaleY: timelineScaleY }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 origin-top rounded-full shadow-[0_0_20px_rgba(0,242,254,0.6)]"
          />

          <div className="space-y-12 md:space-y-16">
            {aboutData.experiences.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 relative`}
                >
                  {/* Timeline Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass-card glass-card-hover p-6 md:p-8 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all text-left group">
                      {/* Year pill */}
                      <div className={`flex items-center gap-2 mb-3 ${isEven ? 'md:justify-start' : 'md:justify-start'}`}>
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-bold font-mono text-cyan-300 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-400/30">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold font-sora text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
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
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    className="hidden md:flex relative z-10 w-10 h-10 rounded-full bg-[#05070f] border-2 border-cyan-400 items-center justify-center shadow-[0_0_20px_rgba(0,242,254,0.6)]"
                  >
                    <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 animate-pulse" />
                  </motion.div>

                  {/* Empty spacer for alignment */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dual Live Cards: Currently Building & Currently Learning with Scroll Entrance */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Currently Building */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 hover:border-green-400/40 transition-all shadow-xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5 text-xl font-bold font-sora text-white">
                <Github className="w-6 h-6 text-green-400" />
                <span>{aboutData.currentlyBuilding.title}</span>
              </div>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-green-950/60 border border-green-400/40 text-green-400 shadow-[0_0_10px_rgba(74,222,128,0.2)]">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-ping inline-block" />
                {aboutData.currentlyBuilding.statusBadge}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {aboutData.currentlyBuilding.stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                  <div className={`text-3xl font-extrabold font-sora ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-slate-400 font-mono mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 mb-6 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <GitCommitHorizontal className="w-4 h-4 text-cyan-400" />
                <span>Last Commit:</span>
              </div>
              <span className="text-green-400 font-semibold">{aboutData.currentlyBuilding.lastCommit}</span>
            </div>

            <div className="space-y-2.5">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                {aboutData.currentlyBuilding.activityTitle}
              </div>
              {aboutData.currentlyBuilding.activityLogs.map((log, lIdx) => (
                <div
                  key={lIdx}
                  className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs font-mono text-slate-300 flex items-center gap-2"
                >
                  <span>{log.icon}</span>
                  <span>{log.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Currently Learning */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 hover:border-purple-400/40 transition-all shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5 text-xl font-bold font-sora text-white">
                  <BookOpen className="w-6 h-6 text-purple-400" />
                  <span>{aboutData.currentlyLearning.title}</span>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950/60 border border-purple-400/40 text-purple-300">
                  {aboutData.currentlyLearning.statusBadge}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                {aboutData.currentlyLearning.items.map((item) => (
                  <div key={item.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2 text-slate-200">
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                      <span className="text-cyan-300 font-bold">{item.progress}%</span>
                    </div>
                    {/* Smooth Spring Meter bar */}
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                        className={`h-full rounded-full bg-gradient-to-r ${item.color} shadow-[0_0_8px_rgba(0,242,254,0.4)]`}
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
                <span>{aboutData.currentlyLearning.nextMilestone.title}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {aboutData.currentlyLearning.nextMilestone.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
