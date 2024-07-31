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
        }
      },
      animation: {
        'infinite-carousel': 'infinite-carousel 5s infinite linear'
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

