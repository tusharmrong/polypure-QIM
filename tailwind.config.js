/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a'
        },
        ink: {
          700: '#334155',
          900: '#0f172a'
        }
      },
      boxShadow: {
        soft: '0 18px 40px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};
