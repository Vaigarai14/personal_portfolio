import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#04060d] py-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Note */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center font-mono font-bold text-black text-sm">
              V
            </div>
            <div>
              <p className="text-sm font-medium text-slate-300">
                © {new Date().getFullYear()} Vaigarai. Built with cutting-edge 3D web technology.
              </p>
              <p className="text-xs text-slate-500 font-mono">
                Three.js • Framer Motion • Anime.js • WebGL • Tailwind CSS
              </p>
            </div>
          </div>

          {/* Central Pulsing Bar */}
          <div className="flex items-center gap-3">
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse" />
            <span className="text-xs font-mono text-cyan-300/80">60 FPS WebGL Engine</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glass-morphism border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
