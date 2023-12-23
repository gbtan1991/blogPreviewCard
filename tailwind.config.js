/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "hsl(47, 88%, 63%)",
        grey: "hsl(0, 0%, 50%)",
        black: "hsl(0, 0%, 7%)",
      },
    },
  },
  plugins: [],
};
