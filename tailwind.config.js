/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'header-main-color': 'var(--Nier-Header-Main-Color)',
        'header-secondary-color': 'var(--Nier-Header-Secondary-Color)',
        'background-main-color': 'var(--Nier-Background-Main-Color)',
        'background-shape-color': 'var(--Nier-Background-Shape-Color)'
      },
      backgroundImage: {
        'grid-lines': 'radial-gradient(circle at center, var(--Nier-Grid-Color) 2px, transparent 2px), radial-gradient(circle at center, var(--Nier-Grid-Color) 1px, transparent 2px)',
        'tv-screen-filter': 'radial-gradient(ellipse 35% 80% at center, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 220%)',
      },
      backgroundSize: {
        '50px': "10px 10px"
      },
      backgroundPosition: {
        '25px': '25px 25px'
      },
      fontFamily: {
        'nier-header': ["Darker Grotesque", "sans-serif"],
        'nier-header': ["FOT-Rodin Pro", "sans-serif"],
      },
      transitionProperty: {
        'width': 'width',
        'opacity': 'opacity'
      },
    },
  },
  plugins: [],
}
