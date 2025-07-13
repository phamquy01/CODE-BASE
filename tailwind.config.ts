import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        beVietnam: ['var(--font-beVietnam)', 'sans-serif'],
      },
      colors: {
        brand: '#3b82f6',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
