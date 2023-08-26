/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['syne', 'roboto'],
      },
      spacing: {
        '21': '5.55rem', // You can adjust the value as needed
      },
    },
  },
  plugins: [],
}

