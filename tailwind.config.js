/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./layout/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "header-main-color": "var(--Nier-Header-Main-Color)",
        "header-secondary-color": "var(--Nier-Header-Secondary-Color)",
        "background-main-color": "var(--Nier-Background-Main-Color)",
        "background-secondary-color": "var(--Nier-Background-Secondary-Color)",
        "background-shape-color": "var(--Nier-Background-Shape-Color)",

        primary: {
          light: "#4e4740",
          dark: "#b9b5a3",
        },
        secondary: {
          light: "#b9b5a3",
          dark: "#49463E",
        },

        boxBackground: {
          light: "#d9d3b1",
          dark: "#d9d3b1",
        },
        neutral: {},

        "nier-dark": {
          50: "#f5f5f1",
          100: "#e4e5dc",
          200: "#cbccbc",
          300: "#adaf95",
          400: "#989877",
          500: "#898869",
          600: "#757259",
          700: "#5f5b49",
          800: "#524e41",
          // Font color
          900: "#454138",
          950: "#282520",
        },
        "nier-light": {
          50: "#f8f7f4",
          100: "#efeee5",
          200: "#dedcca",
          // Background color
          300: "#d1cdb7",
          400: "#b1a786",
          500: "#a1946e",
          600: "#948462",
          700: "#7c6c52",
          800: "#655847",
          900: "#53493b",
          950: "#2c261e",
        },
        "bison-hide": {
          50: "#f7f7f5",
          100: "#edece7",
          200: "#dad8ce",
          300: "#b9b5a3",
          400: "#a9a28e",
          500: "#978f78",
          600: "#8b806b",
          700: "#746a5a",
          800: "#60574c",
          900: "#4e4740",
          950: "#292521",
        },
        "moon-mist": {
          50: "#f6f6f0",
          100: "#e9e8d8",
          // This is the flat window background
          200: "#dcd8c0",
          300: "#bcb388",
          400: "#a99a66",
          500: "#9a8958",
          600: "#84704a",
          700: "#6a573e",
          800: "#5b4a38",
          900: "#4f4034",
          950: "#2d231b",
        },
        gold: {
          50: "#ffffe7",
          100: "#feffc1",
          200: "#fffd86",
          300: "#fff441",
          400: "#ffe60d",
          500: "#ffd700",
          600: "#d19e00",
          700: "#a67102",
          800: "#89580a",
          900: "#74480f",
          950: "#442604",
        },
        acadia: {
          50: "#f7f7f6",
          100: "#e7e3e0",
          200: "#cec8c1",
          300: "#aea59a",
          400: "#8c8275",
          500: "#72685a",
          600: "#5a5247",
          700: "#4a443b",
          800: "#3d3932",
          900: "#35312c",
          // Header button background
          950: "#1c1a16",
        },
      },
      backgroundImage: {
        "grid-lines":
          "radial-gradient(circle at center, var(--Nier-Grid-Color) 2px, transparent 2px), radial-gradient(circle at center, var(--Nier-Grid-Color) 1px, transparent 2px)",
        "grid-lines-dark":
          "radial-gradient(circle at center, var(--Nier-Grid-Color) 2px, transparent 2px), radial-gradient(circle at center, var(--Nier-Grid-Color) 1px, transparent 2px)",
        "tv-screen-filter":
          "radial-gradient(ellipse 35% 80% at center, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.7) 180%)",
        "tv-screen-filter-dark":
          "radial-gradient(ellipse 35% 80% at center, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8) 135%)",
      },
      backgroundSize: {
        "50px": "10px 10px",
      },
      backgroundPosition: {
        "25px": "25px 25px",
      },
      fontFamily: {
        //'nier-header': ["Darker Grotesque", "sans-serif"],
        "nier-header": ["FOT-Rodin Pro", "sans-serif"],
        "nier-text": ["Darker Grotesque", "sans-serif"],
      },
      transitionProperty: {
        width: "width",
        opacity: "opacity",
      },
      dropShadow: {
        bigText: "5px 5px 0 rgba(0, 0, 0, 0.28)",
        smallText: "3px 3px 0 rgba(0, 0, 0, 0.28)",
      },
      boxShadow: {
        bigBox: "8px 8px 0 rgba(114, 112, 102, 0.64)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
