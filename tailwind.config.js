/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'grid-lines': 'radial-gradient(circle at center, rgba(239, 234, 210,0.1) 2px, transparent 2px), radial-gradient(circle at center, rgba(239, 234, 210, 0.1) 1px, transparent 2px)',
        'primary': 'var(--bg-primary)',
        'secondary': 'var(--bg-scondary)'
      },
      backgroundSize: {
        '50px': "10px 10px"
      },
      backgroundPosition: {
        '25px': '25px 25px'
      },
      backgroundColor: {
        'nier-light': "#c3bea7",
        'primary': 'var(--bg-primary)',
        'secondary': 'var(--bg-scondary)'
      },
      textColor: {
        'primary': 'var(--text-primary)',
        'secondary': 'var(--text-secondary)',
        'nier-light': "#c3bea7"
      },
      fontFamily: {
        'nier-header': ["Darker Grotesque", "sans-serif"]
      },
      transitionProperty: {
        'width': 'width',
        'opacity': 'opacity'
      },
    },
  },
  plugins: [],
}
