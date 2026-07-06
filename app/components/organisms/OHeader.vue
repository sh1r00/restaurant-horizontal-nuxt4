<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { useDarkModeStore } from '~/stores/darkMode'
const { t, locale, setLocale } = useI18n()
const darkMode = useDarkModeStore()
const isMenuOpen = ref(false)
const locales = [{code:'en',name:'English'},{code:'es',name:'Español'},{code:'am',name:'አማርኛ'}]
const navItems = [{key:'nav.home',to:'/'},{key:'nav.menu',to:'/menu'},{key:'nav.about',to:'/about'},{key:'nav.contact',to:'/contact'}]
async function switchLocale(code:string) { await setLocale(code) }
</script>
<template>
  <header class="sticky top-0 z-50 bg-white/95 dark:bg-primary-950/95 backdrop-blur-sm border-b border-primary-100 dark:border-primary-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="flex items-center gap-2 shrink-0" aria-label="Terra & Flame home">
          <span class="font-display text-2xl font-bold text-primary-700 dark:text-white tracking-tight">Terra<span class="text-accent-600">&</span>Flame</span>
        </NuxtLink>
        <nav aria-label="Main navigation" class="hidden md:flex items-center gap-1">
          <NuxtLink v-for="item in navItems" :key="item.key" :to="item.to" class="px-3 py-2 rounded-lg text-sm font-medium text-primary-600 dark:text-primary-300 hover:text-primary-900 dark:hover:text-white hover:bg-primary-50 dark:hover:bg-primary-800/50 transition-colors">{{ t(item.key) }}</NuxtLink>
        </nav>
        <div class="hidden md:flex items-center gap-2">
          <select :value="locale" aria-label="Select language" class="text-sm bg-transparent border border-primary-200 dark:border-primary-700 rounded-lg px-2 py-1 text-primary-700 dark:text-primary-200" @change="switchLocale(($event.target as HTMLSelectElement).value)"><option v-for="l in locales" :key="l.code" :value="l.code">{{ l.name }}</option></select>
          <ADarkModeToggle />
        </div>
        <button class="md:hidden rounded-lg p-2 text-primary-700 dark:text-primary-200 hover:bg-primary-50 dark:hover:bg-primary-800" :aria-label="isMenuOpen?$t('a11y.closeDialog'):$t('a11y.toggleMenu')" :aria-expanded="isMenuOpen" @click="isMenuOpen=!isMenuOpen"><AIcon :name="isMenuOpen?'close':'menu'" size="sm" decorative /></button>
      </div>
    </div>
    <div v-if="isMenuOpen" class="md:hidden border-t border-primary-100 dark:border-primary-800 bg-white dark:bg-primary-950 animate-fade-in">
      <nav aria-label="Mobile navigation" class="px-4 py-3 space-y-1">
        <NuxtLink v-for="item in navItems" :key="item.key" :to="item.to" class="block px-3 py-2 rounded-lg text-base font-medium text-primary-700 dark:text-primary-200 hover:bg-primary-50 dark:hover:bg-primary-800/50" @click="isMenuOpen=false">{{ t(item.key) }}</NuxtLink>
        <div class="flex items-center gap-3 pt-2 border-t border-primary-100 dark:border-primary-800">
          <select :value="locale" aria-label="Select language" class="flex-1 text-sm bg-transparent border border-primary-200 dark:border-primary-700 rounded-lg px-2 py-1.5 text-primary-700 dark:text-primary-200" @change="switchLocale(($event.target as HTMLSelectElement).value)"><option v-for="l in locales" :key="l.code" :value="l.code">{{ l.name }}</option></select>
          <ADarkModeToggle />
        </div>
      </nav>
    </div>
  </header>
</template>