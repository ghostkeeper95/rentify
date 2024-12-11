import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'
import express, { type Application } from 'express'

import { sequelize, testConnection } from './database/connection'
import { responseFormatter } from './middleware/responseFormatter'
import routes from './routes'
import { logger } from './utils/logger'

dotenv.config()

const app: Application = express()
const PORT = process.env.PORT || 3000

app.use(compression())
app.use(cors())
app.use(express.json())
app.use(responseFormatter)

testConnection()

sequelize.sync().then(() => {
  logger.info('Database synced')
})

app.use('/', routes)

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`)
})
