
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        nuru: {
          gold: '#FFC94A',
          teal: '#007B83',
          blue: '#1E2A38',
          gray: '#6B7280',
          success: '#22C55E',
          alert: '#DC2626',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Nunito Sans', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '24px',
        '3xl': '32px',
      }
    },
  },
  plugins: [],
}
