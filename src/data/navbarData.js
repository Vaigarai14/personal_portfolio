export const navbarData = {
  brand: {
    logoLetter: 'V',
    name: 'Vaigarai',
    href: '#home',
  },
  navItems: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    // { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ],
  controls: {
    audio: {
      activeTooltip: 'Mute ambient sound',
      inactiveTooltip: 'Play ambient synth',
      ariaLabel: 'Toggle sound',
    },
    hireMe: {
      text: 'Hire Me',
      href: '#contact',
    },
    mobileCta: {
      text: 'Get In Touch',
      href: '#contact',
    },
  },
};

export default navbarData;
