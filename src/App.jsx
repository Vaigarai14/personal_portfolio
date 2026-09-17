import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ScrollTextLines from './components/ScrollTextLines';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Web Audio Synth Generator for Ambient Sound
  const [isAudioActive, setIsAudioActive] = useState(false);
  const audioCtxRef = useRef(null);
  const oscillatorGroupRef = useRef([]);

  const startAmbientAudio = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      // Create rich dual sine drone frequencies for space ambience
      const frequencies = [110, 164.81, 220]; // A2, E3, A3
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.04, ctx.currentTime);
      masterGain.connect(ctx.destination);

      const oscillators = frequencies.map((freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.5, ctx.currentTime);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Low pass filter for soft ethereal feel
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, ctx.currentTime);

        osc.connect(gain);
        gain.connect(filter);
        filter.connect(masterGain);
        osc.start();
        return osc;
      });

      oscillatorGroupRef.current = oscillators;
      setIsAudioActive(true);
    } catch (err) {
      console.error('Audio initialization error:', err);
    }
  };

  const stopAmbientAudio = () => {
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
      oscillatorGroupRef.current = [];
      setIsAudioActive(false);
    }
  };

  const toggleAudio = () => {
    if (isAudioActive) {
      stopAmbientAudio();
    } else {
      startAmbientAudio();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Scroll Progress Bar at very top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 origin-left z-[100] shadow-[0_0_10px_rgba(56,189,248,0.6)]"
        style={{ scaleX }}
      />

      {/* Smooth Spring Custom Cursor */}
      <CustomCursor />

      {/* Floating Navigation Bar */}
      <Navbar isAudioActive={isAudioActive} toggleAudio={toggleAudio} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <ScrollTextLines />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
