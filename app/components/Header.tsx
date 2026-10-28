"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen((open) => !open)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsMenuOpen(false)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "border-b border-[#d4af37]/25 bg-[#070604]/85 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="page-wrap flex h-[4.5rem] items-center justify-between">
        <Link
          href="#home"
          scroll={false}
          className="font-display text-[16px] font-semibold tracking-[0.14em] text-[#f7f1e4]"
        >
          CHARAN SAI
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={false}
              className="rounded-md px-2.5 py-1.5 text-[12px] tracking-[0.14em] uppercase text-[#cfc3ab] transition-colors hover:text-[#e8c547]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="rounded-md p-2 text-[#e9dfc8] transition-colors hover:bg-[#e8c547]/10 hover:text-[#e8c547] lg:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-b border-[#d4af37]/20 bg-[#070604]/95 lg:hidden ${isMenuOpen ? "block" : "hidden"}`}
      >
        <nav className="page-wrap flex flex-col py-3" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={false}
              onClick={closeMenu}
              className="rounded-md px-3 py-3 text-base text-[#e9dfc8] transition-colors hover:bg-[#e8c547]/10 hover:text-[#e8c547]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
