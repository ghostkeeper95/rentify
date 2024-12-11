import { Op, type WhereOptions } from 'sequelize'

import type { ProductFilters } from '../types/productTypes.js'

export const buildWhereClause = (filters: ProductFilters): WhereOptions => {
  const { search, minPrice, maxPrice, category, location } = filters
  const where: WhereOptions = {}

  if (search) {
    where.name = { [Op.like]: `%${search}%` }
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

  return where
}
