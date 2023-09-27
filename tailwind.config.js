/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      'lg': {'max': '850px'},
      // => @media (max-width: 850px) { ... }

      'md': {'max': '600px'},
      // => @media (max-width: 600px) { ... }

      'md2': {'max': '490px'},
      // => @media (max-width: 490px) { ... }

      'md3': {'max': '440px'},
      // => @media (max-width: 440px) { ... }

      'sm': {'max': '375px'},
      // => @media (max-width: 375px) { ... }

      'sm1': {'max': '375px'},
      // => @media (max-width: 375px) { ... }

      'sm2': {'max': '300px'},
      // => @media (max-width: 300px) { ... }

      'sm3': {'max': '280px'},
      // => @media (max-width: 280px) { ... }
    },
  },
  plugins: [],
}

