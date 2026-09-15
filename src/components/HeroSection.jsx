import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import anime from 'animejs';
import confetti from 'canvas-confetti';
import { Rocket, Download, Terminal, Sparkles, ArrowDown, Code2, Globe, Cpu } from 'lucide-react';
import Hero3DCanvas from './canvas/Hero3DCanvas';

export default function HeroSection() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Kinetic Letter Stagger Animation via Anime.js
    if (titleRef.current) {
      const text = titleRef.current.innerText;
      titleRef.current.innerHTML = text
        .split('')
        .map((char) => `<span class='inline-block letter'>${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

      anime.timeline({ loop: false })
        .add({
          targets: '.letter',
          translateY: [60, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1200,
          delay: (el, i) => 250 + 40 * i,
        });
    }

    // Subtitle fade in with anime.js
    if (subtitleRef.current) {
      anime({
        targets: subtitleRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        easing: 'easeOutQuad',
        delay: 800,
      });
    }
  }, []);

  const triggerConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { x, y },
      colors: ['#00f2fe', '#9d4edd', '#ff007f', '#ffffff'],
    });
  };

  const handleDownloadResume = (e) => {
    triggerConfetti(e);
    // Download sample resume file
    const element = document.createElement('a');
    const file = new Blob([
      `Vaigarai - Senior Full-Stack Developer & Creative Technologist
=============================================================
Email: vaigarai.tech@example.com | Portfolio: https://github.com/Vaigarai14

EXPERTISE:
- Full-Stack: React, Next.js, Node.js, TypeScript, Python, GraphQL, REST APIs
- Creative WebGL: Three.js, WebGL Shaders, GSAP, Framer Motion, Canvas API
- Cloud & Systems: AWS, Docker, CI/CD, Microservices, Redis, PostgreSQL

FEATURED ACHIEVEMENTS:
- Architected enterprise cloud platforms serving 100k+ active users.
- Built award-winning 3D web interactive experiences with 60 FPS WebGL rendering.
- Over 1,200+ open-source contributions and active GitHub repository maintainer.
      `
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Vaigarai_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D WebGL Background Canvas */}
      <Hero3DCanvas />

      {/* Background radial aura lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-purple-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mb-8"
        >
          {/* Holographic Avatar with glowing pulsating orbits */}
          <div className="relative w-32 h-32 md:w-36 md:h-36 mx-auto group">
            {/* Outer dynamic rotating ring */}
            <div className="absolute -inset-2 rounded-full border border-cyan-400/40 animate-spin-slow" />
            <div className="absolute -inset-4 rounded-full border border-purple-500/30 border-dashed animate-[spin_20s_linear_infinite_reverse]" />
            
            {/* Pulsing blur glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 blur-xl opacity-40 group-hover:opacity-80 transition-opacity animate-pulse-slow" />

            {/* Avatar core container */}
            <div className="relative w-full h-full rounded-full glass-morphism border-2 border-cyan-400/60 p-1 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(0,242,254,0.3)]">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-500/20 via-purple-600/30 to-black/80 flex items-center justify-center text-5xl select-none group-hover:scale-110 transition-transform duration-300">
                👨‍💻
              </div>
            </div>

            {/* Live status badge */}
            <div className="absolute bottom-1 right-1 px-2.5 py-0.5 rounded-full bg-[#05070f] border border-green-400/60 flex items-center gap-1.5 shadow-lg shadow-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-ping inline-block" />
              <span className="text-[10px] font-mono font-bold text-green-300 uppercase tracking-wider">Available</span>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-morphism border border-cyan-400/30 mb-6 text-xs md:text-sm text-cyan-300 font-mono shadow-[0_0_15px_rgba(0,242,254,0.15)]"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>Full-Stack Architect & Creative Technologist</span>
        </motion.div>

        {/* Main Name Heading with Liquid Gradient */}
        <h1
          ref={titleRef}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-6 tracking-tight font-sora liquid-gradient drop-shadow-[0_10px_30px_rgba(0,242,254,0.2)]"
        >
          Vaigarai
        </h1>

        {/* Dynamic Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-slate-300/90 mb-10 font-light max-w-3xl mx-auto leading-relaxed"
        >
          Inventing tomorrow&apos;s web, one line of code at a time. Crafting immersive 3D digital experiences, high-performance distributed systems, and modern interactive aesthetics.
        </p>

        {/* Interactive CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="#projects"
            onClick={triggerConfetti}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:shadow-[0_0_35px_rgba(0,242,254,0.7)] hover:scale-105 active:scale-95 transition-all duration-200 group"
          >
            <Rocket className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            <span>🚀 Explore My Universe</span>
          </a>

          <button
            onClick={handleDownloadResume}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl glass-morphism border border-purple-400/50 text-purple-200 hover:text-white hover:border-purple-300 hover:bg-purple-500/15 font-semibold text-base shadow-[0_0_20px_rgba(157,78,221,0.25)] hover:shadow-[0_0_30px_rgba(157,78,221,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 group"
          >
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            <span>📄 Download Resume</span>
          </button>
        </motion.div>

        {/* Hero Mini Stats Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto"
        >
          <div className="glass-card p-3 rounded-xl border border-white/10 hover:border-cyan-400/40 transition-colors">
            <div className="text-2xl md:text-3xl font-bold font-sora text-cyan-400">5+</div>
            <div className="text-xs text-white/60 font-mono mt-0.5">Years Experience</div>
          </div>
          <div className="glass-card p-3 rounded-xl border border-white/10 hover:border-purple-400/40 transition-colors">
            <div className="text-2xl md:text-3xl font-bold font-sora text-purple-400">40+</div>
            <div className="text-xs text-white/60 font-mono mt-0.5">Projects Delivered</div>
          </div>
          <div className="glass-card p-3 rounded-xl border border-white/10 hover:border-green-400/40 transition-colors">
            <div className="text-2xl md:text-3xl font-bold font-sora text-green-400">1,247+</div>
            <div className="text-xs text-white/60 font-mono mt-0.5">GitHub Commits</div>
          </div>
          <div className="glass-card p-3 rounded-xl border border-white/10 hover:border-pink-400/40 transition-colors">
            <div className="text-2xl md:text-3xl font-bold font-sora text-pink-400">99.9%</div>
            <div className="text-xs text-white/60 font-mono mt-0.5">Code Reliability</div>
          </div>
        </motion.div>

        {/* Scroll Indicator Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 flex flex-col items-center justify-center gap-2"
        >
          <span className="text-xs font-mono text-cyan-400/70 tracking-widest uppercase">Scroll Down</span>
          <a
            href="#about"
            className="w-6 h-10 border-2 border-cyan-400/40 rounded-full flex justify-center p-1 hover:border-cyan-300 transition-colors"
            aria-label="Scroll to About"
          >
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full shadow-[0_0_8px_#00f2fe]"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
