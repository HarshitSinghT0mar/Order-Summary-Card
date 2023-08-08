/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-pattern": "url('./images/pattern-background-desktop.svg')",
        "mobile-pattern": "url('./images/pattern-background-mobile.svg')",
      },
    },
  },
  plugins: [],
};
