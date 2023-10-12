/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#1A2533",
        primaryLight: "#F9F9F9",
        primaryPurple: "#C95FF4",
        primaryGreen: "#84ECA0",
        secondaryOrange: "#FC6535",
        secondaryYellow: "#F8CB2E",
        secondaryBlue: "#87C2FD",
        secondaryPink: "#FD7DA6",
        systemDark: "#AEAEAE",
        systemLight: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
