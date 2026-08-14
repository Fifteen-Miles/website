---
date: 2026-08-14
---

# Testing — 15miles Website

## Test Frameworks
- **Unit/Integration Testing**: No dedicated unit test runner (e.g., Vitest, Jest) currently configured in `package.json`.
- **Type Checking**: TypeScript compiler check (`tsc`) via Vite build process.
- **Linting**: ESLint (`npm run lint`) for code quality and style verification.

## Testing Strategy
- **Build Verification**: `npm run build` verifies TypeScript compilation and bundle generation.
- **Lint Verification**: `npm run lint` checks for code smells and lint errors.
- **Quality Gates**: Post-build scripts automatically validate sitemap generation and image optimization.
