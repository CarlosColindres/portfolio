module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      darkGreen: '#339989',
      bgColor: '#FFFAFB',
      lightGreen: '#7DE2D1',
      darkGray: '#2B2C28',
      circleGreen: '#C2EFE7',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

