/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        code: ["'Source Code Pro'", "monospace"],
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: '2rem',
      },
      
    },
  },
  plugins: [],
};
