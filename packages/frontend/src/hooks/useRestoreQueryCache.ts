import { useEffect } from 'react'

import { DehydratedState, useQueryClient } from '@tanstack/react-query'

export const useRestoreQueryCache = (dehydratedState: DehydratedState, queryKey: unknown[]) => {
  const queryClient = useQueryClient()

  useEffect(() => {
    const queryData = dehydratedState.queries.find(
      query => JSON.stringify(query.queryKey) === JSON.stringify(queryKey),
    )?.state.data

    if (queryData) {
      queryClient.setQueryData(queryKey, queryData)
    }
  }, [dehydratedState, queryClient, queryKey])
}
