/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/*.{html,js,ejs}", "./public/*.html"],
    theme: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
  }
  
  