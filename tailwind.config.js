module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },

    extend: {
      screens: {
        '2xs': '320px',
        xs: '480px',
      },

      colors: {
        primary: {
          100: '#E4AD78',
          20: '#FFFBF6',
        },
        accent: {
          100: '#04363D',
          20: '#216771',
        },
        gray: {
          100: '#363940',
          80: '#676767',
          40: '#999999',
        },
      },

      fontFamily: {},

      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, #E49547 0%, #FFB977 100%)',
        'accent-gradient': 'linear-gradient(90deg, #04363D 0%, #216771 100%)',
      },

      boxShadow: {},
    },
  },

  plugins: [],
};
