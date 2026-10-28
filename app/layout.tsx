import type React from "react"
import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SmoothScroll from "./components/SmoothScroll"
import GoldAtmosphere from "./components/GoldAtmosphere"

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], display: "swap", variable: "--font-display" })

export const metadata = {
  title: "MUSUNURU CHARAN SAI - Portfolio",
  description: "MERN Stack Developer | Full Stack Developer",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} bg-[#070604] text-[#e9dfc8] overflow-x-hidden`}>
        <GoldAtmosphere />
        <div className="relative z-10">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
        <SmoothScroll />
      </body>
    </html>
  )
}
