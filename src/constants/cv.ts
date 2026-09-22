// Content of the /resume page. Mirrors the CV kept on Google Drive
// ("Gabriel Oghenenoghie Patrick — CV", exported to /public/resume.pdf) -
// update both together so the page and the PDF never disagree.

export interface CvLink {
  label: string;
  href: string;
}

export interface CvSkillRow {
  title: string;
  items: string[];
}

export interface CvEntry {
  title: string;
  /** Short context line after the title, e.g. client, status or dates. */
  meta?: string;
  stack?: string[];
  bullets: string[];
  links?: CvLink[];
}

export interface CvCertificate {
  name: string;
  /** Issuing platform, when it differs from the group's issuer. */
  via?: string;
  date: string;
  verifyUrl?: string;
}

export interface CvCertificationGroup {
  title: string;
  issuer?: string;
  items: CvCertificate[];
}

export const cv = {
  name: 'Gabriel Oghenenoghie Patrick',
  headline: 'Full-Stack Software Developer · Backend & API Engineer',
  location: 'Nigeria',
  availability: 'Open to remote roles',
  website: { label: 'oghiegabriel.com', href: 'https://www.oghiegabriel.com' },
  profile:
    'Full-stack developer building production web applications, REST APIs and business systems with Python (Django, FastAPI), Laravel, React and Next.js. My focus is correctness where it matters most: compliance rules held as versioned data, money stored as integer minor units, and access control enforced in the database through Row-Level Security. I have delivered client systems end to end, from schema design to CI/CD and deployment.',

  skills: [
    { title: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'PHP', 'SQL'] },
    {
      title: 'Backend',
      items: ['Django', 'Django REST Framework', 'FastAPI', 'Laravel', 'SQLAlchemy', 'Alembic', 'REST API design'],
    },
    { title: 'Frontend', items: ['Next.js (App Router)', 'React', 'Tailwind CSS', 'shadcn/ui'] },
    { title: 'Data', items: ['PostgreSQL', 'pgvector', 'MySQL', 'Redis', 'Supabase', 'Neon', 'Drizzle ORM'] },
    {
      title: 'Security',
      items: [
        'JWT and refresh-token auth',
        'TOTP MFA',
        'Row-Level Security',
        'argon2 hashing',
        'Input validation',
        'OWASP practices',
      ],
    },
    {
      title: 'DevOps',
      items: [
        'Git',
        'GitHub Actions CI/CD',
        'Docker',
        'Vercel',
        'Railway',
        'Linux',
        'cPanel/SSH deployment',
        'pnpm monorepos',
      ],
    },
    { title: 'Testing', items: ['Vitest', 'Django test suite', 'API testing', 'CI regression testing'] },
    {
      title: 'AI',
      items: [
        'Claude API integration',
        'Retrieval-augmented generation (hybrid retrieval, reranking, citations)',
        'AI-assisted development',
      ],
    },
  ] as CvSkillRow[],

  experience: [
    {
      title: 'Independent Full-Stack Developer',
      meta: 'Freelance & Client Projects · 2024 – Present',
      bullets: [
        'Designed, built and shipped client systems end to end: requirements, data modelling, APIs, UI, security, CI/CD and hosting.',
        'Delivered 3+ client websites and applications, including an enterprise learning management system and a corporate advisory platform.',
        'Wrote a SKILL.md engineering guide for each repository, recording architecture decisions, conventions and domain rules so that projects stay maintainable.',
      ],
    },
    {
      title: 'IFS LMS',
      meta: 'Institute for Fiscal Studies Nigeria (client) · Delivered',
      stack: ['Laravel REST API', 'Next.js App Router', 'MySQL', 'GitHub Actions', 'Vercel', 'cPanel/SSH'],
      bullets: [
        'Built an enterprise learning management system that runs courses, trainers, trainees, schedules, attendance, assessments and training records.',
        'Implemented multi-tenancy with an Eloquent global scope and a BelongsToSchool trait, plus five roles managed through spatie/laravel-permission.',
        'Set up CI/CD from GitHub Actions to cPanel over SSH for the API, with the Next.js frontend deployed on Vercel.',
      ],
    },
    {
      title: 'GECA Advisory',
      meta: 'Corporate advisory & training firm (client)',
      stack: ['Next.js', 'TypeScript', 'Supabase', 'Sanity CMS', 'Resend'],
      bullets: [
        'Built the corporate site: course catalogue, training calendar, services showcase and a careers application flow.',
        'Added a Supabase-backed admin dashboard, a Sanity CMS for editorial content and transactional email through Resend.',
      ],
      links: [{ label: 'gecaadvisory.com', href: 'https://www.gecaadvisory.com' }],
    },
  ] as CvEntry[],

  projects: [
    {
      title: 'Plutus — Compliance-native HR & Payroll Platform',
      meta: 'In progress',
      stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL RLS', 'FastAPI', 'SQLAlchemy', 'pnpm monorepo'],
      bullets: [
        'Built a payroll engine for Nigerian statutory schemes (PAYE, pension, NHF, NHIS, NSITF, ITF, WHT). Every rule is stored as effective-dated, versioned data and none is hardcoded.',
        'Stored all money as integer kobo (bigint) and scaled rates in parts per million, so pay runs have no floating-point drift. Payroll and statutory records are append-only.',
        'Enforced seven organisation roles with Row-Level Security across 89 tables and required TOTP MFA for super admins. The schema is built from 117 migrations and gated by a two-job CI pipeline.',
        'Proved an offline desktop edition on embedded Postgres (PGlite) and built a parallel FastAPI backend with session-scoped RLS, deployed on Railway.',
      ],
      links: [
        { label: 'Live demo', href: 'https://hr-payroll-wagebook.vercel.app' },
        { label: 'Source', href: 'https://github.com/oghenenoghie/hr-payroll' },
      ],
    },
    {
      title: 'Corpus — AI Document Intelligence',
      meta: 'Prototype',
      stack: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL + pgvector', 'Claude API'],
      bullets: [
        'Built a RAG system that answers questions across a document library, with inline, clickable citations to the source passages.',
        'Combined hybrid retrieval (vector and keyword) with reranking before generation, which improves how precisely answers are grounded in the sources.',
      ],
      links: [{ label: 'Source', href: 'https://github.com/oghenenoghie/corpus-ai-rag' }],
    },
    {
      title: 'AnchorShip NL — Marine Engine & Parts Marketplace',
      meta: 'In development',
      stack: ['Next.js', 'TypeScript', 'Drizzle ORM', 'PostgreSQL (Neon)', 'Tailwind CSS', 'Railway'],
      bullets: [
        'Building a B2B marketplace for marine diesel engines and spare parts (Wärtsilä, MAN, MaK, Deutz, Caterpillar). It includes part-number search and an admin console.',
        'The signature feature is exploded-diagram part discovery: hotspots on the diagram link straight to in-stock items.',
      ],
    },
    {
      title: 'eCommerce Platform — Headless REST API',
      stack: ['Python', 'Django REST Framework', 'PostgreSQL', 'JWT'],
      bullets: [
        'Built a DRF backend that powers a headless storefront, covering the product catalogue, cart and checkout, orders and payments behind a JWT-secured API.',
      ],
      links: [{ label: 'Visit', href: 'https://oghie-store.vercel.app' }],
    },
    {
      title: 'School Management System',
      stack: ['Next.js', 'TypeScript', 'PostgreSQL'],
      bullets: [
        "Built a multi-tenant platform for Nigerian schools covering student management, exam processing, result generation and fee tracking. Data such as a student's current class is derived from records rather than stored twice.",
      ],
      links: [{ label: 'Source', href: 'https://github.com/oghenenoghie/school-ms' }],
    },
  ] as CvEntry[],

  certifications: [
    {
      title: 'Google Cybersecurity',
      issuer: 'Google via Coursera',
      items: [
        { name: 'Foundations of Cybersecurity', date: 'May 2026', verifyUrl: 'https://coursera.org/verify/E888Q33QZQMO' },
        { name: 'Tools of the Trade: Linux and SQL', date: 'Jun 2026', verifyUrl: 'https://coursera.org/verify/W37QQMCF74Q2' },
        { name: 'Assets, Threats, and Vulnerabilities', date: 'Jun 2026', verifyUrl: 'https://coursera.org/verify/ZEJKQFITCH4C' },
        { name: 'Sound the Alarm: Detection and Response', date: 'Aug 2026', verifyUrl: 'https://coursera.org/verify/8898USYPJXH1' },
        { name: 'Automate Cybersecurity Tasks with Python', date: 'Aug 2026', verifyUrl: 'https://coursera.org/verify/XTPQXX8JNXDM' },
      ],
    },
    {
      title: 'AI Engineering',
      issuer: 'Anthropic',
      items: [
        { name: 'Claude Code in Action', via: 'Coursera', date: 'May 2026', verifyUrl: 'https://coursera.org/verify/7Q4EAFKHNOC2' },
        { name: 'AI Fundamentals with Claude', via: 'Coursera', date: 'Jun 2026', verifyUrl: 'https://coursera.org/verify/B4L1WZQA0A3R' },
        { name: 'Claude 101', via: 'Anthropic Academy', date: '2026' },
      ],
    },
    {
      title: 'Web & Digital',
      items: [
        {
          name: 'Next.js 14 & React — The Complete Guide',
          via: 'Udemy',
          date: 'Mar 2024',
          verifyUrl: 'https://ude.my/UC-6ae26855-8145-46f0-aa6b-1bf653aecfa7',
        },
        {
          name: 'Fundamentals of Digital Marketing',
          via: 'Google Digital Skills for Africa',
          date: '2023',
          verifyUrl: 'https://learndigital.withgoogle.com/link/1ar27gu2qdc',
        },
      ],
    },
  ] as CvCertificationGroup[],

  // The CV's Education section is still a placeholder - add entries here once it's filled in.
  education: [] as string[],
};
