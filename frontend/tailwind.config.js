/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'light-pulse': 'light-pulse 10s linear infinite',
        'light-rotate': 'light-rotate 10s linear infinite',
        'hard-rotate': 'hard-rotate 10s linear infinite',
      },
    },
  },
  plugins: [],
}

