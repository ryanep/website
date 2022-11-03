/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#a25656",
        "primary-dark": "#3c1f1f",
      },
    },
  },
  plugins: [],
};
