import React from 'react'

import { dehydrate, QueryClient } from '@tanstack/react-query'

import Hydrate from '@/components/layouts/Hydrate'
import { Header } from '@/components/shared'
import { QUERY_KEYS } from '@/constants/queryKeys'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import ReduxProvider from '@/providers/ReduxProvider'
import { fetchCategories, fetchLocations, fetchProducts } from '@/services/api'

import './globals.css'

import MainContent from '@/components/layouts/MainContent'
import { Sidebar } from '@/components/sidebar'
import { initialState } from '@/store/filterSlice'

export const metadata = {
  title: 'Rentify',
  description: 'Your go-to rental platform',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.PRODUCTS, initialState],
    queryFn: () => fetchProducts({}),
  })

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.LOCATIONS],
    queryFn: fetchLocations,
  })

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: fetchCategories,
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <ReduxProvider>
          <ReactQueryProvider>
            <Hydrate dehydratedState={dehydratedState}>
              <Header />
              <Sidebar />
              <MainContent>{children}</MainContent>
            </Hydrate>
          </ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
