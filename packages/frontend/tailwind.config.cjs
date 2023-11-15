const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
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
        're-blue': '#0F3F93',
        're-gray': '#EEECEC',
        're-turquoise': '#2DB7BC',
        're-turquoise-light': '#EAF4F5',
        're-turquoise-bright': '#87E0E3',
        're-red': '#E7314B'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        serif: ['Changa', ...defaultTheme.fontFamily.sans]
      },
      maxWidth: {
        website: '1250px'
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              lineHeight: '1.625'
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
