/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
      colors: {
        primary: '#303030',
        darkerPrimary: '#1c1c1c',
        secondary: '#7b6c63',
        white: '#FFFFFF',
        black: '#000000',
        lightGray: '#909090',
        lighterGray: '#C2C2C2',
        darkGray: '#5F5F5F',
      },
      backgroundImage: {
        'hero': "url('../src/img/hero-bg.jpg')",
      },
      height: {
        '700': '43.75rem',
      }
    },
  },
  plugins: [],
}
