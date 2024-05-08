const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'jungle-green': {
        '50': '#effaf5',
        '100': '#d8f3e6',
        '200': '#b4e6d1',
        '300': '#83d2b5',
        '400': '#44a786',
        '500': '#2d9c7a',
        '600': '#1e7d62',
        '700': '#186450',
        '800': '#155041',
        '900': '#124237',
        '950': '#09251f',
      },
      'lavender-purple': {
        '50': '#f9f7fb',
        '100': '#f3f1f6',
        '200': '#e9e4f0',
        '300': '#d8cfe3',
        '400': '#c2b3d2',
        '500': '#ab94be',
        '600': '#a084b2',
        '700': '#876899',
        '800': '#715780',
        '900': '#5d486a',
        '950': '#3d2f46',
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

