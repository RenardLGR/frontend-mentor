/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index-tailwind.html"],
  theme: {
    extend: {
      colors:{
        boxShadowBlue: 'rgba(0, 0, 160, 0.2)',
        purpleBlue: 'rgb(103, 67, 255)',
        royalBlue: 'rgb(49, 44, 235)',
        circleVioletBlue: 'hsla(256, 72%, 46%, 1)',
        circlePersianBlue: 'hsla(241, 72%, 46%, 0)',
        textColorLightFuschia: 'rgb(214, 207, 255)',
        textColorLightFuschiaFadier: 'rgba(214, 207, 255, 0.5)',
        buttonNSummaryh2: 'hsl(224, 30%, 27%)',
        textOf100Score: 'rgb(126, 133, 139)',
        bgCardReaction: 'hsla(0, 100%, 67%, 0.1)',
        textCardReaction: 'hsl(0, 100%, 67%)',
        bgCardMemory: 'hsla(39, 100%, 56%, 0.1)',
        textCardMemory: 'hsl(39, 100%, 56%)',
        bgCardVerbal: 'hsla(166, 100%, 37%, 0.1)',
        textCardVerbal: 'hsl(166, 100%, 37%)',
        bgCardVisual: 'hsla(234, 85%, 45%, 0.1)',
        textCardVisual: 'hsl(234, 85%, 45%)',
      },
      boxShadow: {
        configedMobile: '0 30px 100px rgba(0, 0, 160, 0.2)',
        configed: '30px 30px 100px rgba(0, 0, 160, 0.2)',
      },
      borderRadius: {
        configed: '30px',
      }
    },
    fontFamily: {
      Grotesk: ['Hanken Grotesk, sans-serif'],
    }
  },
  plugins: [],
}
