/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index-tailwind.html"],
  theme: {
    screens: {
      ...defaultTheme.screens,
      from420: '420px',
    },
    extend: {
      colors:{
        veryDarkBlueBodyBg: 'rgb(13, 26, 45)',
        veryDarkBlueOuterBg: 'rgb(12, 23, 41)',
        veryDarkBlueInnerBg: 'rgb(20, 39, 63)',
        cyanHalfedOpBg: 'rgb(0, 255, 255, 0.5)',
        cyanTxt: 'hsl(178, 100%, 50%)',
        softBlueTxt: 'hsl(215, 51%, 70%)',
        softBlueTxt: 'hsl(215, 51%, 70%)',
        veryDarkBlueLine: 'hsl(215, 32%, 27%)'
      },
      borderRadius: {
        configed: '50px',
      }
    },
    fontFamily: {
      Outfit: ['Outfit, sans-serif'],
    },
  },
  plugins: [],
}
