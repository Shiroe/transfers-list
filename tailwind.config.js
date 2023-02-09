// const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-museo)']
      },
      colors: {
        brand: {
          blue: '#2D3B4E',
          green: '#50D8A5',
          'green-dim': '#42C594',
          yellow: '#FFC149',
          sky: '#56A7FA',
          pink: '#F96381',
          violet: '#736BFF',
          gray: '#F4F5F6'
        },
      }
    },
  },
  plugins: [],
}
