/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index-tailwind.html"],
  theme: {
    screens: {
      ...defaultTheme.screens,
      from400: '400px',
      from450: '450px',
      from500: '500px'
    },
    extend: {
      colors:{
        bgBody: 'rgb(20, 21, 25)',
        bgRadialTop: 'rgb(35, 40, 50)',
        bgRadialbottom: 'rgb(23, 29, 37)',
        bgBlueCircles: 'rgb(38, 47, 56)',
        bgBlueCirclesHover: 'rgb(124, 136, 152)',
        bgOrange: 'hsl(25, 97%, 53%)',
        textOrangeFaded: 'hsla(25, 97%, 53%, 0.8)',
        textWhite: 'rgba(255, 255, 255, 0.9)',
        textWhiteFaded: 'rgba(255, 255, 255, 0.5)',
      },
      scale: {
        '140': '1.40',
      }
    },
    letterSpacing: {
      superwidest: '0.2rem'
    },
    fontFamily: {
      Overpass: ['Overpass, sans-serif'],
    },
  },
  plugins: [],
}
