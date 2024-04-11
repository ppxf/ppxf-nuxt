import type { Item } from '~/types'

export interface StoreState {
  items: Record<number, Item>
}

export const useItemStore = defineStore('item', () => {
  const items: StoreState = reactive({
    items: {},
  })
  function setItems(item: Item, id: number) {
    items.items[id] = item
  }

  return { items, setItems }
})
