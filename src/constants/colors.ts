export const COLORS = {
  // Background colors
  backgroundPrimary: 'rgb(4,7,29)',
  backgroundSecondary: 'rgba(12,14,35,1)',
  backgroundCard: '#161a31',
  backgroundDark: '#10132E',
  backgroundBlack: 'black-100',

  // Accent colors
  purple: '#cbacf9',
  blue: '#C1C2D3',
  textLight: '#e4ecff',

  // Border colors
  borderLight: 'white/[0.1]',
  borderMedium: 'white/[0.2]',
} as const;

export const GRADIENTS = {
  cardBackground: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
  backgroundMask: 'radial-gradient(ellipse_at_center,transparent_20%,black)',
} as const;
