import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://acx1729.github.io',
  base: '/baby-gear',
  integrations: [tailwind()],
});
