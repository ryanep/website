/* eslint-disable unicorn/prefer-module */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  darkMode: "class",
  plugins: [],
  theme: {
    extend: {
      colors: {
        "primary": "#a25656",
        "primary-dark": "#3c1f1f",
      },
    },
  },
};
