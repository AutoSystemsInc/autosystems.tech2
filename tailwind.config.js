const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'glow': 'text-glow 1.5s ease-in-out',
        'color-change': 'text-color-change 2s ease-in-out',
      },
      animationDelay: {
        '0': '0.5s',
        '1': '1s',
        '2': '1.5s',
        '3': '2s',
        '4': '2.5s',
        '5': '3s',
        '6': '3.5s',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}