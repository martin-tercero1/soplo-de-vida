/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#50276A',
        sencundary: '#E3DBEB',
        'white': '#FAFAFA',
        'dark-orange': '#FADBC7',
        'light-yellow': '#FAF5E3',
        'light-green': '#D6EDF0',
        'violet': '#E3DBEB',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      text: {
        'text': '#404552',
      },
      tracking: {
        '0.2em': '0.2em',
      },
    },
    plugins: [],
  },
}