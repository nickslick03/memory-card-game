/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{react,js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      animation: {
        float: 'float 1.5s ease-out 1',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)', opacity: 1, display: 'block' },
          '100%': { transform: 'translateY(-50px)', opacity: 0, display: 'block' },
        },
      }
    },
  },
  plugins: [],
}
