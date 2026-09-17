import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { tickerData } from '../data/tickerData';

export default function ScrollTextLines() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // Multiple speeds in alternating directions
  const x1 = useTransform(smoothProgress, [0, 1], ['0%', '-35%']);
  const x2 = useTransform(smoothProgress, [0, 1], ['-35%', '5%']);
  const x3 = useTransform(smoothProgress, [0, 1], ['5%', '-40%']);

  return (
    <section
      ref={containerRef}
      className="relative py-10 sm:py-12 overflow-hidden bg-[#04060d]/80 border-y border-white/10 backdrop-blur-md z-20 select-none"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-gradient-to-r from-cyan-500/10 via-indigo-600/10 to-blue-500/10 blur-3xl pointer-events-none" />

      {/* Top and Bottom Accent Gradient Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="space-y-4">
        {/* Line 1 - Bold Solid Cyan / White Gradient Text (Drifts Left on Scroll) */}
        <motion.div style={{ x: x1 }} className="flex whitespace-nowrap gap-6 will-change-transform">
          {[...Array(3)].map((_, repeatIdx) => (
            <div key={repeatIdx} className="flex items-center gap-6">
              {tickerData.line1.map((text, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <span className="text-xl sm:text-2xl md:text-3xl font-black font-sora tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 hover:brightness-125 transition-all">
                    {text}
                  </span>
                  <span className="text-cyan-400 text-lg opacity-80 animate-pulse">✦</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Line 2 - Outline Futuristic Ghost Typography (Drifts Right on Scroll) */}
        <motion.div style={{ x: x2 }} className="flex whitespace-nowrap gap-6 will-change-transform">
          {[...Array(3)].map((_, repeatIdx) => (
            <div key={repeatIdx} className="flex items-center gap-6">
              {tickerData.line2.map((text, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <span
                    className="text-2xl sm:text-3xl md:text-4xl font-black font-sora tracking-widest text-transparent hover:text-indigo-200 transition-colors cursor-default"
                    style={{
                      WebkitTextStroke: '1px rgba(129, 140, 248, 0.75)',
                      textShadow: '0 0 20px rgba(99, 102, 241, 0.25)',
                    }}
                  >
                    {text}
                  </span>
                  <span className="text-indigo-400 text-lg opacity-80">⚡</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Line 3 - Monospace Micro Tech Tags (Drifts Left on Scroll) */}
        <motion.div style={{ x: x3 }} className="flex whitespace-nowrap gap-6 will-change-transform">
          {[...Array(3)].map((_, repeatIdx) => (
            <div key={repeatIdx} className="flex items-center gap-6">
              {tickerData.line3.map((text, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <span className="text-sm sm:text-base md:text-lg font-mono font-bold tracking-widest text-cyan-300 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/30 shadow-[0_0_10px_rgba(56,189,248,0.12)]">
                    {text}
                  </span>
                  <span className="text-emerald-400 text-xs opacity-80">◆</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
