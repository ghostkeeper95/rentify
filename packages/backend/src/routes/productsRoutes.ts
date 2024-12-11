import express from 'express'

import { getProductById } from '../controllers/getProductByIdController'
import { getProducts } from '../controllers/productsController'

const router = express.Router()

router.get('/', getProducts)
router.get('/:id', getProductById)

export default router
