# Le Crimson

**News, tuned to you.** Le Crimson is a personalised news reader. Pick your interests, get a feed built around them, search across every source, save stories for later, and share them with friends in a community feed. Admins get a dashboard with reader and system metrics.

> **v2 (2026)** is a ground-up rebuild of the original 2022 team project (Create React App + a Spring Boot backend on Heroku). See [docs/MODERNIZATION.md](docs/MODERNIZATION.md) for the full audit and what changed.

## Features

|                  |                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| **Onboarding**   | Demo sign-in (no account needed) or Google Identity Services, then choose from 9 interests           |
| **For you feed** | Lead story, "also today", latest grid and per-topic sections, filtered to your interests             |
| **Topics**       | One dynamic `/topic/:id` page per category, with follow/unfollow                                     |
| **Search**       | Debounced, URL-synced, accent-insensitive search with topic filters                                  |
| **Articles**     | Reading view, bookmarks, copy link, share to the community with a comment                            |
| **Community**    | Feed of shared stories with optimistic likes, plus follow suggestions                                |
| **Connections**  | Friends, followers, requests, suggestions and blocked lists, as accessible tabs                      |
| **Profile**      | Editable profile, stats, interests and your shares                                                   |
| **Admin**        | KPI tiles, accessible SVG charts (with table views), recent sign-ups and a system log                |
| **Everywhere**   | Dark mode, mobile layout, skeleton loading, error and empty states, a 404 page, legacy URL redirects |

## Tech stack

- **Vite 8**, **React 19** and **TypeScript 6** (strict, `noUncheckedIndexedAccess`; TypeScript 7 once typescript-eslint supports it)
- **React Router 8** (data router, lazy-loaded routes, per-route error boundaries)
- **TanStack Query 5** for data fetching, caching and optimistic updates
- **Tailwind CSS 4** with semantic design tokens for light and dark themes; Fraunces and Inter fonts self-hosted
- **Vitest 5** and **Testing Library** for unit and integration tests; **Playwright** and **axe-core** for end-to-end and WCAG 2.1 AA checks
- **ESLint 9** (typescript-eslint, react-hooks, jsx-a11y; stays on 9 until jsx-a11y supports ESLint 10) and **Prettier**; **GitHub Actions** CI

## Getting started

```bash
nvm use            # Node 22
npm install
npm run dev        # http://localhost:5173
```

With no configuration the app runs in **demo mode**. A bundled, in-browser API serves 36 sample stories (all fictional), community posts and connections, and your interactions persist in `localStorage`.

### Configuration

Copy `.env.example` to `.env.local`. Every value is optional.

| Variable                | Purpose                                                                                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `VITE_API_BASE_URL`     | Point at a live Le Crimson backend. The HTTP adapter speaks the original v1 endpoints (`/news/home`, `/news/topic`, `/news/search`, `PUT /profile`). |
| `VITE_GOOGLE_CLIENT_ID` | Enables "Sign in with Google" (Google Identity Services).                                                                                            |
| `VITE_CONTACT_ENDPOINT` | A form endpoint (e.g. Formspree) for the contact page.                                                                                               |
| `VITE_ROUTER_MODE`      | `browser` (default) or `hash` for static hosts without an SPA fallback.                                                                              |

## Scripts

| Command                                       | What it does                                                                                      |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `npm run dev`                                 | Start the dev server                                                                              |
| `npm run build`                               | Type-check and build to `dist/`                                                                   |
| `npm run build:demo`                          | Build a **single self-contained HTML file** (`dist-demo/index.html`) for embedding in a portfolio |
| `npm run lint` / `typecheck` / `format:check` | Static checks                                                                                     |
| `npm test`                                    | Unit and integration tests (Vitest)                                                               |
| `npm run test:e2e`                            | End-to-end and accessibility tests (Playwright + axe)                                             |
| `npm run check`                               | Everything CI runs, in one command                                                                |

## Project structure

```
src/
  api/          typed API contract, demo adapter, legacy HTTP adapter, React Query hooks
  auth/         session store, AuthProvider, Google sign-in, route guard
  components/   layout (header, shell, errors), news cards, social, charts, UI primitives
  data/         fictional demo content
  features/     interest picker
  lib/          categories, storage, formatting, theme, persisted stores
  pages/        one file per route (lazy-loaded)
e2e/            Playwright journeys + axe accessibility scans
```

## Credits

Originally built in 2022 by Nitish Sundarraj, Sindhiya and Mohamed Nabeel Deen. The v2 rebuild is maintained by Nitish Sundarraj.
