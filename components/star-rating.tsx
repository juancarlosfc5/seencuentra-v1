"use client"

import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: "sm" | "md" | "lg"
  showNumber?: boolean
  interactive?: boolean
  onRatingChange?: (rating: number) => void
}

export function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  showNumber = true,
  interactive = false,
  onRatingChange,
}: StarRatingProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  }

  const handleStarClick = (starRating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(starRating)
    }
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(maxRating)].map((_, index) => {
          const starRating = index + 1
          const isFilled = starRating <= rating
          const isPartial = starRating > rating && starRating - 1 < rating

          return (
            <button
              key={index}
              type="button"
              onClick={() => handleStarClick(starRating)}
              disabled={!interactive}
              className={`${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"} transition-transform`}
            >
              <Star
                className={`${sizeClasses[size]} ${
                  isFilled || isPartial ? "text-naranja-mostaza fill-naranja-mostaza" : "text-gray-300"
                }`}
              />
            </button>
          )
        })}
      </div>
      {showNumber && <span className="text-sm text-gris-suave ml-1">{rating.toFixed(1)}</span>}
    </div>
  )
}
