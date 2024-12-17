'use client'

import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CategoryItem from '../sidebar/CategoryItem'

import { useCategories } from '@/hooks/useCategories'
import { RootState } from '@/store'
import { setCategory } from '@/store/filterSlice'

export default function CategoryFilterBar() {
  const { data: categories } = useCategories()
  const dispatch = useDispatch()
  const activeCategory = useSelector((state: RootState) => state.filters.category)

  const handleCategorySelect = useCallback(
    (category: string) => {
      if (activeCategory === category) {
        dispatch(setCategory(null))
      } else {
        dispatch(setCategory(category))
      }
    },
    [dispatch, activeCategory],
  )

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories?.map(category => (
          <CategoryItem
            key={category}
            category={category}
            onSelect={handleCategorySelect}
            activeCategory={activeCategory}
          />
        ))}
      </div>
    </div>
  )
}
