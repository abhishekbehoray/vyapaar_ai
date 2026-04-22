export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff5eb',
          100: '#ffe4cc',
          200: '#ffcd9f',
          300: '#ffb56f',
          400: '#ff9d46',
          500: '#ff820f',
          600: '#ff6600',
          700: '#d64f00',
          800: '#aa3f00',
          900: '#7a2800',
          DEFAULT: '#ff6600'
        }
      },
      boxShadow: {
        glow: '0 20px 50px rgba(255, 102, 0, 0.16)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 240ms ease-out both'
      }
    }
  },
  plugins: []
}
