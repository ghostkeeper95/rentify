'use client'

import React, { useCallback, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import { useLocations } from '@/hooks/useLocations'

interface LocationDropdownProps {
  onLocationSelect: (location: string | null) => void
}

export default function LocationDropdown({ onLocationSelect }: LocationDropdownProps) {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const { data: locations } = useLocations()

  const handleLocationSelect = useCallback(
    (location: string) => {
      setSelectedLocation(location === 'Всі міста' ? null : location)
      onLocationSelect(location === 'Всі міста' ? null : location)
    },
    [onLocationSelect, setSelectedLocation],
  )

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="flex items-center justify-between w-48 px-4 py-2 border rounded-lg shadow-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring">
        {selectedLocation || 'Всі міста'}
        <FaChevronDown size={12} />
      </MenuButton>

      <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <MenuItem>
          {({ active }) => (
            <button
              className={`${
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
              onClick={() => handleLocationSelect('Всі міста')}
            >
              Всі міста
            </button>
          )}
        </MenuItem>

        {locations?.map(location => (
          <MenuItem key={location}>
            {({ active }) => (
              <button
                className={`${
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                onClick={() => handleLocationSelect(location)}
              >
                {location}
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}
