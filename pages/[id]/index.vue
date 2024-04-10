<script setup lang="ts">
  import type { Item } from '~/types'

  const route = useRoute()
  const id = computed(() => +route.params.id)
  const result = await fetchItem(id.value)
  const { data } = toRefs(result)
  const loading = computed(() => !data)
  const mapArr = reactive(new Array<Item>(id.value).fill(data.value!))
</script>
<template>
  <LoadingWrapper :loading="loading">
    <div class="flex gap-5">
      <div v-for="item in mapArr" :key="item.id" class="flex flex-col gap-5">
        <div
          class="flex h-10 w-40 items-center justify-center rounded-lg bg-red-300 text-2xl font-medium"
        >
          {{ $t(`${item.title}`) }}
        </div>
        <div
          class="flex size-40 items-center justify-center rounded-lg bg-red-500 text-2xl font-medium"
        >
          {{ $t(`${item.content}`) }}
        </div>
      </div>
    </div>
  </LoadingWrapper>
</template>
