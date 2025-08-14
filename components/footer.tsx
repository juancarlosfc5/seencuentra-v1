import Link from "next/link"
import { Facebook, Instagram, Twitter, Heart } from "lucide-react"

export function Footer() {
  const sponsors = [
    { name: "Sponsor 1", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Sponsor 2", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Sponsor 3", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Sponsor 4", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sponsors Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gris-suave mb-6 text-center">Nuestros Aliados</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex items-center">
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-rojo-calido lowercase">seencuentra.com</span>
            </Link>
            <p className="text-gris-suave text-sm leading-relaxed">
              Conectando emprendedores con sus comunidades. Una vitrina digital gratuita para pequeños artesanos y
              creadores locales.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gris-suave hover:text-rojo-calido transition-colors text-sm">
                Tienda
              </Link>
              <Link
                href="/quienes-somos"
                className="block text-gris-suave hover:text-rojo-calido transition-colors text-sm"
              >
                Quiénes somos
              </Link>
              <Link
                href="/historias-emprendedoras"
                className="block text-gris-suave hover:text-rojo-calido transition-colors text-sm"
              >
                Historias emprendedoras
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-gray-900 mb-4">Síguenos</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <Link href="#" className="text-gris-suave hover:text-rojo-calido transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gris-suave hover:text-rojo-calido transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gris-suave hover:text-rojo-calido transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gris-suave text-sm mb-4 md:mb-0">
              © 2024 seencuentra.com. Todos los derechos reservados.
            </p>
            <div className="flex items-center text-gris-suave text-sm">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 mx-1 text-rojo-calido fill-current" />
              <span>para emprendedores</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
