"use client"

import { useState, useMemo } from "react"
import { Layout } from "@/components/layout"
import { ProductCard } from "@/components/product-card"
import { SearchFilters } from "@/components/search-filters"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ReviewForm } from "@/components/review-form"
import { products } from "@/lib/data"
import type { Product } from "@/types"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000])

  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.entrepreneur.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      const matchesLocation = !selectedLocation || product.location === selectedLocation
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

      return matchesSearch && matchesCategory && matchesLocation && matchesPrice
    })
  }, [searchQuery, selectedCategory, selectedLocation, priceRange])

  return (
    <Layout currentPage="tienda">
      <div className="bg-blanco-marfil min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-rojo-calido to-naranja-mostaza text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Descubre lo <span className="text-yellow-200">Auténtico</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Conecta directamente con emprendedores locales y descubre productos únicos llenos de historia y tradición
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-lg font-semibold">+{products.length} Productos Únicos</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-lg font-semibold">Sin Comisiones</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-lg font-semibold">Contacto Directo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SearchFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedLocation={selectedLocation}
              onLocationChange={setSelectedLocation}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
            />
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Productos Artesanales</h2>
              <p className="text-gris-suave">
                {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""} encontrado
                {filteredProducts.length !== 1 ? "s" : ""}
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No encontramos productos</h3>
                <p className="text-gris-suave">Intenta ajustar tus filtros de búsqueda</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Review Form Section */}
        <ReviewForm />
      </div>
    </Layout>
  )
}
