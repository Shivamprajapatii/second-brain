/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        gray : {
          100 : "#eeeeef",
          200 : "#e6e9ed",
          600 : "#95989c"
        }, 
        purple : {
          200 : "#dee7fe",
          500 : "#9492db",
          600 : "#5045e4"
        }
      }
    },
  },
  plugins: [],
}

