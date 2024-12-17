import { PaginatedResponse } from '@rentify/backend/src/types/commonTypes'
import { ProductAttributes, ProductFilters } from '@rentify/backend/src/types/productTypes'
import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/constants/queryKeys'
import { fetchProducts } from '@/services/api'

export const useProducts = (filters: ProductFilters = {}) => {
  return useQuery<PaginatedResponse<ProductAttributes>>({
    queryKey: [QUERY_KEYS.PRODUCTS, filters],
    queryFn: () => fetchProducts(filters),
    staleTime: 5 * 60 * 1000,
    placeholderData: previousData => previousData,
  })
}
