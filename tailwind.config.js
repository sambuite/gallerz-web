module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E29E90',
          100: '#DB8574',
          200: '#D87966',
          300: '#D46D58',
          400: '#D0614A',
          500: '#CD533B',
          600: '#B5452F',
          700: '#973927',
          800: '#782E1F',
          900: '#5A2217',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
