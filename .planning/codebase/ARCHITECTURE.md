---
date: 2026-08-14
---

# Architecture — 15miles Website

## Pattern & Design
- **Architecture Style**: Single Page Application (SPA) built with React and React Router, structured around modular page components and reusable UI sections.
- **Component-Driven Development**: High cohesion UI components located in `src/components/`, full page views in `src/pages/`, and shared utilities in `src/lib/`.

## Layers & Data Flow
1. **Entry Point (`src/main.tsx`)**: Mounts root React application wrapped in BrowserRouter.
2. **Root Component (`src/App.tsx`)**: Configures top-level routing (`React Router`), layout wrappers (`Navbar`, `Footer`, `ScrollToTop`, `GrainEffect`, smooth scroll wrapper), and route definitions.
3. **Pages (`src/pages/`)**: Individual route views (`Home.tsx`, `Atlas.tsx`, `Engineering.tsx`, `Philosophy.tsx`, `Company.tsx`, `Products.tsx`, `Process.tsx`, `Careers.tsx`, `Contact.tsx`, `Privacy.tsx`, `Terms.tsx`, `Blog.tsx`, `StartJourney.tsx`, etc.).
4. **Sections & Components (`src/components/`)**: Modular visual blocks (`Hero.tsx`, `AtlasSystemSection.tsx`, `HorizonThirtyYearsRoom.tsx`, `WhyFifteenMilesSection.tsx`, `CorporatePillars.tsx`, etc.).
5. **Utilities (`src/lib/`)**: Helper functions (`cn` for Tailwind class merging in `src/lib/utils.ts`, analytics tracking in `src/lib/analytics.ts`).

## Entry Points
- `src/main.tsx`: React DOM mount point.
- `src/App.tsx`: Central route mapping and global layout orchestration.
- `index.html`: HTML template with font preloads and metadata.
- `scripts/generate-sitemap.js`: Post-build sitemap generator.
- `scripts/optimize-images.js`: Post-build image optimization script.
