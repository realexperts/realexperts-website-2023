const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  safelist: ['my-8', 'my-16'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.7777rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    },
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1250px'
      }
    },
    extend: {
      colors: {
        re: {
          blue: '#0F3F93',
          gray: '#EEECEC',
          turquoise: '#2DB7BC',
          turquoiseLight: '#EAF4F5',
          turquoiseBright: '#87E0E3',
          red: '#E7314B'
        },
        ha: {
          blue: '#2F6D4D', // dunkler Grünton als Primärfarbe
          gray: '#F1F1F1', // neutrales, helles Grau
          turquoise: '#93DAB7', // deine Basisfarbe
          turquoiseLight: '#E6F7F0', // sehr hell, Hintergrund
          turquoiseBright: '#BFF0D8', // kräftigere Variante
          red: '#F46A6A' // Kontrast / CTA
        }
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        serif: ['Changa', ...defaultTheme.fontFamily.sans]
      },
      maxWidth: {
        website: '1250px'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
