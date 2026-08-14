---
date: 2026-08-14
---

# Structure — 15miles Website

## Directory Layout
```
website/
├── .planning/             # GSD planning & codebase map
├── public/                # Static assets, favicon, robots.txt, sitemap.xml, images
├── scripts/               # Build/maintenance scripts (sitemap, image optimization)
├── src/
│   ├── components/        # Reusable UI components & section blocks
│   │   └── ui/            # Base UI primitives (button.tsx)
│   ├── lib/               # Utility functions (utils.ts, analytics.ts)
│   ├── pages/             # Page components per route (Home.tsx, Atlas.tsx, etc.)
│   │   └── blog/          # Blog post sub-pages
│   ├── styles/            # Styling files (fonts.css)
│   ├── App.css            # Global application styles
│   ├── App.tsx            # Root component & router configuration
│   └── main.tsx           # React entry point
├── index.html             # HTML shell
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration & path aliases
└── vercel.json            # Vercel deployment configuration
```

## Key Locations
- **Routing & Navigation**: `src/App.tsx`, `src/components/Navbar.tsx`, `src/components/Footer.tsx`
- **Pages**: `src/pages/Home.tsx`, `src/pages/Atlas.tsx`, `src/pages/Engineering.tsx`, `src/pages/Philosophy.tsx`
- **Design System & Styling**: `src/index.css`, `src/styles/fonts.css`, `tailwind.config.js`, `postcss.config.js`
- **Scripts**: `scripts/generate-sitemap.js`, `scripts/optimize-images.js`

## Naming Conventions
- **Components**: PascalCase (`Hero.tsx`, `Navbar.tsx`, `WhyFifteenMilesSection.tsx`)
- **Pages**: PascalCase (`Home.tsx`, `Atlas.tsx`, `Engineering.tsx`)
- **Utilities**: camelCase (`utils.ts`, `analytics.ts`)
- **Styles**: kebab-case or css (`fonts.css`, `index.css`, `App.css`)
- **Path Aliases**: `@/*` mapping to `./src/*`
