/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsm: "375px",
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      colors: {
        white: "#FFFFFF",
        orange: {
          DEFAULT: "#D87D4A",
          light: "#fbaf85",
        },
        gray: {
          DEFAULT: "#F1F1F1",
          light: "#FAFAFA",
        },

        black: "#000000",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
