/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#05070f',
        card: 'rgba(15, 23, 42, 0.65)',
        border: 'rgba(255, 255, 255, 0.1)',
        primary: {
          DEFAULT: '#00f2fe',
          foreground: '#05070f',
        },
        secondary: {
          DEFAULT: '#9d4edd',
          foreground: '#ffffff',
        },
        accent: {
          cyan: '#00f2fe',
          purple: '#9d4edd',
          magenta: '#ff007f',
          green: '#00ff87',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        sora: ['Sora', 'Outfit', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(0, 242, 254, 0.4), 0 0 30px rgba(157, 78, 221, 0.2)' },
          '100%': { boxShadow: '0 0 25px rgba(0, 242, 254, 0.8), 0 0 50px rgba(157, 78, 221, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
