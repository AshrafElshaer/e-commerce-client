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
          dark: "#4C4C4C",
        },

        black: "#000000",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "hero-mobile": "url('/src/assets/home/mobile/image-header.jpg')",
        "hero-tablet": "url('/src/assets/home/tablet/image-header.jpg')",
        "hero-desktop": "url('/src/assets/home/desktop/image-hero.jpg')",
      },
      backgroundSize: {
        "100%": "100%",
        none: "0",
      },
      
    },
  },
  plugins: [],
};
