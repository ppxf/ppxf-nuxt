<script setup>
  const { locale, locales, setLocale } = useI18n()

  const availableLocales = computed(() => {
    return locales.value
  })

  function updateLocale(event) {
    setLocale(event.target.value)
    window.location.reload()
  }

  onMounted(() => {
    const langSwitcher = document.querySelector('#langSwitcher')
    langSwitcher.value = locale.value
  })
</script>

<template>
  <div class="fixed left-10 top-5">
    Language:
    <select
      id="langSwitcher"
      class="rounded-md p-1 text-sm"
      @change="updateLocale"
    >
      <option
        v-for="loc in availableLocales"
        :key="loc.code"
        :value="loc.code"
        p-1
      >
        {{ loc.name }}
      </option>
    </select>
  </div>
</template>
