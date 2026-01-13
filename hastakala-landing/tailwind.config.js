/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'earth-brown': '#8B4513',
        'earth-tan': '#D2B48C',
        'earth-cream': '#F5E6D3',
        'earth-green': '#6B8E23',
        'earth-sage': '#9CAF88',
        // Warm, premium accent colors
        'accent': '#A0522D',
        'accent-hover': '#8B4513',
        // Additional warm colors for variety
        'terracotta': '#B8654A',
        'terracotta-hover': '#A0522D',
        'sage-green': '#6B8E23',
        'sage-green-hover': '#5A7A5A',
        'warm-copper': '#B8735A',
        'warm-copper-hover': '#A0522D',
        // Warm neutral backgrounds
        'warm-white': '#FFFEF7',
        'warm-gray': '#F8F9F3',
        'warm-gray-dark': '#E8E5D8',
        // Deep text colors
        'text-primary': '#2C1810',
        'text-secondary': '#6B5B4F',
        'text-muted': '#8B7355',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
