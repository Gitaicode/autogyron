/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mustard': '#c99442',
        'dark-green': '#5b6a49',
        'gray-brown': '#9e998c',
        'green-gray': '#738c7b',
        'beige': '#dbc3a8',
      },
    },
  },
  plugins: [],
} 