import { memo } from 'react'

import { ProductAttributes } from '@rentify/backend/src/types/productTypes'

import { Modal, ProductImage } from '@/components/ui'
import { translateCategory } from '@/utils/categories'

interface ProductDetailsModalProps {
  isOpen: boolean
  product: ProductAttributes
  handleCloseModal: () => void
}

function ProductDetailsModal({ isOpen, product, handleCloseModal }: ProductDetailsModalProps) {
  const { name, category, location, description, price, image } = product
  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} title={name}>
      <ProductImage imageUrl={image || '/placeholder.jpg'} alt={name} />
      <p className="text-gray-700">
        <strong>Категорія:</strong> {translateCategory(category)}
      </p>
      <p className="text-gray-700">
        <strong>Локація:</strong> {location}
      </p>
      <p className="text-gray-700">
        <strong>Опис:</strong> {description}
      </p>
      <p className="text-gray-900 font-bold text-lg mt-2">
        <strong>Ціна:</strong> ${price}
      </p>
    </Modal>
  )
}

export default memo(ProductDetailsModal)
