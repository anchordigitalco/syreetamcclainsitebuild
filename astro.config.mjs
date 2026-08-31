// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static site. No accounts, no payments, no realtime data — SSG is correct here.
export default defineConfig({
  // Off so it never composites into full-page screenshot captures.
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
