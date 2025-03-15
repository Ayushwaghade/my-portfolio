export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4FD1C5",
        secondary: "#B794F4",
        accent: "#F687B3",
        dark: "#1A202C",
        darker: "#171923",
        light: "#F7FAFC"
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'neon-pulse': 'neonPulse 1.5s ease-in-out infinite alternate'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { textShadow: '0 0 2px #fff, 0 0 4px #4FD1C5, 0 0 6px #4FD1C5' },
          '100%': { textShadow: '0 0 1px #fff, 0 0 2px #4FD1C5, 0 0 4px #4FD1C5' }
        },
        neonPulse: {
          '0%': { boxShadow: '0 0 2px #4FD1C5, 0 0 4px #4FD1C5' },
          '100%': { boxShadow: '0 0 1px #4FD1C5, 0 0 2px #4FD1C5' }
        }
      },
      boxShadow: {
        'neon': '0 0 2px #4FD1C5, 0 0 4px #4FD1C5',
        'neon-soft': '0 0 2px #B794F4, 0 0 4px #B794F4'
      }
    },
  },
  plugins: [],
}