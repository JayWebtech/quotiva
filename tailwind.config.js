/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#004346",
        secondary: "#09bc8a",
      },
      fontFamily: {
        customFont: ["Rubik", "RubikLight", "RubikBold", "Millik"],
        Rubik: ["Rubik"],
        RubikLight: ["RubikLight"],
        RubikBold: ["RubikBold"],
        Millik: ["Millik"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
