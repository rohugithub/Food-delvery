/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        fadeIn:{
          '0%':{opaccity:"1"},
          '100%':{opacity:'0'}
        }
      }
    },
  },
  plugins: [],
}

