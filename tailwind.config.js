module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
