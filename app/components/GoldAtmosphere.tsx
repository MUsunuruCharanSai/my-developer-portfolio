"use client"

import { useEffect, useRef } from "react"

const GoldAtmosphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let frame = 0
    let raf = 0
    let running = true

    const particles = Array.from({ length: 42 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.4,
      s: Math.random() * 0.18 + 0.04,
      a: Math.random() * 0.45 + 0.12,
      drift: Math.random() * Math.PI * 2,
    }))

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      if (!running) return
      const { innerWidth: w, innerHeight: h } = window
      ctx.clearRect(0, 0, w, h)
      frame += 1

      particles.forEach((p) => {
        p.y -= p.s * 0.35
        p.x += Math.sin(frame * 0.004 + p.drift) * 0.00035
        if (p.y < -0.02) {
          p.y = 1.02
          p.x = Math.random()
        }

        const x = p.x * w
        const y = p.y * h
        const glow = ctx.createRadialGradient(x, y, 0, x, y, p.r * 8)
        glow.addColorStop(0, `rgba(255, 236, 179, ${p.a})`)
        glow.addColorStop(0.4, `rgba(232, 197, 71, ${p.a * 0.45})`)
        glow.addColorStop(1, "rgba(212, 175, 55, 0)")
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(x, y, p.r * 8, 0, Math.PI * 2)
        ctx.fill()
      })

      raf = window.requestAnimationFrame(draw)
    }

    const onVisibility = () => {
      running = document.visibilityState === "visible"
      if (running) raf = window.requestAnimationFrame(draw)
      else window.cancelAnimationFrame(raf)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    document.addEventListener("visibilitychange", onVisibility)

    return () => {
      running = false
      window.cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70"
    />
  )
}

export default GoldAtmosphere
