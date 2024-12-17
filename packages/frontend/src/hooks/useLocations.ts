import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/constants/queryKeys'
import { fetchLocations } from '@/services/api'

export const useLocations = () => {
  return useQuery<string[]>({
    queryKey: [QUERY_KEYS.LOCATIONS],
    queryFn: fetchLocations,
    staleTime: 5 * 60 * 1000,
    placeholderData: previousData => previousData,
  })
}
