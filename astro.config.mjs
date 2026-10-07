// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Static site. No accounts, no payments, no realtime data — SSG is correct here.
export default defineConfig({
  // The one canonical origin. Vercel 308s the old domain and the
  // bare .com here; every canonical, sitemap and JSON-LD URL is built from it.
  site: 'https://www.drsyreetamcclain.com',

  // Internal links are written without a slash (/privacy). 'never' makes the
  // canonical tags and the sitemap say the same URL the links do.
  trailingSlash: 'never',

  // Off so it never composites into full-page screenshot captures.
  devToolbar: { enabled: false },

  // React is registered for ISLANDS ONLY. No existing .astro section is
  // converted; the ten sections stay as they are. Registering the
  // integration adds no runtime to a page that mounts no island —
  // verified by capture at all thirteen widths with the island removed.
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
