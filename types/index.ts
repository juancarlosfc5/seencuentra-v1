export interface Product {
  id: string
  name: string
  price: number
  image: string
  entrepreneur: string
  category: string
  location: string
  rating: number // Promedio de estrellas (0-5)
  reviewCount: number // Número total de reseñas
  slug: string
}

export interface ProductDetail extends Product {
  description: string
  whatsapp: string
  totalReviews: number
  reviews: ProductReview[]
  relatedProducts: Product[]
}

export interface ProductReview {
  id: string
  userName: string
  rating: number // 1-5 estrellas
  comment: string
  date: string
}

export interface GeneralReview {
  id: string
  userName: string
  rating: number // 1-5 estrellas
  comment: string
  date: string
}

export interface Entrepreneur {
  id: string
  name: string
  businessName: string
  photo: string
  story: string
  slug: string
  location: string
  whatsapp: string
}

export interface Category {
  id: string
  name: string
  slug: string
}
