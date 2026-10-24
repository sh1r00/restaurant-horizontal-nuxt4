<template><NuxtLayout><NuxtPage /></NuxtLayout></template>
<script setup lang="ts">
const { locale } = useI18n()
useHead(() => ({ htmlAttrs: { lang: locale.value } }))
const i18nHead = useLocaleHead({ addSeoAttributes: true })
useHead(i18nHead)
useHead({link:[{rel:'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons'}]})
</script>