<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({ title: 'About — Terra & Flame', description: 'Our story, philosophy, and chef.' })
</script>
<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h1 class="font-display text-4xl md:text-5xl font-bold text-primary-900 dark:text-white">{{ t('about.title') }}</h1>
    <p class="mt-4 text-lg text-primary-600 dark:text-primary-300">{{ t('about.subtitle') }}</p>
    <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="card"><h2 class="font-display text-2xl font-bold text-primary-900 dark:text-white">{{ t('about.philosophy') }}</h2><p class="mt-3 text-primary-600 dark:text-primary-300 leading-relaxed">{{ t('about.philosophyText') }}</p></div>
      <div class="card"><h2 class="font-display text-2xl font-bold text-primary-900 dark:text-white">{{ t('about.chef') }}</h2><p class="mt-3 text-primary-600 dark:text-primary-300 leading-relaxed">{{ t('about.chefText') }}</p></div>
    </div>
  </div>
</template>