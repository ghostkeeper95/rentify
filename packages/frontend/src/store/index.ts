import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './filterSlice'
import uiSlice from './uiSlice'

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    ui: uiSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
