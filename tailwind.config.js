/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      't': '384px',       // Tiny.
      'si': '512px',      // Smallish.
      'sm': '640px',      // Small.
      'md': '768px',      // Medium.
      'lg': '1024px',     // Large.
      'xl': '1280px',     // Extra large.
      '2xl': '1536px',    // Two extra large.
      '3xl': '1792px',    // Three extra large.
      '4xl': '2048px',    // Four extra large.
    },
    extend: {},
  },
  plugins: [],
}
