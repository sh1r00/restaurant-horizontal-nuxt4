# Terra & Flame — restaurant-horizontal-nuxt4

> Category: Restaurant Template · Live: https://restaurant-horizontal.netlify.app

## Functionality

A modern-rustic restaurant site with a **horizontal scroll** layout and a wood-fired theme.

- **Public pages** — `app/pages/index.vue` (home), `app/pages/menu.vue`, `app/pages/gallery.vue`, `app/pages/about.vue`, `app/pages/contact.vue`, `app/pages/press.vue`.
- **Layout** — horizontal-scrolling sections; header/footer organisms (`OHeader`, `OFooter`).
- **Reservations** — contact/reservation flow on the contact page.
- **Also included** — dark mode (SSR-safe via Pinia + `useCookie`), PWA (offline + install prompt), i18n (3 locales).

## Stack

- Nuxt 4 (`compatibilityVersion: 4`), Vue 3 `<script setup>`, TypeScript
- Pinia (stores: `darkMode`, `pwaInstall`)
- Tailwind CSS (`@nuxtjs/tailwindcss`)
- `@nuxtjs/i18n` v10 — 3 locales (English, Español, አማርኛ), `strategy: 'prefix'`
- `@vite-pwa/nuxt` — service worker, offline caching, installable manifest
- `nuxt-security` — CSP (nonce-based), rate limiter, XSS validator (production only)
- Vitest + Vue Test Utils (unit), Playwright (e2e)

## Steps Taken

`git log --oneline` (newest first):

- `489fbb1` fix(netlify): root `/` redirect to `/en/` (prefix strategy) + SPA fallback to `/200.html`
- `085586b` fix(netlify): node 24 + legacy-peer-deps (nuxt-security@2.6.0 needs >=24)
- `ce11956` fix(i18n+security): detectBrowserLanguage:false, `$t`→`t`, missing keys, CSP nonce, lazy i18n, branded PWA
- `c8e86cd` fix README.md formatting
- `42d7786` convert README.txt to README.md with GitHub markdown formatting
- `b126be4` add README.txt with deploy instructions + project overview
- `7f7408a` nuxt4 migration/creation + restaurant-horizontal-nuxt4

## Pitfalls & Fixes

### Shared pitfalls (all shiro Nuxt 4 templates)

- **`nuxt-security@2.6.0` needs Node ≥ 24** — Netlify's default Node version is too old and the build fails. Fix: `NODE_VERSION = "24"` in `netlify.toml`.
- **esbuild peer conflict** — a peer dependency conflict (esbuild/rollup) aborts `npm install`. Fix: `npm install --legacy-peer-deps`.
- **i18n v10 `detectBrowserLanguage`** — browser detection causes unpredictable 302s on first load. Fix: `detectBrowserLanguage: false` and generate links with `const localePath = useLocalePath()`.
- **`$t()` is banned in `<template>`** — i18n v10 drops the global `$t()` template helper. Fix: `const { t } = useI18n()` in `<script setup>` and call `t('key')`.
- **Component auto-import `pathPrefix: false`** — default path-prefixed auto-import names don't match the tags, producing a blank screen. Fix: declare each component dir with `pathPrefix: false`.
- **PWA `navigateFallback`** — a precached SPA fallback serves non-precached URLs as the app shell → blank screen. Fix: `navigateFallback: null` and exclude `.html` from precache globs.
- **i18n `prefix` strategy root redirect** — with `strategy: 'prefix'` there is no page at `/`; Netlify must 302 `/` → `/en/`.
- **`defineProps()` without `const props =`** — in `<script setup>` you must capture the return value (`const props = defineProps<...>()`); otherwise destructuring throws "props is not defined".
- **SSG vs SSR output dirs** — `nuxt build` (SSR) writes `.output/server` + `.output/public`; `nuxt generate` (SSG) writes the static site to `.output/public` only. Netlify `publish` must point at `.output/public`.

### Project-specific

- **`pathPrefix: false` on atoms + organisms only** — this template declares `atoms` and `organisms` with `pathPrefix: false` (no `molecules` dir). Tag names must match the component file names exactly.
- **Horizontal scroll layout** — relies on CSS scroll-snap / horizontal flex sections; removing the layout CSS breaks the intended UX even though pages still render.

## Deployment

Static site generation:

```bash
npm install --legacy-peer-deps
npm run generate   # → .output/public
```

Netlify (`netlify.toml`): `NODE_VERSION = "24"`, build command `npm install --legacy-peer-deps --no-audit --no-fund && npm run generate`, publish dir `.output/public`, redirects `/` → `/en/` (302) and `/*` → `/200.html` (200, SPA fallback).

Live: https://restaurant-horizontal.netlify.app
