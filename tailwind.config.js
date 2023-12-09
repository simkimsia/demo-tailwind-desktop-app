/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#1A1629',
        'light-blue': '#F2F1F4',
        'blue': {
          60 : 'rgba(26, 22, 41, 0.06)',
        },
        'gray': {
          40 : '#E6E5E9',
          70 : '#77787E',
        },
      },
      fontSize: {
        'xxs': '10px',
      },
      backgroundImage: {
        'button-pattern': "linear-gradient(90deg, rgba(242, 241, 244, 0.00) -42.65%, #F2F1F4 24.22%)",
      },
      width: {
        'button': '183px',
      },
      maxWidth: {
        'modal': '930px',
      },
      maxHeight: {
        sidebar: 'calc(100vh - 81px)',
      },
      boxShadow: {
        tooltip: '0px 1px 6px 0px rgba(0, 0, 0, 0.11);'
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
      addComponents({
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none'
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        }
      })
    }),
  ]
}
