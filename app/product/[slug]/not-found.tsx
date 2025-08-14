import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-blanco-marfil flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="text-8xl">🔍</div>
        <h1 className="text-3xl font-bold text-gray-900">Producto no encontrado</h1>
        <p className="text-gris-suave max-w-md">
          Lo sentimos, el producto que buscas no existe o ha sido removido de nuestra tienda.
        </p>
        <Link href="/">
          <Button className="bg-rojo-calido hover:bg-red-600 text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a la tienda
          </Button>
        </Link>
      </div>
    </div>
  )
}
