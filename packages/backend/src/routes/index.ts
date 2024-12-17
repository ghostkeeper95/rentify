import express from 'express'

import categoryRoutes from './categoryRoutes'
import locationsRoutes from './locationsRoutes'
import productsRoutes from './productsRoutes'

const router = express.Router()

router.get('/', (_req, res) => {
  res.redirect('/products')
})

router.use('/products', productsRoutes)
router.use('/categories', categoryRoutes)
router.use('/locations', locationsRoutes)

export default router
