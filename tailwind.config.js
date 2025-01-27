/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 10s linear infinite',
      },
      keyframes: {
       'infinite-scroll': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },

      }
    },
  },
  plugins: [],
}

