export type PaginatedResponse<T> = {
  total: number
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  data: T[]
}

export type Response<T> = {
  status: number
  success: boolean
  data: T
}
