/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3d': [
          '4px 4px 0 #800020',
         
        ]
      },
      colors:{
        'blue':'#0796EF',
        'gray':'#BBBBBB'
      }
    },
  },
  plugins: [],
}
