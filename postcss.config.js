/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'starry-gradient': 'linear-gradient(to bottom, #000428, #004e92)',
      },
      animation: {
        'star-twinkle': 'twinkle 2s infinite',
        'meteor-shower': 'meteor 10s linear infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        meteor: {
          '0%': { transform: 'translateX(100vw) translateY(-100vh)' },
          '100%': { transform: 'translateX(-100vw) translateY(100vh)' },
        }
      }
    },
  },
  plugins: [],
}