---
date: 2026-08-14
---

# Concerns — 15miles Website

## Technical Debt & Areas of Improvement
- **Test Suite**: Absence of automated unit/integration tests (Vitest/Jest/React Testing Library) makes regression testing manual.
- **Error Boundaries**: Lack of global React error boundaries to catch rendering crashes gracefully.
- **Accessibility (a11y)**: Aria labels and keyboard navigation can be further audited across complex animated sections (Framer Motion / Lenis smooth scroll).

## Security & Performance
- **Image Optimization**: Relies on post-build scripts (`optimize-images.js`) with optional `sharp` dependency; build falls back gracefully if `sharp` is missing.
- **Environment Variables**: Minimal usage; ensure any future sensitive API keys are properly isolated from client bundles.
