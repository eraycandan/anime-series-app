/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // -----------------------------------------------------------------
  theme: {
    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre", 'serif'],
      },

      spacing: {
        '100': '25rem',
      },

      colors: {
        'animemories-color': '#fe6726'
      }
    },
  },
  // -----------------------------------------------------------------
  plugins: [
    function ({ addComponents }) {
      addComponents({
        // Bu kısımda her bir sınıfın stilini tanımlıyoruz
        '.grayscale-50': {
          filter: 'grayscale(0.5)', // %50 gri tonlama
        },
        '.grayscale-80': {
          filter: 'grayscale(0.8)', // %80 gri tonlama
        },
      });
    },

  ],
}

