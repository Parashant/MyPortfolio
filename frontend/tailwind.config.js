/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          '0%': { transform: "translateX(-100%)", opacity: "0" },
          '100%': { transform: "translateX(0)", opacity: "1" },
        },
        slideUP: {
          '0%': { transform: "translateY(100%)", opacity: "0" },
          '100%': { transform: "translateY(0)", opacity: "1" },
        },
        slideBottom: {
          '0%': { transform: "translateY(-50%)", opacity: "0" },
          '100%': { transform: "translateY(0)", opacity: "1" },
        },
        slideTop: {
          '0%': { transform: "translateY(50%)", opacity: "0" },
          '100%': { transform: "translateY(0)", opacity: "1" },
        },
        born:{
            '0%' : {opacity:"0"},
            '10%' : {opacity:".1"},
            '20%' : {opacity:".2"},
            '30%' : {opacity:"0.3"},
            '40%': {opacity:".40"},
            '50%': {opacity:".5"},
            '60%': {opacity:".6"},
            '70%': {opacity:".7"},
            '80%': {opacity:".8"},
            '90%': {opacity:".9"},
            '100%' :{ opacity:"1"},
        },
        scrollSmall: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-200%)',
          },
        },

        

      },
      animation: {
        slideRight: "slideRight 1s ease forwards",
        slideUP: "slideUP 0.5s ease forwards",
        slideBottom: "slideBottom 1s ease forwards",
        slideTop: "slideTop 1s ease forwards",
        born: "born 3s ease-in",
        scrollSmall: 'scrollSmall 25s linear infinite',
        flipInBottom: 'flipInBottom 1s ease-out forwards',
      },
  },
},
  plugins: [],
}
