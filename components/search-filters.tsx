"use client"

import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { categories } from "@/lib/data"

interface SearchFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedCategory: string
  onCategoryChange: (category: string) => void
  selectedLocation: string
  onLocationChange: (location: string) => void
  priceRange: [number, number]
  onPriceRangeChange: (range: [number, number]) => void
}

export function SearchFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedLocation,
  onLocationChange,
  priceRange,
  onPriceRangeChange,
}: SearchFiltersProps) {
  const locations = ["Bogotá", "La Guajira", "Huila", "Atlántico", "Valle del Cauca", "Boyacá", "Córdoba", "Nariño"]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const clearFilters = () => {
    onSearchChange("")
    onCategoryChange("all")
    onLocationChange("all")
    onPriceRangeChange([0, 200000])
  }

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gris-suave h-4 w-4" />
        <Input
          type="text"
          placeholder="Buscar productos o emprendedores..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 h-12 text-base border-gray-200 focus:border-rojo-calido focus:ring-rojo-calido"
        />
      </div>

      {/* Filters Row */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex items-center gap-2 text-sm font-medium text-gris-suave">
          <Filter className="h-4 w-4" />
          <span>Filtros:</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Category Filter */}
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Todas las categorías" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las categorías</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.name}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Location Filter */}
          <Select value={selectedLocation} onValueChange={onLocationChange}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Todas las ubicaciones" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las ubicaciones</SelectItem>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Price Range */}
          <div className="flex-1 min-w-48">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gris-suave">
                <span>Precio:</span>
                <span>
                  {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                </span>
              </div>
              <Slider
                value={priceRange}
                onValueChange={(value) => onPriceRangeChange(value as [number, number])}
                max={200000}
                min={0}
                step={5000}
                className="w-full"
              />
            </div>
          </div>

          {/* Clear Filters */}
          <Button
            variant="outline"
            onClick={clearFilters}
            className="whitespace-nowrap border-gray-200 hover:border-rojo-calido hover:text-rojo-calido bg-transparent"
          >
            Limpiar filtros
          </Button>
        </div>
      </div>
    </div>
  )
}
