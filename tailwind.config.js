/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#2F327D",
        secondary: "#FF8A00",
        dark: "#222224",
        lighter: "#696984",
        light: "#FEFAF5",
        muted: "#9C9C9C",
        yellow: "#FBC400",
        barrier: "#C2C2C2",
        lightest: "#80819A"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
