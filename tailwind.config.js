/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sen: ["Sen"],
      },
      colors: {
        "primary-blue": "#0a1930",
        "main-heading-color": "#cedbfb",
        "secondary-font-color": "#8893b3",
        "aqua-color": "#58c7b7",
        // "white-variant": "#F9F9F9",
        "white-variant": "#faf4ef",
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
