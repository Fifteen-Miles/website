---
date: 2026-08-14
---

# Conventions — 15miles Website

## Code Style & Formatting
- **Language Standard**: TypeScript with strict type checking (`tsconfig.json`).
- **Component Style**: Functional React components with arrow functions or function declarations, returning JSX.
- **Imports**: Grouped logically with absolute path aliases (`@/components/...`, `@/lib/...`).
- **Styling**: Tailwind CSS classes combined with `clsx` and `tailwind-merge` utility (`cn` helper in `src/lib/utils.ts`).

## Naming Standards
- **Files**: PascalCase for components/pages (`Navbar.tsx`, `Home.tsx`), camelCase for utilities (`utils.ts`).
- **Variables & Functions**: camelCase (`scrollToTop`, `trackEvent`).
- **Types & Interfaces**: PascalCase.

## Error Handling & Robustness
- **Fallback UI**: Catch-all 404 Not Found page (`src/pages/NotFound.tsx`).
- **Image Handling**: Custom `LazyImage` component (`src/components/LazyImage.tsx`) for robust image loading and lazy rendering.
- **Scroll Management**: `ScrollToTop` component (`src/components/ScrollToTop.tsx`) ensuring window scroll reset on navigation.
