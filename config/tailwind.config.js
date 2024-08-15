/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        lightGray: '#eeeeee',
        mediumGray: '#dddddd',
        gray: '#a6a6a6',
        darkGray: '#303030',
        black: '#000000',
        blue: '#2666cf',
        pink: '#f11a7b',
      },
      fontFamily: {
        Geologica: ['Geologica', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
      width: {
        82: '20.5rem',
        100: '28rem',
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out',
      },
    },
  },
  plugins: [],
}

