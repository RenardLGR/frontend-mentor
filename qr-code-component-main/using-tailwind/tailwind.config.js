/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index-tailwind.html"],
  theme: {
    screens: {
      ...defaultTheme.screens,
      xl: '1440px'
    },
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        lightGray: 'hsl(212, 45%, 89%)',
        grayishBlue: 'hsl(220, 15%, 55%)',
        darkBlue: 'hsl(218, 44%, 22%)',
      },
    },
    fontFamily: {
      Outfit: ["Outfit, sans-serif"],
    },
  },
  plugins: [],
}
