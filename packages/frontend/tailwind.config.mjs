import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  safelist: [
    'my-8',
    'my-16',
    'bg-primary',
    'bg-secondary',
    'bg-secondary-light'
  ],
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
        // Rollen, NICHT markenspezifische Namen
        primary: 'rgb(var(--color-primary) / <alpha-value>)', // re-blue
        neutral: 'rgb(var(--color-neutral) / <alpha-value>)', // re-gray
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)', // re-turquoise
        'secondary-light': 'rgb(var(--color-secondary-light) / <alpha-value>)', // re-turquoiseLight
        'secondary-bright':
          'rgb(var(--color-secondary-bright) / <alpha-value>)', // re-turquoiseBright
        accent: 'rgb(var(--color-accent) / <alpha-value>)' // re-red
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
  plugins: [typography]
};
