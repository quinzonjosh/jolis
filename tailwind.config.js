/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#474B60",
        "secondary": "#555FB9",
        "tertiary": "#757DC6",
        "white-accent":{
          "base": "#FFFFFF",
          "ghost": "#EEEFF8",
          "lavender": "#DDDFF1"
        },
        "success": "#32B478",
        "error": "#F05247"
      },
    },
  },
  plugins: [],
};
