export interface SkillCategory {
  title: string;
  items: string[];
}

// Only technologies actually demonstrated in shipped projects belong here.
// See `exploringSkills` below for target-role technologies not yet demonstrated.
export const skillCategories: SkillCategory[] = [
  { title: 'Languages', items: ['Python', 'PHP', 'JavaScript', 'TypeScript', 'SQL'] },
  { title: 'Backend', items: ['Django / Django REST Framework', 'Laravel', 'REST APIs'] },
  { title: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'styled-components'] },
  { title: 'Databases', items: ['PostgreSQL', 'MySQL'] },
  { title: 'DevOps & Cloud', items: ['Git & GitHub', 'CI/CD (GitHub Actions)', 'Vercel', 'Supabase', 'Linux (CI/deployment environments)'] },
  {
    title: 'Security',
    items: [
      'Authentication (JWT, Supabase Auth)',
      'Authorization / Row-Level Security',
      'Secure coding (integer money, input validation)',
      'OWASP awareness',
    ],
  },
  { title: 'Testing', items: ['Unit testing (Vitest, Django test suite)', 'CI-driven regression testing', 'API testing'] },
  {
    title: 'AI-Assisted Development',
    items: ['AI pair-programming workflow (Claude Code) on production codebases', 'AI API integration & LLM-powered features (in progress)'],
  },
];

// Technologies from target job descriptions that are NOT yet demonstrated in a
// shipped project. Keep this list separate and clearly labeled - move an item
// up into `skillCategories` once it has been actually used in a real project.
export const exploringSkills: string[] = ['FastAPI', 'Docker', 'AWS', 'Redis', 'RAG fundamentals'];
