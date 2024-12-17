'use client'

import React, { ReactNode } from 'react'
import { Provider as ReduxProviderLib } from 'react-redux'

import { store } from '@/store'

interface ReduxProviderProps {
  children: ReactNode
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <ReduxProviderLib store={store}>{children}</ReduxProviderLib>
}
