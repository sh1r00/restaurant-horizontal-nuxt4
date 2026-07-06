<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({ title: 'Gallery — Terra & Flame', description: 'A visual taste of our cuisine and atmosphere.' })

const photos = [
  { src: '/pics/food.jpg', alt: 'Signature dish' },
  { src: '/pics/burger.jpg', alt: 'Wood-fired burger' },
  { src: '/pics/burger2.jpg', alt: 'Gourmet burger' },
  { src: '/pics/coffee.jpg', alt: 'Artisan coffee' },
  { src: '/pics/espresso.jpg', alt: 'Fresh espresso' },
  { src: '/pics/alex-loup-397220-unsplash.jpg', alt: 'Dining experience' },
  { src: '/pics/bobby-rodriguezz-1043119-unsplash.jpg', alt: 'Restaurant interior' },
  { src: '/pics/dose-juice-1184488-unsplash.jpg', alt: 'Fresh juice' },
  { src: '/pics/edgar-castrejon-459822-unsplash.jpg', alt: 'Plated dish' },
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h1 class="font-display text-4xl md:text-5xl font-bold text-center text-primary-900 dark:text-white">{{ t('gallery.title') }}</h1>
    <p class="mt-4 text-center text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">{{ t('gallery.description') }}</p>
    <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(photo, i) in photos" :key="i" class="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <img :src="photo.src" :alt="photo.alt" class="w-full h-64 object-cover" loading="lazy" />
      </div>
    </div>
  </div>
</template>
