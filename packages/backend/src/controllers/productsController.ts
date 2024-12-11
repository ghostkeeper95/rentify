import type { Request, Response } from 'express'
import { DatabaseError } from 'sequelize'
import { z } from 'zod'

import { Product } from '../models/Product'
import { productFiltersSchema } from '../schemas/validationSchemas'
import type { ProductFilters } from '../types/productTypes'
import { getFromCache, setToCache } from '../utils/cache'
import { logger } from '../utils/logger'
import { buildWhereClause } from '../utils/productUtils'

export const getProducts = async (req: Request<{}, {}, {}, ProductFilters>, res: Response) => {
  try {
    const cacheKey = `products:${JSON.stringify(req.query)}`
    const cachedResponse = getFromCache(cacheKey)

    if (cachedResponse) {
      logger.info(`Cache hit for key: ${cacheKey}`)
      return res.success(cachedResponse)
    }

    logger.info(`Cache miss for key: ${cacheKey}`)

    const validatedQuery = productFiltersSchema.parse(req.query)

    const { page, limit } = validatedQuery

    const where = buildWhereClause(validatedQuery)

    const pageNumber = Math.max(1, Number(page) || 1)
    const limitNumber = Math.min(50, Math.max(1, Number(limit) || 10))
    const offset = (pageNumber - 1) * limitNumber

    const totalProducts = await Product.count({ where })

    const products = await Product.findAll({
      where,
      limit: limitNumber,
      offset,
    })

    const totalPages = Math.ceil(totalProducts / limitNumber)

    const response = {
      total: totalProducts,
      currentPage: pageNumber,
      totalPages,
      hasNextPage: pageNumber < totalPages,
      products,
    }

    setToCache(cacheKey, response)
    res.success(response)
  } catch (error) {
    if (error instanceof DatabaseError) {
      logger.error('Database error:', error.message)
      res.error('Database error', 500)
    }

    if (error instanceof z.ZodError) {
      logger.warn('Validation error:', error.errors)
      return res.error('Invalid query parameters', 400)
    }

    logger.error('Unknown error:', error)
    res.error('Internal server error', 500)
  }
}
