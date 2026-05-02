/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(10px, -10px)" },
        },

        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      animation: {
        float: "float 5s ease-in-out infinite",

        marquee: "marquee 35s linear infinite",
      },
    },
  },
  plugins: [],
};