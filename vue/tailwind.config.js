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
      },
      backgroundImage: {
        'planetBlue':"url('https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/102666040/original/28c7201753b249fcb0fb78b2634646ea805a1006/design-you-a-minimalist-wallpaper.png')",
        'planetRed':"url('https://wallpaperaccess.com/full/568191.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
