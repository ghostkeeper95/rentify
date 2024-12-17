import dotenv from 'dotenv'

import { Product } from '../models/Product'
import { logger } from '../utils/logger'

dotenv.config()

const BASE_IMAGE_URL = process.env.BASE_IMAGE_URL || ''

const products = [
  {
    id: 1,
    name: 'Камера Canon EOS 80D',
    price: 50,
    category: 'electronics',
    location: 'Київ',
    description: 'Професійна камера для фото- та відеозйомки.',
    image: `${BASE_IMAGE_URL}camera.jpg`,
  },
  {
    id: 2,
    name: 'Електросамокат Xiaomi Mi Pro 2',
    price: 30,
    category: 'transport',
    location: 'Львів',
    description: 'Зручний електросамокат для міських поїздок.',
    image: `${BASE_IMAGE_URL}scooter.jpg`,
  },
  {
    id: 3,
    name: 'Ноутбук MacBook Pro 16',
    price: 100,
    category: 'electronics',
    location: 'Одеса',
    description: 'Потужний ноутбук для роботи та дизайну.',
    image: `${BASE_IMAGE_URL}macbook.jpg`,
  },
  {
    id: 4,
    name: 'Дрон DJI Mavic Air 2',
    price: 70,
    category: 'electronics',
    location: 'Харків',
    description: 'Дрон із високоякісною камерою для аерозйомки.',
    image: `${BASE_IMAGE_URL}drone.jpg`,
  },
  {
    id: 5,
    name: 'Меблі для кемпінгу',
    price: 20,
    category: 'tourism',
    location: 'Дніпро',
    description: 'Набір складних меблів для кемпінгу.',
    image: `${BASE_IMAGE_URL}camping_furniture.jpg`,
  },
  {
    id: 6,
    name: 'PlayStation 5',
    price: 40,
    category: 'electronics',
    location: 'Запоріжжя',
    description: 'Ігрова консоль нового покоління.',
    image: `${BASE_IMAGE_URL}ps5.jpg`,
  },
  {
    id: 7,
    name: 'Велосипед Trek X-Caliber 9',
    price: 35,
    category: 'transport',
    location: 'Київ',
    description: 'Гірський велосипед для активного відпочинку.',
    image: `${BASE_IMAGE_URL}bicycle.jpg`,
  },
  {
    id: 8,
    name: 'Проєктор Epson EH-TW7100',
    price: 60,
    category: 'electronics',
    location: 'Львів',
    description: 'Домашній проєктор із високою роздільною здатністю.',
    image: `${BASE_IMAGE_URL}projector.jpg`,
  },
  {
    id: 9,
    name: 'Шатер для пікніка',
    price: 15,
    category: 'tourism',
    location: 'Одеса',
    description: 'Шатер для захисту від сонця та дощу.',
    image: `${BASE_IMAGE_URL}tent.jpg`,
  },
  {
    id: 10,
    name: 'Електрогриль Tefal',
    price: 25,
    category: 'home_appliances',
    location: 'Харків',
    description: 'Зручний електрогриль для приготування страв.',
    image: `${BASE_IMAGE_URL}grill.jpg`,
  },
]

export const seedProducts = async () => {
  try {
    const normalizedProducts = products.map(product => ({
      ...product,
      name_normalized: product.name.toLowerCase(),
    }))

    await Product.bulkCreate(normalizedProducts)
    logger.info('Database seeded')
  } catch (error) {
    logger.error('Error seeding database:', error)
  }
}
