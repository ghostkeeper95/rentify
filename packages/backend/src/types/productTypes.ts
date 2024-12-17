export interface ProductFilters {
  search?: string | null
  minPrice?: number | null
  maxPrice?: number | null
  category?: string | null
  location?: string | null
  page?: number
  limit?: number
  sortBy?: string | null
  sortOrder?: 'asc' | 'desc' | null
}

export interface ProductAttributes {
  id: number
  name: string
  name_normalized: string
  price: number
  category: string
  location: string
  description: string
  image: string | null
}
