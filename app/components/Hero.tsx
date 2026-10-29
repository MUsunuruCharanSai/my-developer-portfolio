import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen scroll-mt-24 items-center pt-28 pb-20">
      <div className="page-wrap grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="animate-fade-in-up mb-6 inline-flex items-center rounded-full border border-[#e8c547]/35 bg-[#e8c547]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e8c547]">
            Software Engineer at Volteo Maritime
          </p>

          <h1 className="animate-fade-in-up font-display text-5xl font-semibold leading-[1.08] tracking-tight text-[#f7f1e4] sm:text-6xl lg:text-7xl">
            MUSUNURU
            <span className="mt-1 block bg-gradient-to-r from-[#fff1b8] via-[#e8c547] to-[#b8860b] bg-clip-text text-transparent">
              CHARAN SAI
            </span>
          </h1>

          <p className="animate-fade-in-up animation-delay-300 mt-5 text-lg tracking-wide text-[#e8c547] sm:text-xl">
            MERN Stack Developer | Full Stack Developer
          </p>

          <p className="animate-fade-in-up animation-delay-300 mx-auto mt-6 max-w-2xl text-base leading-8 text-[#d8ccb4] sm:text-lg lg:mx-0">
            Building scalable web products with React, Node.js, and a focus on performance, reliability, and a polished
            user experience.
          </p>

          <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link href="#projects" scroll={false} className="btn-gold h-12">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="#contact" scroll={false} className="btn-outline-gold h-12">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative w-full max-w-[18rem] sm:max-w-[22rem] lg:max-w-[24rem]">
            <div className="absolute -inset-8 rounded-[2.2rem] bg-[radial-gradient(circle,rgba(232,197,71,0.28),transparent_68%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#e8c547]/55 bg-gradient-to-br from-[#fff1b8]/25 via-[#d4af37]/10 to-[#8a6914]/20 p-[5px] shadow-[0_0_48px_rgba(212,175,55,0.28)]">
              <div className="relative aspect-square overflow-hidden rounded-[1.4rem] bg-[#070604]">
                <Image
                  src="/images/charan-sai-portrait.jpg"
                  alt="MUSUNURU CHARAN SAI"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 448px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070604]/35 via-transparent to-[#e8c547]/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
