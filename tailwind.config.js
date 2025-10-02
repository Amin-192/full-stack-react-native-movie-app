/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
         primary: '#030014',      // Deep royal navy
        secondary: '#C9A961',    // Champagne gold
        accent: '#f7b147ff',     // Accent color
        danger: '#dc2626',       // Red for errors/delete
        success: '#16a34a',      // Green for success
        warning: '#f59e0b',      // Orange for warnings
      }
    },
  },
  plugins: [],
}