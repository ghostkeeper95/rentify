import { ProductList } from '@/components/product'
import CategoryFilterBar from '@/components/product/CategoryFilterBar'

export default async function HomePage() {
  return (
    <div>
      <CategoryFilterBar />
      <ProductList />
    </div>
  )
}
