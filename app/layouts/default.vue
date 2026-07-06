<template>
  <div :class="rootClass">
    <a href="#main-content" class="skip-to-content">{{ $t('a11y.skipToContent') }}</a>
    <OHeader />
    <main id="main-content" tabindex="-1" class="flex-1"><slot /></main>
    <OFooter />
  </div>
</template>
<script setup lang="ts">
import { useDarkModeStore } from '~/stores/darkMode'
const darkModeStore = useDarkModeStore()
const rootClass = computed(() => ({ 'min-h-screen flex flex-col': true, 'dark': darkModeStore.isDark }))
onMounted(() => darkModeStore.initialize())
</script>