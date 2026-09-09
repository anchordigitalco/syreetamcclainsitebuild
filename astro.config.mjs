// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// Static site. No accounts, no payments, no realtime data — SSG is correct here.
export default defineConfig({
  // Off so it never composites into full-page screenshot captures.
  devToolbar: { enabled: false },

  // React is registered for ISLANDS ONLY. No existing .astro section is
  // converted; the ten sections stay as they are. Registering the
  // integration adds no runtime to a page that mounts no island —
  // verified by capture at all thirteen widths with the island removed.
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
