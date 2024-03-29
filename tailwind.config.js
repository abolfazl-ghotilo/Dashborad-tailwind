/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    colors:{
      transparent:"transparent",
      "white": "#ffffff",
      "black": "#000000",
      "nav-bg": "#F8F8F8",
      "blue": "#397FFE",
      "red": "#FF82AC",
      "menu-c": "#9CA1AC",
      "gray": "#F4F6FA",
      "purple": "#6988B7",
      "nav-dark": "#161616",
      "light-gray": "#718EBF",
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