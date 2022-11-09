/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        customBlue: "hsla(228, 38%, 23%, 1)",
        customOrange: "hsla(12, 88%, 59%, 1)",
        customBlack: "hsla(232, 12%, 13%, 1)",
        customLightPink: "hsla(13, 100%, 96%, 1)",
        customWhite: "hsla(9, 54%, 97%, 1)",
        // customOrangeAccent: "#F3603C",
      },
      fontFamily: {
        beVietnam: ["Be Vietnam Pro", "serif"],
      },
    },
  },
  plugins: [],
};
