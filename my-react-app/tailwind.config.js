/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Poppins", 'sans-serif'],
      },
      boxShadow: {
        'inner-custom': 'inset 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        'custom-drop': '-4px 8px 20px 0 rgba(0, 0, 0, 0.1)',
        'custom-drop1': '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}