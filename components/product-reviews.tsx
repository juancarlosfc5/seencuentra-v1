"use client"

import type React from "react"

import { useState } from "react"
import { StarRating } from "./star-rating"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import type { ProductReview } from "@/types"

interface ProductReviewsProps {
  productId: string
  reviews: ProductReview[]
  averageRating: number
  totalReviews: number
}

export function ProductReviews({ productId, reviews, averageRating, totalReviews }: ProductReviewsProps) {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [newReview, setNewReview] = useState({
    userName: "",
    rating: 0,
    comment: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!newReview.userName.trim() || !newReview.comment.trim() || newReview.rating === 0) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos y selecciona una calificación.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "¡Reseña publicada!",
      description: "Tu reseña ha sido enviada exitosamente.",
    })

    // Reset form
    setNewReview({ userName: "", rating: 0, comment: "" })
    setShowReviewForm(false)
    setIsSubmitting(false)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-8">
      {/* Reviews Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Reseñas y Comentarios</h2>
          <div className="flex items-center gap-4">
            <StarRating rating={averageRating} size="lg" />
            <span className="text-gris-suave">
              {averageRating}/5 basado en {totalReviews} reseñas
            </span>
          </div>
        </div>
        <Button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="bg-rojo-calido hover:bg-red-600 text-white"
        >
          {showReviewForm ? "Cancelar" : "Escribir reseña"}
        </Button>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <Card className="bg-white border-gray-100">
          <CardHeader>
            <CardTitle className="text-xl">Deja tu reseña</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="reviewName" className="text-sm font-medium text-gray-900">
                    Tu nombre *
                  </label>
                  <Input
                    id="reviewName"
                    type="text"
                    value={newReview.userName}
                    onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
                    placeholder="Ingresa tu nombre"
                    className="border-gray-200 focus:border-rojo-calido focus:ring-rojo-calido"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Calificación *</label>
                  <div className="flex items-center gap-2 pt-1">
                    <StarRating
                      rating={newReview.rating}
                      interactive={true}
                      onRatingChange={(rating) => setNewReview({ ...newReview, rating })}
                      size="lg"
                      showNumber={false}
                    />
                    <span className="text-sm text-gris-suave ml-2">
                      {newReview.rating > 0 ? `${newReview.rating}/5 estrellas` : "Selecciona una calificación"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="reviewComment" className="text-sm font-medium text-gray-900">
                  Tu comentario *
                </label>
                <Textarea
                  id="reviewComment"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  placeholder="Comparte tu experiencia con este producto..."
                  rows={4}
                  className="border-gray-200 focus:border-rojo-calido focus:ring-rojo-calido resize-none"
                  required
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={isSubmitting} className="bg-rojo-calido hover:bg-red-600 text-white">
                  {isSubmitting ? "Publicando..." : "Publicar reseña"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.length === 0 ? (
          <Card className="bg-white border-gray-100">
            <CardContent className="p-8 text-center">
              <p className="text-gris-suave">Aún no hay reseñas para este producto.</p>
              <p className="text-sm text-gris-suave mt-2">¡Sé el primero en compartir tu experiencia!</p>
            </CardContent>
          </Card>
        ) : (
          reviews.map((review, index) => (
            <div key={review.id}>
              <Card className="bg-white border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.userName}</h4>
                      <p className="text-sm text-gris-suave">{formatDate(review.date)}</p>
                    </div>
                    <StarRating rating={review.rating} size="sm" showNumber={false} />
                  </div>
                  <p className="text-gris-suave leading-relaxed">{review.comment}</p>
                </CardContent>
              </Card>
              {index < reviews.length - 1 && <Separator className="my-4" />}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
