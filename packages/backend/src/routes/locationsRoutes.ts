import express from 'express'

import { getLocations } from '../controllers/locationController'

const router = express.Router()

router.get('/', getLocations)

export default router
