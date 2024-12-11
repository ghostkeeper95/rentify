import NodeCache from 'node-cache'

const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 })

export const getFromCache = (key: string): unknown => cache.get(key)

export const setToCache = (key: string, value: unknown): void => {
  cache.set(key, value)
}

export const deleteFromCache = (key: string): void => {
  cache.del(key)
}
