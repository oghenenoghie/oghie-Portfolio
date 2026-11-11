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
    id: 8,
    slug: 'business-systems-platform',
    title: 'Business Systems Platform - Shared Core, Four Products',
    type: 'Platform Architecture / Monorepo',
    description:
      'A multi-tenant monorepo where one shared core - tenancy, RBAC and Row-Level Security, a double-entry ledger and a statutory rules engine - backs four products: payroll, a cooperative society, hotel management and school timetabling.',
    image: '/images/projects/business-systems.svg',
    tags: ['TypeScript', 'PostgreSQL', 'Row-Level Security', 'Next.js', 'Vitest', 'pnpm monorepo'],
    source: 'https://github.com/oghenenoghie/business-repo',
    caseStudy: {
      overview:
        'A multi-tenant business systems platform built as a pnpm monorepo. Three shared packages - core (tenancy, RBAC, Postgres Row-Level Security, audit log), a double-entry ledger, and an effective-dated statutory rules engine - underpin four vertical products: Wagebook (payroll), Ajo (cooperative society savings, loans and dividends), Portier (hotel property management) and Termly (school timetabling, CBT exams and fees).',
      problem:
        'Payroll, cooperative, hotel and school software all need the same hard foundations: tenant isolation, correct money handling and an auditable ledger. Built as four separate repos, that means four copies of the money code - fix a rounding bug in one and it survives in the other three.',
      solution:
        'Shared code, separate products. The apps are independent at runtime and share nothing but the packages, with one Postgres server and one database per app - if the hotel crashes, payroll keeps running. Each product proves its hardest business rule at the database level, not only in application code.',
      keyFeatures: [
        "Core package: tenancy, RBAC, Postgres Row-Level Security and an audit log, with tests proving one organisation cannot read another's rows",
        'Double-entry ledger: integer minor-unit money, append-only entries, and balanced-or-abort postings enforced by a deferred Postgres constraint trigger',
        'Statutory rules engine: a pure (snapshot, rule set) -> payslip function, golden-tested against the Nigeria Tax Act 2025 PAYE bands with cited sources',
        'Payroll (Wagebook): Next.js UI with employees, draft -> calculated -> posted payroll runs and payslip PDFs, deployed against Neon Postgres',
        'Cooperative (Ajo): member roster and statements, contribution posting runs, and a loans engine with eligibility, guarantors, amortization and arrears ageing',
        'Hotel (Portier) and school (Termly) database layers, where double-booking and timetable clashes are made impossible by Postgres constraints',
      ],
      techStack: ['TypeScript', 'Node.js', 'PostgreSQL (node-postgres)', 'Next.js', 'Tailwind CSS', 'Vitest', 'fast-check (property-based testing)', 'pnpm workspaces', 'Docker Compose', 'GitHub Actions CI'],
      architecture:
        'packages/core, packages/ledger and packages/rules are consumed by four apps (payroll, coop, hotel, school). The apps share nothing at runtime but these packages, and each has its own database on one Postgres server. Realtime, webhook-delivery and analytics packages are planned.',
      database:
        'PostgreSQL with Row-Level Security on tenant tables and a scoped app_user role. Constraints carry the business rules: a btree_gist exclusion constraint makes selling the same hotel room twice impossible, and unique constraints on timetable slots block teacher, room and class clashes.',
      api: NOT_DOCUMENTED,
      authAndAuthorization:
        'Tenancy and role-based access control live in the shared core package, with Postgres Row-Level Security as the enforcement layer. The payroll and coop UIs currently sign in through demo personas.',
      security:
        'Money is a bigint in minor units, with the currency exponent looked up per currency (1 KWD = 1000 fils), so no figure is off by a factor of ten. Every journal entry must balance - checked in the application and again by a deferred Postgres trigger - and the ledger is append-only, enforced by database rules.',
      challenges:
        'Proving correctness under concurrency in the database itself: 50 concurrent bookings fired at one hotel room, exactly one succeeds; 50 concurrent attempts to double-book one teacher in one period, exactly one succeeds - with no application-layer lock. Under 100 rounds of randomized balanced postings, the trial balance sums to exactly zero.',
      whatILearned: NOT_DOCUMENTED,
      futureImprovements:
        'Application code for the hotel and school products, plus the planned realtime (presence, optimistic sync), webhook-delivery and analytics packages - all listed as planned in the project README.',
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
    id: 9,
    slug: 'shipcove-trading-drydock',
    title: 'Shipcove Trading - Marine Engine & Parts Platform (Drydock)',
    type: 'Client Website - B2B Trading Platform',
    description:
      'A live B2B trading platform for marine diesel engines and spare parts, built around interactive exploded-diagram part discovery, typo-tolerant OEM part-number search and an admin console for stock, drawings and enquiries.',
    image: '/images/projects/shipcove-drydock.svg',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Row-Level Security', 'Cloudinary', 'Resend'],
    source: 'https://github.com/oghenenoghie/marine-engine-sale-',
    visit: 'https://www.shipcovetrading.com',
    caseStudy: {
      overview:
        'Drydock is the platform behind Shipcove Trading: a headless, image-first marketplace for buying and selling complete marine diesel engines, spare parts and associated equipment across brands such as Wartsila, MAN, MaK, Deutz and Caterpillar, with rental enquiry pages for vessels and marine equipment.',
      problem:
        'Marine-parts traders sell near-identical inventory from similar warehouses, so online what separates them is findability and trust. Engineers and procurement teams search by OEM part number and engine model, not by prose, and used parts only sell when their condition is shown honestly.',
      solution:
        'Three product bets: drawing-driven discovery (tap a callout on an exploded engine diagram and land on the in-stock part), condition transparency through multi-angle photography and wear notes, and part-number-first search with model and category facets.',
      keyFeatures: [
        'Interactive exploded diagrams whose hotspots, stored as normalized (x, y) coordinates, link straight to live stock items',
        'Admin hotspot editor: load a drawing, click to drop a marker, link it to a stock item, save',
        'Typo-tolerant OEM part-number search backed by a pg_trgm GIN index, with model and category facets',
        'Request-for-quote and "sell your equipment to us" flows, with photos uploaded directly from the browser to Supabase Storage',
        'Admin console for stock, drawings, brands, categories, enquiries and the homepage hero slides',
        'Rental pages for vessels and marine equipment, each with its own enquiry form',
      ],
      techStack: ['Next.js 14 (App Router)', 'TypeScript (strict)', 'Tailwind CSS', 'shadcn/ui (Radix)', 'Framer Motion', 'Supabase (Postgres, Auth, Storage)', 'Cloudinary', 'Resend', 'Vitest', 'Vercel', 'GitHub Actions CI'],
      architecture:
        'A Server-Component-first Next.js app. Public pages query Supabase through a data layer that falls back to seed fixtures when the database is unreachable, so the site degrades instead of returning errors. Admin writes go through server actions that verify the admin role before using the service-role client, and Cloudinary serves diagram images through a custom next/image loader.',
      database:
        'PostgreSQL via Supabase. The taxonomy (brand -> engine model -> drawing -> hotspot -> stock item) is the backbone; per-category attributes live in a jsonb specs column, and OEM numbers are stored as a text[] with a pg_trgm GIN index for fuzzy search.',
      api: 'Next.js route handlers for enquiries, upload signing and cache revalidation. Enquiries are saved to the database first, then the team is notified by email through Resend.',
      authAndAuthorization:
        'Supabase Auth for the admin console. Server actions call requireAdmin() to check the admin role in the user\'s app metadata before any write, and the service-role client is never imported into client code.',
      security:
        'Row-Level Security allows public read of listings and public insert of enquiries, but restricts every other write - and all enquiry reads - to the admin role. Storage buckets mirror this: anyone can upload sell-to-us photos, only admins can add stock photos.',
      challenges:
        'Indexing a text[] of OEM numbers for trigram search needed an immutable array-to-string wrapper in the migration, and pages that read live stock render dynamically so admin edits appear immediately instead of being baked into a static build.',
      whatILearned: NOT_DOCUMENTED,
      futureImprovements: 'Moving search to Meilisearch or Typesense as the catalogue grows - the one open item on the project roadmap.',
    },
  },
  {
    id: 10,
    slug: 'b-edge-artworks',
    title: 'B-Edge Artworks - Curated Art Marketplace',
    type: 'Client Website - Art Marketplace',
    description:
      'A live, cinematic gallery and marketplace for original paintings, sculpture and bronze: collectors browse and enquire, artists submit work to sell, and visitors explore art through thirteen movements, all run from an admin console.',
    image: '/images/projects/b-edge-artworks.svg',
    tags: ['Next.js', 'TypeScript', 'Neon PostgreSQL', 'Tailwind CSS', 'GSAP', 'Motion'],
    source: 'https://github.com/oghenenoghie/pronlart2026',
    visit: 'https://www.b-edgeartworks.com',
    caseStudy: {
      overview:
        'B-Edge Artworks is a curated marketplace that brings artists and collectors together around original works. Three surfaces share one design language: the gallery and shop, with a museum-quality detail page for every work; thirteen movement pages from Renaissance to Bronze that double as the discovery layer; and a sell flow plus a permanent archive of sold and past works.',
      problem:
        'Most art marketplaces show work as generic e-commerce cards. A gallery needs browsing that feels like walking a museum, metadata a collector can trust, and a back office the owner can run without a developer.',
      solution:
        'An atmosphere-first Next.js site where the artwork is the hero and every work carries the same "museum label" (artist, title, year, medium, dimensions, price or price on request), backed by Neon Postgres and an admin console for the whole catalogue.',
      keyFeatures: [
        'Gallery and artwork detail pages built on a consistent museum-label pattern',
        'Thirteen movement ("art class") pages curating work by period and idea',
        'Artist profiles, a sell flow for artists to submit work, and a permanent archive of sold works',
        'Enquiry and contact forms saved to the database',
        'Admin console for artworks (with inline status editing), artists, movements, mediums, enquiries, submissions and site settings',
        'Layered, restrained motion (Lenis smooth scrolling, Motion, GSAP) that respects prefers-reduced-motion',
      ],
      techStack: ['Next.js 14 (App Router)', 'TypeScript (strict)', 'Tailwind CSS', 'Lenis', 'Motion', 'GSAP', 'Neon PostgreSQL (serverless driver)', 'Neon Auth', 'Vercel', 'GitHub Actions CI'],
      architecture:
        "A server-rendered Next.js App Router app that talks to Neon over its serverless HTTP driver. Artwork images are stored in Postgres itself and served through an image route and next/image's optimizer, so the site needs no separate object-storage service.",
      database:
        'Neon serverless Postgres is the system of record for the catalogue, enquiries and sell submissions, and hi-res artwork images live in an images table as raw bytes. Prices are integer minor units with a per-currency exponent (KWD = 3, JPY = 0), and a work without a fixed price shows "Price on request".',
      api: 'Next.js route handlers for contact, enquiries, sell submissions, media upload and image delivery.',
      authAndAuthorization:
        'Admin routes are protected by Neon Auth (managed Better Auth). requireAdmin() redirects anyone without the admin role back to the sign-in page.',
      security:
        'Admin actions run server-side behind requireAdmin(), and database and auth modules are marked server-only so they cannot be bundled into client code.',
      challenges:
        "Running Neon Auth on Next.js 14 when its SDK requires Next.js 16 - solved by calling the auth service directly over its REST API - and keeping images in Postgres so the whole site runs on a single managed service.",
      whatILearned: NOT_DOCUMENTED,
      futureImprovements:
        'Online checkout behind a single payment-provider interface (Stripe internationally, Paystack/Flutterwave in Nigeria, Tap/MyFatoorah in the Gulf) and email notifications through Resend - both planned in the project brief but not yet wired.',
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
  {
    id: 11,
    slug: 'intelligent-cbt-platform',
    title: 'Intelligent CBT Platform - AI-Assisted School Exams',
    type: 'Full-Stack / AI Application (In Development)',
    description:
      'A computer-based testing platform for schools: teachers draft exam questions with Claude from school-approved learning materials only, then review, approve, publish and grade them, under a strict per-school tenant model.',
    image: '/images/projects/intelligent-cbt.svg',
    tags: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'PostgreSQL', 'Claude API'],
    source: 'https://github.com/oghenenoghie/cbt',
    caseStudy: {
      overview:
        'An AI-powered computer-based testing platform designed for two clients on one backend: a web application for school administration, question authoring and online exams, and a Windows desktop app for secure, offline exams in school labs. The FastAPI backend and the web app are built; the desktop client is still a placeholder.',
      problem:
        'Generic AI question generators draw on general knowledge, which schools cannot trust for assessment. Exams also need a clear approval chain, a reliable timer and grading, and strict isolation between schools.',
      solution:
        'Source-grounded assessment: AI questions are drafted only from a school\'s approved learning materials, keep traceable references to the passages they came from, and stay drafts until a subject teacher approves them. Exams then move through build -> approve -> publish -> sit -> grade -> release.',
      keyFeatures: [
        'Versioned question bank: multiple-choice, true/false and reading passages with follow-on questions',
        'Exam builder with approval by an exam coordinator or school admin, freezing a snapshot at publish',
        'Exam sitting with start and resume, a server-side timer, append-only answer events and auto-grading',
        'Result release, class results, item analysis and answer scripts for staff',
        'Learning-material upload, text extraction and approval for PDF, Word and plain-text files',
        'AI question drafts from approved materials, reviewed beside their cited evidence before approval',
      ],
      techStack: ['Python', 'FastAPI', 'Pydantic', 'SQLAlchemy + Alembic', 'PostgreSQL', 'Next.js', 'TypeScript', 'Anthropic API (Claude)', 'GitHub Actions CI'],
      architecture:
        'A FastAPI backend - auth, school structure, question bank, exams, attempts, results, documents and AI modules, plus a background worker - serves a Next.js web client. An Electron desktop client for offline lab exams is planned against the same backend, and each major decision is recorded as an architecture decision record.',
      database:
        'PostgreSQL, with SQLite supported for local use. Every school-owned record carries a tenant ID, and composite foreign keys on (id, tenant_id) make the database itself keep related rows inside one school.',
      api: 'A versioned REST API under /api/v1 built with FastAPI and Pydantic. AI drafting sits behind a provider interface - Claude, a deterministic fake for tests, or off by default so nothing is spent until it is configured.',
      authAndAuthorization:
        'Users sign in with a school code, username and password. Sessions are server-side: a random token in a Secure, HttpOnly cookie, with only its SHA-256 digest stored, ending after 8 hours, an hour of inactivity, logout, or deactivation. Platform admins are a separate account type, and their actions inside a school are audited.',
      security:
        'Only the subject, topics, objective and chosen extracts of approved materials are sent to the model - never student data - and the API key lives only in the environment. Passwords are hashed with Argon2, staff passwords need at least 12 characters, and repeated failed logins trigger a temporary block.',
      challenges:
        'Grounding AI output: evidence is chosen by lexical (BM25) retrieval from the newest approved version of each document and frozen as numbered sources (S1, S2, ...), and a separate check step judges each candidate question against the sources it cites. If nothing permitted matches, the request is refused before any cost is incurred.',
      whatILearned: NOT_DOCUMENTED,
      futureImprovements:
        "PowerPoint, Excel and CSV ingestion, OCR for scanned pages, semantic (embedding) retrieval, single sign-on through OpenID Connect, and the offline Windows desktop client - all recorded as next stages in the project's architecture decision records.",
    },
  },
  {
    id: 12,
    slug: 'folad-school-management',
    title: 'Folad - Multi-Tenant School Management Platform',
    type: 'REST API / Backend',
    description:
      'A multi-tenant school management backend, with Django as the system of record and FastAPI as an async edge service, covering academics, attendance, timetabling, exams, fees and reporting behind tenant-scoped RBAC and Postgres Row-Level Security.',
    image: '/images/projects/folad-sms.svg',
    tags: ['Python', 'Django REST Framework', 'FastAPI', 'PostgreSQL', 'Row-Level Security', 'Redis', 'Celery'],
    source: 'https://github.com/oghenenoghie/folad_lms_python',
    caseStudy: {
      overview:
        'Folad is a multi-tenant school management platform for primary, secondary and international schools, colleges and multi-campus groups. One deployment serves many organisations, each owning schools, campuses, academic years and terms. The repository is API-only - web and mobile interfaces are separate clients - and it follows an earlier Laravel REST API version of the same product.',
      problem:
        "Enrollment, results, attendance and fees all hang off the academic calendar, and in a shared system one school must never see another school's records. Financial and academic data also has to stay correct and auditable.",
      solution:
        'Django + DRF is the single authoritative writer of domain state. FastAPI handles high-throughput reads, webhooks, notifications and the public API without writing domain tables; when it needs a write, it enqueues a Celery task that runs Django ORM code.',
      keyFeatures: [
        'Tenant hierarchy: organisations, schools, campuses, academic years, terms and departments',
        'Students, guardians, staff and teachers, with class levels, arms, subjects and enrollments',
        'Attendance with an append-only audit trail, and timetabling with clash checks',
        'Examinations, assessments, grading schemes, results and report cards',
        'Fees, invoices, payments, receipts and finance reports',
        'Library, inventory, transport, hostel, assignments, notifications, dashboards and analytics',
      ],
      techStack: ['Python', 'Django + Django REST Framework', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery + Celery Beat', 'S3-compatible storage (MinIO locally)', 'Docker Compose', 'nginx'],
      architecture:
        'Cooperating runtimes behind one nginx edge: Django + DRF (models, migrations, RBAC, auth, every write, and the Django Admin operations console) and a stateless FastAPI edge service for reporting reads, webhooks and the public API, consumed by a separate Next.js frontend. Redis backs caching, rate limiting and Celery.',
      database:
        'PostgreSQL. Every tenant-owned model uses a tenant-scoped manager, with Row-Level Security keyed on a per-request session variable as defence in depth. Money is stored as integer minor units (bigint) in a Money value object, and a Postgres trigger rejects any UPDATE or DELETE on the attendance audit table.',
      api: 'Versioned REST endpoints under /api/v1 with paginated lists, a standard response envelope and a 409 (not a raw 500) on uniqueness conflicts, plus FastAPI edge endpoints with OpenAPI docs.',
      authAndAuthorization:
        'JWT access and refresh tokens with rotation and reuse detection - replaying a rotated refresh token revokes the whole token family - login lockout after repeated failures, and optional TOTP MFA. Permissions are module.action strings resolved from role grants and cached per user and organisation in Redis.',
      security:
        'Tenant isolation is enforced twice, in the app-layer managers and in Postgres RLS, and both layers are covered by tests. The design priorities are explicit: tenant isolation, then data integrity, security and auditability, ahead of performance and developer velocity.',
      challenges:
        'Using Django and FastAPI together without two ORMs fighting over one schema - resolved by making Django the sole writer and routing every FastAPI-originated write through a Celery task that runs Django ORM code.',
      whatILearned: NOT_DOCUMENTED,
      futureImprovements: NOT_DOCUMENTED,
    },
  },
  {
    id: 13,
    slug: 'aswaq-b2b-marketplace',
    title: 'Aswaq - AI-Powered B2B Wholesale Marketplace',
    type: 'B2B Marketplace / AI (In Development)',
    description:
      'A multi-vendor B2B marketplace for wholesale and industrial procurement, with hybrid vector and full-text product search, a Claude tool-calling procurement assistant, and a cart -> RFQ -> quote -> order -> invoice flow split per vendor.',
    image: '/images/projects/aswaq-b2b.svg',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL (pgvector)', 'Claude API', 'Row-Level Security'],
    source: 'https://github.com/oghenenoghie/b2b-ecommcer',
    caseStudy: {
      overview:
        'Aswaq is an AI-powered multi-vendor B2B marketplace for wholesale and industrial procurement, with buyer, vendor and admin dashboards. The full schema and every page are built and wired to typed Supabase queries; a hosted database, the sign-in UI and payment capture are still to be connected.',
      problem:
        'Wholesale buyers procure by specification, quantity and negotiated price rather than one-click checkout, often across several vendors in one order - and keyword search alone misses products described in different words.',
      solution:
        'A Next.js marketplace on Supabase Postgres where search fuses pgvector similarity with Postgres full-text search, a Claude assistant turns natural-language requests into search tool calls that return grounded product cards, and commerce supports tiered pricing, RFQs and quotes with per-vendor order splitting.',
      keyFeatures: [
        'Organisations and memberships for buyers and vendors, plus platform admins',
        'Catalog with categories, product variants, tiered pricing and media',
        'Hybrid search through a Postgres function combining pgvector embeddings with full-text search',
        'AI procurement assistant: natural language -> Claude tool call -> hybrid search -> grounded product cards',
        'Cart -> per-vendor split -> RFQ/quote -> order -> invoice, with tax rules, payments and shipments',
        'Buyer, vendor and admin dashboards reading live data',
      ],
      techStack: ['Next.js (App Router)', 'TypeScript (strict)', 'Tailwind CSS', 'shadcn/ui (Radix)', 'Framer Motion', 'Supabase (Postgres, Auth, Storage)', 'pgvector', 'Anthropic API (Claude)', 'OpenAI embeddings', 'GitHub Actions CI'],
      architecture:
        'A Next.js App Router app with the public site, buyer and vendor dashboards, and admin routes, backed by Supabase. Data access lives in typed lib/data and lib/actions layers, and the assistant route runs a Claude tool loop over the same search path the site uses.',
      database:
        'Supabase Postgres built from eight ordered migrations - 24 tables, from organisations and the catalog to RFQs, orders, invoices, payments, shipments and reviews - with Row-Level Security enabled on every table. Money is stored as integer minor units plus a currency column.',
      api: 'Next.js route handlers for the assistant, search, invoices, cache revalidation and payment webhooks.',
      authAndAuthorization:
        'Supabase Auth with organisation memberships, and 43 Row-Level Security policies scoping what buyers, vendors and admins can read and write. The sign-in UI is not built yet.',
      security: NOT_DOCUMENTED,
      challenges:
        'Building every page against typed queries before a hosted database existed: the database types were written by hand to match the migrations and verified against a scratch Postgres instance, so the app builds and runs cleanly against a placeholder project.',
      whatILearned: NOT_DOCUMENTED,
      futureImprovements:
        'Connecting a hosted Supabase project, a sign-in UI, payment capture through Tap/MyFatoorah and Stripe webhooks, an embedding backfill worker, realtime notifications, and a UI for recommendations and reviews - the next steps listed in the project README.',
    },
  },
];
