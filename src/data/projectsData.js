export const projectsData = {
  header: {
    badge: 'Enterprise Solutions & Applications',
    title: 'Featured Projects',
    description:
      'Production enterprise systems, high-performance architecture optimizations, and full-stack web applications engineered with React, TypeScript, and modern state architectures.',
  },
  categories: [
    { id: 'all', label: 'All Projects', icon: '🌌' },
    { id: 'enterprise', label: 'Enterprise & LIMS', icon: '🏢' },
    { id: 'performance', label: 'Performance & Architecture', icon: '⚡' },
    { id: 'apps', label: 'Full-Stack Apps', icon: '📱' },
  ],
  projects: [
    {
      id: 1,
      title: 'LIMS Performance & Architecture Engine',
      category: 'enterprise',
      description:
        'Led large-scale performance optimization of a Laboratory Information Management System (LIMS) platform. Eliminated critical React anti-patterns in 5,000+ line components, implemented list virtualization for ~60 FPS table rendering, and boosted UI responsiveness by 60–70%.',
      tags: ['React.js', 'TypeScript', 'TanStack Query', 'List Virtualization', 'Tailwind CSS'],
      gradient: 'from-cyan-500/20 via-blue-500/20 to-purple-500/20',
      stars: 480,
      demoUrl: 'https://github.com/Vaigarai14',
      githubUrl: 'https://github.com/Vaigarai14',
      badge: 'Production LIMS',
    },
    {
      id: 2,
      title: 'Logistics ERP (Shipping Management System)',
      category: 'enterprise',
      description:
        'Developed a scalable enterprise-grade logistics ERP frontend using React, Material UI, Redux, and React Hook Form. Engineered end-to-end shipping and approval workflows with real-time REST API state synchronization.',
      tags: ['React', 'Material UI', 'Redux', 'React Hook Form', 'REST APIs'],
      gradient: 'from-purple-500/20 via-pink-500/20 to-indigo-500/20',
      stars: 340,
      demoUrl: 'https://github.com/Vaigarai14',
      githubUrl: 'https://github.com/Vaigarai14',
      badge: 'Enterprise ERP',
    },
    {
      id: 3,
      title: 'Food Ordering Web Application',
      category: 'apps',
      description:
        'Developed a scalable food ordering web application using React, Redux, and Tailwind CSS. Implemented centralized state management to handle cart operations, item quantities, real-time UI updates, and seamless client-side routing with React Router.',
      tags: ['React', 'Redux', 'Tailwind CSS', 'React Router', 'JavaScript'],
      gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
      stars: 285,
      demoUrl: 'https://github.com/Vaigarai14',
      githubUrl: 'https://github.com/Vaigarai14',
      badge: 'Full-Stack App',
    },
    {
      id: 4,
      title: 'High-Throughput List Virtualizer',
      category: 'performance',
      description:
        'Engineered dynamic windowing and list virtualization technique capable of rendering tens of thousands of rows at stable 60 FPS while keeping browser DOM node counts minimal and memory footprint low.',
      tags: ['React.js', 'TypeScript', 'DOM Virtualization', 'Performance'],
      gradient: 'from-yellow-500/20 via-orange-500/20 to-red-500/20',
      stars: 220,
      demoUrl: 'https://github.com/Vaigarai14',
      githubUrl: 'https://github.com/Vaigarai14',
      badge: '60 FPS Core',
    },
    {
      id: 5,
      title: 'Modular Form & Schema Validation System',
      category: 'performance',
      description:
        'Architected reusable component design patterns isolating useWatch hooks and complex form schemas, preventing full component-tree re-rendering on rapid user input keystrokes and cutting re-renders by ~90%.',
      tags: ['React Hook Form', 'Zustand', 'TypeScript', 'Ant Design'],
      gradient: 'from-cyan-500/20 via-purple-500/20 to-pink-500/20',
      stars: 195,
      demoUrl: 'https://github.com/Vaigarai14',
      githubUrl: 'https://github.com/Vaigarai14',
      badge: 'Architecture',
    },
    {
      id: 6,
      title: 'TanStack Query Client Caching & Data Layer',
      category: 'enterprise',
      description:
        'Configured distributed optimistic caching, background revalidation, and mutation invalidation pipelines that reduced redundant network requests and improved perceived load times across high-traffic enterprise views.',
      tags: ['TanStack Query', 'REST APIs', 'Node.js', 'PostgreSQL'],
      gradient: 'from-pink-500/20 via-purple-500/20 to-cyan-500/20',
      stars: 310,
      demoUrl: 'https://github.com/Vaigarai14',
      githubUrl: 'https://github.com/Vaigarai14',
      badge: 'Data Layer',
    },
  ],
  modal: {
    closeText: 'ESC / Close',
    statusTitle: 'Enterprise Architecture Active',
    statusSubtitle: 'Render Speed: ~60 FPS | TanStack Cache: Ready | Latency: Optimized',
    viewCodeText: 'View Codebase',
    confirmText: 'Awesome!',
  },
  cardLabels: {
    interactiveDemo: 'Project Overview',
    source: 'GitHub Source',
  },
};

export default projectsData;
