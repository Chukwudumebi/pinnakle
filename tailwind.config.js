/**@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "gray-20": "#f7fafc",
        "gray-20": "#F5F5F5",
        // "gray-50": "#e2e8f0",
        "gray-50": "#E0E0E0",
        // "gray-100": "#cbd5e0",
        "gray-100":  "#9E9E9E",
        "gray-500": "#424242",
        "primary-100": "#c7d1da",
        "primary-300": "#648096",
        // "primary-300": "#183557",
        "primary-500": "#00ADEE",
        // "primary-500": "#080b53",
        // "primary-500": "#d608a7",
        "secondary-400": "#0070C0",
        // "secondary-500": "#01aed9",
        // "secondary-500": "#080b53",
        // "secondary-500": "#d608a7",
        // "secondary-500": "#d608",
      },
      backgroundImage: (theme) => ({
        "gradient": "linear-gradient(90deg, ${theme('colors.gray-50')} 0%, ${theme('colors.primary-500')} 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      Content: {
        pinnakletext: "url('./assets/PinnakleText.png)",
      },
    },
     screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};