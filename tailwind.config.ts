import type { Config } from 'tailwindcss';

import { borderRadius } from './src//styles/tokens/borderRadius';
import { colors } from './src//styles/tokens/colors';
import { screens } from './src//styles/tokens/screens';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors,
      screens,
      borderRadius
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')]
};
export default config;
