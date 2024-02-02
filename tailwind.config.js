/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors:{
      transparent:"transparent",
      "white": "#ffffff",
      "black": "#000000",
      "nav-bg": "#F8F8F8",
      "blue": "#397FFE",
      "menu-c": "#9CA1AC",
      "gray": "#F4F6FA",
      "purple": "#6988B7",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '1rem',
      },
    },
    extend: {},
  },
  plugins: [],
}