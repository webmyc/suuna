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
        // Monkshub Semantic Palette
        monk: {
          bg: '#FAFAFA',       // Canvas-Primary
          surface: '#FFFFFF',  // Canvas-Secondary
          text: {
            primary: '#080808',   // Headings
            secondary: '#525252', // Body
          },
          accent: '#146EF5',   // Brand Accent (Electric Blue)
          border: '#E5E5E5',   // Subtle dividers
        },
        // Status Colors
        status: {
          success: '#1DB954',
        },
        // Keeping legacy colors for backward compatibility during migration if needed, 
        // but re-mapping where possible or keeping distinct for specific components not yet updated.
        forest: {
          DEFAULT: '#4A7C59',
          dark: '#1A3A2E',
          light: '#7BA587',
        },
        sage: '#4A7C59',
        moss: '#7BA587',
        terracotta: '#D4785C',
        honey: '#E8A87C',
        clay: '#A45D3F',
        bone: '#FAF8F5',
        stone: '#E8E5E0',
        charcoal: '#2C2C2C',
        ash: '#6B6B6B',
      },
      fontFamily: {
        // Monkshub Typography
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'], // Unifying display font for modern look
        body: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        // Legacy fonts
        spartan: ['"League Spartan"', 'system-ui', 'sans-serif'],
        serif: ['"PT Serif"', 'Georgia', 'serif'],
        suuna: ['"Architype Bayer-type W90"', 'sans-serif'],
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
