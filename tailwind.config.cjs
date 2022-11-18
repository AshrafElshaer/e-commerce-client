/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '375px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        orange: "#D87D4A",
        "light-orange": "#fbaf85",
        gray: "#F1F1F1",
        "light-gray": "#FAFAFA",
        white: "#FFFFFF",
        black: "#000000",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
    
  },
  plugins: [],
};
