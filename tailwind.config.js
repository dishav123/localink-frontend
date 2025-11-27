/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F3752B",  
          light: "#FF9C66",    
          dark: "#C94B1A"     
        }
      }
    },
  },
  plugins: [],
};
