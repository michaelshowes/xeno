import { ThemeConfig } from 'tailwindcss/types/config';

export const borderRadius: ThemeConfig['borderRadius'] = {
  lg: 'var(--radius)',
  md: 'calc(var(--radius) - 2px)',
  sm: 'calc(var(--radius) - 4px)'
};
