export interface Achievement {
  number: number;
  text: string;
}

// Single source of truth for these counters - update the numbers here only.
export const achievements: Achievement[] = [
  { number: 20, text: 'GitHub Repositories' },
  { number: 5, text: 'Full-Stack Projects Built' },
  { number: 3, text: 'Client Websites Delivered' },
  { number: 2, text: 'Years Building Software' },
];
