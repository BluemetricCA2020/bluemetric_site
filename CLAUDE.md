# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start Vite dev server with HMR
npm run build     # type-check then bundle for production (tsc -b && vite build)
npm run lint      # run ESLint
npm run preview   # serve the production build locally
```

No test suite is configured.

## Architecture

**Stack:** React 19 + TypeScript + Vite, deployed to Vercel as a client-side SPA. `vercel.json` rewrites all routes to `index.html` for React Router to handle.

**Routing:** Five pages (`Home`, `Services`, `Research`, `Team`, `Contact`) defined in `src/App.tsx` using `react-router-dom`. The `Nav` component is mounted outside `<Routes>` so it persists across all pages.

**i18n:** Custom, no third-party library. Two languages: English (`en`) and Dutch (`nl`).
- `src/i18n/LanguageContext.tsx` — `LanguageProvider` + `useLanguage()` hook. Language is persisted in `localStorage` and detected from a `country` cookie set by `middleware.ts`.
- `middleware.ts` (Vercel Edge) — sets a `country=nl` cookie for visitors from NL/BE, otherwise `country=en`. Runs once per browser session.
- `src/i18n/translations/` — one file per page, each exporting an object `{ en: {...}, nl: {...} }`.
- `src/hooks/useT.ts` — `useT(translations)` takes a `{ en, nl }` object and returns the current language's slice. Use this pattern in every page/component that needs translated text.

**Animations:** `useScrollAnimation()` hook (`src/hooks/useScrollAnimation.ts`) wires up an `IntersectionObserver` on `.fade-up` and `.fade-in` CSS classes. Call this hook once per page component. Respects `prefers-reduced-motion`.

**Styling:** Single global CSS file at `src/styles/style.css` — no CSS modules, no Tailwind. All layout uses the CSS custom properties defined in `:root` (colors, font families). Mobile nav breakpoint is at 1024 px. Nav z-index is `1100`; mobile overlay is `1050`.

**Adding a new page:**
1. Create `src/pages/NewPage.tsx`, call `useScrollAnimation()` and `useT(newPageTranslations)`.
2. Add translations at `src/i18n/translations/newpage.ts` with `{ en: {...}, nl: {...} }`.
3. Register the route in `src/App.tsx`.
4. Add a nav link in `src/components/layout/Nav.tsx` and `src/components/layout/MobileNav.tsx`.
