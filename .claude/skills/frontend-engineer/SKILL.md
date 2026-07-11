---
name: frontend-engineer
description: Use this skill for any frontend work in this repo - adding or editing sections/components, styling, theming, responsive layout, page metadata, or general UI changes. Triggers on requests like "add a section", "new component", "update styling/colors/spacing", "make it responsive", "fix layout", "update the theme", or "update SEO/meta tags". Encodes this repo's Next.js Pages Router + TypeScript + styled-components conventions so changes match the existing codebase.
---

# Frontend Engineer (this repo)

You are acting as the frontend engineer for **Gabriel's portfolio site**: a
Next.js (Pages Router) + TypeScript + styled-components single-page site.
Match the existing conventions below rather than introducing new patterns.

## Stack facts

- Next.js **Pages Router** (`src/pages/`) - not the App Router. No `'use client'` directives, no `app/` directory.
- React 19, TypeScript in `strict` mode, path alias `@/*` -> `src/*` (but existing code mostly uses relative imports - match the file you're editing).
- Styling is **styled-components** only. No Tailwind, no CSS Modules, no global CSS files besides `src/styles/globals.ts`.
- Icons come from `react-icons` (e.g. `react-icons/ai`, `react-icons/di`).
- No ESLint/Prettier config in the repo. CI (`.github/workflows/build.yml`) only runs `npx tsc --noEmit` and `npm run build` - so a change is "passing" when both of those succeed.

## Component structure

Each section/component lives in its own folder under `src/components/<Name>/`:
- `<Name>.tsx` - the component, default export, function component (arrow function, no `React.FC`).
- `<Name>Styles.ts` - all styled-components for that component, named exports (PascalCase, e.g. `Container`, `Div1`, `NavLink`).

When adding a new section:
1. Create `src/components/<Name>/<Name>.tsx` and `<Name>Styles.ts` following that split.
2. Import styles from the sibling `Styles` file into the component, never inline `styled(...)` calls inside the `.tsx` unless it's a one-off wrapper.
3. Register the section in `src/pages/index.tsx` by importing it and rendering it inside `<Layout>`.

Shared/reusable primitives (not tied to one section) go in `src/styles/GlobalComponents/` (e.g. `Section`, `SectionTitle`, `SectionText`, `Button`).

## Styling & theme conventions

- Theme is defined in `src/themes/default.ts` and typed via `src/styled.d.ts` (`DefaultTheme`). It exposes `colors`, `fonts`, and `breakpoints`.
- Always reach for theme values via the styled-components prop, e.g.:
  ```ts
  @media ${(props) => props.theme.breakpoints.sm} { ... }
  color: ${(props) => props.theme.colors.accent1};
  ```
  Don't hardcode a new breakpoint or duplicate a color that already exists in the theme.
- Breakpoints are `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), each a full `screen and (max-width: ...)` media string - interpolate directly, don't wrap in another `@media (...)`.
- Styled-component **transient props** (props that shouldn't leak to the DOM) are prefixed with `$` - e.g. `<Section $row $nopadding>`, `ButtonBack`'s `alt`/`form` variants. Follow this for any new boolean/style-only prop.
- `ThemeProvider` + `GlobalStyles` are wired once in `src/styles/theme.tsx` and consumed from `_app.tsx` - don't re-wrap pages in another `ThemeProvider`.

## Imports

Group imports in two blocks separated by a blank line, alphabetized within each:
1. External packages (`react`, `next/link`, `react-icons/...`, `styled-components`).
2. Local/relative imports (sibling `Styles` file last is fine, but keep the rest alphabetical).

## Content & metadata

- Site copy (name, taglines, project descriptions) lives inline in the components (e.g. `Hero.tsx`) and in `src/constants/constants.ts` for structured lists (projects, technologies, timeline, accomplishments).
- Page-level SEO/OpenGraph/Twitter meta tags live in `src/pages/index.tsx` inside `<Head>`. If you change the site's title, tagline, or description, update it consistently in both the visible copy and these meta tags.
- `SITE_URL` in `index.tsx` is read from `NEXT_PUBLIC_SITE_URL` (see `.env.example`) with a fallback - don't hardcode a different domain.

## Workflow

1. `npm install` if `node_modules` isn't present.
2. Make changes following the structure above.
3. Verify with `npx tsc --noEmit` (type safety) and `npm run build` (production build) - these are exactly what CI runs.
4. For visual changes, run `npm run dev` and check the page in a browser before calling the change done.
