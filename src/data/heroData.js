export const heroData = {
  avatar: {
    emoji: '👩‍💻',
    status: 'Available for Roles',
  },
  roleBadge: 'Software Engineer • Frontend Performance & Architecture',
  name: 'Vaigarai',
  subtitle:
    'Software Engineer with 2.4+ years of experience building scalable, high-performance web applications using React and TypeScript. Specializing in enterprise LIMS & Logistics ERP platforms, advanced state management, and ~60 FPS frontend performance optimization.',
  actions: {
    primary: {
      text: '🚀 Explore My Work',
      href: '#projects',
    },
    secondary: {
      text: '📄 Download Resume',
    },
  },
  resume: {
    fileName: 'Vaigarai_Resume.txt',
    content: `VAIKARAI - SOFTWARE ENGINEER
=============================================================
Phone: 9361920258 | Email: vaigaraioff1428@proton.me | LinkedIn: linkedin.com/in/vaigarai

ABOUT ME:
Software Engineer with 2.4 years of experience building scalable, high-performance web applications using React and TypeScript. Proven experience in frontend development for enterprise applications including Laboratory Information Management Systems (LIMS), Logistics ERP platforms. Strong expertise in state management, performance optimization, reusable component architecture, and responsive UI development. Focused on building production-ready, maintainable, and scalable frontend systems.

TECHNICAL SKILLS:
- Languages: TypeScript, JavaScript
- Frontend Frameworks & Libraries: React.js, Zustand, Redux, React Hook Form, TanStack Query
- UI Libraries & Styling: Tailwind CSS, Ant Design, Material UI, Bootstrap
- Backend: Node.js, Express.js, REST API Development
- Database: PostgreSQL, Redis
- Tools: Git, GitHub, Postman, Chrome DevTools, Agile, Jira

PROFESSIONAL EXPERIENCE:
1. Kalavai Digital Private Limited - TheViswaGroup (Jan 2025 - Present)
   Software Engineer (Frontend Performance & Architecture)
   - Led large-scale performance optimization of a LIMS platform, eliminating critical React anti-patterns in 5,000+ line component.
   - Implemented list virtualization, achieving smooth (~60 FPS) rendering for large datasets and tables.
   - Improved UI responsiveness by ~60–70%, resolving major lag and freezing in high-traffic workflows.
   - Refactored monolithic components into modular architecture, cutting unnecessary re-renders by ~90%.
   - Isolated useWatch logic into scoped components, preventing full-tree re-rendering on input changes.
   - Applied useMemo and useCallback to eliminate repeated schema computation and stabilize component rendering.
   - Reduced network overhead by integrating TanStack Query caching, eliminating redundant API calls and improving load time.

2. Aggrandize Venture (May 2024 - Jan 2025)
   Logistics ERP Application (Shipping Management System)
   - Developed a scalable enterprise-grade logistics ERP frontend using React, Material UI, Redux, and React Hook Form, supporting complex operational workflows.
   - Engineered end-to-end shipping and approval workflows, enabling structured handling of logistics operations and reducing manual intervention.
   - Integrated REST APIs for real-time data synchronization, ensuring consistent state across UI and backend systems.

PROJECTS:
- Food Ordering Application:
  Developed a scalable food ordering web application using React, Redux, and Tailwind CSS with modular and reusable component architecture. Implemented centralized state management using Redux to handle cart operations, item quantities, and real-time UI updates efficiently. Built responsive, mobile-friendly UI and enforced client-side routing using React Router.

EDUCATION:
- 2020 – 2023: Justice Basheer Ahmed Sayeed College | B.Com
`,
  },
  stats: [
    {
      value: '2.4+',
      label: 'Years Experience',
      color: 'text-cyan-400',
      hoverBorder: 'hover:border-cyan-400/40',
    },
    {
      value: '~90%',
      label: 'Re-renders Reduced',
      color: 'text-purple-400',
      hoverBorder: 'hover:border-purple-400/40',
    },
    {
      value: '~60 FPS',
      label: 'Virtual List Rendering',
      color: 'text-green-400',
      hoverBorder: 'hover:border-green-400/40',
    },
    {
      value: '60-70%',
      label: 'UI Speed Improvement',
      color: 'text-pink-400',
      hoverBorder: 'hover:border-pink-400/40',
    },
  ],
  scrollIndicator: {
    text: 'Scroll Down',
    href: '#about',
    ariaLabel: 'Scroll to About',
  },
};

export default heroData;
