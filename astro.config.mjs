import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://enmanuelalx.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
        },
      },
    }),
    robotsTxt(),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});