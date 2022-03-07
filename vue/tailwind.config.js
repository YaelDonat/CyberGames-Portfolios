const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        'emerald': colors.emerald,
        'amber': colors.amber,
        'violet': colors.violet,
        'teal': colors.teal,
        'lime': colors.lime,
        'sky': colors.sky,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
