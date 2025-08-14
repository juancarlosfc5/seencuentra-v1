import { Layout } from "@/components/layout"
import { EntrepreneurCard } from "@/components/entrepreneur-card"
import { entrepreneurs } from "@/lib/data"

export default function HistoriasEmprendedorasPage() {
  return (
    <Layout currentPage="historias">
      <div className="bg-blanco-marfil min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-azul-verdoso to-verde-natural text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Historias que <span className="text-yellow-200">Inspiran</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Conoce a los artesanos y emprendedores que dan vida a cada producto. Cada historia es única, cada creación
              tiene un propósito, cada emprendedor tiene un sueño.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-lg font-semibold">Tradición Ancestral</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-lg font-semibold">Pasión Artesanal</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-lg font-semibold">Impacto Social</span>
              </div>
            </div>
          </div>
        </section>

        {/* Entrepreneurs Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Emprendedores</h2>
              <p className="text-lg text-gris-suave max-w-3xl mx-auto">
                Cada emprendedor tiene una historia única que contar. Descubre las personas detrás de los productos que
                amas y conecta con sus historias de superación, tradición y creatividad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {entrepreneurs.map((entrepreneur) => (
                <EntrepreneurCard key={entrepreneur.id} entrepreneur={entrepreneur} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Eres emprendedor?</h2>
            <p className="text-lg text-gris-suave mb-8 leading-relaxed">
              Únete a nuestra comunidad de artesanos y emprendedores. Comparte tu historia, muestra tus productos y
              conecta directamente con clientes que valoran lo auténtico y lo hecho con amor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-rojo-calido hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Registrar mi negocio
              </button>
              <button className="border-2 border-rojo-calido text-rojo-calido hover:bg-rojo-calido hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Más información
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
