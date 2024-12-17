'use client'

import React, { ReactNode, useEffect } from 'react'

import { DehydratedState, hydrate, HydrationBoundary, useQueryClient } from '@tanstack/react-query'

interface ProductListProps {
  dehydratedState: DehydratedState
  children: ReactNode
}

export default function Hydrate({ dehydratedState, children }: ProductListProps) {
  const queryClient = useQueryClient()

  useEffect(() => {
    hydrate(queryClient, dehydratedState)
  }, [queryClient, dehydratedState])

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
}
