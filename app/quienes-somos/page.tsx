import Image from "next/image"
import { Heart, Users, Target, Award, Handshake, Globe } from "lucide-react"
import { Layout } from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"

export default function QuienesSomosPage() {
  const values = [
    {
      icon: Heart,
      title: "Pasión por lo Auténtico",
      description:
        "Creemos en el poder de lo hecho a mano, en las historias que cada producto cuenta y en la conexión humana que se crea entre artesano y cliente.",
    },
    {
      icon: Users,
      title: "Comunidad Emprendedora",
      description:
        "Somos más que una plataforma, somos una familia que apoya, impulsa y celebra el talento de nuestros emprendedores locales.",
    },
    {
      icon: Target,
      title: "Impacto Social",
      description:
        "Cada compra genera un impacto positivo directo en las comunidades artesanales, preservando tradiciones y generando oportunidades.",
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description:
        "Trabajamos solo con artesanos comprometidos con la excelencia, asegurando que cada producto cumpla con los más altos estándares.",
    },
  ]

  const team = [
    {
      name: "Ana Sofía Martínez",
      role: "Fundadora & CEO",
      image: "/placeholder.svg?height=300&width=300",
      description: "Apasionada por el emprendimiento social y las tradiciones artesanales colombianas.",
    },
    {
      name: "Carlos Mendoza",
      role: "Director de Comunidad",
      image: "/placeholder.svg?height=300&width=300",
      description: "Especialista en desarrollo comunitario con 10 años apoyando emprendedores rurales.",
    },
    {
      name: "María Elena Vargas",
      role: "Coordinadora de Artesanos",
      image: "/placeholder.svg?height=300&width=300",
      description: "Artesana textil con experiencia en preservación de técnicas ancestrales.",
    },
    {
      name: "Diego Ramírez",
      role: "Director de Tecnología",
      image: "/placeholder.svg?height=300&width=300",
      description: "Desarrollador comprometido con crear tecnología que conecte personas y tradiciones.",
    },
  ]

  const stats = [
    { number: "500+", label: "Emprendedores Activos" },
    { number: "2,000+", label: "Productos Únicos" },
    { number: "15,000+", label: "Clientes Satisfechos" },
    { number: "18", label: "Departamentos" },
  ]

  return (
    <Layout currentPage="quienes-somos">
      <div className="bg-blanco-marfil min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-rojo-calido to-naranja-mostaza text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Somos <span className="text-yellow-200">seencuentra.com</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Una plataforma creada con amor para conectar el talento artesanal colombiano con personas que valoran lo
              auténtico, lo único y lo hecho con el corazón.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestra Misión</h2>
                <div className="space-y-4 text-lg text-gris-suave leading-relaxed">
                  <p>
                    Creemos que detrás de cada producto artesanal hay una historia que merece ser contada, una tradición
                    que debe ser preservada y un emprendedor que merece ser apoyado.
                  </p>
                  <p>
                    Nuestra misión es crear un puente digital entre los talentosos artesanos de Colombia y las personas
                    que buscan productos únicos, auténticos y llenos de significado.
                  </p>
                  <p>
                    No cobramos comisiones porque creemos que el valor debe ir directamente a quienes crean con sus
                    manos. Facilitamos la conexión, pero el beneficio es completamente para nuestros emprendedores.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/colombian-artisans-workshop.png"
                    alt="Artesanos colombianos trabajando juntos"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-naranja-mostaza text-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">0%</div>
                    <div className="text-sm">Comisiones</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-blanco-marfil">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
              <p className="text-lg text-gris-suave max-w-3xl mx-auto">
                Los principios que guían cada decisión que tomamos y cada relación que construimos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-white border-gray-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-rojo-calido/10 p-3 rounded-lg">
                        <value.icon className="h-6 w-6 text-rojo-calido" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                        <p className="text-gris-suave leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-verde-natural to-azul-verdoso text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nuestro Impacto</h2>
              <p className="text-xl opacity-90">Números que reflejan nuestra comunidad creciente</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
              <p className="text-lg text-gris-suave max-w-3xl mx-auto">
                Un grupo diverso de profesionales unidos por la pasión de apoyar el emprendimiento artesanal colombiano
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="bg-blanco-marfil border-gray-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="aspect-square relative rounded-full overflow-hidden mx-auto mb-4 w-32 h-32">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-rojo-calido font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-gris-suave leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-blanco-marfil">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/colombian-artisan-market.png"
                    alt="Mercado artesanal colombiano"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestra Visión</h2>
                <div className="space-y-4 text-lg text-gris-suave leading-relaxed">
                  <p>
                    Soñamos con un Colombia donde cada artesano tenga la oportunidad de compartir su talento con el
                    mundo, donde las tradiciones ancestrales se mantengan vivas y donde la tecnología sirva para unir
                    corazones y preservar culturas.
                  </p>
                  <p>
                    Queremos ser el puente que conecte la sabiduría ancestral con las necesidades contemporáneas,
                    creando un ecosistema sostenible donde todos ganen: artesanos, clientes y comunidades.
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <div className="bg-rojo-calido/10 p-3 rounded-lg">
                    <Globe className="h-6 w-6 text-rojo-calido" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Impacto Global</h3>
                    <p className="text-gris-suave">Llevando lo mejor de Colombia al mundo entero</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-verde-natural/10 p-3 rounded-lg">
                    <Handshake className="h-6 w-6 text-verde-natural" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Comercio Justo</h3>
                    <p className="text-gris-suave">Garantizando precios justos y relaciones equitativas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-rojo-calido to-naranja-mostaza text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Únete a Nuestra Misión</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Ya seas artesano, cliente o simplemente alguien que cree en el poder de lo auténtico, hay un lugar para ti
              en nuestra comunidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-rojo-calido hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Soy Emprendedor
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-rojo-calido px-8 py-3 rounded-lg font-semibold transition-colors">
                Quiero Comprar
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
