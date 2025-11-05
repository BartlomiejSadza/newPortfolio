export const TECH_STACK_PRIMARY = [
  'Next.js',
  'TypeScript',
  'React.js',
] as const;

export const TECH_STACK_SECONDARY = [
  'Azure DevOps',
  'Python',
  'Figma Design',
] as const;

export const TECH_STACK_ALL = [
  ...TECH_STACK_PRIMARY,
  ...TECH_STACK_SECONDARY,
] as const;
