import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://suuna.ro',
  integrations: [
    react(),
    tailwind()
  ],
  image: {
    domains: ["public-files.gumroad.com"],
    remotePatterns: [{
      protocol: "https",
      hostname: "public-files.gumroad.com",
    }],
  },
  build: {
    assets: 'assets'
  }
});
