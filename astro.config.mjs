import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://suuna.ro',
  integrations: [
    react(),
    tailwind(),
    mdx()
  ],
  vite: {
    build: {
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'react'
              }
              if (id.includes('framer-motion')) {
                return 'motion'
              }
              return 'vendor'
            }
          }
        }
      }
    }
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
