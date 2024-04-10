import type { WritableComputedOptions } from 'vue'
import type { Item } from '~/types'

export interface StoreState {
  items: Record<number, Item>
}

export const useStore = () =>
  useState<StoreState>('store', () => ({
    items: {},
  }))

export function fetchItem(id: number) {
  const state = useStore()

  return reactiveLoad<Item>(
    () => state.value.items[id],
    (item) => {
      state.value.items[id] = item
    },
    () => $fetch('/api/hn/item', { params: { id } }),
  )
}

/**
 * Create reactive state for SWR
 *
 * On server side the data will be fetched eagerly
 */
export async function reactiveLoad<T>(
  get: () => T | undefined,
  set: (data: T) => void,
  fetch: () => Promise<T>,
  init?: T,
) {
  const data = computed({
    get,
    set,
  } as WritableComputedOptions<T | undefined>)
  const loading = ref(false)

  if (data.value == null) {
    if (init != null) {
      data.value = init
    }

    const task = async () => {
      try {
        loading.value = true
        const fetched = await fetch()
        if (data.value != null) {
          data.value = Object.assign(data.value, fetched)
        } else {
          data.value = fetched
        }
      } catch (e) {
        console.error(e)
        data.value = undefined
      } finally {
        loading.value = false
      }
    }

    await task()
  }

  return reactive({
    loading,
    data,
  })
}
