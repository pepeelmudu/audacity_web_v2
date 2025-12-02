/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'candidate-green': '#a1ff62',
        'company-pink': '#685eff',
        'dark-gray': '#222329',
        'purple-accent': '#685eff',
        'bg-top': '#d9dce6',
        'text-black': '#222329',
      },
      spacing: {
        '5.4': '1.35rem', // p-4.5 + 20% = 1.125rem * 1.2
        '7.2': '1.8rem',  // p-6 + 20% = 1.5rem * 1.2
      },
    },
  },
  plugins: [],
}

