'use client'

import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CategoryItem from './CategoryItem'

import { useCategories } from '@/hooks/useCategories'
import { RootState } from '@/store'
import { setCategory } from '@/store/filterSlice'

export default function CategoryFilter() {
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
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Категорії</h3>
      <div className="flex flex-wrap gap-2">
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
