# Terra & Flame — Horizontal Restaurant
*shiro — where style meets function*

**Category: Restaurant Template**  
**Live:** [https://restaurant-horizontal.netlify.app](https://restaurant-horizontal.netlify.app)  
**GitHub:** [restaurant-horizontal-nuxt4](https://github.com/sh1r00/restaurant-horizontal-nuxt4)  

## About This Project

Modern rustic restaurant with horizontal scroll layout. Wood-fired theme, menu, gallery, reservations.

**Tech:** 
Nuxt 4, Vue 3, Tailwind CSS, Dark Mode, PWA, i18n (3 locales), M3 Design

[![shiro](https://img.shields.io/badge/shiro-where_style_meets_function-6C5CE7)](https://shiro-portfolio-sh1r00.netlify.app)

## Deployment

```bash
npx nuxi generate
```bash
Deploy .output/public to Netlify via API zip upload.
```

## Quick Start (Local Development)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run generate
   ```

4. Preview production build:
   ```bash
   npx serve .output/public
   ```

## Notes

- Built with Nuxt 4 (compatibilityVersion 4) and Vue 3 Composition API
- All projects use atomic design: atoms/ → molecules/ → organisms/
- Dark mode is SSR-safe via Pinia store with useCookie() persistence
- PWA configured with service worker for offline access
- CSP headers configured via nuxt-security module (production only)
- i18n supports 3 locales: English, Español, አማርኛ

## Pitfalls & Fixes

- **nuxt-security@2.6.0 needs Node ≥ 24** → `NODE_VERSION = "24"` in `netlify.toml`.
- **esbuild peer conflict** → `npm install --legacy-peer-deps`.
- **i18n v10** → `detectBrowserLanguage: false` + `const localePath = useLocalePath()`.
- **`$t()` banned in templates** → `const { t } = useI18n()`.
- **component auto-import `pathPrefix: false`** → else blank screen.
- **PWA** → `navigateFallback: null` + exclude `.html` (else blank screen).
- **i18n `prefix`** → `/` → `/en/` 302 redirect.
- **`defineProps()` without `const props =`** → "props is not defined".
- **SSG vs SSR output dirs** → `nuxt generate` → `.output/public`.

Full details: [DOCUMENTATION.md](./DOCUMENTATION.md)

---

*Made with ❤️ by shiro — rasisg@gmail.com — github.com/sh1r00*
