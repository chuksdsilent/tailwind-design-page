/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screen: {
        sm: '480px',
        md: '768px',
        lg: '975px',
        xl: '12550px'
      }
    },
    extend: {
      colors:{
        brightRed: 'hsl(12, 80%, 59%)',
        orangeRedLigt: 'hsl(12, 80%, 69%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(223, 12%, 13%)',
        veryDarkBlue: 'hsl(223, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 96%)',
      }
    }
  },
  plugins: [],
}
