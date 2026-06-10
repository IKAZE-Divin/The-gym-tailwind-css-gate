/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.{js,ts}", "!./node_modules"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      screens: {
        'nav-hide': {'max': '1295px'},
      },
    },
  },
  plugins: [],
}

