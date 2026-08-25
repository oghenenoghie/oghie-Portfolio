// Placeholder used for case-study fields where no verified detail exists yet.
// Update these directly once the real information is documented - never replace
// with invented specifics.
export const NOT_DOCUMENTED = 'Not documented yet - see the GitHub repository for the current implementation.';

export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  architecture: string;
  database: string;
  api: string;
  authAndAuthorization: string;
  security: string;
  challenges: string;
  whatILearned: string;
  futureImprovements: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  type: string;
  /** Short, engineering-focused one-sentence description used on the card. */
  description: string;
  image: string;
  tags: string[];
  source: string;
  visit?: string;
  featured?: boolean;
  caseStudy: CaseStudy;
}

export const projects: Project[] = [
  {
    id: 0,
    slug: 'hr-payroll',
    title: 'HR & Payroll Management System (Plutus)',
    type: 'Business Platform / Compliance Engine',
    description:
      'Compliance-native payroll and HR platform for Nigeria, with a versioned statutory rules engine, database-level role security, and integer-precision payroll math.',
    image: '/images/projects/hr-payroll.svg',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Row-Level Security', 'REST API', 'Authentication'],
    source: 'https://github.com/oghenenoghie/hr-payroll',
    visit: 'https://hr-payroll-wagebook.vercel.app',
    featured: true,
    caseStudy: {
      overview:
        'Plutus (shipped as the Wagebook app) is a compliance-native HR and payroll platform for Nigeria, built on the Nigeria Tax Act framework effective 1 January 2026. Beyond payroll, it covers the full employer surface - employees, departments, branches, org chart, recruitment, leave & attendance, loans & advances, expenses, benefits, performance, learning, e-signature, and a full accounting layer (accounts payable/receivable, general ledger, bank reconciliation, fixed assets, budgets).',
      problem:
        "Nigeria's payroll compliance landscape changed fundamentally in 2026, when four new Acts replaced the old Personal Income Tax Act and rewrote how employers calculate, withhold and remit tax. Most employers still run payroll on spreadsheets or tools built for the old code, and the reform raised the cost of getting it wrong - new PAYE bands, mandatory Tax IDs, and a digitally-enabled Revenue Service that cross-references payroll against bank records.",
      solution:
        'A monorepo product where the statutory compliance engine is a separate, pure-TypeScript package sitting over a common payroll core. Rates, reliefs and thresholds live in a central, effective-dated rule set rather than as hardcoded numbers, so a law change is a version bump instead of a rewrite - and historical pay runs stay reproducible against the rules that were in force at the time.',
      keyFeatures: [
        'Automatic PAYE, pension, NHF, NHIS, NSITF, ITF and withholding-tax calculation, filing and remittance tracking',
        'Multi-frequency payroll runs with itemised digital payslips, arrears, bonuses and 13th-month handling',
        'Cumulative PAYE recalculation whenever pay changes mid-year',
        'Tax-ID validation gating that flags workers before a run, not after an audit',
        'Full employer surface: recruitment, leave & attendance, loans & advances, expenses, benefits, performance, learning',
        'A real accounting layer: accounts payable/receivable, chart of accounts, general ledger, bank reconciliation, fixed assets, budgets',
        'Employment-contract e-signature and employee/manager self-service',
      ],
      techStack: ['Next.js 16 (App Router)', 'React 19', 'TypeScript (strict)', 'Tailwind CSS v4', 'Supabase (Postgres, Auth, Storage)', 'Vitest', 'pnpm workspaces', 'GitHub Actions CI'],
      architecture:
        'A pnpm monorepo: the Next.js app consumes two internal packages - a statutory compliance engine (pure TypeScript, zero runtime dependencies) and a core package for organisation roles and Row-Level Security helpers. Rule versions live as effective-dated data files, not code.',
      database:
        'PostgreSQL via Supabase, with schema, Row-Level Security policies and Postgres functions all defined as ordered SQL migrations. Every change replays every migration against a fresh database in CI - a migration that does not apply cleanly from scratch fails the build.',
      api: "Application logic runs through Next.js route handlers backed by Supabase's Postgres client, with the compliance engine invoked as an internal package rather than a separate network service.",
      authAndAuthorization:
        'Supabase Auth with the SSR cookie pattern, invite-link onboarding, and TOTP MFA. Authorization is enforced at the database layer via Row-Level Security across a seven-role tenancy model (admin, payroll manager, HR manager, accountant, department manager, auditor, employee), so access control cannot be bypassed by calling the API directly.',
      security:
        'All monetary values are stored as integer minor units (kobo) with rates as parts-per-million, so no floating-point number ever touches a payslip. Pay-run reversal is gated on acknowledged statutory remittance, so a run cannot be undone once money has left the building. Row-Level Security policies scope every query to what a role is allowed to see, and salary figures are masked outside authorized roles.',
      challenges:
        'Keeping statutory calculations correct under a brand-new, still-settling legal framework meant treating every rate and threshold as versioned, sourced data rather than a constant - and building a CI job that proves the database migrations replay cleanly from nothing, on every single change.',
      whatILearned:
        'How to design a compliance system so a change in the law is a data update, not an application rewrite - and why integer money and effective-dated rule versions matter once payroll runs need to stay reproducible months later.',
      futureImprovements:
        'Ghana (SSNIT) and Kenya (NSSF, SHIF) statutory rule sets are on the roadmap, since the compliance engine is designed as a rules layer over a common core rather than a new platform per country.',
    },
  },
  {
    id: 1,
    slug: 'school-management-system',
    title: 'School Management System',
    type: 'Full-Stack Application',
    description:
      'A full-featured web application for streamlining school operations - student management, exam processing, result generation and fee tracking.',
    image: '/images/projects/school-ms.svg',
    tags: ['Next.js', 'TypeScript', 'Full-Stack'],
    source: 'https://github.com/oghenenoghie/school-ms',
    caseStudy: {
      overview:
        'A full-featured web application for streamlining school operations - student management, exam processing, result generation, fee tracking, and communication between administrators, teachers, parents, and students.',
      problem:
        'Schools often manage student records, exams, results and fees across disconnected spreadsheets and paper processes, making it hard for administrators, teachers and parents to stay in sync.',
      solution:
        'A centralized Next.js application bringing student management, exam processing, result generation, fee tracking and communication into one system.',
      keyFeatures: [
        'Student record management',
        'Exam processing and result generation',
        'Fee tracking',
        'Communication between administrators, teachers, parents and students',
      ],
      techStack: ['Next.js', 'TypeScript'],
      architecture: NOT_DOCUMENTED,
      database: NOT_DOCUMENTED,
      api: NOT_DOCUMENTED,
      authAndAuthorization: NOT_DOCUMENTED,
      security: NOT_DOCUMENTED,
      challenges: NOT_DOCUMENTED,
      whatILearned: NOT_DOCUMENTED,
      futureImprovements: NOT_DOCUMENTED,
    },
  },
  {
    id: 2,
    slug: 'ecommerce-platform',
    title: 'eCommerce Platform',
    type: 'REST API / Backend',
    description:
      'A Django REST Framework backend powering a headless eCommerce storefront - product catalog, cart/checkout, orders and payments behind a JWT-secured API.',
    image: '/images/projects/ecommerce.svg',
    tags: ['Python', 'Django REST Framework', 'PostgreSQL', 'JWT', 'REST API'],
    source: 'https://github.com/oghenenoghie/oghie-store',
    visit: 'https://oghie-store.vercel.app',
    caseStudy: {
      overview:
        'A Django REST Framework backend powering a headless ecommerce storefront: product catalog, cart/checkout, orders, payments, and CMS-driven content sections, consumed by a separate Next.js frontend.',
      problem:
        'A storefront needs a backend that can serve product data, handle cart/checkout state, and process orders and payments securely, independent of whichever frontend consumes it.',
      solution:
        'A Django REST Framework API with JWT authentication, a PostgreSQL database, and Cloudinary for media, exposing a documented set of REST endpoints consumed by a decoupled Next.js frontend.',
      keyFeatures: [
        'Product catalog with search, category/price/stock filtering and sorting',
        'JWT-based authentication with token refresh',
        'Cart and checkout flow with order tracking',
        'Wishlist and product reviews',
        'CMS-driven content sections served through the API',
        'Payments integration',
      ],
      techStack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'JWT', 'Cloudinary'],
      architecture:
        'Next.js frontend -> JWT-authenticated Django REST Framework API -> PostgreSQL, with a separate payments provider and CMS content sections served through the same API.',
      database: 'PostgreSQL in production, falling back to local SQLite only for local development.',
      api: "A Django REST Framework API exposing product, cart, order, payment and CMS endpoints, documented in the repo's docs/API.md.",
      authAndAuthorization:
        "JWT authentication (obtain/refresh) via a dedicated token endpoint, with a current-user endpoint for the authenticated session.",
      security:
        'Debug mode defaults to off unless explicitly enabled, and the app requires a real PostgreSQL connection string in production since the deployment filesystem is read-only outside temp storage.',
      challenges:
        "Keeping cart/checkout logic correct and testable while running the same codebase against a read-only production filesystem that can't fall back to SQLite.",
      whatILearned:
        "Documented directly in the project's own README as concrete next steps identified while building it - see Future Improvements.",
      futureImprovements:
        'Auto-generated OpenAPI docs (drf-spectacular) instead of a hand-maintained endpoint table, rate limiting on the auth token endpoint to guard against brute-force attempts, and moving cart/checkout logic into a dedicated service layer for easier testing - all noted directly in the project README.',
    },
  },
  {
    id: 3,
    slug: 'training-lms',
    title: 'Training & Learning Management System',
    type: 'Full-Stack Application',
    description:
      'A centralized platform for managing courses, trainers, trainees, schedules, attendance, assessments, and training records.',
    image: '/images/projects/training-lms.svg',
    tags: ['Laravel', 'PHP', 'MySQL'],
    source: 'https://github.com/oghenenoghie/Training-Learning-Management-System-',
    caseStudy: {
      overview:
        'A centralized Laravel platform for managing courses, trainers, trainees, schedules, attendance, assessments, and training records.',
      problem:
        'Training providers often juggle trainer schedules, trainee rosters, attendance and assessments across spreadsheets and disconnected tools, making records hard to keep accurate and up to date.',
      solution:
        'A centralized Laravel application that brings courses, trainers, trainees, schedules, attendance and assessments into one system of record.',
      keyFeatures: ['Course and trainer management', 'Trainee scheduling and attendance tracking', 'Assessment and training-record management'],
      techStack: ['Laravel', 'PHP', 'MySQL'],
      architecture: NOT_DOCUMENTED,
      database: NOT_DOCUMENTED,
      api: NOT_DOCUMENTED,
      authAndAuthorization: NOT_DOCUMENTED,
      security: NOT_DOCUMENTED,
      challenges: NOT_DOCUMENTED,
      whatILearned: NOT_DOCUMENTED,
      futureImprovements: NOT_DOCUMENTED,
    },
  },
  {
    id: 4,
    slug: 'dhn-consulting',
    title: 'DHN Consulting - Client Website',
    type: 'Client Website',
    description:
      'A client website built for DHN Consulting, a strategic growth and financial advisory firm - "Empowering Strategic Growth & Financial Excellence."',
    image: '/images/projects/dhn-consulting.svg',
    tags: ['Next.js', 'TypeScript', 'Client Project'],
    source: 'https://github.com/oghenenoghie/DHN-consulting-website',
    visit: 'https://dhn-consulting-website.vercel.app',
    caseStudy: {
      overview:
        'A client website built for DHN Consulting, a strategic growth and financial advisory firm.',
      problem:
        'DHN Consulting needed a professional web presence to communicate its strategic growth and financial advisory services to prospective clients.',
      solution:
        'A Next.js/TypeScript marketing website deployed to production for the client.',
      keyFeatures: ['Company and services presentation', 'Responsive, production-deployed marketing site'],
      techStack: ['Next.js', 'TypeScript'],
      architecture: NOT_DOCUMENTED,
      database: NOT_DOCUMENTED,
      api: NOT_DOCUMENTED,
      authAndAuthorization: NOT_DOCUMENTED,
      security: NOT_DOCUMENTED,
      challenges: NOT_DOCUMENTED,
      whatILearned: NOT_DOCUMENTED,
      futureImprovements: NOT_DOCUMENTED,
    },
  },
];
