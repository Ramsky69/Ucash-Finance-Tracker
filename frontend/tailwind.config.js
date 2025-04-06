module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#2A6EEF', // UCASH-style blue
        'diamond': '#3B82F6', // Accent for premium tiers
        'success': '#10B981', // Green for positive amounts
        'warning': '#F59E0B', // Amber for pending status
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'] // Modern font like UCASH
      }
    },
  },
  plugins: [],
}