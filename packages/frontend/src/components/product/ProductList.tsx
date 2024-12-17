'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { ProductCard, ProductDetailsModal } from '@/components/product'
import EmptyState from '@/components/product/EmptyState'
import OverlayLoader from '@/components/shared/OverlayLoader'
import Snackbar from '@/components/shared/Snackbar'
import { useProduct } from '@/hooks/useProduct'
import { useProducts } from '@/hooks/useProducts'
import { RootState } from '@/store'

export default function ProductList() {
  const filters = useSelector((state: RootState) => state.filters)
  const [selectedProductId, setSelectedProductId] = useState<number | string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const { data: productsList, isLoading, isError, error } = useProducts(filters)
  const {
    data: singleProduct,
    isLoading: isSingleProductLoading,
    isError: isProductError,
    error: productError,
  } = useProduct(selectedProductId)

  const handleOpenModal = useCallback((productId: number | string) => {
    setSelectedProductId(productId)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedProductId('')
  }, [])

  const handleCloseSnackbar = useCallback(() => {
    setErrorMessage('')
  }, [])

  useEffect(() => {
    const errorMsg =
      (isError && error?.message && `Помилка завантаження списку продуктів: ${error.message}`) ||
      (isProductError &&
        productError?.message &&
        `Помилка завантаження продукту: ${productError.message}`)

    if (errorMsg) {
      setErrorMessage(errorMsg)
    }
  }, [isError, error, isProductError, productError])

  const products = productsList?.data || []

  return (
    <div>
      <OverlayLoader isLoading={isLoading || isSingleProductLoading} />
      {errorMessage && <Snackbar message={errorMessage} onClose={handleCloseSnackbar} />}

      {!isLoading && products.length === 0 && <EmptyState />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onDetailsClick={handleOpenModal} />
        ))}
      </div>

      {singleProduct && !isSingleProductLoading && (
        <ProductDetailsModal
          isOpen={!!selectedProductId}
          product={singleProduct}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  )
}
