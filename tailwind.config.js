const colors = require('tailwindcss/colors');

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 1.5s linear infinite',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
