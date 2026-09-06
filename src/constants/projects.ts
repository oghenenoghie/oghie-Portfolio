// Placeholder used for case-study fields where no verified detail exists yet.
// Update these directly once the real information is documented - never replace
// with invented specifics.
export const NOT_DOCUMENTED = 'Not documented yet - see the project source for the current implementation.';

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
  /** Omit when the source lives in a private repo with no public link. */
  source?: string;
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
    id: 7,
    slug: 'geca-advisory',
    title: 'GECA Advisory',
    type: 'Client Website - Corporate Advisory & Training Platform',
    description:
      'A corporate website for a strategic growth, financial advisory and training firm, with a course catalog and training calendar, a services showcase, an online careers/application flow, and a Supabase-backed admin dashboard for managing leads and content.',
    image: '/images/projects/geca-advisory.svg',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Sanity CMS', 'Resend'],
    visit: 'https://www.gecaadvisory.com/',
    caseStudy: {
      overview:
        'A corporate website for GECA Advisory, a strategic growth and financial advisory firm, covering its course catalog and training calendar, services (including private-equity advisory sub-services), team, insights/publications and careers, backed by an authenticated admin dashboard for managing leads and content.',
      problem:
        'A consulting and training firm needs a professional web presence that showcases its course calendar and services, captures leads through contact, course-enquiry and job-application forms, and lets non-technical staff keep course/service/team content current without a code deploy.',
      solution:
        'A Next.js site with its course, service and team content managed in Sanity CMS, public forms that write to Supabase and trigger email notifications via Resend, and a Supabase Auth-gated admin dashboard for reviewing submitted leads and applications.',
      keyFeatures: [
        'Course catalog with a rolling training calendar (multiple upcoming cohort dates per course)',
        'Services showcase, including private-equity advisory sub-services',
        'Careers page with a real file-upload job application form (resume stored in Supabase Storage)',
        'Course-enquiry and contact forms that write to Supabase and email the team via Resend',
        'Admin dashboard (Supabase Auth) for reviewing leads, contact submissions and job applications',
        'Course, service and team content managed in Sanity CMS instead of hardcoded data',
      ],
      techStack: ['Next.js (App Router)', 'TypeScript', 'Supabase (Auth, Storage, Postgres + RLS)', 'Sanity CMS', 'Resend', 'Vercel'],
      architecture:
        'Next.js frontend, with course/service/team content served from Sanity CMS and forms, leads and the admin dashboard backed by Supabase (Postgres with Row-Level Security, Auth, Storage); transactional email goes out through Resend.',
      database:
        'PostgreSQL via Supabase with tracked SQL migrations; lead tables (contact submissions, job applications, course enquiries, subscribers) are insert-only under Row-Level Security, so the public can submit but not read them back.',
      api: 'Next.js route handlers (e.g. the course-enquiry and careers-application endpoints) write to Supabase and send email via Resend.',
      authAndAuthorization:
        'Admin dashboard access is gated by Supabase Auth (email/password), replacing an earlier shared-password/hand-rolled-JWT scheme.',
      security:
        'Lead and application data is insert-only for the public/anon role at the database level (Row-Level Security), readable only through the service-role client the admin dashboard uses.',
      challenges:
        'Migrating course, service and team content off hardcoded files into Sanity CMS without changing the public-facing data shape, and keeping transactional email (Resend) and resume uploads (Supabase Storage) working through early production build failures caused by SDKs that throw synchronously when credentials are missing at build time.',
      whatILearned: NOT_DOCUMENTED,
      futureImprovements: NOT_DOCUMENTED,
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
    id: 5,
    slug: 'anchorship-marine-marketplace',
    title: 'AnchorShip NL - Marine Engine & Parts Marketplace',
    type: 'B2B Marketplace (In Development)',
    description:
      'A B2B marketplace for marine diesel engines and spare parts across major brands (Wartsila, MAN, MaK, Deutz, Caterpillar), with part-number search and an admin console for managing stock listings.',
    image: '/images/projects/anchorship.svg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Drizzle ORM', 'PostgreSQL (Neon)', 'Framer Motion'],
    source: 'https://github.com/oghenenoghie/anchorshipnll_frontend',
    caseStudy: {
      overview:
        'A Next.js frontend for AnchorShip NL, a B2B marketplace for complete marine diesel engines and spare parts spanning major marine brands - Wartsila, MAN, MaK, Deutz and Caterpillar.',
      problem:
        'Marine engine and spare-parts buyers need to search a large, brand-spanning catalog by part number, SKU or OEM number and get accurate matches quickly, while sellers need a straightforward way to manage stock listings.',
      solution:
        'A catalog-driven marketplace with dedicated parts and engines browsing routes, part-number search across SKU, title, subtitle and OEM-number fields, and a single-admin CRUD console for creating, editing and deleting stock listings.',
      keyFeatures: [
        'Catalog browsing across dedicated engines and spare-parts routes',
        'Part-number search by SKU, title, subtitle and OEM number, with fuzzy matching in progress',
        'Admin CRUD console for stock listings',
        'HMAC-signed session cookies for single-admin authentication',
        'Image management via Cloudinary',
      ],
      techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Drizzle ORM', 'Neon PostgreSQL', 'Cloudinary', 'GitHub Actions CI'],
      architecture:
        'Next.js frontend -> Drizzle ORM -> Neon PostgreSQL, with Cloudinary handling product imagery and a single-admin auth layer protecting the CRUD console.',
      database: 'PostgreSQL on Neon, accessed through Drizzle ORM.',
      api: 'Next.js route handlers serve catalog, search and admin CRUD operations directly against the database via Drizzle.',
      authAndAuthorization:
        'Single-admin, credential-based login with HMAC-signed session cookies protecting the admin console.',
      security:
        "Session auth is HMAC-signed, but the project's own README notes that Row-Level Security and a planned Stack Auth integration are not yet complete - noted here rather than presented as finished.",
      challenges:
        'Building fast, typo-tolerant part-number search across SKU, title, subtitle and OEM-number fields for a catalog spanning multiple engine brands.',
      whatILearned: NOT_DOCUMENTED,
      futureImprovements:
        "Enabling fuzzy search matching, adding Row-Level Security, and completing the Stack Auth integration - all noted directly in the project's own README as in-progress work.",
    },
  },
  {
    id: 6,
    slug: 'corpus-ai-document-intelligence',
    title: 'Corpus - AI Document Intelligence',
    type: 'AI / Retrieval-Augmented Generation (Prototype)',
    description:
      'A document Q&A system that answers questions across a document library with inline, clickable citations, combining hybrid retrieval, reranking and Claude for grounded generation.',
    image: '/images/projects/corpus-ai-rag.svg',
    tags: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL (pgvector)', 'Claude API', 'RAG'],
    source: 'https://github.com/oghenenoghie/corpus-ai-rag',
    caseStudy: {
      overview:
        'Corpus is a document intelligence system that lets users ask questions across a library of documents and get grounded answers with inline, clickable citations back to the source pages.',
      problem:
        'Answering questions across many documents by hand is slow, and generic LLM answers without citations are hard to trust or verify.',
      solution:
        'A retrieval-augmented generation pipeline that combines vector and keyword search, reranks the fused results, and prompts Claude to cite-or-abstain so every answer traces back to a specific source passage.',
      keyFeatures: [
        'Hybrid retrieval: vector search (HNSW cosine) fused with PostgreSQL full-text search (tsvector) via Reciprocal Rank Fusion',
        'Cross-encoder reranking (bge-reranker-base locally, or Cohere Rerank)',
        'Claude API streaming generation with a cite-or-abstain prompting strategy',
        'Multi-turn conversation history',
        'PDF viewer that jumps directly to the cited page',
      ],
      techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'FastAPI (Python)', 'PostgreSQL + pgvector (Nile)', 'OpenAI text-embedding-3-small', 'Claude API'],
      architecture:
        'Next.js frontend -> FastAPI backend -> hybrid retrieval (pgvector + Postgres full-text search) -> cross-encoder reranker -> Claude API for cited generation.',
      database: 'PostgreSQL with the pgvector extension, hosted on Nile, storing both embeddings and full-text search indexes.',
      api: 'A FastAPI backend exposing retrieval and chat endpoints consumed by the Next.js frontend.',
      authAndAuthorization: NOT_DOCUMENTED,
      security: NOT_DOCUMENTED,
      challenges:
        'Fusing two different retrieval signals (vector similarity and keyword search) into a single ranked result set, then re-ranking that fused set before it ever reaches the generation step.',
      whatILearned:
        "How hybrid retrieval and reranking noticeably improve citation accuracy over a vector-search-only pipeline, and how to structure a prompt so the model abstains rather than answers when it can't cite a source.",
      futureImprovements:
        "The project's own roadmap notes an evaluation suite as the next step, along with testing the pipeline against real APIs and databases rather than isolated unit tests.",
    },
  },
];
