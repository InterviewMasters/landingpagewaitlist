/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
    'primary-bg': '#0B73E8',
    'secondary-bg': '#FC9484',
    'text-secondary': '#979797',
    white: '#FFFFFF',
    black: '#000000',
    blue: '#0B73E8',
    coral:'#FC9484'
    },
    extend: {
  
    },
  },
  plugins: [],
}
