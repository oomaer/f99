module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        '20px': '20px',
        '50px': '50px',
       },
       colors:{
        'custom-green': '#2ecc71',
        'custom-d-green': '#27ae60',
        'graytext': '#999DA2',
      },
      backgroundColor: theme => ({
        'primary': '#171c21',
        'secondary': '#272a2e',
        'danger': '#e3342f',
        'lowgreen': 'rgba(46,204,113,.2)',
        'dark': '#15191e',
      }),
       minWidth: {
        '100px': '100px',
      },
      
      maxWidth: {
        '500px': '500px',
        '800px': '800px',
        '1300px': '1300px',
        '1700px': '1700px',
        '70p': '70%',
      },
    },
    fontFamily: {
      'sans': ['arial', 'helvetica neue', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover, group-hover'],
    },
  },
  plugins: [],
}
