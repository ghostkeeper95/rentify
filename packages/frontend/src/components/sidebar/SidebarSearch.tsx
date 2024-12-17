'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'

import { Combobox, ComboboxInput } from '@headlessui/react'

import { useDebounce } from '@/hooks/useDebounce'
import { RootState } from '@/store'
import { setSearchQuery } from '@/store/filterSlice'

export default function SidebarSearch() {
  const dispatch = useDispatch()
  const searchQuery = useSelector((state: RootState) => state.filters.search)

  const [searchInput, setSearchInput] = useState(searchQuery || '')
  const debouncedSearch = useDebounce(searchInput, 200)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }, [])

  const clearSearch = useCallback(() => {
    setSearchInput('')
  }, [])

  useEffect(() => {
    dispatch(setSearchQuery(debouncedSearch))
  }, [debouncedSearch, dispatch])

  useEffect(() => {
    if (!searchQuery) {
      setSearchInput('')
    }
  }, [searchQuery])

  return (
    <div className="relative mb-4">
      <Combobox>
        <ComboboxInput
          type="text"
          placeholder="Пошук продуктів..."
          value={searchInput}
          onChange={handleChange}
          className="w-full border rounded p-2 pr-10 focus:outline-none focus:ring focus:ring-gray-200"
        />
        {searchInput && (
          <button
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <FiX size={16} />
          </button>
        )}
      </Combobox>
    </div>
  )
}
