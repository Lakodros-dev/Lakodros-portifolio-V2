/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fire-flicker': 'fireFlicker 0.5s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        fireFlicker: {
          '0%': { 
            transform: 'scale(1) rotate(-0.5deg)',
            filter: 'brightness(1) drop-shadow(0 0 10px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 20px rgba(251, 146, 60, 0.4))'
          },
          '100%': { 
            transform: 'scale(1.02) rotate(0.5deg)',
            filter: 'brightness(1.1) drop-shadow(0 0 15px rgba(239, 68, 68, 0.8)) drop-shadow(0 0 25px rgba(251, 146, 60, 0.6))'
          }
        },
        glowPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.1)', opacity: '0.9' }
        }
      }
    },
  },
  plugins: [],
}