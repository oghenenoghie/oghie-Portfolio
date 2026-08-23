## Gabriel Oghie's Portfolio

Full-stack software developer portfolio - backend, APIs, cloud & security focus. Built with Next.js, TypeScript and styled-components.

Featured projects include a compliance-native HR & payroll platform, a School Management System, an eCommerce REST API, a Training & Learning Management System, and client websites.

### Links
- GitHub: [github.com/oghenenoghie](https://github.com/oghenenoghie)
- Contact: ogenenoghie@gmail.com

### Setup

```
npm install
npm run dev
```

### Data

Site copy and structured content live in `src/constants/`:
- `siteConfig.ts` - name, positioning, bio, contact links
- `projects.ts` - featured projects and their case-study content
- `skills.ts` - engineering skills, grouped, plus a separate "exploring" list
- `experience.ts` - career timeline entries
- `achievements.ts` - the achievement counters (single source of truth)
- `currentlyBuilding.ts` - "Currently Building" cards

### Regenerating the downloadable resume PDF

`public/resume.pdf` is a static file rendered from the `/resume` page - it isn't generated automatically at build time. After editing `src/components/Resume/Resume.tsx` or the data files above, regenerate it:

```bash
npm run build && npm run start &
npx playwright pdf http://localhost:3000/resume public/resume.pdf
```

(Requires Playwright's Chromium: `npx playwright install chromium` if not already available.)
