import { defineConfig } from 'astro/config';

// Produktiv-Domain ist noch offen (docs/entscheidungen.md). Bis dahin Vercel-Preview;
// zum Umstellen beim Build SITE_URL setzen, z. B. SITE_URL=https://www.example.de
export default defineConfig({
  site: process.env.SITE_URL || 'https://city-concepts-landingpages.vercel.app',
  srcDir: './src',
  publicDir: './public',
  build: { format: 'directory' },
});
