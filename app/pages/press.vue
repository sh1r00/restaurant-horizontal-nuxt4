<script setup lang="ts">
useSeoMeta({ title: 'Press — Terra & Flame', description: 'Press coverage and accolades.' })
const articles = [
  {source:'Portland Monthly',title:'Best New Restaurant 2024',quote:'"A revelation in rustic dining — Terra & Flame sets a new standard."'},
  {source:'Eater PDX',title:'38 Essential Restaurants',quote:'"Chef Santos brings Barcelona-level technique to every wood-fired dish."'},
  {source:'The Oregonian',title:'★★★★ — Exceptional',quote:'"The ribeye alone is worth crossing town for. Impeccable service."'},
  {source:'Wine Spectator',title:'Award of Excellence',quote:'"A thoughtfully curated wine list that elevates every course."'},
]
</script>
<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h1 class="font-display text-4xl md:text-5xl font-bold text-primary-900 dark:text-white">Press & Accolades</h1>
    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      <article v-for="(a, i) in articles" :key="i" class="card">
        <p class="text-xs font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider">{{ a.source }}</p>
        <h2 class="font-display text-xl font-bold text-primary-900 dark:text-white mt-1">{{ a.title }}</h2>
        <p class="text-sm text-primary-600 dark:text-primary-300 italic mt-2">{{ a.quote }}</p>
      </article>
    </div>
  </div>
</template>