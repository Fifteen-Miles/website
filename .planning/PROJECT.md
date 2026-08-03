# Fifteen Miles & Atlas

## What This Is

Fifteen Miles is an enterprise software company building configurable platforms that centralize organizational operations into a single environment. Our first product, Atlas, is an enterprise operating system designed to replace siloed tools (ERP, CRM, Drive, Excel, BI, Kanban, Chat, Documents) with a unified, modular platform.

## Core Value

Enterprise software should work together—not against each other. Atlas unifies an organization's entire operation into a single configurable platform with uncompromising design and technical excellence.

## Business Context

- **Customer**: Enterprise organizations and high-growth companies seeking unified operational platforms
- **Revenue model**: SaaS subscription (per-user / tiered enterprise licensing)
- **Success metric**: Platform adoption rate and operational consolidation score
- **Strategy notes**: Positioning Fifteen Miles as a reference in elite enterprise software alongside Apple, Stripe, Linear, and Vercel.

## Requirements

### Validated

- (None yet — ship to validate)

### Active

- [ ] **CORE-01**: Implement design system foundation using TailwindCSS, shadcn/ui, and centralized CSS variables in `global.css` (Dark mode first, minimal, elegant, Apple/Stripe/Linear aesthetic).
- [ ] **CORE-02**: Build responsive floating navbar with glass blur effect, navigation links, and explore CTA.
- [ ] **CORE-03**: Build Home page with Hero, Mission, Vision, The Problem, The Future, Products, Why Fifteen Miles, Engineering, Company Philosophy, Technology, Roadmap, CTA, and Footer sections.
- [ ] **PROD-01**: Build Products directory page showcasing Atlas (Enterprise Operating System) and future products ("Coming Soon").
- [ ] **ATLAS-01**: Build comprehensive Atlas product landing page (Hero, The Problem, How Atlas Works, Architecture, Workspace, Pages, Widgets, Templates, Permissions, Modules, Dashboards, AI Coming Soon, Screenshots, Roadmap, FAQ, CTA).
- [ ] **COMP-01**: Build Company, Manifesto, Solutions, and Contact pages reflecting Fifteen Miles' brand and philosophy.
- [ ] **ENG-01**: Build Engineering page detailing software architecture, quality, testing, and Git workflow to attract top developers.
- [ ] **BLOG-01**: Build Blog and Careers architecture and placeholder content.
- [ ] **POL-01**: Build Privacy and Terms legal pages.
- [ ] **PERF-01**: Implement SEO optimization (Meta tags, OpenGraph, structured data, sitemap-ready), performance tuning (lazy loading, optimized code splitting), accessibility (ARIA, keyboard nav, contrast), and mobile responsiveness across all pages.

### Out of Scope

- Custom design systems — strictly use TailwindCSS and shadcn/ui to maintain consistency and avoid maintenance debt.
- Heavy gradients and noisy neo-morphism — adherence to strict minimalist, premium Apple/Stripe aesthetic.
- Backend implementation for live production database writes (frontend mockup/prototype with robust state and interactive components for launch).

## Context

- **Technical Environment**: React, Vite, TypeScript, TailwindCSS, shadcn/ui, Framer Motion, Lucide icons, Firebase.
- **Design Principles**: Minimal, elegant, premium, technical, confident. Large typography, large whitespace, minimal colors, subtle animated grid backgrounds.
- **Goal**: Deliver a production-ready, highly polished website that establishes Fifteen Miles as a world-class enterprise software company.

## Constraints

- **Tech Stack**: Must use React, Vite, TypeScript, TailwindCSS, and shadcn/ui with centralized `global.css` variables. No inline styles or duplicated colors.
- **Aesthetic**: Apple/Stripe/Linear/Vercel standard. Dark mode first. Subtle animations via Framer Motion.
- **Quality**: Zero compile errors, flawless responsive breakpoints, accessible keyboard navigation, pristine typography.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Strict shadcn/ui + Tailwind adherence | Ensures consistent enterprise UI without custom design system bloat | — Pending |
| Comprehensive modular architecture | Each product (Atlas) has dedicated deep-dive presentation pages | — Pending |

---
*Last updated: 2026-08-03 after project initialization*
