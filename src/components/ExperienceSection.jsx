import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experienceData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full bg-[#08080c] py-24 md:py-36 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-8 md:px-14 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 md:mb-28"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight">
            {experienceData.header.prefix}
            <br />
            <span className="font-bold text-purple-300 drop-shadow-[0_0_25px_rgba(157,78,221,0.5)]">
              {experienceData.header.highlight}
            </span>
          </h2>
        </motion.div>

        {/* 3-Column Timeline Layout */}
        <div className="relative">
          {/* Vertical central purple glowing line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500/40 via-purple-400 to-purple-500/40 shadow-[0_0_12px_rgba(157,78,221,0.4)]" />

          <div className="space-y-16 md:space-y-24">
            {experienceData.careerItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative group"
              >
                {/* Left Column: Role & Company */}
                <div className="w-full lg:w-5/12 text-left lg:text-right">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-purple-200 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-purple-300/90 tracking-wide">
                    {item.company}
                  </p>
                </div>

                {/* Center Column: Year Typography + Glowing Node */}
                <div className="relative flex items-center justify-center min-w-[120px]">
                  {/* Futuristic Year Text */}
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white/90 tracking-tight font-mono group-hover:text-purple-300 transition-colors drop-shadow-[0_0_15px_rgba(157,78,221,0.3)]">
                    {item.year}
                  </span>
                </div>

                {/* Right Column: Description Text */}
                <div className="w-full lg:w-5/12 text-left">
                  <p className="text-sm sm:text-base text-slate-300/80 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
