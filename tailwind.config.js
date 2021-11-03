const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      'blue': 'rgb(174, 203, 230)',
      'background': 'linear-gradient(to right bottom, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))',
    }
  },
  
    fontFamily: {
    logo: ['Megrim'],
  },
},
  
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'),
            require('@tailwindcss/forms'),],
}
