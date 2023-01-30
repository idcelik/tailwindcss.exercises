/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", 
  content: ["./src/**/*.html"],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        idcelik: "#32445a",
        twitter: "#1C9CEB",
      },
      spacing: {
        15: "3.75rem",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [],
};
