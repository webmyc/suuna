/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'suuna-bg': '#0b1612',
        'suuna-accent': '#d4c372',
        'suuna-accent-muted': '#998f5a',
        'suuna-text-light': '#f5f5f0',
        'suuna-text-muted': '#cfcfc4',
        'suuna-forest': '#1d352b',
        'suuna-sand': '#ebe4d2',
      },
      fontFamily: {
        'suuna': ['Architype Bayer-type W90', 'sans-serif'],
        'serif': ['PT Serif', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'breathing': 'breathing 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
