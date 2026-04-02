import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://clearcompass-ai.github.io',
  base: '/baby-gear',
  integrations: [
    starlight({
      title: "V.G.'s Baby Gear",
      sidebar: [
        { label: 'The Product Guide', slug: 'guide' },
        { label: 'The Playbook', slug: 'playbook' },
        { label: 'The Checklist', slug: 'checklist' },
      ],
      head: [
        { tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' } },
      ],
    }),
  ],
});
