/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
       colors: {
        primary: {
          100: '#BDE4F2',
          200: '#9BD6EB',
          300: '#79C9E5',
          400: '#56BBDE',
          500: '#34ADD8',
          600: '#2596BE',
          700: '#1C718F',
          800: '#134C60',
          900: '#0A2731',
          },
          secundary: {
            100: '#FFB348',
            200: '#E68600',
          }
        },
        
        extend: {
            fontFamily: {
                'montserrat': ['Montserrat'],
            },
            screens: {
              '3xl': '1800px',
            },
        }
    },
    plugins: [
      require('flowbite/plugin')
  ],
}