# 🌌 Personal Portfolio | Senior Frontend & Performance Specialist

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-3D_WebGL-black?logo=three.js&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Smooth_Animations-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)

A high-performance, executive-grade developer portfolio engineered for **Software Engineering** job applications. Built with **React 18**, **Vite**, **Tailwind CSS**, **Three.js**, and **Framer Motion**, focusing on modern enterprise architecture, sub-second UI interactions, and a clean luxury dark aesthetic.

---

## 🚀 Key Features

### 1. 2-Column Asymmetrical Hero Section
- **Natural F-Pattern Typography**: Clear left-aligned professional summary highlighting **2.4+ years of React/TypeScript experience**, enterprise **LIMS**, and **Logistics ERP** achievements.
- **Dedicated Cyber-Avatar Stage**: Concentric rotating orbital rings with neon planetary satellites and a live pulsing `AVAILABLE FOR ROLES` status beacon.
- **Vibrant Cosmic Background**: Smooth, GPU-accelerated outer orbit tracks (`70s`–`140s` linear spin) and soft ambient nebula atmospheric lighting.

### 2. Multi-Line Editorial Scroll Ticker (`ScrollTextLines.jsx`)
- 3 distinct horizontal typography tracks drifting at alternating velocities on scroll using Framer Motion's `useScroll` and `useSpring` damping.
- Bold gradient headlines, outline ghost cyber-typography, and monospace tech pills.

### 3. Interactive 3D WebGL Orbital Canvas
- Interactive **Three.js** wireframe globe and orbiting core geometry with touch/mouse rotation and real-time kinetic damping.

### 4. Enterprise Career Timeline & Live Metrics
- Comprehensive chronology of production engineering at **Kalavai Digital (TheViswaGroup)** and **Aggrandize Venture**.
- Live architecture metrics highlighting **~60 FPS list virtualization**, **~90% re-render reductions**, and **TanStack Query caching**.

### 5. Ambient Web Audio Synth
- Native browser **Web Audio API** dual-oscillator drone with lowpass filtering for atmospheric soundscapes (with one-click mute/unmute control).

### 6. Fully Modularized Data Architecture
- 100% of website text, experience records, projects, and skills are managed in isolated files under `src/data/`. Content can be edited without touching React JSX components.

---

## 🛠️ Tech Stack & Dependencies

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [React 18](https://react.dev/) | Component architecture & modern hooks |
| **Build Tool** | [Vite 5](https://vitejs.dev/) | Instant HMR and optimized Rollup production builds |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) | Atomic, purged utility CSS (~8.8 KB gzipped) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) | Spring physics, layout animations, and scroll triggers |
| **3D Graphics** | [Three.js](https://threejs.org/) | Interactive WebGL sphere and orbital rings |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent SVG icon set |
| **Audio** | [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) | Synthesized ambient drone frequencies |

---

## 📂 Project Structure

```bash
Portfolio-1/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── canvas/        # WebGL & Three.js canvas components
│   │   │   └── Skills3DOrbit.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ScrollTextLines.jsx
│   │   └── SkillsSection.jsx
│   ├── data/              # Centralized data layer (Content files)
│   │   ├── aboutData.js
│   │   ├── contactData.js
│   │   ├── experienceData.js
│   │   ├── footerData.js
│   │   ├── heroData.js
│   │   ├── navbarData.js
│   │   ├── projectsData.js
│   │   ├── skillsData.js
│   │   ├── tickerData.js
│   │   └── index.js
│   ├── App.jsx            # Application root & audio controller
│   ├── index.css          # Core design tokens, scrollbars, & utilities
│   └── main.jsx           # Vite entry point
├── index.html             # HTML template with Google Fonts (Sora, Inter)
├── package.json           # Scripts & dependencies
├── tailwind.config.js     # Custom color tokens & keyframes
└── vite.config.js         # Vite build configuration
```

---

## ⚡ Getting Started

### Prerequisites
- **Node.js** (v18.0 or higher recommended)
- **pnpm**, **npm**, or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Vaigarai14/Portfolio-1.git
   cd Portfolio-1
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or: npm install
   ```

3. **Start the local development server:**
   ```bash
   pnpm run dev
   # or: npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   pnpm run build
   # or: npm run build
   ```

5. **Preview production build:**
   ```bash
   pnpm run preview
   # or: npm run preview
   ```

---

## 🎨 Modifying & Updating Content

To update any text, links, projects, or experience records:
- **Hero & Headline**: Edit `src/data/heroData.js`
- **Career & Achievements**: Edit `src/data/aboutData.js`
- **Projects & Repositories**: Edit `src/data/projectsData.js`
- **Skills & Categories**: Edit `src/data/skillsData.js`
- **Ticker Ribbon**: Edit `src/data/tickerData.js`
- **Contact Info & Socials**: Edit `src/data/contactData.js`

---

## 📬 Contact & Connect

- **Engineer**: Vaigarai
- **Email**: [vaigaraioff1428@proton.me](mailto:vaigaraioff1428@proton.me)
- **LinkedIn**: [linkedin.com/in/vaigarai](https://linkedin.com/in/vaigarai)
- **GitHub**: [github.com/Vaigarai14](https://github.com/Vaigarai14)
- **Location**: Chennai, India
