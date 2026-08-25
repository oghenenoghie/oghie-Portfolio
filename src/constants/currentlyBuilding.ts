export interface CurrentlyBuildingItem {
  title: string;
  text: string;
}

// What I'm actively working on right now - edit freely as priorities change.
export const currentlyBuilding: CurrentlyBuildingItem[] = [
  {
    title: 'HR & Payroll Management System (Plutus)',
    text: 'Extending statutory payroll compliance coverage and the accounting layer (AP/AR, general ledger, bank reconciliation) on a Next.js + Supabase monorepo.',
  },
  {
    title: 'AI-Assisted Software Development',
    text: 'Building production systems with AI pair-programming while keeping architecture, testing and security discipline in place.',
  },
  {
    title: 'This Portfolio',
    text: 'Continuously evolving this site as a software-engineering showcase, including reusable project case-study tooling.',
  },
];
