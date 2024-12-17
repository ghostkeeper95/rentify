'use client'

import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SortOption, sortOptions } from '@/constants/sortOptions'
import { RootState } from '@/store'
import { setSortBy, setSortOrder } from '@/store/filterSlice'

function SortOptions() {
  const dispatch = useDispatch()
  const { sortBy, sortOrder } = useSelector((state: RootState) => state.filters)

  const handleSortChange = useCallback(
    (sortBy: string, sortOrder: 'asc' | 'desc' | null) => {
      dispatch(setSortBy(sortOrder ? sortBy : null))
      dispatch(setSortOrder(sortOrder))
    },
    [dispatch],
  )

  const handleSortSelect = useCallback(
    (option: SortOption) => {
      const newSortOrder =
        sortBy === option.value && sortOrder === option.order ? null : option.order
      handleSortChange(option.value, newSortOrder)
    },
    [handleSortChange, sortBy, sortOrder],
  )

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Сортування</h3>
      <div className="flex flex-wrap gap-2">
        {sortOptions.map(option => (
          <button
            key={option.value + option.order}
            onClick={() => handleSortSelect(option)}
            className={`inline-block px-4 py-2 text-sm rounded-full border transition-colors duration-200 ${
              sortBy === option.value && sortOrder === option.order
                ? 'bg-pink-500 text-white border-pink-500'
                : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-pink-100 hover:text-white'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default memo(SortOptions)
