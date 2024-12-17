import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/constants/queryKeys'
import { fetchCategories } from '@/services/api'

export const useCategories = () => {
  return useQuery<string[]>({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: fetchCategories,
    staleTime: 5 * 60 * 1000,
    placeholderData: previousData => previousData,
  })
}
