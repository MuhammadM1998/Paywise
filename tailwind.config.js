module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },

    extend: {
      screens: {
        '5xs': '340px',
        '4xs': '400px',
        '3xs': '480px',
        '2xs': '560px',
        xs: '560px',
      },

      colors: {
        primary: {
          300: '#E49547',
          200: '#FFB977',
          100: '#E4AD78',
          20: '#FFF5E8',
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

      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },

      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, #E49547 0%, #FFB977 100%)',
        'accent-gradient': 'linear-gradient(90deg, #04363D 0%, #216771 100%)',
      },
    },
  },

  plugins: [require('@vueform/slider/tailwind')],
};
