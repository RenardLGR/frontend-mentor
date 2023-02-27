/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index-tailwind.html"],
  theme: {
    extend: {
      colors:{
        darkCyan: 'hsl(158, 36%, 37%)',
        cream: 'hsl(30, 38%, 92%)',
        veryDarkBlue: 'hsl(212, 21%, 14%)',
        darkGrayishBlue: 'hsl(228, 12%, 48%)',
      },
    },
    fontFamily: {
      Montserrat: ['Montserrat, sans-serif'],
      Fraunces: ['Fraunces, sans-serif'],
    },
  },
  plugins: [],
}
