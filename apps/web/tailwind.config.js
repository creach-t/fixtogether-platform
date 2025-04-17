/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Include packages if not transpiled
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // FixTogether brand colors
        primary: {
          50: '#eaf9f5',
          100: '#c5ede2',
          200: '#9fe1ce',
          300: '#79d5ba',
          400: '#54c9a6',
          500: '#2fb992', // Main primary color
          600: '#269774',
          700: '#1c7657',
          800: '#13543a',
          900: '#09321d',
        },
        secondary: {
          50: '#eef3fb',
          100: '#d0def4',
          200: '#b1c8ed',
          300: '#92b2e6',
          400: '#739cdf',
          500: '#5487d8', // Main secondary color
          600: '#436cad',
          700: '#325182',
          800: '#223657',
          900: '#111b2c',
        },
        accent: {
          50: '#fff8e6',
          100: '#feeabf',
          200: '#fedc99',
          300: '#fdce72',
          400: '#fdc04c',
          500: '#fcb225', // Main accent color
          600: '#ca8e1e',
          700: '#976a16',
          800: '#65470f',
          900: '#322307',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 4px 10px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
