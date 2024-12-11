export interface ProductFilters {
  search?: string
  minPrice?: number
  maxPrice?: number
  category?: string
  location?: string
  page?: number
  limit?: number
}

export interface ProductAttributes {
  id: number
  name: string
  price: number
  category: string
  location: string
  description: string
  image: string | null
}
