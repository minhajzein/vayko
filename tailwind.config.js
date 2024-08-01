/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['"Raleway", sans-serif'],
        'rubic': ['"Rubik Mono One", monospace'],
        'skranji': ['"Skranji", system-ui'],
        'silkscreen': ['"Silkscreen", sans-serif']
      },
      keyframes: {
        'infinite-carousel': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'bounce-shake': {
          '0%': { transform: 'scale(1, 1)  translateY(0)' },
          '10%': { transform: ' scale(1.1, .9)   translateY(0)' },
          '30%': {
            transform: 'scale(.9, 1.1) translateY(- 5px)'
          },
          '32%': {
            transform: 'scale(1.2) translateY(- 5px)'
          },
          '35%, 40%': {
            transform: ' scale(1.2) translateY(- 5px) rotate(- 20deg)'
          },
          '45%, 50%': {
            transform: 'scale(1.2) translateY(- 5px) rotate(20deg)'
          },
          '60%': { transform: 'scale(1.05, .95) translateY(0)' },
          '70%': { transform: ' scale(1.05, .95) translateY(0)' },
          '80%': {
            transform: 'scale(1, 1) translateY(- 3px)'
          },
          '95%': { transform: 'scale(1, 1) translateY(0)' },
          '100%': { transform: 'scale(1, 1) translateY(0)' }
        }
      },
      animation: {
        'infinite-carousel': 'infinite-carousel 5s infinite linear',
        'bounce-shake': 'bounce-shake 1.5s ease-out infinite'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hidden': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}

