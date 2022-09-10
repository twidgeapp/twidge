const {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
} = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx,js}"],
  theme: {
    extend: {
      colors: {
        ...gray,
        ...blue,
        ...red,
        ...green,
        ...grayDark,
        ...blueDark,
        ...redDark,
        ...greenDark,
      },
    },
  },

  plugins: [],
};
