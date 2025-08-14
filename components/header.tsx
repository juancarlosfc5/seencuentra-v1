"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  currentPage?: string
}

export function Header({ currentPage = "tienda" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Tienda", href: "/", id: "tienda" },
    { name: "Quiénes somos", href: "/quienes-somos", id: "quienes-somos" },
    { name: "Historias emprendedoras", href: "/historias-emprendedoras", id: "historias" },
  ]

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-rojo-calido lowercase tracking-tight">seencuentra.com</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-rojo-calido ${
                  currentPage === item.id ? "text-rojo-calido border-b-2 border-rojo-calido pb-1" : "text-gris-suave"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gris-suave hover:text-rojo-calido"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-rojo-calido hover:bg-blanco-marfil rounded-md ${
                    currentPage === item.id ? "text-rojo-calido bg-blanco-marfil" : "text-gris-suave"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
