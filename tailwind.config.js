module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include components and pages in the app directory
    './components/**/*.{js,ts,jsx,tsx}', // If you have a separate components folder
    './pages/**/*.{js,ts,jsx,tsx}', // If using the older pages directory structure
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#FFD700',
        'customPink': '#fb1dd1',
        'customOrange': '#ff9507',
      },
    },
  },
  plugins: [],
}