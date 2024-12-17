'use client'

import React, { useCallback } from 'react'
import { FaBars } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

import LocationDropdown from './LocationDropdown'

import { setLocation } from '@/store/filterSlice'
import { openSidebar } from '@/store/uiSlice'

export default function Header() {
  const dispatch = useDispatch()

  const handleLocationChange = useCallback(
    (location: string | null) => {
      dispatch(setLocation(location))
    },
    [dispatch],
  )

  const handleSidebarOpen = useCallback(() => {
    dispatch(openSidebar())
  }, [dispatch])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-white shadow-md">
        <div className="flex items-center">
          <button
            onClick={handleSidebarOpen}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <FaBars size={24} />
          </button>

          <div className="text-xl font-bold text-gray-800 ml-4">Rentify</div>
        </div>

        <div className="flex items-center gap-4">
          <LocationDropdown onLocationSelect={handleLocationChange} />
        </div>
      </header>
    </>
  )
}
