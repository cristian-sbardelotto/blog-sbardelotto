import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'header-dark-blue': '#574ae8',
        'header-light-blue': '#3ea1db',
      },
      backgroundColor: {
        'shadow-transparent': '#3336',
      },
      animation: {
        appear: 'appear 200ms',
      },
      keyframes: {
        appear: {
          '0%': {
            transform: 'translateY(-10vh)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
