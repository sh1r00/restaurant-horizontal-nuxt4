<script setup lang="ts">
defineProps<{ name: string; size?: 'sm'|'md'|'lg'; decorative?: boolean }>()
const sz = { sm:'text-lg', md:'text-2xl', lg:'text-4xl' }
</script>
<template><span class="material-icons select-none" :class="sz[size||'md']" :aria-hidden="decorative?'true':undefined" :role="decorative?'presentation':'img'" :aria-label="!decorative?name:undefined">{{ name }}</span></template>