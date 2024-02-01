import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      green: '#349946',
      'green-hover': '#2F8A3F',
      'green-focus': '#2A7A38',

      yellow: '#FAD02C',

      white: '#FFFFFF',

      grey: '#8F979F',
      'light-grey': '#F8F8F8',
      inactive: '#E8E8E8',

      red: '#FF4040',
      purple: '#5F4B8B',
      blue: '#698DEB',

      black: '#081020',
    },
  },
  plugins: [],
};
export default config;
