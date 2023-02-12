// const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      fontSize: {
        title: ['22px', '26px'],
        xxs: ['10px', '12px'],
        xs: ['11px', '13px'],
        sm: ['12px', '14px'],
        regular: ['14px', '17px'],
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
          gray: '#F4F5F6',
          'gray-dark': '#9098A1',
        },
      },
    },
  },
  plugins: [],
};
