export interface SortOption {
  label: string
  value: string
  order: 'asc' | 'desc'
}

export const sortOptions: SortOption[] = [
  { label: 'Найдорожчі', value: 'price', order: 'desc' },
  { label: 'Найдешевші', value: 'price', order: 'asc' },
]
