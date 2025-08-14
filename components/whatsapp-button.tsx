"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  phoneNumber: string
  productName: string
  entrepreneurName: string
}

export function WhatsAppButton({ phoneNumber, productName, entrepreneurName }: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `¡Hola ${entrepreneurName}! Me interesa tu producto "${productName}" que vi en seencuentra.com. ¿Podrías darme más información?`,
    )
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="w-full bg-verde-natural hover:bg-green-600 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
      size="lg"
    >
      <MessageCircle className="h-6 w-6 mr-3" />
      Contactar por WhatsApp
    </Button>
  )
}
