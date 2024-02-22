/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'modal': "url('./app/assets/modal.png')",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        primary: {
          700: '#0ABF53'
        },
        secondary: {
          400: '#4F4E6A',
        },
        grays: {
          100: '#f8f9fa',
          200: "#474c64"
        }
      },
      spacing: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
      },
      fontFamily: {
        body: ['var(--font-anderson-grotesk)'],
        heading: ['var(--font-neue-machina)']
      },
      keyframes: {
        'fly-in-bottom': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fly-in-bottom': 'fly-in-bottom 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
