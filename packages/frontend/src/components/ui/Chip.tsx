'use client'

import React, { memo, useCallback } from 'react'

interface ChipItem {
  value: string
  label: string
  [key: string]: string | number | boolean | undefined
}

interface ChipProps<T extends ChipItem> {
  item: T
  onSelect: (item: T) => void
  activeItem: string | null
}

function Chip<T extends ChipItem>({ item, onSelect, activeItem }: ChipProps<T>) {
  const handleSelect = useCallback(() => {
    onSelect(item)
  }, [onSelect, item])

  return (
    <button
      onClick={handleSelect}
      className={`inline-block px-4 py-2 text-sm rounded-full border transition-colors duration-200 ${
        activeItem === item.value
          ? 'bg-pink-500 text-white border-pink-500'
          : 'bg-gray-100 text-gray-700 border-grey-300 hover:bg-pink-100 hover:text-white'
      }`}
    >
      {item.label}
    </button>
  )
}

export default memo(Chip)
