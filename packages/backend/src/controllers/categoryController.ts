import type { Request, Response } from 'express'

import { Product } from '../models/Product'
import { logger } from '../utils/logger'

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Product.findAll({
      attributes: ['category'],
      group: ['category'],
    })

    const categoryList = categories.map(category => category.category)

    res.success(categoryList)
  } catch (error) {
    logger.error('Failed to fetch categories:', error)
    res.status(500).json({ message: 'Failed to fetch categories' })
  }
}
