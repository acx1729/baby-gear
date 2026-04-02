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
          bg: '#fbfbfb',
          border: '#e8e8e8',
          active: '#2563eb',
          hover: '#f3f4f6',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1a1a1a',
            a: { color: '#2563eb', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } },
            'h1,h2,h3,h4': { color: '#111', fontWeight: '600' },
            h1: { fontSize: '1.875rem', marginTop: '0' },
            h2: { fontSize: '1.5rem', marginTop: '2.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e8e8e8' },
            h3: { fontSize: '1.2rem', marginTop: '2rem' },
            blockquote: { borderLeftColor: '#2563eb', backgroundColor: '#f8fafc', padding: '1rem 1.25rem', fontStyle: 'normal' },
            code: { backgroundColor: '#f3f4f6', padding: '0.15rem 0.35rem', borderRadius: '0.25rem', fontWeight: '400', fontSize: '0.875em' },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            strong: { color: '#111' },
            hr: { borderColor: '#e8e8e8' },
            table: { fontSize: '0.9rem' },
            'thead th': { borderBottomColor: '#d1d5db' },
            'tbody td': { borderBottomColor: '#f3f4f6' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
