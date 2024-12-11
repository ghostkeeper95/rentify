import express from 'express'

import productsRoutes from './productsRoutes'

const router = express.Router()

router.get('/', (_req, res) => {
  res.redirect('/products')
})

router.use('/products', productsRoutes)

export default router
