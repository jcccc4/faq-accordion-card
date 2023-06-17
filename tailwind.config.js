/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        ks:[ 'Kumbh Sans', 'sans-serif']
      },
      fontSize:{
        'faq':['32px','40px'],
        question:['13px','16px']
      }
    },
  },
  plugins: [],
}