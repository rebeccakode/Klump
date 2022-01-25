module.exports = {
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        colors: {
            primary: '#00b9ff',
            secondary: '#CD4626',
            tertiary: '#FAD6A0',
            darkblue: '#253655',
            yellow: '#ffa600',   
        },

        

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"), 
  ],
}


