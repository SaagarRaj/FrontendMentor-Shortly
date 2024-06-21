/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary-100":"hsl(180, 66%, 49%)",
        "primary-200":"hsl(257, 27%, 26%)",
        "secondary":"hsl(0, 87%, 67%)",
        "gray":"hsl(0, 0%, 75%)",
        "grayish-voilet":"hsl(257, 7%, 63%)",
        "very-dark-blue":"hsl(255, 11%, 22%)",
        "very-dark-voilet":"hsl(260, 8%, 14%)",
      }
    },
   fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    screens:{
      md:"1440px",
      sm:"375px",
    }
  },
  plugins: [],
};
