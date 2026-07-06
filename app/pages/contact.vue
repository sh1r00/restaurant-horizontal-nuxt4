<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({ title: 'Contact — Terra & Flame', description: 'Reserve a table or get in touch.' })
const name = ref(''); const email = ref(''); const message = ref('')
function handleSubmit() { alert('Thank you! We will get back to you shortly.'); name.value=''; email.value=''; message.value='' }
</script>
<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h1 class="font-display text-4xl md:text-5xl font-bold text-primary-900 dark:text-white">{{ t('contact.title') }}</h1>
    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="space-y-4"><div class="card"><h2 class="font-bold text-primary-900 dark:text-white">{{ t('contact.address') }}</h2><p class="text-sm text-primary-500 dark:text-primary-400 mt-1">456 Oak Avenue<br>Portland, OR 97201</p></div><div class="card"><p class="text-sm text-primary-500 dark:text-primary-400">{{ t('contact.phone') }}<br>{{ t('contact.email') }}</p></div></div>
      <form @submit.prevent="handleSubmit" class="card space-y-4">
        <h2 class="font-display text-xl font-bold text-primary-900 dark:text-white">{{ t('contact.reservations') }}</h2>
        <div><label for="cname" class="block text-sm font-medium text-primary-700 dark:text-primary-200 mb-1">{{ t('contact.name') }}</label><input id="cname" v-model="name" required class="w-full px-4 py-2 rounded-lg border border-primary-200 dark:border-primary-700 bg-white dark:bg-primary-900 text-primary-900 dark:text-white" /></div>
        <div><label for="cemail" class="block text-sm font-medium text-primary-700 dark:text-primary-200 mb-1">{{ t('contact.emailLabel') }}</label><input id="cemail" v-model="email" type="email" required class="w-full px-4 py-2 rounded-lg border border-primary-200 dark:border-primary-700 bg-white dark:bg-primary-900 text-primary-900 dark:text-white" /></div>
        <div><label for="cmsg" class="block text-sm font-medium text-primary-700 dark:text-primary-200 mb-1">{{ t('contact.message') }}</label><textarea id="cmsg" v-model="message" rows="3" class="w-full px-4 py-2 rounded-lg border border-primary-200 dark:border-primary-700 bg-white dark:bg-primary-900 text-primary-900 dark:text-white"></textarea></div>
        <button type="submit" class="btn-primary bg-accent-600 hover:bg-accent-700 w-full">{{ t('contact.send') }}</button>
      </form>
    </div>
  </div>
</template>