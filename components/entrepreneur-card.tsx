"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Entrepreneur } from "@/types"

interface EntrepreneurCardProps {
  entrepreneur: Entrepreneur
}

export function EntrepreneurCard({ entrepreneur }: EntrepreneurCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <Link href={`/emprendedor/${entrepreneur.slug}`}>
      <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white border border-gray-100 overflow-hidden">
        <div className="relative">
          <div className="aspect-[4/3] relative bg-gray-100">
            <Image
              src={imageError ? "/placeholder.svg?height=300&width=400" : entrepreneur.photo}
              alt={entrepreneur.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-bold mb-1">{entrepreneur.name}</h3>
            <p className="text-sm opacity-90">{entrepreneur.businessName}</p>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-gris-suave">
              <MapPin className="h-4 w-4" />
              <span>{entrepreneur.location}</span>
            </div>

            <p className="text-gris-suave leading-relaxed line-clamp-3">{entrepreneur.story}</p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-sm font-medium text-rojo-calido group-hover:underline">
                Leer historia completa →
              </span>
              <Heart className="h-5 w-5 text-gray-300 group-hover:text-rojo-calido transition-colors" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
