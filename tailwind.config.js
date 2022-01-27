const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        fontFamily: {
          sans: ['Averta', 'Avenir W02', 'Avenir', ...defaultTheme.fontFamily.sans],
          serif: ['Averta', ...defaultTheme.fontFamily.serif],
        },
        
        colors: {
            primary: '#00b9ff',
            secondary: '#5d7079',
            accent: '#00b9ff',
            neutral: '#f2f5f7',
            tertiary: '#FAD6A0',
            darkblue: '#253655',
            darkbluetitle: '#37517e',
            yellow: '#ffa600',
            ashgray: '#d3d5d8', 
            btnsucess: '#2ed06e',
            body: '#5d7079',
        },
       
        fontSize: {
          '17rem': '1.75rem',
          '26rem': '2.625rem',
          'h3'   : '1.375rem',
        },

        padding: {
          '6.25rem': '6.25rem',
        },

        lineHeight: {
          'one-height': '1.14285714',
           'md-height': '1.36363636',
        },
        animation: {
          'spin-slow': 'pulsing-ring 1800ms cubic-bezier(.2,.6,.35,1) infinite',
        },
        keyframes: {
          'pulsing-ring': {
            '100%': { transform: 'translate(50%,50%) scale(1.5)', opacity:0 },
          }
        },
        

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"), 
    require('tw-elements/dist/plugin')
  ],
}



