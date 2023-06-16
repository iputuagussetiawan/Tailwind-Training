/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#5c6ac4',
        secondary: '#ecc94b',
      }
    },
    fontFamily: {
      nunito: ['Nunito Sans', 'sans-serif'],
    },
    // colors: {
    //   ags: '#00ff00',
    // },
    
  },
  plugins: [],
}

