import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Rocket, Download, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { heroData } from '../data/heroData';

export default function HeroSection() {
  const triggerConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { x, y },
      colors: ['#38bdf8', '#6366f1', '#10b981', '#ffffff'],
    });
  };

  const handleDownloadResume = (e) => {
    triggerConfetti(e);
    const element = document.createElement('a');
    const file = new Blob([heroData.resume.content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = heroData.resume.fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 lg:py-24">
      
      {/* ========================================================================= */}
      {/* Vibrant Outer Cosmic Orbital Background & Glowing Nebula Atmosphere */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft Colorful Nebula Glows in Corners & Center */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[500px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-blue-500/10 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[130px]" />

        {/* Outer Orbit Ring 1 - Vibrant Cyan Track */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] sm:w-[1100px] sm:h-[1100px] lg:w-[1300px] lg:h-[1300px] rounded-full border border-cyan-400/25 pointer-events-none animate-[spin_70s_linear_infinite]">
          <div className="absolute top-12 left-1/4 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#38bdf8]" />
          <div className="absolute bottom-16 right-1/3 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8]" />
        </div>

        {/* Outer Orbit Ring 2 - Dashed Indigo Track (Reverse Spin) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] sm:w-[1300px] sm:h-[1300px] lg:w-[1550px] lg:h-[1550px] rounded-full border border-indigo-400/25 border-dashed pointer-events-none animate-[spin_100s_linear_infinite_reverse]">
          <div className="absolute top-1/3 -right-2 w-3.5 h-3.5 rounded-full bg-indigo-400 shadow-[0_0_15px_#6366f1]" />
          <div className="absolute bottom-1/4 -left-2 w-3 h-3 rounded-full bg-sky-300 shadow-[0_0_12px_#38bdf8]" />
        </div>

        {/* Outer Cosmic Horizon Ring 3 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] sm:w-[1600px] sm:h-[1600px] rounded-full border border-white/5 pointer-events-none animate-[spin_140s_linear_infinite]" />
      </div>

      {/* ========================================================================= */}
      {/* 2-Column Split Hero Layout: Left Content & Right Cyber-Orbit Avatar */}
      {/* ========================================================================= */}
      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ----------------------------------------------------------------------- */}
          {/* Left Column: Role, Name, Subtitle, CTAs, and Stats (60% Width) */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Dynamic Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className='mt-4'
              // className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-morphism border border-cyan-400/40 text-xs text-cyan-300 font-mono shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:border-cyan-400 transition-colors"
            >
              {/* <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>{heroData.roleBadge}</span> */}
            </motion.div>

            {/* Main Name Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="text-xs sm:text-sm font-mono text-cyan-400 uppercase tracking-widest block mb-2 font-bold">
                Hello World, I'm
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-sora liquid-gradient drop-shadow-[0_10px_30px_rgba(56,189,248,0.25)]">
                {heroData.name}
              </h1>
            </motion.div>

            {/* Professional Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-base sm:text-lg text-slate-300/90 font-normal leading-relaxed max-w-2xl"
            >
              {heroData.subtitle}
            </motion.p>

            {/* Interactive CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-wrap gap-4 items-center pt-2 w-full sm:w-auto"
            >
              <a
                href={heroData.actions.primary.href}
                onClick={triggerConfetti}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] hover:scale-105 active:scale-95 transition-all duration-200 group cursor-pointer"
              >
                <Rocket className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                <span>{heroData.actions.primary.text}</span>
              </a>

              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl glass-morphism border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-400/60 hover:bg-cyan-500/10 font-semibold text-sm shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-200 group cursor-pointer"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>{heroData.actions.secondary.text}</span>
              </button>
            </motion.div>

            {/* HR-Impression Mini Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-4"
            >
              {heroData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`glass-card p-3.5 rounded-xl border border-white/10 ${stat.hoverBorder} transition-all hover:scale-105 text-left`}
                >
                  <div className={`text-xl sm:text-2xl font-bold font-sora ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-300 font-mono mt-0.5 leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* Right Column: Dedicated Cyber-Orbital Avatar Visual Showcase (40% Width) */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] flex items-center justify-center"
            >
              
              {/* Concentric Dedicated Orbit Rings Around Avatar */}
              {/* Ring 1 - Inner Cyan Spin */}
              <div className="absolute inset-4 rounded-full border border-cyan-400/40 animate-[spin_20s_linear_infinite]">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8]" />
              </div>

              {/* Ring 2 - Dashed Indigo Reverse Spin */}
              <div className="absolute inset-0 rounded-full border-2 border-indigo-400/35 border-dashed animate-[spin_28s_linear_infinite_reverse]">
                <div className="absolute top-1/4 -right-1.5 w-3.5 h-3.5 rounded-full bg-indigo-400 shadow-[0_0_12px_#6366f1]" />
                <div className="absolute bottom-1/4 -left-1.5 w-2.5 h-2.5 rounded-full bg-sky-300 shadow-[0_0_10px_#38bdf8]" />
              </div>

              {/* Ring 3 - Outer Dotted Cyan Orbit */}
              <div className="absolute -inset-6 sm:-inset-8 rounded-full border border-cyan-400/25 border-dotted animate-[spin_42s_linear_infinite]">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-[0_0_15px_#38bdf8]" />
              </div>

              {/* Avatar Breathing Ambient Glow Aura */}
              <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-cyan-400/25 via-indigo-600/25 to-blue-500/20 blur-2xl animate-pulse-slow pointer-events-none" />

              {/* Central Avatar Orb */}
              <div className="relative z-10 group">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full glass-morphism border-2 border-cyan-400/70 p-1.5 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.35)] group-hover:border-cyan-300 transition-all duration-300">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-500/20 via-indigo-600/25 to-black/90 flex items-center justify-center text-5xl sm:text-6xl select-none group-hover:scale-110 transition-transform duration-300">
                    {heroData.avatar.emoji}
                  </div>
                </div>

                {/* Live Status Pill Underneath Avatar */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#030712] border border-green-400/70 flex items-center gap-2 shadow-xl shadow-green-500/25 whitespace-nowrap z-20">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-ping inline-block" />
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-green-300 uppercase tracking-wider">
                    {heroData.avatar.status}
                  </span>
                </div>
              </div>

              {/* Floating Micro Badges Around Avatar */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute top-2 -right-4 sm:right-2 px-3 py-1 rounded-xl glass-card border border-cyan-400/40 text-[11px] font-mono font-semibold text-cyan-300 shadow-lg shadow-cyan-500/20 flex items-center gap-1.5 z-20"
              >
                <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                <span>~60 FPS Virt</span>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="absolute bottom-2 -left-4 sm:left-2 px-3 py-1 rounded-xl glass-card border border-indigo-400/40 text-[11px] font-mono font-semibold text-indigo-300 shadow-lg shadow-indigo-500/20 flex items-center gap-1.5 z-20"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Production LIMS</span>
              </motion.div>

            </motion.div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-14 flex flex-col items-center justify-center gap-2"
        >
          <span className="text-[11px] font-mono text-cyan-400/70 tracking-widest uppercase">
            {heroData.scrollIndicator.text}
          </span>
          <a
            href={heroData.scrollIndicator.href}
            className="w-5 h-9 border-2 border-cyan-400/40 rounded-full flex justify-center p-1 hover:border-cyan-300 transition-colors"
            aria-label={heroData.scrollIndicator.ariaLabel}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1 h-2.5 bg-gradient-to-b from-cyan-400 to-indigo-500 rounded-full shadow-[0_0_8px_#38bdf8]"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
