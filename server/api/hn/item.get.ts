import { Item } from '~/types'

export async function fetchItem(id: number): Promise<Item> {
  await new Promise((resolve) => {
    setTimeout(() => resolve(0), 2000)
  })
  return {
    id,
    title: `title ${id}`,
    content: `content ${id}`,
  }
}

export default defineEventHandler((event) => {
  configureSWRHeaders(event)
  const { id } = getQuery(event) as { id?: string }

  if (!id) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Must provide a item ID.',
    })
  }
  if (Number.isNaN(+id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Item ID mush a number but got ' + id,
    })
  }

  return fetchItem(+id)
})
