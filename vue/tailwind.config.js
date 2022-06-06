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
      fontFamily:{
        zcoolkuaiLe : ["ZCOOLKuaiLe-Regular","sans-serif"]
      },
      animation : {
        animatedgradient : 'animatedgradient 3s linear infinite',
      },
      
      keyframes:{
        animatedgradient:{
            '0% ': {
              'background-image': 'linear-gradient(270deg, #3b82f6,#f59e0b)',
              'background-position':'right',
              'background-size':'200% 200%',
            },
            '50%': {
              'background-image': 'linear-gradient(270deg, #3b82f6,#f59e0b)',
              'background-position':'left',
              'background-size':'200% 200%',
            },
            '100%':{
              'background-image': 'linear-gradient(270deg, #3b82f6,#f59e0b)',
              'background-position':'right',
              'background-size':'200% 200%',
            },
        },
      },

      backgroundImage: {
        'planetBlue':"url('https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/102666040/original/28c7201753b249fcb0fb78b2634646ea805a1006/design-you-a-minimalist-wallpaper.png')",
        'planetRed':"url('https://wallpaperaccess.com/full/568191.png')",
        'wolf':"url('https://images3.alphacoders.com/954/thumb-1920-954241.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded'],
    scrollbar: ['dark']
}
}
