export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  source?: string;
  visit?: string;
  id: number;
}

export const projects: Project[] = [
  {
    title: 'School Management System',
    description: 'A full-featured web application for streamlining school operations - student management, exam processing, result generation, fee tracking, and communication between administrators, teachers, parents, and students.',
    image: '/images/projects/school-ms.svg',
    tags: ['Next.js', 'TypeScript', 'Full-Stack'],
    source: 'https://github.com/oghenenoghie/school-ms',
    id: 0,
  },
  {
    title: 'eCommerce Platform',
    description: 'An eCommerce platform built with Python APIs, delivering secure, scalable, and modular backend services with REST endpoints for product catalogs, payments, and user management.',
    image: '/images/projects/ecommerce.svg',
    tags: ['Python', 'Django/Flask', 'REST API'],
    source: 'https://github.com/oghenenoghie/oghie-store',
    visit: 'https://oghie-store.vercel.app',
    id: 1,
  },
  {
    title: 'Training & Learning Management System',
    description: 'A centralized platform for managing courses, trainers, trainees, schedules, attendance, assessments, and training records.',
    image: '/images/projects/training-lms.svg',
    tags: ['Laravel', 'PHP', 'MySQL'],
    source: 'https://github.com/oghenenoghie/Training-Learning-Management-System-',
    id: 2,
  },
  {
    title: 'DHN Consulting - Client Website',
    description: 'A client website built for DHN Consulting, a strategic growth and financial advisory firm - "Empowering Strategic Growth & Financial Excellence."',
    image: '/images/projects/dhn-consulting.svg',
    tags: ['Next.js', 'TypeScript', 'Client Project'],
    source: 'https://github.com/oghenenoghie/DHN-consulting-website',
    visit: 'https://dhn-consulting-website.vercel.app',
    id: 3,
  },
  {
    title: 'GECA Advisory',
    description: 'A compliance-native HR & payroll platform for Nigeria and Africa, built on the 2026 Nigeria Tax Act framework - automating PAYE, pension, NHF, NHIS, NSITF, ITF and withholding-tax calculation, filing, and remittance for employers.',
    image: '/images/projects/geca-advisory.svg',
    tags: ['Next.js', 'TypeScript', 'Payroll SaaS'],
    visit: 'https://www.gecaadvisory.com/',
    id: 4,
  },
];

export interface TimeLineEntry {
  year: number;
  text: string;
}

export const TimeLineData: TimeLineEntry[] = [
  { year: 2024, text: 'Started building web & software projects', },
  { year: 2025, text: 'Delivered client websites, including DHN Consulting and other consulting & training-sector clients', },
  { year: 2026, text: 'Building full-stack apps - School Management System, Training LMS & eCommerce platforms', },
];
