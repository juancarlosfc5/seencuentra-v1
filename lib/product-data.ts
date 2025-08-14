import type { ProductDetail, ProductReview } from "@/types"
import { products } from "./data"

// Mock detailed product data
const productReviews: Record<string, ProductReview[]> = {
  "1": [
    {
      id: "r1",
      userName: "Ana María",
      rating: 5,
      comment: "Hermoso collar, la calidad de la plata es excelente y el diseño es único. María es muy profesional.",
      date: "2024-01-20",
    },
    {
      id: "r2",
      userName: "Carlos Ruiz",
      rating: 4,
      comment: "Muy buen producto, llegó bien empacado y en el tiempo prometido. Lo recomiendo.",
      date: "2024-01-15",
    },
  ],
  "2": [
    {
      id: "r3",
      userName: "Sofía López",
      rating: 5,
      comment: "La mochila wayuu es preciosa, los colores son vibrantes y la calidad del tejido es impecable.",
      date: "2024-01-18",
    },
  ],
  "3": [
    {
      id: "r4",
      userName: "Miguel Torres",
      rating: 5,
      comment: "El mejor café que he probado, se nota que es orgánico y de alta calidad. Excelente servicio.",
      date: "2024-01-22",
    },
  ],
}

const productDescriptions: Record<string, string> = {
  "1": "Collar artesanal elaborado en plata 925 con técnicas ancestrales transmitidas de generación en generación. Cada pieza es única y cuenta con un diseño exclusivo inspirado en la tradición orfebre colombiana. Perfecto para ocasiones especiales o uso diario.",
  "2": "Mochila wayuu tejida a mano por artesanas de La Guajira siguiendo patrones tradicionales. Los colores y símbolos representan elementos de la cosmogonía wayuu. Cada mochila toma aproximadamente 20 días en completarse y es una pieza única e irrepetible.",
  "3": "Café 100% orgánico cultivado en las montañas del Huila a más de 1,800 metros sobre el nivel del mar. Proceso de secado natural al sol y tostado artesanal que resalta las notas frutales y el aroma característico de nuestros granos especiales.",
  "4": "Hamaca artesanal tejida con fibras naturales de algodón, siguiendo técnicas tradicionales de la costa atlántica. Resistente y cómoda, perfecta para descansar al aire libre. Los colores vibrantes están inspirados en los atardeceres caribeños.",
  "5": "Mermelada artesanal elaborada con frutas exóticas del Valle del Cauca como lulo, maracuyá y guayaba. Sin conservantes artificiales, endulzada naturalmente. Proceso tradicional que conserva el sabor auténtico de nuestras frutas tropicales.",
  "6": "Pieza de cerámica decorativa elaborada con arcilla de Boyacá y técnicas de alfarería tradicional. Cada pieza es moldeada y pintada a mano, con diseños únicos inspirados en la flora y fauna colombiana. Perfecta para decorar cualquier espacio.",
  "7": "Sombrero vueltiao auténtico tejido con fibra de caña flecha por artesanos de Córdoba. Símbolo cultural de Colombia, cada sombrero lleva el sello de calidad y tradición. Disponible en diferentes números de vueltas según la complejidad del tejido.",
  "8": "Aretes elaborados con semillas de tagua, conocida como 'marfil vegetal'. Tallados y pulidos a mano con diseños únicos. La tagua es un material sostenible que proviene de las palmas de la costa pacífica colombiana.",
}

const whatsappNumbers: Record<string, string> = {
  "1": "+573001234567",
  "2": "+573007654321",
  "3": "+573009876543",
  "4": "+573005555555",
  "5": "+573006666666",
  "6": "+573007777777",
  "7": "+573008888888",
  "8": "+573009999999",
}

export function getProductDetails(productId: string): ProductDetail {
  const product = products.find((p) => p.id === productId)
  if (!product) {
    throw new Error(`Product with id ${productId} not found`)
  }

  // Get related products from same category, excluding current product
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== productId).slice(0, 4)

  return {
    ...product,
    description: productDescriptions[productId] || "Descripción no disponible.",
    whatsapp: whatsappNumbers[productId] || "+573000000000",
    totalReviews: product.reviewCount,
    reviews: productReviews[productId] || [],
    relatedProducts,
  }
}
