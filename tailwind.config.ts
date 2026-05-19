import type { Config } from 'tailwindcss';

const config: Config = {
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gl: {
          orange: '#ff7c11',
          'orange-dark': '#f2690b',
          blue: '#4582c9',
          'blue-dark': '#225a9c',
        },
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
