/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: [`./views/*.html`], // all .html files
  content: [`./views/**/*.ejs`], // all .ejs files
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['cupcake']
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}

