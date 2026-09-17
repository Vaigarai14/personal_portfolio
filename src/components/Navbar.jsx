import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { navbarData } from '../data/navbarData';

export default function Navbar({ isAudioActive, toggleAudio }) {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navbarData.navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-950/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href={navbarData.brand.href}
            className="group flex items-center gap-2.5 text-2xl font-bold font-sora tracking-tight cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 p-[1.5px] shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center text-cyan-400 font-mono font-bold text-base">
                {navbarData.brand.logoLetter}
              </div>
            </div>
            <span className="liquid-gradient group-hover:brightness-125 transition-all">
              {navbarData.brand.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 glass-morphism px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navbarData.navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-cyan-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-400/40 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Controls & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isAudioActive
                  ? 'border-cyan-400/60 bg-cyan-500/15 text-cyan-300 shadow-[0_0_10px_rgba(56,189,248,0.3)]'
                  : 'border-white/10 text-slate-400 hover:text-white hover:border-white/25'
              }`}
              title={
                isAudioActive
                  ? navbarData.controls.audio.activeTooltip
                  : navbarData.controls.audio.inactiveTooltip
              }
              aria-label={navbarData.controls.audio.ariaLabel}
            >
              {isAudioActive ? (
                <Volume2 className="w-4 h-4 animate-pulse text-cyan-400" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Quick Contact Button */}
            <a
              href={navbarData.controls.hireMe.href}
              className="relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg glass-morphism border border-cyan-400/40 text-cyan-300 hover:text-white hover:border-cyan-300 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all overflow-hidden group cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span>{navbarData.controls.hireMe.text}</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleAudio}
              className="p-2 rounded-lg border border-white/10 text-slate-300"
              aria-label={navbarData.controls.audio.ariaLabel}
            >
              {isAudioActive ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-white/10 text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-morphism border-b border-white/10 bg-[#030712]/98 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-3">
              {navbarData.navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href={navbarData.controls.mobileCta.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 font-semibold text-white shadow-lg shadow-cyan-500/25"
              >
                {navbarData.controls.mobileCta.text}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
