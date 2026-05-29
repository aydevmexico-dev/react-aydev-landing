/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        deep: '#110913',
        accent: '#D5000B',
        secondary: '#0E6BA8',
        muted: '#A7A6AB',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(213, 0, 11, 0.45)',
        'glow-blue': '0 0 60px -10px rgba(14, 107, 168, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
