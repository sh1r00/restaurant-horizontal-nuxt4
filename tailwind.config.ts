import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{vue,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        // Warm rustic: terracotta + earth tones + olive
        primary: {
          50: '#fcf5f0', 100: '#f7e6d8', 200: '#f0cfb5',
          300: '#e6b18b', 400: '#d99464', 500: '#c97a48',
          600: '#b8653a', 700: '#9a4f31', 800: '#7d3f2a',
          900: '#5D4037', 950: '#3a2520',
        },
        accent: {
          50: '#f8f6f0', 100: '#ede7d3', 200: '#ddd1a8',
          300: '#cbb878', 400: '#bca352', 500: '#a88f3e',
          600: '#8e7233', 700: '#72592c',
          800: '#5f4929', 900: '#503e25', 950: '#2d2113',
        },
        surface: {
          light: '#fdfbf8', DEFAULT: '#f6f3ed',
          dark: '#ebe5da',
        },
        sage: { 400: '#9cb380', 500: '#7d9b60', 600: '#5f7d44' },
      },
    },
  },
  plugins: [],
} satisfies Config
