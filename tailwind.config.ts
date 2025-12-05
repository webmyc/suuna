import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // SUUNA Spec Colors - Primary
        forest: {
          DEFAULT: '#1A3A2E',
          dark: '#1A3A2E',
          light: '#7BA587',
        },
        sage: '#4A7C59',
        moss: '#7BA587',
        // Warm Accents
        terracotta: '#D4785C',
        honey: '#E8A87C',
        clay: '#A45D3F',
        // Neutrals
        bone: '#FAF8F5',
        stone: '#E8E5E0',
        charcoal: '#2C2C2C',
        ash: '#6B6B6B',
        // Legacy compatibility - map to new system
        monk: {
          bg: 'rgb(var(--monk-bg) / <alpha-value>)',
          surface: 'rgb(var(--monk-surface) / <alpha-value>)',
          text: {
            primary: 'rgb(var(--monk-text-primary) / <alpha-value>)',
            secondary: 'rgb(var(--monk-text-secondary) / <alpha-value>)',
          },
          accent: 'rgb(var(--color-accent) / <alpha-value>)',
          border: 'rgb(var(--monk-border) / <alpha-value>)',
        },
      },
      fontFamily: {
        // SUUNA Typography - Inter (body) + Cormorant Garamond (headings)
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'], // For headings
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        // Logo font only
        suuna: ['"Architype Bayer-type W90"', 'sans-serif'],
        // Legacy compatibility
        spartan: ['"Inter"', 'system-ui', 'sans-serif'], // Map to Inter
      },
      borderRadius: {
        'xl': '1rem',      // Soft geometric
        '2xl': '1.5rem',   // Monkshub standard
        '3xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
        md: '12px', // Glassmorphism standard
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;
