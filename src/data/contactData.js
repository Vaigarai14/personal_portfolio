export const contactData = {
  header: {
    badge: 'Available for Opportunities & Collaborations',
    title: "Let's Connect",
    description:
      'Looking for a high-impact Software Engineer with proven expertise in React, TypeScript, and enterprise performance optimization? Let’s discuss how I can bring value to your engineering team.',
  },
  form: {
    title: 'Send a Message',
    nameLabel: 'Your Name',
    namePlaceholder: 'Alex Morgan',
    emailLabel: 'Your Email Address',
    emailPlaceholder: 'alex@company.com',
    messageLabel: 'Your Message',
    messagePlaceholder:
      'Tell me about your project, engineering role, or collaboration opportunities...',
    voiceInput: {
      label: 'Voice Input',
      listening: 'Listening...',
      simulatedText:
        'Looking forward to connecting regarding frontend engineering and architecture roles!',
    },
    submitButton: {
      defaultText: 'Send Message',
      submittingText: 'Transmitting...',
    },
    success: {
      title: 'Message Transmitted!',
      message:
        'Thank you for reaching out. I have received your message and will respond promptly within 24 hours.',
      resetButtonText: 'Send Another Message',
    },
  },
  directContact: {
    title: 'Direct Contact Information',
    items: [
      {
        iconType: 'mail',
        value: 'vaigaraioff1428@proton.me',
        accent: 'cyan',
      },
      {
        iconType: 'phone',
        value: '+91 9361920258',
        accent: 'green',
      },
      {
        iconType: 'mapPin',
        value: 'Chennai, India',
        accent: 'purple',
      },
    ],
  },
  aiAssistant: {
    title: 'AI Portfolio Assistant',
    status: 'Live Neural Model',
    initialMessage:
      "Hi! I'm Vaigarai's AI interactive assistant. I can answer questions about his 2.4+ years of React/TypeScript experience, LIMS performance optimization work, or help initiate a conversation. What would you like to know?",
    typingText: 'Synthesizing response...',
    promptLabel: 'Ask the AI:',
    defaultResponse:
      'Thank you for asking! Feel free to connect directly with Vaigarai at vaigaraioff1428@proton.me or +91 9361920258.',
    responses: {
      "Tell me about Vaigarai's experience":
        'Vaigarai is a Software Engineer with 2.4+ years of experience building scalable, high-performance web applications using React and TypeScript for enterprise LIMS and Logistics ERP platforms.',
      'What technologies does he use?':
        'His core stack includes React.js, TypeScript, JavaScript, Zustand, Redux, React Hook Form, TanStack Query, Tailwind CSS, Ant Design, Material UI, Node.js, Express, PostgreSQL, and Redis.',
      'What are his key achievements?':
        'At Kalavai Digital (TheViswaGroup), he led large-scale LIMS optimization: implementing list virtualization for ~60 FPS rendering, cutting re-renders by ~90%, and boosting UI responsiveness by 60–70%.',
      'How can I contact him?':
        'You can email vaigaraioff1428@proton.me, call +91 9361920258, or connect on LinkedIn at linkedin.com/in/vaigarai.',
    },
  },
  socials: {
    title: 'Connect Online',
    links: [
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/vaigarai',
        icon: 'linkedin',
        hoverBorder: 'hover:border-blue-400 hover:text-blue-300',
        hoverIcon: 'group-hover:text-blue-400',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/Vaigarai14',
        icon: 'github',
        hoverBorder: 'hover:border-cyan-400 hover:text-cyan-300',
        hoverIcon: 'group-hover:text-cyan-400',
      },
      {
        name: 'Email',
        url: 'mailto:vaigaraioff1428@proton.me',
        icon: 'mail',
        hoverBorder: 'hover:border-cyan-400 hover:text-cyan-300',
        hoverIcon: 'group-hover:text-cyan-400',
      },
      {
        name: 'Phone',
        url: 'tel:9361920258',
        icon: 'phone',
        hoverBorder: 'hover:border-green-400 hover:text-green-300',
        hoverIcon: 'group-hover:text-green-400',
      },
    ],
  },
};

export default contactData;
