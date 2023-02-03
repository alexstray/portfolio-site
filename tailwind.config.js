/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
      },
      colors: {
        primaryPurple: '#3f1584',
        accentPurple: '#481893',
        primaryPink: '#e04679',
        primaryBlue: 'rgba(0,156,198,1)',
        primaryYellow: 'rgba(249, 225, 62, 1)',
      }
    },
  },
  plugins: [],
}
