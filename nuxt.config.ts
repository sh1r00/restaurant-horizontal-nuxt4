export default defineNuxtConfig({
  compatibilityVersion: 4,
  compatibilityDate: '2025-07-05',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Terra & Flame — Modern Rustic Dining',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Award-winning modern rustic cuisine. Seasonal menu, craft cocktails, and warm ambiance. Reserve your table today.' },
        { name: 'theme-color', content: '#5D4037' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&display=swap' },
      ],
    },
  },

  modules: [
    '@vite-pwa/nuxt','@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-security'],

  i18n: {
    baseUrl: process.env.APP_BASE_URL || 'http://localhost:3000',
    strategy: 'prefix',
    defaultLocale: 'en',
    lazy: true,
    detectBrowserLanguage: false,
    locales: [
      { code: 'en', language: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'es', language: 'es', iso: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'am', language: 'am', iso: 'am-ET', name: 'አማርኛ', file: 'am.json' },
    ],
    langDir: 'locales/',
  },

  pwa: {
    registerType: 'autoUpdate',
    devOptions: { enabled: false },
    manifest: { name: 'Terra & Flame', short_name: 'Terra & Flame', theme_color: '#1c1917', background_color: '#ffffff', display: 'standalone' },
    workbox: { globPatterns: ['**/*.{js,css,html,png,svg,ico,woff2,json}'], navigateFallback: '/', cleanupOutdatedCaches: true, skipWaiting: true, clientsClaim: true,
      runtimeCaching: [
        { urlPattern: /\\.json$/, handler: 'StaleWhileRevalidate', options: { cacheName: 'i18n' } },
        { urlPattern: /\\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/, handler: 'CacheFirst', options: { cacheName: 'images' } },
        { urlPattern: /^https:\/\/fonts\\.googleapis\\.com/, handler: 'StaleWhileRevalidate', options: { cacheName: 'google-fonts' } },
        { urlPattern: /^https:\/\/fonts\\.gstatic\\.com/, handler: 'CacheFirst', options: { cacheName: 'google-webfonts' } },
      ],
    },
  },
  security: {
    headers: process.env.NODE_ENV === "development" ? false : {
      contentSecurityPolicy: {
        'default-src': ["'self'"],
        'script-src': ["'self'", "'strict-dynamic'", "'nonce-{{nonce}}'"],
        'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        'font-src': ["'self'", 'https://fonts.gstatic.com', 'https://fonts.googleapis.com'],
        'img-src': ["'self'", 'data:', 'https:'],
        'connect-src': ["'self'"],
        'frame-src': ["'self'"],
        'frame-ancestors': ["'self'"],
        'base-uri': ["'self'"],
        'form-action': ["'self'"],
      },
    },
    rateLimiter: { tokensPerInterval: 30, interval: 60000 },
    xssValidator: process.env.NODE_ENV !== "development",
  },

  components: {
    dirs: [
      { path: '~/components/atoms', pathPrefix: false },
      { path: '~/components/organisms', pathPrefix: false },
    ],
  },

  css: ['~/assets/css/main.css'],
  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit', 'pinia'],
    },
  },
  nitro: { prerender: { failOnError: false } },
  routeRules: { '/': { redirect: '/en/' } },
})
