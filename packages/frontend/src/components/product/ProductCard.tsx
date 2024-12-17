'use client'

import { useCallback } from 'react'

import { ProductAttributes } from '@rentify/backend/src/types/productTypes'

import { ProductImage } from '@/components/ui'
import { translateCategory } from '@/utils/categories'

interface ProductCardProps {
  product: ProductAttributes
  onDetailsClick: (productId: string | number) => void
}

export default function ProductCard({ product, onDetailsClick }: ProductCardProps) {
  const handleOpenModal = useCallback(() => {
    onDetailsClick(product.id)
  }, [onDetailsClick, product.id])

  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-md transition-shadow duration-300 bg-white">
      <ProductImage imageUrl={product.image} alt={product.name} />

      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">{product.name}</h2>
        <p className="text-sm text-gray-500 capitalize">{translateCategory(product.category)}</p>
        <p className="text-sm text-gray-500">{product.location}</p>
        <div className="flex justify-between items-center mt-3">
          <p className="text-lg font-bold text-pink-600">${product.price}</p>
          <button
            onClick={handleOpenModal}
            className=" bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors self-start"
          >
            Деталі
          </button>
        </div>
      </div>
    </div>
  )
}
