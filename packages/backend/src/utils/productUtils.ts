import { Op, type WhereOptions } from 'sequelize'

import type { ProductFilters } from '../types/productTypes.js'
import { logger } from './logger.js'

const validSortFields = ['price']

export const buildWhereClause = (
  filters: ProductFilters,
): { where: WhereOptions; order: Array<[string, string]> } => {
  const { search, minPrice, maxPrice, category, location, sortBy, sortOrder } = filters

  const where: WhereOptions = {}
  const order: Array<[string, string]> = []

  if (search) {
    where.name_normalized = {
      [Op.like]: `%${search.toLowerCase()}%`,
    }
  }

  if (minPrice || maxPrice) {
    where.price = {}
    if (minPrice) {
      where.price[Op.gte] = minPrice
    }
    if (maxPrice) {
      where.price[Op.lte] = maxPrice
    }
  }

  if (category && category !== 'all') {
    where.category = category
  }

  if (location) {
    where.location = location
  }

  if (sortBy && sortOrder) {
    const sortField = sortBy.toLowerCase()
    const sortDirection = sortOrder.toUpperCase()

    if (validSortFields.includes(sortField)) {
      order.push([sortField, sortDirection])
    } else {
      logger.warn(`Invalid sortBy field: ${sortField}`)
    }
  }

  return { where, order }
}
