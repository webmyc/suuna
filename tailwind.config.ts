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
        // SUUNA Brand Colors - Earthy & Warm Palette
        forest: {
          DEFAULT: '#4A7C59', // Sage Green (primary)
          dark: '#1A3A2E',    // Deep Forest (primary dark)
          light: '#7BA587',   // Moss (primary light)
        },
        sage: '#4A7C59',
        moss: '#7BA587',
        terracotta: '#D4785C', // Accent warm
        honey: '#E8A87C',      // Accent light
        clay: '#A45D3F',       // Accent dark
        bone: '#FAF8F5',       // Background light
        stone: '#E8E5E0',      // Background mid
        charcoal: '#2C2C2C',   // Text dark
        ash: '#6B6B6B',        // Text muted

        // Dark mode colors
        dark: {
          bg: '#0D1B22',
          surface: '#1E2B38',
          text: '#FAF8F5',
          muted: '#B8C5D0',
        },

        // Legacy/shadcn compatibility
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#4A7C59',
          foreground: '#FAF8F5',
        },
        secondary: {
          DEFAULT: '#E8E5E0',
          foreground: '#2C2C2C',
        },
        accent: {
          DEFAULT: '#D4785C',
          foreground: '#FAF8F5',
        },
        muted: {
          DEFAULT: '#E8E5E0',
          foreground: '#6B6B6B',
        },
      },
      borderRadius: {
        none: '0',
        sm: '0.25rem',   // 4px - subtle
        DEFAULT: '0.375rem', // 6px - default
        md: '0.5rem',    // 8px - medium
        lg: '0.75rem',   // 12px - large
        xl: '1rem',      // 16px - cards
        '2xl': '1.5rem', // 24px - special
        full: '9999px',  // pills
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        // Legacy fonts (keep for backwards compatibility)
        spartan: ['"League Spartan"', 'system-ui', 'sans-serif'],
        serif: ['"PT Serif"', 'Georgia', 'serif'],
        suuna: ['"Architype Bayer-type W90"', 'sans-serif'],
      },
      spacing: {
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '3': '0.75rem',   // 12px
        '4': '1rem',      // 16px
        '6': '1.5rem',    // 24px
        '8': '2rem',      // 32px
        '12': '3rem',     // 48px
        '16': '4rem',     // 64px
        '24': '6rem',     // 96px
        '32': '8rem',     // 128px
      },
      fontSize: {
        'xs': '0.75rem',    // 12px
        'sm': '0.875rem',   // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
        '6xl': '3.75rem',   // 60px
      },
      backdropBlur: {
        xxs: '2px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
