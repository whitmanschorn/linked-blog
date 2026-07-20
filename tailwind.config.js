/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: 'Verdana, Geneva, sans-serif',
    },
    extend: {
      colors: {
        link: '#000099',
        visited: '#464646',
      },
    },
  },
  plugins: [],
}
