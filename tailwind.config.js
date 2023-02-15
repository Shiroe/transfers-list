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
        'title-sm': ['15px', '18px'],
        xxs: ['10px', '12px'],
        xs: ['11px', '13px'],
        sm: ['12px', '14px'],
        'sm-extra': ['12px', '18px'],
        regular: ['14px', '17px'],
        'regular-extra': ['14px', '21px'],
        md: ['15px', '18px'],
        'md-extra': ['15px', '24px'],
        lg: ['18px', '22px'],
        'lg-extra': ['18px', '26px'],
        'mobile-md': ['16px', '24px'],
        'mobile-lg': ['20px', '24px'],
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
