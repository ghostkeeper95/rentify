/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#63B0CD',
          light: '#9CD5E6',
          dark: '#306B83',
        },
        background: {
          light: '#F5FBEF',
          dark: '#1f2937',
        },
        text: {
          primary: '#111827',
          secondary: '#6b7280',
        },
        pink: {
          100: '#FF748B',
          500: '#F72C5B',
        },
      },
      fontFamily: {
        sans: ['Comfortaa', 'Arial', 'sans-serif'],
      },
      width: {
        '4/5': '80%',
        '3/4': '75%',
        full: '100%',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('@tailwindcss/line-clamp')],
}
