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
        brand: {
          blue: '#1870B0',      // Primary Corporate Blue from BSA Logo
          blueHover: '#135B91', // Darker hover Blue
          blueLight: '#EBF4FA', // Subtle Blue tint for tags/accents
          navy: '#182850',      // Primary Deep Navy from BSA Logo
          navyDark: '#0F1B38',  // Deeper Navy for dark mode surfaces
        },
        navy: {
          950: '#0F172A',       // Sober Slate-Navy (Dark mode page bg)
          900: '#162036',       // Elevated card dark bg
          850: '#1E293B',       // Subtle surface dark
          800: '#27354F',
          700: '#334155',
        },
      },
      fontFamily: {
        sans: ['Inter', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}
