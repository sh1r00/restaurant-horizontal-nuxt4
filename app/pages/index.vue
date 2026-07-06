<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({ title: 'Terra & Flame — Modern Rustic Dining', description: 'Award-winning modern rustic cuisine in Portland.' })
</script>
<template>
  <!-- Hero -->
  <section class="relative h-[90vh] flex items-center overflow-hidden" aria-labelledby="hero-heading" style="background-image: url('/pics/food.jpg'); background-size: cover; background-position: center;">
    <div class="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-950/80" aria-hidden="true" />
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 id="hero-heading" class="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">{{ t('hero.title') }}</h1>
      <p class="mt-6 text-lg md:text-xl text-primary-200 max-w-2xl mx-auto">{{ t('hero.subtitle') }}</p>
      <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink to="/contact" class="btn-primary bg-accent-600 hover:bg-accent-700 !px-8 !py-4 !text-lg">{{ t('hero.cta') }}</NuxtLink>
        <NuxtLink to="/menu" class="btn-outline !border-white/30 !text-white hover:!bg-white/10 !px-8 !py-4 !text-lg">{{ t('hero.viewMenu') }}</NuxtLink>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="py-20 bg-surface dark:bg-primary-950" aria-labelledby="features-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article class="card text-center"><AIcon name="local_florist" size="lg" decorative /><h3 class="text-lg font-bold text-primary-900 dark:text-white mt-3">Farm to Table</h3><p class="text-sm text-primary-600 dark:text-primary-300 mt-2">Ingredients sourced daily from local farms.</p></article>
        <article class="card text-center"><AIcon name="local_fire_department" size="lg" decorative /><h3 class="text-lg font-bold text-primary-900 dark:text-white mt-3">Wood-Fired</h3><p class="text-sm text-primary-600 dark:text-primary-300 mt-2">Every dish kissed by open flame.</p></article>
        <article class="card text-center"><AIcon name="wine_bar" size="lg" decorative /><h3 class="text-lg font-bold text-primary-900 dark:text-white mt-3">Curated Wines</h3><p class="text-sm text-primary-600 dark:text-primary-300 mt-2">Thoughtfully selected to complement every course.</p></article>
      </div>
    </div>
  </section>
</template>