"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StarRating } from "./star-rating"
import { useToast } from "@/hooks/use-toast"

export function ReviewForm() {
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !comment.trim() || rating === 0) {
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
      title: "¡Gracias por tu comentario!",
      description: "Tu reseña ha sido enviada exitosamente.",
    })

    // Reset form
    setName("")
    setComment("")
    setRating(0)
    setIsSubmitting(false)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blanco-marfil to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg border-0">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Comparte tu experiencia</CardTitle>
            <p className="text-lg text-gris-suave">
              Tu opinión nos ayuda a mejorar y apoyar mejor a nuestros emprendedores
            </p>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-900">
                    Tu nombre *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ingresa tu nombre"
                    className="border-gray-200 focus:border-rojo-calido focus:ring-rojo-calido"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Calificación *</label>
                  <div className="flex items-center gap-2 pt-1">
                    <StarRating
                      rating={rating}
                      interactive={true}
                      onRatingChange={setRating}
                      size="lg"
                      showNumber={false}
                    />
                    <span className="text-sm text-gris-suave ml-2">
                      {rating > 0 ? `${rating}/5 estrellas` : "Selecciona una calificación"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="comment" className="text-sm font-medium text-gray-900">
                  Tu comentario *
                </label>
                <Textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Cuéntanos sobre tu experiencia con seencuentra.com..."
                  rows={4}
                  className="border-gray-200 focus:border-rojo-calido focus:ring-rojo-calido resize-none"
                  required
                />
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-rojo-calido hover:bg-red-600 text-white px-8 py-3 text-base font-medium"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Publicar reseña
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
