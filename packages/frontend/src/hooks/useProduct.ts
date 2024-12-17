import { ProductAttributes } from '@rentify/backend/src/types/productTypes'
import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/constants/queryKeys'
import { fetchProductById } from '@/services/api'

export const useProduct = (id: string | number) => {
  return useQuery<ProductAttributes>({
    queryKey: [QUERY_KEYS.PRODUCT, id],
    queryFn: () => fetchProductById(id),
    staleTime: 5 * 60 * 1000,
    enabled: !!id,
  })
}
