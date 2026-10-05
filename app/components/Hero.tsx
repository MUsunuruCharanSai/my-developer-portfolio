import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-gray-800 dark:to-gray-900 px-4 py-16 sm:py-20"
    >
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-6 sm:mb-8 rounded-full overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-21_074232-transformed%20(1)-compressed.png-OKGosQWV9ZcBjeJvvtSGETvViii5Fv.jpeg"
            alt="MUSUNURU CHARAN SAI"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
          MUSUNURU CHARAN SAI
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 animate-fade-in-up animation-delay-300 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 max-w-3xl mx-auto">
          MERN Stack Developer | Full Stack Developer
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto animate-fade-in-up animation-delay-600">
          <Button
            asChild
            size="lg"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            <Link href="#projects" scroll={false} className="flex items-center justify-center">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-2 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300"
          >
            <Link href="#contact" scroll={false} className="flex items-center justify-center">
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
