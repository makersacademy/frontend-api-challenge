/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d9bf0",
        secondary: "#536471",
        lightblue: "#f7f9f9",
        twred: "#f91880",
      },
    },
  },
  plugins: [],
};
