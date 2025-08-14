"use client"

import { useState, useMemo } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MessageCircle, Share2 } from "lucide-react"
import { Layout } from "@/components/layout"
import { StarRating } from "@/components/star-rating"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductReviews } from "@/components/product-reviews"
import { RelatedProducts } from "@/components/related-products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/lib/data"
import { getProductDetails } from "@/lib/product-data"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const [imageError, setImageError] = useState(false)

  const product = useMemo(() => {
    return products.find((p) => p.slug === params.slug)
  }, [params.slug])

  if (!product) {
    notFound()
  }

  const productDetails = getProductDetails(product.id)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Mira este increíble producto artesanal: ${product.name}`,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <Layout>
      <div className="bg-blanco-marfil min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/"
              className="inline-flex items-center text-gris-suave hover:text-rojo-calido transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a la tienda
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square relative bg-white rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={imageError ? "/placeholder.svg?height=600&width=600" : product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  onError={() => setImageError(true)}
                  priority
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge
                  variant="secondary"
                  className="mb-3 bg-naranja-mostaza/10 text-naranja-mostaza border-naranja-mostaza/20"
                >
                  {product.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-4xl font-bold text-rojo-calido mb-4">{formatPrice(product.price)}</p>
              </div>

              {/* Rating Summary */}
              <Card className="bg-white border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <StarRating rating={product.rating} size="lg" />
                      <div className="text-sm text-gris-suave">
                        <p className="font-medium">{product.rating}/5 estrellas</p>
                        <p>Basado en {product.reviewCount} reseñas</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleShare}
                      className="border-gray-200 hover:border-rojo-calido hover:text-rojo-calido bg-transparent"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Compartir
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Product Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Descripción</h3>
                <p className="text-gris-suave leading-relaxed">{productDetails.description}</p>
              </div>

              {/* Entrepreneur Info */}
              <Card className="bg-white border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Creado por</h4>
                      <Link
                        href={`/emprendedor/${product.entrepreneur.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-rojo-calido hover:underline font-medium"
                      >
                        {product.entrepreneur}
                      </Link>
                      <p className="text-sm text-gris-suave mt-1">{product.location}</p>
                    </div>
                    <MessageCircle className="h-8 w-8 text-gris-suave" />
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Contact */}
              <WhatsAppButton
                phoneNumber={productDetails.whatsapp}
                productName={product.name}
                entrepreneurName={product.entrepreneur}
              />
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-16">
            <ProductReviews
              productId={product.id}
              reviews={productDetails.reviews}
              averageRating={product.rating}
              totalReviews={product.reviewCount}
            />
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <RelatedProducts
              currentProductId={product.id}
              category={product.category}
              relatedProducts={productDetails.relatedProducts}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
