module.exports = {
  theme: {
    extend: {
      margin: {
        '35px': '2.188rem',
        '10px': '0.625rem'
      },
      padding: {
        '3px': '0.188rem',
        '6px': '0.375rem',
        '10px': '0.675rem'
      },
      spacing: {
        '240px': '15rem',
        '39px': '2.438rem',
        '165px': '10.333rem',
        '112px': '7rem',  
        '342px': '21.375rem'
      },
      colors: {
        'dark-blue': '#122344',
        'filter-color': '#0A5694'
      },
      fontSize: {
        'mbl-srch-btn': "0.867rem",
        'category-header': "1.067rem",
        'category-lists': "0.867rem",
        'filter-size': '0.933rem'
      },
      borderWidth: {
        '3': '3px'
      },
      screens: {
        '7xl': '1280px',
        '208px': '13rem'
      },
      inset: {
        '1/6': '-.5%',
        '2/6': '16.2%',
        '3/6': '33.33%',
        '4/6': '50%',
        '5/6': '67%',
        '6/6': '84%',
        'active': '-1.675rem'
      },
      maxWidth: {
        '342px': '21.375rem'
      }
    }
  },
  variants: {},

  plugins: [
    require('tailwindcss-pseudo-elements'),

    function ({ addUtilities }) {
      addUtilities(
        {
          '.empty-content': {
            content: "''"
          }
        },
        ['before', 'after', 'first-letter']
      )
    }
  ]
}
