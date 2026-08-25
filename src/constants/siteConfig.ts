export const siteConfig = {
  name: 'Gabriel Oghie',
  githubHandle: 'oghenenoghie',
  role: 'Full-Stack Software Developer',
  roleSecondary: 'Backend & API Engineer',
  focusAreas: ['Backend', 'APIs', 'Cloud', 'Security', 'AI'],
  heroSummary:
    'I build production-ready web applications, REST APIs and business systems using Python, Laravel, Django, React and Next.js - with a focus on scalable architecture, security and cloud deployment.',
  aboutSummary: [
    "I'm a Full-Stack Software Developer focused on building business applications, REST APIs and scalable web systems.",
    'I work across backend development, frontend engineering, databases, authentication, APIs and deployment using technologies such as Python, Laravel, Django, React and Next.js.',
    'My projects include a compliance-native HR & payroll platform, education platforms, an eCommerce API and a training management system.',
    "I'm particularly interested in backend engineering, application security, cloud deployment, and using AI tools to build software faster without cutting corners on architecture or testing.",
  ],
  status: 'Open to Software Engineering Opportunities',
  location: 'Nigeria',
  email: 'ogenenoghie@gmail.com',
  githubUrl: 'https://github.com/oghenenoghie',
  twitterUrl: 'https://twitter.com/oghie_c',
  // No LinkedIn profile is currently linked from any verified source - add one here when available.
  linkedinUrl: undefined as string | undefined,
  resumePdfPath: '/resume.pdf',
  // Falls back to the canonical domain if NEXT_PUBLIC_SITE_URL isn't set for this deploy.
  canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oghiegabriel.com',
};

export type SiteConfig = typeof siteConfig;
