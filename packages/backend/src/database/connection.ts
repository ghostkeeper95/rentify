import path from 'path'
import { fileURLToPath } from 'url'

import { Sequelize } from 'sequelize'

import { logger } from '../utils/logger'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(__dirname, '../../data/database.sqlite'),
  logging: false,
})

export const testConnection = async () => {
  try {
    await sequelize.authenticate()
    logger.info('Connection has been established successfully.')
  } catch (error) {
    logger.error('Unable to connect to the database:', error)
  }
}
