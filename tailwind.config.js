// @ts-check

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  darkMode: "media",
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

export default tailwindConfig;
