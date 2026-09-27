# Le Crimson v2: modernisation report

This is an audit of the original front end (branch `Nitish`, plus the most complete feature branch `Sprint-3-Final-Deployed`, both from December 2022) and a record of how v2 fixes each problem.

## Why v1 no longer works

| #   | Problem in v1                                                                                                                                            | Impact                                                                                           | v2 fix                                                                                                                                                                                                                                  |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Every request went to `lecrimson-backend.herokuapp.com`. Heroku ended its free dynos in November 2022, so that host is gone.                             | The feed, search, topics and profile were all empty or threw errors.                             | A typed `LeCrimsonApi` contract with two adapters: an in-browser **demo API** (fictional content, persisted interactions) and an **HTTP adapter** that still speaks the v1 endpoints. You switch between them with `VITE_API_BASE_URL`. |
| 2   | Sign-in used `react-google-login` and `gapi-script` (the Google Platform Library `auth2`). Google has retired that flow.                                 | Nobody could log in, so no page past the landing screen was reachable.                           | Google Identity Services via `@react-oauth/google`, enabled by env var, plus a no-account **demo sign-in**. The client ID moved out of the source into `VITE_GOOGLE_CLIENT_ID`.                                                         |
| 3   | `Header.jsx`, `DropDownProfile.js` and `profile.jsx` called `JSON.parse(localStorage…)` and then indexed into the result with no null checks.            | A first visit, cleared storage or skipping onboarding crashed the whole app with a white screen. | Guarded `readJSON` storage with validation, typed persisted stores, route guards (`RequireAuth`), and per-route error boundaries. A regression test covers the old crash.                                                               |
| 4   | Create React App (`react-scripts` 5) is deprecated. The repo also carried both `yarn.lock` and `package-lock.json`, plus a stray `react-script` package. | Slow builds, unmaintained dependencies, and ambiguous installs.                                  | Vite, a single npm lockfile, and a pinned Node version (`.nvmrc`).                                                                                                                                                                      |

## Security and privacy

| Finding                                                                                                          | v2                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **A CometChat `AUTH_KEY` was committed** in `src/components/constants/constants.js`. It is still in git history. | Removed, along with the unused 360-file vendored CometChat UI kit. **Action for the owner: delete or rotate that CometChat app key.** |
| The full Google login response, including tokens, was `console.log`-ed and stored in `localStorage`.             | Only display fields (name, email, avatar) are kept. The decoder is documented as display-only; a backend must verify the ID token.    |
| Browser geolocation was requested silently on the login flow.                                                    | Removed. Location is now an optional profile field the reader types in.                                                               |
| External links built from API data were rendered without validation.                                             | The HTTP adapter only accepts `http(s)` URLs, so `javascript:` URLs are dropped. A unit test covers this.                             |
| EmailJS service, template and public key IDs were hard-coded in `Contact.jsx`.                                   | The contact endpoint comes from `VITE_CONTACT_ENDPOINT`. Nothing sensitive is in source.                                              |
| Three `.rar` backup archives (about 10 MB) were committed on the feature branches.                               | Not carried over. `.gitignore` covers builds, env files and reports.                                                                  |
| A personal Font Awesome kit script was loaded from a third-party CDN.                                            | Replaced with tree-shaken `lucide-react` icons. No third-party scripts load at runtime.                                               |

## Code-quality issues fixed

- **Copy-paste pages.** Eight category folders (`World/`, `Sports/`, …) repeated the same page, grid, card and carousel files, and two `CheckCircle` components each hand-wrote nine checkboxes. v2 has one dynamic `/topic/:topic` route and one data-driven `InterestPicker`.
- **Broken routes.** The header linked to `/preferences`, `/search` and `/chat`, which weren't defined on the default branch. The footer linked to `/aboutUs` while the route was `/aboutus`. Login failure navigated to a non-existent `/login`, and the sidebar linked to `/friend request` (with a space). v2 has a typed route table, a 404 page, and redirects from the legacy URLs.
- **Search.** The search box stored its query in `localStorage` and did a full-page form POST. The results page concatenated an imported _component_ into the request URL. v2 has URL-synced, debounced search with cached results.
- **Side effects.** Every category page fired a `PUT /profile` on mount. v2 syncs the profile only on sign-in and when the profile changes.
- **Hard-coded nav.** `vari1` … `vari9` were built by hand from `items[0]` … `items[8]`. v2 derives the topic strip from the reader's interests.
- **JSX and a11y errors.** `class=` was used instead of `className` (40+ places), images had no `alt`, anchors had no `href` and were used as buttons, clickable `div`s were common, and inputs had no labels. v2 passes `eslint-plugin-jsx-a11y`, and axe-core reports zero WCAG 2.1 AA violations on key pages in both themes.
- **Unused dependencies.** `dateformat`, `html-react-parser`, `twemoji`, `@emotion/core` and others were declared but never imported, and `@mui/icons-material` was imported but never declared. v2 declares only what it imports.
- **No tests or real README.** v2 adds Vitest unit and integration tests, Playwright end-to-end journeys with axe scans, CI on every push and pull request, and full documentation.

## Architecture (v2)

```
UI (pages, components) ──► React Query hooks (src/api/queries.ts)
                                   │
                                   ▼
                        LeCrimsonApi (src/api/types.ts)
                          ├─ demo adapter  (in-browser, localStorage-backed)
                          └─ HTTP adapter  (v1 REST endpoints; falls back to demo for
                                            social, admin and contact features the old
                                            backend never had)
Session, saved stories, theme ─► tiny persisted stores (useSyncExternalStore)
```

## Features carried over and improved

| v1                                                    | v2                                                                                             |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Google login                                          | Google Identity Services + demo login, route guards, sign-out that clears state                |
| Preferences (9 checkboxes, twice)                     | Onboarding + editable interests, follow/unfollow from any topic page                           |
| Home: grid + carousel                                 | For-you feed filtered to your interests: lead story, rows, grid and per-topic sections         |
| 8 category pages                                      | One `/topic/:id` route                                                                         |
| Search (table of links)                               | Debounced search, topic filter chips, keeps previous results while typing                      |
| Social feed (stub, hard-coded 3 posts)                | Real feed with share dialog, comments and optimistic likes                                     |
| Friends/followers/requests/suggestions/blocked tables | Accessible tabbed connections manager with working actions                                     |
| Admin dashboard (recharts, static data)               | KPI tiles, dependency-free accessible SVG charts with table views, users and system log        |
| CometChat chat                                        | Removed (insecure key, deprecated SDK). The community feed covers sharing.                     |
| About / Contact (EmailJS keys in source)              | Rewritten About page, and a validated contact form posting to a configurable endpoint          |
| —                                                     | Bookmarks, article reading view, dark mode, mobile nav, skeletons, error, empty and 404 states |
