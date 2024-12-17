'use client'

import React, { useCallback } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

import CategoryFilter from './CategoryFilter'
import ClearFilters from './ClearFilters'
import SidebarPriceFilter from './SidebarPriceFilter'
import SidebarSearch from './SidebarSearch'
import SortOptions from './SortOptions'

import { RootState } from '@/store'
import { closeSidebar } from '@/store/uiSlice'

export default function Sidebar() {
  const isOpen = useSelector((state: RootState) => state.ui.isSidebarOpen)

  const dispatch = useDispatch()

  const handleSidebarClose = useCallback(() => {
    dispatch(closeSidebar())
  }, [dispatch])

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } z-50`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <div className="text-xl font-bold text-gray-800 ml-4">Rentify</div>
        <button
          onClick={handleSidebarClose}
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <FaTimes size={20} />
        </button>
      </div>
      <div className="p-4 space-y-4">
        <SidebarSearch />
        <CategoryFilter />
        <SortOptions />
        <SidebarPriceFilter />
        <ClearFilters />
      </div>
    </div>
  )
}
