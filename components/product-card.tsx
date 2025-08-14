"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, User } from "lucide-react"
import { StarRating } from "./star-rating"
import { Card, CardContent } from "@/components/ui/card"
import type { Product } from "@/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <Link href={`/product/${product.slug}`}>
      <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white border border-gray-100">
        <div className="relative overflow-hidden rounded-t-lg">
          <div className="aspect-square relative bg-gray-100">
            <Image
              src={imageError ? "/placeholder.svg?height=300&width=300" : product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          </div>
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
            <StarRating rating={product.rating} size="sm" showNumber={false} />
          </div>
        </div>

        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-rojo-calido transition-colors">
              {product.name}
            </h3>

            <div className="flex items-center gap-1 text-sm text-gris-suave">
              <User className="h-3 w-3" />
              <span>{product.entrepreneur}</span>
            </div>

            <div className="flex items-center gap-1 text-sm text-gris-suave">
              <MapPin className="h-3 w-3" />
              <span>{product.location}</span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <StarRating rating={product.rating} size="sm" />
                <span className="text-xs text-gris-suave">({product.reviewCount})</span>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100">
              <p className="text-xl font-bold text-rojo-calido">{formatPrice(product.price)}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
