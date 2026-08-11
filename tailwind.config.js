/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50:  '#F5EDE2',
          100: '#F0E5D8',
          200: '#D9BF77',
          300: '#A5C9CA',
          400: '#8FA6AC',
          500: '#C84B31',
          600: '#B8462E',
          700: '#8F3522',
          800: '#5F2417',
          900: '#2E4052',
        },
        stone: {
          50:  '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#8FA6AC',
          500: '#55677A',
          600: '#3D4F60',
          700: '#44403c',
          800: '#292524',
          900: '#2E4052',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body:    ['var(--font-body)',    'sans-serif'],
        mono:    ['var(--font-mono)',    'monospace'],
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'line-grow':  'lineGrow 1s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrow: {
          '0%':   { scaleY: '0', transformOrigin: 'top' },
          '100%': { scaleY: '1', transformOrigin: 'top' },
        },
      },
    },
  },
  plugins: [],
}
