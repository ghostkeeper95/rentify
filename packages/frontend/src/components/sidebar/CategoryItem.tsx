'use client'

import React, { memo, useCallback, useMemo } from 'react'

import { Chip } from '@/components/ui'
import { translateCategory } from '@/utils/categories'

interface CategoryItemProps {
  category: string
  onSelect: (category: string) => void
  activeCategory: string | null
}

function CategoryItem({ category, onSelect, activeCategory }: CategoryItemProps) {
  const item = useMemo(
    () => ({
      value: category,
      label: translateCategory(category),
    }),
    [category],
  )

  const handleSelect = useCallback(
    (item: { value: string; label: string }) => {
      onSelect(item.value)
    },
    [onSelect],
  )

  return <Chip item={item} onSelect={handleSelect} activeItem={activeCategory} />
}

export default memo(CategoryItem)
