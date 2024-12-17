'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store'
import { resetFilters } from '@/store/filterSlice'

export default function ClearFilters() {
  const dispatch = useDispatch()

  const filters = useSelector((state: RootState) => state.filters)
  const { minPrice, maxPrice, category, search, sortOrder, sortBy } = filters
  const areFiltersApplied = category || search || minPrice || maxPrice || sortOrder || sortBy

  if (!areFiltersApplied) return null

  const handleClearFilters = () => {
    dispatch(resetFilters())
  }

  return (
    <button
      onClick={handleClearFilters}
      className="mt-4 text-sm text-pink-500 hover:text-pink-700 underline"
    >
      Очистити всі фільтри
    </button>
  )
}
