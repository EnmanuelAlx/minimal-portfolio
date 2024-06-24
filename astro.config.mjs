import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es'],
      },
    }),
    robotsTxt(),
  ],
});
