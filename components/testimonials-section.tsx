import { StarRating } from "./star-rating"
import { Card, CardContent } from "@/components/ui/card"
import { generalReviews } from "@/lib/data"

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo que dicen nuestros usuarios</h2>
          <p className="text-lg text-gris-suave max-w-2xl mx-auto">
            Historias reales de personas que han encontrado productos únicos y han apoyado emprendedores locales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {generalReviews.map((review) => (
            <Card key={review.id} className="bg-blanco-marfil border-gray-100">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <StarRating rating={review.rating} size="sm" showNumber={false} />

                  <blockquote className="text-gris-suave italic leading-relaxed">"{review.comment}"</blockquote>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="font-semibold text-gray-900">{review.userName}</p>
                    <p className="text-sm text-gris-suave">
                      {new Date(review.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
