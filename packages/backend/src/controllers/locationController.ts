import type { Request, Response } from 'express'

import { Product } from '../models/Product'
import { logger } from '../utils/logger'

export const getLocations = async (req: Request, res: Response) => {
  try {
    const locations = await Product.findAll({
      attributes: ['location'],
      group: ['location'],
    })

    const locationList = locations.map(location => location.location)

    res.success(locationList)
  } catch (error) {
    logger.error('Failed to fetch locations:', error)
    res.status(500).json({ message: 'Failed to fetch locations' })
  }
}
