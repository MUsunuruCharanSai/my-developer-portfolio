import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SmoothScroll from "./components/SmoothScroll"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MUSUNURU CHARAN SAI - Portfolio",
  description: "MERN Stack Developer | Full Stack Developer",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900 overflow-x-hidden`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <SmoothScroll />
      </body>
    </html>
  )
}
