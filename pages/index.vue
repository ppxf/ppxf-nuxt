<script setup lang="ts">
  const toast = useToast()
</script>
<template>
  <div class="flex flex-col items-center gap-5">
    <div class="text-center text-2xl font-medium">
      {{ $t('hello world') }}
    </div>
    <div class="flex gap-5">
      <NuxtLink
        class="h-10 w-20 rounded-lg bg-red-500 text-center font-medium leading-10 text-white"
        to="/1"
        >{{ $t('go to 1') }}</NuxtLink
      >
      <NuxtLink
        class="h-10 w-20 rounded-lg bg-red-500 text-center font-medium leading-10 text-white"
        to="/2"
        >{{ $t('go to 2') }}</NuxtLink
      >
      <NuxtLink
        class="h-10 w-20 rounded-lg bg-red-500 text-center font-medium leading-10 text-white"
        to="/3"
        >{{ $t('go to 3') }}</NuxtLink
      >
    </div>
    <UButton
      :label="$t('Show toast')"
      @click="toast.add({ title: 'Hello world!' })"
    />
  </div>
</template>
