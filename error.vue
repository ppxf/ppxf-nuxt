<script setup>
  const props = defineProps({
    // eslint-disable-next-line vue/require-default-prop
    error: Object,
  })

  const message = computed(() => String(props.error?.message || ''))
  const is404 = computed(
    () => props.error?.statusCode === 404 || message.value?.includes('404'),
  )
  const isDev = process.dev

  function handleError() {
    return clearError({ redirect: '/' })
  }
</script>

<template>
  <div
    class="flex h-screen flex-col items-center justify-center gap-4 text-center"
  >
    <div class="text-3xl">
      {{ is404 ? 'This page could not be found' : 'An error occurred' }}
    </div>
    <div class="text-xl opacity-50">
      Looks like you've followed a broken link or entered a URL that doesn't
      exist on this site.
    </div>
    <pre v-if="isDev">{{ error }}</pre>
    <button n-link class="rounded border px-4 py-1" @click="handleError">
      Go Back
    </button>
  </div>
</template>
