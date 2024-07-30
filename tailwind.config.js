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
        'rubic': ['"Rubik Mono One", monospace']
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

