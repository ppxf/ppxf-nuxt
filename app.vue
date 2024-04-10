<script setup lang="ts">
  useHead({
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Hello World',
    meta: [
      {
        name: 'description',
        content: 'Welcome to this website',
      },
    ],
    link: [{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  })
</script>

<template>
  <NuxtLoadingIndicator />
  <UNotifications />
  <LanguageSwitcher />
  <div class="flex size-full items-center justify-center p-24">
    <NuxtPage />
  </div>
</template>
