import { logger } from '../utils/logger'
import { sequelize } from './connection'
import { seedProducts } from './seedProducts'

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true })
    logger.info('Database synced')
    await seedProducts()
    process.exit(0)
  } catch (error) {
    logger.error('Error seeding database:', error)
    process.exit(1)
  }
}

seedDatabase()
