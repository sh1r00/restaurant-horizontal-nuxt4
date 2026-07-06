<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(defineProps<{ variant?: 'filled'|'outlined'; color?: 'primary'|'accent'; type?: 'button'|'submit'; disabled?: boolean; loading?: boolean }>(), { variant: 'filled', color: 'primary', type: 'button' })
defineEmits<{ click: [event: MouseEvent] }>()
const cls = computed(() => props.variant === 'outlined' ? 'btn-outline' : 'btn-primary')
</script>
<template>
  <button :type="type" :disabled="disabled||loading" :aria-busy="loading" :class="cls" @click="$emit('click', $event)">
    <span v-if="loading" class="animate-spin" role="status">⟳</span><slot />
  </button>
</template>