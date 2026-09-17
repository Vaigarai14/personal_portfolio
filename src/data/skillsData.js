export const skillsData = {
  header: {
    badge: 'Technical Proficiency Matrix',
    title: 'Technical Skills',
    description:
      'Comprehensive overview of frontend frameworks, state management libraries, styling systems, backend capabilities, and developer tooling mastered across 2.4+ years of enterprise engineering.',
  },
  canvas: {
    badge: 'Interactive Technical Sphere',
    dragHint: '🖱️ Drag to rotate skill sphere',
  },
  skillCategories: [
    {
      title: 'Frontend Frameworks & State',
      iconType: 'globe',
      skills: [
        { name: 'React.js', level: '96%' },
        { name: 'TypeScript & JavaScript', level: '95%' },
        { name: 'TanStack Query (React Query)', level: '92%' },
        { name: 'Zustand & Redux State', level: '94%' },
        { name: 'React Hook Form & Schema Validation', level: '95%' },
      ],
    },
    {
      title: 'UI Libraries & Styling Systems',
      iconType: 'database',
      skills: [
        { name: 'Tailwind CSS', level: '98%' },
        { name: 'Ant Design', level: '90%' },
        { name: 'Material UI (MUI)', level: '92%' },
        { name: 'Bootstrap & Responsive Design', level: '90%' },
        { name: 'List Virtualization & 60 FPS UI', level: '94%' },
      ],
    },
    {
      title: 'Backend, Database & Dev Tools',
      iconType: 'cpu',
      skills: [
        { name: 'Node.js & Express.js', level: '86%' },
        { name: 'REST API Development', level: '90%' },
        { name: 'PostgreSQL & Redis', level: '82%' },
        { name: 'Git, GitHub & Version Control', level: '95%' },
        { name: 'Postman, Chrome DevTools, Jira & Agile', level: '92%' },
      ],
    },
  ],
};

export default skillsData;
