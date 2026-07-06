<script setup lang="ts">
const { t } = useI18n(); const year = new Date().getFullYear()
</script>
<template>
  <footer class="bg-primary-900 dark:bg-black text-primary-200 border-t border-primary-800" role="contentinfo">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div><span class="font-display text-xl font-bold text-white">Terra<span class="text-accent-500">&</span>Flame</span><p class="mt-2 text-sm text-primary-400">{{ t('footer.tagline') }}</p></div>
        <nav aria-label="Footer"><ul class="space-y-2"><li><NuxtLink to="/menu" class="text-sm text-primary-300 hover:text-white">{{ t('nav.menu') }}</NuxtLink></li><li><NuxtLink to="/about" class="text-sm text-primary-300 hover:text-white">{{ t('nav.about') }}</NuxtLink></li><li><NuxtLink to="/contact" class="text-sm text-primary-300 hover:text-white">{{ t('nav.contact') }}</NuxtLink></li></ul></nav>
        <div><h3 class="text-sm font-semibold text-white mb-2">{{ t('footer.hours') }}</h3><p class="text-sm text-primary-400">Tue-Sat: 5:00 PM – 10:00 PM</p><p class="text-sm text-primary-400">Sun: 11:00 AM – 3:00 PM</p><p class="text-sm text-primary-400">Mon: Closed</p></div>
      </div>
      <div class="mt-8 pt-8 border-t border-primary-800 flex flex-col sm:flex-row justify-between items-center gap-2"><p class="text-xs text-primary-500">{{ t('footer.copyright', { year }) }}</p><p class="text-xs text-primary-500">Made with ❤️ by SH1R00</p></div>
    </div>
  </footer>
</template>