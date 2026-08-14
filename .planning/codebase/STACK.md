---
date: 2026-08-14
---

# Tech Stack — 15miles Website

## Languages & Runtime
- **Language**: TypeScript (~5.9.3), JavaScript
- **Runtime**: Node.js (Vite frontend runtime)
- **Environment**: Web browser (SPA / Static Site)

## Frameworks & Libraries
- **Core Framework**: React 19.2.0
- **Routing**: React Router DOM 7.14.1
- **Build Tool**: Vite 7.3.1 (`@vitejs/plugin-react`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`, `@tailwindcss/vite`), PostCSS 8.5.25
- **UI Components & Motion**:
  - Framer Motion 12.43.0 (animations & transitions)
  - Lucide React 1.28.0 (icons)
  - `@studio-freight/lenis` / `lenis` (smooth scrolling)
  - Class Variance Authority (`class-variance-authority`), `clsx`, `tailwind-merge`
- **Utilities & Helpers**: custom analytics (`src/lib/analytics.ts`), utils (`src/lib/utils.ts`)

## Build & Tooling
- **Bundler**: Vite with path aliases (`@/*` pointing to `./src`)
- **Linting**: ESLint 9.39.1 (`@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `typescript-eslint`)
- **Scripts**:
  - `dev`: `vite`
  - `build`: `vite build`
  - `generate-sitemap`: `node scripts/generate-sitemap.js`
  - `optimize-images`: `node scripts/optimize-images.js`
  - `postbuild`: `npm run generate-sitemap && npm run optimize-images`
  - `lint`: `eslint .`
  - `preview`: `vite preview`
- **Deployment & Hosting**: Vercel (`vercel.json`), static site generation/hosting.
