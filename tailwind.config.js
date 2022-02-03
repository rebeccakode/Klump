const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}' ],
  theme: {
      extend: {
        fontFamily: {
          sans: ['Averta', 'Avenir W02', 'Avenir', ...defaultTheme.fontFamily.sans],
          serif: ['Averta', ...defaultTheme.fontFamily.serif],
        },

        backgroundImage: {
          'bg-abroad': "url('/images/abroad_section.jpeg')",
          'shopping': "url('/images/shopping.jpg')",
          'receive_section': "url('/images/receive_section.jpeg')",
          'property_section': "url('/images/property_section.jpeg')",
          'customer_support': "url('/images/customer_support.jpg')",
          },

          container: {
            center: true,
            padding: {
              DEFAULT: '1rem',
              sm: '1.5rem',
              md: '1.5rem',
              lg: '2rem',
              xl: '2rem',
              '2xl': '2rem',
            },
            screens: {
              sm: "576px",
              md: "768px",
              lg: "992px",
              xl: "1200px",
              '2xl': '1400px',
            }
          },

          margin:{
            'xl':'3.5rem',
          },

          gap: {
            '16': '6rem',
          },
         
          width: {
            '12': '3rem',
            '420': '26.25rem',
          },
        colors: {
            primary: '#00b9ff',
            secondary: '#5d7079',
            neutral: '#f2f5f7',
            darkblue: '#253655',
            darkbluetitle: '#37517e',
            yellow: '#ffa600',
            ashgray: '#d3d5d8', 
            btnsucess: '#2ed06e',
        },
       
        fontSize: {
          '17rem': '1.75rem',
          '26rem': '2.625rem',
          'h3'   : '1.375rem',
        },

        padding: {
          '6.25rem': '6.25rem',
          'pl' : '6rem',
          '16rem': '16rem'

        },

        inset: {
           '43rem': '43rem',
           '3rem' : '3rem',
           '6rem' : '6rem',
            '0': '0'
        },

        lineHeight: {
          'one-height': '1.14285714',
           'md-height': '1.36363636',
        },
        animation: {
          'spin-slow': 'pulsing-ring 1800ms cubic-bezier(.2,.6,.35,1) infinite',
           'arrow-right': ' transition: transform .25s cubic-bezier(0,.94,.62,1);',
           'rotate': 'transform: rotate(90deg);',
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
    require('tw-elements/dist/plugin'),
  ],
}



