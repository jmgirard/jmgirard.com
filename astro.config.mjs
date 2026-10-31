// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jmgirard.com',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
  // The full record moved to the lab site; keep old links working.
  redirects: {
    '/publications': 'https://affcom.ku.edu/publications.html',
    '/software': 'https://affcom.ku.edu/resources.html',
    '/datasets': 'https://affcom.ku.edu/resources.html#datasets',
  },
});
