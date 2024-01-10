/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        fontFamily: {
          sans: ["Noto Sans SC Variable", "sans-serif", ...defaultTheme.fontFamily.sans],
        },
      },
      colors: {
        white: '#F2F2F2',
        grey: {
          1: '#7C7F82',
          2: '#393939',
          3: '#282828',
        },
        black: {
          1: '#161616',
          2: '#1C1C1C',
          3: '#2B2B2B',
        },
        accent: '#FFAA00',
        'accent-dark': '#887700',
      },
      height: {
        'items-sm': '62px',
        'items-md': '174px',
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1920px',
      },
      boxShadow: {
        holo: '0 0 25px rgba(255, 200, 0, 0.15)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
