import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ExternalLink, Sparkles, Star, Github } from 'lucide-react';
import { blogData } from '../data/blogData';

export default function BlogSection() {
  return (
    <section id="blog" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-morphism border border-cyan-400/30 text-xs font-mono text-cyan-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{blogData.header.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-sora liquid-gradient mb-6 tracking-tight">
            {blogData.header.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-300/80 max-w-3xl mx-auto leading-relaxed">
            {blogData.header.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Articles Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-sora text-white flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-cyan-400" />
              <span>{blogData.articlesSection.title}</span>
            </h3>

            {blogData.articlesSection.articles.map((art, idx) => (
              <motion.div
                key={art.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all"
              >
                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{art.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h4 className="text-lg font-bold font-sora text-white mb-2 hover:text-cyan-300 transition-colors">
                  {art.title}
                </h4>

                <p className="text-slate-300/75 text-sm leading-relaxed mb-4">
                  {art.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {art.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-cyan-200">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={art.url}
                    className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>{blogData.articlesSection.readMoreText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Open Source Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-sora text-white flex items-center gap-2 mb-4">
              <Github className="w-6 h-6 text-purple-400" />
              <span>{blogData.openSourceSection.title}</span>
            </h3>

            {blogData.openSourceSection.repositories.map((repo, idx) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 hover:border-purple-400/40 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-bold font-mono text-white group-hover:text-purple-300">
                    {repo.name}
                  </h4>
                  <div className="flex items-center gap-1 text-yellow-400 text-xs font-mono bg-yellow-500/10 px-2 py-0.5 rounded-full border border-yellow-400/30">
                    <Star className="w-3.5 h-3.5 fill-yellow-400" />
                    <span>{repo.stars}</span>
                  </div>
                </div>

                <p className="text-slate-300/75 text-sm leading-relaxed mb-4">
                  {repo.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-purple-300">
                    {repo.tag}
                  </span>

                  <a
                    href={blogData.openSourceSection.githubProfileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-300 hover:text-white transition-colors"
                  >
                    <span>{blogData.openSourceSection.viewGithubText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
