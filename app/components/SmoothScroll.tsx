"use client"

import { useEffect } from "react"

const SmoothScroll = () => {
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a")
      if (!anchor?.hash) return

      const targetElement = document.querySelector(anchor.hash)
      if (!targetElement) return

      e.preventDefault()
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }

    document.addEventListener("click", smoothScroll)

    return () => {
      document.removeEventListener("click", smoothScroll)
    }
  }, [])

  return null
}

export default SmoothScroll
