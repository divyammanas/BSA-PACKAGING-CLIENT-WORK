/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B18', // Ultra-deep Obsidian Navy
          900: '#0A122A', // Deep Midnight Navy
          850: '#0F1A3A', // Elevated Panel Navy
          800: '#14234E', // Accent Navy
          750: '#1A2D64',
          700: '#21397D',
          600: '#2E4C9E',
        },
        industrial: {
          amber: '#F59E0B',
          amberGlow: '#FBBF24',
          amberDark: '#D97706',
          amberLight: '#FEF3C7',
          cyan: '#0EA5E9',
          cyanGlow: '#38BDF8',
          blue: '#2563EB',
          emerald: '#10B981',
          emeraldGlow: '#34D399',
          steel: '#64748B',
          darkSlate: '#0F172A',
          offWhite: '#F8FAFC',
          lightSlate: '#F1F5F9',
          borderLight: '#E2E8F0',
          borderDark: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Grotesk"', 'monospace'],
      },
      boxShadow: {
        'industrial': '0 4px 20px -2px rgba(6, 11, 24, 0.08)',
        'industrial-lg': '0 10px 30px -4px rgba(6, 11, 24, 0.16)',
        'industrial-xl': '0 20px 40px -10px rgba(6, 11, 24, 0.25)',
        'glow-amber': '0 0 25px rgba(245, 158, 11, 0.35)',
        'glow-blue': '0 0 25px rgba(14, 165, 233, 0.35)',
        'glow-emerald': '0 0 25px rgba(16, 185, 129, 0.35)',
      }
    },
  },
  plugins: [],
}
