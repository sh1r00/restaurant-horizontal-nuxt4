<script setup lang="ts">
const { t } = useI18n()
import { useDarkModeStore } from '~/stores/darkMode'
const darkMode = useDarkModeStore()
</script>
<template>
  <button class="rounded-full p-2 transition-colors hover:bg-primary-100 dark:hover:bg-primary-800" :aria-label="darkMode.isDark?t('a11y.toggleLight'):t('a11y.toggleDark')" :aria-pressed="darkMode.isDark" @click="darkMode.toggle()">
    <AIcon :name="darkMode.isDark?'light_mode':'dark_mode'" size="sm" decorative />
  </button>
</template>