/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index-tailwind.html"],
  theme: {
    extend: {
      colors:{
        purpleBlue: 'rgb(103, 67, 255)',
        royalBlue: 'rgb(49, 44, 235)',
        circleVioletBlue: 'hsla(256, 72%, 46%, 1)',
        circlePersianBlue: 'hsla(241, 72%, 46%, 0)',
        textColorLightFuschia: 'rgb(214, 207, 255)',
        textColorLightFuschiaFadier: 'rgba(214, 207, 255, 0.5)',
      }
    },
    fontFamily: {
      Grotesk: ['Hanken Grotesk, sans-serif'],
    },
  },
  plugins: [],
}
