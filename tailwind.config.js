const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}'
  ],
  daisyui: {
    darkTheme: 'light',
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
    themes: [
      {
        dark: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#6410F5',
          secondary: '#ffffff',
          accent: '#00a8d3',
          neutral: '#121212',

          info: '#00e8ff',
          success: '#008b42',
          warning: '#ffb200',
          error: '#ff3372'
        }
      }
    ]
  },
  plugins: [require('tailwindcss-animate'), require('daisyui')]
};
