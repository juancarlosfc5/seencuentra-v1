import type React from "react"
import { Header } from "./header"
import { Footer } from "./footer"

interface LayoutProps {
  children: React.ReactNode
  currentPage?: string
}

export function Layout({ children, currentPage }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
