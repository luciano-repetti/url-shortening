/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: {
            '50': '#f0fdfc',
            '100': '#cafdf8',
            '200': '#96f9f2',
            '300': '#59efea',
            '400': '#25d4d4',
            '500': '#0fbabd',
            '600': '#099298',
            '700': '#0c7379',
            '800': '#0f5b60',
            '900': '#114c50',
            '950': '#032b30',
        },
          darkViolet: "hsl(257, 27%, 26%)",
        },
        secondary: {
          red: "hsl(0, 87%, 67%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          gray: "hsl(0, 0%, 75%)",
          grayLight: "hsl(230, 25%, 95%)",
          grayishViolet: "hsl(257, 7%, 63%)",
          veryDarkBlue: "hsl(255, 11%, 22%)",
          veryDarkViolet: "hsl(260, 8%, 14%)",
        },
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      fontSize: {
        body: "18px",
      },
    },
  },

  plugins: [],
}