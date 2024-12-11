import type { Request, Response } from 'express'
import { DatabaseError } from 'sequelize'

import { Product } from '../models/Product.js'
import { getFromCache, setToCache } from '../utils/cache.js'
import { logger } from '../utils/logger.js'

export const getProductById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params

    const cacheKey = `product:${id}`
    const cachedProduct = getFromCache(cacheKey)

    if (cachedProduct) {
      logger.info(`Cache hit for key: ${cacheKey}`)
      return res.success(cachedProduct)
    }

    logger.info(`Cache miss for key: ${cacheKey}`)

    const product = await Product.findByPk(id)

    if (!product) {
      logger.warn(`Product with ID ${id} not found`)
      return res.error('Product not found', 404)
    }

    const response = product.toJSON()

    setToCache(cacheKey, response)

    res.success(response)
  } catch (error) {
    if (error instanceof DatabaseError) {
      logger.error('Database error:', error.message)
      return res.error('Database error', 500)
    }

    logger.error('Unknown error:', error)
    res.error('Internal server error', 500)
  }
}
