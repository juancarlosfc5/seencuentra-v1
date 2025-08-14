import { ProductCard } from "./product-card"
import type { Product } from "@/types"

interface RelatedProductsProps {
  currentProductId: string
  category: string
  relatedProducts: Product[]
}

export function RelatedProducts({ currentProductId, category, relatedProducts }: RelatedProductsProps) {
  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Productos similares</h2>
      <p className="text-gris-suave">Otros productos de la categoría {category} que podrían interesarte</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
