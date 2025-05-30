module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-amber': '#ffb300',
        'purple-800': '#ffb300',
        'primary': '#1e1b4b',
        'secondary': '#5b21b6',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'infinite-scroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            }
      }
    },
  },
  plugins: [],
}
