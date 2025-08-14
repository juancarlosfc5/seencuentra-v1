"use client"

import type React from "react"

import { useState } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, MessageCircle, Send } from "lucide-react"
import { Layout } from "@/components/layout"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { entrepreneurs, products } from "@/lib/data"
import { getEntrepreneurDetails } from "@/lib/entrepreneur-data"

interface EntrepreneurPageProps {
  params: {
    slug: string
  }
}

export default function EntrepreneurPage({ params }: EntrepreneurPageProps) {
  const [imageError, setImageError] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const entrepreneur = entrepreneurs.find((e) => e.slug === params.slug)

  if (!entrepreneur) {
    notFound()
  }

  const entrepreneurDetails = getEntrepreneurDetails(entrepreneur.id)
  const entrepreneurProducts = products.filter((p) => p.entrepreneur === entrepreneur.name)

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "¡Mensaje enviado!",
      description: "Tu mensaje ha sido enviado al emprendedor exitosamente.",
    })

    // Reset form
    setContactForm({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <Layout>
      <div className="bg-blanco-marfil min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/historias-emprendedoras"
              className="inline-flex items-center text-gris-suave hover:text-rojo-calido transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a historias emprendedoras
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-naranja-mostaza to-rojo-calido text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold">{entrepreneur.name}</h1>
                <h2 className="text-2xl font-medium text-yellow-200">{entrepreneur.businessName}</h2>
                <div className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5" />
                  <span>{entrepreneur.location}</span>
                </div>
                <p className="text-xl leading-relaxed opacity-90">{entrepreneurDetails.shortDescription}</p>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 relative rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                    <Image
                      src={imageError ? "/placeholder.svg?height=400&width=400" : entrepreneur.photo}
                      alt={entrepreneur.name}
                      fill
                      className="object-cover"
                      onError={() => setImageError(true)}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Story Section */}
              <Card className="bg-white border-gray-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Mi Historia</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="space-y-4 text-gris-suave leading-relaxed">
                    {entrepreneurDetails.fullStory.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Process Section */}
              <Card className="bg-white border-gray-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Mi Proceso Creativo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gris-suave leading-relaxed">
                    {entrepreneurDetails.creativeProcess.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Products Section */}
              {entrepreneurProducts.length > 0 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Mis Productos</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {entrepreneurProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="bg-white border-gray-100 sticky top-8">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Contactar
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <WhatsAppButton
                    phoneNumber={entrepreneur.whatsapp}
                    productName="productos artesanales"
                    entrepreneurName={entrepreneur.name}
                  />

                  <div className="text-center text-sm text-gris-suave">o</div>

                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="contactName" className="text-sm font-medium text-gray-900">
                        Tu nombre
                      </label>
                      <Input
                        id="contactName"
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Ingresa tu nombre"
                        className="border-gray-200 focus:border-rojo-calido focus:ring-rojo-calido"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contactEmail" className="text-sm font-medium text-gray-900">
                        Tu email
                      </label>
                      <Input
                        id="contactEmail"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="tu@email.com"
                        className="border-gray-200 focus:border-rojo-calido focus:ring-rojo-calido"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contactMessage" className="text-sm font-medium text-gray-900">
                        Tu mensaje
                      </label>
                      <Textarea
                        id="contactMessage"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Escribe tu mensaje..."
                        rows={4}
                        className="border-gray-200 focus:border-rojo-calido focus:ring-rojo-calido resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-rojo-calido hover:bg-red-600 text-white"
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
