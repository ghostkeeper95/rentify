import { PaginatedResponse, Response } from '@rentify/backend/src/types/commonTypes'
import { ProductAttributes, ProductFilters } from '@rentify/backend/src/types/productTypes'

import apiClient from './apiClient'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchData = async <T, P = Record<string, any>>(url: string, params?: P): Promise<T> => {
  const { data } = await apiClient.get<Response<T>>(url, { params })
  return data.data
}

export const fetchProducts = (filters: ProductFilters = {}) =>
  fetchData<PaginatedResponse<ProductAttributes>>('/products', filters)

export const fetchProductById = (id: string | number) =>
  fetchData<ProductAttributes>(`/products/${id}`)

export const fetchCategories = () => fetchData<string[]>('/categories')

export const fetchLocations = () => fetchData<string[]>('/locations')
