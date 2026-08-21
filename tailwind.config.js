/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f8f4ec',
        warmwhite: '#fdfbf6',
        terracotta: '#bf6a4b',
        terracottaDark: '#a2543a',
        sage: '#8a9a7b',
        sageDark: '#6f7f61',
        mutedblue: '#6b8299',
        warmbrown: '#5b463a',
        ink: '#2f2822',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 10px rgba(91, 70, 58, 0.08), 0 1px 3px rgba(91, 70, 58, 0.06)',
        card: '0 6px 24px rgba(91, 70, 58, 0.10)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
