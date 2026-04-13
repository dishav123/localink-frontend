/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "loader-bar": "loaderBar 1.4s ease-in-out infinite",
        dot1: "dotBlink 1.2s infinite",
        dot2: "dotBlink 1.2s 0.2s infinite",
        dot3: "dotBlink 1.2s 0.4s infinite",
      },
      keyframes: {
        loaderBar: {
          "0%": { marginLeft: "0%", width: "30%" },
          "50%": { marginLeft: "55%", width: "45%" },
          "100%": { marginLeft: "0%", width: "30%" },
        },
        dotBlink: {
          "0%, 80%, 100%": { opacity: "0.2" },
          "40%": { opacity: "1" },
        },
        colors: {
          primary: {
            DEFAULT: "#F3752B",
            light: "#FF9C66",
            dark: "#C94B1A",
          },
        },
      },
    },
    plugins: [],
  },
};
