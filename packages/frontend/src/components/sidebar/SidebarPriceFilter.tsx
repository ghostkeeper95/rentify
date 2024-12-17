'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useDebounce } from '@/hooks/useDebounce'
import { RootState } from '@/store'
import { setMaxPrice, setMinPrice } from '@/store/filterSlice'

export default function SidebarPriceFilter() {
  const dispatch = useDispatch()

  const { minPrice: globalMin, maxPrice: globalMax } = useSelector(
    (state: RootState) => state.filters,
  )

  const [minPrice, setMinPriceLocal] = useState<number | ''>(globalMin || '')
  const [maxPrice, setMaxPriceLocal] = useState<number | ''>(globalMax || '')

  const debouncedMinPrice = useDebounce(minPrice, 200)
  const debouncedMaxPrice = useDebounce(maxPrice, 200)

  const handleMinPriceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value === '' ? '' : parseFloat(e.target.value)
      setMinPriceLocal(value)
    },
    [setMinPriceLocal],
  )

  const handleMaxPriceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value === '' ? '' : parseFloat(e.target.value)
      setMaxPriceLocal(value)
    },
    [setMaxPriceLocal],
  )

  useEffect(() => {
    dispatch(setMinPrice(debouncedMinPrice === '' ? null : debouncedMinPrice))
  }, [debouncedMinPrice, dispatch])

  useEffect(() => {
    dispatch(setMaxPrice(debouncedMaxPrice === '' ? null : debouncedMaxPrice))
  }, [debouncedMaxPrice, dispatch])

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Ціна</h3>
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="Мін"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="w-1/2 border rounded p-2 focus:outline-none focus:ring focus:ring-gray-200"
        />
        <input
          type="number"
          placeholder="Макс"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="w-1/2 border rounded p-2 focus:outline-none focus:ring focus:ring-gray-200"
        />
      </div>
    </div>
  )
}
