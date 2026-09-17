export const blogData = {
  header: {
    badge: 'Insights & Technical Publications',
    title: 'Articles & Code Contributions',
    description:
      'Sharing architectural insights on React performance engineering, memory optimization, list virtualization, and scalable enterprise patterns.',
  },
  articlesSection: {
    title: 'Featured Technical Articles',
    readMoreText: 'Read Article',
    articles: [
      {
        title: 'Eliminating React Anti-Patterns: Achieving 90% Re-render Reduction in 5k+ Line Components',
        description:
          'Deep dive into isolating useWatch hooks, memoizing complex schemas with useMemo/useCallback, and optimizing component trees for high-traffic enterprise workflows.',
        date: 'Feb 2025',
        readTime: '7 min read',
        tags: ['React.js', 'Performance', 'Architecture'],
        url: '#',
      },
      {
        title: 'Mastering List Virtualization: Rendering Massive Enterprise Datasets at Stable 60 FPS',
        description:
          'How dynamic windowing and DOM virtualization eliminate UI freezing and lag when displaying thousands of table rows and data items.',
        date: 'Jan 2025',
        readTime: '6 min read',
        tags: ['Virtualization', '60 FPS', 'TypeScript'],
        url: '#',
      },
      {
        title: 'TanStack Query Caching: Reducing Network Overhead in Enterprise ERPs',
        description:
          'Architecting client-side cache invalidation, optimistic UI updates, and background refetching to eliminate redundant API requests.',
        date: 'Dec 2024',
        readTime: '5 min read',
        tags: ['TanStack Query', 'REST APIs', 'ERP Systems'],
        url: '#',
      },
    ],
  },
  openSourceSection: {
    title: 'Open Source & Projects',
    viewGithubText: 'View on GitHub',
    githubProfileUrl: 'https://github.com/Vaigarai14',
    repositories: [
      {
        name: 'food-ordering-app',
        stars: 185,
        description:
          'Scalable food ordering web application using React, Redux, and Tailwind CSS with centralized cart state and React Router.',
        tag: 'React / Redux',
      },
      {
        name: 'react-virtualized-table',
        stars: 142,
        description:
          'Lightweight virtualized list and data grid component delivering smooth ~60 FPS scrolling for large datasets.',
        tag: 'TypeScript',
      },
      {
        name: 'form-state-optimizer',
        stars: 98,
        description:
          'React Hook Form utility helper for isolating input re-renders and stabilizing dynamic form schemas.',
        tag: 'React Hook Form',
      },
    ],
  },
};

export default blogData;
