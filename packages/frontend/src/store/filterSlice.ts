import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
  search: string
  category: string | null
  location: string | null
  sortOrder: 'asc' | 'desc' | null
  sortBy: string | null
  minPrice: number | null
  maxPrice: number | null
}

export const initialState: FilterState = {
  search: '',
  category: null,
  location: null,
  sortOrder: null,
  sortBy: null,
  minPrice: null,
  maxPrice: null,
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string | null>) {
      state.category = action.payload
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.search = action.payload
    },
    setLocation(state, action: PayloadAction<string | null>) {
      state.location = action.payload
    },
    setSortOrder(state, action: PayloadAction<'asc' | 'desc' | null>) {
      state.sortOrder = action.payload
    },
    setSortBy(state, action: PayloadAction<string | null>) {
      state.sortBy = action.payload
    },
    setMinPrice(state, action: PayloadAction<number | null>) {
      state.minPrice = action.payload
    },
    setMaxPrice(state, action: PayloadAction<number | null>) {
      state.maxPrice = action.payload
    },
    resetFilters() {
      return initialState
    },
  },
})

export const {
  setCategory,
  setSearchQuery,
  setLocation,
  resetFilters,
  setSortOrder,
  setSortBy,
  setMinPrice,
  setMaxPrice,
} = filterSlice.actions
export default filterSlice.reducer
