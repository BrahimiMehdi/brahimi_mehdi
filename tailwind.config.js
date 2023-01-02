/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "yellow":"#FFDC60",
        "orange":"#FF7134",
        "blue":"#001E2C",
        "dark-blue":"#001118",
      }
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }),],
}
