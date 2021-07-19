module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#0C203B',
      'primary-light': '#132641',

      'info-light': '#3353B4'
    }),

    borderColor: (theme) => ({
      ...theme('colors'),
      primary: '#0C203B',
      'primary-light': '#132641',

      'info-light': '#3353B4'
    }),

    gradientColorStops: (theme) => ({
      ...theme('colors'),
      'info-light': '#3353B4'
    })
  },
  variants: {
    extend: {}
  },
  plugins: []
}
