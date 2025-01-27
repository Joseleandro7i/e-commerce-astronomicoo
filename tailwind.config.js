const { blackA, violet } = require('@radix-ui/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx,jsx}',
    './components/**/*.{ts,tsx,jsx}',
    './app/**/*.{ts,tsx,jsx}',
    './src/**/*.{ts,tsx,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...violet,
        'dark-yellow': '#1d1c19',
        'dark-green': '#3b49493d',
        'dark-blue': '#25262d',
        'dark-slate-gray': '#191c1d',
        'dark-gray-with-hint-blue': '#4b38387a',
        'dark-grayish-blue': '#3a3a426b',
        'charcoal-gray': '#2b2a314d',
        'rich-black': 'rgb(11 20 27)',
        'outer-space-gray': '#434b55',
        'dark-unmetal': '#22282f'
      }
    }
  },
  plugins: []
}
