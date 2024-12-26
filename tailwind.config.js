/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC9C9",
        secondary: "#5D3434",
        netral: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
