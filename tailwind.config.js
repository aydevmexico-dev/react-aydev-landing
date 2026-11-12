/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // `hover:` only applies on devices with a real pointer — touch fires false hovers on tap.
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        deep: '#110913',
        accent: '#D5000B',
        muted: '#A7A6AB',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(213, 0, 11, 0.45)',
      },
      // Strong curves replace Tailwind's weak defaults, so `ease-out` / `ease-in-out`
      // mean the same thing everywhere. Mirrored as CSS variables in index.css.
      transitionTimingFunction: {
        DEFAULT: 'ease',
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
      keyframes: {
        enter: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        'enter-scale': {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        enter: 'enter 600ms cubic-bezier(0.23, 1, 0.32, 1) both',
        'enter-scale': 'enter-scale 700ms cubic-bezier(0.23, 1, 0.32, 1) both',
        'fade-in': 'fade-in 400ms ease both',
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
