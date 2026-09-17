export const aboutData = {
  header: {
    badge: 'Frontend Performance & Architecture Specialist',
    title: 'About Me',
    description:
      'Software Engineer with 2.4 years of experience building scalable, high-performance web applications using React and TypeScript. Proven experience in frontend development for enterprise applications including Laboratory Information Management Systems (LIMS) and Logistics ERP platforms. Strong expertise in state management, performance optimization, reusable component architecture, and responsive UI development. Focused on building production-ready, maintainable, and scalable frontend systems.',
  },
  experiences: [
    {
      year: 'Jan 2025 - Present',
      role: 'Software Engineer (Frontend Performance & Architecture)',
      company: 'Kalavai Digital Private Limited - TheViswaGroup',
      location: 'Chennai, India',
      description:
        'Led large-scale performance optimization of a LIMS platform, eliminating critical React anti-patterns in 5,000+ line components. Implemented list virtualization for ~60 FPS rendering, improved UI responsiveness by ~60–70%, cut unnecessary re-renders by ~90%, and integrated TanStack Query caching.',
      tags: ['React.js', 'TypeScript', 'TanStack Query', 'List Virtualization', 'Performance Optimization', 'Tailwind CSS'],
      accent: 'cyan',
    },
    {
      year: 'May 2024 - Jan 2025',
      role: 'Software Engineer (Logistics ERP & Shipping Management)',
      company: 'Aggrandize Venture',
      location: 'Chennai, India',
      description:
        'Developed a scalable enterprise-grade logistics ERP frontend using React, Material UI, Redux, and React Hook Form, supporting complex operational workflows. Engineered end-to-end shipping and approval workflows and integrated REST APIs for real-time data synchronization.',
      tags: ['React', 'Material UI', 'Redux', 'React Hook Form', 'REST APIs', 'Logistics ERP'],
      accent: 'purple',
    },
  ],
  currentlyBuilding: {
    title: 'Currently Engineering',
    statusBadge: 'Active Development',
    stats: [
      {
        value: '5,000+',
        label: 'Lines of Code Optimized',
        color: 'text-green-400',
      },
      {
        value: '~90%',
        label: 'Re-renders Eliminated',
        color: 'text-yellow-400',
      },
    ],
    lastCommit: 'Active on LIMS Enterprise Architecture',
    activityTitle: 'Key Architectural Highlights:',
    activityLogs: [
      { icon: '⚡', text: 'Implemented list virtualization with ~60 FPS rendering on high-volume datasets' },
      { icon: '🧩', text: 'Isolated useWatch logic into scoped components to prevent full-tree re-rendering' },
      { icon: '🚀', text: 'Integrated TanStack Query caching to eliminate redundant API calls and optimize latency' },
    ],
  },
  currentlyLearning: {
    title: 'Technical Mastery & Upskilling',
    statusBadge: 'Continuous Growth',
    items: [
      { name: 'React.js & TanStack Ecosystem', progress: 95, icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
      { name: 'TypeScript & State (Zustand/Redux)', progress: 92, icon: '📘', color: 'from-blue-400 to-indigo-500' },
      { name: 'Node.js, Express & REST API Development', progress: 85, icon: '🟢', color: 'from-green-400 to-emerald-600' },
      { name: 'PostgreSQL, Redis & Performance Profiling', progress: 80, icon: '⚡', color: 'from-purple-400 to-pink-500' },
    ],
    nextMilestone: {
      title: 'Engineering Vision:',
      description:
        'Architecting robust, zero-lag enterprise web applications with clean modular patterns, robust schema validations, and sub-second user interactions.',
    },
  },
};

export default aboutData;
