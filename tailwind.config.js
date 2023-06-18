/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ks: ["Kumbh Sans", "sans-serif"],
      },
      fontSize: {
        faq: ["32px", "40px"],
        question: ["13px", "16px"],
        'question-lg': ["14px", "17px"],
        answers: ["12px", "18px"],
      },
    },
  },
  plugins: [],
};
