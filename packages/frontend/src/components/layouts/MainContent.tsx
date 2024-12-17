'use client'

import React from 'react'
import { useSelector } from 'react-redux'

import clsx from 'clsx'

import { RootState } from '@/store'

interface MainContentProps {
  children: React.ReactNode
}

export default function MainContent({ children }: MainContentProps) {
  const isSidebarVisible = useSelector((state: RootState) => state.ui.isSidebarOpen)

  return (
    <main
      className={clsx('pt-20 p-4 transition-all duration-300 ease-in-out', {
        'ml-0': !isSidebarVisible,
        'lg:ml-64': isSidebarVisible,
      })}
    >
      {children}
    </main>
  )
}
