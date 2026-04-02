import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://hello.gadd.am',
  base: '/',
  integrations: [tailwind()],
});
