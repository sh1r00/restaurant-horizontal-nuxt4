<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({ title: 'Menu — Terra & Flame', description: 'Seasonal menu with locally sourced ingredients.' })

const menuCategories = [
  { title: 'Starters', items: [
    { name: 'Charred Octopus', description: 'Smoked paprika, preserved lemon, olive oil', price: 18 },
    { name: 'Burrata', description: 'Heirloom tomatoes, basil, aged balsamic', price: 15 },
    { name: 'Wood-Fired Bread', description: 'Whipped ricotta, honey, sea salt', price: 10 },
  ]},
  { title: 'Mains', items: [
    { name: 'Grilled Ribeye', description: '14oz dry-aged, rosemary butter, roasted garlic', price: 42 },
    { name: 'Pan-Seared Salmon', description: 'Lemon caper sauce, seasonal vegetables', price: 32 },
    { name: 'Wild Mushroom Risotto', description: 'Porcini, chanterelle, parmesan crisp', price: 26 },
    { name: 'Roasted Half Chicken', description: 'Garlic herb marinade, fingerling potatoes', price: 28 },
  ]},
  { title: 'Desserts', items: [
    { name: 'Dark Chocolate Torte', description: 'Sea salt caramel, vanilla cream', price: 14 },
    { name: 'Seasonal Fruit Galette', description: 'Housemade pastry, crème fraîche', price: 13 },
    { name: 'Affogato', description: 'Espresso poured over vanilla gelato', price: 11 },
  ]},
]
</script>
<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h1 class="font-display text-4xl md:text-5xl font-bold text-center text-primary-900 dark:text-white">{{ t('menu.title') }}</h1>
    <p class="mt-4 text-center text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">{{ t('menu.description') }}</p>
    <div v-for="(cat, i) in menuCategories" :key="i" class="mt-12">
      <h2 class="font-display text-2xl font-bold text-primary-900 dark:text-white pb-3 border-b-2 border-accent-500">{{ cat.title }}</h2>
      <div class="mt-4 space-y-4">
        <div v-for="(item, j) in cat.items" :key="j" class="flex justify-between items-start py-3 border-b border-primary-100 dark:border-primary-800">
          <div><h3 class="font-semibold text-primary-900 dark:text-white">{{ item.name }}</h3><p class="text-sm text-primary-500 dark:text-primary-400">{{ item.description }}</p></div>
          <span class="font-bold text-accent-700 dark:text-accent-400 ml-4 shrink-0">${{ item.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>