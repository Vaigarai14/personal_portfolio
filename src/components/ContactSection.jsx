import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Mic,
  MicOff,
  Bot,
  Sparkles,
  CheckCircle2,
  Github,
  Linkedin,
  Twitter,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { contactData } from '../data/contactData';

const getContactIcon = (iconType) => {
  switch (iconType) {
    case 'mail':
      return <Mail className="w-4 h-4 text-cyan-400" />;
    case 'phone':
      return <Phone className="w-4 h-4 text-green-400" />;
    case 'mapPin':
      return <MapPin className="w-4 h-4 text-purple-400" />;
    default:
      return <Mail className="w-4 h-4 text-cyan-400" />;
  }
};

const getSocialIcon = (iconName, colorClass) => {
  switch (iconName) {
    case 'github':
      return <Github className={`w-4 h-4 text-slate-300 ${colorClass}`} />;
    case 'linkedin':
      return <Linkedin className={`w-4 h-4 text-slate-300 ${colorClass}`} />;
    case 'mail':
      return <Mail className={`w-4 h-4 text-slate-300 ${colorClass}`} />;
    case 'phone':
      return <Phone className={`w-4 h-4 text-slate-300 ${colorClass}`} />;
    case 'twitter':
      return <Twitter className={`w-4 h-4 text-slate-300 ${colorClass}`} />;
    case 'discord':
      return <MessageSquare className={`w-4 h-4 text-slate-300 ${colorClass}`} />;
    default:
      return <MessageSquare className={`w-4 h-4 text-slate-300 ${colorClass}`} />;
  }
};

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isListening, setIsListening] = useState(false);

  // AI Assistant Widget State
  const [aiHistory, setAiHistory] = useState([
    {
      sender: 'ai',
      text: contactData.aiAssistant.initialMessage
    }
  ]);
  const [isAiTyping, setIsAiTyping] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00f2fe', '#9d4edd', '#00ff87', '#ff007f']
      });
    }, 800);
  };

  const handleVoiceSim = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      setFormData((prev) => ({
        ...prev,
        message:
          prev.message +
          (prev.message ? ' ' : '') +
          contactData.form.voiceInput.simulatedText
      }));
    }, 1800);
  };

  const handleAiQuestion = (question) => {
    if (isAiTyping) return;

    setAiHistory((prev) => [...prev, { sender: 'user', text: question }]);
    setIsAiTyping(true);

    setTimeout(() => {
      const response =
        contactData.aiAssistant.responses[question] ||
        contactData.aiAssistant.defaultResponse;
      setAiHistory((prev) => [...prev, { sender: 'ai', text: response }]);
      setIsAiTyping(false);
    }, 700);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-morphism border border-cyan-400/30 text-xs font-mono text-cyan-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{contactData.header.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-sora liquid-gradient mb-6 tracking-tight">
            {contactData.header.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-300/80 max-w-3xl mx-auto leading-relaxed">
            {contactData.header.description}
          </p>
        </motion.div>

        {/* Dual Main Columns */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 glass-card p-6 md:p-8 rounded-3xl border border-white/10 relative shadow-2xl"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <MessageSquare className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-bold font-sora text-white">
                {contactData.form.title}
              </h3>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-cyan-950/40 border border-cyan-400/40 text-center space-y-4"
              >
                <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />
                <h4 className="text-2xl font-bold font-sora text-white">
                  {contactData.form.success.title}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {contactData.form.success.message}
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold text-xs uppercase tracking-wider text-white shadow-lg cursor-pointer"
                >
                  {contactData.form.success.resetButtonText}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    {contactData.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={contactData.form.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    {contactData.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={contactData.form.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                      {contactData.form.messageLabel}
                    </label>
                    <button
                      type="button"
                      onClick={handleVoiceSim}
                      className={`inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded transition-all cursor-pointer ${
                        isListening
                          ? 'bg-red-500/20 text-red-400 border border-red-400/40 animate-pulse'
                          : 'text-slate-400 hover:text-cyan-300'
                      }`}
                      title="Simulate speech voice input"
                    >
                      {isListening ? (
                        <>
                          <MicOff className="w-3 h-3" />
                          <span>{contactData.form.voiceInput.listening}</span>
                        </>
                      ) : (
                        <>
                          <Mic className="w-3 h-3" />
                          <span>{contactData.form.voiceInput.label}</span>
                        </>
                      )}
                    </button>
                  </div>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={contactData.form.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 font-bold text-white shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(0,242,254,0.6)] hover:scale-[1.02] active:scale-98 transition-all duration-200 cursor-pointer text-sm"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <Sparkles className="w-4 h-4 animate-spin" />
                      {contactData.form.submitButton.submittingText}
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{contactData.form.submitButton.defaultText}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Info & AI Assistant Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Direct Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 rounded-2xl border border-white/10 space-y-3"
            >
              <h4 className="text-base font-bold font-sora text-white mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span>{contactData.directContact.title}</span>
              </h4>

              {contactData.directContact.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 text-xs font-mono text-slate-200">
                  {getContactIcon(item.iconType)}
                  <span>{item.value}</span>
                </div>
              ))}
            </motion.div>

            {/* AI Assistant Chatbot Simulation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-[0_0_10px_rgba(0,242,254,0.5)]">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-sora text-white">
                      {contactData.aiAssistant.title}
                    </h4>
                    <span className="text-[10px] font-mono text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping inline-block" />
                      {contactData.aiAssistant.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Chat Message Box */}
              <div className="max-h-48 overflow-y-auto space-y-2.5 mb-4 p-3 rounded-xl bg-black/40 border border-white/5 text-xs">
                {aiHistory.map((msg, mIdx) => (
                  <div
                    key={mIdx}
                    className={`p-2.5 rounded-xl ${
                      msg.sender === 'user'
                        ? 'bg-cyan-950/80 text-cyan-200 ml-8 border border-cyan-400/30'
                        : 'bg-white/5 text-slate-200 mr-4 border border-white/10'
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
                {isAiTyping && (
                  <div className="p-2 rounded-xl bg-white/5 text-slate-400 text-xs italic flex items-center gap-1 font-mono">
                    <Sparkles className="w-3 h-3 animate-spin text-cyan-400" />
                    <span>{contactData.aiAssistant.typingText}</span>
                  </div>
                )}
              </div>

              {/* Quick Prompt Triggers */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono text-slate-400">
                  {contactData.aiAssistant.promptLabel}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {Object.keys(contactData.aiAssistant.responses).map((q) => (
                    <button
                      key={q}
                      onClick={() => handleAiQuestion(q)}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/5 hover:bg-cyan-950/60 border border-white/10 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-300 transition-all text-left cursor-pointer"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Social Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6 rounded-2xl border border-white/10"
            >
              <h4 className="text-sm font-bold font-sora text-white mb-3">
                {contactData.socials.title}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {contactData.socials.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 rounded-xl glass-morphism border border-white/10 ${link.hoverBorder} flex items-center justify-center gap-2 text-xs font-mono transition-all group`}
                  >
                    {getSocialIcon(link.icon, link.hoverIcon)}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
