/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#474B60",
        secondary: "#555FB9",
        tertiary: "#757DC6",
        "white-accent": {
          base: "#FFFFFF",
          ghost: "#EEEFF8",
          lavender: "#DDDFF1",
        },
        success: "#32B478",
        error: "#F05247",
      },
      fontFamily: {
        heading: ["Work Sans", ...defaultTheme.fontFamily.sans],
        base: ["Merriweather", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
