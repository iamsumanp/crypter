/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // container: {
    //   center: true,
    // },
    screens: {
      // DEFAULT: "1rem",

      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        dark: "#1C1E21",
        bg_dark: "#18191A",
        cyan: "rgba(75,192,192,1)",
      },
    },
  },
  plugins: [],
};
