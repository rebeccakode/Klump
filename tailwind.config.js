module.exports = {
   content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        colors: {
            primary: '#00b9ff',
            secondary: '#CD4626',
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
        }
        

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



