/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
      },
      backgroundImage: {
        'gold-white': 'linear-gradient(135deg, #FFD700 0%, #FFF8DC 40%, #FFFFFF 100%)',
      },
      boxShadow: {
        neon: '0 0 8px rgba(255,215,0,0.8), 0 0 16px rgba(255,255,255,0.6)',
      },
    },
  },
  plugins: [],
};


