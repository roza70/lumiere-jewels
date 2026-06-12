export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF8F0',
        gold: '#C9A84C',
        'gold-dark': '#B8943A',
        charcoal: '#1A1A1A',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}