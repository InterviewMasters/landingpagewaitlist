/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
    'primary-bg': '#0091D5',
    'secondary-bg': '#EA6A47',
    'text-secondary': '#979797',
    white: '#FFFFFF',
    black: '#000000',
    blue: '#0091D5',
    coral:'#EA6A47'
    },
    extend: {
  
    },
  },
  plugins: [],
}
