"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useMediaQuery } from "@/hooks/use-media-query"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Close menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
        >
          CHARAN SAI
        </Link>

        <div className="flex items-center">
          <nav className="hidden md:flex space-x-1 lg:space-x-6">
            <NavLink href="#home" label="Home" />
            <NavLink href="#about" label="About" />
            <NavLink href="#skills" label="Skills" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#contact" label="Contact" />
          </nav>

          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "60px" }}
      >
        <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
          <NavLink href="#home" label="Home" onClick={closeMenu} isMobile={true} />
          <NavLink href="#about" label="About" onClick={closeMenu} isMobile={true} />
          <NavLink href="#skills" label="Skills" onClick={closeMenu} isMobile={true} />
          <NavLink href="#projects" label="Projects" onClick={closeMenu} isMobile={true} />
          <NavLink href="#contact" label="Contact" onClick={closeMenu} isMobile={true} />
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/20 z-30" onClick={closeMenu} style={{ top: "60px" }} />
      )}
    </header>
  )
}

const NavLink = ({
  href,
  label,
  onClick,
  isMobile = false,
}: {
  href: string
  label: string
  onClick?: () => void
  isMobile?: boolean
}) => {
  if (isMobile) {
    return (
      <Link
        href={href}
        scroll={false}
        className="text-xl font-medium py-2 hover:text-blue-600 transition duration-300"
        onClick={onClick}
      >
        {label}
      </Link>
    )
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Link
          href={href}
          scroll={false}
          className="px-3 py-2 text-sm lg:text-base font-medium hover:text-blue-600 transition duration-300"
          onClick={onClick}
        >
          {label}
        </Link>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <p className="text-sm">{`Learn more about ${label.toLowerCase()}.`}</p>
      </PopoverContent>
    </Popover>
  )
}

export default Header
