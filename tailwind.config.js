/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      default: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        additional: '#F5721A',
        gray: '#ACACAC'
      }
    }
  },
  plugins: []
};
