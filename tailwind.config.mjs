/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      colors: {
        sidebar: {
          bg: '#faf8f6',
          border: '#e8e2dc',
          active: '#c2652a',
          hover: '#f3eeea',
        },
        accent: {
          DEFAULT: '#c2652a',
          light: '#f5ece4',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            fontSize: '1.0625rem',
            lineHeight: '1.7',
            color: '#3d3530',
            p: { marginTop: '0.6em', marginBottom: '0.6em' },
            'p + p': { marginTop: '0.5em' },
            a: { color: '#b05a24', textDecoration: 'none', fontWeight: '500', '&:hover': { textDecoration: 'underline', color: '#8f4a1d' } },
            'h1,h2,h3,h4': { color: '#1a1714', fontWeight: '700', letterSpacing: '-0.015em' },
            h1: { fontSize: '1.85rem', marginTop: '0', marginBottom: '0.4em', lineHeight: '1.25' },
            h2: { fontSize: '1.35rem', marginTop: '1.6em', marginBottom: '0.5em', paddingBottom: '0.3em', borderBottom: '1px solid #e8e2dc' },
            h3: { fontSize: '1.1rem', marginTop: '1.2em', marginBottom: '0.35em' },
            'ul,ol': { marginTop: '0.4em', marginBottom: '0.4em', paddingLeft: '1.25em' },
            li: { marginTop: '0.15em', marginBottom: '0.15em' },
            'li p': { marginTop: '0.2em', marginBottom: '0.2em' },
            'li::marker': { color: '#c4b5a5' },
            blockquote: {
              borderLeftColor: '#d4a574',
              borderLeftWidth: '3px',
              backgroundColor: '#faf7f4',
              padding: '0.6rem 1rem',
              fontStyle: 'normal',
              borderRadius: '0 0.4rem 0.4rem 0',
              marginTop: '0.6em',
              marginBottom: '0.6em',
              color: '#4a3f35',
            },
            'blockquote p': { marginTop: '0.25em', marginBottom: '0.25em' },
            code: { backgroundColor: '#f5f0eb', padding: '0.15rem 0.4rem', borderRadius: '0.25rem', fontWeight: '400', fontSize: '0.9em', color: '#6b4c2a' },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            strong: { color: '#1a1714', fontWeight: '600' },
            hr: { borderColor: '#e8e2dc', marginTop: '1.2em', marginBottom: '1.2em' },
            table: { fontSize: '0.925rem' },
            'thead th': { borderBottomColor: '#d9d1c7', fontWeight: '600', color: '#4a3f35', paddingTop: '0.4rem', paddingBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'none' },
            'tbody td': { borderBottomColor: '#f0ebe5', paddingTop: '0.4rem', paddingBottom: '0.4rem' },
            'tbody tr:last-child td': { borderBottom: 'none' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
